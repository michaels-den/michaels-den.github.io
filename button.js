'use strict';

const e = React.createElement;

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pushed: false };
  }

  render() {
    if (this.state.pushed) {
      return 'You pushed this.';
    }

    return e(
      'button',
      { onClick: () => this.setState({ pushed: true }) },
      'Push'
    );
  }
}

const domContainer = document.querySelector('#button_container');
ReactDOM.render(e(Button), domContainer);
