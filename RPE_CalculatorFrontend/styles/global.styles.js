import { StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

export const styles = StyleSheet.create({
  //index styles
  mainContainer:{
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: COLORS.background,
    color: COLORS.primary,
  },

  header:{
    color: COLORS.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",  
    paddingHorizontal: 10,
  },

  logoImage:{
    width: 50,
    height: 50,
  },

  headerText:{
    fontSize: 35,
    color: COLORS.primary,
  },

  helpButton:{
    borderWidth: 2,
    borderColor: 'orange',
    borderStyle: 'solid',
    borderRadius: 50,
  },

  helpButtonText:{
    fontSize: 18,
    color: COLORS.secondary,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },

  hr:{
    height: 2,
    width: "98%",
    backgroundColor: COLORS.line,
    marginVertical: 5,
  },

  //Picker styles
  descriptionAndPicker:{
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    marginVertical: 2,
  },

  descriptionText:{
    fontSize: 18,
    color: COLORS.primary,
    width: "40%",
    marginLeft: 10,
  },

  pickerView:{
    flex: 1, 
    alignItems: 'flex-end',
    marginRight: 10,
  },

  picker:{
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: 'solid',
    borderRadius: "none",
    backgroundColor: COLORS.background,
    marginLeft: "auto",
    minHeight: 35,
  },

  labelStyle:{
    color: COLORS.primary,
    fontSize: 18,
  },
  
  selectedItemLabelStyle:{
    color: COLORS.primary,
  },

  containerStyle:{
    width: "100%",
  },

  dropDownContainerStyle:{
    position: 'absolute',
    backgroundColor: COLORS.background,
    color: COLORS.primary,
    borderColor: COLORS.primary,
    borderStyle: 'solid',
    borderRadius: "none",
  },

  listItemLabelStyle:{
    color: COLORS.primary,
    fontSize: 18,
  },

  input:{
    borderWidth: 2,
    borderColor: COLORS.primary,
    borderStyle: 'solid',
    width: "100%",
    color: COLORS.primary,
  },

  //Calculate button styles
  calculateButton:{
    width: "90%",
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    marginVertical: 10,
    height: 40,
    justifyContent: "center",
    borderRadius: 50,
  },

  calculateText:{
    color: COLORS.primary,
    fontSize: 18,
  },

  //One Rep Max Text styles
  estimated1RM:{
    color: COLORS.secondary,
    fontSize: 24,
  },

  kilograms1RM:{
    marginTop: -10,
    color: COLORS.secondary,
    fontSize: 40,
  },

  //reps buttons styles

  repsButtonsView:{
    flexDirection: "row",
    marginTop: 5,
  },

  repsButton:{
    color: COLORS.primary,
    fontSize: 18,
    padding: 3,
  },

  //table view styles
  tableHeaderViewInteger:{
    flexDirection: "row",
    justifyContent: "center",
    width:"100%",
  },

  tableHeaderViewDouble:{
    flexDirection: "row",
    justifyContent: "center",
    width:"100%",
    backgroundColor: COLORS.double,
  },

  tableHeaderText:{
    color: COLORS.primary,
    fontSize: 18,
    paddingHorizontal: 10,
  },

  viewForTable:{
    justifyContent:"center",
    alignItems:"center",
    width:"33%",
  },

  // Modal styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalContent: {
    backgroundColor: COLORS.background,
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
    borderWidth: 2,
    borderColor: COLORS.primary,
    marginTop: 40,
    marginBottom: 30,
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: COLORS.primary,
  },

  modalCloseButton: {
    backgroundColor: COLORS.secondary,
    padding: 10,
    borderRadius: 5,
    position: "fixed",
  },
  modalCloseText: {
    color: COLORS.primary,
    fontSize: 16,
  },

  calculateColor:{
    color: COLORS.secondary,
  },

  changeLanguageButton:{
    backgroundColor: COLORS.primary,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5,
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 2,
    marginRight: 2,
  },

  changeLanguageText:{
    color: COLORS.background,
    fontSize: 16,
  },
})
