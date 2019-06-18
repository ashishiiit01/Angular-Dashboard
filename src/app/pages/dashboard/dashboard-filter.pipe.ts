import { PipeTransform, Pipe, Injectable } from '@angular/core';

@Pipe({
    name: 'userFilter'
})

@Injectable()

export class DashboardFilterPipe implements PipeTransform {
    transform(value: any, args?: any): any {
        if (!args) {
            return value;
        }
        return value.filter((val) => {
            let rVal = (val.name.toLowerCase().includes(args)) || (val.phone.toLowerCase().includes(args)) || (val.email.toLowerCase().includes(args));
            return rVal;
        })

    }
}