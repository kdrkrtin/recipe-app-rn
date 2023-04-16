import { Dimensions, StyleSheet } from 'react-native'

const devicesProps = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ededed',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    img:{
        width: devicesProps.width - 20,
        height: devicesProps.height / 3,
    },
    name_container:{
        flex: 1,
        position: 'absolute',
        bottom: 0
    },
    bgOpacity: {
        position: 'absolute',
        bottom: 0,
        width: devicesProps.width - 20,
        height: 30,
        backgroundColor: 'black',
        opacity: .5,
        zIndex: 1
    },
    name:{
        width: devicesProps.width - 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        position: 'relative',
        color: 'white',
        zIndex: 2,
        height: 26,
        
    }
})

export default styles;