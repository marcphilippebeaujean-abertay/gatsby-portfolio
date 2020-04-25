import React, { useState } from "react"
import { Link } from "gatsby";
import Recaptcha from "react-google-recaptcha"

import {
  handleFormChange,
  toggleTermAgreement,
  handleSubmit,
} from "./formFunctionality"

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY
const initFormState = {
  name: "",
  email: "",
  message: "",
  termAgreement: false,
  "g-recaptcha-response": "",
}


export default ({ formTitle }) => {
  const [formValues, setFormValues] = useState(initFormState)
  const handleRecaptcha = value => {
    setFormValues({
      ...formValues,
      "g-recaptcha-response": value,
    })
  }
  const formName = "contact"
  return (
    <form
      action="/success-contact/"
      name={formName}
      className="form"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={e => handleSubmit(e, formValues, formTitle, () => setFormValues({ ...initFormState }))}
    >
      <div className="form-group">
        <label htmlFor="name">Full Name</label>
        <input
          value={formValues.name}
          type="text"
          name="name"
          className="form-control"
          placeholder="John Smith"
          onChange={e => handleFormChange(e, formValues, setFormValues)}
        />
        <small
          id={`${formTitle}-name-error`}
          className="error error-hidden form-text"
        >
          Please enter a longer name!
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="email">E-Mail</label>
        <input
          value={formValues.email}
          type="email"
          name="email"
          className="form-control"
          placeholder="example@mail.com"
          onChange={e => handleFormChange(e, formValues, setFormValues)}
        />
        <small
          id={`${formTitle}-email-error`}
          className="error error-hidden form-text"
        >
          Please enter a valid email!
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="message">Message</label>
        <input
          className="form-control"
          as="textarea"
          rows="6"
          name="message"
          placeholder="Hi Marc, I love your blog!"
          onChange={e => handleFormChange(e, formValues, setFormValues)}
        />
        <small
          id={`${formTitle}-message-error`}
          className="error error-hidden form-text"
        >
          Please enter a longer message!
        </small>
      </div>

      <div className="form-group">
        <div className="form-check">
          <input
            className="pt-none form-check-input"
            type="checkbox"
            name="termAgreement"
            onChange={e => toggleTermAgreement(e, formValues, setFormValues)}
          />
          <label className="form-check-label" for="termAgreement">I agree to the terms and have read the <Link to={"/imprint/"}>data policy.</Link></label>
        </div>
        <small
          id={`${formTitle}-termAgreement-error`}
          className="error error-hidden form-check-label"
        >
          Please agree to the terms!
        </small>
      </div>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value={formName} />
      <div className="form-group">
        <Recaptcha sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
        <small
          id={`${formTitle}-g-recaptcha-response-error`}
          className="error error-hidden form-text"
        >
          Please confirm that you are not a robot!
        </small>
      </div>
      <button
        id={formName + "-submit"}
        className="submit-btn"
      >Submit <div id={formName + "-spinner"} animation="border" role="status" className="spinner-border form-spinner d-none"><span className="sr-only"></span></div></button>
    </form>
  )
}
