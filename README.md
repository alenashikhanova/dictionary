# Dictionary with Google Authentication


![Angular](https://img.shields.io/badge/Angular-000000?style=for-the-badge)
![Ionic](https://img.shields.io/badge/Ionic-000000?style=for-the-badge)
![NgRx](https://img.shields.io/badge/NgRx-000000?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-000000?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-000000?style=for-the-badge)

This project has implemented:

- Registration
- Login by 
  - email
  - google account
- Password recovery
- Add word to dictionary with translation
- web and android version

# Before starting

### Database connection
You need to create a database and get connection string from [cloud.mongodb.com](https://cloud.mongodb.com/) (for example).<br />
Then place it in a variable `mongoURI` in file [keys.dev.js](/config/keys.dev.js)

<br />

### Email for sending password recovery emails.
Fill in the variables `EMAIL`, `PASSWORD` in file [.env](/.env).<br/>
EMAIL, PASSWORD from the gmail account from which letters will be sent to recover the password.

<br />

### Integrating Google authentication 


   - ### For web:
      You have to create a project through the Google API Console and get a Client ID (OAuth client ID).<br/>
      Find all files with string `"Client_ID_for_Web_application"` and replace with your Client ID.


- ### For android:
    For Google Auth to work in the Android, you need to add line<br />
    `<string name="server_client_id">Your Client_ID_for_Web_application</string>`<br />
    to the file `front-end\android\app\src\main\res\values\strings.xml`


# To run client and server

```
npm install

npm run client-install

npm run dev
```
Go to the page [localhost:4200](http://localhost:4200/)

# To run android

```javascript
cd front-end

ionic capacitor add android

ionic capacitor sync android

ionic capacitor copy android 

ionic capacitor open android // this command will open Android SDK
```


