import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { catchAsync } from 'catch-async-express';

export const testiranje = catchAsync(async (req: Request, res: Response): Promise<void> => {
     res.status(httpStatus.OK).json({
          message: 'cenga',
     });
});
