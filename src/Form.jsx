import React, { useState } from 'react';

// Custom Hook for input validation
function useInputValidation(initialValue, validate) {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
    if (validate) {
      const errorMessage = validate(e.target.value);
      setError(errorMessage);
    }
  };

  return {
    value,
    onChange: handleChange,
    error
  };
}

// Email validation function
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return "Invalid email format";
  }
  return "";
};

// Username validation (max length 10 characters)
const validateUsername = (username) => {
  if (username.length > 15) {
    return "Username cannot be longer than 10 characters";
  }
  return "";
};

function Form() {
  const email = useInputValidation("", validateEmail);
  const username = useInputValidation("", validateUsername);
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.error && !username.error && password === retypePassword) {
      console.log({
        email: email.value,
        username: username.value,
        password
      });
      alert("Form submitted successfully");
    } else {
      alert("Please correct the errors in the form");
    }
  };

  return (

    <> 
     
      <div className='formmain'>

     <div className="container">
         
         
    <form onSubmit={handleSubmit}>
      <h1> User Registration </h1>

      
      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" htmlFor="form3Example1cg">Email <span style={{color:'red'}}> * </span> </label>     
      <input type="text" id="form3Example1cg" className="form-control form-control" value={email.value} onChange={email.onChange}  />
      {email.error && <p style={{color:'red'}}>{email.error}</p>}
      </div>


      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" htmlFor="form3Example1cg">User Name <span style={{color:'red'}}> * </span></label>     
      <input type="text" id="form3Example1cg" className="form-control form-control" value={username.value} onChange={username.onChange} />
      {username.error && <p style={{color:'red'}}>{username.error}</p>}
      </div>


      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" htmlFor="form3Example1cg">Password <span style={{color:'red'}}> * </span> </label>     
      <input type="password" id="form3Example1cg" className="form-control form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      
      <div data-mdb-input-init className="form-outline mb-3">
      <label className="form-label" htmlFor="form3Example1cg">Retype-Password <span style={{color:'red'}}> * </span> </label>     
      <input type="password" id="form3Example1cg" className="form-control form-control" value={retypePassword} onChange={(e) => setRetypePassword(e.target.value)} />
      {password !== retypePassword && <p style={{color:'red'}}>Passwords do not match</p>}
      </div>

     
      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" htmlFor="form3Example1cg">First Name <span style={{color:'red'}}> * </span> </label>     
      <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
      <label className="form-label" htmlFor="form3Example1cg">Last Name <span style={{color:'red'}}> * </span></label>     
      <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
      <label>Phone Number <span style={{color:'red'}}> * </span></label>     
       <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
      <label> Address <span style={{color:'red'}}> * </span> </label>     
       <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>

      <div data-mdb-input-init className="form-outline mb-4">
      <label> Town <span style={{color:'red'}}> * </span>  </label>     
       <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>

      
      <div data-mdb-input-init className="form-outline mb-4">
      <label> Region <span style={{color:'red'}}> * </span>  </label>     
       <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>

      
      <div data-mdb-input-init className="form-outline mb-4">
      <label> Post/code  <span style={{color:'red'}}> * </span>  </label>     
       <input type="text" id="form3Example1cg" className="form-control form-control" />
      </div>



      <div data-mdb-input-init className="form-outline mb-4">
      <label> Country <span style={{color:'red'}}> * </span>  </label>     
       <input type="text" id="form3Example1cg" className="form-control form-control" />
       
      </div>
        
      <button type="submit" className='btn btn-success'>Register</button>
    </form>

    <div/>
  
    </div>
    </div>
    
    </>
  );
}

export default Form;
