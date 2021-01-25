import * as express from 'express';
import { Request, Response } from 'express';
import * as Constant from '../config/Constant';
import { ApiAdaptar }  from '../config/apiAdapter';
import Controller from '../interface/controller.interface';
import { CustomLogger } from '../config/Logger'

export class zeeController implements Controller {
      public router = express.Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.put('/zee', this.GpUpdate);
this.router.delete('/zee/:id', this.GpDelete);
this.router.get('/zee/:id', this.GpGetNounById);
this.router.post('/zee', this.GpCreate);
this.router.get('/zee/get/search', this.GpSearch);
this.router.get('/zee', this.GpGetAllValues);
this.router.put('/zee/get/update', this.GpSearchForUpdate);
    }

public GpUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpUpdate');
        new ApiAdaptar().put(Constant.ALPHA1URL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpUpdate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpDelete(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpDelete');
        new ApiAdaptar().delete(Constant.ALPHA1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpDelete');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetNounById(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpGetNounById');
        new ApiAdaptar().get(Constant.ALPHA1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpGetNounById');
        }).catch(err => {
            res.send(err);
        });
    }
public GpCreate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpCreate');
        new ApiAdaptar().post(Constant.ALPHA1URL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpCreate');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearch(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpSearch');
        new ApiAdaptar().get(Constant.ALPHA1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpSearch');
        }).catch(err => {
            res.send(err);
        });
    }
public GpGetAllValues(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpGetAllValues');
        new ApiAdaptar().get(Constant.ALPHA1URL + `${req.url}` )
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpGetAllValues');
        }).catch(err => {
            res.send(err);
        });
    }
public GpSearchForUpdate(req: Request, res: Response) {
            new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpSearchForUpdate');
        new ApiAdaptar().put(Constant.ALPHA1URL + `${req.url}` , req.body)
        .then((res: any) => res.response.json()).then(result => {
              req.baseUrl === '/mobile' ? res.send(result) :
              req.baseUrl === '/desktop' ? res.send(result) : res.send(null)
            new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpSearchForUpdate');
        }).catch(err => {
            res.send(err);
        });
    }




}
