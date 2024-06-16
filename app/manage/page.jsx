// "use client"
// import PostsTable from "@/components/postsTable";
import { model } from "@/models";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";

async function getData() {
  try {
      const result = await model.Post.findAll({ incude: model.User });

      return result;
  } catch (error) {
      throw new Error('Failed to fetch data')
  }
}


export default async function ManagePage() {
  const posts = await getData();

  return (
    <div className="flex flex-col px-4 min-h-screen ">
      <div className="flex w-full flex-col">
            Dashboard
      </div>
    </div>
  );
}