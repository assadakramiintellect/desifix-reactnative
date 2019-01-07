import { StyleSheet } from "react-native";

export default StyleSheet.create({
    main: {

    },
    mainSecond: {
      zIndex: 1123
    },
    first: {
        width: "100%",
        height: "100%"
    },
    second: {
        zIndex: -1
    },
    imageView: {
        width: "100%",
        height: 352,
        zIndex: -1,
        position: "relative"
    },
    edgeRemoval: {
        height: 450,
        position: "relative",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        marginTop: 200
    },
    mainText: {
        fontSize: 45,
        paddingTop: 70,
        paddingBottom: 80,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: "center",
        color: "#fff",
        zIndex: 1
    },
    mainTextSec: {
        fontSize: 45,
        paddingTop: 70,
        paddingBottom: 80,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: "center",
        color: "#fff",
        zIndex: 1
    },
    mainTextThird: {
        fontSize: 45,
        paddingTop: 18,
        paddingBottom: 80,
        paddingRight: 30,
        paddingLeft: 30,
        textAlign: "center",
        color: "#fff",
        zIndex: 1
    },
    courselContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        paddingBottom: 82
    },
    courselCircles: {
        width: 20,
        height: 20,
        marginLeft: 15,
        borderRadius: 50,
        backgroundColor: "#2e2e2e",
    },
    courselCirclesActive: {
        width: 20,
        height: 20,
        marginLeft: 15,
        borderRadius: 50,
        backgroundColor: "#fff",
    },
    buttonContainer: {
        paddingBottom: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"
    },
    btmButtons: {
        color: "#fff",
        backgroundColor: "transparent",
        borderRadius: 50,
        borderWidth: 2,
        borderColor: '#fff',
        fontSize: 25,
        marginLeft: 10,
        paddingTop: 10,
        paddingBottom: 10,
        width: 150,
        textAlign: "center"
    }

});