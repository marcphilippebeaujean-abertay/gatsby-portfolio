import { navigate } from "gatsby-link"

const isValidInput = (fieldName, value) => {
  let fieldStr = fieldName
  switch (fieldStr) {
    case "name":
      return value.length > 1
    case "email":
      return new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*\.\w{2,3}$/).test(value)
    case "message":
      return value.length > 10
    case "termAgreement":
      return value
    case "g-recaptcha-response":
      return value.length > 0
    default:
      console.log("weird field - " + fieldName)
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

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export const handleSubmit = (e, formValues, formTitle, resetFormCallback) => {
  e.preventDefault()
  if (!inputsValid(formValues, formTitle)) {
    return
  }
  const form = e.target

  const submitButton = document.getElementById(form.getAttribute("name") + "-submit");
  submitButton.disabled = true;

  const spinner = document.getElementById(form.getAttribute("name") + "-spinner");
  spinner.classList.remove("d-none")
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": form.getAttribute("name"),
      ...formValues,
    }),
  })
    .then(() => navigate(form.getAttribute("action")))
    .catch(error => alert(error))
    .finally(() => {
      spinner.classList.add("d-none");
      submitButton.disabled = false;
      resetFormCallback();
    })
}
