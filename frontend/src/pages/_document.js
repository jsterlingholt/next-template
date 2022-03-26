//  FRAMEWORK
//  ----
import React from 'react'
import { 
  Html, 
  Head, 
  Main, 
  NextScript 
} from 'next/document'


//  ----
const Document = () => {
  return (
    <Html>
        <Head/>

          {/*
          <meta name="mobile-web-app-capable" content="yes"/>
          <meta name="apple-mobile-web-app-capable" content="yes"/>
          <meta name="theme-color" content="#E20074"/>
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"/>
          */}





        <body lang="en">
            <Main />
            <NextScript />
        </body>
    </Html>
  )
}
export default Document
//  ----