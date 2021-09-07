import React from 'react';
import { View, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';

export default function AttendanceList() {
  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Student ID</DataTable.Title>
          <DataTable.Title>Student Name</DataTable.Title>
          <DataTable.Title numeric>Attendance</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row >
          <DataTable.Cell>01</DataTable.Cell>
          <DataTable.Cell>Harry</DataTable.Cell>
          <DataTable.Cell numeric>Present</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>02</DataTable.Cell>
          <DataTable.Cell>Hermione</DataTable.Cell>
          <DataTable.Cell numeric>Present</DataTable.Cell>
        </DataTable.Row>

        <DataTable.Row>
          <DataTable.Cell>03</DataTable.Cell>
          <DataTable.Cell>Ron Weasley</DataTable.Cell>
          <DataTable.Cell numeric>Absent</DataTable.Cell>
        </DataTable.Row>

      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
});