import React , {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditContect(){
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  let { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch()
  const history = useHistory()


  const currentContact = contacts.find(contact => contact.id === parseInt(id));

  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  const hendelSubmit = (e) => {
    e.preventDefault();
    const checkEmail = contacts.find((contact) => contact.id !== parseInt(id) && contact.email === email);
    const checkNumber = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.number === parseInt(number)
    );

    if (!email || !number || !name) {
      return toast.warning("נא למלא את כל הפרטים");
    }
    if (checkEmail) {
      return toast.error("מייל זה כבר רשום במערכת");
    }
    if (checkNumber) {
      return toast.error("מספר זה כבר רשום במערכת");
    }
    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    
    dispatch({type: "UPDATE_CONTACT", payload:data});
    toast.success("איש הקשר עודכן בהצלחה!");
    history.push("/");
  };

  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className=" display-3 text-center my-4">ערוך משתמש {parseInt(id)+1}</h1>
          <div className="row">
            <div className="col-md-5 shadow mx-auto p-5">
              <form onSubmit={hendelSubmit}>
                <div className="form-group p-2">
                  <input
                    type="text"
                    placeholder="שם"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group p-2">
                  <input
                    type="email"
                    placeholder="אימייל"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>{" "}
                <div className="form-group p-2">
                  <input
                    type="number"
                    placeholder="מספר פלאפון"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group p-2">
                  <input type="submit" value="עדכן" className="btn btn-dark" />
                  <Link to="/" className="btn btn-danger ">
                    ביטול
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className=" display-3 text-center my-4"> משתמש {id} לא קיים</h1>
      )}
    </div>
  );
};
