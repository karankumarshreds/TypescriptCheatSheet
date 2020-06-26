const add = (a: number, b: number): number => {
    return a + b;
};

// Since sum of two numbers will be number only 
// hence we can NOT use it 
const subtract = (a: number, b: number) => {
    return a - b;
}

// NOTE : Always use it because it will help you to 
// remind in case you forget to return a value 

// If you do not want to retur any value 
const logger = (message: string): void => {
    console.log(message);
};

const forecast = {
    date: new Date(),
    weather: 'sunny',
    something: 'something'
};
const logWeather = (forecast: { date: Date, weather: string }): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}
/*********************************************************
 * BETTER WAY = USE DESTRUCTURING INSTEAD OF ANNOTATIONS
 ********************************************************/
const logWeather2 = ({ date, weather }: { date: Date, weather: string }): void => {
    console.log(date);
    console.log(weather);
};
logWeather2(forecast);