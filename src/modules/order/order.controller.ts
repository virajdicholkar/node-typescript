import { Get, Post, Delete, Put, Body, Param, Res, Req, JsonController, Authorized, CurrentUser, Controller } from 'routing-controllers';
import { Request, Response } from 'express';
import { TodoModel } from './order.model';
// @Authorized()
@JsonController('/api/order')
// @Controller()
export class ExamplesController {

    constructor(
    ) {

    }

    @Post('/')
    async list(@Res() response: Response, @Req() request: Request) {
        console.log('Post request');
        const description = request.body['description'];
        const data = await TodoModel.create({ description });
        console.log(data);
        return response.json({ data });
    }

}
