import { StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'#EEEEEE'
    },
    img_section:{
        width:138,
        height:138,
        // backgroundColor:'yellow',
        // borderWidth:1
       
    },
    img:{
        width:152,
        height:62,
    },
    box_img:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginBottom:50,
        // backgroundColor:"blue"
        
    },
    box_img_section:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
     
    },
    text:{
        textAlign:'center',
        color:'#616161',
        
    },
    box_btn_login:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
    }
})