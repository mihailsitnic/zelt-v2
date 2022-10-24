import img from "img";

interface MyFormValues {
    profilePictureURL: any;
    firstName: string;
    lastName: string;
    dateOfBirth: any;
    salary: number;
    about: string;
}

const initVal: MyFormValues = {
    profilePictureURL: img.logo,
    firstName: "Dua",
    lastName: "Clipa",
    dateOfBirth: new Date("1995/08/22"),
    salary: 40000,
    about: "",
};

const init = (currentUser: any) => {
    return {
        profilePictureURL: currentUser.profilePictureURL || initVal.profilePictureURL,
        firstName: currentUser?.firstName || initVal.firstName,
        lastName: currentUser?.lastName || initVal.lastName,
        dateOfBirth: currentUser?.dateOfBirth || initVal.dateOfBirth,
        salary: currentUser?.salary || initVal.salary,
        about: currentUser?.about || initVal.about,
    };
};

export default init;
