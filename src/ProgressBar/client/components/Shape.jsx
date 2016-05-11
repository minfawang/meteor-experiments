import React, { PropTypes } from 'react';
import { isEqual } from 'lodash';

class Shape extends React.Component {
  static propTypes = {
    ShapeClass: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    progress: PropTypes.number.isRequired,
    text: PropTypes.string,
    initialAnimate: PropTypes.bool.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
  };

  static defaultProps = {
    ShapeClass: null,
    options: {},
    progress: 0,
    text: null,
    initialAnimate: false,
  };

  componentDidMount() {
    this._create(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.options, nextProps.options)) {
      this._destroy();
      this._create(nextProps, this.props);
      return;
    }

    this._animateProgress(nextProps.progress);
    this._setText(nextProps.text);
  }

  componentWillUnmount() {
    this._destroy();
  }

  _create(props, oldProps) {
    if (!!this.shape) {
      throw new Error('Progressbar is already created');
    }

    // setState function is not used to prevent a new render cycle
    // This handling happens outside of React component's lifecycle
    const container = this.refs.progressBar;
    const { ShapeClass } = props;
    this.shape = new ShapeClass(
      container,
      props.options,
    );

    if (props.initialAnimate) {
      if (oldProps) {
        this._setProgress(oldProps.progress);
      }

      this._animateProgress(props.progress);
    } else {
      this._setProgress(props.progress);
    }

    this._setText(props.text);
  }

  _destroy() {
    if (this.shape) {
      this.shape.destroy();
      this.shape = null;
    }
  }

  _animateProgress(progress) {
    this.shape.animate(progress);
  }

  _setProgress(progress) {
    this.shape.set(progress);
  }

  _setText(text) {
    if (text) { this.shape.setText(text); }
  }

  render() {
    const { style, className } = this.props;

    return (
      <div
        className={className}
        style={style}
        ref="progressBar"
      />
    );
  }
}

export default Shape;
