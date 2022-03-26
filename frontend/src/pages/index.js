//  FRAMEWORK
//  ----
import React from 'react'
//  ----
import Head from 'components/atoms/head'


import styled from '@emotion/styled'
import { css } from '@emotion/react'


//  ----
const Home = () => {

  let meta = [
    { name: 'keywords', content: 'words' },
    { name: 'keywords', content: 'biggerword', property: "test" }
  ]
  return <>
    <Head 
      title="Home Page"
      meta={meta}
    />

    <div>Home page</div>
  </>
}
export default Home
//  ----

const Test = css`
  body {
    background: green;
  }
`