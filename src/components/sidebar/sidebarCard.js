import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

import HoverCard from "../../style/widgetStyles/hoverCard"

export const SidebarCard = styled(HoverCard)`
  overflow: hidden;
  margin: 0px auto;
  .card-heading {
    position: relative;
    top: 2.3px;
    left: 10px;
  }
`

export default ({ children, title, icon }) => (
  <SidebarCard>
    <Card.Body>
      <Card.Title>
        {icon}
        <span className="card-heading">{title}</span>
      </Card.Title>
      {children}
    </Card.Body>
  </SidebarCard>
)
