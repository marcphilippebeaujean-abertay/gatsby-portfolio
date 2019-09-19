import React, { useState } from "react"
import FormWrapper from "../style/formStyleComponent"
import {
  handleFormChange,
  inputsValid,
  toggleTermAgreement,
} from "../utility/formFunctionality"
import { Link } from "gatsby"

export default () => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    termAgreement: false,
  })
  const handleSubmit = e => {
    if (!inputsValid(formValues)) {
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
        className="input-field"
        id="form-name"
        type="text"
        name="name"
        placeholder="John Smith"
        onChange={e => handleFormChange(e, formValues, setFormValues)}
      />
      <p id="name-error" className="error error-hidden">
        Please enter a valid name!
      </p>
      <label htmlFor="email">E-Mail</label>
      <input
        value={formValues.email}
        className="input-field"
        id="form-email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        onChange={e => handleFormChange(e, formValues, setFormValues)}
      />
      <p id="email-error" className="error error-hidden">
        Please enter a valid email!
      </p>
      <label htmlFor="message">Message</label>
      <textarea
        rows="10"
        id="form-message"
        className="input-field"
        name="message"
        placeholder="Hi Marc, I love your blog!"
        onChange={e => handleFormChange(e, formValues, setFormValues)}
      />
      <p id="message-error" className="error error-hidden">
        Please enter a longer message!
      </p>
      <p id="checkbox-text">
        <input
          type="checkbox"
          name="termAgreement"
          onChange={e => toggleTermAgreement(e, formValues, setFormValues)}
        />{" "}
        I agree to the Terms and have read the{" "}
        <Link to={`/datenschutzerklarung/`}>Data Policy</Link>, including Cookie
        Use.
      </p>
      <p id="termAgreement-error" className="error error-hidden">
        Please agree to the terms!
      </p>
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="contact" />
      <input id="submit-btn" type="submit" value="Submit" name="submit" />
    </FormWrapper>
  )
}
