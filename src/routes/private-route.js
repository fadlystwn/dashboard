import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {getCookie} from '../helpers/cookies'
const PrivateRoute = ({ children, ...rest }) => {
    let isLogin = getCookie('isLogin');

    return (
        <Route 
            {...rest}
            render={
                ({location}) => 
                    isLogin ? (children)
                    : (<Redirect to={{
                        pathname: 'login',
                        state: {from: location}
                    }}/>)
                }
        />
    )
}

export default PrivateRoute
