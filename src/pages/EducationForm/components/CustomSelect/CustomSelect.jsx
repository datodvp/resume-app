import React, { useEffect, useState } from 'react';
import Dropdown from 'react-dropdown';
import DownArrowImg from '../../../../assets/images/DownArrowImg.svg';
import './styles.scss';

const options = ['1', '2'];

const CustomSelect = ({ options }) => {
  const [selected, setSelected] = useState('');
  const [formattedOptions, setFormattedOptions] = useState([]);

  const _onSelect = (option) => {
    setSelected(option);
    console.log(option);
  };
  useEffect(() => {
    formatOptions();
  }, []);

  const formatOptions = () => {
    //format options for Dropdown component
    const newOptions = options.map((item) => ({
      value: item.id,
      label: item.title,
    }));
    setFormattedOptions(newOptions);
  };

  return (
    <section>
      <h3>Flat Array Example </h3>
      <div className="Dropdown-container">
        <Dropdown
          options={formattedOptions}
          onChange={_onSelect}
          value={selected}
          placeholder="Select an option"
        />
        <img src={DownArrowImg} alt="" />
      </div>
    </section>
  );
};

export default CustomSelect;
