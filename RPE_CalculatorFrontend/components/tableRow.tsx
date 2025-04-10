import { View, Text } from 'react-native';
import React from 'react';
import { styles } from "../styles/global.styles";
import { calculateValues } from '@/utils/utils';

interface TableRowProps{
    selectedRepsButton: number,
    oneRepMax: number,
    selectedIncrement: string,
    indexOfPercentage: number,
    rpe: number,
    rir: number,
}

export default function TableRow(props: TableRowProps) {
  return (
    Number.isInteger(props.rpe) ? 
    <View style={styles.tableHeaderViewInteger}>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{props.rpe}</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{props.rpe === 0 ? 10 : props.rir}</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(props.selectedRepsButton)[props.indexOfPercentage] * 100).toFixed(1)}%</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((props.oneRepMax * calculateValues(props.selectedRepsButton)[props.indexOfPercentage]) / parseFloat(props.selectedIncrement.split("kg")[0])) * parseFloat(props.selectedIncrement.split("kg")[0])}</Text></View>
    </View>
    : 
    <View style={styles.tableHeaderViewDouble}>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{props.rpe}</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{props.rpe === 0 ? 10 : props.rir}</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(props.selectedRepsButton)[props.indexOfPercentage] * 100).toFixed(1)}%</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((props.oneRepMax * calculateValues(props.selectedRepsButton)[props.indexOfPercentage]) / parseFloat(props.selectedIncrement.split("kg")[0])) * parseFloat(props.selectedIncrement.split("kg")[0])}</Text></View>
    </View>
  )
}