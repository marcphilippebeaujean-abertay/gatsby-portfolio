import React, { useState } from "react"
import { IoMdPaper } from "react-icons/io"
import { Link } from "gatsby"

import SidebarCard from "../sidebar/sidebarCard"
import {
  handleFormChange,
  handleSubmit,
  toggleTermAgreement,
} from "./formFunctionality"

const initFormState = {
  email: "",
  termAgreement: false,
}

export default ({ formTitle }) => {
  const [formValues, setFormValues] = useState({
    ...initFormState,
  })
  const formName = "newsletter-subscription";
  return (
    <form
      action="/success-newsletter/"
      name={formName}
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      className="form"
      id="sub-form"
      onSubmit={e => {
        handleSubmit(e, formValues, formTitle, () => setFormValues({
          ...initFormState,
        }))
      }}
    >
      <SidebarCard title={"Newsletter"} icon={<IoMdPaper size={32} />}>
        <div id="form-element-wrapper">
          <div className="form-group">
            <input
              value={formValues.email}
              className="input-field form-control"
              id="form-email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={e => handleFormChange(e, formValues, setFormValues)}
            />
            <small
              id={`${formTitle}-email-error`}
              className="form-text error error-hidden"
            >
              Please enter a valid email!
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
              <label className="form-check-label" htmlFor="termAgreement">I agree to and have read the <Link to={"/imprint/"}>data policy.</Link></label>
            </div>
            <small
              id={`${formTitle}-termAgreement-error`}
              className="form-text error error-hidden form-check-label"
            >
              Please agree to the terms!
            </small>
          </div>
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="form-name"
            value={formName}
          />
          <button id={formName + "-submit"} className="submit-btn extended-submit-btn">Subscribe <div id={formName + "-spinner"} animation="border" role="status" className="spinner-border form-spinner d-none"><span className="sr-only"></span></div></button>
          {/*<input
            className="submit-btn extended-submit-btn"
            type="submit"
            value="Subscribe"
            name="submit-sub"
          />*/}
        </div>
      </SidebarCard>
    </form>
  )
}
