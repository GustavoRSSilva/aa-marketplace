// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {EntryPoint} from "../src/core/EntryPoint.sol";

contract EntryPointScript is Script {

    function setUp() public {}

    function run() public returns (EntryPoint) {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(deployerPrivateKey);

        EntryPoint entryPoint = new EntryPoint();

        vm.stopBroadcast();

        return entryPoint;
    }
}
