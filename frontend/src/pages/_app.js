//  FRAMEWORK
//  ----
import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Link from 'next/link'
//  STYLES
//  ----
import 'core/styles/fonts.css'
import 'reset-css'
import { css, keyframes } from '@emotion/react'



// ----
//  02. Define App
function App({ Component, pageProps }) {
  // let [user, setUser] = React.useState()
  let [ isAuthenticated, setIsAuthenticated ] = React.useState(false)

  
  return <Component/>
}
export default App












//  EVERYTHING BELOW IS FOR TESTING ONLY
//  ----
const Button = ({ auth, children }) => {
  let { isAuthenticated, setIsAuthenticated } = auth
  
  const click = () => { setIsAuthenticated(!isAuthenticated) }

  return <button onClick={click}>
    hello
  </button>
} //  ----