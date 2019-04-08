import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Header } from 'react-native-elements';
import { Switch, NativeRouter, Route, Link} from 'react-router-native';
import Cards from './Cards';
import CardDetails from './CardDetails';

console.disableYellowBox = true;

export default class App extends React.Component {
  state = { cards: [
    { id 0, name: "card 1"},
    { id 1, name: "card 2"},
    { id 2, name: "card 3"},
  ]}
  render() {
    return (
      <NativeRouter>
      <View>
        <Header
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View>
        <Link to="/cards"><Text style={styles.text}>Cards</Text></Link>
      </View>
      <View>
      <Switch>
        < Route exact path="/cards" render={(props) =>/>
        <Cards
        cards={this.state.cards}
        />
    )}/>
    <Route exact path="/card/:id" render={(props) => {
      let cardPosition = props.location.pathname.replace('./card/', '');
      return (
        <CardDetails
        card={this.state.cards[cardPosition]}
        />
      )
    }}/>
        </Switch>
    </View>
    
      <NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
text: {
  fontSize: 20,
  fontWeight; "bold",
},
})
