import { useState } from 'react';
import './RegisterPage.css';
function RegisterPage() {
   const initialStateErrors={
      email:{required:false},
      password:{required:false},
      name:{required:false},
      custom_error:null   
}
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState(initialStateErrors);
   function handleSubmit(event) {
      event.preventDefault();
      let error =initialStateErrors;
      let hasError = false;
      if(inputs.email===""){
         error.email.required =true;
         hasError = true;
      }
      if(inputs.name===""){
         error.name.required =true;
         hasError = true;
      }
      if(inputs.password===""){
         error.password.required =true;
         hasError = true;
      }
      if(hasError!==true){
         setLoading(true);
      }
      setError(error);
   }
   const [inputs,setInputs] = useState({
      email:"",
      password:"",
      name:""
   })
   function handleInputs(event) {
      setInputs({...inputs,[event.target.name]:event.target.value})
   }
    return(
        <section className="register-block">
        <div className="container">
           <div className="row ">
              <div className="col register-sec">
                 <h2 className="text-center">Register Now</h2>
                 <form className="register-form" onSubmit={handleSubmit} action="" >
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Name</label>
      
                    <input type="text" className="form-control" onChange={handleInputs} name="name" id=""  />
                    {error.name.required?
                   (<span className="text-danger" >
                        Name is required.
                    </span>):null
                     }
                 </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1" className="text-uppercase">Email</label>
      
                    <input type="text"  className="form-control" onChange={handleInputs} name="email" id=""  />
                    {error.email.required?
                    (<span className="text-danger" >
                        Email is required.
                    </span>):null
                    }
                 </div>
                 <div className="form-group">
                    <label htmlFor="exampleInputPassword1" className="text-uppercase">Password</label>
                    <input  className="form-control" type="password"  onChange={handleInputs} name="password" id="" />
                    {error.password.required?
                    <span className="text-danger" >
                        Password is required.
                    </span>:null
                    }
                 </div>
                 <div className="form-group">
                 
                    <span className="text-danger" >
                    {error.custom_error?
                       (<p>{error.custom_error}</p>)
                       :null
                    }
                    </span>
                    
                    <div  className="text-center">
                     {
                      loading?
                      (<div className="spinner-border text-primary " role="status">
                        <span className="sr-only">Loading...</span>
                      </div>):null
                      }
                    </div>
      
                    <input type="submit" className="btn btn-login float-right"  value="Register"/>
                 </div>
                 <div className="clearfix"></div>
                 <div className="form-group">
                   Already have account ? Please <a href="has">Login</a>
                 </div>
      
      
                 </form>
      
      
              </div>
      
           </div>
      
      
        </div>
      </section>
    );
}
export default RegisterPage;