import React, { useState, useEffect } from 'react';
import hero from '../css/landing-page/img/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('/data/data-leaderboard.json');
      const data = await response.json();
      setLeaderboardData(data.DataLeaderboard);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      setLeaderboardData([]);
    }
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, []);

  const renderLeaderboardRows = () => {
    return leaderboardData.map((leader, index) => (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td>{leader.name}</td>
        <td>{leader.score}</td>
        <td>{leader.time}</td>
      </tr>
    ));
  };
  const imgContainer = {
    width: '100vw',
};
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid px-0">
                <div className="row mx-0">
                    <div className="col-lg-12 px-0">
                        <img id="homeImage" className="img-fluid" src={hero} alt="Foto Home" style={imgContainer} />
                    </div>
                </div>
            </div>

      {/* Section Leaderboard */}
      <div className="container mt-5 mb-5">
        <h2>Leaderboard</h2>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>{renderLeaderboardRows()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Leaderboard;
