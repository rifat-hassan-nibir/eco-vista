const data = [
  {
    location: "London",
    latitude: 51.5073219,
    longitude: -0.1276474,
  },
  {
    location: "New York",
    latitude: 40.712776,
    longitude: -74.005974,
  },
  {
    location: "Tokyo",
    latitude: 35.689487,
    longitude: 139.691711,
  },
  {
    location: "Sydney",
    latitude: -33.86882,
    longitude: 151.20929,
  },
  {
    location: "Dhaka",
    latitude: 23.810331,
    longitude: 90.412521,
  },
  {
    location: "Paris",
    latitude: 48.856613,
    longitude: 2.352222,
  },
  {
    location: "Toronto",
    latitude: 43.65107,
    longitude: -79.347015,
  },
  {
    location: "Cairo",
    latitude: 30.04442,
    longitude: 31.235712,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.906847,
    longitude: -43.172897,
  },
  {
    location: "Cape Town",
    latitude: -33.924869,
    longitude: 18.424055,
  },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;
  const found = data.find((item) => item.location.toLowerCase() === location.toLowerCase());
  return found || {};
}

export { getLocations, getLocationByName };
