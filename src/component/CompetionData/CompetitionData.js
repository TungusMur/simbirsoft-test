import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { connect } from 'react-redux';
import { getCompetitionCalendar } from '../../Store/reducers/reducerApi';
import Button from '../../common/Button/Button';
import CompetitionList from '../../common/CompetitionList';

// eslint-disable-next-line no-shadow
const CompetitionData = ({ data, getCompetitionCalendar }) => {
  const [state, setState] = useState(1);
  const location = useLocation();

  useEffect(() => {
    getCompetitionCalendar(
      document.location.href.match(/\d+-\d+-\d+/g)[0],
      document.location.href.match(/\d+-\d+-\d+/g)[1]
    );
    setState(1);
  }, [location]);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="competionData">
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
      <CompetitionList dataCheck={data} dataList={data.matches} state={state} name="competition: name" />
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }), { getCompetitionCalendar })(CompetitionData);
