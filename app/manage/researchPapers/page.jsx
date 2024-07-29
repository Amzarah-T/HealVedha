
import { model } from "@/models";
import {revalidateResearchPapers as revalidate} from "@/app/lib/actions";
import Link from "next/link";
import ResearchPapersCreate from "@/components/researchPapers/create";
import AdminOnlyWrapper from "@/components/AdminOnlyWrapper";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/public/researchPapers', { cache: 'no-store', next: { tags: ['adminResearchPapers'] } })
    const data = await res.json()

    return data.result;
}

async function Page() {
    let result = { data: { result: await getData() } };

    const save = async (formData) => {
        "use server"
        let data = {};
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.ResearchPaper.create({
            title: formData.get('title'), 
            url: formData.get('url'), 
        });
        
        revalidate();
    }

    const editData = async (formData, dataObject) => {
        "use server"
        let data = {};
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.ResearchPaper.update({
            title: formData.get('title'), 
            url: formData.get('url'), 
        }, {where: {id: dataObject.id}});
        
        revalidate();
    }

    const deleteData = async (formData, dataObject) => {
        "use server"
        let data = {};
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.ResearchPaper.destroy({where: {id: dataObject.id}});
        
        revalidate();
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-3xl text-left">Research Papers</div>
                    <ResearchPapersCreate saveData={save} />
                </div>
                <table className="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Id</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Title</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.isLoading ? (
                            <tr>
                                <td colSpan="4" className="border border-gray-300 px-4 py-2 text-center">Loading...</td>
                            </tr>
                        ) : (
                            result.data.result.map((dataObject, index) => (
                                <tr key={index} className="bg-white hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.id}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.title}</td>
                                    <td className="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <AdminOnlyWrapper><ResearchPapersCreate editData={editData} editMode={true} dataObject={dataObject} /></AdminOnlyWrapper>
                                        <AdminOnlyWrapper><ResearchPapersCreate deleteData={deleteData} deleteMode={true} dataObject={dataObject} /></AdminOnlyWrapper> 
                                        <Link className="px-2 py-3 rounded-md text-sm text-green-600" href={dataObject.url.startsWith('http') ? dataObject.url : "/pdf/" + dataObject.url} target='_blank'>Download</Link>
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

export default Page;