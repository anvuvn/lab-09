import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/new-post">New Posts</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
