import React from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { useAppSelector } from "redux/hooks";
import init from "./init";
import validate from "./validate";
import { editProfile } from "redux/thunk";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import FormBody from "./body";
import {
	Main,
	Wrapper,
} from "./styles";

const About: React.FC<any> = (props) => {
	const dispatch = useDispatch();
	const currentUser = useAppSelector((state) => state.user);

	return (
		<Main>
			<Wrapper>
				<Head name="Edit Profile" />
				<Breadcrumbs name="Edit Profile" />
				<Formik
					enableReinitialize
					initialValues={init(currentUser)}
					validate={validate}
					onSubmit={(values) => dispatch(editProfile(values))}
				>
					{({ values, errors, touched, isSubmitting, setFieldValue }) => (
						<FormBody
							values={values}
							touched={touched}
							errors={errors}
							sfv={setFieldValue}
							isSubmitting={isSubmitting}
						/>
					)}
				</Formik>
			</Wrapper>
		</Main>
	);
};

export default About;
