
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import useSWR from "swr";
import { fetcher } from "@/helpers/processRequest";
import { GET } from "@/utils/requestActionConstants";
import { API_ROUTE } from "@/utils/commonConstants";
import { processReq } from "@/helpers/processRequest";
import PostCreate from "@/components/posts/create";
import { model } from "@/models";
import {revalidatePosts} from "@/app/lib/actions";

const getData = async () => {
    // const res = await processReq(GET, API_ROUTE + "/public/post");
    const res = await fetch('http://localhost:3000/api/public/post', { cache: 'no-store', next: { tags: ['adminPosts'] } })
    const data = await res.json()

    return data.result;
}

async function PostsPage() {
    // const result = useSWR({ method: GET, url: API_ROUTE + '/public/post' }, fetcher);
    let result = { data: { result: await getData() } };

    const savePost = async (formData) => {
        "use server"
        let data = {};
        console.log(formData.values())
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.Post.create({title: formData.get('title'), image: formData.get('image'), UserId: 1});
        
        revalidatePosts();
    }

    const editPost = async (formData, post) => {
        "use server"
        let data = {};
        console.log(formData.values())
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.Post.update({title: formData.get('title'), image: formData.get('image')}, {where: {id: post.id}});
        
        revalidatePosts();
    }

    const deletePost = async (formData, post) => {
        "use server"
        let data = {};
        console.log(formData.values())
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.Post.destroy({where: {id: post.id}});
        
        revalidatePosts();
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-3xl text-left">Posts</div>
                    <PostCreate savePost={savePost} />
                </div>
                <table className="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Id</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Title</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Posted By</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.isLoading ? (
                            <tr>
                                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">Loading...</td>
                            </tr>
                        ) : (
                            result.data.result.map((post, index) => (
                                <tr key={index} className="bg-white hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{post.id}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{post.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{post.User?.username}</td>
                                    <td className="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <PostCreate editPost={editPost} editMode={true} post={post} />
                                        <PostCreate deletePost={deletePost} deleteMode={true} post={post} />
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>


        </div>
    )
}

export default PostsPage;