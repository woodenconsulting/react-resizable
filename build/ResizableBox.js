'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var React = require('react');
var Resizable = require('./Resizable');
var PureRenderMixin = require('react/lib/ReactComponentWithPureRenderMixin');

// An example use of Resizable.
var ResizableBox = module.exports = React.createClass({
  displayName: 'ResizableBox',
  mixins: [PureRenderMixin],

  propTypes: {},

  getInitialState: function getInitialState() {
    return {
      width: this.props.width,
      height: this.props.height
    };
  },

  onResize: function onResize(event, _ref) {
    var element = _ref.element;
    var size = _ref.size;

    if (size.width !== this.state.width || size.height !== this.state.height) {
      this.setState({
        width: size.width,
        height: size.height
      });
    }
  },

  render: function render() {
    // Basic wrapper around a Resizable instance.
    // If you use Resizable directly, you are responsible for updating the component
    // with a new width and height.
    var _props = this.props;
    var handleSize = _props.handleSize;
    var minConstraints = _props.minConstraints;
    var maxConstraints = _props.maxConstraints;

    var props = _objectWithoutProperties(_props, ['handleSize', 'minConstraints', 'maxConstraints']);

    return React.createElement(
      Resizable,
      {
        minConstraints: minConstraints,
        maxConstraints: maxConstraints,
        handleSize: handleSize,
        width: this.state.width,
        height: this.state.height,
        onResize: this.onResize,
        draggableOpts: this.props.draggableOpts
      },
      React.createElement(
        'div',
        _extends({ style: { width: this.state.width + 'px', height: this.state.height + 'px' } }, props),
        this.props.children
      )
    );
  }
});