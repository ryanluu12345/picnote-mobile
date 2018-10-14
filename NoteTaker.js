import React from 'react';
import {StyleSheet, Text, View, TextInput, Image,ImageBackground, ScrollView, Button, CameraRoll, TouchableOpacity,TouchableHighlight,KeyboardAvoidingView } from 'react-native';
import { ImagePicker,Camera, Permissions } from 'expo';

export default class NoteTaker extends React.Component {

    constructor(props){
        super(props);
        this.state = {text:"",courseCode:"",pictures:"http://vectips.com/wp-content/uploads/2017/03/project-preview-large-2.png"};
        this.formData = new FormData();
        this.takeAndUploadPhotoAsync = this.takeAndUploadPhotoAsync.bind(this);
        this.handleSubmitClick = this.handleSubmitClick.bind(this);
    }


  handleSubmitClick(){
    let uri = 'https://799b1de2.ngrok.io/api/API_KEY/' + this.state.courseCode + '/post_note';
    this.formData.append("note", this.state.text);
    this.formData.append("course_code", this.state.courseCode);
    fetch(uri, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
      body: this.formData
    });

    //uri = 'https://799b1de2.ngrok.io/api/API_KEY/' + '1' + '/get_notes_by_section';
    //fetch(uri).then((response) => response.text()).then((responseText) => {console.log(JSON.parse(responseText));});
    return this.props.navigation.navigate('ThankYou');
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
    // Assume "photo" is the name of the form field the server expects
    this.formData.append('photo', { uri: localUri, name: filename, type });
}

  render() {
    return (

    <KeyboardAvoidingView
        behavior="padding">
      <ScrollView>
      <View style={styles.container}>
        <View style={styles.imgInput}>
        <Text style={styles.noteTitle}> Upload Photo</Text>
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

        <View style={styles.noteInputText}>
            <Text style={styles.noteTitle}> Enter your Note:</Text>
            <TextInput
                multiline={true}
                style={styles.textInput}
                placeholder=""
                onChangeText={(text)=>this.setState({text:text})}
            />

        </View>
        <View style={styles.codeInputText}>
          <Text style={styles.noteTitle}>Course Code:</Text>
          <TextInput
                multiline={false}
                style={styles.textInput}
                placeholder=""
                onChangeText={(courseCode)=>this.setState({courseCode:courseCode})}
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
      </ScrollView>
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
    backgroundColor: '#ffffff'
  },

  noteTitle:{
    height:40,
    fontSize: 20,
    fontWeight: '400',
    fontFamily: 'Noteworthy',
    textAlign:'center',
  },

  textInput:{
      width:300,
      height:80,
      fontSize:35,
      borderColor:'purple'
  },

  imgInput:{
    height:300
  },

  noteInputText:{
    height:120,
    marginTop: 35,
    marginBottom:10
  },

  codeInputText:{
    height:120,
    marginBottom:10
  },

  submitButton:{
    backgroundColor:"#fa8072",
    width:40,
    height:40,
    marginTop:30,
  },

  capture:{
      height:40,
      width:40,
  },

  verifyImage:{
      height:290,
      borderRadius:20
  }

});
