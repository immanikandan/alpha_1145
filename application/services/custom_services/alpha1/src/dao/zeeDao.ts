import * as mongoose from 'mongoose';
import zeeModel from '../models/zee';
import { CustomLogger } from '../config/Logger'


export class zeeDao {
    private zee = zeeModel;
    constructor() { }
public GpUpdate(zeeData, callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpUpdate')

this.zee.findOneAndUpdate({ _id: zeeData._id }, zeeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(zeeId, callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpDelete')

this.zee.findByIdAndRemove(zeeId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(zeeId, callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpGetNounById')

this.zee.findById(zeeId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(zeeData, callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpCreate')
let temp = new zeeModel(zeeData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(zeeData, callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(zeeData).forEach(
                        ([key,value]) => {
                            if(value !== ''){
                                andkey = key;
                                and_obj[andkey] = value;
                            }
                            else{
                                orkey = key;
                                or_obj[orkey] = { $ne: '' }
                            }
                        }
                    );;
;
this.zee.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpGetAllValues')

this.zee.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(zeeData, callback){
new CustomLogger().showLogger('info', 'Enter into zeeDao.ts: GpSearchForUpdate')

this.zee.findOneAndUpdate({ _id: zeeData._id }, zeeData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from zeeDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}