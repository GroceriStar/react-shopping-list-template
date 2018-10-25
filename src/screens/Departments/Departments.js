import React, { Component } from 'react';
import { Alert, Container, Row } from 'reactstrap';

import data from '@groceristar/groceristar-fetch/groceristar'

class Departments extends Component {

  state={
  loaded: false
  }

  componentDidMount = () =>  {
    this.departments = data.getAllDepartments();
    this.setState({loaded: true});

  }

  render() {
    return (
      <div>
        <Container>
        { 
          this.state.loaded &&

          this.departments.map((item, index) =>{
            return(
              <Row>
                <Alert color="warning" style={{width: "90vw"}}>
                  {item}
                </Alert>
              </Row>
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
