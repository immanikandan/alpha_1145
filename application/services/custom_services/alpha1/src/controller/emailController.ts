import { Request, Response } from 'express';
import { emailService } from '../service/emailService';
import { CustomLogger } from '../config/Logger'
let email = new emailService();

export class emailController {
    
    constructor() { }
    
    public GpUpdate(req: Request, res: Response) {
email.GpUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpUpdate');
    })}
public GpDelete(req: Request, res: Response) {
email.GpDelete(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpDelete');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpDelete');
    })}
public GpGetNounById(req: Request, res: Response) {
email.GpGetNounById(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpGetNounById');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpGetNounById');
    })}
public GpCreate(req: Request, res: Response) {
email.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpCreate');
    })}
public GpSearch(req: Request, res: Response) {
email.GpSearch(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpSearch');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpSearch');
    })}
public GpGetAllValues(req: Request, res: Response) {
email.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpGetAllValues');
    })}
public GpSearchForUpdate(req: Request, res: Response) {
email.GpSearchForUpdate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into emailController.ts: GpSearchForUpdate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from emailController.ts: GpSearchForUpdate');
    })}


}