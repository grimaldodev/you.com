import axios from "axios";

function sanitizeData(serviceName, originalServiceResponse) {
  let newDataResponse = null;
  switch (serviceName) {
    case "stackoverflow":
      newDataResponse = originalServiceResponse.items.map((item) => {
        return {
          title: item.title,
          summary: item.title,
          url: item.link,
        };
      });
      break;
    case "wikipedia":
      newDataResponse = originalServiceResponse[3].map((item) => {
        return {
          title: item,
          summary: item,
          url: item,
        };
      });
      break;
    default:
      newDataResponse = originalServiceResponse;
      break;
  }
  return newDataResponse;
}

export default async function (serviceConfig) {
  const { service, url, parameters } = serviceConfig;

  let isLoading = true;
  let serviceResponse = null;
  let serviceError = null;

  try {
    const responseServer = await axios.get(url, {
      params: parameters,
    });
    serviceResponse = sanitizeData(service, responseServer.data);
  } catch (err) {
    serviceError = err;
  } finally {
    isLoading = false;
  }

  return {
    serviceResponse,
    serviceError,
    isLoading,
  };
}
