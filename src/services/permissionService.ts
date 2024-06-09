import { CreatePermissionRequest } from "../models/permissions/requests/createPermissionRequest";
import { UpdatePermissionRequest } from "../models/permissions/requests/updatePermissionRequest";
import { GetPermissionListResponse } from "../models/permissions/responses/getPermissionListResponse";
import { GetPermissionResponse } from "../models/permissions/responses/getPermissionResponse";
import { BaseService } from "./baseService";

class PermissionService extends BaseService<
    GetPermissionListResponse,
    GetPermissionResponse,
    CreatePermissionRequest,
    UpdatePermissionRequest
>{
    constructor() {
		super();
		this.apiUrl = "permissions";
	}
}

export default new PermissionService();