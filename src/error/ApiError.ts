export default class ApiError extends Error {
    public readonly status: number;
    constructor(message: string, status: number) {
        super(message);
        this.status = status;
    }
    static isApiError(error: Error): error is ApiError {
        if (error instanceof ApiError) {
            return true;
        }
        return false;
    }
    static NotFound() {
        return new ApiError("Not Found", 404);
    }
}
