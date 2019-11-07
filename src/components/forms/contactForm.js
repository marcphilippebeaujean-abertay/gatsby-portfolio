import React, { useState } from "react"
import { Form } from "react-bootstrap"
import Recaptcha from "react-google-recaptcha"

import FormWrapper from "./formStyleComponent"
import {
  handleFormChange,
  toggleTermAgreement,
  handleSubmit,
} from "./formFunctionality"

const RECAPTCHA_KEY = process.env.GATSBY_SITE_RECAPTCHA_KEY

export default ({ formTitle }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
    termAgreement: false,
    "g-recaptcha-response": "",
  })
  const handleRecaptcha = value => {
    setFormValues({
      ...formValues,
      "g-recaptcha-response": value,
    })
  }
  return (
    <FormWrapper
      action="/success-contact/"
      name="contact"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={e => handleSubmit(e, formValues, formTitle)}
    >
      <Form.Group controlId="name">
        <Form.Label htmlFor="name">Full Name</Form.Label>
        <Form.Control
          value={formValues.name}
          type="text"
          name="name"
          placeholder="John Smith"
          onChange={e => handleFormChange(e, formValues, setFormValues)}
        />
        <Form.Text
          id={`${formTitle}-name-error`}
          className="error error-hidden"
        >
          Please enter a longer name!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label htmlFor="email">E-Mail</Form.Label>
        <Form.Control
          value={formValues.email}
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

      <Form.Group controlId="message">
        <Form.Label htmlFor="message">Message</Form.Label>
        <Form.Control
          as="textarea"
          rows="6"
          name="message"
          placeholder="Hi Marc, I love your blog!"
          onChange={e => handleFormChange(e, formValues, setFormValues)}
        />
        <Form.Text
          id={`${formTitle}-message-error`}
          className="error error-hidden"
        >
          Please enter a longer message!
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="termAgreement">
        <Form.Check
          className="pt-none"
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
      <input type="hidden" name="form-name" value="contact" />
      <Form.Group controlId="g-recaptcha-response">
        <Recaptcha sitekey={RECAPTCHA_KEY} onChange={handleRecaptcha} />
        <Form.Text
          id={`${formTitle}-g-recaptcha-response-error`}
          className="error error-hidden"
        >
          Please confirm that you are not a robot!
        </Form.Text>
      </Form.Group>
      <input
        className="submit-btn"
        type="submit"
        value="Submit"
        name="submit-contact"
      />
    </FormWrapper>
  )
}
