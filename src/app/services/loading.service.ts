import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  isLoading = new BehaviorSubject<boolean>(false);
  constructor() {}

  showLoader() {
    this.isLoading.next(true);
  }
  hideLodaer() {
    this.isLoading.next(false);
  }
}
