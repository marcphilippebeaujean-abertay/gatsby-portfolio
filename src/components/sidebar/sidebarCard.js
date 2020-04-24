import React from "react"

import HoverCard from "../widgets/hoverCard"

export default ({ children, title, icon }) => (
  <HoverCard className="sidebar-card">
    <div className="card-body">
      <h5 className="card-title">
        {icon}
        <span className="card-heading">{title}</span>
      </h5>
      {children}
    </div>
  </HoverCard>
)
