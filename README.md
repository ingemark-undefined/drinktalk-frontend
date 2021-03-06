# Drink&Talk

Drink&Talk app is made for you and your buddies to help you put front and center the most important thing when hanging out: communication without unnecessary phone checks. Simply create a game which the rest of your crew will join. During the countdown rest your phones on the table and do not touch them until the time runs out. Else, the loser of the game has to pay for a round for the entire crew. Have fun! 🙂

## 🛠️ Branches

| Name      | Description                                                            |
| --------- | ---------------------------------------------------------------------- |
| `main`    | Code of the latest release version                                     |
| `develop` | Contains code with new (not yet released) changes                      |

## 💡 Technologies
Android app is developed using React Native. One of the reasons we chose this technology is the possibility to have an iOS version of the app with the same codebase. Some of the libraries worth mentioning we are using are React Navigation, Redux, socket.io.

## 🚧 How to run
Clone the repo and add `.env` file in the root folder with its content being as follows:

```
WS_ENDPOINT=https://drinktalk.herokuapp.com
```

Then run the following commands in the root folder:

```
yarn
yarn android
```

## 🚀 Release build

The latest .apk can be downloaded from [here](https://github.com/ingemark-undefined/drinktalk-frontend/releases).
