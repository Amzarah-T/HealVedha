
import { model } from "@/models";
import { revalidateDiseasesTreatment as revalidate } from "@/app/lib/actions";
import DiseaseTreatmentCreate from "@/components/diseaseTreatment/create";
import { Button } from "@nextui-org/react";
import Link from "next/link";

// const getData = async (id) => {
//     console.log('sending data......... ', id);
//     const res = await fetch('http://localhost:3000/api/public/diseases/treatment', {
//         method: 'POST',
//         cache: 'no-store',
//         next: { tags: ['adminDiseasesTreatment'] },
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ diseaseId: id })
//     })
//     const data = await res.json()

//     return data.result;
// }

async function getData(id) {
    const res = await fetch('http://localhost:3000/api/public/diseases/treatment?dist=' + id, { cache: 'no-store' })
    const data = await res.json();

    return data.result.DiseaseTreatments;
}

async function Page({ params }) {
    let result = { data: { result: await getData(params.id) } };

    const save = async (formData) => {
        "use server"
        let data = {};
        for (const [key, value] of formData
        ) {
            data[key] = value;
            console.log(`${key}: ${value}\n`);
        }

        await model.DiseaseTreatment.create({
            descEn: formData.get('descEn'),
            descTm: formData.get('descTm'),
            descSn: formData.get('descSn'),
            DiseaseId: params.id
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

        await model.DiseaseTreatment.update({
            descEn: formData.get('descEn'),
            descTm: formData.get('descTm'),
            descSn: formData.get('descSn'),
        }, { where: { id: dataObject.id } });

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

        await model.DiseaseTreatment.destroy({ where: { id: dataObject.id } });

        revalidate();
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-left">
                        <Link href={'/manage/diseases/'}><Button variant='ghost' color="primary" radius='sm'>{'< Back'}</Button></Link>
                    </div>
                    <div className="text-3xl text-left">Diseases and Treatments</div>
                    <DiseaseTreatmentCreate saveData={save} />
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
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.descEn}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.descSn}</td>
                                    <td className="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.descTm}</td>
                                    <td className="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <DiseaseTreatmentCreate editData={editData} editMode={true} dataObject={dataObject} />
                                        <DiseaseTreatmentCreate deleteData={deleteData} deleteMode={true} dataObject={dataObject} />
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