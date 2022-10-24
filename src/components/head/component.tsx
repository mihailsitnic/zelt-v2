import React from "react";
import { withRouter } from "react-router-dom";
import Button from "components/reusable/button";
import { Header, Title } from "./styles";

const Head: React.FC<any> = (props) => {
    const { name, history } = props;

    const cta = () => {
        if (history.location.pathname === "/") {
            return (
                <Button color="orange" onClick={() => history.push("/edit")}>
                    Edit Profile
                </Button>
            );
        }
        return null;
    };

    return (
        <Header>
            <Title>{name}</Title>
            {cta()}
        </Header>
    );
};

export default withRouter(Head);
