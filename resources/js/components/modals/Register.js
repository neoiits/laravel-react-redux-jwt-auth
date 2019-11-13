import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import {Input, TextArea} from '../../helpers/Inputs';
import {useDispatch} from 'react-redux';
import {userAuth, LoggedUser} from '../../store/actions/AuthActions';
import {setProgressBar} from '../../store/actions/UIActions';
import {getUser} from "../../helpers/user";

const Register = (props) => {

    /** Used dispatch component in function component */
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);

    /** Save product and dispatch to reducer */
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setProgressBar(true));
        setErrors([]);
        setLoading(true);
        let data = new FormData(e.target);
        axios.post('/api/user/create', data)
            .then(response => {
                setLoading(false);
                toastr['success'](response.data.message, "Yeah Success!");
                dispatch(userAuth({token:response.data.token}));
                getData(response.data.token);
                setTimeout(()=>{
                    props.handleClose();
                }, 300);
                dispatch(setProgressBar(false));
            })
            .catch(error => {
                let err = error.response;
                if(err.status == 422){
                    setErrors(err.data);
                }
                else if(err.status == 400 || err.status == 500){
                    toastr['error'](err.data, "Oops Error!");
                }
                else{
                    console.log(err);
                }
                setLoading(false);
                dispatch(setProgressBar(false));
            });
    }

    const getData = async (token) => {
        if(token != null){
            let data = await getUser(token);
            if(data != null){
                dispatch(LoggedUser({user : data, loggedIn : true}));
            }
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} centered backdrop="static" keyboard={ false } scrollable={true}>
                <Modal.Header closeButton={!loading}>
                    <Modal.Title style={{width:'100%', textAlign : "center"}}>Register</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form" onSubmit={handleSubmit}>
                        <Input type="text" orientation="v" name="first_name" title="First Name" value="" error={errors.first_name} />
                        <Input type="text" orientation="v" name="last_name" title="Last Name" value="" error={errors.last_name} />
                        <Input type="text" orientation="v" name="email" title="Email" value="" error={errors.email}/>
                        <Input type="password" orientation="v" name="password" title="Password" value="" error={errors.password}/>
                        <Input type="password" orientation="v" name="confirm_password" title="Confirm Password" value="" error={errors.confirm_password}/>
                        <div className="text-center">
                        <button type="submit" className="btn btn-primary" disabled={loading}>
                            {loading ? (<span><i className='fa fa-spinner fa-spin'></i> Registering</span>) :(<span>Register</span>)}
                        </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Register;