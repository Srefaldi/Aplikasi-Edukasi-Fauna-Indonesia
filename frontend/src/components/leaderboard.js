import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/leaderboard/leaderboard.css';

const Leaderboard = () => {
  const [topScores, setTopScores] = useState([]);
  const [filterByPackage, setFilterByPackage] = useState('');

  const fetchLeaderboardData = async () => {
    try {
      const url = filterByPackage
        ? `http://localhost:5000/get-leaderboard-by-package/${filterByPackage}`
        : 'http://localhost:5000/get-allleaderboard';

      const response = await fetch(url);
      const data = await response.json();
      setTopScores(data);
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      setTopScores([]);
    }
  };

  const renderLeaderboardRows = (data) => {
    if (!Array.isArray(data)) {
      return null;
    }
  
    return data.map((leader, index) => (
      <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
        <td>{index + 1}</td>
        <td>{leader.nama}</td>
        <td>{leader.paket}</td>
        <td>{leader.score}</td>
      </tr>
    ));
  };

  const handlePackageFilterChange = (e) => {
    setFilterByPackage(e.target.value);
  };

  useEffect(() => {
    fetchLeaderboardData();
  }, [filterByPackage]);

  return (
    <div>
      {/* Leaderboard Section */}
      <div className="container mt-5 mb-5">
        <h1>Leaderboard</h1>

        {/* Dropdown to select the package */}
        <div className="filter-container">
          <label>Filter by Package:</label>
          <select
            value={filterByPackage}
            onChange={handlePackageFilterChange}
          >
            <option value="">All</option>
            <option value="Kalimantan">Kalimantan</option>
            <option value="Sulawesi">Sulawesi</option>
            <option value="Sumatera">Sumatera</option>
            <option value="Jawa">Jawa</option>
            <option value="Papua">Papua</option>
            <option value="Nusantara">Nusantara</option>
          </select>
        </div>

        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Nama</th>
                <th scope="col">Paket</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            {renderLeaderboardRows(topScores)}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
