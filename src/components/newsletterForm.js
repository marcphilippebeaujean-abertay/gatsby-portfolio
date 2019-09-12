import React, { useState } from "react"
import styled from "styled-components"

const NewsletterForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export default () => {
  const [formValues, setFormValues] = useState({
    email: "",
    termAgreement: false,
  })
  const isValidInput = (fieldName, value) => {
    switch (fieldName) {
      case "email":
        return new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/).test(
          value
        )
      case "termAgreement":
        return value
      default:
        console.log("weird case")
    }
    return false
  }
  return (
    <NewsletterForm
      action="/success/"
      name="contact"
      method="post"
      data-netlify-honeypot="bot-field"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input
        value={formValues.email}
        className="input-field"
        id="form-email"
        type="email"
        name="email"
        placeholder="example@mail.com"
        onChange={handleFormChange}
      />
    </NewsletterForm>
  )
}
