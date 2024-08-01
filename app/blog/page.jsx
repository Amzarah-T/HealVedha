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

    return posts.length > 0 ? posts.slice(0, 8) : [];
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
  const papers = await getPapersData();
  // const papers = [
  //   {
  //     id: 1,
  //     link: 'https://www.sciencedirect.com/topics/computer-science/research-paper',
  //     title: 'Explore scientific, technical, and medical research on ScienceDirect'
  //   }
  // ]

  return (
    <div>
      <div className="mx-auto p-6">
      <Image src={blogImg} alt="blog banner" className="w-screen" />
      <p className="p-10 text-left mt-10">These articles are extracted from <Link  className="text-green-500 underline" href={'https://newsapi.org/'} target="_blank">https://newsapi.org/</Link></p>
        <ul className="space-y-6 flex flex-col md:flex-row gap-10 grid-cols-2 flex-wrap pb-20">
          {posts.map((post) => (
            <li key={post.id} className="p-6 bg-white rounded-lg shadow-md min-w-64 flex-1">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${getImage(post.urlToImage)})` }}
              ></div>
              <h2 className="text-2xl font-semibold my-2 text-left">{post.title}</h2>
              <p className="text-gray-700 line-clamp-5 text-justify"><div dangerouslySetInnerHTML={{__html: post.content}} /></p>
              <Link className="text-green-500 underline cursor-pointer text-right" href={post.url} target="_blank">Read More</Link>
            </li>
          ))}
        </ul>

        <Link className="text-green-500 underline cursor-pointer " href={'blog/more'}>View More Articles</Link>

        <h1 className="text-4xl font-bold my-6 text-left">Research Papers</h1>
        <ul className="text-left">
          {papers.map((paper, index) => (
            <li key={paper.id} className="pb-4 bg-white min-w-64 flex-1">
              <h2 className="text-2xl font-semibold my-2">{index + 1}) {paper.title}</h2>
              <LoggedInWrapper message={<Link className="text-blue-500 underline italic pl-5" href={'/login'}>Download</Link>}>
                <Link className="text-blue-500 underline italic pl-5" href={paper.url.startsWith('http') ? paper.url : "/pdf/" + paper.url}  target="_blank">Download</Link>
              </LoggedInWrapper>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
