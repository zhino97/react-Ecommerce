import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
      <footer  style={{marginTop:"80px"}}>
        <div class="container">
          <div class="row">
            <div class="col-lg-5 col-md-5 col-sm-4 col-xs-12">
              <ul class="adress">
                <span>Adress</span>
                <li>
                  <p>Lorem ipsum dolor sit amet, vero omnis vocibus</p>
                </li>

                <li>
                  <p>info@gmail.com</p>
                </li>
              </ul>
            </div>

            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <ul class="contact">
                <span>Service</span>
                <li>
                  <Link to="/home">Home</Link>
                </li>

                <li>
                  <Link to="/women">women's</Link>
                </li>

                <li>
                  <Link to="#">men's</Link>
                </li>

                <li>
                  <Link to="#">brand's </Link>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-3 col-sm-4 col-xs-12">
              <ul class="social">
                <span>Social</span>
                <li>
                  <Link to="#">
                    <i class="fa fa-facebook fa-2x"></i>
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    <i class="fa fa-github fa-2x"></i>
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    <i class="fa fa-linkedin fa-2x"></i>
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    <i class="fa fa-tumblr fa-2x"></i>
                  </Link>
                </li>

                <li>
                  <Link to="#">
                    <i class="fa fa-google-plus fa-2x"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
