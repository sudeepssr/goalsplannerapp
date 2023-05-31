import {StyleSheet, Text, Pressable} from 'react-native';

function GoalItem(props){
    return(                     //to return the code responsible for outputing a single goal item
                                //creating event listener for deleting items which are pressed on app screen
        <Pressable android_ripple={ {color:'white'} } onPress={props.onDeleteItem.bind(this, props.id)} >    
                <Text style={styles.goalItem} > {props.itemValue} </Text>
        </Pressable>
    );
}
//whatever needs to be made pressable, has to be passed inside the pressable component.
//.bind() method in onPress helps to pass the id obtained here back to the deleteGoalHandler(id) method there. 
//This is how id can be passed to methods there.
export default GoalItem;

const styles= StyleSheet.create({
    goalItem:{
        margin:5,
        marginVertical:5,
        borderRadius:20,
        backgroundColor:'grey',
        color:'white',
        padding: 8,
    },
    
})
