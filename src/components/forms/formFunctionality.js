const isValidInput = (fieldName, value) => {
  let fieldStr =
    fieldName.lastIndexOf("-") > 0
      ? fieldName.slice(fieldName.lastIndexOf("-") + 1)
      : fieldName
  switch (fieldStr) {
    case "name":
      return value.length > 1
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
export const inputsValid = (formValues, formTitle) => {
  let inputsValid = true
  for (const formName in formValues) {
    const inputIsValid = isValidInput(formName, formValues[`${formName}`])
    const elementClassList = document.getElementById(
      `${formTitle}-${formName}-error`
    ).classList
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
