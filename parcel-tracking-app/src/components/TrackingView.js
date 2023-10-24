import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrackingView() {
  const [trackingInfo, setTrackingInfo] = useState({});
  const [trackingNumber, setTrackingNumber] = useState('');

  // Function to fetch tracking information
  const fetchTrackingInformation = async () => {
    try {
        const response = await axios.get(`http://localhost:3000/Tracking_Parcel?Tracking_number=${trackingNumber}`);
        setTrackingInfo(response.data);
    } catch (error) {
      console.error('Error fetching tracking information:', error);
    }
  };

  useEffect(() => {
    // Initially fetch the tracking information when the component mounts
    fetchTrackingInformation();
  }, []);

  return (
    <div>
      <h2>Tracking View</h2>
      <input
        type="text"
        placeholder="Enter Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
      />
      <button onClick={fetchTrackingInformation}>Fetch Tracking Info</button>
      <div>
        <h3>Tracking Information:</h3>
        <pre>{JSON.stringify(trackingInfo, null, 2)}</pre>
      </div>
    </div>
  );
}

export default TrackingView;
