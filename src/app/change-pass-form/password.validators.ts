import { FormGroup } from '@angular/forms/src/model';
import { AbstractControl,ValidationErrors } from "@angular/forms";

export class PassWordValidators{
    static notValid(control : AbstractControl) : Promise<ValidationErrors | null>{
        return new Promise((resolve,reject) => {
           setTimeout(() => {
            if(control.value != "1234"){
                resolve({notValid : true});
            }else{
                resolve(null);
            }
           }, 2000);
        });
    }

    static notMatched(control : AbstractControl) : ValidationErrors|null{
        let parent = control.parent;
        let confirmPassValue = control.value as string;
        if(parent == null || confirmPassValue == '') return null;
        let passControl= parent.controls['newPassword'];
        let passValue = passControl.value as string;
        if(confirmPassValue!=passValue){
            return {notMatched : true};
        }
        return null;
    }
}