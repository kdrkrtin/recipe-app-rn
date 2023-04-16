import { Dimensions, StyleSheet } from 'react-native'

const devicesProps = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ededed',
        marginBottom: 20,
    },
    img:{
        width: devicesProps.width,
        height: devicesProps.height / 3,
    },
    name_container:{
        flex: 1,
        padding: 10
    },
    name:{
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10
    },
    desc: {
        fontSize: 14
    },
    ytpButton: {
        backgroundColor: '#c00',
        margin: 10,
        padding: 10,
        borderRadius: 5,
    },
    ytpText: {
        color: 'white',
        textAlign: 'center'
    }
})

export default styles;