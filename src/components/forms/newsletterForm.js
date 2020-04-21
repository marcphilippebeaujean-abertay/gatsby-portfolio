import React, { useState } from "react"
import { Form, Spinner } from "react-bootstrap"
import { IoMdPaper } from "react-icons/io"

import SidebarCard from "../sidebar/sidebarCard"
import FormWrapper from "./formStyleComponent"
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
    <FormWrapper
      action="/success-newsletter/"
      name={formName}
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      id="sub-form"
      onSubmit={e => {
        handleSubmit(e, formValues, formTitle, () => setFormValues({
          ...initFormState,
        }))
      }}
    >
      <SidebarCard title={"Newsletter"} icon={<IoMdPaper size={32} />}>
        <div id="form-element-wrapper">
          <Form.Group>
            <Form.Control
              value={formValues.email}
              className="input-field"
              id="form-email"
              type="email"
              name="email"
              placeholder="example@mail.com"
              onChange={e => handleFormChange(e, formValues, setFormValues)}
            />
            <Form.Text
              id={`${formTitle}-email-error`}
              className="error error-hidden"
            >
              Please enter a valid email!
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="termAgreement">
            <Form.Check
              label="I agree to the terms and have read the Data Policy"
              type="checkbox"
              name="termAgreement"
              onChange={e => toggleTermAgreement(e, formValues, setFormValues)}
            />
            <Form.Text
              id={`${formTitle}-termAgreement-error`}
              className="error error-hidden"
            >
              Please agree to the terms!
            </Form.Text>
          </Form.Group>
          <input type="hidden" name="bot-field" />
          <input
            type="hidden"
            name="form-name"
            value={formName}
          />
          <button id={formName + "-submit"} className="submit-btn extended-submit-btn">Subscribe <Spinner id={formName + "-spinner"} animation="border" role="status" className="form-spinner d-none" /></button>
          {/*<input
            className="submit-btn extended-submit-btn"
            type="submit"
            value="Subscribe"
            name="submit-sub"
          />*/}
        </div>
      </SidebarCard>
    </FormWrapper>
  )
}
