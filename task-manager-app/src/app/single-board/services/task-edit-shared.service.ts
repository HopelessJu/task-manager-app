import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskEditSharedService {
  private sharedDataSubject = new BehaviorSubject<{title: string, description:string}>({title: '', description: ''})
  sharedData$: Observable<{title: string, description: string}> = this.sharedDataSubject.asObservable()

  constructor() { }

  setSharedData(data:{title: string, description:string}) {
    this.sharedDataSubject.next(data);
  }

  getSharedData(): {title: string, description: string} {
    return this.sharedDataSubject.value
  }
}
