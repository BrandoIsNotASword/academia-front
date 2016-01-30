import React from 'react';
import { branch } from 'baobab-react/higher-order';
import ChildComponentActions from '../actions/ChildComponentActions';
import doge from '../../imgs/doge.jpg';

const {
  Component
} = React;

class ChildComponent extends Component {
  render() {
    const text = this.props.text;

    return (
      <div>
        <p>{text}</p>
        <img src={doge} alt="Doge" onClick={this.handleClick.bind(this)} />
      </div>
    );
  }

  handleClick() {
    this.props.actions.printText();
  }
}

export default branch(ChildComponent, {
  cursors: {
    text: ['text']
  },

  actions: {
    printText: ChildComponentActions.printText
  }
});
