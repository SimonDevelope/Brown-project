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
      center: new window.kakao.maps.LatLng(37.56837079623827, 126.98866373015571),
      level: 3,
    };
    const map = new window.kakao.maps.Map(container, options);

    //지도 컨트롤러
    const mapTypeControl = new window.kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT);
    const zoomControl = new window.kakao.maps.ZoomControl();
    map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

    const marker = new window.kakao.maps.Marker({
      position: map.getCenter(),
    });
    marker.setMap(map);

    //지도 클릭 이벤트
    window.kakao.maps.event.addListener(map, 'click', function (mouseEvent: any) {
      const latlng = mouseEvent.latLng;
      marker.setPosition(latlng);
    });
  });

  return <div id="map" className="map-api-style"></div>;
};

export default mapApi;
