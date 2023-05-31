import { useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  
  const [goals, setGoals]= useState([]);    //goals in an array which is updated everytime and hence adds more goals values into the existing array.

  const [modalIsVisible, setModalIsVisible]= useState(false); // initial state is that modal is not visible

  function startModalHandler(){
    setModalIsVisible(true);
  }

  function endModalHandler(){
    setModalIsVisible(false);
  }
  
  function addGoalHandler1(enteredGoalText){              //fires when the user presses the Add Goal button
    setGoals( (currentGoals) => [...currentGoals, 
                                {
                                  text: enteredGoalText,
                                  id: Math.random().toString(),
                                }
                                ]);  //best approach to update array is creating an arrow function to update the existing goals state array with the new value: enteredGoalsText OR Method2:{ setGoals([...goals, enteredGoalText] ) }, ie adding new enteredGoalText to an already existing array to goals using the state hook.
    endModalHandler();
  }

  function deleteGoalHandler(id){
    setGoals( (currentGoals)=> {
            return currentGoals.filter( (goal) => goal.id !== id);
            }
          );        //if inner function of filter returns true, then the corresponding items is kept in the array otherwise it is dropped from the array
  }

  
  return (
      <View style={styles.appContainer}>
      <Button title='Add New Goal' color='maroon' onPress={startModalHandler} ></Button>
        <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler1} onCancel={endModalHandler}/> 
        <View style={styles.goalsContainer}>  
          <FlatList data= {goals} renderItem= { (itemData) => {
                                                                return(
                                                                  <GoalItem onDeleteItem={deleteGoalHandler} id={itemData.item.id} itemValue={itemData.item.text}/>   
                                                                  
                                                                  );
          }} />  
        {/* This is the older method to display goals array: {goals.map( (goal) => <Text style={styles.goalItem} key= {goal}> {goal} </Text> ) }  */}
              
        </View>
      </View>
  );
}

//whole control of displaying the goals output array is given to flatList and it uses data and renderItem props for doing this.
//for goalinput component, it is passing addGoalHandler1 method with onAddGoal to GoalInput component
//Now inside goalInput class, we have to initiate the addGoalHandler1 of here and pass it with the enteredGoalTextValue,
//So, created a separate event there to trigger a separate function addGoalHandler2 which in turn will call addGoalHandler1 and pass enteredGoalText value in it from there.

const styles = StyleSheet.create({    //styles object
  appContainer:{
    flex: 1,
    padding: 50,
    paddingTop: 50,
    paddingHorizontal: 17,
    backgroundColor:'black'
  },
  goalsContainer:{
    flex: 5,
    marginTop:15,
    backgroundColor:'black',
    
  },
});