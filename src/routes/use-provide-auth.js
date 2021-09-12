import React from 'react'
import login from '../api/login'

const useProvideAuth = () => {
    const [user, setUser] = React.useState(null)
    
    const signIn = (data) => {
        login(data).then( response => {
            console.log(response.data)
            document.cookie = `token=${response.data.token}; expires=${response.data.expire};`
            document.cookie = 'isLogin=true'
        }).catch(err => console.log(err))
       
    }
    
    const signOut = () => {
        setUser(null)
    }

    return {
        user,
        signIn,
        signOut
    }
        
}

export default useProvideAuth
