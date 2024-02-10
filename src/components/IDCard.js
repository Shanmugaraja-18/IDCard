import React, { useState, useEffect } from 'react';

const IDCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?page=1&results=1&seed=abc');
      const data = await response.json();
      setUserData(data.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="id-card-holder">
      
      <div className="id-card-hook"></div>
      <div className="id-card">
        <div className="photo">
          {userData && <img src={userData.picture.large} alt="User" />}
        </div>
        <h2>{userData && `${userData.name.title}.${userData.name.first} ${userData.name.last}`}</h2>
        
        {userData && (
          <>
            <p className="info">AGE: {userData.dob.age}</p>
            <p className="info">CITY: {userData.location.city}</p>
            <p className="info">GENDER: {userData.gender}</p>
            <p className="info">EMAIL: {userData.email}</p>
            <p className="info">MOBILE: {userData.phone}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default IDCard;



