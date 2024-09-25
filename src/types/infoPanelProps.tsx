import CityInfo from "./cityInfo";
import WeatherInfo from "./weatherInfo";

export default interface infoPanelProps {
  location: {
    city: CityInfo;
    list: WeatherInfo[];
  };
}
