import React, { Component } from 'react';
import { ActivityIndicator, Alert, Text, View, TouchableOpacity, SectionList, StyleSheet, StatusBar, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components';
import BottomSheet from 'reanimated-bottom-sheet';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Ionicons } from '@expo/vector-icons';

import { getCurrentWeatherData, getSixteenDayWeatherData, getClothData } from './utillity.js';
import ItemSustain from './item-sustain.js';


const options = {
    enableHighAccuracy: true,
    timeout: 20000, 
    maximumAge: 1000 
}
// containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}


export default class App extends Component {
    state = {
        location: null,
        backgroundChange: true,
        isScreenShow: false,
        current: null,
        clothes: null
    }

    findCoordinate() {
        navigator.geolocation.getCurrentPosition(
			position => {
                const location = JSON.stringify(position);
				this.setState({ location });
			},
			error =>  {
                Alert.alert(error.message);
            },
            options
        )
    }

    async componentDidMount() {
        // this.findCoordinate();
        const clothes = await getClothData();
        const current = await getCurrentWeatherData();;

        await this.setState({
            clothes,
            current
        })
        return Promise.resolve();
    }

    async handleUpdate() {
        await this.setState({
            clothes: null,
            current: null
        })
        const clothes = await getClothData();
        const current = await getCurrentWeatherData();;

        await this.setState({
            clothes,
            current
        })
        return Promise.resolve();
    }
    
    renderInner() {
        if(!this.state.current)return <Text />
        const { temperature, humidity, feelslike, precip, wind_speed, wdesc } = this.state.current;
        return(
            this.state.current && 
            (<LinearGradient style={{width: '100%', height: '100%'}} colors={['#7C76AB', '#3b5998', '#192f6a']}>
                <BottomContainer>
                {/* <Text style={styles.panelTitle}>Weather</Text> */}
                <LocText>Toronto, ON</LocText>
                    <TempContainer>
                        <TempText>{temperature}</TempText>
                        <Text style={{fontSize: 30, color: 'white', marginTop: 35}}>°C</Text>
                    </TempContainer>
                    <ConditionContainer>
                        <Ionicons name="ios-partly-sunny" style={{marginTop: 5}} size={32} color='white' />
                        <Text style={{fontSize: 36, color: 'white', marginLeft: 10}}>{wdesc}</Text>
                    </ConditionContainer>
                    <InfoContainer>
                        <InfoPanel>
                            <Ionicons name="ios-water" size={32} color='white' />
                            <InfoText>{humidity}%</InfoText>
                        </InfoPanel>
                        <InfoPanel>
                            <Ionicons name="ios-thermometer" size={32} color='white' />
                            <InfoText>{feelslike}°C</InfoText>
                        </InfoPanel>
                        <InfoPanel>
                            <Ionicons name="ios-cloud-outline" size={32} color='white' />
                            <InfoText>{wind_speed}km/h</InfoText>
                        </InfoPanel>
                    </InfoContainer>
                    <View style={{height: 250, alignItems: 'center', marginTop: 10, alignSelf: 'stretch'}}>
                        <SectionList contentContainerStyle={styles.DataList} sections={tempData}
                            keyExtractor={(item, index) => index.toString()} scrollEnabled={false}
                            renderItem={({item}) => (
                                <WeatherButton color={'white'} onPress={()=>{}}>
                                    <View style={{flexDirection: 'row'}}>
                                        <Ionicons name={item.icon} style={{marginTop: 2, marginRight: 10}} size={24} color='white' />
                                        <WeatherText>{item.day}</WeatherText>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <WeatherText marginRight={item.marginRight}>{item.high}</WeatherText>
                                        <WeatherText marginLeft='20px' color="grey">{item.low}</WeatherText>
                                    </View>
                                </WeatherButton>
                            )}>
                        </SectionList>
                    </View>
                </BottomContainer>
            </LinearGradient>)
       )
    }
    
      renderHeader() {
        return(
            <View style={styles.header}>
                {this.state.current ?
                <View style={[styles.panelHeader], {backgroundColor: this.state.backgroundChange ? '#fff' : '#7C76AB'}}>
                    {
                        this.state.isScreenShow ? <Text></Text> : 
                            <View style={styles.panelHandle}>
                                <Ionicons name="ios-partly-sunny" style={{marginLeft: 20, marginHorizontal: 10, alignSelf: 'center'}} size={24} color='white' />
                                <Text style={{alignSelf: 'center', fontSize: 20, color: 'white'}}>{this.state.current.temperature}°C</Text>
                            </View> 
                    }
                </View>
                : <ActivityIndicator style={{alignSelf: 'flex-end', marginRight: 20}}/> }
            </View>
      )}

      renderItem ({item, index}) {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    }

    renderCarouselItem({ item, index }) {
        return(
            <View style={{ display: "flex", flexDirection:"column", justifyContent: "flex-start", alignItems:"center" }}>
                { item.type ? <>
                <Text style={{ marginTop: 40, fontSize: 24, fontWeight: "bold"}}>{item.type}</Text>
                <Image resizeMode={"contain"} style={{ width: 300, height: 300 }} source={{ uri: item.img }}/>
                </>: <Text></Text> }
            </View>
        )
    }

    // renderSustain() {
    //     return(
    //         <View>
                
    //         </View>
    //     )
    // }

    renderCarousel() {
        return(
            <Wrapper2>
                <UpdateButton onPress={this.handleUpdate.bind(this)}>

                </UpdateButton>
                { this.state.clothes ? 
                <Carousel 
                    data = { this.state.clothes }
                    renderItem={this.renderCarouselItem.bind(this)}
                    sliderWidth={400}
                    itemWidth={400}
                    slideStyle={{ width: 400 }}
                    onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    containerCustomStyle={{ flexGrow: 0 }}
                />
                : <ActivityIndicator style={{height: 372}} size='large'/>}
                {/* <Pagination 
                    dotsLength={3} 
                    activeDotIndex={1}
                    dotStyle={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        marginHorizontal: 8,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)'
                    }}
                    containerStyle={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}

                /> */}


            </Wrapper2>
        )
    }
 
    
    render() {
        console.log(this.state.backgroundChange)
        return (
                <Container>
                    <Wrapper>
                        <StatusBarContainer color={this.state.backgroundChange}>
                            <StatusBar translucent={false} backgroundColor="blue" barStyle="dark-content" />
                        </StatusBarContainer>
                            { this.renderCarousel() }
                            <ItemSustain />
                    </Wrapper>
                    <BottomSheet                
                        snapPoints={[60, '100%', 60]}
                        renderContent={this.renderInner.bind(this)}
                        renderHeader={this.renderHeader.bind(this)}
                        onOpenEnd={()=>{this.setState({isScreenShow: true})}}
                        onCloseEnd={()=>{this.setState({isScreenShow: false, backgroundChange: true})}}
                        onCloseStart={()=>{this.setState({backgroundChange:false})}}
                    />
                </Container>
        )
    }
}

const tempData = [
    {
        key: '1',
        title: 'Monday',
        data: [
            {day: 'Monday', high: '-4°C', low: '-7°C', icon: 'ios-sunny', marginRight: '0px'}
        ]
    },
    {
        key: '3',
        title: 'Tuesday',
        data: [
            {day: 'Tuesday', high: '-2°C', low: '-5°C', icon: 'ios-partly-sunny', marginRight: '0px'}
        ]
    },
    {
        key: '4',
        title: 'Wednesday',
        data: [
            {day: 'Wednesday', high: '2°C', low: '-2°C', icon: 'ios-partly-sunny', marginRight: '0px'}
        ]
    },
    {
        key: '5',
        title: 'Thursday',
        data: [
            {day: 'Thursday', high: '2°C', low: '-1°C', icon: 'ios-cloudy', marginRight: '4px'}
        ]
    },
    {
        key: '6',
        title: 'Friday',
        data: [
            {day: 'Friday', high: '2°C', low: '1°C', icon: 'ios-rainy', marginRight: '12px'}
        ]
    },
    {
        key: '7',
        title: 'Saturday',
        data: [
            {day: 'Saturday', high: '2°C', low: '-3°C', icon: 'ios-snow', marginRight: '0px'}
        ]
    },
    {
        key: '2',
        title: 'Sunday',
        data: [
            {day: 'Monday', high: '0°C', low: '-3°C', icon: 'ios-thunderstorm', marginRight: '0px'}
        ]
    }
]

const styles = StyleSheet.create({
    DataList: {
        display: 'flex',
        flex: 1,
        marginHorizontal: 10,
        width: 350,
        },
    container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
    },
    panelContainer: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    header: {
    //   backgroundColor: 'transparent',
      shadowColor: '#000000',
    //   paddingTop: 20,
    //   borderTopLeftRadius: 50,
    //   borderTopRightRadius: 50,
    //   borderRadius: "50%",
    //   backgroundColor: "#7C76AB"
    },
    panelHeader: {
      alignItems: 'center',
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    },
    updateHandle: {
        width: 120,
        height: 40,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#D04F85',
      //   marginTop: -20,
        marginRight: 10,
        alignSelf: "flex-start",
        flexDirection: 'row',
        display: "flex",
      },
    panelHandle: {
      width: 120,
      height: 40,
      borderRadius: 8,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#D04F85',
    //   marginTop: -20,
      marginRight: 10,
      alignSelf: "flex-end",
      flexDirection: 'row',
      display: "flex",
    },
    panelTitle: {
      fontSize: 27,
    //   height: 35,
    //   marginTop: -20,
      alignSelf: 'center',
    //   marginBottom: 20
    },
  })

const Container = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* justify-content: center; */
    align-items: center;
`

const BottomContainer = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`

const StatusBarContainer = styled.View`
    background-color: ${ props => props.color ? "white" : "#7C76AB"};
    height: 20px;
    width: 100%;
`
const LocText = styled.Text`
    display: flex;
    color: white;
    font-size: 20px;
`
const TempContainer = styled.View`
    display: flex;
    align-items: center;
    flex-direction: row;
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
    padding-bottom: 3px;
`
const WeatherText = styled.Text`
    color: ${ props => props.color ? props.color : "white"};
    font-size: 22px;
    display: flex;
    margin-left: ${ props => props.marginLeft ? props.marginLeft: '0px'};
    margin-right: ${ props => props.marginRight ? props.marginRight: '0px'};
`
const Wrapper = styled.View`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: center;
    border-radius: 8px;
    flex: 1;
`
const Wrapper2 = styled.View`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    align-items: center;
    border-radius: 8px;
`

const UpdateButton = styled.TouchableOpacity`
    background-color: transparent;
    width: 100%;
    height: 25px;
    /* align-self: flex-start; */
    position: absolute;
    top: 10px;
    left: 10px;
    z-index: 9999;
`