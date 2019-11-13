import React, {Component} from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from 'react-bootstrap';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import ProgressBar from './layouts/ProgressBar';
import Home from '../pages/home';
import {getUser} from '../helpers/user';
import {connect} from 'react-redux';
import {LoggedUser} from '../store/actions/AuthActions';

class App extends Component{
    constructor(props){
        super(props);
        this.getData(this.props.auth_data.token);
    }

    async getData(token){
        if(token != null){
            let data = await getUser(token);
            if(data != null){
                this.props.LoggedUserDetails({user : data, loggedIn:true});
            }
        }
    }

    render(){
        return(
            <Router>
                <ProgressBar/>
                <Header/>
                <Container fluid={false} className="main-container">
                <Route exact path="/" component={Home}/>
                </Container>
                <Footer/>
            </Router>
        );
    }
}

const mapStateToProps =(state)=>{
    const {AuthReducer} = state;
    return {
        auth_data : AuthReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        LoggedUserDetails: (data) =>dispatch(LoggedUser(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);