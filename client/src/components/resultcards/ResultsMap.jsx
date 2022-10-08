import React from 'react'
import "./yaMap.css"
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark, Clusterer } from "@pbe/react-yandex-maps";

export const ResultsMap = ({point}) => {

  // const [metka, setMetka] = useState([])

    console.log('point[0]',point[0]);
    // const placemarks = point.map((el) => {
    //   return new YMaps.Placemark(el, {
    //     iconContent: '1',
    //     balloonContent: 'Балун',
    //     hintContent: 'Стандартный значок метки'
    //   })
    // })
    // setMetka(placemarks)


  return (
    <YMaps >
    <Map className='resultMap' defaultState={{
    center: point[0],
    zoom: 12
  }}>
    {point.map((el) => (
      <Placemark geometry={el} />
    ))}
    </Map>
  </YMaps>
  )
}