export default function Index(){
<View style={style.app}>
    <View style={style.box}>
    <Text style={styles.title}>To Do REACT</Text>   
    
    </View>
</View>
}

const styles = StyleSheet.create({
    app: {
        display: "flex",
        alignitens: "center",
        justifyContent: "center",
        backgroundColor: '#021123',
        width: 1440,
        minheight: 900,
    },
    box:{
        backgroundColor: '#0B2027',
        fontFamily: "Space Mono", 
        fontFamily: "monospace",
        padding: 16,
        minWidth: 400,
        minHeight: 300,
    },
    title:{
        color: '#F6F1D1',
        borderBottom: 1,
        borderBottom: "solid",
        borderBottom: "rgba(246, 241, 209, 0.5)",
        fontSize: 24,
        fontFamily: "BioRhyme",
        fontFamily: "serif",
    },
})