import { RegisterRequest } from "../models/auth/requests/registerRequest";

import { UpdateUserRequest } from "../models/users/requests/updateUserRequest";
import { GetUserListResponse } from "../models/users/responses/getUserListResponse";
import { GetUserResponse } from "../models/users/responses/getUserResponse";
import { BaseService } from "./baseService";

class UserService extends BaseService<
    GetUserListResponse,
    GetUserResponse,
    RegisterRequest,
    UpdateUserRequest
>{
    constructor() {
		super();
		this.apiUrl = "users";
	}
}

export default new UserService();