import { Request, Response, NextFunction } from "express";
import { emailController } from '../controller/emailController';


export class Routes {
    private email: emailController = new emailController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/email').put(this.email.GpUpdate);
app.route('/email/:id').delete(this.email.GpDelete);
app.route('/email/:id').get(this.email.GpGetNounById);
app.route('/email').post(this.email.GpCreate);
app.route('/email/get/search').get(this.email.GpSearch);
app.route('/email').get(this.email.GpGetAllValues);
app.route('/email/get/update').put(this.email.GpSearchForUpdate);
     }

}