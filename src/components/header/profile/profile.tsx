import React, { useState } from "react";
import { useAppSelector } from "redux/hooks";
import List from "./menu";
import CloseMenu from "./click-outside";
import img from "img";
import { Menu, Wrap, Avatar, UserName, Arrow } from "./styles";

const Profile: React.FC<any> = (props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const user = useAppSelector((state) => state.user);

    return (
        <div>
            <Wrap onClick={() => setIsOpen(!isOpen)} className="menu">
                <Avatar src={user.profilePictureURL || img.logo} alt="Avatar" />
                <UserName>
                    {user.firstName} {user.lastName}
                </UserName>
                <Arrow {...props} isactive={isOpen} />
            </Wrap>

            <Menu {...props} state={isOpen}>
                <List isOpen={isOpen} />
            </Menu>

            <CloseMenu {...props} isOpen={(state: any) => setIsOpen(state)} />
        </div>
    );
};

export default Profile;
