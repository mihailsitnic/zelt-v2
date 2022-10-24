interface MyFormValues {
    firstName: string;
    lastName: string;
    dateOfBirth: any;
    salary: string;
}

const validate = (values: MyFormValues) => {
    let errors: any = {};

    if (!values.firstName) {
        errors.firstName = "Required";
    }
    if (!values.lastName) {
        errors.lastName = "Required";
    }
    if (!values.dateOfBirth) {
        errors.dateOfBirth = "Required";
    }
    if (!values.salary) {
        errors.salary = "Required";
    }

    return errors;
};

export default validate;