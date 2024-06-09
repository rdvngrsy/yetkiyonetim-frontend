import React, { useEffect, useState } from "react";
import { GetPermissionListResponse } from "../../models/permissions/responses/getPermissionListResponse";
import permissionService from "../../services/permissionService";

type Props = {};

const Permission = (props: Props) => {
  const [permissions, setPermissions] = useState<GetPermissionListResponse[]>(
    []
  );

  async function fetchPermission() {
    try {
      const response = await permissionService.getAll();
      console.log(response);
      if (Array.isArray(response.data)) {
        setPermissions(response.data);
      } else {
        console.error("Beklenmedik veri formatı:", response.data);
      }
    } catch (error) {
      console.error("Yetki listesi alınırken bir hata oluştu:", error);
    }
  }

  useEffect(() => {
    fetchPermission();
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
                  Yetki
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Açıklama
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {permissions?.map((permission: GetPermissionListResponse) => (
                <tr key={permission?.id} className="hover:bg-gray-50 ">
                  <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                    {permission?.id}
                  </th>
                  <td className="px-6 py-4">{permission?.name}</td>
                  <td className="px-6 py-4">{permission?.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Permission;
