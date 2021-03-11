import React,{useState,useEffect} from "react"
// import "./Addmodal.css"
import { useForm } from "react-hook-form";
import axios from "axios";
import formJSON from './dummy_payload_bkup.json';



function UpdateForm(props){

  const { register, handleSubmit, errors } = useForm();
  const [companyname,setCompanyname] = useState('')
  const [companycode,setCompanycode] = useState('')
  const [currency,setCurrency] = useState('')
  const [portallanguage,setPortallanguage] = useState('')
  const [city,setCity] = useState('')
  const [state,setnewState] = useState('')
  const [country,setCountry] = useState('')
  const [addinfo,setAddinfo] = useState('')
  const [pincode,setPincode] = useState('')

  const [change, setChange] = useState(false);


  
  const onSubmit=()=>{
    
    let id = localStorage.getItem('id')
    


    const update_data={
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

    console.log(update_data)

    axios.put("https://souvikdynamicform.herokuapp.com/forms/" + id,update_data).then((res) => {
      alert("Your form has been updated successfully")
  
       window.location.reload();


     }
     );
  }


  function closePanel2() {
    let modal = document.getElementById("myModal");
    

    modal.style.display = "none";

    localStorage.removeItem('id')
if(change){
  window.location.reload()

}else{
  setChange(false)
}
  }

  function documentName() {
    let e = document.getElementById("exampleFormControlSelect1");
    let documentName = e.value;
    setCurrency(documentName);
    
  }
    

  

    return(
      <div style={{display:'flex',justifyContent: 'center'}}>
<div class="updatebox" >
<span class="close"title="Close panel" onClick={closePanel2}>&times;</span>

 <form onSubmit={handleSubmit(onSubmit)} >

   <div style={{textAlign:'center',paddingTop:'2%'}} className="form-group">
   <h1 >Edit Form</h1><br/>

   </div>

<div style={{overflow: 'scroll', height: '350px'}}>

<div style={{textAlign:'center'}}>
        <label ><i><b>Company Name</b></i></label>
            <input type="text" 
            defaultValue={props.companyname} 
            placeholder="Enter Company Name"
            required
            className="form-control"
            onChange={(event)=>{
                setCompanyname(event.target.value)
                setCompanycode(companycode || props.companycode)
                setCurrency(currency || props.currency)
                setPortallanguage(portallanguage || props.portallanguage)
                setCity(city||props.city)
                setnewState(state || props.state)
                setCountry(country || props.country)
                setAddinfo(addinfo || props.addinfo)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div>
        
        <br/>
       
        <div style={{textAlign:'center'}}>
        <label ><i><b>Company Code</b></i></label>

            <input type="text" 
            defaultValue={props.companycode} 
            placeholder="Enter Company Code"
            required
            className="form-control"
            onChange={(event)=>{
                setCompanycode(event.target.value)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setPortallanguage(portallanguage || props.portallanguage)
                setCity(city || props.city)
                setnewState(state || props.state)
                setCountry(country || props.country)
                setAddinfo(addinfo || props.addinfo)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div>
        
        <br/>
        <div >
        <label><i><b>Current Currency:-----</b></i></label>
        <input
          disabled
          value={props.currency}
        />
        </div>
        <br/>
        <div style={{textAlign:'center'}}>
        <label ><i><b>Currency</b></i></label>

        <select 
        required 
        onClick={documentName}  
        className="form-select" 
        id="exampleFormControlSelect1"
        aria-label="Default select example"
       onChange={()=>{
        setCompanyname(companyname || props.companyname)
        setCompanycode(companycode || props.companycode)
        setPortallanguage(portallanguage || props.portallanguage)
        setCurrency(currency || props.currency)
        setCity(city || props.city)
        setnewState(state || props.state)
        setCountry(country || props.country)
        setAddinfo(addinfo || props.addinfo)
        setPincode(pincode || props.pincode)
        setChange(true);
       }}
        >
     <option 
     selected disabled style={{color:'#fff'}}>{formJSON.field[2].fieldData.fieldLabel}</option>
     <option  value={'USD'}>{formJSON.field[2].fieldData.option[0].optionLabel}</option>
     <option value={'INR'}>{formJSON.field[2].fieldData.option[1].optionLabel}</option>
     <option value={'AUD'}>{formJSON.field[2].fieldData.option[2].optionLabel}</option>
    </select>
</div>

<br/>

<div style={{textAlign:'center'}}>
<label ><i><b>Portal Language</b></i></label>

            <input type="text" 
            defaultValue={props.portallanguage} 
            placeholder="Enter Portal Language"
            required
            className="form-control"
            onChange={(event)=>{
                setPortallanguage(event.target.value)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setCompanycode(companycode || props.companycode)
                setCity(city || props.city)
                setnewState(state || props.state)
                setCountry(country || props.country)
                setAddinfo(addinfo || props.addinfo)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div>
<br/>

<div style={{textAlign:'center'}}>
<label ><i><b>City</b></i></label>

            <input type="text" 
            defaultValue={props.city} 
            placeholder="Enter City"
            required
            className="form-control"
            onChange={(event)=>{
                setCity(event.target.value)
                setPortallanguage(portallanguage || props.portallanguage)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setCompanycode(companycode || props.companycode)
                setnewState(state || props.state)
                setCountry(country || props.country)
                setAddinfo(addinfo || props.addinfo)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div><br/>

<div style={{textAlign:'center'}}>
<label ><i><b>State</b></i></label>

            <input type="text" 
            defaultValue={props.state} 
            placeholder="Enter State"
            required
            className="form-control"
            onChange={(event)=>{
                setnewState(event.target.value)
                setCity(city || props.city)
                setPortallanguage(portallanguage || props.portallanguage)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setCompanycode(companycode || props.companycode)
                setCountry(country || props.country)
                setAddinfo(addinfo || props.addinfo)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div><br/>



<div style={{textAlign:'center'}}>
<label ><i><b>Country</b></i></label>

            <input type="text" 
            defaultValue={props.country} 
            placeholder="Enter Country"
            required
            className="form-control"
            onChange={(event)=>{
                setCountry(event.target.value)
                setCity(city || props.city)
                setPortallanguage(portallanguage || props.portallanguage)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setCompanycode(companycode || props.companycode)
                setnewState(state || props.state)
                setAddinfo(addinfo || props.addinfo)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div><br/>

<div style={{textAlign:'center'}}>
<label ><i><b>Additional Information</b></i></label>

            <input type="text" 
            defaultValue={props.addinfo} 
            placeholder="Enter Additional Information"
            required
            className="form-control"
            onChange={(event)=>{
                setAddinfo(event.target.value)
                setCity(city || props.city)
                setPortallanguage(portallanguage || props.portallanguage)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setCompanycode(companycode || props.companycode)
                setCountry(country || props.country)
                setnewState(state || props.state)
                setPincode(pincode || props.pincode)
                setChange(true);

            }}
         />
</div><br/>

<div style={{textAlign:'center'}}>
<label ><i><b>Pincode</b></i></label>

            <input type="text" 
            defaultValue={props.pincode} 
            placeholder="Enter Pincode"
            required
            className="form-control"
            onChange={(event)=>{
                setPincode(event.target.value)
                setCity(city || props.city)
                setPortallanguage(portallanguage || props.portallanguage)
                setCompanyname(companyname || props.companyname)
                setCurrency(currency || props.currency)
                setCompanycode(companycode || props.companycode)
                setCountry(country || props.country)
                setAddinfo(addinfo || props.addinfo)
                setnewState(state || props.state)
                setChange(true);
 
            }}
         />
</div><br/>


        
        
   </div> 

   <div  style={{textAlign:'center'}}>
            <button className="btn btn-success btn-md" type="submit" disabled={!change? 'none' : ''} >Update Form</button>
        </div>               
     </form>
    </div>
 </div>
    )
}

export default UpdateForm
