import UrlParser from '../../routes/url-route';
import createFaunaDetailTemplate from '../templates/detail-page-template';

const DetailPage = {
    async fetchFaunaData() {
        try {
          const response = await fetch('/data/data-fauna.json');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const faunaData = await response.json();
          console.log(faunaData); // Tambahkan log untuk memeriksa hasil fetch
          return faunaData.faunaData;
        } catch (error) {
          console.error('Error fetching fauna data:', error);
          return [];
        }
      },
      

      async render() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        console.log('URL:', url); // Tambahkan log untuk memeriksa nilai URL
        const faunaId = url.id;
        console.log('faunaId:', faunaId); // Tambahkan log untuk memeriksa nilai faunaId
        
        const faunaData = await this.fetchFaunaData(); // Fetch fauna data
      
        // Perubahan pada bagian ini:
        const faunaDetail = faunaData.find(item => item.nama.toLowerCase() === faunaId.toLowerCase());
      
        if (!faunaDetail) {
          return '<p>Detail not found</p>';
        }
      
        const faunaDetailTemplate = createFaunaDetailTemplate(faunaDetail);
      
        return `
          <div class="container">
            ${faunaDetailTemplate}
          </div>
        `;
      },
      
      
      

  async afterRender() {
    // Any additional logic after rendering
  },
};

export default DetailPage;
