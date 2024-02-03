import React from 'react';
import Posts from './posts';
import { Route, Routes } from 'react-router';
import NewPost from './newpost';
import Header from './header';

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/posts" element={<Posts></Posts>} />
        <Route path="/" element={<Posts></Posts>} />
        <Route path="/new-post" element={<NewPost></NewPost>} />
      </Routes>
    </div>
  );
};

export default Dashboard;
