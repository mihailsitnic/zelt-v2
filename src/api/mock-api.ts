export type Profile = {
    firstName: string;
    lastName: string;
    dateOfBirth: any;
    profilePictureURL: any;
    salary: number;
    about: string;
};

const profile: Profile = {
    firstName: "Dua",
    lastName: "Clipa",
    salary: 40000,
    dateOfBirth: new Date("1995/08/22"),
    profilePictureURL: null,
    about: "",
};

export function getUserProfile(): Promise<Profile> {
    return new Promise<Profile>((resolve) => {
        setTimeout(() => resolve(profile), 1e3);
    });
}

export function setUserProfile(newProfile: Profile): Promise<string> {
    return new Promise<"OK">((resolve) => {
        setTimeout(() => {
            const { firstName, lastName, dateOfBirth, profilePictureURL, salary, about } =
                newProfile;
            Object.assign(profile, {
                firstName,
                lastName,
                dateOfBirth,
                profilePictureURL,
                salary,
                about,
            });
            resolve("OK");
        }, 2e3);
    });
}
