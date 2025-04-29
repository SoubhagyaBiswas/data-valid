'use strict';

const formatRules = (rules) => {
    let formatedRules = {};
    Object.keys(rules).forEach(field => {
        let blank = {
            type: "text",
        }

        let validaionChecks = rules[field];
        validaionChecks.forEach((validaionCheck) => {
            let validationSplit = validaionCheck.split(':');
            let check = validationSplit[0];
            let limit = null;
            if(validationSplit.length > 1) {
                limit = validationSplit[1];
            }

            switch(check) {
                case "required": {
                    blank['required'] = true;
                    break;
                }

                case "text": {
                    blank['type'] = "text";
                    break;
                }
                case "email": {
                    blank['type'] = "email";
                    break;
                }
                case "number": {
                    blank['type'] = "number";
                    break;
                }
                case "boolean": {
                    blank['type'] = "boolean";
                    break;
                }

                case "min": {
                    blank['min'] = limit;
                    break;
                }
                case "max": {
                    blank['max'] = limit;
                    break;
                }
            }
        });

        formatedRules[field] = blank;
    });

    return formatedRules;
}

export default formatRules;