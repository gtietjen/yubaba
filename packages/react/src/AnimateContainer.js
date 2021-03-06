// @flow

import type { Children } from 'react';
import React from 'react';

import { addListener } from 'yubaba-core';

export default class AnimateContainer extends React.Component {
  _detatch: Function;

  props: {
    pair: string,
    children?: Children,
    style?: any,
  };

  state = {
    visible: false,
  };

  componentWillMount () {
    if (document) {
      this._detatch = addListener(this.props.pair, this.setVisibility);
    }
  }

  componentWillUnmount () {
    this._detatch();
  }

  setVisibility = (visible: boolean) => {
    this.setState({
      visible,
    });
  };

  render () {
    const { pair, style, ...props } = this.props;

    return (
      <div {...props} style={{ ...style, opacity: this.state.visible ? 1 : 0 }}>
        {this.props.children}
      </div>
    );
  }
}
