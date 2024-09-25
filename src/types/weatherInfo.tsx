import Main from "./main";
import Weather from "./weather";
import Wind from "./wind";

export default interface WeatherInfo {
  main: Main;
  weather: Weather[];
  wind: Wind;
  dt_txt?: string;
}
