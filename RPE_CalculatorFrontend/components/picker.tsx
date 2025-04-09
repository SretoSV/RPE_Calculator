import { View, Text, ImageBackground, TextInput  } from 'react-native';
import React, { useEffect, useState } from 'react';
import { styles } from "../styles/global.styles";
import DropDownPicker from 'react-native-dropdown-picker';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon  } from 'react-native-heroicons/solid';
import { COLORS } from '@/constants/theme';

interface PickerProps{
    descText: string,
    values: string[],
    onValueChange?: (value: boolean) => void,
    onForValueChange: (value: string) => void,
    zIndex: number,
    isWeight: boolean,
}
export default function Picker(props: PickerProps) {
    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState<string>(props.values[0]);
    const [items, setItems] = useState<{ label: string; value: string }[]>([]);
    const formattedItems = props.values.map((item, index) => ({
        label: item,
        value: item, 
        key: (item + index).toString(),
    }));

    useEffect(() => {
        setItems(formattedItems);
        if (!props.values.includes(value)) {
            setValue(formattedItems[0]?.value);
        }
    }, [props.values]);

    useEffect(() => {
        if(props.onValueChange){
            if(value === "Muscle up" || value === "Pull up" || value === "Dip"){
                props.onValueChange(false);
            }
            else if (value === "Bench" || value === "Squat" || value === "Deadlift"){
                props.onValueChange(true);
            }
        }
        if(!props.isWeight){
            props.onForValueChange(value);
        }
    }, [value]);

    useEffect(() => {
        if(props.isWeight){
            props.onForValueChange(text);
        }
    }, [text]);

    return (
        <View style={styles.descriptionAndPicker}>
            <Text style={styles.descriptionText}>{props.descText}</Text>
            
            <View style={styles.pickerView}>
                {!props.isWeight ? 
                <DropDownPicker
                    zIndex={props.zIndex}
                    open={open}
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                    style={styles.picker}
                    dropDownContainerStyle={styles.dropDownContainerStyle}
                    selectedItemLabelStyle={styles.selectedItemLabelStyle}
                    listItemLabelStyle={styles.listItemLabelStyle}
                    labelStyle={styles.labelStyle}
                    containerStyle={styles.containerStyle}
                    
                    TickIconComponent={() => (
                        <View>
                            <CheckIcon color="white" size={18} />
                        </View>
                    )}

                    ArrowUpIconComponent={() => (
                        <ChevronUpIcon color="white" size={18} />
                    )}
                        ArrowDownIconComponent={() => (
                        <ChevronDownIcon color="white" size={18} />
                    )}
                />
                :
                <TextInput
                    style={styles.input}
                    onChangeText={(newText) => setText(newText)}
                    value={text}
                    placeholder="Enter the weight"
                    placeholderTextColor={COLORS.primary}
                    keyboardType="numeric"
                />
                }
                
            </View>
        </View>
    )
}