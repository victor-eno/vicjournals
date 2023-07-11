import Link from "next/link";
import Toggle from "../components/Toggle";



const Header = () => {
    return ( 
        <nav className="flex p-4 dark:border-moodytext-100 border-b"> 

      <div className="flex-none">
            <Link href="/" passHref>
              <a>
               <div className="cursor-pointer">
                  <h1 className="font-bold text-greytext-100">Blog</h1>
               </div>
               </a>
            </Link>
          </div>
          <div className="flex-1 px-4">
            <Link href="/about" passHref>
              <a>
               <div className="cursor-pointer">
                  <h1 className="font-bold text-greytext-100">About</h1>
               </div>
               </a>
            </Link>
          </div>
       

       <div className="order-last">
     
       <Toggle />
     
       </div>

       </nav>
     );
}
 
export default Header;