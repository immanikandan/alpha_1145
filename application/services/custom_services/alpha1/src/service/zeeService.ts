import { Request, Response } from 'express';
import {zeeDao} from '../dao/zeeDao';
import { CustomLogger } from '../config/Logger'
let zee = new zeeDao();

export class zeeService {
    
    constructor() { }
    
    public GpUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpUpdate')
     const  zeeData = req.body;
     zee.GpUpdate(zeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpUpdate')
         callback(response);
         });
    }
public GpDelete(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpDelete')
     const  zeeId = req.params.id;
     zee.GpDelete(zeeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpDelete')
         callback(response);
         });
    }
public GpGetNounById(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpGetNounById')
     const  zeeId = req.params.id;
     zee.GpGetNounById(zeeId,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpGetNounById')
         callback(response);
         });
    }
public GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpCreate')
     const  zeeData = req.body;
     zee.GpCreate(zeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpCreate')
         callback(response);
         });
    }
public GpSearch(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpSearch')
     const  zeeData = req.query;
     zee.GpSearch(zeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpSearch')
         callback(response);
         });
    }
public GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpGetAllValues')
     
     zee.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpGetAllValues')
         callback(response);
         });
    }
public GpSearchForUpdate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into zeeService.ts: GpSearchForUpdate')
     const  zeeData = req.body;
     zee.GpSearchForUpdate(zeeData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from zeeService.ts: GpSearchForUpdate')
         callback(response);
         });
    }


}