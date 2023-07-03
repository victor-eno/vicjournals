import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Toggle from "../components/Toggle";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


 const Home = () => {
  
  return (
    <div className="max-w-2xl mx-auto lg:max-w-2xl mb-10">
      <Head>
        <title>Victor's Web Space</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className="flex justify-between p-4"> 

      <div className="left-0 top-0">
      <Link href="/" passHref>
      <a>
        <div className="cursor-pointer">
          <h1 className="font-bold text-greytext-100">Blog</h1>
        </div>
      </a>
      </Link>
      </div>

       <div className="order-last">    
       <Toggle />    
       </div>

       </nav>

       <div className="flex items-center justify-center p-4">
       <div>
       <h1 className="vic1 text-3xl font-base">
         VICTOR ENO
        </h1>
        <p className="vic2 font-base">
        victor underscore eno 
        </p>
        <p className="vic2 font-base">
        three four five 
        </p>
        <p className="vic2 font-base">
        at protonmail dot com
        </p>
        </div>
        </div>
        <br></br>

      <main className="px-4">
      
          <div>
          
             <p>
              Welcome to my web space on the internet. I am a programmer with a restless 
              commitment to exploring ways to fully comprehend the imaginative art of 
              programming for crafting useful and industrial value software 
              applications
             </p>
             <br></br>
             <p>
             My key interests are in open source software, Distributed system,
               Storage, Web servers technology, User interface design
             </p>
          </div>
          <br></br>
      </main>
 
    </div>
  );
}
export default Home;
