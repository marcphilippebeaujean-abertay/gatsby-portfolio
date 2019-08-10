import React from 'react';
import styled from 'styled-components';
import { mainColour } from "../style/themeStyle";
import ReCAPTCHA from "react-google-recaptcha";

var Recaptcha = require('react-recaptcha');

const recaptchaRef = React.createRef();

function onChange(value) {
    console.log("Captcha value:", value);
}

const ContactsForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    .input-field{
        padding: 10px 0px;
        margin-bottom: 20px;
        font-size: 16px;
        border-style:solid;
        border-width: 0.5px;
        border-color: lightgrey;
        border-radius: 5px;
    }
    .input-field:hover{
        border-color: lightblue;
        border-style: solid;
        box-shadow: 0px;
    }
    .submit-btn{
        margin-top: 20px;
        width: 200px;
        height: 50px;
        color: ${mainColour};
        background-color: black;
        box-shadow: 0px;
        border-radius: 5px;
        border-style: solid;
        font-size: 16px;
    }
    .submit-btn:hover{
        color: black;
        background-color: ${mainColour};
        cursor: pointer;
    }
`

export default () => {
    return(
        <ContactsForm>
            <label for="name">
                Name:
            </label>
            <input className="input-field" type="text" name="your-name" placeholder="John Smith" />
            <label for="email">
                E-Mail:
            </label>
            <input className="input-field" type="text" name="your-email" placeholder="example@mail.com" />
            <label for="message">
                Message:
            </label>
            <textarea rows="10" className="input-field" name="your-message" placeholder="Hi Marc, I love your blog!" />
            <Recaptcha
                ref={recaptchaRef}
                sitekey="6LcHXrIUAAAAAGXsi5JIm7OKKo9b2bifbsS8BYgJ"
                onChange={onChange}
            />
            <input className="submit-btn" type="submit" value="Submit" />
        </ContactsForm>
    )
}