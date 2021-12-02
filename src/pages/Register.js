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
          <h3>Register</h3>
          <div className="form-group">
            <label>First name</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Last name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last name"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <br />
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
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
          <p className="forgot-password text-right">
            Already registered <Link to="login">log in?</Link>
          </p>
        </form>
      </Container>
    );
  }
}
