
import { model } from "@/models";
import {revalidateUsers as revalidate} from "@/app/lib/actions";
import UsersCreate from "@/components/users/create";

const getData = async () => {
    const res = await fetch('http://localhost:3000/api/public/users', { cache: 'no-store', next: { tags: ['adminUsers'] } })
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
        
        await model.User.create({
            username: formData.get('email'), 
            email: formData.get('email'), 
            firstName: formData.get('firstName'), 
            userrole: formData.get('userrole'),
            password: formData.get('password')
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
        
        await model.User.update({
            username: formData.get('email'), 
            email: formData.get('email'), 
            firstName: formData.get('firstName'), 
            userrole: formData.get('userrole'),
            password: formData.get('password')
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
        
        await model.User.destroy({where: {id: dataObject.id}});
        
        revalidate();
    }

    return (
        <div>
            <div class="overflow-x-auto">
                <div className="flex justify-between items-center px-10 py-10 ">
                    <div className="text-3xl text-left">Manage Users</div>
                    <UsersCreate saveData={save} />
                </div>
                <table class="min-w-full bg-white border-collapse border border-gray-200 shadow-md">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Id</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">First Name</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">Email</th>
                            <th class="border border-gray-300 px-4 py-2 text-slate-900">User Role</th>
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
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.firstName}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.email}</td>
                                    <td class="border border-gray-300 px-4 py-2 text-slate-950">{dataObject.userrole}</td>
                                    <td class="border border-gray-300 px-4 py-2 gap-5 flex justify-center text-slate-950">
                                        <UsersCreate editData={editData} editMode={true} dataObject={dataObject} />
                                        <UsersCreate deleteData={deleteData} deleteMode={true} dataObject={dataObject} />
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