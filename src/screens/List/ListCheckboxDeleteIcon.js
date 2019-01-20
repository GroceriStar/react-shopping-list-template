import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Checkbox from "../../components/Ingredient/Checkbox";
import DeleteLink     from "../../components/Ingredient/DeleteLink";
import shortid from "shortid";
import deleteIcon from './waste-bin.png'
class ListCheckboxDeleteIcon extends Component {

  render() {
    const Style = {
      "backgroundImage": 'url('+ deleteIcon +')',
      float: 'left',
  width: '24px',
  height: '24px',
          }
  // backgroundImage: 'url(' + imgUrl + ')',
    return (
      <ul style = {{"list-style-type": "none"}}>
          {this.props.data.map(
            (item, index) =>(
          <li key={shortid.generate()}
              id={shortid.generate()}>
            <Checkbox name={item}>
                {item}
                  <DeleteLink id={index} url={"/examples/delete/" + index}>
                    <div class="btn">
                      <span class="icon" style={Style}>
                      </span>
                    </div>
                  </DeleteLink>
            </Checkbox>
          </li>
        ))
          }
      </ul>
    );
  }
}

export default ListCheckboxDeleteIcon;
