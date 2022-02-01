import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCompetition } from '../../Store/reducers/reducerApi';
import Button from '../../common/Button/Button';
import CompetitionList from '../../common/CompetitionList';

// eslint-disable-next-line no-shadow
const Competition = ({ data, getCompetition }) => {
  const [state, setState] = useState(1);

  useEffect(() => {
    getCompetition();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="competition">
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
      <CompetitionList dataCheck={data} dataList={data.competitions} state={state} name="name" />
      <Button type={'<'} state={state} setState={setState} data={data} />
      <Button type={'>'} state={state} setState={setState} data={data} />
    </div>
  );
};

export default connect((data) => ({ data: data.reducerApi.data }), { getCompetition })(Competition);
