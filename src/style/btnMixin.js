import { mainColour } from "./themeStyle"
import { smallScreenWidth } from "./layoutStyle"

export default `
  .submit-btn {
    width: 200px;
    height: 50px;
    color: ${mainColour};
    background-color: black;
    border: 0;
    border-radius: 5px 5px 5px 5px;
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
