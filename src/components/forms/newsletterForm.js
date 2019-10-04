import React, { useState } from "react"
import FormWrapper from "./formStyleComponent"
import {
  handleFormChange,
  handleSubmit,
  toggleTermAgreement,
} from "./formFunctionality"
import { Link } from "gatsby"
import styled from "styled-components"

const NewsletterWrapper = styled.div`
  background-color: #e9e5e5;
  padding: 5px 15px;
  border-radius: 5px;
  margin: 2px;
  overflow: hidden;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.5);
  #form-email {
    width: calc(100% - 20px);
    max-width: 100%;
    overflow: hidden;
  }
`

export default ({ formTitle }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    termAgreement: false,
  })
  return (
    <FormWrapper
      action="/success-newsletter/"
      name="newsletter-subscription"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <NewsletterWrapper>
        <p>
          <b>
            Fancy becoming a better Developer? Subscribe to the newsletter to
            get updated on new content!
          </b>
        </p>
        <input
          value={formValues.email}
          className="input-field"
          id="form-email"
          type="email"
          name="email"
          placeholder="example@mail.com"
          onChange={e => handleFormChange(e, formValues, setFormValues)}
        />
        <p id={`${formTitle}-email-error`} className="error error-hidden">
          Please enter a valid email!
        </p>
        <p id="checkbox-text">
          <input
            type="checkbox"
            name="termAgreement"
            onChange={e => toggleTermAgreement(e, formValues, setFormValues)}
          />{" "}
          I agree to and have read the{" "}
          <Link to={`/datenschutzerklarung/`}>Data Policy</Link>. I acknowledge
          that I can cancel the newsletter subscription at any time.
        </p>
        <p
          id={`${formTitle}-termAgreement-error`}
          className="error error-hidden"
        >
          Please agree to the terms!
        </p>
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="newsletter-subscription" />
        <input
          className="submit-btn extended-submit-btn"
          type="submit"
          value="Subscribe"
          name="submit-sub"
        />{" "}
      </NewsletterWrapper>
    </FormWrapper>
  )
}
