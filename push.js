const push = require('web-push');

// const vapId = push.generateVAPIDKeys();
const vapIdKeys = {
    publicKey: 'BOTYU-CwHxr0YFolWVdwLnQJJ5WvZLKdErAL5xAQ4B9LsX4p0FffF0XZavO4ACfnV3xt24ToAKpopQXs7woABjU',
    privateKey: 'BP5ZqPAgJDIelp1EFxQ5v-mtOGfz2sRgQLKXXK_kyX4'
}

console.log(vapIdKeys);

push.setVapidDetails('mailto:ssaymama@gmail.com:',vapIdKeys.publicKey, vapIdKeys.privateKey);

const sub = {"endpoint":"https://fcm.googleapis.com/fcm/send/eJ4mzYnOg4U:APA91bG2eixzUb5OojbkbApFdHCeOHk4nXV_mAwQ1UNUla0oBGqWMy8bz3Itz8zMrPiVRtqEY4Q7bwdYanvApqadWSEOm7KZEIawGHLCguvmDm1mEJ50nJyPRBPyhh3gJ7eHMb-1Ecfp","expirationTime":null,"keys":{"p256dh":"BCWRPcfBkLe8_rzJOkxMPZ4SFjZi7QezmE7p8Uv9n41FS_3DCmCRRXc6Z-7ZrsCEyh2237nWZJWlOmkGJByE3Vc","auth":"muTTZqj6Bjs4LUW5njnuGw"}}
push.sendNotification(sub, 'test message')