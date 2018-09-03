import React, {
  Component
} from 'react';

// @TODO delete later and move to parent
import data from '@groceristar/groceristar-fetch/groceristar';

class List extends Component {

  constructor(props){
    super(props);

  }

  render() {

    const count = [1, 2, 3].length;
    // const items = [1, 2, 3];
    //data is things from gs-fetch
    // const items = props.data;
    const items = data
      return (
          <div>List component</div>
      );
  }
}

export default List;
