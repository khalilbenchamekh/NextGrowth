import React from "react";
import "./Users.css";
import {connect, useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import moment from "moment";
import {deleteUser, getAllUsers} from "../../Actions/userAction";
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";


class Users extends  React.Component{

    async componentDidMount () {
        try{
            await this.props.getAllUser()
        }catch (e) {
            console.error(e.message)
        }
    }
 deleteUser =(payload)=>{

          this.props.delete(payload)
    }
    render() {
        const {users}=this.props
        const handelStatus=(status)=>{
            switch (status) {
                case "Validé":
                    return"valide";
                case "Rejeté" :
                    return "rejected";
                case "En validation":
                    return "on-validation";
                default:
                    return ""
            }
        }
      return(
          <div className="Users " >
              <div className=" shadow-lg p-3 mb-5 bg-body rounded mt-2" >
                  <table className=" table" >
                      <thead>
                      <tr>
                          <th scope="col">ID</th>
                          <th scope="col">Date de creation</th>
                          <th scope="col">Etat</th>
                          <th scope="col">Nom</th>
                          <th scope="col">Prenom</th>
                          <th scope="col">Nom d'utilisateur </th>
                          <th scope="col">Matricule </th>
                          <th scope="col">Action </th>
                      </tr>
                      </thead>
                      <tbody>
                      {
                          users.length>0?
                              users.map(user=>(
                                  <tr key={user.id} style={{fontSize:'12px',opacity:'0.8'}}>
                                      <th>{user.id}</th>
                                      <th>{moment.utc(user.createdDate).format('DD/MM/YY')} </th>
                                      <th><span style={{fontSize:'10px'}}
                                                className={`${handelStatus(user.status)}
                                                 d-flex justify-content-center align-items-center text-white rounded `}>
                                          {user.status}</span>
                                      </th>
                                      <th>{user.firstName}</th>
                                      <th>{user.lastName}</th>
                                      <th>{user.userName}</th>
                                      <th>{user.registrationNumber}</th>
                                      <th><AiFillDelete onClick={this.deleteUser.bind(this,user)} /></th>
                                  </tr>
                              )):null
                      }
                      </tbody>
                  </table>
              </div>
              <div className="shadow-lg p-3 mb-5 bg-body rounded mt-2 d-flex justify-content-end align-items-center">
                  <Link to="/add"> <button className="btn" style={{backgroundColor:"#FDB64D"}}>Ajouter utilisateur</button></Link>
              </div>
          </div>
      );
  }


}
const mapStateToProps = (state) => (
    { users: state.users }
)
const mapDispatchToProps = (dispatch) => (
    {
        getAllUser: () => {
            return dispatch(getAllUsers())
        },
        delete:(payload)=>{
            return dispatch(deleteUser(payload))
        }
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Users);