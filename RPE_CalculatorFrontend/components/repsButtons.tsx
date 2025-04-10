import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from "../styles/global.styles";
import { COLORS } from '@/constants/theme';

interface RepsButtonsProps{
    buttonWidth: number,
    selectedRepsButton: number,
    onPressMiniButtons: (value: number) => void,
}

export default function RepsButtons(props: RepsButtonsProps) {
  return (
    <View style={styles.repsButtonsView}>
        {Array.from({ length: 15 }, (_, i) => {
            if(i % 2 === 0){
            if(props.selectedRepsButton == (i + 1)){
                return (
                <TouchableOpacity
                    key={i}
                    style={[{ width: props.buttonWidth,  alignItems:"center", backgroundColor: COLORS.secondary }]}
                    onPress={() => props.onPressMiniButtons(i + 1)}
                >
                    <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
                )
            }
            else{
                return (
                <TouchableOpacity
                    key={i}
                    style={[{ width: props.buttonWidth,  alignItems:"center" }]}
                    onPress={() => props.onPressMiniButtons(i + 1)}
                >
                    <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
                )
            }
            }
            else{
            if(props.selectedRepsButton == (i + 1)){
                return (
                <TouchableOpacity
                    key={i}
                    style={[{ width: props.buttonWidth, backgroundColor: COLORS.secondary, alignItems:"center" }]}
                    onPress={() => props.onPressMiniButtons(i + 1)}
                >
                    <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
                )
            }
            else{
                return (
                <TouchableOpacity
                    key={i}
                    style={[{ width: props.buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}
                    onPress={() => props.onPressMiniButtons(i + 1)}
                >
                    <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
                )
            }
            }
        })}
    </View>
  )
}