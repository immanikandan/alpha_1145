
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const zeeSchema = new Schema({
   titile: String,
   description: String
})

const zeeModel = mongoose.model('zee', zeeSchema, 'zee');
export default zeeModel;