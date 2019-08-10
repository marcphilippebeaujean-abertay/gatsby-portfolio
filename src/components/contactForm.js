import React from 'react';
import styled from 'styled-components';
import { mainColour } from "../style/themeStyle";
import { smallScreenWidth } from "../style/layoutStyle";
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

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
        margin: 20px 0px;
        width: 200px;
        height: 50px;
        color: ${mainColour};
        background-color: black;
        box-shadow: 0px;
        border-radius: 5px;
        border-style: solid;
        font-size: 16px;
        transition: all 0.3s;
    }
    .submit-btn:hover{
        color: black;
        background-color: ${mainColour};
        cursor: pointer;
    }
    @media screen and (max-width: ${smallScreenWidth}px){
        .submit-btn{
            width: 100%;
        }
    }
`

export default () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const token = executeRecaptcha("send_email");
    console.log(token);
    return(
        <div>
            <ContactsForm>
                <label htmlFor="name">
                    Name:
                </label>
                <input className="input-field" type="text" name="your-name" placeholder="John Smith" />
                <label htmlFor="email">
                    E-Mail:
                </label>
                <input className="input-field" type="text" name="your-email" placeholder="example@mail.com" />
                <label htmlFor="message">
                    Message:
                </label>
                <textarea rows="10" className="input-field" name="your-message" placeholder="Hi Marc, I love your blog!" />
                <input className="submit-btn" type="submit" value="Submit" />
            </ContactsForm>
        </div>
    )
}