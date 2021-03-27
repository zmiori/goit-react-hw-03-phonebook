import { Component } from 'react';
import s from './Filter.module.css';

class Filter extends Component {
  normalizedTitle = t => {
    return t[0].toUpperCase() + t.slice(1);
  };

  render() {
    const { value, onChange } = this.props;

    return (
      <label className={s.filter}>
        <span className={s.text}>Find contacts by name:</span>
        <input type="text" value={value} onChange={onChange} />
      </label>
    );
  }
}

export default Filter;
