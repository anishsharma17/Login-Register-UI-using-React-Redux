import './verifyotp.css';
import React, { useState, Component } from 'react';
import { useDispatch,connect } from 'react-redux';
import userActions from '../redux/action.js';

class VerifyOtp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: "",
            otpV: "",
            userID: localStorage.getItem("UserData"),
            validationMsg: {},
            otperror: "",
            
        }
        this.onOtpChange = this.onOtpChange.bind(this);
        
        this.otp = this.otp.bind(this);
    }

    componentWillMount() {

    }
    componentWillReceiveProps(nextProps) {
        

        if (nextProps.userOtpResponse.success > 0) {
            alert("Verify Successfully");
            this.props.history.push("/");

           
        } else {
            alert(nextProps.userOtpResponse.message);

        }

    }

    onOtpChange(e) {


        this.setState({ otpV: e.target.value })

    }

   
    handleValidation() {
        let valid = true;
        let error = {}

        if (this.state.otpV === "") {
            valid = false;
            document.getElementById("otperrors").style.display = "block";
            this.setState({ otperror: "Can't leave empty !" });

        }else{
            if(this.state.otpV.length !== 6){
                valid = false;
                document.getElementById("otperrors").style.display="block";
                this.setState({ otperror: "otp Number should be 6 digit numbers"});
            }
            return valid;
        }
        

       
    }

    otp(e) {
        e.preventDefault();
        let otpData = {};
        otpData.otpCode = this.state.otpV;
        otpData.id = this.state.userID;

        
        if (this.handleValidation()) {
            
           debugger
            this.props.dispatch(userActions.OtpVerifyToDB(otpData));
            //this.props.dispatch(ThirdPartyList());

        }
    
    }

    render() {
        const { classes } = this.props;
        let OtpFailErrorMessage = "";
        if (this.props.OtpFailError === false) {
            OtpFailErrorMessage = this.props.errorMessage;
        } else {

        }
        return (
            <div className="OtpverifyPage">
              <form id="otpVerify">
              <img src="https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/avatar-default-icon.png" style={{"width":"80px", "height":"70px", "margin-top":"20px"}} /><br/>
              <h1>Otp Verify Page</h1>
              <input
                type="number"
                name="otp"
                value={this.state.otpV} 
                onChange={this.onOtpChange}
                placeholder="Enter six digit Otp"
              /><span id="otperrors">{this.state.otperror}</span>
              <br/>
              <button 
                type="submit"
                onClick={this.otp}>
                  Verify Otp
                     </button> <br />
              </form>
              </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      userOtpResponse: state.signupReducer.userOtpResponse,
    }
  }
  
  export default connect(mapStateToProps) (VerifyOtp);