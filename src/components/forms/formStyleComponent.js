import styled from "styled-components"
import { mainColour } from "../../style/themeStyle"
import { smallScreenWidth } from "../../style/layoutStyle"
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
  .submit-btn {
    width: 200px;
    height: 50px;
    color: ${mainColour};
    background-color: black;
    border: 0;
    border-radius: 5px 5px 5px 5px;
    font-size: 16px;
    transition: all 0.3s;
    margin-bottom: 10px;
    box-shadow: 1px 1px 4px black;
  }
  .submit-btn:hover {
    color: black;
    background-color: ${mainColour};
    cursor: pointer;
  }
  .extended-submit-btn {
    width: 100% !important;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    .submit-btn {
      width: 100%;
    }
  }
`
