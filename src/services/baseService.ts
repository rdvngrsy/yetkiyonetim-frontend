import { AxiosResponse } from "axios";
import axiosInstance from "../core/utils/interceptors/axiosInterceptors";

export class BaseService<
    GetAllType,
    GetByIdType,
    AddRequestType,
    UpdateRequestType,
    >{
        public apiUrl: string;

        constructor(){
            this.apiUrl = "";
        }

        getAll(): Promise<AxiosResponse<GetAllType, any>>{
            return axiosInstance.get<GetAllType>(this.apiUrl);
        }

        getById(id?:string): Promise<AxiosResponse<GetByIdType, any>>{
            return axiosInstance.get<GetByIdType>(this.apiUrl + "/" + id);
        }
        create(request: AddRequestType): Promise<AxiosResponse<any>>{
            return axiosInstance.post(this.apiUrl, request);
        }
        update(request: UpdateRequestType): Promise<AxiosResponse<any>>{
            return axiosInstance.put(this.apiUrl, request);
        }
        delete(id: number){
            return axiosInstance.delete(this.apiUrl + "/" + id);
        }
    }