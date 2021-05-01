require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install loan off seed drift remember machine slow gloom clog slot gasp'; 
let testAccounts = [
"0xd9a925ea806fb1483e68b6faa380571b34ae8d42936732506805e6d9a1352b4c",
"0x7dbc48fc6b2062158fedc5016ac95f1db4e7aad36152ffd2f2ba22cff2360747",
"0x6b4e0d814d6770a2184d44563f296cb88beb2862842ac46aefa51dd3afef2f60",
"0x3a82c65aaca1dd7f76e0fdf2392f49b48b077f1a592051cc8d50695633425de0",
"0x4cf5b069609a8f022ba89a2f5723006754696783c74ea86da23594690ec8ef7f",
"0x05b880722109973b58a732027e1816969299b2e77bd61ff539d2eb6ae7855697",
"0x148143b222221aad293a1f10615db54e2e19628efc300e9dd4e47238c88b1062",
"0xfe0d15867b9ab1ebd75f1d79daadab13bab0d9c3c457675b95ac16892e7e34ff",
"0x155c33187e5a14ff5a9a4cf229ed7d838215d88a47e8c5081ce5a07759155f61",
"0x22ce4bc1a583fa6eb36e814a030dee81b22079cb92e7baba31528cc4b5e87f27"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

