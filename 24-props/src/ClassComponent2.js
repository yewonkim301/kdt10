import { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent2 extends Component {
  render() {
    const { text, valid } = this.props;
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={valid}>콘솔 메세지</button>
      </div>
    );
  }
}

ClassComponent2.defaultProps = {
  text: '이건 기본 text props입니다.',
};

ClassComponent2.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ClassComponent2;
