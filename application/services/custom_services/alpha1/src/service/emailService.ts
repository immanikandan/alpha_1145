import { Request, Response } from 'express';
import {emailDao} from '../dao/emailDao';
import { CustomLogger } from '../config/Logger'
let email = new emailDao();

export class emailService {
    
    constructor() { }
    
    public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpUpdate')
     const  emailData = req.body;
     email.GpUpdate(emailData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpUpdate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpDelete')
     const  emailId = req.params.id;
     email.GpDelete(emailId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpDelete')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpGetNounById')
     const  emailId = req.params.id;
     email.GpGetNounById(emailId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpCreate')
     const  emailData = req.body;
     email.GpCreate(emailData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpSearch')
     const  emailData = req.query;
     email.GpSearch(emailData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpSearch')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpGetAllValues')
     
     email.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into emailService.ts: GpSearchForUpdate')
     const  emailData = req.body;
     email.GpSearchForUpdate(emailData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from emailService.ts: GpSearchForUpdate')
         callback(response);
         });
    }


}