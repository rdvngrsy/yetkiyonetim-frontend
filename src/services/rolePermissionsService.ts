
import { AxiosResponse } from "axios";
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";
import { CreateRolePermissionRequest } from "../models/role-permission/requests/createRolePermissionRequest";
import { DeleteRolePermissionRequest } from "../models/role-permission/requests/deleteRolePermissionRequest";
import { UpdateRolePermissionRequest } from "../models/role-permission/requests/updateRolePermissionRequest";
import { GetRolePermissionListResponse } from "../models/role-permission/responses/getRolePermissionListResponse";
import { GetRolePermissionResponse } from "../models/role-permission/responses/getRolePermissionResponse";
import { BaseService } from "./baseService";

class RolePermissionService extends BaseService<
    GetRolePermissionListResponse,
    GetRolePermissionResponse,
    CreateRolePermissionRequest,
    UpdateRolePermissionRequest
>{
    constructor() {
		super();
		this.apiUrl = "role-permissions";
	}

    deleteRolePermission(request: DeleteRolePermissionRequest): Promise<AxiosResponse<any>> {
        return axiosInstance.delete(`${this.apiUrl}`, { data: request });
    }

    
}

export default new RolePermissionService();