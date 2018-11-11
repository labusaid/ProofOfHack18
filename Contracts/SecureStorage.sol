pragma solidity ^0.4.18;

contract SecureStorage {
  
  struct UserData {
    string encryption_public_key;
    string IPFS_address;
  }

  struct SellableData {
    address owner;
    bool isSold;
    uint price;
  }

  mapping(string => SellableData) data;

  mapping (address => UserData) userToData ;

  function addSellableData(string id, uint price) public {
    data[id] = SellableData(msg.sender, false, price);
  }

  function createUserAccess(string _data_id, string encryption_public_key) public payable {
    require(data[_data_id].isSold == false);
    require(msg.value >= data[_data_id].price);
    userToData[msg.sender] = UserData(encryption_public_key, ''); // Not setting ipfs address
    data[_data_id].owner.transfer(msg.value);
  }

  function setIPFSAddress(address userAddress, string ipfsStoredURL) public {
    userToData[userAddress].IPFS_address = ipfsStoredURL;
  }

  function getIPFSAddress(address userAddress) public constant returns (string) {
    require(msg.sender == userAddress);
    return userToData[userAddress].IPFS_address;
  }
  
  function getSellableData(string _data_id) public view returns (uint) {
      return data[_data_id].price;
  }

}