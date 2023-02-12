import React, { useEffect } from 'react';
import { getDegrees } from '../../api/degrees';

const [degrees, setDegrees] = useState();

const Dropdown = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDegrees();
      setDegrees(data);
    };

    fetchData();
  }, []);

  return <div>Dropdown</div>;
};

export default Dropdown;
