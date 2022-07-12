require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena other seed dance cruise million pudding guess basic frame story'; 
let testAccounts = [
"0x91e5f3818a18b5b43582dfb3fe198592e6b43d8a04f594a88ad0cd20beedd86c",
"0xb0c8467be78ca1644c2b3dea318e3938f41f79eee3bb49720449366d97fdf2fa",
"0x83a32a4d9d3d469fa735b98af0cd3b3beced8f228727991494d04ac9dc829439",
"0x5219b793505d3df98c7982c8d96fd6f3574b2c9aeadc854668a48b8d372b2f41",
"0xb2f92bebf7fedddde3db6e1cc07ba5cc7959983819099974d4abac0ee93c1202",
"0xe2c2eb509ca8d64c08d3d23ab86389337e074688debdf2af132d69eafc2c3fe0",
"0x1d15205081ce5418e5bcb90927f7524008b0f1abdb37d9b528f93eb7712de509",
"0x66406082f4872f98af7a50e91809b2b4b9cdc83a400cb976630448332c1bb839",
"0xe1ad3490256e024682296bff633f05284ac5122f12d0acae82ecf551c8921868",
"0xe4317b22f44063a3d84c9ae5be43f929561be7fdedf8a01337d37db431bbc7a6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

