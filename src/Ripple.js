import React, { Component } from "react";
import { View, Animated, StyleSheet } from "react-native";

class Ripple extends Component {
  state = {
    animated: new Animated.Value(0),
    opacityA: new Animated.Value(1),
    animated2: new Animated.Value(0),
    opacityA2: new Animated.Value(1)
  };

  componentDidMount() {
    const { animated, opacityA, animated2, opacityA2 } = this.state;

    Animated.stagger(1000, [
      Animated.loop(
        Animated.parallel([
          Animated.timing(animated, {
            toValue: 3,
            duration: 3000
          }),
          Animated.timing(opacityA, {
            toValue: 0,
            duration: 3000
          })
        ])
      ),

      Animated.loop(
        Animated.parallel([
          Animated.timing(animated2, {
            toValue: 3,
            duration: 3000
          }),
          Animated.timing(opacityA2, {
            toValue: 0,
            duration: 3000
          })
        ])
      )
    ]).start();
  }

  render() {
    const { animated, opacityA, animated2, opacityA2 } = this.state;

    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "rgba( 153, 0, 0, 0.4 )",
            opacity: opacityA,
            transform: [
              {
                scale: animated
              }
            ]
          }}
        >
          <Animated.View
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              backgroundColor: "rgba( 0, 255,  0, 0.4 )",
              opacity: opacityA2,
              transform: [
                {
                  scale: animated2
                }
              ]
            }}
          />
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "cornflowerblue"
  }
});

export default Ripple;
