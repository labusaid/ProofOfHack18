import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Abi from '../SecureStorage.json';
import Styles from '../Styles/Home.css';

var Web3 = require('web3');
class Home extends React.Component {
  constructor(prop) {
    super(prop);
    this.state = {
        key: '', 
        ownerAccount: '',
        contractAddress: '0xAd12c3776fdda9a04985d418B7A321a26AFBc521',
        keyValue: '',
        web3: {},
        MyContract: {},
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addSellableData = this.addSellableData.bind(this);
    this.getSellableData = this.getSellableData.bind(this);
    this.createUserAccess = this.createUserAccess.bind(this);
    this.setIPFSAddress = this.setIPFSAddress.bind(this);
    this.getIPFSAddress = this.getIPFSAddress.bind(this);
  }

  async componentDidMount () { 
        if (window.ethereum) {
            var web3 = new Web3(window.ethereum);
            this.setState({ web3: web3 })
            try {
                // Request account access if needed
                let account = await window.ethereum.enable();
                this.setState({ ownerAccount: account });
                console.log(this.state.ownerAccount);
            } catch (error) {
                // User denied account access...
                console.log('not good')
            }
        }
        else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            // Acccounts always exposed
        }
        
        var MyContract = new web3.eth.Contract(Abi, this.state.contractAddress);
        this.setState({ MyContract })
              
    }

    addSellableData() {
        this.state.MyContract.methods.addSellableData("a", 100).send({from: this.state.ownerAccount[0]}, function(error, result){
            console.log(error);
            console.log(result);
        });
    }

    createUserAccess() {
        let id = "a";
        
        this.state.MyContract.methods.createUserAccess("a", this.state.keyValue).send({from: this.state.ownerAccount[0], value: 100}, function(error, result){
            console.log(error);
            console.log(result);
        });
    }

    getSellableData() {
        this.state.MyContract.methods.getSellableData("a").call({from: this.state.ownerAccount[0]}, function(error, result){
            console.log(error);
            console.log(result);
        });
    }

    setIPFSAddress() {
        this.state.MyContract.methods.setIPFSAddress(this.state.ownerAccount[0], "www.ipfs/hash").send({from: this.state.ownerAccount[0]}, function(error, result){
            console.log(error);
            console.log(result);
        });
    }

    getIPFSAddress() {
        this.state.MyContract.methods.getIPFSAddress(this.state.ownerAccount[0]).call({from: this.state.ownerAccount[0]}, function(error, result){
            console.log(error);
            console.log(result);
        });
    }

  handleClick() {
   //this.setState({ togglePaymentIntput: !this.state.togglePaymentIntput });
  }

  handleChange(event) {
    this.setState({keyValue: event.target.value})
  }

  render() {
    return (
      <div className="home-outer-wrapper">
        <TextField
          id="outlined-name"
          label="Encryption Key"
          className="change"
          value={this.state.keyValue}
          onChange={this.handleChange}
          margin="normal"
          variant="outlined"
        />
        <div className="home-button-wrapper"> 
            <Button variant="contained" color="primary" onClick={this.createUserAccess}>
                Primary
            </Button>
        </div>
      </div>
    );
  }
}

export default Home;
