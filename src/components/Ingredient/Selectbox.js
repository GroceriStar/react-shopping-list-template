import React, { Component } from 'react';
import shortid from "shortid";


class Selectbox extends Component {
    render() {
        return (

          <select>
            {
              this.props.data.map(
                function (item) {
                  return (
                    <option key={shortid.generate()} value={item}>
                      {item}
                    </option>
                  )}

              )}
          </select>

  )
}
}

export default Selectbox;
