import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

export const YaMap = ({x,y}) => {

  return (
    <YMaps   width = '500px' height = '500px'>
    <Map defaultState={{
    center: [x, y],
    zoom: 12
  }}>
      <Placemark defaultGeometry={[x, y]} />
    </Map>
  </YMaps>
  )
}
