import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios'
import formJSON from './dummy_payload_bkup.json';
import { Link } from 'react-router-dom';
import './forms.css'


export default function Home(){

    useEffect(() => {

        localStorage.removeItem('id')

        console.log(formJSON)

       
      }, [])
    
      const { register, handleSubmit, errors, watch } = useForm();
    
      const [companyname,setCompanyname] = useState('')
      const [companycode,setCompanycode] = useState('')
      const [currency,setCurrency] = useState('')
      const [portallanguage,setPortallanguage] = useState('')
      const [city,setCity] = useState('')
      const [state,setnewState] = useState('')
      const [country,setCountry] = useState('')
      const [addinfo,setAddinfo] = useState('')
      const [pincode,setPincode] = useState('')
    
      const onSubmit = ()=>{
    
        let form_data = {
            company_name: companyname,
            company_code: companycode,
            currency: currency,
            portal_language: portallanguage,
            city: city,
            state: state,
            country: country,
            add_info: addinfo,
            pincode: pincode
        }
    
        console.log(form_data)
    
       axios.post('https://souvikdynamicform.herokuapp.com/forms/add',form_data).then(res=>{
               alert('Form submitted successfully')
               window.location.reload()
       }).catch(error =>{
               console.log(error)
               alert('Form submission failed')
       })
      }
    
    
      function documentName() {
            let e = document.getElementById("exampleFormControlSelect1");
            let documentName = e.value;
            setCurrency(documentName);
          }



    return(
        <div className="App container">
             
  <form onSubmit={handleSubmit(onSubmit)}>

<div className="row">
<h2 >{formJSON.field[0].fieldData.sectionName}</h2>

  <div class="col-sm-10 col-md-6">
          <div class="input-group">
          
          <input
          name="company_name"
           type="text" 
           required
           value={companyname}
           className="form-control mb-3"   
           placeholder={formJSON.field[0].fieldData.fieldLabel} 
           onChange={(event) =>{
                   setCompanyname(event.target.value)
           }}
            
          />
          </div>
  </div>


  <div class="col-sm-10 col-md-6 indv">
          <div class="input-group">
          
          <input
           type="text"
           name="company_code"
           required 
           value={companycode}
           className="form-control mb-3"   
           placeholder={formJSON.field[1].fieldData.fieldLabel} 
           onChange={(event) =>{
                   setCompanycode(event.target.value)
           }}
              
          />
          </div>
  </div>

  <div class="col-sm-10 col-md-6 indv">
          <div class="input-group">
          
          <select required id="exampleFormControlSelect1" onClick={documentName} name="currency" className="form-select mb-3" aria-label="Default select example">
     <option selected disabled style={{color:'#fff'}}>{formJSON.field[2].fieldData.fieldLabel}</option>
     <option  value={'USD'}>{formJSON.field[2].fieldData.option[0].optionLabel}</option>
     <option value={'INR'}>{formJSON.field[2].fieldData.option[1].optionLabel}</option>
     <option value={'AUD'}>{formJSON.field[2].fieldData.option[2].optionLabel}</option>
    </select>
          </div>
  </div>
  <div class="col-sm-10 col-md-6 indv">
          <div class="input-group">
          
          <input
           type="text"
           name="portal_language"
           required 
           value={portallanguage}
           className="form-control mb-3"   
           placeholder={formJSON.field[3].fieldData.fieldLabel} 
           onChange={(event) =>{
                setPortallanguage(event.target.value)
        }}
            
          />
          </div>
  </div>
</div>

<div className="row">
<h2 >{formJSON.field[4].fieldData.sectionName}</h2>
    
    <div class="col-sm-10 col-md-6">
          <div class="input-group">
          
          <input
           type="text"
           name="city"
           required 
           value={city}
           className="form-control mb-3"   
           placeholder={formJSON.field[5].fieldData.fieldLabel} 
           onChange={(event) =>{
                setCity(event.target.value)
        }}
            
          />
          </div>
  </div>

  <div class="col-sm-10 col-md-6">
          <div class="input-group">
          
          <input
           type="text" 
           name="state"
           required
           value={state}
           className="form-control mb-3"   
           placeholder={formJSON.field[6].fieldData.fieldLabel} 
           onChange={(event) =>{
                setnewState(event.target.value)
        }}
            
          />
          </div>
  </div>

  <div class="col-sm-10 col-md-6">
          <div class="input-group">
          
          <input
           type="text"
           name="country" 
           required
           value={country}
           className="form-control mb-3"   
           placeholder={formJSON.field[7].fieldData.fieldLabel} 
           onChange={(event) =>{
                setCountry(event.target.value)
        }}
            
          />
          </div>
  </div>


</div>

<div className="row">
<h2 htmlFor="exampleInputEmail1">{formJSON.field[8].fieldData.sectionName}</h2>

<div class="col-sm-10 col-md-6">
          <div class="input-group">
          
          <input
           type="text"
           name="add_info" 
           required
           value={addinfo}
           className="form-control mb-3"   
           placeholder={formJSON.field[8].fieldData.sectionName}  
           onChange={(event) =>{
                setAddinfo(event.target.value)
        }}
            
          />
          </div>
  </div>
</div>

<div className="row">
<h2 htmlFor="exampleInputEmail1">{formJSON.field[10].fieldData.sectionName}</h2>

<div class="col-sm-10 col-md-6">
          <div class="input-group">
          
          <input
           type="number"
           name="pincode" 
           required
           value={pincode}
           className="form-control mb-3"   
           placeholder={formJSON.field[10].fieldData.fieldLabel}
           onChange={(event) =>{
                setPincode(event.target.value)
        }}
          />
          </div>
  </div>
</div>

  <button type="submit" className="btn btn-success" title="click to submit">Submit</button>
</form>
<br/>
<Link style={{color: 'white'}} to="/getforms"><button className="btn btn-primary" title="click to see submitted forms">Submitted Forms</button></Link>
            
           <br/>
  <p >Made by Souvik Das</p>     
        

      </div>
  
    )
}