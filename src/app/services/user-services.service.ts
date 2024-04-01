import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
import { User } from '../model/user';

interface UsersApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

@Injectable({
  providedIn: 'root',
})
export class UserServicesService {
  baseUrl = 'https://reqres.in/api/users';
  baserUrl_Details = 'https://reqres.in/api/users/{id}';
  constructor(private http: HttpClient) {}

  getAllUser(page: number, perPage: number): Observable<User[]> {
    const url = `${this.baseUrl}?page=${page}&per_page=${perPage}`;
    return this.http.get<UsersApiResponse>(url).pipe(
      map((response) => response.data),
      catchError((error) => {
        console.error('Error fetching users:', error);
        throw error;
      })
    );
  }
  getUserById(id: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/${id}`);
  }
}
