import { AbstractControl, ValidatorFn } from "@angular/forms";

// Pattern validator function
export const patternValidator = (expression: RegExp): ValidatorFn => (customControl: AbstractControl): any => {

    // Checks the expression if it match don't set error
    if(customControl.value && customControl.value?.match(expression)) {

        customControl.setErrors(null);
        return {};
    
    // Else set an error
    } else {

        customControl.setErrors({inCorrect: true,message: 'Please enter valid password'});    
        return {'isPasswordInvalid': true};
    }
}