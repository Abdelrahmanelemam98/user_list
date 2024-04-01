import { Component, OnInit } from '@angular/core';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  AllUsers!: User[];
  totalRecords?: number;
  page: number;
  perPage: number;

  constructor(
    private userServices: UserServicesService,
    private router: Router
  ) {
    this.page = 1;
    this.perPage = 6;
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(event: any = { first: 0 }): void {
    const pageNumber = event.first / this.perPage + 1;
    this.userServices.getAllUser(pageNumber, this.perPage).subscribe(
      (response) => {
        this.AllUsers = response;
        this.totalRecords = response.length;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  details(id: number) {
    this.router.navigate(['/user', id]);
  }
}
