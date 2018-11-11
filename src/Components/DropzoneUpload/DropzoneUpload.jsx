import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import Dropzone from 'react-dropzone';
import FloatingActionButtons from '../UploadButton/UploadButton.jsx';

var request = require('superagent');
var apiBaseUrl = "http://localhost:4000/api/";

class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            filesPreview:[],
            filesToBeSent:[],
            printcount:10
        }
    }
    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        var filesToBeSent=this.state.filesToBeSent;
        filesToBeSent.push(acceptedFiles);
        if(filesToBeSent.length < this.state.printcount){
            filesToBeSent.push(acceptedFiles);
            var filesPreview=[];
            for(var i in filesToBeSent){
              filesPreview.push(<div>
                {filesToBeSent[i][0].name}
                <MuiThemeProvider>
                <a href="#"><FontIcon
                  className="material-icons customstyle"
                  color={blue500}
                  styles={{ top:10,}}
                >clear</FontIcon></a>
                </MuiThemeProvider>
                </div>
              )
            }
            this.setState({filesToBeSent,filesPreview});
          }
          else{
            alert("You have reached the limit of printing files at a time")
          }
       }
       handleClick(event){
        // console.log("handleClick",event);
        var self = this;
        if(this.state.filesToBeSent.length>0){
          var filesArray = this.state.filesToBeSent;
          var req = request.post(apiBaseUrl+'fileupload');
          for(var i in filesArray){
              // console.log("files",filesArray[i][0]);
              req.attach(filesArray[i][0].name,filesArray[i][0])
          }
          req.end(function(err,res){
            if(err){
              console.log("error ocurred");
            }
            console.log("res",res);
            alert("File printing completed")
          });
        }
        else{
          alert("Please upload some files first");
        }
      }
       render() {
        return (
          <div className="App">
          <MuiThemeProvider>
            <div>
             </div>
          </MuiThemeProvider>
              <center>
                <div>
                    You can upload upto {this.state.printcount} files at a time.
                </div>
                <Dropzone onDrop={(files) => this.onDrop(files)}>
                        <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <div>
                Files to be printed are:
                {this.state.filesPreview}
                </div>
              </center>
              <div>
              {this.state.printingmessage}
              </div>
          <MuiThemeProvider>
               <FloatingActionButtons label="Print Files" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </MuiThemeProvider>
              </div>
        );
      }
    }
    const style = {
      margin: 15,
    };
    export default UploadScreen;
