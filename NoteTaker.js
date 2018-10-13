import React from 'react';
import {StyleSheet, Text, View, TextInput, Image,ImageBackground, Button, CameraRoll, TouchableOpacity,TouchableHighlight,KeyboardAvoidingView } from 'react-native';
import { ImagePicker,Camera, Permissions } from 'expo';

export default class NoteTaker extends React.Component {

    constructor(props){
        super(props);
        this.state = {text:"",pictures:"http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png"};
    }


  handleSubmitClick(){
      console.log("yeet");
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    const extStorage = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  async getPhotosFromGallery(){

      CameraRoll.getPhotos({first:1000})
      .then(
          res=>{
              console.log("good");
          }
      )
  }

  async takeAndUploadPhotoAsync() {
    // Display the camera to the user and wait for them to take a photo or to cancel
    // the action
    let result = await ImagePicker.launchCameraAsync({
      aspect: [4, 3],
    });

    if (result.cancelled) {
      return;
    }

    // ImagePicker saves the taken photo to disk and returns a local URI to it
    let localUri = result.uri;
    let filename = localUri.split('/').pop();

    this.setState({pictures:localUri});
    console.log(this.state)

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;

    // Upload the image using the fetch and FormData APIs
    let formData = new FormData();
    // Assume "photo" is the name of the form field the server expects
    formData.append('photo', { uri: localUri, name: filename, type });
}

  render() {
    return (

    <KeyboardAvoidingView
        behavior="padding">
      <View style={styles.container}>
        <View style={styles.imgInput}>

        <TouchableHighlight
            style={styles.verifyImage}
            onPress={() => {
                this.takeAndUploadPhotoAsync();
            }}>
            <ImageBackground
            source={{uri:this.state.pictures}}
                style={styles.verifyImage}/>
          </TouchableHighlight>
        </View>

        <View style={styles.noteInput}>
            <Text style={styles.noteTitle}> Enter your note:</Text>
            <TextInput
                multiline={true}
                style={styles.textInput}
                placeholder=""
                onChangeText={(text)=>this.setState({text})}
            />
        </View>

        <Button
            onPress={this.handleSubmitClick}
            title="Send Note"
            color="#fa8072"
            opacity="0.7"
            style={styles.submitButton}
        />
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    padding:10,
  },

  noteTitle:{
    height:40,
    textAlign:'center',
  },

  textInput:{
      width:300,
      height:80,
      fontSize:35,
      borderColor:'purple'
  },

  imgInput:{
    height:300,
  },

  noteInput:{
    height:120,
    marginBottom:10,
  },

  submitButton:{
    backgroundColor:"#fa8072",
    width:40,
    height:40,
    marginTop:100,
  },

  capture:{
      height:40,
      width:40,
  },

  verifyImage:{
      height:250,
      borderRadius:20,
  }

});
