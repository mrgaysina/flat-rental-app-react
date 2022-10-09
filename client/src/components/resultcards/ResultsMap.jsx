import React from 'react';
import './yaMap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';


export const ResultsMap = ({ point }) => {
  return (
    <YMaps>
        <Map
          className="resultMap"
          defaultState={{
            center: point[0],
            zoom: 12,
          }}
        >
          {point.map((el) => (
            <Placemark geometry={el} />
          ))}
        </Map>
    </YMaps>
  );
};
