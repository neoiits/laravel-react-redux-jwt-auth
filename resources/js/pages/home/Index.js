import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setProgressBar} from '../../store/actions/UIActions';

class Home extends Component{
    constructor(props){
        super(props);
        this.props.ProgressBarStatus(true);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.ProgressBarStatus(false);
        }, 500);
    }

    render(){
        return(
            <>
            Home Page
            </>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        ProgressBarStatus: (status) =>dispatch(setProgressBar(status))
    }
}

export default connect(null, mapDispatchToProps)(Home);