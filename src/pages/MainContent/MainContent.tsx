// src/MainContent.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Homepage/Homepage";
import Roles from "../Roles/Roles";
import CreateRoles from "../Roles/CreateRoles";
import DeleteRoles from "../Roles/DeleteRoles";
import Permission from "../Permissions/Permission";
import CreatePermission from "../Permissions/CreatePermission";
import DeletePermission from "../Permissions/DeletePermission";
import AssignPermissionOfRoles from "../Roles/AssignPermissionOfRoles";
import ListPermissionOfRoles from "../Permissions/ListPermissionOfRoles";
import Users from "../Users/Users";
import CreateUsers from "../Users/CreateUsers";
import AssignRoleOfUsers from "../Users/AssignRoleOfUsers";
import ListUsersOfRoles from "../Users/ListUsersOfRoles";

const MainContent: React.FC = () => {
  return (
    <div className="flex-grow h-full overflow-y-auto">
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/roles" element={<Roles/>} />
        <Route path="/roles/create" element={<CreateRoles/>} />
        <Route path="/roles/assign-permission" element={<AssignPermissionOfRoles/>} />
        <Route path="/roles/delete" element={<DeleteRoles/>} />
        
        <Route path="/permissions" element={<Permission/>} />
        <Route path="/permissions/create" element={<CreatePermission/>} />
        <Route path="/permissions/list-roles" element={<ListPermissionOfRoles/>} />
        <Route path="/permissions/delete" element={<DeletePermission/>} />

        <Route path="/users" element={<Users/>} />
        <Route path="/users/create" element={<CreateUsers/>} />
        <Route path="/users/assign-role" element={<AssignRoleOfUsers/>} />
        <Route path="/users/list-roles" element={<ListUsersOfRoles/>} />



      </Routes>
    </div>
  );
};

export default MainContent;
