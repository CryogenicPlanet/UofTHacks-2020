import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, Linking } from 'react-native';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';



export default class ItemSustain extends Component {
    state = {
        brands: null
    }

    componentDidMount() {
        this.handleGrabData()
    }
    handleGrabData() {
        const data = [
            {
                brand: 'Everlane',
                site: 'https://www.everlane.com/'
            },
            {
                brand: 'Frank and Oak',
                site: 'https://www.frankandoak.com/'
            },
            {
                brand: 'H&M Conscious',
                site: 'https://www2.hm.com/en_ca/women/shop-by-concept/conscious-sustainable-style.html'
            },
            {
                brand: 'Alternative Apparel',
                site: 'https://www.alternativeapparel.com/'
            },
            {
                brand: 'Loomstate',
                site: 'https://www.loomstate.org/'
            },
            {
                brand: "Toms",
                site: 'https://www.toms.ca/'
            }
        ]
        const arr = [];
        while (arr.length < 3) {
            const random = Math.floor(Math.random() * data.length);
            if(arr.indexOf(data[random]) > -1) continue;
            arr.push(data[random])
        }

        this.setState({ brands: arr })
    }
    render() {
        return(
            <SustainContainer>
                { this.state.brands ? 
                <ListContainer
                    // bounces={false}
                    scrollEnabled={true}
                    data={this.state.brands}
                    renderItem={ ({ item }) => <Item name={item.brand} site={item.site}/>}
                />
                : <Text></Text>
                }
            </SustainContainer>
        )
    }
}

const SustainContainer = styled.View`
    width: 100%;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


const ViewContainer = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    /* flex: 0.8; */
    width: 80%;
    height: 60px;
    border: 0.3px solid rgba(255, 255, 255, 1);
    margin: 7px 0;
    align-self: center;
`


const ListContainer = styled.FlatList`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`


const Item = (props) => {
    return (
        <ViewContainer style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 1,
            },
            shadowOpacity: 0.5,
            shadowRadius: 2.22,
        
            elevation: 3,}}
            onPress={() => { Linking.openURL(props.site)}}
            >
                <Ionicons size={24} name="ios-leaf" color="green"/><NameText>{ props.name }</NameText>
        </ViewContainer>
    )
}

const NameText = styled.Text`
    margin-left: 10px;
`
