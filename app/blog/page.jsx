import { title } from "@/components/primitives";
import { model } from "@/models";

async function getData() {
  try {
    const result = await model.Post.findAll({incude: model.User});

    return result;
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}

export default async function BlogPage() {
  const data = await getData();

  return (
    <div>
      <h1 className="text-foreground text-3xl">Blog</h1>
      <h1 className="text-foreground text-3xl">{data.length}</h1>
    </div>
  );
}
