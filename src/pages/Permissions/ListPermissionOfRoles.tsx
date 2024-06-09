import React, { useEffect, useState } from "react";
import { GetRolePermissionListResponse } from "../../models/role-permission/responses/getRolePermissionListResponse";
import rolePermissionsService from "../../services/rolePermissionsService";

type Props = {};

const ListPermissionOfRoles = (props: Props) => {
  const [rolePermissions, setRolePermissions] = useState<
    GetRolePermissionListResponse[]
  >([]);

  async function fetchRolePermission() {
    try {
      const response = await rolePermissionsService.getAll();
      console.log(response);
      if (Array.isArray(response.data)) {
        const sortedData = response.data.sort((a, b) =>
          a.roleName.localeCompare(b.roleName)
        );
        setRolePermissions(sortedData);
      } else {
        console.error("Beklenmedik veri formatı:", response.data);
      }
    } catch (error) {
      console.error("Yetki listesi alınırken bir hata oluştu:", error);
    }
  }

  useEffect(() => {
    fetchRolePermission();
  }, []);

  const handleDelete = async (roleId: number, permissionId: number) => {
    try {
      await rolePermissionsService.deleteRolePermission({ roleId, permissionId });
      // Silme işlemi başarılı ise listeyi güncelle
      setRolePermissions((prevPermissions) =>
        prevPermissions.filter(
          (permission) =>
            permission.roleId !== roleId || permission.permissionId !== permissionId
        )
      );
      console.log("Yetki başarıyla silindi!");
    } catch (error) {
      console.error("Yetki silinirken bir hata oluştu:", error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[1400px]">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Rol
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Yetki
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Yetki Açıklaması
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {rolePermissions?.map(
                (rolePermission: GetRolePermissionListResponse, index) => (
                  <tr key={index} className="hover:bg-gray-50 ">
                    <td className="px-6 py-4">{rolePermission.roleName}</td>
                    <td className="px-6 py-4">{rolePermission.permissionName}</td>
                    <td className="px-6 py-4">{rolePermission.permissionDescription}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          handleDelete(
                            rolePermission.roleId,
                            rolePermission.permissionId
                          )
                        }
                        className="bg-red-500 text-white p-2 rounded-md"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListPermissionOfRoles;
