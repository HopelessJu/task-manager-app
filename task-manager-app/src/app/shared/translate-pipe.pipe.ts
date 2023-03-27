import { Pipe, PipeTransform } from '@angular/core';
import { TranslateServiceService } from './translate-service.service';

@Pipe({
  name: 'translatePipe',
  pure: false
})
export class TranslatePipePipe implements PipeTransform {

  constructor(private translateService: TranslateServiceService) {}

  transform(value: any, args?: any): any {
    return this.translateService.translate(value)
  }

}
