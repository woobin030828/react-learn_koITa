import React from 'react';
import PassComponent from './PassComponent';
import NotPassComponent from './NotPassComponent';
import LuckyComponent from './LuckyComponent';
import UnLuckyComponent from './UnLuckyComponent';

const Jsx05 = () => {
    const age = 24;
    const isEven = age % 2 === 0;
    const isAdult = age > 19;
    const isPass = isAdult ? <PassComponent /> : <NotPassComponent />
    const isLucky = isEven ? <LuckyComponent /> : <UnLuckyComponent />
    return (
        <div>
            {isPass}
            {isLucky}
        </div>
    );
};

export default Jsx05;