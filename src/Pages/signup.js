import './signup.css'
import React, { useState ,Component} from 'react';
import { useDispatch,connect } from 'react-redux';
import userActions from '../redux/action.js';

class Signup extends Component {
  constructor(props) {
    super(props)
   
    this.state = {
      username: "",
      email:"",
      phoneno:"",
      age:"",
      dob:"",
      password: "",
      validationMsg: {},
      namerror:"",
      passerror:""
    }
    //bind the function context
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneNoChange = this.onPhoneNoChange.bind(this);
    this.onAgeChange = this.onAgeChange.bind(this);
    this.ondobChange = this.ondobChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.signup = this.signup.bind(this);
  }
 
  componentWillMount() {

  }
  componentWillReceiveProps(nextProps){
   // alert("Password expired "+nextProps.isPasswordExpired);
   if(nextProps.userSignupResponse.success > 0){
     debugger
     localStorage.setItem("UserData", nextProps.userSignupResponse.userData.id);
     alert("user create successfully");
     this.props.history.push("./verifyOtp");
   }
   else{
     alert(nextProps.userSignupResponse.message)
   }
  
    
  }

  onUserNameChange(e) {

      
      this.setState({ username: e.target.value })

}
onEmailChange(e){
  this.setState({email : e.target.value})
}

onPhoneNoChange(e){
  this.setState({phoneno : e.target.value})
}
onAgeChange(e){
  this.setState({age : e.target.value})
}
ondobChange(e){
  this.setState({dob : e.target.value})
}

onPasswordChange(e) {

    this.setState({ password: e.target.value })

}
  // Controlled form functions
 
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const { history } = props;
  //   dispatch(userActions.newUserToDB(signupForm));
  //   history.push('/');
  // };

  // Destructuring keys from our local state to use in the form
  // const { username, emailaddress,phoneNumber,age,dob, password } = signupForm;

  handleValidation() {
    let valid = true;
    let error = {}

    if (this.state.username === "") {
      valid = false;
      document.getElementById("nameerror").style.display="block";
      this.setState({ namerror: "Can't leave empty !" });      
      return valid;
    } 
    if (this.state.email === "") {
      valid = false;
      document.getElementById("emailerror").style.display="block";
      this.setState({ emalerror: "Can't leave empty !" });      
      return valid;
    } 
    if (this.state.phoneno === "" ) {
      valid = false;
      document.getElementById("phoneerror").style.display="block";
      this.setState({ phnerror: "Can't leave empty !" });   
    }else {
      if(this.state.phoneno.length !== 10){
        valid = false;
        document.getElementById("phoneerror").style.display="block";
        this.setState({phnerror: "mobile number should be 10 digit"})
      }
      return valid
    }
    if (this.state.age === "") {
      valid = false;
      document.getElementById("nameerror").style.display="block";
      this.setState({ namerror: "Can't leave empty !" });      
      return valid;
    } 
    if (this.state.dob === "") {
      valid = false;
      document.getElementById("nameerror").style.display="block";
      this.setState({ namerror: "Can't leave empty !" });      
      return valid;
    } 

    if (this.state.password === "") {
      valid = false;
      document.getElementById("passerror").style.display="block";
      this.setState({ passerror: "Can't leave empty !" });
      return valid;
    }
  
    return valid;
  }

  signup(e) {
    e.preventDefault();
    let signupData = {}
    signupData.name = this.state.username;
    signupData.email = this.state.email;
    signupData.PhoneNo = this.state.phoneno;
    signupData.Age = this.state.age;
    signupData.DOB = this.state.dob;
    signupData.Password = this.state.password;
    if (this.handleValidation()) {
      this.props.dispatch(userActions.newUserToDB(signupData));
      //this.props.dispatch(ThirdPartyList());
      
    }
  }

  render() {
    const { classes } = this.props;
    let signupFailErrorMessage = "";
    if (this.props.signupFailError === false) {
      signupFailErrorMessage = this.props.errorMessage;
    }else{

    }


  // Component code
  return (

    <div className="signdiv">
      <div className="Imgurl">
        <img src="https://uploads-ssl.webflow.com/5e0f24cd100da4bd7d57d6ec/5f51151c3b86bdef8bdfccb5_webflow-website-design-hero.jpg" />
      </div>
    <form id="signform" onSubmit={this.signup}>
      <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" style={{"width":"80px", "height":"70px","margin-left":"40%", "margin-top":"20px"}} /><br/>
      <h1 style={{"margin-left":"20%"}}> Signup Page</h1>
      <input
        type="text"
        name="username"
        value={this.state.username} 
        placeholder="Username"
        onChange={this.onUserNameChange}
      /><br/><span id="nameerror">{this.state.namerror}</span>
      <input
        type="text"
        name="emailaddress"
        placeholder="Emailaddress"
        value={this.state.email} 
        onChange={this.onEmailChange}
      /><br/><span id="emailerror">{this.state.emalerror}</span>
      <input 
        type="tel"
        name="phoneNumber"
        placeholder="Enter your mobile number"
        value={this.state.phoneno} 
        onChange={this.onPhoneNoChange}
      /><br/><span id="phoneerror">{this.state.phnerror}</span>
      <input
        type="Number"
        name="age"
        placeholder="Enter your age"
        value={this.state.age} 
        onChange={this.onAgeChange}
      /><br/>
      <input
        type="date"
        name="dob"
        value={this.state.dob} 
        onChange={this.ondobChange}
      /><br/>
       <input
        type="password"
        name="password"
        placeholder="Enter your password"
        value={this.state.password} 
        onChange={this.onPasswordChange}
        
      /><br/><span id="nameerror">{this.state.passerror}</span>
       <button 
       type="submit">
        Submit
      </button>
     
    </form>
    </div>
  );
};
}

const mapStateToProps = (state) => {
  debugger
  return {
    userSignupResponse: state.signupReducer.userSignupResponse,
  }
}

export default connect(mapStateToProps) (Signup);