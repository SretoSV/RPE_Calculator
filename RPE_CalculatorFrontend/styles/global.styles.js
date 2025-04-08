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

  //Compute button styles
  computeButton:{
    width: "90%",
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    marginVertical: 10,
    height: 40,
    justifyContent: "center",
    borderRadius: 50,
  },

  computeText:{
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

})
