import React, { Component } from "react";
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import style from "../../../assets/css/style";
import LinearGradient from 'react-native-linear-gradient';
class Second extends Component{

    render(){
        let { setSlide } = this.props;
        return(
            <ScrollView>
                <ImageBackground style={style.second} source={require("../../../assets/images/second-walkthrough.png")}>
                    <LinearGradient colors={['#f5d5472e','#f5d5472e','#f5d5472e','#f5d5472e', '#f5d5472e', '#f5d5478f','#f5d547a3','#f5d547a3','#f5d547a3']}>
                        <View style={style.mainSecond}>
                            <View style={style.imageView}>
                            </View>
                            <Text style={style.mainTextSec}>Watch Live TV Channels</Text>
                            <View style={style.courselContainer}>
                                <TouchableOpacity onPress={() => setSlide(1)} style={style.courselCircles}/>
                                <TouchableOpacity style={style.courselCirclesActive}/>
                                <TouchableOpacity onPress={() => setSlide(3)} style={style.courselCircles}/>
                            </View>
                            <View style={style.buttonContainer}>
                                <Text style={style.btmButtons}>Login</Text>
                                <Text style={style.btmButtons}>Skip</Text>
                            </View>
                        </View>
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
        )
    }

}

export default Second;