import React, {useState, useEffect} from 'react';
import {Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {setProgressBar} from '../../store/actions/UIActions';
import {userLogout} from '../../store/actions/AuthActions';
import Login from "../modals/Login";
import Register from "../modals/Register";

const Header = () => {
    const auth_info = useSelector(state => state.AuthReducer);
    const dispatch  = useDispatch();
    const [login_show, setLoginShow] = useState(false);
    const [reg_show, setRegShow] = useState(false);
    
    const handleLogout = () => {
        dispatch(setProgressBar(true));
        axios.post('/api/auth/logout', {}, {headers: {Authorization: 'Bearer '+auth_info.token}}).then(response => {
            dispatch(userLogout());
            dispatch(setProgressBar(false));
        }).catch(error => {
            let err = error.response;
            if(err.status == 422){
            }else{
                console.log(err);
            }
            dispatch(setProgressBar(false));
        });
    }

    return (
        <>
            <Login show={login_show} handleClose={()=>setLoginShow(false)} />
            <Register show={reg_show} handleClose={()=>setRegShow(false)} />
            <Navbar fixed="top" bg="light" className="box-shadow site-header">
                <Navbar.Brand><Link to="/">MyTestApp</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </Nav>
                    <Navbar.Text>
                        {auth_info.loggedIn?
                            (<NavDropdown className="custom-drop-left" title={auth_info.user.first_name} id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                            </NavDropdown>)
                            :
                            (<>
                            <Button onClick={()=>setLoginShow(true)} className="btn btn-success btn-sm text-white m-1">Login</Button>
                             / 
                            <Button onClick = {()=>setRegShow(true)} className="btn btn-primary btn-sm text-white m-1">Register</Button></>)
                        }
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default Header;