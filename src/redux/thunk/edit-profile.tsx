import { createAsyncThunk } from "@reduxjs/toolkit";
import { Profile, setUserProfile } from "api/mock-api";
import { FormikValues } from "formik";
import toastify from 'components/reusable/toastify';

function profileFromFormikValues(values: FormikValues): Profile {
    return {
        firstName: values.firstName,
        lastName: values.lastName,
        dateOfBirth: values.dateOfBirth,
        profilePictureURL: values.profilePictureURL,
        salary: values.salary,
        about: values.about,
    };
}

export const editProfile = createAsyncThunk(
    "editProfile",
    async (data: FormikValues) => {
        try {
            const parsedProfile = profileFromFormikValues(data);

            await setUserProfile(parsedProfile);

            toastify(
                {
                    type: "success",
                    title: "Profile updated successfully",
                    subtitle: "Check your profile page",
                }
            );

            return parsedProfile;
        } catch (err) {
            toastify(
                {
                    type: "error",
                    title: "Something went wrong",
                    subtitle: "Try one more time",
                }
            );
        }
    }
);
