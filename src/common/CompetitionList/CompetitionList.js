const CompetitionList = ({ dataCheck, dataList, state, name }) => (
  <div className="competitionList">
    <ul>
      {JSON.stringify(dataCheck) !== '{}'
        ? dataList
            .filter((item, index) => state * 20 > index && state * 20 - 20 < index)
            .map((item, index) => <li key={index}>{item[name]}</li>)
        : null}
    </ul>
  </div>
);

export default CompetitionList;
