import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default class StarMapScreen extends Component {
    
    render() {
        const { longitude,latitude}=this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=-74.0817500&latitude=4.6097100&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>¡Pantalla de mapa estelar!</Text>
                <TextInput
                style={{height:40, borderColor: 'gray', borderWidth:1}}
                placeholder="ingresa la latitud"
                placeholderTextColor="#ffff#000000"
                onChangeText={(text)=>{
                    this.setState({
                        latitude: text
                    })
                }}
                />
                <WebView>
                    scalesPageToFit={true}
                    source={{ uri: path }}
                    style={{ marginTop: 20, marginBottom:20,}}
                </WebView>
                
                
            </View>
        
        )
    }
}