# My Weather Mood
A small responsive application to show different messages and images based on the user's preferred weather conditions and the OpenWeatherMap API response using React and Redux.

The user can set his/her preferred weather type, temperature and humidity and if actual values are in the tolerance range, a positive message get displayed. Otherwise, a negative text. (See the table below)
To modify the tolerances, change the values in `src/config.js`.
## Commands
- To start locally using webpack-dev-server, run `yarn start`.
- To build the assets into the `dist` folder, run `yarn run build`.

## Cases
| Weather condition | Positive case                                                            | Negative case                                              |
| ----------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Clear             | `Oh, Happy Day!`                                                         | `No clue, how you cannot love this...`                     |
| Thunderstorm      | `How can you like this? I am so afraid!`                                 | `Better to hide under the bed.`                            |
| Drizzle           | `Well, if you like when it is slightly wet...`                           | `At least it is not raining so much yet...`                |
| Rain              | `If you like when your shoes and socks get wet, it is perfect!`          | `Let's cry together with the sky...`                       |
| Snow              | `'It's beautiful, post it on Facebook! Maybe someone did not notice it.` | `Common! Don't worry, you can build a snowman!`            |
| Clouds            | `It's not that bad, but why don't you want to see the sun?`              | `The sun is hiding, but don't worry, just keep smiling :)` |