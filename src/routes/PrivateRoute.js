import React from 'react';
import { connect, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectCurrentUser } from "../redux/user/user.selector";
const PrivateRoute = ({component:Component, ...otherProps}) => {
     const currentUser = useSelector(state => state.user.currentUser)
    return (
        <Route
            {...otherProps}
            render={({ props }) => currentUser ? (<Component {...props} />) : (<Redirect to="/sign-in" />)}
        />
    );
};

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state),
});

export default connect(mapStateToProps, null)(PrivateRoute);
