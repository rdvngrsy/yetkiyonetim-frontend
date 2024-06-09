import { CreateRoleRequest } from "../models/roles/requests/createRoleRequest";
import { UpdateRoleRequest } from "../models/roles/requests/updateRoleRequest";
import { GetRoleListResponse } from "../models/roles/responses/getRoleListResponse";
import { GetRoleResponse } from "../models/roles/responses/getRoleResponse";
import { BaseService } from "./baseService";

class RoleService extends BaseService<
    GetRoleListResponse,
    GetRoleResponse,
    CreateRoleRequest,
    UpdateRoleRequest
>{
    constructor() {
		super();
		this.apiUrl = "roles";
	}
}

export default new RoleService();