import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // we always have to make sure we have the user which registered in the page after a refresh

    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid-2">
      <div className="">
        <ContactForm />
      </div>
      <div className="">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
