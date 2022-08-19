import React, { useState} from 'react';
import { Nav, Tab } from './Navigation.styled';
import ActiveUsers from '../ActiveUsers/ActiveUsers';

const Navigation = () => {

    const tabItems = [
        {
            id: 'active',
            text: 'Active users',
            color: 'blue',
            component: <ActiveUsers />
        },
        {
            id: 'inactive',
            text: 'Inactive users',
            color: 'blue',
            component: <div>Inactive users</div>
        },
    ]
    const [activeTab, setActiveTab] = useState('active');

    const renderTabs = tabItems.find((item) => item.id === activeTab)?.component;
   
    return (
        <>
        <Nav>
            {tabItems.map(tab =><Tab onClick={() => setActiveTab(tab.id)} type={activeTab === tab.id}>{tab.text}</Tab>)}
        </Nav>
        <div>{renderTabs}</div>
        </>
    );
}

export default Navigation;
