import styled from "styled-components"
import { mainColour } from "../../style/themeStyle"
import { smallScreenWidth } from "../../style/layoutStyle"

export const inputFieldHeight = 40

export default styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-justify: none;
  label {
    font-weight: bold;
  }
  .input-field {
    /*padding: ${inputFieldHeight}px 0px;*/
    height: ${inputFieldHeight}px;
    margin-bottom: 5px;
    font-size: 16px;
    border-style: solid;
    border-width: 0.5px;
    border-color: lightgrey;
    border-radius: 5px;
  }
  .input-field:hover {
    border-color: lightblue;
    border-style: solid;
    box-shadow: 0px;
  }
  textarea {
    height: 150px !important;
  }
  .error-hidden {
    display: none;
  }
  .error {
    padding: 0;
    margin: 0;
    color: red;
    transition: all 0.2s;
  }
  #checkbox-text {
    margin: 5px !important;
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
