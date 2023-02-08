import React, { Component } from 'react';
import { Text, View, StyleSheet, SafeAreaView, Platform, StatusBar, TouchableOpacity, ImageBackground, Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style= {styles.container}>
                <SafeAreaView style= {styles.droidSafeArea}/>
                <ImageBackground source= {require("../assets/iss_bg.png")} style= {styles.backgroundImage}> 
                <View style= {styles.titleBar}>
                    <Text style= {styles.titleText}> APP Rastreador EEI </Text>
                </View>
                <TouchableOpacity style= {styles.routeCard} onPress= {()=> this.props.navigation.navigate("IssLocation")}>
                    <Text style= {styles.routeText}>
                        Localização da EEI
                    </Text>
                    <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                        <Text style={styles.bgDigit}>1</Text>
                        <Image source={require("../assets/iss_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>

                <TouchableOpacity style={styles.routeCard}>
                    <Text style= {styles.routeText}>
                        Meteoros
                    </Text>
                    <Text style={styles.knowMore}>{"Saiba Mais --->"}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image source={require("../assets/meteor_icon.png")} style={styles.iconImage}></Image>
                </TouchableOpacity>
                </ImageBackground>
            </View>
        )
    }
}


const styles= StyleSheet.create({
    container:{
        flex: 1,
    },
    droidSafeArea:{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },
    titleBar:{
        flex:0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    routeCard:{
        flex:0.25,
        marginTop:50,
        marginLeft:50,
        marginRight:50,
        borderRadius:30,
        backgroundColor:"white",
    },
    routeText:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 75,
        paddingLeft: 20
    },
    titleText:{
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    backgroundImage:{
        flex: 1,
        resizeMode: "cover"
    },
    knowMore: {
        paddingLeft: 30,
        color: "red",
        fontSize: 15
    },
    bgDigit: {
        position: "absolute",
        color: "rgba(183, 183, 183, 0.5)",
        fontSize: 150,
        right: 20,
        bottom: -15, /* número de pixels lógicos para compensar a borda inferior deste componente*/
        zIndex: -1 /*controlar a ordem na qual os componentes são exibidos uns sobre os outros*/
    },
    iconImage: {
        position: "absolute",
        height: 200,
        width: 200,
        resizeMode: "contain", /*
        Largura da escala da imagem ≤ Largura da dimensão da visualização da imagem
        Dimensionar Altura da Imagem ≤ Altura da Dimensão da Visualização da Imagem*/
        right: 20,
        top: -80 /*número de pixels lógicos para compensar a borda superior deste componente*/
    },
})