import React, { useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import {
  Container,
  MapContainer,
  Description,
  DescriptionTxt,
  BtnContainer,
  CloseBtn,
  IconClose,
} from "./Map.styled";

import Button from "../Button";

const YOUR_API_KEY = "AIzaSyCIAZwoufnZ5-xDvMo-u3d5COgt3swj0MM";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 50.442,
  lng: 30.6182,
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  scrollwheel: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
  maxZoom: 16,
};

const Map = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: YOUR_API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const mapFullScreenToggle = () => {
    setIsFullScreen(!isFullScreen);
  };

  return isLoaded ? (
    <Container $isfullScreen={isFullScreen}>
      <MapContainer $isfullScreen={isFullScreen}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          onLoad={onLoad}
          onUnmount={onUnmount}
          options={defaultOptions}
        ></GoogleMap>
      </MapContainer>
      {isFullScreen && (
        <CloseBtn type="button" onClick={mapFullScreenToggle}>
          <IconClose />
        </CloseBtn>
      )}
      <Description $isfullScreen={isFullScreen}>
        <DescriptionTxt>м.Київ, вул. Соборності 12</DescriptionTxt>
        <DescriptionTxt>
          <span style={{ fontWeight: "500" }}>Робочі дні:</span> пн-пт
          09:00-18:00
        </DescriptionTxt>
        <DescriptionTxt>
          <span style={{ fontWeight: "500" }}>Вихідні:</span> сб-нд і святкові
          дні
        </DescriptionTxt>
        <DescriptionTxt>
          <span style={{ fontWeight: "500" }}>Телефон менеджера:</span>
          +380981194159
        </DescriptionTxt>
      </Description>
      <BtnContainer>
        <Button type="button" onClick={mapFullScreenToggle}>
          На карту
        </Button>
      </BtnContainer>
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(Map);
