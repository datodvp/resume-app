import React, { Component } from 'react';
import Dropdown from 'react-dropdown';
import './styles.scss';

const options = ['one', 'two', 'three'];

class FlatArrayExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
    this._onSelect = this._onSelect.bind(this);
  }

  _onSelect(option) {
    console.log('You selected ', option.label);
    this.setState({ selected: option });
  }

  render() {
    const defaultOption = this.state.selected;
    return (
      <section>
        <h3>Flat Array Example </h3>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </section>
    );
  }
}

export default FlatArrayExample;
