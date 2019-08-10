import React from 'react'
import ContactForm from '../components/contactForm';
import { PageContentWrapper } from './page';

export default ({ pageContext }) => {
    return(
      <PageContentWrapper>
        <h2 dangerouslySetInnerHTML={{__html: pageContext.title}} />
        <ContactForm />
      </PageContentWrapper>)
}