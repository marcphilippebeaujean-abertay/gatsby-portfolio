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
  const handleFormChange = e => {
    const changedElement = e.target
    const { name, value } = changedElement
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }
  const toggleTermAgreement = e => {
    const value = !formValues.termAgreement
    setFormValues({
      ...formValues,
      termAgreement: value,
    })
  }
  const inputsValid = () => {
    let inputsValid = true
    for (const formName in formValues) {
      const inputIsValid = isValidInput(formName, formValues[`${formName}`])
      const elementClassList = document.getElementById(`${formName}-error`)
        .classList
      if (inputIsValid) {
        if (!elementClassList.contains("error-hidden")) {
          elementClassList.add("error-hidden")
        }
      } else {
        if (elementClassList.contains("error-hidden")) {
          elementClassList.remove("error-hidden")
        }
        inputsValid = false
      }
    }
    return inputsValid
  }
  const handleSubmit = e => {
    if (!inputsValid()) {
      e.preventDefault()
      return
    }
  }
  return (
    <NewsletterForm
      action="/success/"
      name="newsletter-subscription"
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
