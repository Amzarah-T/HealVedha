
import { model } from "@/models";
import {revalidateDiseases as revalidate} from "@/app/lib/actions";
import DiseasesCreate from "@/components/diseases/create";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/public/diseases', { cache: 'no-store', next: { tags: ['adminDiseases'] } })
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
        
        await model.Disease.create({
            titleEn: formData.get('titleEn'), 
            titleTm: formData.get('titleTm'), 
            titleSn: formData.get('titleSn'), 
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
        
        await model.Disease.update({
            titleEn: formData.get('titleEn'), 
            titleTm: formData.get('titleTm'), 
            titleSn: formData.get('titleSn'), 
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
        
        await model.Disease.destroy({where: {id: dataObject.id}});
        
        revalidate();
    }

    return (
        <div>
            <div classname="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-3xl text-left">Diseases and Treatments</div>
                    <DiseasesCreate saveData={save} />
                </div>
                <table className="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Id</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">English</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Sinhala</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Tamil</th>
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
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.titleEn}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.titleSn}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.titleTm}</td>
                                    <td className="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <DiseasesCreate editData={editData} editMode={true} dataObject={dataObject} />
                                        <DiseasesCreate deleteData={deleteData} deleteMode={true} dataObject={dataObject} />
                                        <Link href={'/manage/diseases/treatment/' + dataObject.id}>
                                            <Button color="secondary" className="max-w-fit">Treatements</Button>
                                        </Link>
                                        <Link href={'/manage/diseases/symptom/' + dataObject.id}>
                                            <Button color="default" className="max-w-fit">Symptoms</Button>
                                        </Link>
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