import React from "react";
import { withRouter } from "react-router-dom";
import data from "./data";
import { Ul, Li, Href, Icon } from "./styles";

const Menu: React.FC<any> = (props) => {
    const { isOpen } = props;

    const renderMenu = () => {
        const list = data.map((item) => (
            <Li {...props} key={item.id} state={isOpen}>
                <Href to={item.link}>
                    <Icon src={item.icon} alt={item.title} />
                    {item.title}
                </Href>
            </Li>
        ));
        return <Ul>{list}</Ul>;
    };

    return renderMenu();
};

export default withRouter(Menu);
