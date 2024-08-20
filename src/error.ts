import {APIErrorType} from './dtos/errors.js'

export class APIError extends Error {
    public readonly requestId: string;
    public readonly code: number;
    public readonly statusCode: number;

    constructor(apiError: APIErrorType, statusCode: number) {
        super(apiError.error);
        this.requestId = apiError.requestId;
        this.code = apiError.code;
        this.statusCode = statusCode;
        Error.captureStackTrace(this, APIError);
    }
}