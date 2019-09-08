import React from "react"
import { PageContentWrapper } from '../templates/page';

export default ({ pageContext }) => {
  return (
    <PageContentWrapper>
      <h1>Error 404</h1>
      <p><b>Oops</b>, we couldn't find this page!</p>
    </PageContentWrapper>
  )
}