import TelegramBot from '8408567668:AAHeXmw6nF1dpQjEIUlJ1SvdCz7MeZPUhRI';

const token = process.env.TELEGRAM_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === "/start") {
    bot.sendMessage(chatId, "I am SERF. Your 24/7 AI employee.");
  } else {
    bot.sendMessage(chatId, "Received: " + text);
  }
});
