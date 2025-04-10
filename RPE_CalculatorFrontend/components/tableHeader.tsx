import { View, Text } from 'react-native';
import React from 'react';
import { styles } from "../styles/global.styles";

export default function TableHeader() {
  return (
    <>
        <View style={styles.hr} />

        <View style={styles.tableHeaderViewInteger}>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>RPE</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>RIR</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>% of 1rm</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>Load</Text></View>
        </View>

        <View style={styles.hr} />
    </>
  )
}