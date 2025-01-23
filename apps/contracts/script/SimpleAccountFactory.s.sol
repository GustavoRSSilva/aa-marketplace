// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {SimpleAccountFactory} from "../src/SimpleAccountFactory.sol";
import {IEntryPoint} from "../src/interfaces/IEntryPoint.sol";

contract SimpleAccountFactoryScript is Script {
    IEntryPoint entryPoint;

    constructor() {
        if (block.chainid == 80002) {
            address entryPointAddress = vm.envAddress("ENTRY_POINT_AMOY_ADDRESS");
            entryPoint = IEntryPoint(entryPointAddress);
        } else {
            revert("Not available network");
        }
    }
 

    function setUp() public {}

    function run() public returns (SimpleAccountFactory) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        SimpleAccountFactory simpleAccountFactory = new SimpleAccountFactory(entryPoint);

        vm.stopBroadcast();

        return simpleAccountFactory;
    }
}
