export class AppError extends Error {
  public readonly statusCode: number;
  public readonly status: string;

  constructor(message: string, statusCode: number) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    // Captures the stack trace and excludes constructor call
    Error.captureStackTrace(this, this.constructor);
  }
}
