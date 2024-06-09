import React, { useEffect, useState } from 'react'
import { GetRoleListResponse } from '../../models/roles/responses/getRoleListResponse';
import { GetPermissionListResponse } from '../../models/permissions/responses/getPermissionListResponse';
import roleService from '../../services/roleService';
import permissionService from '../../services/permissionService';
import { CreateRolePermissionRequest } from '../../models/role-permission/requests/createRolePermissionRequest';
import rolePermissionsService from '../../services/rolePermissionsService';

type Props = {}

const AssignPermissionOfRoles = (props: Props) => {
  const [roles, setRoles] = useState<GetRoleListResponse[]>([]);
  const [permissions, setPermissions] = useState<GetPermissionListResponse[]>([]);
  const [selectedRoleId, setSelectedRoleId] = useState<string>("");
  const [selectedPermissionId, setSelectedPermissionId] = useState<string>("");

  useEffect(() => {
    async function fetchRoles() {
      try {
        const response = await roleService.getAll();
        if (Array.isArray(response.data)) {
          setRoles(response.data);
        } else {
          console.error("Beklenmedik veri formatı:", response.data);
        }
      } catch (error) {
        console.error("Rol listesi alınırken bir hata oluştu:", error);
      }
    }

    async function fetchPermissions() {
      try {
        const response = await permissionService.getAll();
        if (Array.isArray(response.data)) {
          setPermissions(response.data);
        } else {
          console.error("Beklenmedik veri formatı:", response.data);
        }
      } catch (error) {
        console.error("Yetki listesi alınırken bir hata oluştu:", error);
      }
    }

    fetchRoles();
    fetchPermissions();
  }, []);

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoleId(e.target.value);
  };

  const handlePermissionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPermissionId(e.target.value);
  };

  const handleAssign = async () => {
    if (!selectedRoleId || !selectedPermissionId) {
      alert("Lütfen bir rol ve bir yetki seçin.");
      return;
    }

    const assignRequest: CreateRolePermissionRequest = {
      roleId: Number(selectedRoleId),
      permissionId: Number(selectedPermissionId),
    };

    try {
      await rolePermissionsService.create(assignRequest);
      alert("Yetki başarıyla atandı.");
    } catch (error) {
      console.error("Yetki atanırken bir hata oluştu:", error);
      alert("Yetki atanırken bir hata oluştu.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[1400px]">
          <div className="p-5">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Rol' e Yetki Atama</h2>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                Rol Seçin:
              </label>
              <select
                id="role"
                value={selectedRoleId}
                onChange={handleRoleChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Bir rol seçin</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id.toString()}>
                    {role.roleName}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="permission" className="block text-sm font-medium text-gray-700">
                Yetki Seçin:
              </label>
              <select
                id="permission"
                value={selectedPermissionId}
                onChange={handlePermissionChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Bir yetki seçin</option>
                {permissions.map((permission) => (
                  <option key={permission.id} value={permission.id.toString()}>
                    {permission.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleAssign}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Yetki Ata
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AssignPermissionOfRoles