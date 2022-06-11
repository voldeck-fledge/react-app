import React from "react";
import snapshot from '@snapshot-labs/snapshot.js';
import { Web3Provider } from '@ethersproject/providers';

const hub = 'https://hub.snapshot.org'; // or https://testnet.snapshot.org for testnet
const client = new snapshot.Client712(hub);

const space = 'thefledge.eth';
const strategies = [
  {
    name: 'erc20-balance-of',
    params: {
      address: '0x5118aeC3AfCca3f1e21733eE9C88BB800AFE6F7b',
      symbol: 'FLDG',
      decimals: 18
    }
  }
];
const network = '137';
const voters = [
  '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
  '0xeF8305E140ac520225DAf050e2f71d5fBcC543e7',
  '0x1E1A51E25f2816335cA436D65e9Af7694BE232ad'
];
const blockNumber = 11437846;

snapshot.utils.getScores(
  space,
  strategies,
  network,
  voters,
  blockNumber
).then(scores => {
  console.log('Scores', scores);
});

function Vote() {
  return (
    <div className="vote">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">vote</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vote;