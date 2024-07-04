import { title } from "@/components/primitives";
import { model } from "@/models";
import { getImage } from "@/utils/validations";
import Image from "next/image";

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

  return (
    <div>
      <div className="mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Blog Posts</h1>
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
      </div>
    </div>
  );
}
