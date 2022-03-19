import './login.css';
import React, { useState,Component} from 'react';
import { useDispatch, connect } from 'react-redux';
import userActions from '../redux/action';
import { useHistory } from 'react-router';
import { LoginVerify } from '../services/GetUserList';

class Login extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      uname: "",
      psw: "",
      validationMsg: {},
      namerror:"",
      passerror:""
    }
    //bind the function context
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordeChange = this.onPasswordeChange.bind(this);
    this.login = this.login.bind(this);
  }
 
  componentWillMount() {

  }
  componentWillReceiveProps(nextProps){
   // alert("Password expired "+nextProps.isPasswordExpired);
  
    if(nextProps.userLoginREsponse.success > 0){
      alert("login Successfully");
      this.props.history.push("/");
      
      //this.props.history.push("/Password-Reset");
    }else{
      alert(nextProps.userLoginREsponse.message);
     
    }
    
  }

  onUserNameChange(e) {

      
      this.setState({ uname: e.target.value })

}

  onPasswordeChange(e) {
  

      
    this.setState({ psw: e.target.value })

}

  handleValidation() {
    let valid = true;
    let error = {}

    if (this.state.uname === "") {
      valid = false;
      document.getElementById("nameerror").style.display="block";
      this.setState({ namerror: "Can't leave empty !" });      
      return valid;
    } 
    if (this.state.psw === "") {
      valid = false;
      document.getElementById("passerror").style.display="block";
      this.setState({ passerror: "Can't leave empty !" });
      return valid;
    }
  
    return valid;
  }

  login(e) {
    e.preventDefault();
    let loginData = {}
    loginData.userName = this.state.uname;
    loginData.password = this.state.psw;
    if (this.handleValidation()) {
      this.props.dispatch(userActions.loginUserToDB(loginData));
      //this.props.dispatch(ThirdPartyList());
      
    }
  }

  render() {
    const { classes } = this.props;
    let loginFailErrorMessage = "";
    if (this.props.loginFailError === false) {
      loginFailErrorMessage = this.props.errorMessage;
    }else{

    }

  // controlled form functions
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(userActions.loginUserToDB(loginForm));
    
  //   props.history.push('/');
  //   console.log(loginForm);
  // };

  // const handleClick = e =>{
  //   e.preventDefault();
  //   props.history.push('/signup');
  // }

  // const handleChange = e =>
  //   setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  // // Destructuring keys from our local state to use in the form
  // const { username, password } = loginForm;


  // Component code
  return (
    <div className="loginPage">
      <form id="loginform" onSubmit={this.login}>
      <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" style={{"width":"80px", "height":"70px", "margin-top":"20px"}} /><br/>
      <h1> Login Here</h1>
      <input
        type="text"
        name="username"
        value={this.state.uname} 
        onChange={this.onUserNameChange}
        placeholder="Enter your PhoneNumber"
      /><span id="nameerror">{this.state.namerror}</span>
      <br/>

    
      
       <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={this.state.psw} 
        onChange={this.onPasswordeChange}
       /><span id="nameerror">{this.state.passerror}</span><br/>
      <div id="loginerror"><span >{loginFailErrorMessage}</span></div>
       <button 
       type="submit">
        Submit
      </button> <br />
      <a href = "#" >Don't Have an Account?</a>
     
    </form>
       
   </div>
    
    
  );
};
}
const mapStateToProps = (state) => {
  return {
    userLoginREsponse: state.loginReducer.userLoginREsponse,
  }
}

export default 
  connect(mapStateToProps)
(Login);



