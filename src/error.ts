import {APIErrorType} from './dtos/errors.js'

export class APIError extends Error {
    public readonly requestId: string;
    public readonly code: number;

    constructor(apiError: APIErrorType) {
        super(apiError.error);
        this.requestId = apiError.requestId;
        this.code = apiError.code;
        Error.captureStackTrace(this, APIError);
    }
}