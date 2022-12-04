const PushAPI =require("@pushprotocol/restapi");
const ethers= require("ethers");
const { arrayify } = require("ethers/lib/utils");
const config = require("./config")
const PK = config.channelPrivateKey; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);


module.exports.sendNotification = async(add) => {
  // console.log(add)
  try {
    // apiResponse?.status === 204, if sent successfully
const apiResponse = await PushAPI.payloads.sendNotification({
  signer,
  type: 3, // subset
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
  recipients: `${add}`, // recipients addresses
  channel: `eip155:5:${config.ChannelId}`, // your channel address
  env: 'staging'
});
    // apiResponse?.status === 204, if sent successfully!
    // console.log('API repsonse: ', apiResponse.status);
    console.log("Push called for add ",add)
  } catch (err) {
    console.error('Error: ', err);
  }
}
// sendNotification();