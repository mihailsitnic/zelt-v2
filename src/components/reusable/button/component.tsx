import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Button, Spinner } from "./styles";

const Component: React.FC<any> = (props) => {
    const [state, setState] = useState<boolean>(false);

    const {
        color,
        type,
        children,
        active,
        disabled,
        flee,
    } = props;

    return (
        <Button
            {...props}
            color={color}
            type={type}
            flee={flee}
            $flee={state}
            active={active}
            disabled={disabled}
            onMouseOver={() => setState(!state)}
        >
            {children}
            <Spinner className="loader" />
        </Button>
    );
};

export default withRouter(Component);
