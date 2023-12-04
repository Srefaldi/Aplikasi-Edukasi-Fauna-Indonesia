import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './styles/Admin.css';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default AdminLayout;
