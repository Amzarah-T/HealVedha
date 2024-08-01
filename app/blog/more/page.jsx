import LoggedInWrapper from "@/components/LoggedInWrapper";
import { title } from "@/components/primitives";
import { model } from "@/models";
import { getImage } from "@/utils/validations";
import Image from "next/image";
import Link from "next/link";
import blogImg from '@/public/images/blog.png';

async function getData() {
  try {
    // const result = await model.Post.findAll({ include: model.User });
    const response = await fetch('https://newsapi.org/v2/everything?q=ayurvedic&apiKey=' + process.env.NEWS_API_KEY);

    const data = await response.json();
    const posts = data.articles;

    return posts;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

async function getPapersData() {
  try {
    const result = await model.ResearchPaper.findAll();

    return result;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default async function BlogPage() {
  const posts = await getData();


  return (
    <div>
      <div className="mx-auto p-6">
      <h1 className="text-2xl">Full Article View</h1>
        <ul className="space-y-6 flex flex-col md:flex-row gap-10 grid-cols-2 flex-wrap">
          {posts.map((post) => (
            <li key={post.id} className="p-6 bg-white rounded-lg shadow-md min-w-64 flex-1">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImage(post.urlToImage)})` }}
              ></div>
              <h2 className="text-2xl font-semibold my-2">{post.title}</h2>
              <p className="text-gray-700 line-clamp-5"><div dangerouslySetInnerHTML={{__html: post.content}} /></p>
              <Link className="text-blue-500 underline cursor-pointer" href={post.url}>Read More</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
