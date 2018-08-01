import React from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { typography } from 'material-ui/styles';
class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }

  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }
  render() {
    const style = {
      width: '50vw',
      height: '75vh',
      'marginLeft': 'auto',
      'marginRight': 'auto'
    }
    return (
      <Map
        item
        xs = { 12 }
        style = { style }
        google = { this.props.google }
        onClick = { this.onMapClick }
        zoom = { 14 }
        initialCenter = {{ lat: 43.228708, lng: 0.071187 }}
      >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Coeur de la Bigorre' }
          position = {{ lat: 43.228708, lng: 0.071187 }}
          name = { 'Coeur de la Bigorre' }
        />

        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Coeur de la Bigorre' }
          position = {{ lat: 43.198708, lng: 0.101187 }}
          name = { 'Coeur de la Bigorre' }
        />

        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
          <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
    api: (process.env.AIzaSyAkRDGK_vH12vgVMjMFugVTjFcxeLAHy8M)
})(GoogleMapsContainer)