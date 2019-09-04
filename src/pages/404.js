import React, { useEffect } from "react"
import { window } from "browser-monads";


const NotFoundPage = () => {
  if(window === undefined){
    window.location = "http://localhost:8000/page-not-found";
  }
  useEffect(()=>{
    if(window === undefined){
      window.location = "http://localhost:8000/page-not-found";
    }
  })
  return(
    <div style={{display: `absolute`,
                 width: `100vw`, height: `100vh`,
                 backgroundColor: `white`,
                 zIndex: `5`}}/>
  )
}

export default NotFoundPage
