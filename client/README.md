Install
```sh
$ npm install && bower install --force
```

Run as web application
```sh
$ ionic serve -a
```

Build Android APK
```sh
$ ionic build android --release
```

Sign Android APK (Mandatory in order to submit it to Google Play)
```sh
$ cd platforms/android/build/outputs/apk/
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore path/to/keystore.file android-release-unsigned.apk keystore_identifier
$ /opt/android-sdk/build-tools/xx.xx.xx/zipalign -v 4 android-release-unsigned.apk axe.apk
```
