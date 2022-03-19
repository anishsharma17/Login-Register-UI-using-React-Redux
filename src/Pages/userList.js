
import React, { useState, useEffect, Component } from 'react';
import { useDispatch, connect } from 'react-redux';
import userActions from '../redux/action';
import { getAllUsersList } from '../services/GetUserList';

class UserList extends Component{
constructor(props)
{
    super(props)
        this.state={
            id:"",
            name :"",
            email:"",
            Age: "",
            PhoneNo:"",
        }
    
}
componentDidMount(props){
     this.props.dispatch(getAllUsersList());
}
componentWillReceiveProps(nextprops){


}

render (){

    return (
        <div id="userList">
            <div className = "datalist">
                <table>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>PhoneNo</th>
                    <th>Age</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>
            
        </div>
    )
}
}
const mapStateToProps= (state)=>{
 return({
     UserListResponse : state.rootReducer.UserListResponse,
 })
}

export default connect(mapStateToProps)(UserList);



   

       
      

      