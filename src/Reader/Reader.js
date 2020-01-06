import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/Controls';
import Progress from './progress/Progress';
import Publication from './publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
    publicationIndex: 0,
  };
  static propTypes = {
    step: PropTypes.number,
    publicationIndex: PropTypes.number,
  };
  state = {
    publicationIndex: 0,
  };

  onPrevClick = () => {
    this.setState(prevState => {
      return { publicationIndex: prevState.publicationIndex - this.props.step };
    });
  };

  onNextClick = () => {
    this.setState(prevState => {
      return { publicationIndex: prevState.publicationIndex + this.props.step };
    });
  };

  render() {
    const { items } = this.props;
    const { publicationIndex } = this.state;
    return (
      <>
        <Controls
          publicationIndex={publicationIndex}
          onPrevClick={this.onPrevClick}
          onNextClick={this.onNextClick}
          prevBtnDisabled={publicationIndex === 0}
          nextBtnDisabled={publicationIndex === items.length - 1}
        />
        <Progress publicationIndex={publicationIndex} items={items} />
        <Publication publication={items[publicationIndex]} />
      </>
    );
  }
}
