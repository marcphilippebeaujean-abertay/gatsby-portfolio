import styled from "styled-components"
import { mainColour } from "./themeStyle"
import { smallScreenWidth } from "./layoutStyle"

export default styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  label {
    font-weight: bold;
  }
  .input-field {
    padding: 10px 0px;
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
    margin: 3px 0px;
  }
  #submit-btn {
    width: 200px;
    height: 50px;
    color: ${mainColour};
    background-color: black;
    box-shadow: 0px;
    border-radius: 5px;
    border-style: solid;
    font-size: 16px;
    transition: all 0.3s;
  }
  #submit-btn:hover {
    color: black;
    background-color: ${mainColour};
    cursor: pointer;
  }
  @media screen and (max-width: ${smallScreenWidth}px) {
    #submit-btn {
      width: 100%;
    }
  }
`
