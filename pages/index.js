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

      <nav className="flex justify-between p-4 dark:border-fadetext-100 border-b"> 
      <div className="left-0 top-0">
            <Link href="/about" passHref>
              <a>
               <div className="cursor-pointer">
                  <h3 className="font-bold text-gray-500">about.me</h3>
               </div>
               </a>
            </Link>
          </div>
       <div className="order-last">
       <Toggle />
       </div>
       </nav>

       <div className="flex Left-0 p-4">
       <div>
       <h1 className="text-4xl font-black">
        INFINITE
        </h1>
        <h1 className="text-4xl font-black">
        UNORDERED
        </h1>
        <p className="vic2 font-base">
        Embracing the
        </p>
        <p className="vic2 font-base">
        Path of possibilities
        </p>
        <p className="vic2 font-base">
        
        </p>
        </div>
        </div>
        <br></br>
        <br></br>
      <main>
    
        <div className='px-4'>
          {posts?.map((post) => {
            return (
              
              <div  key={`${post.slug}`} href={`/blog/${post.slug}`}>
                  <div className='mb-4'>
                    <h1 className='vic3 text-xl font-semibold'>{post.frontMatter.title}</h1>                   
                    <h2 className="text-base h-5 text-gray-500">{post.frontMatter.date}</h2>
                    <h2 className="text-base text-gray-700">{post.frontMatter.metaDesc}</h2>
                    
                    <div className="flex justify-between">
                    <Link key={`${post.slug}`} href={`/blog/${post.slug}`}>
                      <a>
                    <h2 className="hover:text-blue-500 text-greytext-100 dark:text-whitetext-100 underline">{post.frontMatter.fullContent}</h2>
                    </a>
                    </Link> 
                    <h2 className="order-last text-base dark:text-moodytext-100 text-gray-500">{post.frontMatter.readTime}</h2>
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