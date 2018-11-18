import React, { Component } from 'react';
import { Alert, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import _ from 'lodash';

import { getDepartments } from "../../selectors/selector.js";

class Departments extends Component {

  state = {
    loaded: false
  }

  componentDidMount = () =>  {
    this.departments = getDepartments();
    this.setState({ loaded: true });

  }


  render() {
    return (
      <div>
        <Container>
        {
          this.state.loaded &&

          this.departments.map((item, index) => {
            return(
              <Link to={{ pathname: '/ingredients', state: { department: item} }}>
              <Row>
                <Alert color="warning" style={{width: "90vw"}}>
                  {item}
                </Alert>
              </Row>
              </Link>
            );

          }

          )

        }
        </Container>
      </div>
    )
  }
}

export default Departments;
