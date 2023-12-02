import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default AdminLayout;
