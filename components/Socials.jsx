import { SocialIcon } from "react-social-icons";

const Socials = () => {
    return (
        <div className="flex space-x-8">
            <SocialIcon
            url="https://github.com/victor-eno"
            network="github"
            fgColor="#fff"
            bgColor="#40444b"
            style={{height: 25, width: 25}}
            />

           <SocialIcon
            url="https://www.linkedin.com/in/victor-eno-udoh"
            network="linkedin"
            fgColor="#fff"
            bgColor="#40444b"
            style={{height: 25, width: 25}}
            />

           <SocialIcon
            url="https://twitter.com/vic_magnifico"
            network="twitter"
            fgColor="#fff"
            bgColor="#40444b"
            style={{height: 25, width: 25}}
            />
            
        </div>
    )
}
export default Socials;