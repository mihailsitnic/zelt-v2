import React from "react";
import Profile from "../profile";
import { Section, Wrapper, Inner, Logo } from "./styles";

const Header: React.FC<any> = () => {

	return (
		<Section>
			<Wrapper>
				<Inner>
					<Logo to="/">Zelt</Logo>
					<Profile />
				</Inner>
			</Wrapper>
		</Section>
	)
};

export default Header;
