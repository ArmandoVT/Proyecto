// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyClGfs9GPwMmX0j5GDQjNGwDXpt8ZC5LVI",
    authDomain: "scroll-infinito.firebaseapp.com",
    databaseURL: "https://scroll-infinito.firebaseio.com",
    projectId: "scroll-infinito",
    storageBucket: "scroll-infinito.appspot.com",
    messagingSenderId: "432208948664"
  }
};
