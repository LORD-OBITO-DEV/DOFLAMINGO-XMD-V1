
export async function menu(bot, msg) {

	const chatId = msg.chat.id;

	const userId = msg.from.id;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

	const t = ` 
╭─────────────────╮
    𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐗𝐌𝐃
╰─────────────────╯
╭─────────────────╮
│ 𝐇𝐞𝐥𝐥𝐨 𝐦𝐲 𝐥𝐨𝐫𝐝 💂‍♂️,  ${msg.from.first_name} 
│ 𝐃𝐚𝐲 : ${currentDay}
│ 𝐃𝐚𝐭𝐞 : ${currentDate}/${currentMonth}/${currentYear} 
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 1.1.0
│ 𝐏𝐥𝐮𝐠𝐢𝐧𝐬 : 6  
╰─────────────────╯

╭─❍🌹𝐁𝐎𝐓 𝐂𝐌𝐃🌹
│      
│ ✞︎ /start    
│ ✞︎ /menu          
│ ✞︎ /connect 225xxxxx     
│ ✞︎ /disconnect 225xxxxx   
╰─────────────────╯   



╭─❍🍷 𝐎𝐖𝐍𝐄𝐑 𝐂𝐌𝐃 🍷
│      
│ ✞︎ /addprem id   
│ ✞︎ /delprem id            
╰─────────────────╯      

 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹
 `

	await bot.sendPhoto(chatId, 'https://files.catbox.moe/sd2qxy.jpg', {

      caption: t,

      parse_mode: 'Markdown'

    });


}


export default menu;
