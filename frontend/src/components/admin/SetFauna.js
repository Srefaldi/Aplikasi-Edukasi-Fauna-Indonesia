import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './styles/Admin.css';

const SetFauna = () => {
  const [token, setToken] = useState('');
  const [expire, setExpire] = useState('');
  const navigate = useNavigate();
  const [faunaListItem, setFaunaList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    kategori_1: '',
    kategori_2: '',
    description: '',
    desc_habitat: '',
    desc_populasi: '',
    // Add other form fields here
  });
  const [imageFile, setImageFile] = useState(null);

  const openModal = () => {
    console.log('Opening modal');
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form data when the modal is closed
    setFormData({
      name: '',
      kategori_1: '',
      kategori_2: '',
      description: '',
      desc_habitat: '',
      desc_populasi: '',
      // Reset other form fields here
    });
    setImageFile(null);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleAddFauna = async () => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('file', imageFile);
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('kategori_1', formData.kategori_1);
      formDataWithImage.append('kategori_2', formData.kategori_2);
      formDataWithImage.append('description', formData.description);
      formDataWithImage.append('desc_habitat', formData.desc_habitat);
      formDataWithImage.append('desc_populasi', formData.desc_populasi);

      // Send the new fauna data to the server
      await axios.post('http://localhost:5000/add-fauna', formDataWithImage);
      
      // After adding the fauna, you may want to refetch the data:
      fetchData();
      // Close the modal
      closeModal();
    } catch (error) {
      console.error('Error adding fauna:', error);
    }
  };


  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-allfauna');
      setFaunaList(response.data);
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwtDecode(response.data.accessToken);
      setExpire(decoded.exp);
    } catch (error) {
      if (error.response) {
        navigate('/login');
      }
    }
  };

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get('http://localhost:5000/token');
        config.headers.Authorization = `Bearer ${response.data.accessToken}`;
        setToken(response.data.accessToken);
        const decoded = jwtDecode(response.data.accessToken);

        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  useEffect(() => {
    refreshToken();
    fetchData();
  }, []);

  const styles = {
    container: {
      marginTop: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    addButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '100px',
    },
    actionButtons: {
      display: 'flex',
      alignItems: 'center',
    },
    printButton: {
      backgroundColor: '#2ecc71',
      color: 'white',
      padding: '10px',
      marginLeft: '10px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    searchInput: {
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      marginRight: '10px',
      marginBottom: '20px',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
    },
    th: {
      backgroundColor: '#04AA6D',
      color: 'white',
      padding: '15px',
      textAlign: 'left',
      borderBottom: '1px solid #ddd',
    },
    td: {
      padding: '15px',
      borderBottom: '1px solid #ddd',
      textAlign: 'left',
    },
    actionButtonsCell: {
      textAlign: 'center',
      display: 'flex',
      justifyContent: 'center',
      gap: '5px',
    },
    editButton: {
      backgroundColor: '#3498db',
      color: 'white',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    deleteButton: {
      backgroundColor: '#e74c3c',
      color: 'white',
      padding: '8px',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    
    
  };

  return (
    <div style={styles.container}>
      <div style={styles.addButton} onClick={openModal}>
        Tambah Fauna
      </div>

      {/* Modal for adding new fauna */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <form onSubmit={(e) => e.preventDefault()}>
              <label>Nama Fauna:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <label>Kategori 1:</label>
              <input
                type="text"
                name="kategori_1"
                value={formData.kategori_1}
                onChange={handleInputChange}
              />
              <label>Kategori 2:</label>
              <input
                type="text"
                name="kategori_2"
                value={formData.kategori_2}
                onChange={handleInputChange}
              />
              <label>Deskripsi:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
              <label>Deskripsi Habitat:</label>
              <textarea
                name="desc_habitat"
                value={formData.desc_habitat}
                onChange={handleInputChange}
              />
              <label>Deskripsi Populasi:</label>
              <textarea
                name="desc_populasi"
                value={formData.desc_populasi}
                onChange={handleInputChange}
              />
              <label>Gambar:</label>
              <input type="file" onChange={handleFileChange} />
              {/* Add more input fields as needed */}
              <button type="submit" onClick={handleAddFauna}>
                Simpan
              </button>
            </form>
          </div>
        </div>
      )}

      <input type="text" placeholder="Cari Fauna..." style={styles.searchInput} />
      <table style={styles.table}>
        <thead>
          <tr style={styles.th}>
            <th>No</th>
            <th>Gambar</th>
            <th>Nama</th>
            <th>Deskripsi</th>
            <th>kategori 1</th>
            <th>kategori 2</th>
            <th>Deskripsi Habitat</th>
            <th>Deskripsi populasi</th>
            <th style={styles.actionButtonsCell}>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {faunaListItem.map((fauna, index) => (
            <tr key={index} style={styles.td}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={fauna.image_url}
                  alt={`Gambar ${fauna.name}`}
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                />
              </td>
              <td>{fauna.name}</td>
              <td>{fauna.description}</td>
              <td>{fauna.kategori_1}</td>
              <td>{fauna.kategori_2}</td>
              <td>{fauna.desc_habitat}</td>
              <td>{fauna.desc_populasi}</td>
              <td style={styles.actionButtonsCell}>
                <div style={styles.editButton}>Edit</div>
                <div style={styles.deleteButton}>Hapus</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SetFauna;
