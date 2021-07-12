const push = require('web-push');

// const vapId = push.generateVAPIDKeys();
const vapIdKeys = {
    publicKey: 'BOTYU-CwHxr0YFolWVdwLnQJJ5WvZLKdErAL5xAQ4B9LsX4p0FffF0XZavO4ACfnV3xt24ToAKpopQXs7woABjU',
    privateKey: 'BP5ZqPAgJDIelp1EFxQ5v-mtOGfz2sRgQLKXXK_kyX4'
}

console.log(vapIdKeys);

push.setVapidDetails('Hello subject',vapIdKeys.publicKey, vapIdKeys.privateKey);

const sub = {};
push.sendNotification(sub, 'test message')