import { useState } from 'react';
import { useNavigate, Outlet } from 'react-router';
import Button from '../../common/Button';

const Team = () => {
  const [value, setValue] = useState('');
  const navigation = useNavigate();
  return (
    <div className="teams">
      <div className="searchForm">
        <input type="text" placeholder="Поиск..." value={value} onChange={(e) => setValue(e.target.value)} />
        <Button type="teams" value={value} navigation={navigation} setValue={setValue} />
      </div>
      <Outlet />
    </div>
  );
};

export default Team;
