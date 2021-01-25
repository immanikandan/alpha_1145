import { Request, Response } from 'express';
import { zeeService } from '../service/zeeService';
import { CustomLogger } from '../config/Logger'
let zee = new zeeService();

export class zeeController {
    
    constructor() { }
    
    public GpUpdate(req: Request, res: Response) {
zee.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
zee.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpDelete');
    })}
public GpGetNounById(req: Request, res: Response) {
zee.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpGetNounById');
    })}
public GpCreate(req: Request, res: Response) {
zee.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpCreate');
    })}
public GpSearch(req: Request, res: Response) {
zee.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpSearch');
    })}
public GpGetAllValues(req: Request, res: Response) {
zee.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpGetAllValues');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
zee.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into zeeController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from zeeController.ts: GpSearchForUpdate');
    })}


}