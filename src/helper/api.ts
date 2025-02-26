import Axios, { AxiosResponse } from "axios";

type Endpoint = "/get-project" | "/get-budget" | "/checkout";

const client = Axios.create({
  baseURL: "https://api.koders.in",
  headers: {
    "Content-Type": "application/json",
  },
});

interface Props {
  endpoint: Endpoint;
  payload: any;
}

export const sendPayload = async ({
  endpoint,
  payload,
}: Props): Promise<AxiosResponse> => {
  try {
    return await client.post(endpoint, payload);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
