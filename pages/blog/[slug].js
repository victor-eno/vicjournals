import React from "react";
import Link from "next/link";
import Head from "next/head";

import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Toggle from "../../components/Toggle";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export async function getStaticPaths() {
  // get slugs
  const files = fs.readdirSync("posts");
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  // get content for each blog

  const mdfile = fs.readFileSync(`posts/${slug}.md`);
  const { data: frontMatter, content } = matter(mdfile);

  return {
    props: {
      frontMatter,
      content,
    },
  };
}

function BlogPage({ frontMatter, content }) {
  return (
    
    <div className="max-w-2xl mx-auto md:max-w-2xl mb-10">
       <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <nav className="flex justify-between p-10 p-2 m-2">
      <Link href="/blog" passHref>
      <a>
        <div className="cursor-pointer">
          <ArrowLeftIcon className="h-6 w-12 font-bold" />
        </div>
      </a>
      </Link>

      <div className="order-last">
        <Toggle />
        </div>
        
     </nav>
      <main>
      <div className='p-6'>
      <article
        className='px-2 prose text-base dark:text-blue-200'
        dangerouslySetInnerHTML={{ __html: md().render(content) }}
      />
    </div>
      </main>
    </div>
  );
}

export default BlogPage;
