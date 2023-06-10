import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const YEAR = new Date().getFullYear()

const Footer = () => {
    return ( 
        <footer className="min-w-md mx-auto lg:max-w-2xl dark:bg-coolnight-100 text-base-content">
          <div className="flex items-center justify-center">
            <div>
            <h1>
            <small>
              <time>{YEAR}</time> © Victor Eno.
            </small>    
            </h1>
            </div>
          </div>
        </footer>
     );
}
 
export default Footer;