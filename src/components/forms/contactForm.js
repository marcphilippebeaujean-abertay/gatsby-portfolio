import React, { useState } from "react"
import FormWrapper from "./formStyleComponent"
import {
  handleFormChange,
  inputsValid,
  toggleTermAgreement,
} from "./formFunctionality"
import { Link } from "gatsby"

export default ({ formTitle }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    termAgreement: false,
  })
  const handleSubmit = e => {
    if (!inputsValid(formValues, formTitle)) {
      e.preventDefault()
      return
    }
  }
  return (
    <FormWrapper
      action="/success/"
      name="contact"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <label htmlFor="name">Full Name</label>
      <input
        value={formValues.name}
        className="input-field form-name"
        type="text"
        name="name"
        placeholder="John Smith"
        onChange={e => handleFormChange(e, formValues, setFormValues)}
      />
      <p id={`${formTitle}-name-error`} className="error error-hidden">
        Please enter a longer name!
      </p>
      <label htmlFor="email">E-Mail</label>
      <input
        value={formValues.email}
        className="input-field form-email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        onChange={e => handleFormChange(e, formValues, setFormValues)}
      />
      <p id={`${formTitle}-email-error`} className="error error-hidden">
        Please enter a valid email!
      </p>
      <label htmlFor="message">Message</label>
      <textarea
        rows="10"
        className="form-message input-field"
        name="message"
        placeholder="Hi Marc, I love your blog!"
        onChange={e => handleFormChange(e, formValues, setFormValues)}
      />
      <p id={`${formTitle}-message-error`} className="error error-hidden">
        Please enter a longer message!
      </p>
      <p id="checkbox-text">
        <input
          type="checkbox"
          name="termAgreement"
          onChange={e => toggleTermAgreement(e, formValues, setFormValues)}
        />{" "}
        I agree to the terms and have read the{" "}
        <Link to={`/datenschutzerklarung/`}>Data Policy</Link>.
      </p>
      <p id={`${formTitle}-termAgreement-error`} className="error error-hidden">
        Please agree to the terms!
      </p>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input
        className="submit-btn"
        type="submit"
        value="Submit"
        name="submit"
      />
    </FormWrapper>
  )
}
