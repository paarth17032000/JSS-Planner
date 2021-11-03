import React, {useState, useEffect} from 'react'
import {Redirect} from 'react-router-dom'

const Authenticated = ({ children }) => {
  const [token, setToken] = useState(null)

  useEffect(() => {
      const userToken = localStorage.getItem('accessToken')
      setToken(userToken)
  }, [])

  if (token === null) {
    return <Redirect to='/' />;
  }

  return <>{children}</>;
};

export default Authenticated;
