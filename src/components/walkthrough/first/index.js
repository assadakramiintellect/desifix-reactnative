import React, { Component } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import style from "../../../assets/css/style";
import LinearGradient from 'react-native-linear-gradient';

class First extends Component{

    render(){
        let { setSlide } = this.props;
        return(
        <ScrollView>
            <LinearGradient colors={['#773f2a45','#773f2a45','#773f2a8a','#773f2a8a', '#833F30', '#833F30','#833F30','#833F30','#833F30','#953C3A', '#A33746', '#AC334E']}>
                <View style={style.main}>
                        <View style={style.imageView}>
                            <Image style={style.first} source={require("../../../assets/images/first.png")}/>
                        </View>
                    <Text style={style.mainText}>Watch Your Favorite Dramas</Text>
                    <View style={style.courselContainer}>
                        <TouchableOpacity style={style.courselCirclesActive}/>
                        <TouchableOpacity onPress={() => setSlide(2)} style={style.courselCircles}/>
                        <TouchableOpacity onPress={() => setSlide(3)} style={style.courselCircles}/>
                    </View>
                    <View style={style.buttonContainer}>
                        <Text style={style.btmButtons}>Login</Text>
                        <Text style={style.btmButtons}>Skip</Text>
                    </View>
                </View>
            </LinearGradient>
        </ScrollView>
        )
    }

}



export default First;