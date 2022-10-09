import React from 'react';
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux';


const Content = () => {
const user = useSelector((store) => store.toolkit.user)
  console.log('user from content', user);

  // Could have something here to check for the time when the accesstoken expires

  if (!user.accesstoken) return <Navigate to='/login'/>
  return <div>This is the content.</div>;
}

export default Content;