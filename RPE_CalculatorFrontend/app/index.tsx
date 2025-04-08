import { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/global.styles";
import Picker from "@/components/picker";
import DropDownPicker from 'react-native-dropdown-picker';

export default function Index() {
  // Stanje za Excercise picker
  const [selectedExcercise, setSelectedExcercise] = useState<string | null>(null);

  // Stanje za Min. weight increment na osnovu izabrane vežbe
  const [incrementValues, setIncrementValues] = useState<string[]>(["o"]);

  // Funkcija koja menja vrednosti Min. weight increment na osnovu izabrane vežbe
  const handleExcerciseChange = (excercise: string) => {
    setSelectedExcercise(excercise);
    console.log("A"+selectedExcercise);
    // Primer promene vrednosti na osnovu vežbe
    /*if (excercise === "Muscle up"|| excercise === "Pull up"|| excercise === "Dip") {
      setIncrementValues(["1", "2", "3"]);  // Prilagodi vrednosti prema vežbi
    } else if (excercise === "Squat" || excercise === "Deadlift") {
      setIncrementValues(["10", "9.5", "9", "8.5", "8", "7.5", "7"]);  // Drugi skup vrednosti za vežbe
    }*/
  };

  useEffect(() => {
    if (selectedExcercise === "Muscle up"|| selectedExcercise === "Pull up"|| selectedExcercise === "Dip") {
      setIncrementValues(["1", "2", "3"]);  // Prilagodi vrednosti prema vežbi
    } else if (selectedExcercise === "Squat" || selectedExcercise === "Deadlift") {
      setIncrementValues(["10", "9.5", "9", "8.5", "8", "7.5", "7"]);  // Drugi skup vrednosti za vežbe
    }
  }, [selectedExcercise]);

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

      <Picker
        descText="Min. increment"
        values={incrementValues}  // Koristimo state vrednosti koje zavise od Excercise
        zIndex={1}
        isWeight={false}
      />
      
      <TouchableOpacity style={styles.computeButton}>
        <Text style={styles.computeText}>Compute</Text>
      </TouchableOpacity>

    </View>
  );
}