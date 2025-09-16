

import configManager from '../utils/manageConfigs.js'

export async function prem(message, client) {

    const remoteJid = message.key.remoteJid;

    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const currentDay = daysOfWeek[today.getDay()];

    const currentDate = today.getDate();

    const currentMonth = today.getMonth() + 1; 

    const currentYear = today.getFullYear();

    const owner = "🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐃𝐄𝐕 🌹";

    const number = client.user.id.split(':')[0];

    const username = message.pushName || "Unknown";

    const t = ` 
╭─────────────────╮
    𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐗𝐌𝐃
╰─────────────────╯
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

╭─❍💎𝐏𝐑𝐄𝐌𝐈𝐔𝐌 𝐂𝐌𝐃💎
│      
│ ✞︎ connect 225xxxxx
│ ✞︎ disconnect 225xxxxx 
│ ✞︎ reconnect       
╰────────────────╯        

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹
    `
;

    await client.sendMessage(remoteJid, {

        image: { url: "menu.jpg" },

        caption: t,

        quoted: message 


    });
}   

export default prem;
