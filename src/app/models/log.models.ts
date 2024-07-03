export type Logs = Log[];

export interface Log {
  _id: string;
  level: string;
  message: string;
  timestamp: string;
  __v: number;
}
