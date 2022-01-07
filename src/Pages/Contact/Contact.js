import React from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import ContactForm from "../../Sections/ContactForm/ContactForm";

const Contact = () => {
    return (
        <div className="contact">
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Contact;
