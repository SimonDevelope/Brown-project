import React, { ReactElement } from 'react';
import './mapofnear.scss';

const map = (): ReactElement => {
  return (
    <div className="map-total-view-port">
      <div className="map-subject-wrapper">
        <span className="map-subject-attr">🗺</span>
      </div>
      <div className="map-content-outter-wrapper"></div>
    </div>
  );
};

export default map;
