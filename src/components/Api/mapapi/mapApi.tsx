import React, { ReactElement, useEffect } from 'react';
import './mapApi.scss';
require('dotenv').config();

declare global {
  interface Window {
    kakao: any;
  }
}

const mapApi = (): ReactElement => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    new window.kakao.maps.Map(container, options);
  });
  return <div id="map" className="map-api-style"></div>;
};

export default mapApi;
