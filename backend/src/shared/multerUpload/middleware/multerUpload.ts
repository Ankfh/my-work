import multer, { MulterError } from "multer";
import path from "path";
import { Request, Response, NextFunction } from "express";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";

// Ensure the upload directory exists
const ensureDirExists = (dir: string) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Define storage with unique filenames
const getMulterStorage = (folderName: string) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadPath = path.join(process.cwd(), "media", folderName);
      ensureDirExists(uploadPath);
      cb(null, uploadPath);
    },
    filename: (req, file, cb) => {
      const uniqueName = `${uuidv4()}${path.extname(file.originalname)}`;
      cb(null, uniqueName);
    },
  });

// Only accept specific file types
const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Invalid file type. Only JPEG and PNG are allowed."));
  }
};

// Create multer instance with limits
const getMulterMiddleware = (folder: string) =>
  multer({
    storage: getMulterStorage(folder),
    fileFilter,
    limits: {
      fileSize: 5 * 1024 * 1024, // 5 MB
    },
  });

/**
 * Middleware for optional single file upload.
 * Only runs multer if file is included in the request.
 */
export const singleUpload =
  (fieldName: string, folder: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    const contentType = req.headers["content-type"] || "";
    if (!contentType.includes("multipart/form-data")) {
      return next(); // No file in request, skip multer
    }

    const upload = getMulterMiddleware(folder).single(fieldName);
    upload(req, res, (err: any) => {
      if (err instanceof MulterError || err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  };

/**
 * Middleware for optional multiple file upload.
 * Only runs multer if files are included in the request.
 */
export const multiUpload =
  (fieldName: string, maxCount: number, folder: string) =>
  (req: Request, res: Response, next: NextFunction) => {
    const contentType = req.headers["content-type"] || "";
    if (!contentType.includes("multipart/form-data")) {
      return next(); // No files, skip multer
    }

    const upload = getMulterMiddleware(folder).array(fieldName, maxCount);
    upload(req, res, (err: any) => {
      if (err instanceof MulterError || err) {
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  };
