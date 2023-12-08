import React, { useState, useEffect } from 'react';
import hero from '../css/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState([]);

  const fetchLeaderboardData = async () => {
    try {
      const response = await fetch('http://localhost:5000/get-allleaderboard'); 
      const data = await response.json();
      setLeaderboardData(data);
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
        <th scope="row">{leader.rank}</th>
        <td>{leader.nama}</td>
        <td>{leader.score}</td>
      </tr>
    ));
  };

  return (
    <div>
     {/* Hero Section */}
     <div className="container-fluid px-0 overflow-hidden">
     <div className="row mx-0">
       <div className="col-lg-12 px-0">
         <img id="homeImage" className="img-fluid w-100" src={hero} alt="Foto Home"/>
       </div>
     </div>
   </div>
        {/* Leaderbard Section */}
    <div className="container mt-5 mb-5">
      <h2>Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Rank</th>
              <th scope="col">Player</th>
              <th scope="col">Score</th>
            </tr>
          </thead>
          <tbody>{renderLeaderboardRows()}</tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Leaderboard;
