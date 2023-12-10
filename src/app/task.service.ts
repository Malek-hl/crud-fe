import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiConfigService } from './api-config.service';
import TaskModel from './models/taskModel';
import TaskListModel from './models/taskListModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private apiConfigService: ApiConfigService) { }

  // To fetch all tasl lists:
  getAllTaskLists(){
    return this.apiConfigService.getTaskLists('tasklists');
  }

// To fetch all tasks:
getAllTasks(taskListId: string){
  return this.apiConfigService.getTasks(`tasklists/${taskListId}`);
};


// Create a task list bucket:
createTaskList(title: string): Observable<TaskListModel>{
  let data = {'title': title};
  return this.apiConfigService.post('tasklists', data);
};

// To fetch all tasks inside a task list object:
getAllTasksForATaskList(taskListId: string ) {
  return this.apiConfigService.getTasks(`tasklists/${taskListId}/tasks`);
};

//Create a task inside a particular Task List:
createTaskInsideATaskList(taskListId: string, title: string){
  return this.apiConfigService.post(`tasklists/${taskListId}/tasks`, {title});
};

// Delete a task list:
deleteTaskList(taskListId: string){
  return this.apiConfigService.deleteTaskList(`tasklists/${taskListId}`);
};

// Delete a task inside a particular task list:
deleteATaskInsideATaskList(taskListId: string, taskId: string){
  return this.apiConfigService.deleteTask(`tasklists/${taskListId}/tasks/${taskId}`);
};

// Update the status of a task wether completed or not:
updateTaskStatus(taskListId: string, taskObject: TaskModel){
  let updateData = {'completed': !taskObject.completed }
  return this.apiConfigService.patch(`tasklists/${taskListId}/tasks/${taskObject._id}`, updateData);
};
}
