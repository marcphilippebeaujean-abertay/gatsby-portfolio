import React, { useState } from 'react';
import styled from 'styled-components';
import { mainColour } from "../style/themeStyle";
import { smallScreenWidth } from "../style/layoutStyle";
import { Link } from "gatsby";


const ContactsForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    label{
        font-weight: bold;
    }
    .input-field{
        padding: 10px 0px;
        margin-bottom: 5px;
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
    .error-hidden{
        display: none;
    }
    .error{
        padding: 0;
        margin: 0;
        color: red;
        transition: all 0.2s;
    }
    #checkbox-text{
        margin: 3px 0px;
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
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        message: '',
        termAgreement: false
    });
    const isValidInput = (fieldName, value) => {
        switch(fieldName){
            case 'name':
                return new RegExp(/(?=.{6,})([A-Z][a-z]+[\s]?){2,}/).test(value);
            case 'email':
                return new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/).test(value);
            case 'message':
                return value.length > 10;
            case 'termAgreement':
                return value;
            default:
                console.log('weird case');
        }
        return false;
    }
    const handleFormChange = e => {
        const changedElement = e.target;
        const { name, value } = changedElement;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }
    const toggleTermAgreement = e => {
        const value = !formValues.termAgreement;
        setFormValues({
            ...formValues,
            'termAgreement': value
        })
    }
    const inputsValid = () => {
        let inputsValid = true;
        for(const formName in formValues) {
            const inputIsValid = isValidInput(formName, formValues[`${formName}`]);
            const elementClassList = document.getElementById(`${formName}-error`).classList;
            if(inputIsValid){
                if(!elementClassList.contains('error-hidden')){
                    elementClassList.add('error-hidden');
                }
            } else {
                if(elementClassList.contains('error-hidden')){
                    elementClassList.remove('error-hidden');
                }
                inputsValid = false;
            }
        }
        return inputsValid;
    }
    const handleSubmit = e => {
        if(!inputsValid()){
            e.preventDefault();
            return;
        }
    }
    return(
        <ContactsForm action="/success" name="contact" method="post" data-netlify-honeypot="bot-field" data-netlify="true" onSubmit={handleSubmit}>
            <label htmlFor="name">
                Full Name
            </label>
            <input value={formValues.name} className="input-field" id="form-name" type="text" name="name" placeholder="John Smith" onChange={handleFormChange} />
            <p id="name-error" className="error error-hidden">Please enter a valid name!</p>
            <label htmlFor="email">
                E-Mail
            </label>
            <input value={formValues.email} className="input-field" id="form-email" type="text" name="email" placeholder="example@mail.com" onChange={handleFormChange} />
            <p id="email-error" className="error error-hidden">Please enter a valid email!</p>
            <label htmlFor="message">
                Message
            </label>
            <label value={formValues.message} id="recaptcha-token">Don't fill out if you are human<input type="text" name="bot-field" /></label>
            <textarea rows="10" id="form-message" className="input-field" name="message" placeholder="Hi Marc, I love your blog!" onChange={handleFormChange} />
            <p id="message-error" className="error error-hidden">Please enter a longer message!</p>
            <p id="checkbox-text">
                <input type="checkbox" name="termAgreement" onChange={toggleTermAgreement} /> I agree to the Terms and have read the <Link to={`/datenschutzerklarung/`}>Data Policy</Link>, including Cookie Use.
            </p>
            <p id="termAgreement-error" className="error error-hidden">Please agree to the terms!</p>
            <input id="submit-btn" type="submit" value="Submit" name="submit" />
        </ContactsForm>
    )
}