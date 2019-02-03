# KamGag

## Description
KamGag is a 9gag-like, only difference is that memes are about Kaamelott.
Once you have published a meme, refresh by pulling down the list.

You can find the app on expo: [KamGag](https://expo.io/@iqyu/KamGag)


## ToDo
- [x] Setup Redux
  - [x] Create Actions
  - [x] Create Reducers
- [ ] Firebase
  - [x] Install Firebase
  - [x] Link Firebase
  - [x] Create users collection
  - [ ] Create posts collection (set up but doesn't work, need more time :/)
- [x] Create new Posts
- [x] SignIn
- [x] SignUp
- [x] SignOut (can't reach button due to a bug when switching sign in/sign out)
- [x] Add photo to post

## Start KamGag
- Activate Firebase
    - Generate a project on firebase
    - Enable email/password authentication
    - Export firebase config and add it to `env.js`
- Open a terminal
- Go to KamGag folder
- `npm i` to install dependencies
- `npm start` will launch the dev tools

## Publish KamGag on Expo
- `expo publish` then signin your Expo account

## Build .apk and .ipa KamGag
- `expo build:android` to build your apk
- `expo build:ios` to build your ipa
