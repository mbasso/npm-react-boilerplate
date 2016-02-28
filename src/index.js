import React from 'react';

class CustomComponent extends React.Component {

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}

CustomComponent.propTypes = {
  children: React.PropTypes.array,
};

export default CustomComponent;
