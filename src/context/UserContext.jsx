import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const UserContext = createContext([])
export const useUserContext = () => useContext(UserContext)

const UserContextProvider = ({ children }) => {
    //se declaran todos los estados y funciones globales
    const [user, setUser] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider