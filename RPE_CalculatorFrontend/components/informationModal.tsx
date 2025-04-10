import { View, Text, Modal, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { styles } from "../styles/global.styles";

interface InformationModalProps{
    modalVisible: boolean,
    onClose?: () => void,
    onChangeLanguage?: () => void,
    languageBtnText: string,
    languageState: boolean,
}

export default function InformationModal(props: InformationModalProps) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={props.modalVisible}
      onRequestClose={props.onClose}
    >
    <View style={styles.modalOverlay}>
      <View style={styles.modalContent}>
        <TouchableOpacity onPress={props.onChangeLanguage} style={styles.changeLanguageButton}>
          <Text style={styles.changeLanguageText}>{props.languageBtnText}</Text>
        </TouchableOpacity>
        <ScrollView>
          {
            props.languageState ? 
            <>
              <Text style={styles.modalText}>
                Objašnjenje tabele:{"\n"}
                <Text style={styles.calculateColor}>RPE</Text> - Stepen subjektivnog napora{"\n"}
                <Text style={styles.calculateColor}>RIR</Text> - Ponavljanja u rezervi{"\n"}
                <Text style={styles.calculateColor}>% of 1rm</Text> - Procenat od maksimalne kilaže za jedno ponavljanje{"\n"}
                <Text style={styles.calculateColor}>Load</Text> - Težina za određeni RPE
              </Text>
              <Text style={styles.modalText}>
                Svrha ovog kalkulatora je da omogući dizaču da unese težinu, broj ponavljanja i stepen napora (RPE) za svoj poslednji set, a zatim da koristi pristup zasnovan na RPE-u ili procentima kako bi procenio odgovarajuću težinu za sledeći set.
              </Text>
              <Text style={styles.modalText}>
                U prvom delu, izaberite vežbu, unesite težinu za vaš set, i odaberite broj ponavljanja (1-15), RPE za taj set (10-0) i najmanji teg kojim raspolažete (0.25kg - 2.5kg).
              </Text>
              <Text style={styles.modalText}>
                Pritisnite <Text style={styles.calculateColor}>Calculate</Text>, a na dnu će vam aplikacija prikazati procenjenu težinu za vaše sledeće setove u zavisnosti od izabranog broja ponavljanja (dugmad 1-15) i vašu trenutnu maksimalnu kilazu za jedno ponavljanje (1RM).
              </Text>
              <Text style={styles.modalText}>
                Možete odabrati opseg ponavljanja između 1 i 15 pritiskom na jedan od 15 dugmadi, a zatim ćete videti težinu za taj broj ponavljanja i odgovarajući RPE.
              </Text>
            </>
            :
            <>
              <Text style={styles.modalText}>
                Table explanation:{"\n"}
                <Text style={styles.calculateColor}>RPE</Text> - Rate of Percieved Exertion{"\n"}
                <Text style={styles.calculateColor}>RIR</Text> - Reps in reserve{"\n"}
                <Text style={styles.calculateColor}>% of 1rm</Text> - Percentage of one rep max{"\n"}
                <Text style={styles.calculateColor}>Load</Text> - Weight for that specific RPE
              </Text>
              <Text style={styles.modalText}>
                The purpose of this calculator is to allow a lifter to input the weight, reps, and Rate of Percieved Exertion (RPE) for his or her last set, and then to use either an RPE-based or percentage-based approach to estimate the correct load for the following set.
              </Text>
              <Text style={styles.modalText}>
                In the first section, choose the exercise, input your weight for your set, and select the number of reps (1-15), the RPE of the set (10-0) and the smallest weight plates you have available (0.25kg - 2.5kg).
              </Text>
              <Text style={styles.modalText}>
                Hit <Text style={styles.calculateColor}>Calculate</Text>, and at the bottom, the app will give you the estimated load for your next sets based on the selected number of reps (buttons 1-15) and your current estimated one-rep max (1RM).
              </Text>
              <Text style={styles.modalText}>
                You can choose the rep range between 1 and 15 by pressing one of the 15 buttons, and then you can see the load for that number of reps and the corresponding RPE.
              </Text>
            </>
          }
        </ScrollView>
        <TouchableOpacity onPress={props.onClose} style={styles.modalCloseButton}>
          <Text style={styles.modalCloseText}>Close</Text>
        </TouchableOpacity>
      </View>
    </View>

  </Modal>
  )
}