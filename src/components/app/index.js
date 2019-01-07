import React, {Component} from 'react';
import { StatusBar, View } from 'react-native';
import Walkthrough from "../walkthrough";

class App extends Component {

    componentDidMount(){
    }

    render() {
        return (
            <View >
                <StatusBar hidden/>
                <Walkthrough/>
            </View>
        );
    }
}

export default App;
