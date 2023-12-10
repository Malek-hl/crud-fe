import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import TaskListModel from './models/taskListModel';


@Injectable({
  providedIn: 'root'
})
export class ApiConfigService {

  API_BASE_URL = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  // API Call to BackEnd:
  getTaskLists(url: string){
    return this.httpClient.get(`${this.API_BASE_URL}/${url}`);
  };

  getTasks(url: string){
    return this.httpClient.get(`${this.API_BASE_URL}/${url}`);
  };

  post(url: string, data: Object) {
    return this.httpClient.post<TaskListModel>(`${this.API_BASE_URL}/${url}`, data);
  };

  put(url: string, data: Object) {
    return this.httpClient.put(`${this.API_BASE_URL}/${url}`, data);
  };

  patch(url: string, data: Object) {
    return this.httpClient.patch(`${this.API_BASE_URL}/${url}`, data);
  };

  deleteTask(url: string) {
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`);
  };

  deleteTaskList(url: string) {
    return this.httpClient.delete(`${this.API_BASE_URL}/${url}`);
  };

}
