import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

class LandingPage extends Component {
  render() {
    return (
    <View style={landing_style.background}>
      <Text>PicNote Mobile</Text>
      <Image source = {require('assets/note_taking.png')} />
      <TouchableOpacity style={landing_style.button}/>
    </View>
    );

  }
}

const landing_style = StyleSheet.create({
  button: {
    borderRadius: 10,
    title: "Continue ->",
    color: "#ADD8E6",
    padding: 10
  },

  background: {
    backgroundColor: "#fffffa"
  }
});
