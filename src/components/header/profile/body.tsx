import React from "react";
import Messages from "../messages";
import Profile from "./profile";
import {
    Nav,
} from "./styles";

const Body: React.FC<any> = () => {
    return (
        <Nav>
            <Messages />
            <Profile />
        </Nav>
    );
};

export default Body;
