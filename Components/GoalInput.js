import {StyleSheet, View, Button, TextInput, Modal,Image} from 'react-native';
import {useState } from 'react';

function GoalInput(props){
    const [enteredGoalText, setEnteredGoalText]= useState('');

    function goalInputHandler(enteredText){   //fired when the user types something into the text input box
                                              //react native calls this fuction onChange in text input and under the hood, react native provides us with the value as an input as a parameter here as enteredText
        setEnteredGoalText(enteredText);
        
    }

    function addGoalHandler2(){
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }
    return (
        <Modal visible= {props.visible} animationType='fade'>
            <View style={styles.inputContainer} >
                
                <Image style={styles.image} source={require('../assets/images/goalsIcon.jpg')}/>
                <TextInput style={styles.textInput} placeholder="Your course goal" onChangeText={goalInputHandler} value={enteredGoalText}></TextInput>
                <View style={styles.buttonContainer}>
                     <Button title="Add Goal" onPress={addGoalHandler2} color='#d4af37'></Button>
                     <Button title='Discard' onPress={props.onCancel} color='maroon'></Button> 
                </View>
                
            </View>
        </Modal>
    );
//value property of the TextInput component binds the textInput field with enteredGaol text input field and reflects the changes made there, to here as well
}
//props.x means x is also here provided by the parent component only.
export default GoalInput;

const styles = StyleSheet.create({
    textInput:{
        borderWidth:1,
        borderColor:'#E1D9D1',
        width:'100%',
        backgroundColor:'grey',

    },
    inputContainer:{
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        backgroundColor:'black',
    },
    buttonContainer:{
        flexDirection:'row',
        marginTop:15,
        marginHorizontal:7,
        
        
    },
    image:{
        width:100,
        height:100,
        margin: 20,
    }
    
})