import { TonClient } from "ton";
import { getHttpEndpoint } from "@orbs-network/ton-access";
import { getNetwork } from "./hooks/useNetwork";

const endpointP = 'https://testnet.toncenter.com/api/v2/jsonRPC';
const apiKey = '52f1cd63bb4586a2974745793500f943375d5fe5c3c002de439fd5b484764a0d';

async function _getClient() {
  return new TonClient({
    endpoint: await endpointP,
    apiKey: await apiKey
  });
}


const clientP = _getClient();

export async function getClient() {
  return clientP;
}

export async function getEndpoint() {
  return endpointP;
}
