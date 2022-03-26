import React from 'react'
import * as Style from './style'


const Login = ({ children }) => {

    React.useEffect(() => {
        document.body.style.background = 'green'
    }, [])


    return <Style.Container>
        {children}
    </Style.Container>
}
export default Login