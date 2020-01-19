import React, { Component } from 'react';
import { Alert, Text, View, TouchableOpacity, SectionList, StyleSheet, StatusBar } from 'react-native';
import styled from 'styled-components';
import SwipeUpDown from 'react-native-swipe-up-down-fix';
import { Ionicons } from '@expo/vector-icons';
import { getCurrentWeatherData, getSixteenDayWeatherData, getClothData } from './utillity.js';

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
        console.log(getCurrentWeatherData())
           
    }
  
    render() {
        return (
            <Container>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <LocText>Toronto, ON</LocText>
                <TempContainer>
                    <TempText>-12</TempText>
                    <Text style={{fontSize: 30, color: 'white', marginTop: 35}}>°C</Text>
                </TempContainer>
                <ConditionContainer>
                    <Ionicons name="ios-snow" style={{marginTop: 5}} size={32} color='white' />
                    <Text style={{fontSize: 36, color: 'white', marginLeft: 10}}>Snowy</Text>
                </ConditionContainer>
                <InfoContainer>
                    <InfoPanel>
                        <Ionicons name="ios-water" size={32} color='white' />
                        <InfoText>80%</InfoText>
                    </InfoPanel>
                    <InfoPanel>
                        <Ionicons name="ios-thermometer" size={32} color='white' />
                        <InfoText>-15°C</InfoText>
                    </InfoPanel>
                    <InfoPanel>
                        <Ionicons name="ios-cloud-outline" size={32} color='white' />
                        <InfoText>12km/h</InfoText>
                    </InfoPanel>
                </InfoContainer>
                <View style={{height: 200, alignItems: 'center', marginTop: 10, alignSelf: 'stretch'}}>
                    <SectionList contentContainerStyle={styles.DataList} sections={tempData}
                        keyExtractor={(item, index) => index.toString()} scrollEnabled={false}
                        renderItem={({item}) => (
                            <WeatherButton color={'white'} onPress={()=>{}}>
                                {/* Icon */}
                                <View style={{}}>
                                    <WeatherText>{item.day}</WeatherText>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <WeatherText>{item.high}</WeatherText>
                                    <WeatherText marginLeft={'20px'} color="grey">{item.low}</WeatherText>
                                </View>
                            </WeatherButton>
                        )}>
                    </SectionList>
                </View>
                {/* <SwipeUpDown style={{ backgroundColor: 'green' }}>
                </SwipeUpDown> */}
            </Container>
        )

    }
}

const tempData = [
    {
        key: '1',
        title: 'Sunday',
        data: [
            {day: 'Sunday', high: '-12°C', low: '-13°C'}
        ]
    },
    {
        key: '2',
        title: 'Monday',
        data: [
            {day: 'Monday', high: '12°C', low: '1°C'}
        ]
    },
    {
        key: '3',
        title: 'Tuesday',
        data: [
            {day: 'Tuesday', high: '12°C', low: '1°C'}
        ]
    },
    {
        key: '4',
        title: 'Wednesday',
        data: [
            {day: 'Wednesday', high: '12°C', low: '1°C'}
        ]
    },
    {
        key: '5',
        title: 'Thursday',
        data: [
            {day: 'Thursday', high: '12°C', low: '1°C'}
        ]
    },
    {
        key: '6',
        title: 'Friday',
        data: [
            {day: 'Friday', high: '12°C', low: '1°C'}
        ]
    },
    {
        key: '7',
        title: 'Saturday',
        data: [
            {day: 'Saturday', high: '12°C', low: '1°C'}
        ]
    },
]

const styles = StyleSheet.create({
    DataList: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 10,
        width: 350,
        }
    }); 

const Container = styled.View`
    background-color: #0066ff;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const LocText = styled.Text`
    display: flex;
    color: white;
    font-size: 20px;
`
const TempContainer = styled.View`
    display: flex;
    align-items: center;
    flexDirection: row;
`
const TempText = styled.Text`
    display: flex;
    color: white;
    font-size: 80px;
`
const ConditionContainer = styled.View`
    display: flex;
    flex-direction: row;
`
const InfoContainer = styled.View`
    display: flex;
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
    justify-content: space-evenly;
`
const InfoPanel = styled.View`
    display: flex;
    align-items: center;
`
const InfoText = styled.Text`
    color: white;
`
const WeatherButton = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 3px
`
const WeatherText = styled.Text`
    color: ${ props => props.color ? props.color : "white"};
    font-size: 22px;
    display: flex;
    margin-left: ${ props => props.marginLeft ? props.marginLeft: '0px'};
`