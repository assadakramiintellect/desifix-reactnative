import React, { Component } from "react";
import { View } from "react-native";
import GestureRecognizer from 'react-native-swipe-gestures';
import First from "./first";
import Second from "./second";
import Third from "./third";
class Walkthrough extends Component{

    state = {
        slide: 3
    };

    onSwipeLeft(){
        this.state.slide < 3 && this.setState({slide: ++this.state.slide});
    }
    onSwipeRight(){
        this.state.slide > 1 && this.setState({slide: --this.state.slide});
    }

    setSlide(val){
        this.setState({slide: val})
    }

    render(){

        const config = {
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
        };

        return(
            <GestureRecognizer
                onSwipeLeft={(state) => this.onSwipeLeft()}
                onSwipeRight={(state) => this.onSwipeRight()}
                config={config}
            >
                <View>
                    {
                        this.state.slide === 1 &&
                        <First setSlide={this.setSlide.bind(this)}/>
                    }
                    {
                        this.state.slide === 2 &&
                        <Second setSlide={this.setSlide.bind(this)}/>
                    }
                    {
                        this.state.slide === 3 &&
                        <Third setSlide={this.setSlide.bind(this)}/>
                    }
                </View>
            </GestureRecognizer>
        )
    }

}
export default Walkthrough;