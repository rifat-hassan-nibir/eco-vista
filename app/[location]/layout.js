function LocationLayout({ children, weather, aqi, wind, temperature }) {
  return (
    <div className="wrapper">
      {children}
      {weather}
      {aqi}
      {wind}
      {temperature}
    </div>
  );
}

export default LocationLayout;
