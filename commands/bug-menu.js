import configManager from '../utils/manageConfigs.js'

export async function bugMenu(message, client) {
    const remoteJid = message.key.remoteJid;
    const today = new Date();

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[today.getDay()];
    const currentDate = today.getDate();
    const currentMonth = today.getMonth() + 1; 
    const currentYear = today.getFullYear();
    const number = client.user.id.split(':')[0];
    const username = message.pushName || "Unknown";

    const t = ` 
╭────────────────╮
   𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐗𝐌𝐃
╰────────────────╯
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

╭─❍👾 𝐁-𝐌𝐄𝐍𝐔 👾
│
│ ✞︎ 𝐟𝐫𝐞𝐞𝐳𝐞-𝐠𝐫𝐨𝐮𝐩 < in group >
│ ✞︎ 𝐟𝐨𝐫𝐜𝐞-𝐜𝐥𝐨𝐬𝐞 225xxxxx
│ ✞︎ 𝐱-𝐩𝐫𝐨𝐭𝐨 225xxxxx
│ ✞︎ 𝐱-𝐝𝐨𝐟𝐥𝐚𝐦𝐢𝐧𝐠𝐨 225xxxxx
│ ✞︎ 𝐚𝐭𝐭𝐚𝐜𝐤-𝐝𝐞𝐥𝐚𝐲 225xxxxx
│ ✞︎ 𝐜𝐫𝐚𝐬𝐡-𝐢𝐧𝐟𝐢𝐧𝐢𝐭𝐲 225xxxxx
│ ✞︎ 𝐢𝐨𝐬-𝐜𝐨𝐦𝐛𝐨 225xxxxx    
╰────────────────╯       

> 𝐏𝐨𝐰𝐞𝐫𝐞𝐝 𝐁𝐲🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹
`;

    // Envoi de la vidéo sous forme de GIF
    const r = await client.sendMessage(remoteJid, {
        video: { url: "https://files.catbox.moe/3lw5gr.mp4" },
        gifPlayback: true,  // <- permet d'envoyer comme un GIF animé
        caption: t,
    });

    // Envoi du son en PTT
    await client.sendMessage(remoteJid, {
        audio: { url: "bug.mp3" }, 
        mimetype: 'audio/mp4',
        ptt: true,
        quoted: r
    });
}   

export default bugMenu;