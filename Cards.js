import React from "./react";
import { ScrollView } from "./react-native";
import MyCard from "./MyCard";
import { prependOnceListener } from "cluster";

const Cards = (props) => {
    return (
        <ScrollView>
          {
              props.cards.map{(card) => (
                  <MyCard
                  key{card.id}
                  card={card}
                  />
              ))
          }
        </ScrollView>
     )
}
 
export default ;