import React, {Component} from 'react';
import { render } from 'react-dom';
import { Button } from 'stardust'

if (module.hot) {
  module.hot.accept();
}

class ButtonToggleExample extends Component {

  componentWillMount () {
    this.state = {active: false};
  }

  handleClick ()  {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { active } = this.state
    return (
      <Button toggle active={active} onClick={this.handleClick.bind(this)}>
        Toggle
      </Button>
    )
  }
}

const HelloWorld = () => (
  <div>
    <p>
      Starter App made with Feathers, React, Semnatic UI, and Webpack!
    </p>
    <ButtonToggleExample/>
  </div>

);

render(<HelloWorld />, document.getElementById('app'));
