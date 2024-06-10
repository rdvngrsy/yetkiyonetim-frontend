import { AxiosResponse } from "axios";
import { CreateUserRoleRequest } from "../models/user-role/requests/createUserRoleRequest";
import { DeleteUserRoleRequest } from "../models/user-role/requests/deleteUserRoleRequest";
import { UpdateUserRoleRequest } from "../models/user-role/requests/updateUserRoleRequest";
import { GetUserRoleListResponse } from "../models/user-role/responses/getUserRoleListResponse";
import { GetUserRoleResponse } from "../models/user-role/responses/getUserRoleResponse";
import { BaseService } from "./baseService";
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";

interface GetUserRoleRequest {
    userId: string;
    // Diğer istek alanları
  }
class UserRoleService extends BaseService<
    GetUserRoleListResponse,
    GetUserRoleResponse,
    CreateUserRoleRequest,
    UpdateUserRoleRequest
>{
    constructor() {
		super();
		this.apiUrl = "user-roles";
	}

    deleteUserRole(request: DeleteUserRoleRequest): Promise<AxiosResponse<any>> {
        return axiosInstance.delete(`${this.apiUrl}`, { data: request });
    }

    getRolesByUserId(request: GetUserRoleRequest): Promise<AxiosResponse<any>> {
        return axiosInstance.get(`${this.apiUrl}`, { data: request });
    }
}

export default new UserRoleService();