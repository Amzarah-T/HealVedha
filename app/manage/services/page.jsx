
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button } from "@nextui-org/react";
import useSWR from "swr";
import { fetcher } from "@/helpers/processRequest";
import { GET } from "@/utils/requestActionConstants";
import { API_ROUTE } from "@/utils/commonConstants";
import { processReq } from "@/helpers/processRequest";
import PostCreate from "@/components/posts/create";
import { model } from "@/models";
import {revalidateServices} from "@/app/lib/actions";
import ServiceCreate from "@/components/service/create";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/public/services', { cache: 'no-store', next: { tags: ['adminServices'] } })
    const data = await res.json()

    return data.result;
}

async function Page() {
    let result = { data: { result: await getData() } };

    const save = async (formData) => {
        "use server"
        let data = {};
        console.log(formData.values())
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.Service.create({
          titleTm: formData.get('titleTm'), 
          titleSn: formData.get('titleSn'), 
          titleEn: formData.get('titleEn'), 
          image: formData.get('image')
        });
        
        revalidateServices();
    }

    const editData = async (formData, dataObject) => {
        "use server"
        let data = {};
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.Service.update({
          titleTm: formData.get('titleTm'), 
          titleSn: formData.get('titleSn'), 
          titleEn: formData.get('titleEn'), 
          image: formData.get('image')
        }, {where: {id: dataObject.id}});
        
        revalidateServices();
    }

    const deleteData = async (formData, dataObject) => {
        "use server"
        let data = {};
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
          }
        
        await model.Service.destroy({where: {id: dataObject.id}});
        
        revalidateServices();
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-3xl text-left">Services and Symptoms</div>
                    <ServiceCreate saveData={save} />
                </div>
                <table class="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Id</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Title English</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Title Sinhala</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Title Tamil</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.isLoading ? (
                            <tr>
                                <td colSpan="4" class="border border-gray-300 px-4 py-2 text-center">Loading...</td>
                            </tr>
                        ) : (
                            result.data.result.map((dataObject, index) => (
                                <tr key={index} class="bg-white hover:bg-gray-100">
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.id}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.titleEn}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.titleSn}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.titleTm}</td>
                                    <td class="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <ServiceCreate editData={editData} editMode={true} dataObject={dataObject} />
                                        <ServiceCreate deleteData={deleteData} deleteMode={true} dataObject={dataObject} />
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