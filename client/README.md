Install 
```sh
npm install && bower install --force

Run
```sh
ionic serve -a

Generate Android APK

```sh
ionic build android --release
```sh
cd platforms/android/build/outputs/apk/
```sh
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore path/to/keystore.file android-release-unsigned.apk sisau_android
```sh
/opt/android-sdk/build-tools/23.0.3/zipalign -v 4 android-release-unsigned.apk axe.apk
