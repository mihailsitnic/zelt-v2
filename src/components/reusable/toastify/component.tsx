import { ToastContainer, toast } from "react-toastify";
import img from "img";
import {
    Btn,
    Wrap,
    Article,
    Image,
    Icon,
    Status,
    Title,
    SubTitle,
    CloseIcon
} from "./styles";

function toastify(props: any) {
    const { type, title, subtitle } = props;

    toast(
        <Article>
            <Image {...props} state={type}>
                <Icon src={type === "success" ? img.icon200 : img.icon400} />
            </Image>
            <Status>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </Status>
        </Article>
    );

    const close = () => (
        <Btn>
            <CloseIcon alt="close btn" src={img.iconClose} />
        </Btn>
    );

    return (
        <Wrap>
            <ToastContainer closeButton={close()} />
        </Wrap>
    );
};

export default toastify;