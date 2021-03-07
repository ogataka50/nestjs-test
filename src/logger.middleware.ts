// @ts-ignore
import {Injectable, NestMiddleware} from '@nestjs/common';
// @ts-ignore
import {NextFunction, Request, Response} from 'express';

// @ts-ignore
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log('Request...');
        next();
    }
}
