import React, {useState, createContext} from 'react';

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    // const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState([])

    return(
        <GlobalContext.Provider value={{
            // loading,
            loggedIn,
            token,
            user,
            // setLoading,
            setLoggedIn,
            setToken,
            setUser
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;