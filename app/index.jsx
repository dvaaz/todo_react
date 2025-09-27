import {View, Text, TextInput, Pressable} from "react-native";
import {StyleSheet} from "react-native";

export default function Index(){
return(
<View style={styles.app}>
    <View style={styles.box}>
    <Text style={styles.title}>To Do REACT</Text>
		    <TextInput style={styles.form}></TextInput>
    </View>
		    <Pressable>Enviar</Pressable>

</View>);
}


const styles = StyleSheet.create({
    app: {
        display: "flex",
        aligntItems: "center",
        justifyContent: "center",
        backgroundColor: '#021123',

    },
    box:{
        backgroundColor: '#0B2027',
        fontFamily: "Space Mono",
        padding: 16,
        minWidth: 400,
        minHeight: 300,
    },
    title:{
        color: '#F6F1D1',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(246, 241, 209, 0.5)',
        fontSize: 24,
        fontFamily: "BioRhyme",
		    margin:8,
    },
    form:{
        backgroundColor:'#FEFEFE',
        padding:8,

    }
})