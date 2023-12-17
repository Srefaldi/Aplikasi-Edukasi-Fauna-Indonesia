import React, { useState, useEffect } from 'react';
import hero from '../css/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg';
import '../css/leaderboard/style.css';
const Leaderboard = () => {
  const [topScores, setTopScores] = useState([]);
  const [filterByPackage, setFilterByPackage] = useState('');

  const fetchLeaderboardData = async () => {
    try {
      const url = filterByPackage
        ? `${process.env.API_ENDPOINT}/get-leaderboard-by-package/${filterByPackage}`
        : `${process.env.API_ENDPOINT}/get-allleaderboard`;

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
      <tr className={window.innerWidth <= 767 ? 'baris2' : 'baris'} key={index}>
        <th scope="row">{index + 1}</th>
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
        <h1 style={{ 
            fontSize: '40px',
            marginBottom: '20px',
            color: '#112546',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            letterSpacing: '1px',
            lineHeight: '1.4',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            fontWeight: 'bold',
            textAlign: 'center'
          }}>Leaderboard</h1>

        {/* Dropdown to select the package */}
        <div className="filter-container">
          <label style={{ marginRight: '10px',
                          fontSize: '16px',
                          color: '#112546',
                          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                          letterSpacing: '1px',
                          lineHeight: '1.4',
                          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                          fontWeight: 'bold', }}>Cari Berdasarkan :</label>
          <select
            value={filterByPackage}
            onChange={handlePackageFilterChange}
            style={{
              backgroundColor: '#112546',
              color: 'white',
              fontSize: '16px',
              padding: '12px 18px',
              borderRadius: '4px',
              border: '1px solid #ccc',
              marginRight: '10px',
            }}
          >
            <option value="" >All</option>
            <option value="Kalimantan">Kalimantan</option>
            <option value="Sulawesi">Sulawesi</option>
            <option value="Sumatera">Sumatera</option>
            <option value="Jawa">Jawa</option>
            <option value="Papua">Papua</option>
            <option value="Nusantara">Nusantara</option>
          </select>
        </div>

        <div className="table-responsive mt-5">
          <table className="table table-striped">
            <thead>
              <tr className='baris'>
                <th scope="col">Rank</th>
                <th scope="col">Nama</th>
                <th scope="col">Paket</th>
                <th scope="col">Score</th>
              </tr>
            </thead>
            <tbody>{renderLeaderboardRows(topScores)}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
