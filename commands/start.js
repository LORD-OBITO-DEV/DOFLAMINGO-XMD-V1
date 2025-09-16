
import { isUserInChannel } from '../utils/checkmember.js';

export async function start(bot, msg) {

  const CHANNEL_USERNAME = '@Lord_obito_tech_official';

  const GROUP_USERNAME = '@lord_obito_tech_suport';

  const chatId = msg.chat.id;

  const userId = msg.from.id;

  const isMember = await isUserInChannel(bot, userId);

  if (isMember) {

    await bot.sendPhoto(chatId, 'https://files.catbox.moe/7jyspa.jpg', {

      caption:

`👋 *Welcome back, ${msg.from.first_name}!*

You're all set. Use /menu to explore available options.`,

      parse_mode: 'Markdown'

    });

  } else {

    await bot.sendPhoto(chatId, 'https://files.catbox.moe/a79zvx.jpg', {

      caption:

`👋 *Welcome to WhatsApp Connector Bot!*

This bot helps you link your WhatsApp account to our system.

🔒 *Secure & Fast Pairing*
⚙️ *Connect your number in seconds!*

To continue, please join our channel and group👇

👉 [Join Channel](${`https://t.me/${CHANNEL_USERNAME.replace('@', '')}`})

👉 [Join Group](${`https://t.me/${GROUP_USERNAME.replace('@', '')}`})

Once joined, press the button below.`,

      parse_mode: 'Markdown',

      reply_markup: {

        inline_keyboard: [

          [{ text: "✅ I've Joined", callback_data: 'check_join' }]

        ]
      }
    });
  }
}

export default start;
