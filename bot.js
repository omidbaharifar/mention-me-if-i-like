// packages imports
const TelegramBot = require("node-telegram-bot-api");

// vars
// * secret token
const botFatherToken = "<your telegram bot father token>";
// * sensitive words, bot will respond when any message contains one of these words
const sensitiveWords = ["عبادت", "دعا"];
// * create bot
const bot = new TelegramBot(botFatherToken, { polling: true });
// * your username to mention on messages
const userName = "<@your username>";

// functions
// * response message generator
const generateResponse = (word) => {
  const responseTextsList = [
    `امید اینا دارن در مورد ${word} حرف میزنن، بیااا ${userName}`,
    `امید بوی ${word} میاد، بدو بیا ${userName}`,
    `کسی گفت ${word}؟؟ ${userName}`,
    `لطفا وقتی در مورد موضوعات مورد علاقه امید صحبت میکنید، خودشم صدا کنید. ${userName}`,
  ];

  // return random responseTextsList array index
  return responseTextsList[
    Math.floor(Math.random() * responseTextsList.length)
  ];
};

// listeners
bot.on("message", (messageData) => {
  // chat data
  const chatId = messageData.chat.id;
  const chatMessage = messageData.text;
  // initial sensitive word string
  let sensitiveWord = "";

  // loop through all sensitiveWords list
  for (let i = 0; i < sensitiveWords.length; i++) {
    // sensitive word item
    const sensitiveWordItem = sensitiveWords[i];
    // is message includes this sensitive word
    const isSensitive = chatMessage.includes(sensitiveWordItem);

    // if isSensitive true, set current sensitive word as sensitiveWord value
    if (isSensitive) {
      sensitiveWord = sensitiveWordItem;
    }
  }

  // if sensitiveWord value is not empty, response with proper text
  if (sensitiveWord) {
    bot.sendMessage(chatId, generateResponse(sensitiveWord));
  }

  // clear sensitiveWord
  sensitiveWord = "";
});
