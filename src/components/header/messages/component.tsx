import React, { useState } from "react";
import img from 'img'
import {
    Href,
    Bell,
    Info,
} from './styles'

const Messages: React.FC<any> = (props) => {
    const [status, setStatus] = useState<boolean>(true);

    return (
        <>
            <Href to="#" onClick={() => setStatus(false)}>
                <Bell
                    src={status ? img.iconMsgActive : img.iconMsg}
                    alt='Messages'
                />
                <Info {...props} view={status}>{3}</Info>
            </Href>
        </>
    )
}

export default Messages