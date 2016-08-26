Install 
```sh
$ npm install && bower install --force
```
Run
```sh
$ ionic serve -a
```
Generate Android APK

```sh
$ ionic build android --release
$ cd platforms/android/build/outputs/apk/
$ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore path/to/keystore.file android-release-unsigned.apk keystore_identifier
$ /opt/android-sdk/build-tools/xx.xx.xx/zipalign -v 4 android-release-unsigned.apk axe.apk
```
