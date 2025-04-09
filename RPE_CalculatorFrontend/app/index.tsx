import { useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions, Modal } from "react-native";
import { styles } from "../styles/global.styles";
import Picker from "@/components/picker";
import { COLORS } from "@/constants/theme";
import { calculateIndex, calculateValues } from "@/utils/utils";
import Toast from 'react-native-toast-message';

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

    const weightKG = parseFloat(selectedWeight);
    if (isNaN(weightKG)) {
      alert('You must enter a number!');
    } 
    else {
      if(weightKG > 1000){
        alert('Max weight is 1000kg');
      }
      else if(weightKG < 0){
        alert('Weight cannot be negative!');
      }
      else{
        setOneRepMax(Math.round((parseFloat(selectedWeight) / values[indexOfRPE]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0]));
      }
    }

  };
  
  return (
    <>
    <Toast />
    
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
        values={["10", "9.5", "9", "8.5", "8", "7.5", "7", "6.5", "6", "5.5", "5", "4.5", "4"]}
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
          values={["0.5kg (two of 0.25)", "1kg (two of 0.5)", "1.5kg (two of 0.75)", "2kg (two of 1.0)","2.5kg (two of 1.25)","5kg (two of 2.5)"]}
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

      <View style={styles.repsButtonsView}>
        {Array.from({ length: 15 }, (_, i) => {
          if(i % 2 === 0){
            if(selectedRepsButton == (i + 1)){
              return (
                <TouchableOpacity
                  key={i}
                  style={[{ width: buttonWidth,  alignItems:"center", backgroundColor: COLORS.secondary }]}
                  onPress={() => handlePressMiniButtons(i + 1)}
                >
                  <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
              )
            }
            else{
              return (
                <TouchableOpacity
                  key={i}
                  style={[{ width: buttonWidth,  alignItems:"center" }]}
                  onPress={() => handlePressMiniButtons(i + 1)}
                >
                  <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
              )
            }
          }
          else{
            if(selectedRepsButton == (i + 1)){
              return (
                <TouchableOpacity
                  key={i}
                  style={[{ width: buttonWidth, backgroundColor: COLORS.secondary, alignItems:"center" }]}
                  onPress={() => handlePressMiniButtons(i + 1)}
                >
                  <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
              )
            }
            else{
              return (
                <TouchableOpacity
                  key={i}
                  style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}
                  onPress={() => handlePressMiniButtons(i + 1)}
                >
                  <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
              )
            }
          }
        })}
      </View>


      <View style={styles.hr} />

      <View style={styles.tableHeaderViewInteger}>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>RPE</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>% of 1rm</Text></View>
        <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>Load</Text></View>
      </View>

      <View style={styles.hr} />

      <ScrollView>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>10</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[0] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[0]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>9.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[1] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[1]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>9</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[2] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[2]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>8.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[3] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[3]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>      
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>8</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[4] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[4]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>      
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>7.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[5] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[5]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>      
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>7</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[6] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[6]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>      
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>6.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[7] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[7]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>      
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>6</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[8] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[8]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>5.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[9] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[9]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[10] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[10]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>4.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[11] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[11]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>4</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{(calculateValues(selectedRepsButton)[12] * 100).toFixed(1)}%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>{Math.round((oneRepMax * calculateValues(selectedRepsButton)[12]) / parseFloat(selectedIncrement.split("kg")[0])) * parseFloat(selectedIncrement.split("kg")[0])}</Text></View>
        </View>
      </ScrollView>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={changeLanguage} style={styles.changeLanguageButton}>
              <Text style={styles.changeLanguageText}>{languageBtnText}</Text>
            </TouchableOpacity>
            <ScrollView>
              {
                languageState ? 
                <>
                  <Text style={styles.modalText}>
                    Svrha ovog kalkulatora je da omogući dizaču da unese težinu, broj ponavljanja i stepen napora (RPE) za svoj poslednji set, a zatim da koristi pristup zasnovan na RPE-u ili procentima kako bi procenio odgovarajuću težinu za sledeći set.
                  </Text>
                  <Text style={styles.modalText}>
                    U prvom delu, izaberite vežbu, unesite težinu za vaš set, i odaberite broj ponavljanja, RPE za taj set i najmanji teg kojim raspolažete.
                  </Text>
                  <Text style={styles.modalText}>
                    Pritisnite <Text style={styles.calculateColor}>Calculate</Text>, a na dnu će vam aplikacija prikazati procenjenu težinu za vaš sledeći set i vašu trenutnu procenjenu maksimalnu težinu za jedan ponovljeni set.
                  </Text>
                  <Text style={styles.modalText}>
                    Možete odabrati opseg ponavljanja između 1 i 15 pritiskom na jedan od 15 dugmadi, a zatim ćete videti težinu za određeni broj ponavljanja i odgovarajući RPE.
                  </Text>
                </>
                :
                <>
                  <Text style={styles.modalText}>
                    The purpose of this calculator is to allow a lifter to input the weight, reps, and Rate of Percieved Exertion (RPE) for his or her last set, and then to use either an RPE-based or percentage-based approach to estimate the correct load for the following set.
                  </Text>
                  <Text style={styles.modalText}>
                    In the first section, choose the exercise, input your weight for your set, and select the number of reps, the RPE of the set and the smallest weight plates you have available.
                  </Text>
                  <Text style={styles.modalText}>
                    Hit <Text style={styles.calculateColor}>Calculate</Text>, and at the bottom, the app will give you the estimated load for your next set and your current estimated one-rep max.
                  </Text>
                  <Text style={styles.modalText}>
                    You can choose the rep range between 1 and 15 by pressing one of the 15 buttons, and then you can see the load for the specific number of reps and the corresponding RPE.
                  </Text>
                </>
              }
            </ScrollView>
            <TouchableOpacity onPress={closeModal} style={styles.modalCloseButton}>
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>

    </View>
    </>
  );
}
