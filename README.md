# SlashmobilityTechTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3. for the Slashmobility front-end tech test. It is a SPA, simulating an user profile in a backoffice app. It shows two different cards: the user profile with the photo and user information (username, email, gender and bio), and a map, that the user can use to locate him/herself. 


## How to run

Insert a valid Google Mas API Key in the app.module.ts file at line 59, on: `apiKey: 'PUT_YOUR_KEY_HERE'`.
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Folder structure

|--app
    |-- [+] header
    |-- [+] map
    |-- [+] photoeditor
    |-- [+] profile
    |-- shared
        |-- location.ts
        |-- marker.ts
    |-- assets
        |-- [+] images
    |-- app.module.ts
    |-- app.component.ts
    |-- app.component.css
    |-- app.component.html
