import React from 'react';
import styled from 'styled-components';
import { mainColour } from "../style/themeStyle";
import { smallScreenWidth } from "../style/layoutStyle";

const ContactsForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    label{
        font-weight: bold;
    }
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
    #submit-btn{
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
    #submit-btn:hover{
        color: black;
        background-color: ${mainColour};
        cursor: pointer;
    }
    #recaptcha-token{
        display: none;
    }
    @media screen and (max-width: ${smallScreenWidth}px){
        #submit-btn{
            width: 100%;
        }
    }
`

export default () => {
    return(
        <ContactsForm name="contact" method="post" netlify-honeypot="bot-field" data-netlify="true">
            <label htmlFor="name">
                Full Name
            </label>
            <input className="input-field" id="form-name" type="text" name="name" placeholder="John Smith" />
            <label htmlFor="email">
                E-Mail
            </label>
            <input className="input-field" id="form-email" type="text" name="email" placeholder="example@mail.com" />
            <label htmlFor="message">
                Message
            </label>
            <label id="recaptcha-token">Don't fill out if you are human<input type="text" name="bot-field" /></label>
            <textarea rows="10" id="form-message" className="input-field" name="message" placeholder="Hi Marc, I love your blog!" />
            <input id="submit-btn" type="submit" value="Submit" disabled />
        </ContactsForm>
    )
}