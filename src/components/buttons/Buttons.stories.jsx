import CloseBtn from "./CloseBtn/CloseBtn";
import Button from "./Button/Button";

export default {
    title: 'RPCCL/buttons',
    tags: ['autodocs'],
}

export const Close = () => <CloseBtn />

export const Custom = {
    args: {
        primary: true,
        label: "example",
    },
    render: (args) => <Button {...args} />,
}

export const Extra = {
    args: {
        primary: false,
        label: "example",
    },
    render: (args) => <Button {...args} />,
}