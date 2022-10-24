import img from "img";

type types = {
    id: number;
    title: string;
    link: string;
    icon: string;
};

const data: types[] = [
    {
        id: Math.random(),
        title: "My profile",
        link: "/",
        icon: img.iconUser,
    },
    {
        id: Math.random(),
        title: "Edit my details",
        link: "/edit",
        icon: img.iconEdit,
    },
];

export default data;
