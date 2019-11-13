import styled from "styled-components"
import { Card } from "react-bootstrap"

import { mainColour } from "../themeStyle"

export default styled(Card)`
  position: relative;
  bottom: 0px;
  transition: all ease-in-out 0.2s;
  @media only screen and (min-width: 768px) {
    :hover {
      bottom: 4px;
      border-color: ${mainColour};
      box-shadow: 0px 2px 1px 0.5px rgba(0, 0, 0, 0.2);
    }
  }
`
