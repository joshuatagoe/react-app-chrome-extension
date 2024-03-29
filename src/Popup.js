import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton"
import "./Popup.css";

export default class Popup extends Component{
    constructor(props){
        super(props)

        this.state = {
            email: "",
            password: "",
            isLoading: false,
        };
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;

    }

    handleChange = event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event =>{
        console.log("test");
    }

    render(){
        return(
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            autoFocus
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl 
                            type="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                    </FormGroup>
                    <LoaderButton
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Login"
                        loadingText="Logging in…"
                        />
                </form>
            </div>
        )
    }
}