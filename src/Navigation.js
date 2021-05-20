import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
//import BybError from './BybError';
import Login from './Login'
import ChooseTraits from './ChooseTraits'
import DisplayChosenTraits from './DisplayChosenTraits'
import Homepage from './Homepage'
import Notes from './AllNotes'
import WelcomePage from './WelcomePage'
import {setJwtTokenInHeaders} from "./services";
import {fetchUser} from "./redux/actions/auth";


export default (props)=>{

    const dispatch = useDispatch();
    const isFetching = useSelector(state=>state.authReducer.isFetching);
    const user = useSelector(state=>state.authReducer.user);
    const isAuthenticated = useSelector(state=>state.authReducer.isAuthenticated);

    // ComponentDidMount
    useEffect(()=>{
        const token = localStorage.getItem("accessToken");
        setJwtTokenInHeaders(token);
        console.log({token})
        dispatch(fetchUser());
    }, []);

    const CustomRoute = (props) => {
        if(props.protected) {
            if(!isFetching && user && isAuthenticated){
                return (<Route 
                    exact={props.exact} path = {props.path}
                    component = {props.component}
                />);
            } else {
                return (<Redirect to="/login" />);
            }
        } else {
            return (<Route 
                exact={props.exact} path = {props.path}
                component = {props.component}
            />);
        }
    }

    if(isFetching) return (<center>Loading...</center>);

    return( 
        <Router>
            <Route 
                exact path = '/'
                component = {WelcomePage}
            />
            <CustomRoute
                path = '/reset'
                component = {ChooseTraits}
                protected
            />
            <Route 
                path = '/login'
                component = {Login}
            />
            <CustomRoute 
                path = '/main'
                component ={DisplayChosenTraits}
                protected
            />
            <CustomRoute
                path = '/home'
                component = {Homepage}
                protected
            />
            <CustomRoute 
                path = '/notes'
                component = {Notes}
                protected
            />
        </Router>
    )
}
