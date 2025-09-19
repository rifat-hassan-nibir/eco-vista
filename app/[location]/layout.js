import Image from "next/image";
import BackgroundImage from "../public/background.png";

function LocationLayout({ children, weather, aqi, wind, temperature }) {
  return (
    <div className="wrapper">
      <div className="overlay"></div>
      <Image src={BackgroundImage} className="bg-img" width={700} height={1200} alt="background" />
      <main className="!z-50 w-full">
        <div className="container">
          <div className="grid grid-cols-12 gap-y-8 py-16 lg:gap-8 2xl:gap-20 2xl:py-20">
            {children}
            {weather}
            {aqi}
            {wind}
            {temperature}
          </div>
        </div>
      </main>
    </div>
  );
}

export default LocationLayout;
