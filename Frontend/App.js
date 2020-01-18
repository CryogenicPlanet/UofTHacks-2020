import React, { Component } from 'react';
import { Alert, Text, View, Button, FlatList, StyleSheet } from 'react-native';
import styled from 'styled-components';
import { getHourlyWeatherData, getSixteenDayWeatherData, getClothData } from './utillity.js';

const options = {
    enableHighAccuracy: true,
    timeout: 20000, 
    maximumAge: 1000 
}

export default class App extends Component {
    state = {
        location: null
    }

    findCoordinate() {
        navigator.geolocation.getCurrentPosition(
			position => {
                const location = JSON.stringify(position);
                console.log(position);
				this.setState({ location });
			},
			error =>  {
                Alert.alert(error.message);
            },
            options
        )
    }

    componentDidMount() {
        // this.findCoordinate();
        console.log(getHourlyWeatherData())
           
    }
  
    render() {
        return (
            <Container>
                <TempContainer>
                    <TempText>12°C</TempText>
                </TempContainer>
                <View style={{height: 100, backgroundColor: 'grey', marginTop: 50}}>
                    <FlatList data={tempData} renderItem={({item}) => (
                            <WeatherButton color={'white'} onPress={()=>{}} title={item.title}>
                                <WeatherText>{item.temp}</WeatherText>
                            </WeatherButton>
                        )}
                        horizontal={true} contentContainerStyle={styles.DataList}>
                    </FlatList>
                </View>
            </Container>
        )

    }
}

const tempData = [
    {
        id: '1',
        title: '1:00am',
        temp: '12°C'
    },
    {
        id: '2',
        title: '2:00am',
        temp: '-12°C'
    },
    {
        id: '3',
        title: '3:00am',
        temp: '12°C'
    },
    {
        id: '4',
        title: '4:00am',
        temp: '11°C'
    },
    {
        id: '5',
        title: '5:00am',
        temp: '10°C'
    },
    {
        id: '6',
        title: '6:00am',
        temp: '7°C'
    },
]

const styles = StyleSheet.create({
    contentContainer: {
        display: "flex",
        alignSelf: 'center',
        flex: 1,
        // justifyContent: "space-around",
        // backgroundColor: 'grey',
        width: 100,
        height: 10,
        }
    });

const Container = styled.View`
    background-color: ${ props => props.color ? props.color : "white"};
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const TempContainer = styled.View`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 200px;
    height: 200px;
    border-radius: 100px;
`
const TempText = styled.Text`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 80px;
`
const WeatherButton = styled.Button`
    display: flex;
    height: 10px;
    width: 100px;
`
const WeatherText = styled.Text`
    color: white;
`