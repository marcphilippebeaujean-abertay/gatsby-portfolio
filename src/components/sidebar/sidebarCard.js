import React from "react"
import { Card } from "react-bootstrap"
import styled from "styled-components"

const SidebarCard = styled(Card)`
  overflow: hidden;
  .card-heading {
    position: relative;
    top: 2.3px;
    left: 10px;
  }
`

export default ({ children, title, icon }) => (
  <SidebarCard>
    <Card.Body>
      <div>
        <Card.Title>
          {icon}
          <span className="card-heading">{title}</span>
        </Card.Title>
      </div>
      {children}
    </Card.Body>
  </SidebarCard>
)
