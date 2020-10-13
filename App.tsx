import MapboxGL, {SymbolLayerStyle} from '@react-native-mapbox-gl/maps';
import React from 'react';
import {Dimensions, StyleProp, StyleSheet} from 'react-native';

const MAPBOX_TOKEN = '';
const MAPBOX_STYLE = '';
const CHARGETRIP_CLIENT_ID = '';

MapboxGL.setAccessToken(MAPBOX_TOKEN);
MapboxGL.addCustomHeader('x-client-id', CHARGETRIP_CLIENT_ID);

const App = () => {
  return (
    <MapboxGL.MapView styleURL={MAPBOX_STYLE} style={styles.map}>
      <MapboxGL.Camera
        defaultSettings={{
          centerCoordinate: [5, 45],
          zoomLevel: 4,
        }}
      />
      <MapboxGL.VectorSource
        /**
           tileUrlTemplates accepts an array of custom tile endpoints. In the case of Chargetrip the endpoint is https://api.chargetrip.io/station/{z}/{x}/{y}/tile.mvt
           In this example we use a filter query to request stations of all powers with the connector types CHADEMO and IEC_62196_T2_COMBO.
           Learn more about fiter queries in our documentation: https://docs.chargetrip.com/#tile-service
           */
        tileUrlTemplates={[
          'https://api.chargetrip.io/station/{z}/{x}/{y}/tile.mvt?powers=all&connectors[]=CHADEMO&connectors[]=IEC_62196_T2_COMBO',
        ]}
        id="stationTileSource">
        {/* Add a symbol layer for all clusters */}
        <MapboxGL.SymbolLayer
          id="clusteredPoints"
          sourceLayerID="stations"
          filter={['!=', ['get', 'count'], 1]}
          style={mapStyles.clusteredPoints}
        />
        {/* Add a symbol layer for individual stations */}
        <MapboxGL.SymbolLayer
          filter={['all', ['==', ['get', 'count'], 1]]}
          id="stations"
          sourceLayerID="stations"
          style={mapStyles.pinIcon}
        />
      </MapboxGL.VectorSource>
    </MapboxGL.MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
});

const mapStyles: {
  pinIcon: StyleProp<SymbolLayerStyle>;
  clusteredPoints: StyleProp<SymbolLayerStyle>;
} = {
  pinIcon: {
    iconImage: ['concat', ['get', 'status'], '-', ['get', 'speed']],
    iconSize: 0.9,
    iconOffset: [0, -16],
  },
  clusteredPoints: {
    iconImage: 'cluster',
    textField: '{count}',
    textSize: 12,
    textColor: '#fff',
    iconAllowOverlap: true,
    textAllowOverlap: true,
    textOffset: [0, -1.5],
    iconSize: 0.9,
    iconOffset: [0, -16],
  },
};

export default App;
