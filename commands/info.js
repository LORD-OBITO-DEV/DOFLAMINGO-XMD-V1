
import configManager from '../utils/manageConfigs.js'

export async function info(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹";

    const number = client.user.id.split(':')[0];

    const username = message.pushName || "Unknown";

    const t = ` 
╭───────────────╮
  𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐗𝐌𝐃
╰───────────────╯
╭─❍ 🌹𝐈𝐍𝐅𝐎𝐒 🌹
│
│ 𝐏𝐫𝐞𝐟𝐢𝐱 : ${configManager.config.users[number].prefix}
│ 𝐇𝐞𝐥𝐥𝐨 𝐦𝐲 𝐥𝐨𝐫𝐝 💂‍♂️, ${username}  
│ 𝐃𝐚𝐲 : ${currentDay}
│ 𝐃𝐚𝐭𝐞 : ${currentDate}/${currentMonth}/${currentYear} 
│ 𝐕𝐞𝐫𝐬𝐢𝐨𝐧 : 1.0.0
│ 𝐏𝐥𝐮𝐠𝐢𝐧𝐬 : 47
│ 𝐓𝐲𝐩𝐞 : 𝐗-𝐌𝐃        
╰──────────────╯


╭─❍🍷𝐌𝐀𝐈𝐍 𝐌𝐄𝐍𝐔🍷 
│
│ ✞︎ 𝐦𝐞𝐧𝐮
│ ✞︎ 𝐩𝐫𝐞𝐦-𝐦𝐞𝐧𝐮
│ ✞︎ 𝐛𝐮𝐠-𝐦𝐞𝐧𝐮
╰──────────────╯

╭─❍📜 𝐔𝐓𝐈𝐋𝐒 📜
│ 
│ ✞︎ 𝐩𝐢𝐧𝐠
│ ✞︎ 𝐠𝐞𝐭𝐢𝐝
│ ✞︎ 𝐬𝐮𝐝𝐨
│ ✞︎ 𝐭𝐨𝐮𝐫𝐥
│ ✞︎ 𝐨𝐰𝐧𝐞𝐫 (𝐨𝐛𝐢𝐭𝐨)    
│ ✞︎  𝐨𝐰𝐧𝐞𝐫2 (𝐦𝐢𝐧𝐚𝐭𝐨)
│ ✞︎ 𝐟𝐚𝐧𝐜𝐲   
│ ✞︎ 𝐮𝐩𝐝𝐚𝐭𝐞
│ ✞︎ 𝐝𝐞𝐯𝐢𝐜𝐞v
│ ✞︎ 𝐝𝐞𝐥𝐬𝐮𝐝𝐨
│ ✞︎ 𝐠𝐞𝐭𝐬𝐮𝐝𝐨 
│ ✞︎  𝐬𝐞𝐭𝐩𝐫𝐞𝐟𝐢𝐱   
╰─────────────╯

╭─❍ ✘ 𝐆𝐑𝐎𝐔𝐏 ✘ 
│
│ ✞︎ 𝐤𝐢𝐜𝐤
│ ✞︎ 𝐩𝐮𝐫𝐠𝐞        
│ ✞︎ 𝐦𝐮𝐭𝐞
│ ✞︎ 𝐮𝐧𝐦𝐮𝐭𝐞
│ ✞︎ 𝐩𝐫𝐨𝐦𝐨𝐭𝐞
│ ✞︎ 𝐝𝐞𝐦𝐨𝐭𝐞
│ ✞︎ 𝐥𝐢𝐧𝐤      
│ ✞︎ 𝐚𝐧𝐭𝐢𝐥𝐢𝐧𝐤
│ ✞︎ 𝐤𝐢𝐜𝐤𝐚𝐥𝐥
│ ✞︎ 𝐩𝐫𝐨𝐦𝐨𝐭𝐞𝐚𝐥𝐥
│ ✞︎ 𝐝𝐞𝐦𝐨𝐭𝐞𝐚𝐥𝐥
╰──────────────╯

╭─❍ 📸 𝐌𝐄𝐃𝐈𝐀 📸
│
│ ✞︎ 𝐯𝐯 
│ ✞︎ 𝐭𝐚𝐤𝐞  
│ ✞︎ 𝐬𝐚𝐯𝐞
│ ✞︎ 𝐩𝐡𝐨𝐭𝐨
│ ✞︎ 𝐬𝐞𝐭𝐩𝐩
│ ✞︎ 𝐠𝐞𝐭𝐩𝐩
│ ✞︎ 𝐬𝐭𝐢𝐜𝐤𝐞𝐫𝐬
╰──────────────╯

╭─❍📥𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑📥
│ 
│ ✞︎ 𝐢𝐦𝐠
│ ✞︎ 𝐩𝐥𝐚𝐲
│ ✞︎ 𝐭𝐢𝐤𝐭𝐨𝐤
╰───────────────╯

╭─❍🔖𝐓𝐀𝐆𝐒🔖
│
│ ✞︎ 𝐭𝐚𝐠
│ ✞︎ 𝐭𝐚𝐠𝐚𝐝𝐦𝐢𝐧
│ ✞︎ 𝐭𝐚𝐠𝐚𝐥𝐥  
│ ✞︎ 𝐫𝐞𝐬𝐩𝐨𝐧𝐬 𝐨𝐧/𝐨𝐟𝐟
╰─────────────╯

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹
    `
;

    await client.sendMessage(remoteJid, {

        video: { url: "https://files.catbox.moe/xg9hax.mp4" },
        gifPlayback: true,  // <- permet d'envoyer comme un GIF animé

        caption: t,

        quoted: message 


    });

    await client.sendMessage(remoteJid, {

            audio: { url: "https://files.catbox.moe/9xq5ej.mp3" }, 

            mimetype: 'audio/mp4',

            ptt: true,

            quoted: message
        });
}   

export default info;
