import Link from "next/link";
import {useTheme} from "next-themes";
import{SunIcon ,MoonIcon} from "@heroicons/react/24/solid";

import {useState, useEffect} from "react";


    const Toggle = () => {
      const [mounted, setMounted] = useState(false);
      useEffect(() =>{
        setMounted(true);
      },[])

      const {systemTheme , theme, setTheme} = useTheme ();

      const renderThemeChanger= () => {
          if(!mounted) return null;
          const currentTheme = theme === "system" ? systemTheme : theme ;

          if(currentTheme ==="dark"){
            return (
              <SunIcon className="w-6 h-6 text-moodytext-100 " role="button" onClick={() => setTheme('light')} />
            )
          }

          else {
            return (
              <MoonIcon className="w-5 h-5 text-greytext-100 " role="button" onClick={() => setTheme('dark')} />
            )
          }
       };

      return (
        
          <div>    
            {renderThemeChanger()}
          </div>
        
      );
    };

    export default Toggle;
