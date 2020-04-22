import { AbstractControl } from '@angular/forms';

export function numberValidator(control: AbstractControl,min:number,max:number)
{
    if(control.value>=min || control.value<=max) {
        return {numberValid:true}
    }
    return null;
}