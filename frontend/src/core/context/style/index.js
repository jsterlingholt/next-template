//  ----
//  FRAMEWORK
import React from 'react'
//  ----
//  STYLED
import { 
    Global, 
    css, 
    keyframes 
} from '@emotion/react'

export const Context = React.createContext()

//  PROVIDER
//  ----
export const Provider = ({ css, children }) => {

    //  STATE
    //  ----
    let [state, setState] = React.useState()

    //  JSX
    //  ----
    return <>    
        <Context.Provider
            value={{
                state, setState
            }}>
            <Global styles={css}/>
            {children}
        </Context.Provider>
    </>
}
Context.displayName = 'StyleContext'





