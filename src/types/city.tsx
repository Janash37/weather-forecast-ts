import CityInfo from "./cityInfo";
import WeatherInfo from "./weatherInfo";

export default interface City {
  city: CityInfo;
  list: WeatherInfo[];
}
