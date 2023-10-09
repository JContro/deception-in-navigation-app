"use client";

import React, { useRef, useState, useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import "ol/ol.css"; // Import OpenLayers CSS

const MapComponent = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapOptions = {
      view: new View({
        center: [0, 0],
        zoom: 0,
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    };

    const newMap = new Map(mapOptions);
    newMap.setTarget(mapContainer.current);
    setMap(newMap);

    // Clean up the map when the component unmounts
    return () => {
      newMap.setTarget(null);
      newMap.dispose();
    };
  }, []);

  if (!map) {
    return <div>Loading map...</div>;
  }

  return (
    <div className="map-container" ref={mapContainer} style={{ width: "100%", height: "400px" }}>
    </div>
  );
};

export default MapComponent;
