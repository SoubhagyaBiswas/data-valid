'use strict';

import validate from "../helpers/validator.js";

/**
 * Create a new instance of Validator
 *
 * @param {Object} data Data to be validated
 * @param {Object} rules Rules to be used to validate
 *
 * @return {Validator} A new instance of Validator
 */
class Validator {

    constructor (rules) {
        this.rules = rules;
        this.error = {};
    }

    validate = (data) => {
        this.error = validate(this.rules, data)
        return this;
    }

    isValid = () => {
        return Object.keys(this.error).length === 0 && this.error.constructor === Object;
        
        // throw new CustomError("Number cannot be negative.");
    }

    errors = () => {
        return this.error;
    }

    validated = () => {
        return this.data;
    }
}

export default Validator;