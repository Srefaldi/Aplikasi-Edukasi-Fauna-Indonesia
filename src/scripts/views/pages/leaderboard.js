const Leaderboard = {
  imagePaths: [
    '/images/home/rishabh-pandoh-klpWbwujpUg-unsplash.jpg'
  ],

  async fetchLeaderboardData() {
    try {
      const response = await fetch('/data/data-leaderboard.json'); 
      const leaderboardData = await response.json();
      return leaderboardData.DataLeaderboard;
    } catch (error) {
      console.error('Error fetching leaderboard data:', error);
      return [];
    }
  },

  async render() {
    const leaderboardData = await this.fetchLeaderboardData();

    const leaderboardRows = leaderboardData.map((leader, index) => `
      <tr>
        <th scope="row">${index + 1}</th>
        <td>${leader.name}</td>
        <td>${leader.score}</td>
        <td>${leader.time}</td>
      </tr>
    `).join('');

    return `
    <!-- Hero Section -->

    <div class="container-fluid px-0"> 
        <div class="row mx-0"> 
          <div class="col-lg-12 px-0"> 
            <img id="homeImage" class="img-fluid" src="${this.imagePaths[0]}" alt="Foto Home" style="width: 100vw;">
          </div>
        </div>
      </div>

      <!-- Section Leaderboard -->
      <div class="container mt-5 mb-5">
        <h2>Leaderboard</h2>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Rank</th>
                <th scope="col">Player</th>
                <th scope="col">Score</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              ${leaderboardRows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Leaderboard;
