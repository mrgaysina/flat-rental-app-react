import React from 'react';
import { Navigate } from 'react-router-dom'


const Content = ({user}) => {

  // Could have something here to check for the time when the accesstoken expires

  if (!user.accesstoken) return <Navigate to='/login'/>
  return <div>This is the content.</div>;
}

export default Content;