import { Request, Response, NextFunction } from "express";
import { zeeController } from '../controller/zeeController';


export class Routes {
    private zee: zeeController = new zeeController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/zee').put(this.zee.GpUpdate);
app.route('/zee/:id').delete(this.zee.GpDelete);
app.route('/zee/:id').get(this.zee.GpGetNounById);
app.route('/zee').post(this.zee.GpCreate);
app.route('/zee/get/search').get(this.zee.GpSearch);
app.route('/zee').get(this.zee.GpGetAllValues);
app.route('/zee/get/update').put(this.zee.GpSearchForUpdate);
     }

}