/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useEffect, useRef, useState, useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const DataListItem = ({ type, index, item }) => {
  // const [timer, setTimer] = useState();

  // useEffect(() => {
  //   document.getElementById(`dataListItem${index}`).addEventListener('mouseover', () => {
  //     console.log('-');
  //     document.getElementById(`imgFirst${index}`).style.transition = '1s';
  //     document.getElementById(`imgSecond${index}`).style.transition = '1s';

  //     setTimer(
  //       setInterval(() => {
  //         document.getElementById(`imgFirst${index}`).style.transform = `rotateY(${
  //           document.getElementById(`imgFirst${index}`).style.transform
  //             ? Number(document.getElementById(`imgFirst${index}`).style.transform.match(/\d+/)[0]) + 180
  //             : 360
  //         }deg)`;
  //         document.getElementById(`imgSecond${index}`).style.transform = `rotateY(${
  //           document.getElementById(`imgSecond${index}`).style.transform
  //             ? Number(document.getElementById(`imgSecond${index}`).style.transform.match(/\d+/)[0]) + 180
  //             : 180
  //         }deg)`;
  //       }, 1000)
  //     );
  //   });
  //   return () => {
  //     document.getElementById(`dataListItem${index}`).addEventListener('mouseover', () => {
  //       document.getElementById(`imgFirst${index}`).style.transition = '1s';
  //       document.getElementById(`imgSecond${index}`).style.transition = '1s';

  //       setTimer(
  //         setInterval(() => {
  //           document.getElementById(`imgFirst${index}`).style.transform = `rotateY(${
  //             document.getElementById(`imgFirst${index}`).style.transform
  //               ? Number(document.getElementById(`imgFirst${index}`).style.transform.match(/\d+/)[0]) + 180
  //               : 360
  //           }deg)`;
  //           document.getElementById(`imgSecond${index}`).style.transform = `rotateY(${
  //             document.getElementById(`imgSecond${index}`).style.transform
  //               ? Number(document.getElementById(`imgSecond${index}`).style.transform.match(/\d+/)[0]) + 180
  //               : 180
  //           }deg)`;
  //         }, 1000)
  //       );
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   document.getElementById(`dataListItem${index}`).removeEventListener('mouseout', () => {
  //     console.log('+');
  //     document.getElementById(`imgFirst${index}`).style.transition = '0s';
  //     document.getElementById(`imgSecond${index}`).style.transition = '0s';

  //     document.getElementById(`imgFirst${index}`).style.transform = 'rotateY(180deg)';
  //     document.getElementById(`imgSecond${index}`).style.transform = 'rotateY(0deg)';

  //     clearInterval(timer);
  //   });

  //   document.getElementById(`dataListItem${index}`).addEventListener('mouseout', () => {
  //     console.log('+');
  //     document.getElementById(`imgFirst${index}`).style.transition = '0s';
  //     document.getElementById(`imgSecond${index}`).style.transition = '0s';

  //     document.getElementById(`imgFirst${index}`).style.transform = 'rotateY(180deg)';
  //     document.getElementById(`imgSecond${index}`).style.transform = 'rotateY(0deg)';

  //     clearInterval(timer);
  //   });
  // }, [timer]);

  switch (type) {
    case 'competitions':
    case 'teams':
      return (
        <li key={index} className="dataListItem">
          <div className="dataListInfo">
            {item.competition ? (
              <div className="competitionName">
                <h3>{item.competition.name}</h3>
              </div>
            ) : null}
            <div className="teamsBattle">
              <div className="awayTeam">
                <h4>Away team</h4>
                <h2>{item.awayTeam.name}</h2>
              </div>
              <h2>vs</h2>
              <div className="homeTeam">
                <h4>Home team</h4>
                <h2>{item.homeTeam.name}</h2>
              </div>
            </div>
            <div className="timeAndAreaEvent">
              <div className="time">
                <div className="utcDate">
                  <h2>{item.utcDate.replace(/-/g, '.').match(/\d\d\d\d.\d\d.\d\d/)}</h2>
                </div>
              </div>
              {item.competition ? (
                <div className="area">
                  <h2>{type === 'teams' ? item.competition.area.name : null}</h2>
                </div>
              ) : null}
            </div>
          </div>
        </li>
      );

    case 'search':
      return (
        <li key={index} className="dataListItem">
          <NavLink
            className="dataListItemLink"
            id={`dataListItem${index}`}
            to={`/${document.location.pathname.match(/\w+/)[0]}/id=${item.id}`}
          >
            {/* <div className="dataListInfo"> */}
            <div id="dataListItemEmblem" className="dataListItemEmblem">
              {item.emblemUrl ? (
                <>
                  {/* <img id={`imgFirst${index}`} className="imgFirst" alt="emblemUrl" src={item.emblemUrl} /> */}
                  <img id={`imgSecond${index}`} className="imgSecond" alt="emblemUrl" src={item.emblemUrl} />
                </>
              ) : null}
              {item.crestUrl ? (
                <>
                  {/* <img id={`imgFirst${index}`} className="imgFirst" alt="crestUrl" src={item.crestUrl} /> */}
                  <img id={`imgSecond${index}`} className="imgSecond" alt="crestUrl" src={item.crestUrl} />
                </>
              ) : null}
            </div>
            <div className="dataListItemText">
              <div className="dataListItemName">
                <h3>{item.name}</h3>
              </div>
              <div className="dataListItemDetails">
                {item.currentSeason ? (
                  <div className="dataListItemCurrentSeason">
                    <h2>{`${item.currentSeason.startDate.replace(/-/g, '.')} - ${item.currentSeason.endDate.replace(
                      /-/g,
                      '.'
                    )}`}</h2>
                  </div>
                ) : null}
                <div className="dataListItemArea">
                  <h2>{item.area.name}</h2>
                </div>
              </div>
            </div>
            {/* </div> */}
          </NavLink>
          {/* <NavLink
            className="dataListHover"
            id={`dataListItem${index}`}
            to={`/${document.location.pathname.match(/\w+/)[0]}/id=${item.id}`}
          ></NavLink> */}
        </li>
      );
    default:
      return null;
  }
};

export default DataListItem;
