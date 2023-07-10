import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import { ArrowLongRightIcon } from "@heroicons/react/24/outline";


 const Home = () => {
  
  return (
    <div className="max-w-2xl mx-auto lg:max-w-2xl mb-10">
      <Head>
        <title>Victor's Web Space</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

       <div className="flex left-0 p-4">
       <div>
       <h1 className="vic1 text-3xl text-gray-500">
         VICTOR 
        </h1>
        <h1 className="vic1 text-3xl text-gray-500">
         ENO
        </h1>
        <p className="vic2 font-base underline">
        victor underscore eno 
        </p>
        <p className="vic2 font-base underline">
        three four five 
        </p>
        <p className="vic2 font-base underline">
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
