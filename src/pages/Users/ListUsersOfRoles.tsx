import React, { useEffect, useState } from "react";
import { GetUserRoleListResponse } from "../../models/user-role/responses/getUserRoleListResponse";
import userRoleService from "../../services/userRoleService";

type Props = {};

const ListUsersOfRoles = (props: Props) => {
  const [userRoles, setUserRoles] = useState<GetUserRoleListResponse[]>([]);

  async function fetchUserRoles() {
    try {
      const response = await userRoleService.getAll();
      console.log(response);
      if (Array.isArray(response.data)) {
        const sortedData = response.data.sort((a, b) =>
            (a.userName || "").localeCompare(b.userName || "")
          );
          setUserRoles(sortedData);
      } else {
        console.error("Beklenmedik veri formatı:", response.data);
      }
    } catch (error) {
      console.error("Kullanıcı rol listesi alınırken bir hata oluştu:", error);
    }
  }

  useEffect(() => {
    fetchUserRoles();
  }, []);

  const handleDelete = async (userId: number, roleId: number) => {
    try {
      await userRoleService.deleteUserRole({ userId, roleId });
      // Silme işlemi başarılı ise listeyi güncelle
      setUserRoles((prevRoles) =>
        prevRoles.filter(
          (userRole) =>
            userRole.userId !== userId || userRole.roleId !== roleId
        )
      );
      console.log("Kullanıcı rolü başarıyla silindi!");
    } catch (error) {
      console.error("Kullanıcı rolü silinirken bir hata oluştu:", error);
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
                  Kullanıcı
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  Rol
                </th>
                <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                  İşlem
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 border-t border-gray-100">
              {userRoles?.map(
                (userRole: GetUserRoleListResponse, index) => (
                  <tr key={index} className="hover:bg-gray-50 ">
                    <td className="px-6 py-4">{userRole.userUsername}</td>
                    <td className="px-6 py-4">{userRole.roleName}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() =>
                          handleDelete(userRole.userId, userRole.roleId)
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

export default ListUsersOfRoles;
