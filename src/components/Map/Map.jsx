import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Container, Description, DescriptionTxt } from "./Map.styled";

const YOUR_API_KEY = "AIzaSyCIAZwoufnZ5-xDvMo-u3d5COgt3swj0MM";

const containerStyle = {
  width: "100%",
  height: "221px",
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
  minZoomLevel: 15,
};

const Map = () => {
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

  return isLoaded ? (
    <Container>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        // region={{
        //   latitude: route.params.item.location.latitude,
        //   longitude: route.params.item.location.longitude,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
        minZoomLevel={15}
      >
        <></>
      </GoogleMap>
      <Description>
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
    </Container>
  ) : (
    <></>
  );
};

export default React.memo(Map);
