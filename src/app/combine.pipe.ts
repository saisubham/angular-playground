import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'combine' })
export class CombinePipe implements PipeTransform {
    transform(value: any[], separator = ', '): any {
        return value.join(separator);
    }
}
