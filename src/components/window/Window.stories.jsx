import Window from './Window'

export default {
    title: 'RPCCL/window',
    component: Window
}

const tabsArr = ['Me', 'Skills', 'Languages']

export const Default = {
    args: {
        title: 'Placeholder',
        tabs: tabsArr,
    },
    render: (args) => {
        return (
            <Window {...args}>
                <p>Hello</p>
            </Window>
        );
    } 
}
