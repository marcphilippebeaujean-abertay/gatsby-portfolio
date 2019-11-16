import styled from "styled-components"
import ButtonMixin from "../../style/widgetStyles/btnMixin"
import { Form } from "react-bootstrap"

export const inputFieldHeight = 40

export default styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-justify: none;
  .input-field {
    height: ${inputFieldHeight}px;
  }
  .error-hidden {
    display: none;
  }
  .error {
    color: red;
    transition: all 0.2s;
  }
  ${ButtonMixin}
`
