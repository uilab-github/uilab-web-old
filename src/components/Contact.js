import GoogleMap from "react-google-map"
import GoogleMapLoader from "react-google-maps-loader"
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

const MY_API_KEY = 'AIzaSyCJW-HhyVcQze6OGT9wDrE0kyYCuv3wHg0';
const LAB_POSITION = {
  lat: 36.368071,
  lng: 127.365510,
};
const MAP_CENTER_POSITION = {
  lat: 36.368071,
  lng: 127.365510
};

class Contact extends Component {
  renderMap() {
    const { googleMaps } = this.props;
    return googleMaps ? (
      <GoogleMap
        googleMaps={googleMaps}
        coordinates={[
          {
            title: 'User & Information Lab.',
            position: LAB_POSITION
          }
        ]}
        center={MAP_CENTER_POSITION}
        zoom={15}
        onLoaded={(googleMaps, map) => {
          map.setMapTypeId(googleMaps.MapTypeId.ROADMAP)
        }}
      />
    ) : null;
  }

  render() {
    return (
      <div className="c-contact">
        <div className="c-contact__items">
          <dt className="c-contact__label">
            Tel.
          </dt>
        	<dd className="c-contact__content">
            +82 42 350 7749
          </dd>
        	<dt className="c-contact__label">
            Address
          </dt>
        	<dd className="c-contact__content">
        		U&I Lab., Room 4417, E3-1 Computer Science Building, <br />
  			    KAIST, 291 Daehak-ro, Yuseong-gu, Daejeon 34141, South Korea
    		  </dd>
      		<dt className="c-contact__label">
            Map
          </dt>
      		<dd className="c-contact__content">
            <div className="c-contact__map">
              {this.renderMap()}
            </div>
      		</dd>
        </div>
      </div>
    );
  }
}

export default GoogleMapLoader(Contact, {
  libraries: ['places'],
  key: MY_API_KEY,
  region: 'KR',
  language: 'en'
})
