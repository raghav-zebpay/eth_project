const PushAPI =require("@pushprotocol/restapi");
const ethers= require("ethers");
const PK = '16db23b0912c1bf92052284511f025f3774023e20a031d0cc093b81dbaabec69'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);
const sendNotification = async() => {
  try {
    // apiResponse?.status === 204, if sent successfully!
const apiResponse = await PushAPI.payloads.sendNotification({
  signer,
  type: 4, // subset
  identityType: 2, // direct payload
  notification: {
    title: `[SDK-TEST] notification TITLE:`,
    body: `[sdk-test] notification BODY`
  },
  payload: {
    title: `[sdk-test] payload title`,
    body: `sample msg body`,
    cta: '',
    img: ''
  },
  recipients: ['eip155:5:0x032e76a97513d6Fba413B9AA908B663424727e05'], // recipients addresses
  channel: 'eip155:5:0x32FAb1A2178e0013c82Ce58f2fEA6e2469090bCB', // your channel address
  env: 'staging'
});
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}
sendNotification();