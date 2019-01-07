import React, { Component } from "react";
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import style from "../../../assets/css/style";
import LinearGradient from 'react-native-linear-gradient';

class Third extends Component{

    render(){
        let { setSlide } = this.props;
        return(
            <ScrollView>
                <ImageBackground style={style.second} source={require("../../../assets/images/third-walkthrough.png")}>
                    <LinearGradient colors={['#2a52be5c','#2a52be5c']}>
                        <LinearGradient colors={['#1422462e','#1422462e','#1422462e','#1422462e', '#1422462e', '#1422468f','#142246a3','#142246c7','#142246','#142246','#142246','#142246']}>
                            <View style={style.mainSecond}>
                                <View style={style.imageView}>
                                </View>
                                <Text style={style.mainTextThird}>Watch Morning Shows, Movies and More…</Text>
                                <View style={style.courselContainer}>
                                    <TouchableOpacity onPress={() => setSlide(1)} style={style.courselCircles}/>
                                    <TouchableOpacity onPress={() => setSlide(2)} style={style.courselCircles}/>
                                    <TouchableOpacity style={style.courselCirclesActive}/>
                                </View>
                                <View style={style.buttonContainer}>
                                    <Text style={style.btmButtons}>Login</Text>
                                    <Text style={style.btmButtons}>Skip</Text>
                                </View>
                            </View>
                        </LinearGradient>
                    </LinearGradient>
                </ImageBackground>
            </ScrollView>
        )
    }

}

export default Third;