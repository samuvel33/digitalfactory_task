import { Children, createContext, useState } from "react";

const MyContext = createContext()

const Myprovider = ({ children }) => {

    const [navlink, setNavlink] = useState({ name: "Home", link: "/" })

    return (
        <MyContext.Provider value={{ navlink, setNavlink }}>
            {children}
        </MyContext.Provider>
    )
}


export { MyContext, Myprovider }