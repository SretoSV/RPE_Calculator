import { useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from "react-native";
import { styles } from "../styles/global.styles";
import Picker from "@/components/picker";
import { COLORS } from "@/constants/theme";
import { calculateIndex, calculateValues } from "@/utils/utils";
import InformationModal from "@/components/informationModal";
import TableRow from "@/components/tableRow";
import TableHeader from "@/components/tableHeader";
import RepsButtons from "@/components/repsButtons";

export default function Index() {
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth / 15;
  const [values, setValues] = useState<number[]>([]);

  const [selectedExerciseTrueFalse, setSelectedExerciseTrueFalse] = useState<boolean>(false);

  const [selectedExercise, setSelectedExercise] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [selectedRepsPicker, setSelectedRepsPicker] = useState<string>("1");
  const [selectedRPE, setSelectedRPE] = useState<string>("10");
  const [indexOfRPE, setIndexOfRPE] = useState<number>(0);
  const [selectedIncrement, setSelectedIncrement] = useState<string>("");

  const [selectedRepsButton, setSelectedRepsButton] = useState<number>(1);
  const [oneRepMax, setOneRepMax] = useState<number>(0);

  //stanje za modal
  const [modalVisible, setModalVisible] = useState(false);
  const [languageBtnText, setLanguageBtnText] = useState("SR");
  const [languageState, setLanguageState] = useState(false);

  const handleExerciseTrueFalseChange = (value: boolean) => {
    setSelectedExerciseTrueFalse(value);
  };

  const handleExerciseChange = (value: string) => {
    setSelectedExercise(value);
  };
  const handleWeightChange = (value: string) => {
    setSelectedWeight(value);
  };
  const handleSelectedRepsChange = (value: string) => {
    setSelectedRepsPicker(value);
    setValues(calculateValues(parseInt(value))); //Popuniti niz sa vrednostima
  };
  const handleSelectedRPEChange = (value: string) => {
    setSelectedRPE(value);
    setIndexOfRPE(calculateIndex(value));
  };
  const handleSelectedIncrementChange = (value: string) => {
    setSelectedIncrement(value);
  };

  const handlePressMiniButtons = (i: number) => {
    setSelectedRepsButton(i);
  };

  //Funkcija za otvaranje modala
  const openModal = () => {
    setModalVisible(true);
  };

  //Funkcija za zatvaranje modala
  const closeModal = () => {
    setModalVisible(false);
  };

  //Funkcija za promenu jezika
  const changeLanguage = () => {
    if(languageBtnText == "EN"){
      setLanguageBtnText("SR");
    }
    else{
      setLanguageBtnText("EN");
    }

    setLanguageState(current => !current);
  };

  const handlePressCalculate = () => {
    console.log("----------------");
    console.log("Exercise:", selectedExercise);
    console.log("Weight:", selectedWeight);
    console.log("Reps (picker):", selectedRepsPicker);
    console.log("RPE:", selectedRPE);
    console.log("Increment:", selectedIncrement);
    console.log("percentage:", values[indexOfRPE]);

    if (isNaN(parseFloat(selectedWeight))) {
      alert('You must enter a number!');
    } 
    else {
      if(parseFloat(selectedWeight) > 1000){
        alert('Max weight is 1000kg');
      }
      else if(parseFloat(selectedWeight) < 0){
        alert('Weight cannot be negative!');
      }
      else{
        setOneRepMax(Math.round((parseFloat(selectedWeight) / values[indexOfRPE]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0]));
      }
    }

  };
  
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image source={require("../assets/images/logo.png")} style={styles.logoImage} />
        <Text style={styles.headerText}>RPE Calculator</Text>
        <TouchableOpacity style={styles.helpButton} onPress={openModal}>
          <Text style={styles.helpButtonText}>i</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hr} />

      <Picker
        descText="Exercise"
        values={["Muscle up", "Pull up", "Dip", "Bench", "Squat", "Deadlift"]}
        onValueChange={handleExerciseTrueFalseChange}
        onForValueChange={handleExerciseChange}
        zIndex={5}
        isWeight={false}
      />

      <Picker
        descText="Weight"
        values={[""]}
        onForValueChange={handleWeightChange}
        zIndex={4}
        isWeight={true}
      />

      <Picker
        descText="x Reps"
        values={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}
        onForValueChange={handleSelectedRepsChange}
        zIndex={3}
        isWeight={false}
      />

      <Picker
        descText="@RPE"
        values={["10", "9.5", "9", "8.5", "8", "7.5", "7", "6.5", "6", "5.5", "5", "4.5", "4", "3.5", "3", "2.5", "2", "1.5", "1", "0.5", "0"]}
        onForValueChange={handleSelectedRPEChange}
        zIndex={2}
        isWeight={false}
      />

      {!selectedExerciseTrueFalse ? 
        <Picker
          descText="Min. increment"
          values={["0.25kg", "0.5kg", "0.75kg", "1kg", "1.25kg", "2.5kg"]}
          onForValueChange={handleSelectedIncrementChange}
          zIndex={1}
          isWeight={false}
        />
      :
        <Picker
          descText="Min. increment"
          values={["0.5kg (2 x 0.25)", "1kg (2 x 0.5)", "1.5kg (2 x 0.75)", "2kg (2 x 1.0)","2.5kg (2 x 1.25)","5kg (2 x 2.5)"]}
          onForValueChange={handleSelectedIncrementChange}
          zIndex={1}
          isWeight={false}
        />
      }
      
      <TouchableOpacity 
        style={styles.calculateButton}
        onPress={() => handlePressCalculate()}
      >
        <Text style={styles.calculateText}>Calculate</Text>
      </TouchableOpacity>

      <Text style={styles.estimated1RM}>
        Estimated 1RM
      </Text>
      <Text style={styles.kilograms1RM}>
        {oneRepMax} kg
      </Text>

      <RepsButtons 
        buttonWidth={buttonWidth}
        selectedRepsButton={selectedRepsButton}
        onPressMiniButtons={handlePressMiniButtons}
      />

      <TableHeader />

      <ScrollView>
        {Array.from({ length: 21 }, (_, i) => {
          return <TableRow 
            key={i + oneRepMax}
            selectedRepsButton={selectedRepsButton}
            oneRepMax={oneRepMax}
            selectedIncrement={selectedIncrement}
            indexOfPercentage={i}
            rpe={(i + 20 - i * 2) / 2}
            rir={i / 2}
          />
        })}
      </ScrollView>

      <InformationModal 
        modalVisible={modalVisible}
        onClose={closeModal}
        onChangeLanguage={changeLanguage}
        languageBtnText={languageBtnText}
        languageState={languageState}
      />

    </View>
  );
}
