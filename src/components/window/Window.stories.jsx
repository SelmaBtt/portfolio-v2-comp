import Window from './Window';
import WindowHeader from './window-header/WindowHeader';
import WindowTabs from './window-tabs/WindowTabs';

export default {
    title: 'RPCCL/window',
    tags: ['autodocs'],
}

const tabsArr = ['Me', 'Skills', 'Languages']

export const EntireWindow = {
    args: {
        title: 'Placeholder',
        tabs: tabsArr,
    },
    render: (args) => {
        return (
            <Window {...args}>
                <p>Lorem ipsum</p>
            </Window>
        );
    } 
}

export const Bar = {
    args: {
        title: 'placeholder'
    },
    render: (args) => {
        return (
            <WindowHeader {...args} />
        );
    } 
}

export const Tabs = {
    args: {
        labels: tabsArr
    },
    render: (args) => {
        return (
            <WindowTabs {...args} />
        );
    } 
}