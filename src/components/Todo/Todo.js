import React, {
  Component
} from 'react';
import classNames from 'classnames';
import PropTypes  from 'prop-types';


class Todo extends Component {

  constructor(props){
    super(props);


  }

  render() {
    const handleToggle = this.props.handleToggle;
    const handleRemove = this.props.handleRemove;
    const elementClass = 'xxx';
    
    return (
      <li>
        <span onClick={handleRemove}>Text</span>
        <input
          type="checkbox"
          onChange={handleToggle}
          checked={this.props.isComplete}
          className={elementClass}
        />
        props.name
      </li>
    );
  }
}

Todo.propTypes = {
  name: React.PropTypes.string.isRequired,
  isComplete: React.PropTypes.bool,
  id: React.PropTypes.number.isRequired
}

export default Todo;
