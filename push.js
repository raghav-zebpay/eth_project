const PushAPI =require("@pushprotocol/restapi");
const ethers= require("ethers");
const config = require("./config")
const PK = config.channelPrivateKey; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);


module.exports.sendNotification = async(add) => {
  try {
    // apiResponse?.status === 204, if sent successfully!
const apiResponse = await PushAPI.payloads.sendNotification({
  signer,
  type: 4, // subset
  identityType: 2, // direct payload
  notification: {
    title: `🔔Your stake at compund if aabout to liquidate🔔`,
    body: `kindly refill or withdraw`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `hello world`,
    cta: '', // yet to be added for Compound
    img: '' //
  },
  recipients: [add], // recipients addresses
  channel: `eip155:5:${config.ChannelId}`, // your channel address
  env: 'staging'
});
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse.config.data);
  } catch (err) {
    console.error('Error: ', err);
  }
}
// sendNotification();