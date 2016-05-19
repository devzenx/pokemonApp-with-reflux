import React from 'react';

const StatsItem = (stats)=> {

    console.log("StatsItem");
    console.log(stats.stat.name);
    console.log(Math.ceil(stats.base_stat/10)*10);
    let meterStyle = {
        top: Math.ceil(stats.base_stat/10)*10 + '%'
    }

    return (
        <li className="col">
            <ul className="gauge">
                <li className="meter" style={meterStyle}></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
            <span>{stats.stat.name}</span>
        </li>

    )
};

export default StatsItem;