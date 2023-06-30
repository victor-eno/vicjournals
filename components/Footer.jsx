import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Socials from "../components/Socials";

const YEAR = new Date().getFullYear()

const Footer = () => {
    return ( 
        <footer className="min-w-md mx-auto lg:max-w-2xl text-greytext-100 text-base-content">
          <div className="flex items-center justify-center">
            <small>
            <Socials />
            </small>      
            </div>
        </footer>
     );
}
 
export default Footer;