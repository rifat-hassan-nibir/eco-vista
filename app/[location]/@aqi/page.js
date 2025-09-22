import AQIcomponent from "@/app/components/AQIcomponent";

function Aqi({ params: { location }, searchParams: { latitude, longitude } }) {
  return <AQIcomponent lat={latitude} lon={longitude} />;
}

export default Aqi;
