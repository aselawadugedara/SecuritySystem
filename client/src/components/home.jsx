import React, { Component } from "react";
import { Carousel, Container } from "react-bootstrap";

class Home extends Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Carousel>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://1.bp.blogspot.com/-mp0p3zN-9Ys/XFYDSZsqnkI/AAAAAAAAB7A/N8FHuAvrrdwvZhoj1agm_7JcOrIEZp_jQCKgBGAs/w0/cat-1-4K.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://cdn.wallpapersafari.com/0/72/aZRcM3.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="d-block w-100"
              src="https://cdn.99images.com/photos/wallpapers/animals-birds/cute-cat%20android-iphone-desktop-hd-backgrounds-wallpapers-1080p-4k-n42hj.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              {/* <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    );
  }
}

export default Home;
