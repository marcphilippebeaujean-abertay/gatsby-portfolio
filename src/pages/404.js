import React, { useEffect } from "react"

const NotFoundPage = () => {
  window.location = "http://localhost:8000/page-not-found";
  useEffect(()=>{
    window.location = "http://localhost:8000/page-not-found";
  })
  return(
    <div style={{display: `absolute`,
                 width: `100vw`, height: `100vh`,
                 backgroundColor: `white`,
                 zIndex: `5`}}/>
  )
}

export default NotFoundPage
