import React, { Component } from "react";
import { Container } from "react-bootstrap";

class Footer extends Component {
  state = {};

  render() {
    return (
      <Container fluid >
        <footer class="page-footer font-small special-color-dark pt-4 ">
          <hr></hr>
          <div class="container">
            <ul class="list-unstyled list-inline text-center">
              <li class="list-inline-item">
                <a
                  class="btn-floating btn-fb mx-1"
                  href="https://www.facebook.com/"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1312/1312139.png"
                    style={{ width: "32px", height: "32px" }}
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn-floating btn-gplus mx-1"
                  href="https://lk.linkedin.com/"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/145/145807.png"
                    style={{ width: "32px", height: "32px" }}
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn-floating btn-li mx-1"
                  href="https://www.instagram.com/?hl=en"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png"
                    style={{ width: "32px", height: "32px" }}
                  />
                </a>
              </li>
              <li class="list-inline-item">
                <a
                  class="btn-floating btn-dribbble mx-1"
                  href="https://twitter.com/explore"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/145/145812.png"
                    style={{ width: "32px", height: "32px" }}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div class="footer-copyright text-center special-color-gray-dark py-3">
            © 2022 Copyright: Group 01
          </div>
        </footer>
      </Container>
    );
  }
}

export default Footer;
