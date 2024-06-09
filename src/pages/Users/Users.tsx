import React, { useEffect, useState } from 'react'
import { GetUserListResponse } from '../../models/users/responses/getUserListResponse';
import userService from '../../services/userService';

type Props = {}

const Users = (props: Props) => {
    const [users, setUsers] = useState<GetUserListResponse[]>([]);

    async function fetchUsers() {
      try {
        const response = await userService.getAll();
        console.log(response);
        if (Array.isArray(response.data)) {
            setUsers(response.data);
        } else {
          console.error("Beklenmedik veri formatı:", response.data);
        }
      } catch (error) {
        console.error("Rol listesi alınırken bir hata oluştu:", error);
      }
    }
    
  
  
    useEffect(() => {
        fetchUsers();
      
    }, []);
  
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[1400px]">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                    id
                  </th>
                  <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                    Kullanıcı Adı
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                {users?.map((user:GetUserListResponse) => (
                  <tr key={user?.id} className="hover:bg-gray-50 ">
                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                      {user?.id}
                    </th>
                    <td className="px-6 py-4">{user?.username}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        </>
    )
}

export default Users