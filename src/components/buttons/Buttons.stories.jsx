import CloseBtn from "./CloseBtn/CloseBtn";
import Button from "./Button/Button";
import ExtraBtn from "./ExtraBtn/ExtraBtn";

export default {
    title: 'RPCCL/buttons'
}

export const Close = () => <CloseBtn />

export const Custom = {
    args: {
        label: "example",
    },
    render: (args) => <Button {...args} />,
}

export const Extra = {
    args: {
        label: "example",
    },
    render: (args) => <ExtraBtn {...args} />,
}