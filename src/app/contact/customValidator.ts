// TODO: This is an example, to be used if needed
// Currently being used for testing in the contact.component.ts
import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function createInvalidDomainValidator(hosts: string[]) : ValidatorFn {
    return (control: AbstractControl) : ValidationErrors | null => {
        const value = control.value?.toLowerCase();
    
        if (!value) {
            return null;
        }
    
        const matches = hosts.some(host => value.indexOf(`@${host}`) > -1);
    
        return matches ? { customValidator : true } : null;
    }
}