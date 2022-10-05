import React, {useState, createContext} from 'react';

export const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    // const [loading, setLoading] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState('')
    const [user, setUser] = useState([])
    const [notes, setNotes] = useState([])

    return(
        <GlobalContext.Provider value={{
            // loading,
            loggedIn,
            token,
            user,
            notes,
            // setLoading,
            setLoggedIn,
            setToken,
            setUser,
            setNotes
        }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalProvider;