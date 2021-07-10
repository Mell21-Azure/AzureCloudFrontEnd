import React, { useState }  from "react"

const UserContext = React.createContext(null);

export const AuthContext = ({user, children}) => {
    const [currentUser, setCurrentUser] = useState(user);
    const isAuthenticated = ()=>{
        return currentUser!==undefined && currentUser.token!== "";
    }
    return (
        <UserContext.Provider value={{currentUser, setCurrentUser, isAuthenticated}}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => React.useContext(UserContext)
