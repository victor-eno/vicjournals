import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Toggle from "../components/Toggle";

import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";

export default function Blog({ posts }) {
  
  return (
    <div className="max-w-2xl mx-auto lg:max-w-2xl mb-10">
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className="flex justify-between p-4"> 

      <div className="left-0 top-0">
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

       <div className="flex left-0 p-4">
       <div>
       <h1 className="vic1 text-3xl font-bold text-gray-500">
        POLAR SIGNAL
        </h1>
        <p className="vic2 font-base">
        Embracing the path to possibilities
        </p>
        </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      <main>
    
        <div className='px-4'>
          {posts?.map((post) => {
            return (
              
              <div  key={`${post.slug}`} href={`/blog/${post.slug}`}>
                  <div className='mb-4'>
                    <h1 className='vic3 text-xl font-bold text-gray-500'>{post.frontMatter.title}</h1>                   
                    <h1 className="font-base h-7 text-gray-500">{post.frontMatter.date}</h1>
                    <p>{post.frontMatter.metaDesc}</p>
                    
                    <div className="flex justify-between">
                    <Link key={`${post.slug}`} href={`/blog/${post.slug}`}>
                      <a>
                    <h1 className="hover:text-blue-500 text-greytext-100 dark:text-whitetext-100 underline">{post.frontMatter.fullContent}</h1>
                    </a>
                    </Link> 
                    <h2 className="order-last font-base dark:text-moodytext-100 text-gray-500">{post.frontMatter.readTime}</h2>
                    </div>
                  </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
    // get the post
    const files = fs.readdirSync("posts");
    const posts = files.map((filename) => {
      const slug = filename.replace(".md", "");
      const readFiles = fs.readFileSync(`posts/${filename}`);
      const { data: frontMatter } = matter(readFiles);
  
      return {
        slug,
        frontMatter,
      };
    });
  
    return {
      props: {
        posts,
      },
    };
  }