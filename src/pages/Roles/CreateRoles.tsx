import React, { useState } from "react";

import roleService from "../../services/roleService";
import { CreateRoleRequest } from "../../models/roles/requests/createRoleRequest";

type Props = {};
const CreateRoles = () => {
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");

  const handleRoleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoleName(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newRole: CreateRoleRequest = {
      roleName,
      description,
    };

    try {
      await roleService.create(newRole);
      alert("Rol başarıyla oluşturuldu!");
      // Formu temizle
      setRoleName("");
      setDescription("");
    } catch (error) {
      console.error("Rol oluşturulurken bir hata oluştu:", error);
      alert("Rol oluşturulurken bir hata oluştu.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[1400px]">
        <form onSubmit={handleSubmit}>
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Rol Adı
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Açıklama
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={roleName}
                    onChange={handleRoleNameChange}
                    className="border border-gray-200 p-2 rounded-md w-full"
                    placeholder="Rol Adı"
                    required
                  />
                </td>
                <td className="px-6 py-4">
                  <input
                    type="text"
                    value={description}
                    onChange={handleDescriptionChange}
                    className="border border-gray-200 p-2 rounded-md w-full"
                    placeholder="Açıklama"
                    required
                  />
                </td>
                <td className="px-6 py-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-2 rounded-md"
                  >
                    Oluştur
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
};

export default CreateRoles;
