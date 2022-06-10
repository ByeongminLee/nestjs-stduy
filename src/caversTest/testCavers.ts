import Caver from 'caver-js';

const getBlockNumberValue = async () => {
  const cav = new Caver('https://api.baobab.klaytn.net:8651/');
  const blockNumberValue = await cav.rpc.klay.getBlockNumber();
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
  console.log('blockNumber', blockNumberValue, parseInt(blockNumberValue));
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
};

export default getBlockNumberValue;
