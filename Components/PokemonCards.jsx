import { View, Text, ScrollView, Image, FlatList } from "react-native";
import React from "react";
import { StyleSheet, Platform } from "react-native";
import PokemonData from "../PokemonData";

const PokemonCards = () => {
  return (
    // <ScrollView>
    //     {PokemonData.map((pokemon)=>{
    //         return (
    //             <View style={Style.card}  key={pokemon.name} >
    //               <View style={Style.nameContainer}>
    //                 <Text style={Style.name}>{pokemon.name}</Text>
    //                 <Text style={Style.hp}>❤{pokemon.hp}</Text>
    //               </View>

    //               <Image style={Style.image} source={pokemon.image} resizeMode="contain"/>

    //               <View style={Style.typeContainer}>
    //                 <View style={[Style.badge , {borderColor:pokemon.borderColor}]}>
    //                     <Text style={Style.typeText}>{pokemon.type}</Text>
    //                     <Text style={Style.typeText}>{pokemon.emoji}</Text>
    //                 </View>
    //               </View>
    //               <View>
    //                 <Text>Moves : {pokemon.moves.join(",")}</Text>
    //               </View>
    //               <View>
    //                 <Text>Weakness : {pokemon.weaknesses.join(",")}</Text>
    //               </View>
    //             </View>

    //         );})}
    // </ScrollView>
   
      <FlatList
        data={PokemonData}
        renderItem={(pokemon) => {
            console.log(pokemon.item.name)
          return (
            <View style={Style.card} key={pokemon.name}>
              <View style={Style.nameContainer}>
                <Text style={Style.name}>{pokemon.item.name}</Text>
                <Text style={Style.hp}>❤{pokemon.item.hp}</Text>
              </View>

              <Image
                style={Style.image}
                source={pokemon.item.image}
                resizeMode="contain"
              />

              <View style={Style.typeContainer}>
                <View
                  style={[Style.badge, { borderColor: pokemon.item.borderColor }]}
                >
                  <Text style={Style.typeText}>{pokemon.item.type}</Text>
                  <Text style={Style.typeText}>{pokemon.item.emoji}</Text>
                </View>
              </View>
              <View>
                <Text>Moves : {pokemon.item.moves.join(", ")}</Text>
              </View>
              <View>
                <Text>Weakness : {pokemon.item.weaknesses.join(",")}</Text>
              </View>
            </View>
          );
        }}
      />
    
  );
};

const Style = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderWidth: 2,
    borderRadius: 10,
    margin: 16,
    padding: 16,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 2,
        shadowRadius: 5,
        shadowColor: "#333",
      },
      android: {
        elevation: 5,
      },
    }),
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
  },
  hp: {
    fontSize: 20,
  },
  image: {
    height: 160,
    width: "100%",
    marginBottom: 20,
  },
  typeContainer: {
    marginBottom: 30,
    alignItems: "center",
  },
  badge: {
    borderRadius: 20,
    borderWidth: 4,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 8,
    marginRight: 30,
    gap: 6,
  },
  typeText: {
    fontSize: 20,
  },
});

export default PokemonCards;
