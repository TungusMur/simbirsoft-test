import { useEffect, useState } from 'react';
import { useNavigate, Outlet, useParams } from 'react-router';
import Button from '../../common/Button';
import './Competitions.scss';

const Competitions = () => {
  const params = useParams();
  const [value, setValue] = useState(JSON.stringify(params) !== '{}' ? params.search : '');
  const navigation = useNavigate();

  useEffect(() => {
    setValue(JSON.stringify(params) !== '{}' ? params.search : '');
  }, [params]);

  return (
    <div className="competitions">
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
                  navigation(`/competitions/search=${value}`);
                } else if (e.code === 'Enter') {
                  navigation(`/competitions`);
                  setValue('');
                }
              }}
            />
            <Button type="competitions" value={value} navigation={navigation} setValue={setValue} />
          </div>
        </div>
        <Button type="reset" navigation={navigation} />
      </div>
      <Outlet />
    </div>
  );
};

export default Competitions;
