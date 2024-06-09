import React, { useEffect, useState } from 'react';
import { GetUserListResponse } from '../../models/users/responses/getUserListResponse';
import { GetRoleListResponse } from '../../models/roles/responses/getRoleListResponse';
import userService from '../../services/userService';
import roleService from '../../services/roleService';
import { CreateUserRoleRequest } from '../../models/user-role/requests/createUserRoleRequest';
import userRoleService from '../../services/userRoleService';


type Props = {};

const AssignRoleOfUser = (props: Props) => {
  const [users, setUsers] = useState<GetUserListResponse[]>([]);
  const [roles, setRoles] = useState<GetRoleListResponse[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string>("");
  const [selectedRoleId, setSelectedRoleId] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await userService.getAll();
        if (Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.error("Beklenmedik veri formatı:", response.data);
        }
      } catch (error) {
        console.error("Kullanıcı listesi alınırken bir hata oluştu:", error);
      }
    }

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

    fetchUsers();
    fetchRoles();
  }, []);

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId(e.target.value);
  };

  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRoleId(e.target.value);
  };

  const handleAssign = async () => {
    if (!selectedUserId || !selectedRoleId) {
      alert("Lütfen bir kullanıcı ve bir rol seçin.");
      return;
    }

    const assignRequest: CreateUserRoleRequest = {
      userId: Number(selectedUserId),
      roleId: Number(selectedRoleId),
    };

    try {
      await userRoleService.create(assignRequest);
      alert("Rol başarıyla atandı.");
    } catch (error) {
      console.error("Rol atanırken bir hata oluştu:", error);
      alert("Rol atanırken bir hata oluştu.");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5 w-[1400px]">
          <div className="p-5">
            <h2 className="text-lg font-medium text-gray-900 mb-4">Kullanıcıya Rol Atama</h2>
            <div className="mb-4">
              <label htmlFor="user" className="block text-sm font-medium text-gray-700">
                Kullanıcı Seçin:
              </label>
              <select
                id="user"
                value={selectedUserId}
                onChange={handleUserChange}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Bir kullanıcı seçin</option>
                {users.map((user) => (
                  <option key={user.id} value={user.id.toString()}>
                    {user.username}
                  </option>
                ))}
              </select>
            </div>
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
            <button
              onClick={handleAssign}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none"
            >
              Rol Ata
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AssignRoleOfUser;
