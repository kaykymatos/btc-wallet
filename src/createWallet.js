const bip32 = require('bip32');
const bip39 = require('bip39');
const bitcoin = require('bitcoinjs-lib');

const network = bitcoin.networks.testnet;

const path = "m/44'/1'/0'/0/0"; // BIP44 path for testnet
let mnemonic = bip39.generateMnemonic();
const seed = bip39.mnemonicToSeedSync(mnemonic);
let root = bip32.fromSeed(seed, network);

let account = root.derivePath(path);
let btcAddress = bitcoin.payments.p2pkh({ pubkey: account.publicKey, network }).address;

console.log("Carteira gerada:")
console.log("Bitcoin Address:", btcAddress);
console.log("chave privada:", account.toWIF());
console.log("Mnemonic:", mnemonic);