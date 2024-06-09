import React, { useEffect, useState } from "react";
import roleService from "../../services/roleService";
import { GetRoleListResponse } from "../../models/roles/responses/getRoleListResponse";

type Props = {};

const Roles = (props: Props) => {
  const [roles, setRoles] = useState<GetRoleListResponse[]>([]);

  async function fetchRoles() {
    try {
      const response = await roleService.getAll();
      console.log(response);
      if (Array.isArray(response.data)) {
        setRoles(response.data);
      } else {
        console.error("Beklenmedik veri formatı:", response.data);
      }
    } catch (error) {
      console.error("Rol listesi alınırken bir hata oluştu:", error);
    }
  }
  


  useEffect(() => {
    fetchRoles();
    
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
                  Rol
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Açıklama
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {roles?.map((role:GetRoleListResponse) => (
                <tr key={role?.id} className="hover:bg-gray-50 ">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    {role?.id}
                  </th>
                  <td className="px-6 py-4">{role?.roleName}</td>
                  <td className="px-6 py-4">{role?.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Roles;
