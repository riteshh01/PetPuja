// jab hum data koi multiple components me share krna chahte hai bina har ek component ko props pass kiye hue tab ⁡⁢⁣⁣creatContext⁡⁡ use hota hai
// ye ek ⁡⁢⁣⁣state variable⁡ create krta hai jiska value react automatically track krta hai, jab bhi value change hoti hai react component ko re-render krta hai taki UI update ho jaye
// ⁡⁢⁣⁣useEffect⁡ => ye hook hame side effects handle karne me help krta hai. Side effects mtlb wo kaam jo directly rendering se realted nahi hote hai jaise: API call karna, localStorage se data lena, event listener lagana/remove karna, theme load karna, etc.

import { createContext, useState, useEffect, Children } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    // on mount, check if the user had any saved theme in the localstorage or not?
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if(savedTheme){
            setTheme(savedTheme);
            document.body.className = savedTheme;
        }
        else{
            document.body.className = "light";
        }
    }, []);

    // now here, when the theme changes update bodyclass and localStorage
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    // ab yaha pe toggle krte theme ka functionality banayenge
    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    } 


    // make available globally 
    const contextValue = {theme, toggleTheme};

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    )
}
