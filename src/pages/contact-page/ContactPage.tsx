import { ReactElement, useEffect, useRef, useState } from "react";
import ProfileImage from '../../assets/images/profile.png';
import { isEmpty, isNotString, isValidEmail } from "../../helpers";
import { ToastContainer, toast } from "react-toastify";
import { sendEmail } from "../../helpers/api";
import { Loading } from "../../components";
import "react-toastify/dist/ReactToastify.css";

interface ContactProps {
    isToApplyBlur: boolean
}

export const ContactPage = (props: ContactProps): ReactElement => {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [message, setMessage] = useState('');
    const [isToShowLoading, setIsToShowLoading] = useState(false);
    const inputRef = useRef<any>();
   
    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const setEmailInputValue = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const newEmailValue = event.target.value;
        setEmail(newEmailValue);
    }

    const setMessageInputValue = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
        const newMessageValue = event.target.value;
        setMessage(newMessageValue);
    }

    const sendMessage = async(): Promise<void> => {
        if (!isValidEmail(email)) {
            setErrorMessage('Invalid email');
            return;
        }

        if (isEmpty(message)) {
            setErrorMessage('The message field is empty');
            return;
        }

        setIsToShowLoading(true);
        const response = await sendEmail(email, message);

        if (isNotString(response)) {
            setErrorMessage('Sorry, there was an error. Try again later.');
            setIsToShowLoading(false);
            return;
        }
        setIsToShowLoading(false);
        notifySuccess();
        setErrorMessage('');     
    }

    const notifySuccess = () =>
    toast.success("Email sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    return (
        <div id="contact-page" className={props.isToApplyBlur ? 'page-blur' : ''}>
            <div className="top-container">
                <div className="title-container">
                    <h1>Contact</h1>
                </div>
            </div>
            <div className="card-list">
                <div className="card" id="card-message">
                    <div hidden={isToShowLoading}>
                        <h1>Send me a message !</h1>
                        <div className="email-container">
                            <h4>Email</h4>
                            <input value={email} onChange={setEmailInputValue} type="text" placeholder="Your email address" ref={inputRef} />
                        </div>

                        <div className="message-container">
                            <h4>Message</h4>
                            <textarea value={message} onChange={setMessageInputValue} placeholder="Your message" />
                            <p>{errorMessage}</p>
                        </div>
                        <div>
                            <button onClick={sendMessage}>Send</button>
                        </div>
                    </div>

                    <Loading show={isToShowLoading} />
                </div>
                <div className="card" id="card-profile">
                    <div className="card-top-container">
                        <img src={ProfileImage} alt="profile" />
                        <div className="text-container">
                            <h1>Profile Information</h1>
                            <p>Hi, I’m a web developer specialized in JavaScript applications, having experience with Angular, NgRx, RxJS, Cypress e2e tests, React, Redux, Router, Typescript, NodeJS, agile scrum, and clean code.</p>
                        </div>
                    </div>
                    <hr />
                    <div className="card-bottom-container">
                        <h4><strong>Full Name:</strong> Gerald Hamilton Wicks</h4>
                        <h4><strong>Mobile:</strong> +55 (71) 9963-44481</h4>
                        <h4><strong>Email:</strong> jerrinho.gerald@hotmail.com</h4>
                        <h4><strong>Location:</strong> Remote | Brazil</h4>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}