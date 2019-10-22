import React, { useState } from "react"
import { Checkbox } from "@material-ui/core"
import FormWrapper from "./formStyleComponent"
import {
  handleFormChange,
  handleSubmit,
  toggleTermAgreement,
} from "./formFunctionality"
import { Link } from "gatsby"
import styled from "styled-components"

const NewsletterWrapper = styled.div`
  background-color: white;
  padding: 5px 15px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
  #form-email {
    width: calc(100% - 20px);
    max-width: 100%;
    overflow: hidden;
  }
`

const initFormState = {
  email: "",
  termAgreement: false,
}

export default ({ formTitle }) => {
  const [formValues, setFormValues] = useState({
    ...initFormState,
  })
  return (
    <FormWrapper
      action="/success-newsletter/"
      name="newsletter-subscription"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      id="sub-form"
      onSubmit={e => {
        handleSubmit(e, formValues, formTitle)
        setFormValues({
          ...initFormState,
        })
      }}
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
          <Checkbox
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
