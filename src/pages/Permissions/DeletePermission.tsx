import React, { useEffect, useState } from 'react'
import permissionService from '../../services/permissionService';
import { GetPermissionListResponse } from '../../models/permissions/responses/getPermissionListResponse';

type Props = {}

const DeletePermission = (props: Props) => {
    const [permissions, setPermissions] = useState<GetPermissionListResponse[]>([]);
    const [selectedPermissionsId, setSelectedPermissionsId] = useState<string>("");
  
    useEffect(() => {
      async function fetchPermissions() {
        try {
          const response = await permissionService.getAll();
          if (Array.isArray(response.data)) {
            setPermissions(response.data);
          }
        } catch (error) {
          console.error("Yetki listesi alınırken bir hata oluştu:", error);
        }
      }
      fetchPermissions();
    }, []);
  
    const handlePermissionsChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedPermissionsId(e.target.value);
    };
  
    const handleDelete = async () => {
      if (!selectedPermissionsId) {
        alert("Lütfen silmek için bir rol seçin.");
        return;
      }
  
      try {
        await permissionService.delete(Number(selectedPermissionsId));
        alert("Rol başarıyla silindi!");
        // Permissions listesini güncelle
        setPermissions(permissions.filter((permissions) => permissions.id !== Number(selectedPermissionsId)));
        setSelectedPermissionsId(""); // Seçimi temizle
      } catch (error) {
        console.error("Yetki silinirken bir hata oluştu:", error);
        alert("Yetki silinirken bir hata oluştu.");
      }
    };
  
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[600px]">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Yetki
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <select
                    id="permissionSelect"
                    value={selectedPermissionsId}
                    onChange={handlePermissionsChange}
                    className="py-3  mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-[18px]"
                  >
                    <option value="" disabled>
                      Yetki Seçin
                    </option>
                    {permissions.map(permission => (
                      <option key={permission.id} value={permission.id.toString()}>
                        {permission.name}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white p-3 rounded-md w-full"
                  >
                    Sil
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default DeletePermission