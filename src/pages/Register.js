import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Register extends Component {
  render() {
    return (
      <Container>
        <form>
          {" "}
          <br />
          <h2>Register Form</h2>
          <br />
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control inputF"
              placeholder="First name"
            />
          </div>
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control inputF"
              placeholder="Last name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control inputF"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control inputF"
              placeholder="Enter password"
            />
          </div>
          <br />
          <button
            style={{ width: "200px" }}
            type="submit"
            className="btn  btn-lg btn-block"
          >
            Register
          </button>
          <br />
          <p className="forgot-password text-left ">
            Already registered <Link to="/login">log in?</Link>
          </p>
        </form>
      </Container>
    );
  }
}
