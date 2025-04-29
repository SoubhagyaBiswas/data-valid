export interface Rules {
    [key: string]: string | string[];
}

export interface Data {
    [key: string]: any;
}

export interface Errors {
    [key: string]: string[];
}

/**
 * Validator class for validating data against rules.
 */
declare class Validator {
    private rules: Rules;
    private error: Errors;
    private data?: Data;

    constructor(rules: Rules);

    validate(data: Data): this;

    isValid(): boolean;

    errors(): Errors;

    validated(): Data | undefined;
}

export default Validator;