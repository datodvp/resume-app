import React, { useEffect } from 'react';
import { fetchDegrees } from '../../services/degrees';

const [degrees, setDegrees] = useState();

const Dropdown = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDegrees();
      // console.log(data);
      setDegrees(data);
    };

    fetchData();
  }, []);

  return <div>Dropdown</div>;
};

export default Dropdown;
