const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const formSchema = new Schema(
  {
    company_name: { type: String, required: true },
    company_code: {type: String, required: true},
    currency: {type: String, required: true},
    portal_language: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    country: {type: String, required: true},   
    add_info: {type: String, required: true},
    pincode: {type: Number, required: true},
  },
{
    timestamps: true,
});

const Form = mongoose.model('form',formSchema);

module.exports = Form;