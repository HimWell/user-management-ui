import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private serverURL = environment.serverURL;

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.serverURL}/user/all`);
  }

  public addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${this.serverURL}/user/add`, user);
  }

  public updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.serverURL}/user/update`, user);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.serverURL}/user/delete/${userId}`);
  }
}
