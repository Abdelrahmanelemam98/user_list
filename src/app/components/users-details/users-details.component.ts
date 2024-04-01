import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from 'src/app/services/user-services.service';
import { User } from 'src/app/model/user'; // Assuming User model is defined in this file or imported correctly

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.scss'],
})
export class UsersDetailsComponent implements OnInit {
  user!: User;
  constructor(
    private userService: UserServicesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.route.paramMap.subscribe((params) => {
      const userId = params.get('id');
      if (userId !== null) {
        this.userService
          .getUserById(Number(userId))
          .subscribe((response: any) => {
            if (response && response.data) {
              this.user = response.data;
              console.log(this.user);
            } else {
              console.error('Invalid response format');
            }
          });
      } else {
        console.error('User ID is null');
      }
    });
  }
}
