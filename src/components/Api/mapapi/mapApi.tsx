import React, { useEffect } from 'react';
import './mapApi.scss';
declare global {
  interface Window {
    kakao: any;
  }
}

function mapApi() {
  const container = document.getElementById('map');
  const options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 3,
  };
  useEffect(() => {
    const map = new window.kakao.maps.Map(container, options);
    map();
    return () => {};
  }, []);
  return (
    <div>
      <div id="map" className="map-api-style"></div>
    </div>
  );
}

export default mapApi;
