import {useEffect,useState} from 'react'
import axios from 'axios'
import './forms.css'
import { Link } from 'react-router-dom';
import UpdateForm from './UpdateForm'


export default function GetForms() {

    const [formdata,setFormdata] = useState([])
    const [companyname,setCompanyname] = useState('')
    const [companycode,setCompanycode] = useState('')
    const [currency,setCurrency] = useState('')
    const [portallanguage,setPortallanguage] = useState('')
    const [city,setCity] = useState('')
    const [state,setnewState] = useState('')
    const [country,setCountry] = useState('')
    const [addinfo,setAddinfo] = useState('')
    const [pincode,setPincode] = useState('')

    useEffect(() =>{

        localStorage.removeItem('id')

       
       function getdata() {
          axios.get('https://souvikdynamicform.herokuapp.com/forms/').then(res=>{
              console.log(res.data)
              setFormdata(res.data)
          })
       }

       getdata()

    },[])

    function closePanel(id) {
    if(window.confirm("Are you sure you want to delete the form?")){
      axios.delete('https://souvikdynamicform.herokuapp.com/forms/'+id).then(res=>{
        window.location.reload();
      })
     }
    }

    function clickUpdate(id,companyname,companycode,currency,portallanguage,city,state,country,addinfo,pincode){
        let updatebox = document.querySelector(".tablediv");
      
        updatebox.style.display = "block";

        localStorage.setItem('id',id)

        setCompanyname(companyname)
        setCompanycode(companycode)
        setCurrency(currency)
        setPortallanguage(portallanguage)
        setCity(city)
        setnewState(state)
        setCountry(country)
        setAddinfo(addinfo)
        setPincode(pincode) 

      }

    return(
        <div class='container'>
            <div style={{textAlign: 'center'}}>
            <h1><u>Submitted Forms</u></h1>
            <Link style={{color:'white'}} to="/"><button className="btn btn-md btn-success">Fill a new form</button></Link>
            </div>
           <div class="row" >
            {formdata.map((form,index)=>{
                return(
                    
                   <> 

  <div class="col-sm-12 col-md-6" style={{padding:'10px'}}>
          <div class="input-group">
          
          <div class="card" id="cardbody" style={{width:'200%'}}>
      <div class="card-body"  style={{backgroundColor:'pink'}}>
      <span class="close"title="Delete Form" onClick={()=>{closePanel(form._id)}}>&times;</span>

        <h4 class="card-title"><u>Form No. {index+1}</u></h4><br/>
        <p class="card-text"><i><b>Company Name</b></i> : {form.company_name}</p>
        <p class="card-text"><i><b>Company Code</b></i> : {form.company_code}</p>
        <p class="card-text"><i><b>Currency</b></i> : {form.currency}</p>
        <p class="card-text"><i><b>Portal Language</b></i> : {form.portal_language}</p>
        <p class="card-text"><i><b>City</b></i> : {form.city}</p>
        <p class="card-text"><i><b>State</b></i> : {form.state}</p>
        <p class="card-text"><i><b>Country</b></i> : {form.country}</p>
        <p class="card-text"><i><b>Additional Information</b></i> : {form.add_info}</p>
        <p class="card-text"><i><b>Pincode</b></i> : {form.pincode}</p>
        <a href="#" 
        class="btn btn-primary"
        onClick={()=>{
            clickUpdate(
                form._id,
                form.company_name,
                form.company_code,
                form.currency,
                form.portal_language,
                form.city,
                form.state,
                form.country,
                form.add_info,
                form.pincode
                )
            }}
        >Edit Form</a>
      </div>
    </div>
          </div>
  </div>
  
  <div id="myModal" class="modal tablediv" style={{display: 'none'}} >
        <UpdateForm
          companyname={companyname}
          companycode={companycode}
          currency={currency}
          portallanguage={portallanguage}
          city={city}
          state={state}
          country={country}
          addinfo={addinfo}
          pincode={pincode}
        />
    </div>

                  </>  
                )
            })}
        </div>
        </div>
        
    )
}