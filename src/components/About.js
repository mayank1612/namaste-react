import React from 'react';
import { Outlet } from 'react-router-dom';
import ProfileClass from './ProfileClass';

function About() {
  return (
    <div>
      About
      <Outlet />
      <ProfileClass />
    </div>
  );
}

export default About;
