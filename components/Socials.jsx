import { SocialIcon } from "react-social-icons";

const Socials = () => {
    return (
        <div className="flex space-x-8">
            <SocialIcon
            url="https://github.com/victor-eno"
            network="github"
            fgColor="#fff"
            bgColor="#9ca3af"
            style={{height: 30, width: 30}}
            />

           <SocialIcon
            url="https://www.linkedin.com/in/victor-eno-udoh"
            network="linkedin"
            fgColor="#fff"
            bgColor="#9ca3af"
            style={{height: 30, width: 30}}
            />

           <SocialIcon
            url="https://twitter.com/vic_magnifico"
            network="twitter"
            fgColor="#fff"
            bgColor="#9ca3af"
            style={{height: 30, width: 30}}
            />
            
        </div>
    )
}
export default Socials;