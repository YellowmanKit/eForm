import React from 'react';
import { View } from 'react-native';
import UI from 'src/component/main/ui/UI';
import MapView from 'react-native-maps';
import { Marker} from 'react-native-maps';

export default class Map extends UI {

  render(){
    this.init(this.props);
    const markers = this.props.markers;
    const region = this.markerToRegion(markers[0]);
    const caption = this.props.caption;
    return(
      <MapView style={this.scale(0.67,0.25)} region={region} onRegionChange={()=>{}}>
        {markers.map((marker, i)=>{
          <Marker
          key={caption + i}
          coordinate={this.markerToRegion(marker)}
          title={caption}
          description={caption}/>
        })}
      </MapView>
    )
  }

  markerToRegion(marker){ return {
    latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude),
    latitudeDelta: 0.003, longitudeDelta: 0 } }

}
