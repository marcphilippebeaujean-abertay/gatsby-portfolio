const isValidInput = (fieldName, value) => {
  switch (fieldName) {
    case "name":
      return new RegExp(/(?=.{6,})([A-Z][a-z]+[\s]?){2,}/).test(value)
    case "email":
      return new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/).test(value)
    case "message":
      return value.length > 10
    case "termAgreement":
      return value
    default:
      console.log("weird case")
  }
  return false
}

export const handleFormChange = (e, formValues, setFormValues) => {
  const changedElement = e.target
  const { name, value } = changedElement
  setFormValues({
    ...formValues,
    [name]: value,
  })
}
export const toggleTermAgreement = (e, formValues, setFormValues) => {
  const value = !formValues.termAgreement
  setFormValues({
    ...formValues,
    termAgreement: value,
  })
}
export const inputsValid = formValues => {
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
