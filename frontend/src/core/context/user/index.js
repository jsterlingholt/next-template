//  ----
//  FRAMEWORK
import React from 'react'
//  ----
//  STYLED
export const Context = React.createContext()

//  PROVIDER
//  ----
export const Provider = ({ css, children }) => {

    //  STATE
    //  ----
    let [userID, setUserID] = react.useState()
    let [isAuthenticated, setIsAuthenticated] = React.useState()

    //  JSX
    //  ----
    return <>    
        <Context.Provider
            value={{
                userID, setUserID,
                isAuthenticated, setIsAuthenticated,
            }}>
            {children}
        </Context.Provider>
    </>
}
Context.displayName = 'userContext'