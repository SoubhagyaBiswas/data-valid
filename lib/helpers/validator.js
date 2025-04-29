'use strict';

import formatRules from "./rules.js";

const setError = (errors, field, error) => {
    if(!errors[field]) {
        errors[field] = [];
    }
    errors[field].push(error);
}

const validate = (rules, data) => {
    
    let formatedRules = formatRules(rules);
    let errors = {}

    // GETTING FILEDS IN RULES
    Object.keys(formatedRules).forEach(field => {
        let rule = formatedRules[field];        // GETTING THE RULES FOR THE FILED
        let value = data[field];        // GETTING DATA FOR THE FILED

        // REQUIRED CHECK
        if (rule.required && (value === undefined || value === null || value === "")) {
            if(!errors[field]) {
                errors[field] = [];
            }
            setError(errors, field, `${field} is required.`)
            return;
        }

        // TYPE CHECK
        if(!rule.type) {
            rule.type = "text";
        }
        switch (rule.type) {

            case "text": {

                if(typeof value !== 'string') {
                    setError(errors, field, `${field} must be a valid text.`)
                    return;
                }
    
                if (rule.min && value.length < rule.min) {
                    setError(errors, field, `${field} should be at least ${rule.min} characters long.`)
                    return;
                }
    
                if (rule.max && value.length > rule.max) {
                    setError(errors, field, `${field} should be no longer than ${rule.max} characters.`)
                    return;
                }
    
                if (rule.regex && !new RegExp(rule.regex).test(value)) {
                    setError(errors, field, `${field} does not match the required pattern.`)
                    return;
                }
                break;
            }
                

            case "email": {

                const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                if (!new RegExp(emailRegex).test(value)) {
                    setError(errors, field, `${field} must be a valid email.`)
                    return;
                }
                break;
            }

            case "number": {

                if (isNaN(value)) {
                    setError(errors, field, `${field} must be a valid number.`)
                    return;
                } else {
                    if (rule.min && value < rule.min) {
                        setError(errors, field, `${field} must be at least ${rule.min}.`)
                        return;
                    }
                    if (rule.max && value > rule.max) {
                        setError(errors, field, `${field} must be no more than ${rule.max}.`)
                        return;
                    }
                }
                break;
            }

            case "boolean": {

                if (typeof value !== "boolean") {
                    setError(errors, field, `${field} must be a boolean value.`)
                    return;
                }
                break;
            }

        }

    });

    return errors;
}

export {
    validate as default
}