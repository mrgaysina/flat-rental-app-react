import React from 'react'
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from "react-yandex-maps";

export const YaMap = () => {
     
  return (
    
    <YMaps   width = '500px' height = '500px'>
    <Map defaultState={{
    center: [55.751574, 37.573856],
    zoom: 12
  }}>
      <Placemark defaultGeometry={[55.751574, 37.573856]} />
    </Map>
  </YMaps>

    
  )
}
