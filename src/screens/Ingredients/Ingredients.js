import React, { Component } from 'react';
import { Alert, Container, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

import data from '@groceristar/groceristar-fetch/groceristar'

class Ingredients extends Component {

  state={
  loaded: false
  }

  componentDidMount = () =>  {
    console.log(this.props.location.state.department);
    this.ingredients = data.getAllIngredientsByOneDepartment(this.props.location.state.department);;
    this.setState({loaded: true});

  }

 
  render() {
    return (
      <div>
        <Container fluid style={{backgroundColor: '#FFC324', color:'white', fontSize:24}}>
        { 
          this.state.loaded &&

          this.ingredients.map((item, index) =>{
            return(
              <Row style={{paddingTop:'1%',paddingLeft: '5%'}}>
                  {item}
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

export default Ingredients;
