import React, { Component } from 'react'

import { Connect, SimpleSigner } from 'uport-connect'


//export let uport = new Connect('TruffleBox')
// export const web3 = uport.getWeb3()

// Smart Contract
const contractAddress = '0x84313b33896022ed28dd3cf00392af2404791688';
const abi = require('./abi');
const mycontract = web3.eth.contract(abi);
const myContractInstance = mycontract.at(contractAddress);

// metaMask listener
window.addEventListener('load', function() {
  // Checking if Web3 has been injected by the browser (Mist/MetaMask)
     if (typeof web3 !== 'undefined') {
          // Use Mist/MetaMask's provider
          window.web3 = new Web3(web3.currentProvider);
      } else {
          console.log('No web3? You should consider trying MetaMask!')
          // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
          window.web3 = new Web3(new Web3.providers.HttpProvider("https://localhost:8545"));
  }
});




// export const uport = new Connect('UpTown', {
//      clientId: '2ox3yhAnwM7eahsdNwvovanM1xzRggp9gQi',
//      network: 'rinkeby',
//      signer: SimpleSigner('c33b126055d33a58a3a6e57790362417e585b8a7865c0ec9a93aa7f936e65442')
//    })
// export const web3 = uport.getWeb3()




class Dashboard extends Component {
  constructor(props, { authData }) {
    super(props)
    authData = this.props
  }

  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Dashboard</h1>
            <p><strong>Hello {this.props.authData.name}!</strong> Welcome to UpTown Alpha Dashboard.</p>
          </div>
        </div>
      </main>
    )
  }
}

export default Dashboard

// import ABI from './contract_abi.json'

// export const DEPLOYED_ADDRESS = '0x8fa764933b666ef08ec9368ce8a4a34f564e063c'

// //const ERC223Contract = uport.contract(ABI).at(DEPLOYED_ADDRESS)

// export const balance = ( address, callback ) => {
//   var FundContract = uport.contract(ABI).at(DEPLOYED_ADDRESS);
//   //var fundContractInstance = FundContract.at( DEPLOYED_ADDRESS );
//   //var candidateuPortId = fundContractInstance.candidateuPortId(web3.eth.getCoinbase());
//   var address = "0x627306090abaB3A6e1400e9345bC60c78a8BEf57"
//   FundContract.balanceOf(address, function (e,r) {
//     callback(r)
//   })
// }
// console.log("balance", balance)

// ERC223Contract.balanceOf('0x627306090abaB3A6e1400e9345bC60c78a8BEf57', 'balanceReq')
//uport.onResponse('balanceReq').then(payload => {
//  const balance = payload.res
//  console.log("balance", balance)
// })
