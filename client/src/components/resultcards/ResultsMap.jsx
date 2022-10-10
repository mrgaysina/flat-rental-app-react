import React from 'react';
import './yaMap.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark, Balloon } from '@pbe/react-yandex-maps';
import { useSelector } from 'react-redux';


export const ResultsMap = () => {
   
  const coor = useSelector((store) => store.toolkit.coordinates)

  const points = useSelector((store) => store.toolkit.points)

  console.log('points', points, coor);
 
  return (
    <YMaps>
        <Map
          className="resultMap"
          defaultState={{
            center: points[0].coordinates.split(', '),
            zoom: 12,
          }}
        >
          {
        points.map((point) => (
          <Placemark
            geometry={point.coordinates.split(', ')}
            properties={{iconContent: point.costPerNight}}
            options={{preset:'islands#blackStretchyIcon'}}
           />
          ))}
        </Map>
    </YMaps>
  );
};
