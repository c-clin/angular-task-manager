import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: 'filter',
    pure: false
})

export class FilterPipe implements PipeTransform {
    transform(value: any, filterText: string, propName: string): any {
        if (value.length === 0 || filterText === '') {
            return value;
        }

        const resultArray = [];
        for (const item of value) {
            if (item[propName].toLowerCase().indexOf(filterText) !== -1) {
                resultArray.push(item);
            }
        }
        return resultArray;
    }

}

