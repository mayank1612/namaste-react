import React from 'react';
import { Outlet } from 'react-router-dom';
import UserContext from '../utils/userContext';
import ProfileClass from './ProfileClass';

function About2() {
  return (
    <div>
      About
      <Outlet />
      <ProfileClass />
    </div>
  );
}

class About extends React.Component {
  constructor() {
    super();
    // console.log('Parent constructor');
  }
  componentDidMount() {
    // console.log('Parent componentDidMount');
  }
  render() {
    // console.log('Parent render');
    return (
      <div>
        About
        <UserContext.Consumer>
          {({ user }) => (
            <div className="font-bold">User context : {user.name}</div>
          )}
        </UserContext.Consumer>
        <Outlet />
        <ProfileClass name="Child 1" />
        {/* <ProfileClass name="Child 2" /> */}
      </div>
    );
  }
}

export default About;

/**
 * Parent constructor
   Parent render
    Child constructorChild 1
    Child renderChild 1
    Child constructorChild 2
    Child renderChild 2
    -- Commit phase
    -- React update DOM
    Child componentDidMountChild 1
    Child componentDidMountChild 2
   Parent componentDidMount 
 */
