import styled from "styled-components"
import { Card } from "react-bootstrap"

import { mainColour } from "../themeStyle"

export default styled(Card)`
  .h5 {
    margin-top: 0px;
  }
  position: relative;
  bottom: 0px;
  transition: all ease-in-out 0.2s;
  color: black !important;
  box-shadow: 0px 0px 2px 0.2px rgba(0, 0, 0, 0.2);
  a {
    color: black;
  }
  a:hover {
    color: black;
    text-decoration: none !important;
  }
  @media only screen and (min-width: 768px) {
    :hover {
      bottom: 4px;
      border-color: ${mainColour};
      box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.2);
    }
  }
`
