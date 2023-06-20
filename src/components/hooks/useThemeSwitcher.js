import React, { useEffect, useState } from 'react'

const useThemeSwitcher = () => {
    // prefer-color-scheme -> default css feature, to detecy if the user's cjoice of lightor dark theme, it based on the OS settings too.
    const preferDarkQuery = "(prefer-color-scheme: dark)";
    const [ mode, setMode ] = useState("");

    useEffect(() => {
        
        const mediaQuery = window.matchMedia(preferDarkQuery);
        // store user pref in local storage
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () =>{
            /*This if conditon is for the new page session/visit, check variable would not be present in local storage, and it needs to be created*/
            if(userPref){
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                
                if(check==="dark"){
                    document.documentElement.classList.add("dark");
                }else{
                    document.documentElement.classList.remove("dark");
                }
                
            }else{
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                
                if(check==="dark"){
                    document.documentElement.classList.add("dark");
                }else{
                    document.documentElement.classList.remove("dark");
                }
            }
        }

        // To check the conditions in the initial PageLoad, and whenever any changes happen in the mediaQuery
        handleChange();

        mediaQuery.addEventListener("change", handleChange);
        
        return () => mediaQuery.removeEventListener("change", handleChange);

    },[]);

    /*This useEffect is for updating the value in localStorage*/
    useEffect(() => {
        if(mode==="dark"){
            window.localStorage.setItem("theme","dark");
            document.documentElement.classList.add("dark");
        }
        /*This initial value od hte state is an empty string, so this check helps to hold the user preference even after a page refresh*/ 
        if(mode==="light"){
            window.localStorage.setItem("theme","light");
            document.documentElement.classList.remove("dark");
        }
    },[mode]);

  return [ mode, setMode ]
}

export default useThemeSwitcher