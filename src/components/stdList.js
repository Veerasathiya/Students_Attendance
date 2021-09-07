import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Table, Row, Rows, TableWrapper } from "react-native-table-component";




class StudentList extends Component{
    
    
    constructor(props) {
        super(props);
        this.state = {
            tableHead: ['Student ID', 'Student Name'],
            stdData : [[1, "Harry"], [2, "Hermione"], [3, "Ron Weasley"]],
        }
    }

    render()
    {
        const state = this.state;


        return(
            <View style={styles.container}>
                <Table borderStyle={{borderWidth : 2, borderColor : '#000' }} >
                    <Row data={state.tableHead} style={styles.head} flexArr={[0.7,2]} textStyle={styles.text}/>
                    <TableWrapper style={styles.wrapper}>
                     <Rows  data={state.stdData} flexArr={[0.7,2]} style={styles.row} textStyle={styles.text}/>
                    </TableWrapper>
 
                </Table>

            </View>
        );
    }
}

export default StudentList;

const styles = StyleSheet.create ({
    container : {flex : 1,padding: 16, paddingTop: 30, backgroundColor: '#fff'},
    wrapper : {flexDirection : "row"},
    head : { height: 40, backgroundColor: '#f1f8ff' },
    text : { margin : 6, textAlign : 'center' },
    row : {height : 35}
})