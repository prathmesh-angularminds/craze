import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// Pattern validator function
export const patternValidator = (expression: RegExp): ValidatorFn => (customControl: AbstractControl): any => {

    // Checks the expression if it match don't set error
    if(customControl.value.match(expression)) {
        customControl.setErrors({'passwordValidation': false});    
    // Else set an error
    } else {
        customControl.setErrors({'passwordValidation': true})
    }
}