// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-wN5pnPvbEuGjfzp0qReVoRSPdOsakvc",
    authDomain: "message-board-ae77d.firebaseapp.com",
    databaseURL: "https://message-board-ae77d.firebaseio.com",
    projectId: "message-board-ae77d",
    storageBucket: "message-board-ae77d.appspot.com",
    messagingSenderId: "768368869618"
  }
};
