import { useQuery } from "@tanstack/react-query";
import fetchWithError from "../../services/fetchWithError";
import { Address } from "viem";
import { ChainContainer } from "../../../containers";
import { CONTRACTS_TYPE } from "../../../contracts/types";

export const useContracts = (chainId: number) => {
  const { roosterApiUrl } = ChainContainer.useContainer();

  const apiContractsQuery = useQuery<{
    contracts: Record<string, Address>;
    message: string;
  }>({
    queryKey: ["getApiContracts", chainId],
    queryFn: () => fetchWithError(`${roosterApiUrl}/contracts`),
  });

  return {
    contracts: apiContractsQuery.data?.contracts,
    isFetched: apiContractsQuery.isFetched,
    query: apiContractsQuery,
  };
};

export const useContractAddress = (chainId: number, type: CONTRACTS_TYPE) => {
  const { contracts } = useContracts(chainId);

  return contracts ? contracts[`${type}`] : undefined;
};
