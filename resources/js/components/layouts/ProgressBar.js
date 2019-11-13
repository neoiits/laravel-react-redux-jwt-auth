import React from 'react';
import TopBarProgress from 'react-topbar-progress-indicator';
import {useSelector} from 'react-redux';

const ProgressBar = () => {
    const ui_data = useSelector(state => state.UIReducer);
    TopBarProgress.config({
        barColors: {
            "0": "#ff7200",
            "0.5": "#59a7ff",
            "1.0": "#2cffb5",
        },
        shadowBlur: 3,
        barThickness: 3
    });
    if(ui_data.progress_bar){
        return (
            <TopBarProgress/>
        );
    }
    else{
        return ('');
    }
}

export default ProgressBar;