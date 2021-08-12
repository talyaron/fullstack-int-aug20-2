import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const Home = () => {
  const contects = useSelector((state) => state);
  const dispatch = useDispatch();

  const deleteContact = (id) => {
    dispatch({ type: "DEDETE_CONTECT", payload: id });
    toast.success("איש הקשר נמחק");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5 text-right">
          <Link to="/add" className="btn  btn-primary">
            איש קשר חדש
          </Link>
        </div>

        <div className="col-md-10 mx-auto">
          <table className="table table-hover">
            <thead className="text-white bg-dark text-center">
              <tr>
                <th scope="col">#</th>
                <th scope="col">שם</th>
                <th scope="col">אימייל</th>
                <th scope="col">מספר</th>
                <th scope="col">action</th>
              </tr>
            </thead>
            <tbody>
              {contects.map((contact, id) => {
                return (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.number}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-small  m-2 btn-primary"
                      >
                        עריכה
                      </Link>
                      <button
                        type="button"
                        className="btn btn-small btn-danger"
                        onClick={() => deleteContact(contact.id)}
                      >
                        מחק
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
