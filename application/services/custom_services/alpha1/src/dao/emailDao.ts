import * as mongoose from 'mongoose';
import emailModel from '../models/email';
import { CustomLogger } from '../config/Logger'


export class emailDao {
    private email = emailModel;
    constructor() { }
public GpUpdate(emailData, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpUpdate')

this.email.findOneAndUpdate({ _id: emailData._id }, emailData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpDelete(emailId, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpDelete')

this.email.findByIdAndRemove(emailId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpDelete');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetNounById(emailId, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpGetNounById')

this.email.findById(emailId).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpGetNounById');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpCreate(emailData, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpCreate')
let temp = new emailModel(emailData);
;
temp.save().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpCreate');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearch(emailData, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpSearch')
let andkey ;let and_obj = {} ;let orkey ;let or_obj = {} ;;Object.entries(emailData).forEach(
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
this.email.find({$and: [
                        {
                            $or: [
                               or_obj
                            ]
                        },
                        and_obj
                    ]}).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpSearch');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpGetAllValues(callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpGetAllValues')

this.email.find().then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpGetAllValues');
callback(result);
}).catch((error)=>{
callback(error);
});}
public GpSearchForUpdate(emailData, callback){
new CustomLogger().showLogger('info', 'Enter into emailDao.ts: GpSearchForUpdate')

this.email.findOneAndUpdate({ _id: emailData._id }, emailData, { new: true }).then((result)	=>	{
new CustomLogger().showLogger('info', 'Exit from emailDao.ts: GpSearchForUpdate');
callback(result);
}).catch((error)=>{
callback(error);
});}


}