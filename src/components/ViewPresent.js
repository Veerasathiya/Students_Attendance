import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View , Text, TouchableHighlight, Dimensions, Image } from "react-native";
import { Table, TableWrapper, Row, Cell, Rows } from "react-native-table-component";
import Icon from 'react-native-vector-icons/FontAwesome';



//const list = [{id : 1, name : "std1", Present : "Present"}, {id : 2, name : "std2", Present : "Absent"}, {id : 3, name : "std3", Present : "Present" }];

const width = Dimensions.get('window').width;
class ViewPresent extends Component{
    constructor(props){
        super(props);
        this.state = {
            tableHead : ['ID', 'Student Name', 'Attendance'],
            stdData : [['1' , 'Harry', '3'], ['2', 'Hermione', '3'],['3', 'Ron Weasley', '3']],
            attendance : true
        }
    }

    render(){
        const state = this.state;
        const element = (data, index) => (
            <View >
                <TouchableOpacity style={{alignSelf : 'center'}} onPress={() => this.setState({attendance : !state.attendance })}>
                    <View style={styles.btn}>
                        <Text style={styles.btnTxt}>{state.attendance ? 'Present' : 'Absent'}</Text>
                    </View>
                </TouchableOpacity>
            </View>

        );

        return(
            <>
            <View style={styles.container}>
                <TouchableOpacity style={{marginBottom : 30}} onPress={()=>(this.props.navigation.navigate('StudentList'))}>
                    <View style={[styles.btn , {width : 150, backgroundColor : 'transparent', borderWidth : 2, borderColor : 'blue'}]}>
                        <Text style={[styles.btnTxt, {color : 'red', fontWeight : '700'}]}>
                           All Student List Click Here
                        </Text> 
                    </View>
                </TouchableOpacity>
                <Table borderStyle={{borderWidth : 3, borderColor : "#242424"}}>
                    <Row data={state.tableHead} flexArr={[2,2,2]}  style={styles.head} textStyle={[styles.text, {fontWeight : '700'}]} /> 
                </Table>
                <Table style={{marginTop : 25}} borderStyle={{borderWidth : 2, borderColor : "#242424"}}>       
                {
                        state.stdData.map((rowData, index)=>(
                            <TableWrapper key={index} style={styles.row}>
                                {
                                    rowData.map((cellData, cellIndex) => (
                                        <Cell  key={cellIndex} data={cellIndex === 2 ? element(cellData, index) : cellData} textStyle={styles.text} />
                                    ))
                                }
                            </TableWrapper>
                        ))
                    }
                </Table>

            </View>
                <View style={styles.footer}>
                    <Image style={styles.footerIcon} source={require('../../img/pngegg.png')} />
                </View>           
            </>
        );
    }
}

export default ViewPresent;

 
const styles = StyleSheet.create({
    container : {
        flex : 1,
        padding : 16,
        paddingTop : 50,
        backgroundColor : "#fff"
    },
    head : {
        height : 40,
        backgroundColor: '#f1f8ff'
    },
    text : {
        margin : 6,
        textAlign : "center",
        
    },
    row: { height: 40, backgroundColor: '#E7E6E1' },
    btn : {
        width : 58,
        height : 23,
        borderRadius : 10,
        backgroundColor : "#242424"
    }, 
    btnTxt : {
        textAlign : 'center',
        color : '#fff',
        fontSize : 11,
        marginTop : 2.5
        
    },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    footer : {
        backgroundColor: "#d1fff8", 
        height : 70, 
        left : 0, 
        right : 0, 
        flex : 0.1, 
        bottom : -5, 
        position : 'absolute', 
        flexDirection : "row", 
        alignItems : "center",
        justifyContent : 'center'
    },

    footerIcon : {
        width : 43,
        height : 40,
       
    }

})