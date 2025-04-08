import { useState } from "react";
import { Image, Text, TouchableOpacity, View, ScrollView, Dimensions } from "react-native";
import { styles } from "../styles/global.styles";
import Picker from "@/components/picker";
import { COLORS } from "@/constants/theme";

export default function Index() {
  const [selectedExcercise, setSelectedExcercise] = useState<boolean>(false);
  const [selectedReps, setSelectedReps] = useState<number>(1);
  const [oneRepMax, setOneRepMax] = useState<number>(0);
  const screenWidth = Dimensions.get("window").width;
  const buttonWidth = screenWidth / 15;

  const handleExcerciseChange = (value: boolean) => {
    setSelectedExcercise(value);
  };

  const handlePress = (i: number) => {
    setSelectedReps(i);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        <Image source={require("../assets/images/logo.png")} style={styles.logoImage} />
        <Text style={styles.headerText}>RPE Calculator</Text>
        <TouchableOpacity style={styles.helpButton} onPress={() => alert("D")}>
          <Text style={styles.helpButtonText}>i</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.hr} />

      <Picker
        descText="Excercise"
        values={["Muscle up", "Pull up", "Dip", "Squat", "Deadlift"]}
        onValueChange={handleExcerciseChange}
        zIndex={5}
        isWeight={false}
      />

      <Picker
        descText="Weight"
        values={["Muscle up", "Pull up", "Dip", "Squat", "Deadlift"]}
        zIndex={4}
        isWeight={true}
      />

      <Picker
        descText="x Reps"
        values={["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]}
        zIndex={3}
        isWeight={false}
      />

      <Picker
        descText="@RPE"
        values={["10", "9.5", "9", "8.5", "8", "7.5", "7", "6.5", "6", "5.5", "5", "4.5", "4"]}
        zIndex={2}
        isWeight={false}
      />

      {!selectedExcercise ? 
        <Picker
          descText="Min. increment"
          values={["0.25kg", "0.5kg", "0.75kg", "1kg", "1.25kg", "2.5kg"]}
          zIndex={1}
          isWeight={false}
        />
      :
        <Picker
          descText="Min. increment"
          values={["0.5kg (two of 0.25)", "1kg (two of 0.5)", "1.5kg (two of 0.75)", "2kg (two of 1.0)","2.5kg (two of 1.25)","5kg (two of 2.5)"]}
          zIndex={1}
          isWeight={false}
        />
      }
      
      <TouchableOpacity style={styles.computeButton}>
        <Text style={styles.computeText}>Compute</Text>
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
            if(selectedReps == (i + 1)){
              return (
                <TouchableOpacity
                  key={i}
                  style={[{ width: buttonWidth,  alignItems:"center", backgroundColor: COLORS.secondary }]}
                  onPress={() => handlePress(i + 1)}
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
                  onPress={() => handlePress(i + 1)}
                >
                  <Text style={styles.repsButton}>{i + 1}</Text>
                </TouchableOpacity>
              )
            }
          }
          else{
            if(selectedReps == (i + 1)){
              return (
                <TouchableOpacity
                  key={i}
                  style={[{ width: buttonWidth, backgroundColor: COLORS.secondary, alignItems:"center" }]}
                  onPress={() => handlePress(i + 1)}
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
                  onPress={() => handlePress(i + 1)}
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
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>9.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>9</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>8.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>      
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>8</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>      
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>7.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>      
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>7</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>      
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>6.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>      
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>6</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>5.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewDouble}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>4.5</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
        <View style={styles.tableHeaderViewInteger}>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>4</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>0%</Text></View>
          <View style={styles.viewForTable}><Text style={styles.tableHeaderText}>100</Text></View>
        </View>
      </ScrollView>
    </View>
  );
}




  // Funkcija koja menja vrednosti Min. weight increment na osnovu izabrane vežbe
  //const handleExcerciseChange = (excercise: string) => {
    
    //console.log("A"+selectedExcercise);
    // Primer promene vrednosti na osnovu vežbe
    /*if (excercise === "Muscle up"|| excercise === "Pull up"|| excercise === "Dip") {
      setIncrementValues(["1", "2", "3"]);  // Prilagodi vrednosti prema vežbi
    } else if (excercise === "Squat" || excercise === "Deadlift") {
      setIncrementValues(["10", "9.5", "9", "8.5", "8", "7.5", "7"]);  // Drugi skup vrednosti za vežbe
    }*/
  //};

  /*useEffect(() => {
    if (selectedExcercise === "Muscle up"|| selectedExcercise === "Pull up"|| selectedExcercise === "Dip") {
      setIncrementValues(["1", "2", "3"]);  // Prilagodi vrednosti prema vežbi
    } else if (selectedExcercise === "Squat" || selectedExcercise === "Deadlift") {
      setIncrementValues(["10", "9.5", "9", "8.5", "8", "7.5", "7"]);  // Drugi skup vrednosti za vežbe
    }
  }, [selectedExcercise]);*/


  /*
        <View style={styles.repsButtonsView}>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>1</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>2</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>3</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>4</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>5</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>6</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>7</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>8</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>9</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>10</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>11</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>12</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>13</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth, backgroundColor: COLORS.double, alignItems:"center" }]}><Text style={styles.repsButton}>14</Text></TouchableOpacity>
        <TouchableOpacity style={[{ width: buttonWidth,  alignItems:"center" }]}><Text style={styles.repsButton}>15</Text></TouchableOpacity>
      </View>
  */