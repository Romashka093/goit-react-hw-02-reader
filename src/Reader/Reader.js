import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from './controls/Controls';
import Progress from './progress/Progress';
import Publication from './publication/Publication';

export default class Reader extends Component {
  static defaultProps = {
    step: 1,
    publicationIndex: 1,
    // items: [Object],
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
    console.log('props', this.props);
    console.log('state', this.state);
  };

  onNextClick = () => {
    this.setState(prevState => {
      return { publicationIndex: prevState.publicationIndex + this.props.step };
    });
    console.log('props', this.props);
    console.log('state', this.state);
  };

  // currentPage = () => {
  //   console.log('state', this.props.items);
  // };
  // totalPages = () => {
  //   console.log('state', this.props.items);
  // };

  render() {
    const { step } = this.props;
    const { publicationIndex } = this.state;
    return (
      <>
        <Controls
          publicationIndex={publicationIndex}
          onPrevClick={this.onPrevClick}
          onNextClick={this.onNextClick}
          // prevBtnDisabled={}
          // nextBtnDisabled={}
        />
        <Progress step={step} currentPage={publicationIndex} totalPages={12} />
        <Publication id={this.id} title={this.title} text={this.text} />
      </>
    );
  }
}
