import React, { useState } from "react"
import FormWrapper from "./formStyleComponent"
import {
  handleFormChange,
  handleSubmit,
  toggleTermAgreement,
} from "./formFunctionality"
import { Link } from "gatsby"
import styled from "styled-components"
import { IoMdPaper } from "react-icons/io"

const NewsletterWrapper = styled.div`
  background-color: white;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.7);
  #form-element-wrapper {
    padding: 0px 15px;
  }
  #form-email {
    width: calc(100% - 20px);
    max-width: 100%;
    overflow: hidden;
  }
  #newsletter-heading {
    position: relative;
    top: 2.5px;
    left: 10px;
  }
  #newsletter-heading-wrapper {
    position: relative;
    top: 9px;
    left: 15px;
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
        <div id="newsletter-heading-wrapper">
          <p>
            <IoMdPaper size={32} />
            <b id="newsletter-heading">Newsletter</b>
          </p>
        </div>
        <hr></hr>
        <div id="form-element-wrapper">
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
            <Link to={`/datenschutzerklarung/`}>Data Policy</Link>.
          </p>
          <p
            id={`${formTitle}-termAgreement-error`}
            className="error error-hidden"
          >
            Please agree to the terms!
          </p>
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="form-name"
            value="newsletter-subscription"
          />
          <input
            className="submit-btn extended-submit-btn"
            type="submit"
            value="Subscribe"
            name="submit-sub"
          />{" "}
        </div>
      </NewsletterWrapper>
    </FormWrapper>
  )
}
