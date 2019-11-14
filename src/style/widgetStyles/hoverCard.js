import styled from "styled-components"
import { Card } from "react-bootstrap"

import { mainColour } from "../themeStyle"

export default styled(Card)`
  position: relative;
  bottom: 0px;
  transition: all ease-in-out 0.2s;
  box-shadow: 0.5px 1px 5px 0.3px rgba(0, 0, 0, 0.2);
  color: black !important;
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
      box-shadow: 0.1px 2px 5px 0.5px rgba(0, 0, 0, 0.2);
    }
  }
`
