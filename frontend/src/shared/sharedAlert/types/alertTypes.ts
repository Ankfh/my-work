export type AlertSeverity = 'success' | 'error' | 'info' | 'warning';

export interface AlertOptions {
  message: string;
  severity?: AlertSeverity;
  duration?: number;
}
