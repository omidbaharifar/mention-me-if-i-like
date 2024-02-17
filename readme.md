# Mention Me If I Like!

"Mention Me If I Like" bot is a Telegram bot that listens to group chats to find some specific words that you set, and if these words exists on any caht, this bot will return some random message and mention you, so you will never miss your favorite topics on Telegram groups again!

## Get Bot Token And Some Settings on BotFather

First, you have to get your Token from Telegram @BotFather. Go to following url to get your token:

```bash
https://t.me/BotFather
```

Then you have to use /setprivacy command on BotFather to disable privacy mode for your bot (so bot will access to all group messages).

```bash
/setprivacy
```

## Setup Code

First, set your bot token in bot.js file:

```javascript
// bot.js

...

const botFatherToken = "<your telegram bot father token>"; // paste your token here

...

```

Then edit your sensitive words list (bot will looking for these words on messages):

```javascript
// bot.js

...

const sensitiveWords = ["عبادت", "دعا"]; // add or replace desired words in this array

...

```

You can also add your username (with @) to mention yourself on bot responses:

```javascript
// bot.js

...

// add your username in here, you can also leave it empty
const userName = "<@your username>"; 

...

```

Finally, edit random messages list as you want;

```javascript
// bot.js

...

// ${word} refers to the sensitive word that triggered the bot
// ${userName} refers to your username for mention
const responseTextsList = [
    `امید اینا دارن در مورد ${word} حرف میزنن، بیااا ${userName}`,
    `امید بوی ${word} میاد، بدو بیا ${userName}`,
    `کسی گفت ${word}؟؟ ${userName}`,
    `لطفا وقتی در مورد موضوعات مورد علاقه امید صحبت میکنید، خودشم صدا کنید. ${userName}`,
];

...

```

## Installation

To install dependencies, run following command:

```bash
npm install
```

## Run The Bot

You can run bot using this command:

```bash
npm run start
```

Now you can add your bot in groups and never miss your favorite topics again!