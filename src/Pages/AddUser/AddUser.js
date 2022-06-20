import "./AddUser.css";
import {useState} from "react";
import {validLenght} from "../../utile/validation";
import {useDispatch, useSelector} from "react-redux";
import {addUser} from "../../Actions/userAction";
import {useNavigate} from "react-router";



const AddUser = () => {
    const navigate = useNavigate();
    const users=useSelector(state=>state.users)
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        prenom: "",
        nom: "",
        etat: "En validation",
        username: "",
        date: "",
        matricule: ""
    });

    const [errorFormData, setErrorFormData] = useState({
        prenom: "",
        nom: "",
        etat: "",
        username: "",
        date: "",
        matricule: ""
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const entries = Object.entries(formData);
        for(let i=0;i<entries.length;i++){
            let elementName=entries[i][0]
            let elementValue=entries[i][1]

                if(validLenght(elementValue)!==true){
                    setErrorFormData( prevState => ({ ...prevState, [elementName]: elementName!=="date"?`${elementName} leng to 3`:`${elementName} required`}));
                }else {
                setErrorFormData( prevState => ({ ...prevState, [elementName]: ""}));
            }
        }
        const isRequered=errorFormData.nom.length===0&&
                        errorFormData.prenom.length===0&&
                        errorFormData.etat.length===0&&
                        errorFormData.username.length===0&&
                        errorFormData.date.length===0&&
                        errorFormData.matricule.length===0&&
                        formData.nom.length>3&&
                        formData.prenom.length>3&&
                        formData.etat.length>3&&
                        formData.username.length>3&&
                        formData.date.length>3&&
                        formData.matricule.length>3

        if(isRequered){
           const user ={
               id: Math.floor(Math.random() * (80000 - 12 + 1) + 12) ,
               firstName: formData.prenom,
               lastName: formData.nom,
               status: formData.etat,
               userName: formData.username,
               createdDate: new Date(formData.date).toISOString(),
               registrationNumber: formData.matricule
           }
            dispatch(addUser(user))
            setErrorFormData( {
                prenom: "",
                nom: "",
                etat: "",
                username: "",
                date: "",
                matricule: ""
            });
            navigate("/")
            
        }


    }

  return(
      <div className="AddUser  shadow-lg p-3 mb-5 bg-body rounded mt-2">
          <h3 className="p-2">Ajout d'utilisateurs</h3>
         <div className="p-2">
            <form onSubmit={handleSubmit}>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nom</label>
                        <input type="text" className="form-control"  id="nom" onChange={handleChange} value={formData.nom}
                               aria-describedby="emailHelp"
                        />
                        <span className="text-danger">{errorFormData.nom}</span>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Prénom</label>
                        <input type="text" className="form-control" id="prenom" onChange={handleChange} value={formData.prenom}
                               aria-describedby="emailHelp"
                        />
                        <span className="text-danger">{errorFormData.prenom}</span>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Etat</label>
                        <select className="form-select" id="etat" onChange={handleChange} value={formData.etat}>
                            <option  value="En validation">En validation</option>
                            <option value="Validé">Validé</option>
                            <option value="Rejeté">Rejeté</option>
                        </select>
                        <span className="text-danger">{errorFormData.etat}</span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nom d'utilisateur</label>
                        <input type="text" className="form-control" id="username" onChange={handleChange} value={formData.username}
                               aria-describedby="emailHelp"
                        />
                        <span className="text-danger">{errorFormData.username}</span>
                    </div>
                    <div className="col-md-4">
                        <fieldset>
                            <label htmlFor="exampleInputEmail1" className="form-label">Date de création</label>
                            <input type="date" className="form-control" id="date" onChange={handleChange} value={formData.date}
                                   aria-describedby="emailHelp"
                            />
                            <span className="text-danger">{errorFormData.date}</span>
                        </fieldset>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4">
                        <label htmlFor="exampleInputEmail1" className="form-label">Matricule</label>
                        <input type="text" className="form-control" id="matricule" onChange={handleChange} value={formData.matricule}
                               aria-describedby="emailHelp"
                        />
                        <span className="text-danger">{errorFormData.matricule}</span>
                    </div>
                </div>
                <div className="d-flex justify-content-end align-items-center">
                    <button type="submit" className="btn" style={{backgroundColor:"#FDB64D"}}>Enregistrer</button>
                </div>
            </form>
         </div>

      </div>
  );
}
export default AddUser;