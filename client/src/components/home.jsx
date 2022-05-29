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
              src="https://i.pcmag.com/imagery/reviews/00UZTG51MQFHrtSkAVaJ1pf-1.fit_lim.size_625x365.v1603131994.png"
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
              src="https://www.gensecurity.com/hubfs/Blog/How-to-Pick-the-Best-Luxury-Home-Security-System.jpg"
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
              src="https://tekmaxtechnologies.com/wp-content/uploads/2021/10/home-security-systems.png"
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
