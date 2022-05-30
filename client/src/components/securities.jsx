import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Form, FormGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams, withRouter, useHistory } from "react-router-dom";

class Securities extends Component {
  state = {
    securityDetails: [],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div class="container mt-5">
            <div class="d-flex justify-content-center row">
              <div class="col-md-8">
                <div class="d-flex flex-column comment-section">
                  {this.state.securityDetails.map((securityData) => (
                    <div key={securityData.securityID} className="col catCard">
                      <div class="bg-white p-2">
                        <div class="mt-2 commentTexts">
                          <p class="comment-text">
                            security ID: {securityData.securityID} <br/>
                            Door Status: {securityData.doorStatus} <br/>
                            Gas Status: {securityData.gasStatus} <br/>
                            Fire Status: {securityData.fireDitect} <br/>
                            Time: {securityData.status_update_time} <br/>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  async componentDidMount() {
    let { data } = await axios.get("http://localhost:4000/api/security");
    console.log(data);
    let security = data.map((security) => {
      return {
        securityID: security._id,
        doorStatus: security.doorStatus,
        gasStatus: security.gasStatus,
        fireDitect: security.fireDitect,
        status_update_time: security.status_update_time,
      };
    });
    this.setState({ securityDetails: security });
  }
}
export default Securities;
