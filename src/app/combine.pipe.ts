import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'combine' })
export class CombinePipe implements PipeTransform {
    transform(value: any[], ...args: any[]): any {
        return value.join('$ ');
    }
}
