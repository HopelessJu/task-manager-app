import { MatSnackBar} from '@angular/material/snack-bar';
import { Injectable, ErrorHandler, NgZone } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomErrorHandlerService  implements ErrorHandler{

  constructor(private snackbar:MatSnackBar, private zone: NgZone) { }

  handleError(errorMessage: string): void {
    this.zone.run(() => {
      this.snackbar.open(
        errorMessage,
        'Close',
        {
          duration: 3000
        }
      )
    });
  }
}
