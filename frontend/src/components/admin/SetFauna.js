import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import './styles/Admin.css';
import './styles/set-fauna-responsive.css';
import Sidebar from './Sidebar';

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
  const [editId, setEditId] = useState(null);

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
    setEditId(null);
  };

  const openEditModal = (id) => {
    const faunaToEdit = faunaListItem.find((fauna) => fauna.id === id);

    setEditId(id);
    setFormData({
      name: faunaToEdit.name,
      kategori_1: faunaToEdit.kategori_1,
      kategori_2: faunaToEdit.kategori_2,
      description: faunaToEdit.description,
      desc_habitat: faunaToEdit.desc_habitat,
      desc_populasi: faunaToEdit.desc_populasi,
    });

    setIsModalOpen(true);
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

  const handleEditFauna = async () => {
    try {
      const formDataWithImage = new FormData();
      formDataWithImage.append('file', imageFile);
      formDataWithImage.append('name', formData.name);
      formDataWithImage.append('kategori_1', formData.kategori_1);
      formDataWithImage.append('kategori_2', formData.kategori_2);
      formDataWithImage.append('description', formData.description);
      formDataWithImage.append('desc_habitat', formData.desc_habitat);
      formDataWithImage.append('desc_populasi', formData.desc_populasi);

      await axios.put(`http://localhost:5000/edit-fauna/${editId}`, formDataWithImage);

      fetchData();
      closeModal();
    } catch (error) {
      console.error('Error editing fauna:', error);
    }
  };

  const handleDeleteFauna = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/delete-fauna/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting fauna:', error);
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
  const truncatedDescription = (description) => description.substring(0, 50);
  return (
    <>
      <Sidebar />
      <div className="setfauna-container mt-5 content">
  <h1 className="left">Data Fauna</h1>
  <hr style={{ border: '1px solid black', marginBottom: '20px' }} />
  <div className="d-flex justify-content-between align-items-center mb-3">
  <div className="d-flex flex-column">
    <div className="btn btn-primary mb-2" onClick={openModal}>
      Tambah Fauna
    </div>
    {/* <div className="btn btn-success mb-2 cetak-fauna">Cetak</div> */}
    <div className="d-flex flex-column">
    <input type="text" placeholder="Cari Fauna..." className="form-control" />    <div className="btn btn-primary cari">Cari</div>
  </div>
  </div>
  
</div>



        
        {/* Modal for adding new fauna */}
        {isModalOpen && (
          <div className="modal">
           <div className="modal-content open" style={{ marginTop: '35px', width: '50%' }}>
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
                <button className='btn-modal' type="submit" onClick={editId ? handleEditFauna : handleAddFauna}>
                  {editId ? 'Simpan Edit' : 'Simpan'}
                </button>
              </form>
            </div>
          </div>
        )}

        <table className="table">
          <thead>
            <tr className="bg-primary text-white">
              <th>No</th>
              <th>Gambar</th>
              <th>Nama</th>
              <th>Deskripsi</th>
              <th>kategori 1</th>
              <th>kategori 2</th>
              <th>Deskripsi Habitat</th>
              <th>Deskripsi populasi</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {faunaListItem.map((fauna, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={fauna.image_url}
                    alt={`Gambar ${fauna.name}`}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                </td>
                <td>{fauna.name}</td>
                <td>{truncatedDescription(fauna.description)}...</td>
                <td>{fauna.kategori_1}</td>
                <td>{fauna.kategori_2}</td>
                <td>{fauna.desc_habitat}</td>
                <td>{fauna.desc_populasi}</td>
                <td className="text-center">
                  <div className="btn btn-info mr-3" onClick={() => openEditModal(fauna.id)}>
                    Edit
                  </div>
                  <div className="btn btn-danger" onClick={() => handleDeleteFauna(fauna.id)}>
                    Hapus
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SetFauna;