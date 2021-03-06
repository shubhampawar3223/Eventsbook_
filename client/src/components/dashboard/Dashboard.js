import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser, getProfile } from "../../actions/authActions";

class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
        this.props.history.push("/");
    };

    onProfileClick = e => {
        e.preventDefault();
        this.props.getProfile();
        this.props.history.push("/profile");
    };

    onPostClick = e => {
        e.preventDefault();
        this.props.history.push("/createPost");
    };

    onHomeClick = e => {
        e.preventDefault();
        this.props.history.push("/timeline");
    };

    render() {
        const { user } = this.props.auth;
        return(
            <div style={{ height: "90vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <h4>
                            <b>Hey there!</b> {user.name.split(" ")[0]}
                            <p className="flow-text grey-text text-darken-1">
                                You are logged into {" "}
                                <span style={{ fontFamily: "monospace" }}>EventsBook</span>
                                app👏
                            </p>
                        </h4>
                        <div>
                            <button 
                                style={{
                                    width: "150px",
                                    borderRadius: "3px",
                                    letterSpacing: "1.5px",
                                    marginTop: "1rem"
                                }}
                                onClick={this.onHomeClick}
                                className="btn btn-large waves-effect waves-light hoverable blue-accent-3">
                                    Home
                            </button>
                        </div>
                        <button 
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onProfileClick}
                            className="btn btn-large waves-effect waves-light hoverable blue-accent-3">
                                Profile
                        </button>
                        <button 
                            style={{
                                width: "250px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onPostClick}
                            className="btn btn-large waves-effect waves-light hoverable blue-accent-3">
                                Post an Event
                        </button>
                        <button 
                            style={{
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            onClick={this.onLogoutClick}
                            className="btn btn-large waves-effect waves-light hoverable blue-accent-3">
                                Logout
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    getProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect (
    mapStateToProps,
    { logoutUser, getProfile }
)(Dashboard);