import React from "react";
import { useAppSelector } from "redux/hooks";
import { default as dayjs } from "dayjs";
import Head from "components/head";
import Breadcrumbs from "components/breadcrumbs";
import img from "img";
import {
	Main,
	Wrapper,
	Section,
	Flex,
	Picture,
	Avatar,
	Span,
	Info,
	Title,
	Ul,
	Li,
	Name,
	About,
	Text,
} from "./styles";

const Profile: React.FC<any> = (props) => {
	const user = useAppSelector((state) => state.user);

	return (
		<Main>
			<Wrapper>
				<Head name="Profile" />
				<Breadcrumbs name="Profile" />

				<Section>
					<Flex>
						<Picture>
							<Avatar
								src={user?.profilePictureURL || img.logo}
								alt="avatar"
							/>
							<Name>
								{user?.firstName} {user?.lastName}
							</Name>
						</Picture>
						<Info>
							{user && (
								<>
									<Title>Info</Title>

									<Ul>
										<Li>
											<Span>{dayjs(user?.dateOfBirth).format("DD MMM YYYY")}</Span>
										</Li>
										<Li>
											<Span>{user?.salary}</Span>
										</Li>
									</Ul>
								</>
							)}
						</Info>
					</Flex>
					<About>
						<Title>About me</Title>
						<Text>{user?.about}</Text>
					</About>
				</Section>
			</Wrapper>
		</Main>
	);
};

export default Profile;
