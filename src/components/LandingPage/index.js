import React, { useEffect, useState } from 'react';
import Header from './../Header';
import Navigator from './../Navigator';
import ContentHolder from './../ContentHolder';
import './index.css';

import { getIcons } from './../../helpers';

const Landing = () => {
    const [openNav, setOpenNav] = useState(false);

    const handleNavigationState = (val) => {
        console.log(val);
        setOpenNav(val);
    };

    console.log('Landing rendered');
    return (
        <div className="landingPage">
            <Header
                handleNavigation={(val) => handleNavigationState(val)}
                openNav={openNav}
            />
            <Navigator
                handleNavigation={(val) => handleNavigationState(val)}
                openNav={openNav}
            />
            <ContentHolder />
        </div>
    );
};

export default Landing;
