import { title } from "@/components/primitives";
import { model } from "@/models";
import { getImage } from "@/utils/validations";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  try {
    const result = await model.Post.findAll({ include: model.User });
    const r = await model.User.findAll({ include: model.Post });

    return result;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default async function BlogPage() {
  const posts = await getData();
  const papers = [
    {
      id: 1,
      link: 'https://www.sciencedirect.com/topics/computer-science/research-paper',
      title: 'Explore scientific, technical, and medical research on ScienceDirect'
    }
  ]

  return (
    <div>
      <div className="mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">HealVedha's Blogs</h1>
        <ul className="space-y-6 flex flex-col md:flex-row gap-10 grid-cols-2 flex-wrap">
          {posts.map((post) => (
            <li key={post.id} className="p-6 bg-white rounded-lg shadow-md min-w-64 flex-1">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImage(post.image)})` }}
              ></div>
              <h2 className="text-2xl font-semibold my-2">{post.title}</h2>
              <p className="text-gray-700">{post.content}</p>
            </li>
          ))}
        </ul>

        <h1 className="text-4xl font-bold my-6 text-left">Research Papers</h1>
        <ul className="text-left">
          {papers.map((paper) => (
            <li key={paper.id} className="pb-6 bg-white min-w-64 flex-1">
              <h2 className="text-2xl font-semibold my-2">{paper.title}</h2>
              <Link className="text-gray-700" href={paper.link} target="_blank">{paper.link}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
