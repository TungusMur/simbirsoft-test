import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router';
import Button from '../../common/Button';

// eslint-disable-next-line no-shadow
const Competitions = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigate();
  return (
    <div className="competitions">
      <div className="searchForm">
        <input type="text" placeholder="Поиск..." value={value} onChange={(e) => setValue(e.target.value)} />
        <Button type="competitions" value={value} navigation={navigation} setValue={setValue} />
      </div>
      <Outlet />
    </div>
  );
};

export default Competitions;
