import React, { useState } from "react";
import DocumentTitle from "react-document-title";
import { validateEmail } from "../../utils/helpers";

function Contact() {

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const {
        name,
        email,
        message
    } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!errorMessage) {
            console.log("Submit Form", formState);
        };
    };

    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);

            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            }
            else {
                setErrorMessage("");
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            }
            else {
                setErrorMessage("");
            }
        };

        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
            console.log("Handle Form", formState);
        };
    };

    return (
        <section>
            <DocumentTitle title="Contact Me"></DocumentTitle>
            <h2 className="text-center titles">
                Contact me
            </h2>
            <div className="container" id="contact-section">
                <form className="mx-auto" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="secondary-titles">
                            Name:
                        </label>
                        <input className="col-md-12" type="text" name="name" defaultValue={name} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="email" className="secondary-titles">
                            Email address:
                        </label>
                        <input className="col-md-12" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message" className="secondary-titles">
                            Message:
                        </label>
                        <textarea className="col-md-12" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="error-text">
                                {errorMessage}
                            </p>
                        </div>
                    )}
                    <button type="submit">
                        Submit
                    </button>
                </form>
            </div>

        </section>
    );
};

export default Contact;