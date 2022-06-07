import Caver from 'caver-js';

// export const config = {
//     rpcURL: 'https://api.baobab.klaytn.net:8651/',
// };

// export const cav = new Caver(config.rpcURL);

// export default cav;

const getBlockNumberValue = async () => {
  const cav = new Caver('https://api.baobab.klaytn.net:8651/');
  const blockNumberValue = await cav.rpc.klay.getBlockNumber();
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
  console.log('blockNumber', blockNumberValue, parseInt(blockNumberValue));
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
};

export default getBlockNumberValue;
