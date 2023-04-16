import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 30,
        backgroundColor: '#ededed',
        margin: 10,
        borderBottomLeftRadius: 50,
        borderTopLeftRadius: 50
    },
    img:{
        width: 100,
        height: 100,
        resizeMode: 'contain'
    },
    name_container:{
        flex: 1,
        justifyContent: 'center',
        marginLeft: 10
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default styles;