// "use client"
// import PostsTable from "@/components/postsTable";
import { model } from "@/models";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";

async function getData() {
  try {
    const posts = await model.Post.count();
    const users = await model.User.count();
    const treatments = await model.DiseaseTreatment.count();
    const herbals = await model.Herb.count();
    const symptoms = await model.DiseaseSymptoms.count();
    const diseases = await model.Disease.count();
    const reports = await model.ResearchPaper.count();

    return {
      posts,
      users,
      treatments,
      herbals,
      symptoms,
      diseases,
      reports
    };
  } catch (error) {
    throw new Error('Failed to fetch data')
  }
}


export default async function ManagePage() {
  const {
    posts,
    users,
    treatments,
    herbals,
    symptoms,
    diseases,
    reports
  } = await getData();

  return (
    <div>
      <div className="overflow-x-auto">
      <div className="flex flex-row flex-wrap gap-5 pl-24 pt-10" style={{width: 900}}>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Articles</small>
              <h4 className="font-bold text-3xl text-center">{posts}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-green-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Research Reports</small>
              <h4 className="font-bold text-3xl text-center">{reports}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-orange-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Users</small>
              <h4 className="font-bold text-3xl text-center">{users}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-red-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Treatments</small>
              <h4 className="font-bold text-3xl text-center">{treatments}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-purple-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Herbals</small>
              <h4 className="font-bold text-3xl text-center">{herbals}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-cyan-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Symptoms</small>
              <h4 className="font-bold text-3xl text-center">{symptoms}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-red-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Diseases</small>
              <h4 className="font-bold text-3xl text-center">{diseases}</h4>
            </CardHeader>
          </Card>
        </div>
      </div>
      </div>
    </div>
  )
  return (
    <div className="m-auto min-h-screen">
      <div className="flex flex-row flex-wrap gap-5 pl-24">
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Articles</small>
              <h4 className="font-bold text-3xl text-center">{posts}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Research Reports</small>
              <h4 className="font-bold text-3xl text-center">{reports}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Users</small>
              <h4 className="font-bold text-3xl text-center">{users}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Treatments</small>
              <h4 className="font-bold text-3xl text-center">{treatments}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Herbals</small>
              <h4 className="font-bold text-3xl text-center">{herbals}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Symptoms</small>
              <h4 className="font-bold text-3xl text-center">{symptoms}</h4>
            </CardHeader>
          </Card>
        </div>
        <div className="mx-5" style={{ minWidth: 300 }}>
          <Card className="py-4 text-center bg-blue-400 text-white">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
              <small className="text-large text-center">Diseases</small>
              <h4 className="font-bold text-3xl text-center">{diseases}</h4>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}