export default {
  services: {
    stackoverflow: {
      service: "stackoverflow",
      url: "https://api.stackexchange.com/2.3/search",
      parameters: {
        order: "desc",
        sort: "activity",
        site: "stackoverflow",
        intitle: "",
      },
    },
    wikipedia: {
      service: "wikipedia",
      url: "https://en.wikipedia.org/w/api.php",
      parameters: {
        action: "opensearch",
        search: "",
      },
    },
  },
};
