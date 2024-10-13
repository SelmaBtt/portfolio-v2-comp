import CloseBtn from "./CloseBtn/CloseBtn";
import Button from "./Button/Button";

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