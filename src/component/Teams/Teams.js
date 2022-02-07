import { useState, useEffect } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router';
import Button from '../../common/Button';
import '../../styles/searchForm.scss';
import './Teams.scss';

const Team = () => {
  const params = useParams();
  const [value, setValue] = useState(JSON.stringify(params) !== '{}' ? params.search : '');
  const navigation = useNavigate();

  useEffect(() => {
    setValue(JSON.stringify(params) !== '{}' ? params.search : '');
  }, [params]);

  return (
    <div className="teams">
      <div className="search">
        <div className="searchForm">
          <div className="searchFormActions">
            <input
              type="text"
              placeholder="Поиск..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={(e) => {
                if (value.replace(/\s+/g, '') && e.code === 'Enter') {
                  navigation(`/teams/search=${value}`);
                } else if (e.code === 'Enter') {
                  navigation(`/teams`);
                  setValue('');
                }
              }}
            />
            <Button type="teams" value={value} navigation={navigation} setValue={setValue} />
          </div>
        </div>
        <Button type="reset" navigation={navigation} />
      </div>
      <Outlet />
    </div>
  );
};

export default Team;
