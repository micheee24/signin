import React from "react";
import {useFormik} from 'formik'
// TODO: import useFormik from formik library
function App() {
  // TODO: add a const called formik assigned to useFormik()
const formik = useFormik({
    initialValues:{
      email: '',
      password: ''
    },
    onSubmit: values =>{
      alert('Log in Successful')
    },
    validate: values =>{
      let errors = {};
      if(!values.email) errors.email = 'Field Required';
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = "Username should be an email"}
      if(!values.password) errors.password = 'Field Required';
      return errors;
    }
});
  return (
    <div style = {{display:"flex", justifyContent: "center", border: '3px solid rgba(60,60,60)'}}>
      <form onSubmit={formik.handleSubmit}>
        <div>Email:</div>
        <input id = "emailField" type = "text" name = "email" onChange={formik.handleChange} value = {formik.values.email}></input>

        {formik.errors.email ? <div id = "emailError" style = {{color: 'red'}}>{formik.errors.email}</div>: null}

        <div>Password:</div>
        <input id = "pswField" type = "text" name = "password" onChange={formik.handleChange} value = {formik.values.password}></input>
        {formik.errors.password ? <div id = "pswError" style = {{color: 'red'}}>{formik.errors.password}</div>: null}

        <button id ="submitBtn" type = "submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
