import React from "react"

export const PageContentWrapper = ({ children }) => {
  return (
    <div className="default-page-layout">
      <div className="container">{children}</div>
    </div>
  )
}
