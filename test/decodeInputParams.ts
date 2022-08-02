//
import {Web3ABICoder} from "../src/index";

const abi = [{
    "inputs": [{
        "components": [{
            "components": [{"internalType": "uint256", "name": "salt", "type": "uint256"}, {
                "internalType": "address",
                "name": "user",
                "type": "address"
            }, {"internalType": "uint256", "name": "network", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "intent",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "delegateType", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }, {
                "internalType": "contract IERC20Upgradeable",
                "name": "currency",
                "type": "address"
            }, {
                "internalType": "bytes",
                "name": "dataMask",
                "type": "bytes"
            }, {
                "components": [{
                    "internalType": "uint256",
                    "name": "price",
                    "type": "uint256"
                }, {"internalType": "bytes", "name": "data", "type": "bytes"}],
                "internalType": "struct Market.OrderItem[]",
                "name": "items",
                "type": "tuple[]"
            }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
                "internalType": "bytes32",
                "name": "s",
                "type": "bytes32"
            }, {"internalType": "uint8", "name": "v", "type": "uint8"}, {
                "internalType": "uint8",
                "name": "signVersion",
                "type": "uint8"
            }], "internalType": "struct Market.Order[]", "name": "orders", "type": "tuple[]"
        }, {
            "components": [{
                "internalType": "enum Market.Op",
                "name": "op",
                "type": "uint8"
            }, {"internalType": "uint256", "name": "orderIdx", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "itemIdx",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "price", "type": "uint256"}, {
                "internalType": "bytes32",
                "name": "itemHash",
                "type": "bytes32"
            }, {
                "internalType": "contract IDelegate",
                "name": "executionDelegate",
                "type": "address"
            }, {"internalType": "bytes", "name": "dataReplacement", "type": "bytes"}, {
                "internalType": "uint256",
                "name": "bidIncentivePct",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "aucMinIncrementPct", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "aucIncDurationSecs",
                "type": "uint256"
            }, {
                "components": [{
                    "internalType": "uint256",
                    "name": "percentage",
                    "type": "uint256"
                }, {"internalType": "address", "name": "to", "type": "address"}],
                "internalType": "struct Market.Fee[]",
                "name": "fees",
                "type": "tuple[]"
            }], "internalType": "struct Market.SettleDetail[]", "name": "details", "type": "tuple[]"
        }, {
            "components": [{"internalType": "uint256", "name": "salt", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }, {"internalType": "uint256", "name": "amountToEth", "type": "uint256"}, {
                "internalType": "uint256",
                "name": "amountToWeth",
                "type": "uint256"
            }, {"internalType": "address", "name": "user", "type": "address"}, {
                "internalType": "bool",
                "name": "canFail",
                "type": "bool"
            }], "internalType": "struct Market.SettleShared", "name": "shared", "type": "tuple"
        }, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {
            "internalType": "bytes32",
            "name": "s",
            "type": "bytes32"
        }, {"internalType": "uint8", "name": "v", "type": "uint8"}],
        "internalType": "struct Market.RunInput",
        "name": "input",
        "type": "tuple"
    }], "name": "run", "outputs": [], "stateMutability": "payable", "type": "function"
}, {
    "inputs": [
        {"internalType": "bytes32[]", "name": "itemHashes", "type": "bytes32[]"},
        {
            "internalType": "uint256",
            "name": "deadline",
            "type": "uint256"
        },
        {"internalType": "uint8", "name": "v", "type": "uint8"},
        {
            "internalType": "bytes32",
            "name": "r",
            "type": "bytes32"
        },
        {"internalType": "bytes32", "name": "s", "type": "bytes32"}],
    "name": "cancel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}];

(async () => {
    const coder = new Web3ABICoder(abi)

    const cancelInput = "0x2295f9bf00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000062d9573b000000000000000000000000000000000000000000000000000000000000001beb7df01a3b75c58efdc3b82e9791bd538216624bd05d7d2582efa44baab4393147c0620ecbe9c9383f323872ff967b458dc9a2ac651a0c63a9b010e3b439e4f400000000000000000000000000000000000000000000000000000000000000012e041b97c88c85ac16058f65f9af840f16d5dde77a7a70d2e6003b18b05d43d4"
    // const cancelData = coder.decodeInput(cancelInput)
    // const foo1 = coder.decodeInputParams("cancel","0x"+cancelInput.substring(10,cancelInput.length))
    // console.log(foo1)

    const cancelInputParams = "0x0000000000000000000000000000000000000000000000000000000000000020a00000000000000000000000000000000000000000000000000000000062d96221000000000000000000000000000000000000000000000000000000000000001bf8af3ae4f05fad891902d748fb18c0ec83694c1cc73f4ab550c58d38150b561e6627c22bfa575bb2156f2c3c5f00976cdca86d9967728f61a0b80d6f28241a390000000000000000000000000000000000000000000000000000000000000001c18ec3bc9751069821fe24be7a94c995b60c27718e732dd776b652c04fddec13"
    const foo = coder.decodeInputParams("cancel", "0x"+cancelInputParams.substring(66,cancelInputParams.length))


    // console.log(bnToString(decodeCancelInput(input)))
    // console.log()
    const cancelType = coder.getFunctionSignature('cancel')
    // console.log(coder.abiCode.decode(
    //     cancelType,
    //     cancelInput
    // ))




    const input = "0x357a150b00000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000048000000000000000000000000000000000000000000000000000019a51d014f72b0000000000000000000000000000000000000000000000000000000062d89772000000000000000000000000000000000000000000000000016345785d8a0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020e30b5a64960a08dfb64beb8ab65d860cd71da700000000000000000000000000000000000000000000000000000000000000005e02ce18c1fb5070a333a12fdeed607f0b65805ff207ab4cbc21bcb1bbd3533b45015f993ed29a9ed1a89117ea43fc4839df8664697f1a1f106dd5c4b915867e000000000000000000000000000000000000000000000000000000000000001b00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000003a54b460c8316840af0ff0ada6d09fd100000000000000000000000032f4b63a46c1d12ad82cabc778d75abf9889821a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000062d8508e000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000001c0798bd5b3e785c29084e869d2de8e50dfe1e507356854d35f460911531c038433545f7ad8e505cdd20429d02dd560eb52cc1b5e9eaa40dc2cc8b3ff1cb0e198ff000000000000000000000000000000000000000000000000000000000000001b000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000001aa535d3d0c000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000001dfe7ca09e99d10835bf73044a23b73fc20623df00000000000000000000000000000000000000000000000000000000001117650000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001aa535d3d0c000033acd52bb1e4feaecf5eda0c69cee72241f3093eebc380a36edfd9c79f64d8aa000000000000000000000000f849de01b080adc3a814fabe1e2087475cf2e35400000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000001388000000000000000000000000d823c605807cc5e6bd6fc0d7e4eea50d3e2d66cd"

    const data = coder.decodeInput(input)
    // console.log(JSON.stringify(data,null,2))
    const funcName = coder.getFunctionName(input.substring(0, 10))
    console.log(funcName)
    const inputCode = "0x0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000016000000000000000000000000000000000000000000000000000000000000004800000000000000000000000000000000000000000000000000001d7f8eff6deee0000000000000000000000000000000000000000000000000000000062d891260000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020e30b5a64960a08dfb64beb8ab65d860cd71da70000000000000000000000000000000000000000000000000000000000000000caf916a2c9756332310c5c2a63cc167a9e2d0cfe0cae9c362b23cd9cc3b53bb44548883fcc49f6a98e949d26ef80d169bfad3bc8c681324aafd9021a5360b3f1000000000000000000000000000000000000000000000000000000000000001c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000e768562df4fcd64a1cf0f48ff110e25100000000000000000000000032f4b63a46c1d12ad82cabc778d75abf9889821a0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000062d83ddc000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001a000000000000000000000000000000000000000000000000000000000000001c01d68ba32c73818490554bd555583af926eaa194f3f63510c8edec2a9f898c17c73c7e52bd001f2685e54afd362736af0fb3fc19acf24842b454c1674956347bf000000000000000000000000000000000000000000000000000000000000001b00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000186cc6acd4b000000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000010000000000000000000000001dfe7ca09e99d10835bf73044a23b73fc20623df0000000000000000000000000000000000000000000000000000000000111765000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000186cc6acd4b0000bca5a516011346295f48a510bb67ef818f73939e2d7dacaf9d18a9115fdffcfa000000000000000000000000f849de01b080adc3a814fabe1e2087475cf2e35400000000000000000000000000000000000000000000000000000000000001600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000001388000000000000000000000000d823c605807cc5e6bd6fc0d7e4eea50d3e2d66cd"

    const inputParams = coder.decodeInputParams(funcName, inputCode)
    console.log(JSON.stringify(inputParams, null, 2))


})()
