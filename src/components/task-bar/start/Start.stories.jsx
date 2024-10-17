import StartMenu from "./StartMenu"

export default{
    title: 'RPCCL/taskbar/start'
}

const arr = ['placeholder 1', 'placeholder 2', 'placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder', 'placeholder']
const arr2 = ['placeholder 1', 'placeholder 2']

export const Default = () => <StartMenu items={arr2} />;

export const Menu = {
    args: {
        items: arr2,
    },
    render: (args) => <StartMenu {...args} />
}