import React from 'react'
import "./yaMap.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const ResultsMap = ({point}) => {

    console.log(point[0]);

  return (
    <YMaps >
    <Map className='yaMap' defaultState={{
    center: point[0],
    zoom: 12
  }}>
    {point.map((el) => {
      <Placemark defaultGeometry={el} />
    })}
    </Map>
  </YMaps>
  )
}