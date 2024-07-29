
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import useSWR from "swr";
import { fetcher } from "@/helpers/processRequest";
import { GET } from "@/utils/requestActionConstants";
import { API_ROUTE } from "@/utils/commonConstants";
import { processReq } from "@/helpers/processRequest";
import PostCreate from "@/components/posts/create";
import { model } from "@/models";
import {revalidateHerbs as revalidate} from "@/app/lib/actions";
import ServiceCreate from "@/components/service/create";
import HerbsCreate from "@/components/herbs/create";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/public/herbs', { cache: 'no-store', next: { tags: ['adminHerbs'] } })
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
        
        await model.Herb.create({
            labelEn: formData.get('labelEn'), 
            labelTm: formData.get('labelTm'), 
            labelSn: formData.get('labelSn'), 
            labelSc: formData.get('labelSc'), 
          image: formData.get('image')
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
        
        await model.Herb.update({
            labelEn: formData.get('labelEn'), 
            labelTm: formData.get('labelTm'), 
            labelSn: formData.get('labelSn'), 
            labelSc: formData.get('labelSc'), 
          image: formData.get('image')
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
        
        await model.Herb.destroy({where: {id: dataObject.id}});
        
        revalidate();
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-3xl text-left">Herbal Dictionary</div>
                    <HerbsCreate saveData={save} />
                </div>
                <table className="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Id</th>
                            {/* <th className="border border-gray-300 px-4 py-2 text-slate-900">Image</th> */}
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">English</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Sinhala</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Tamil</th>
                            <th className="border border-gray-300 px-4 py-2 text-slate-900">Scientific</th>
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
                                    {/* <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.image}</td> */}
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.labelEn}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.labelSn}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.labelTm}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.labelSc}</td>
                                    <td className="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <HerbsCreate editData={editData} editMode={true} dataObject={dataObject} />
                                        <HerbsCreate deleteData={deleteData} deleteMode={true} dataObject={dataObject} />
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