import React, { useEffect, useState } from "react";
import roleService from "../../services/roleService";
import { GetRoleListResponse } from "../../models/roles/responses/getRoleListResponse";

const DeleteRoles = () => {
  const [roles, setRoles] = useState<GetRoleListResponse[]>([]);
  const [selectedRoleId, setSelectedRoleId] = useState<string>("");

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await roleService.getAll();
        if (Array.isArray(response.data)) {
          setRoles(response.data);
        }
      } catch (error) {
        console.error("Rol listesi alınırken bir hata oluştu:", error);
      }
    }
    fetchRoles();
  }, []);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoleId(e.target.value);
  };

  const handleDelete = async () => {
    if (!selectedRoleId) {
      alert("Lütfen silmek için bir rol seçin.");
      return;
    }

    try {
      await roleService.delete(Number(selectedRoleId));
      alert("Rol başarıyla silindi!");
      // Role listesini güncelle
      setRoles(roles.filter((role) => role.id !== Number(selectedRoleId)));
      setSelectedRoleId(""); // Seçimi temizle
    } catch (error) {
      console.error("Rol silinirken bir hata oluştu:", error);
      alert("Rol silinirken bir hata oluştu.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[600px]">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Rol Seç
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
                  id="roleSelect"
                  value={selectedRoleId}
                  onChange={handleRoleChange}
                  className="py-3  mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-[18px]"
                >
                  <option value="" disabled>
                    Rol Seçin
                  </option>
                  {roles.map(role => (
                    <option key={role.id} value={role.id.toString()}>
                      {role.roleName}
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
};

export default DeleteRoles;
