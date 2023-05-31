import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

import Toggle from "../components/Toggle";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

 const Home = () => {
  
  return (
    <div className="max-w-md mx-auto lg:max-w-2xl mb-10">
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className="flex justify-between p-10"> 

        <div className="text-3xl font-black left-0 top-0">
        <h1>
          Victor Eno
        </h1>
        </div>


       <div className="order-last">
     
       <Toggle />
     
       </div>

       </nav>

       <br></br>
       
      <div className="flex justify-between p-10">
      <span></span>  
      <div className="order-last">
      <Link href="/blog" passHref>
      <a>
        <div className="cursor-pointer">
          <h1 className="font-bold">Blog</h1>
        </div>
      </a>
      </Link>
      </div>
      </div>
      <main className="px-10">

          <br></br>

          <div>
          
          <div>
          <h1 className="text-2xl font-base">Welcome</h1>
             <p>...to my home page on the internet. My name is Victor Eno.
                I am a programmer with a restless commitment for learning and crafting useful 
                and industrial value software applications.
            </p>
            <br></br> 
            <h1 className="text-2xl font-base">My key interest</h1>
            <p>...is exploring ways to fully comprehend the imaginative art of programming.</p>
            Others include...Open source software, Distributed system, Storage,
             Web servers technology, User interface design
          </div>

          <br></br>
          
          <h1 className="text-2xl font-base">My grind</h1>
            <p>...Here's a snapshot of how I have been spending my time recently</p>

          <Link href="/projects" passHref>
          <a className="cursor-pointer">
          <div className="flex">
           <div>
            <h1 className="dark:text-blue-400 font-black">Work Log</h1>
           </div>
           <div>
            <ArrowLongRightIcon className="h-6 w-12 text-gray-900 dark:text-blue-200 font-bold" />
           </div>
           </div>
          </a>
          </Link>

          <div>
            <br></br>
          <h1 className="text-2xl font-base">My contacts</h1>
           
            
            <div className="flex">
            <div>
            <h1 className="dark:text-moodytext-100">Email :</h1>
            </div>
            <div>
            <Link href="/projects" passHref>
            <a className="cursor-pointer">
            <h1 className="text-blue-400 dark:text-blue-400 ">victor_eno345@protonmail.com</h1>
            </a>
            </Link>
            </div>
            </div>

            <div className="flex">
            <div>
            <h1 className="dark:text-moodytext-100">Github :</h1>
            </div>
            <div>
            <Link href={'https://github.com/victor-eno'} passHref>
            <a className="cursor-pointer">
            <h1 className="text-blue-400 dark:text-blue-400 ">@victor-eno</h1>
            </a>
            </Link>
            </div>
            </div>

            <div className="flex">
            <div>
            <h1 className="dark:text-moodytext-100">LinkedIn :</h1>
            </div>
            <div>
            <Link href={'https://www.linkedin.com/in/victor-eno-udoh'} passHref>
            <a className="cursor-pointer">
            <h1 className="text-blue-400 dark:text-blue-400 ">@victor-eno</h1>
            </a>
            </Link>
            </div>
            </div>

            <div className="flex">
            <div>
            <h1 className="dark:text-moodytext-100">Twitter :</h1>
            </div>
            <div>
            <Link href={'https://twitter.com/vic_magnifico'} passHref>
            <a className="cursor-pointer">
            <h1 className="text-blue-400 dark:text-blue-400 ">@vic_magnifico</h1>
            </a>
            </Link>
            </div>
            </div>
          </div>

          </div>

      </main>

     
    </div>
  );
}
export default Home;
