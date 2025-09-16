import fs from 'fs';
import path from 'path';

async function channelSender(message, client, texts, num) {
    const remoteJid = message.key.remoteJid;

    const imagePath = path.resolve(`${num}.png`);

    let thumbBuffer;
    try {
        thumbBuffer = fs.readFileSync(imagePath); // ✅ Read thumbnail as buffer
    } catch (err) {
        console.error("❌ Thumbnail not found:", err.message);
        thumbBuffer = null; // fallback to avoid crash
    }

    await client.sendMessage(remoteJid, {

        image: { url: imagePath }, // ✅ works if it's a valid local file path

        caption: `> ${texts}`,

        contextInfo: {

            externalAdReply: {

                title: "𝙾𝚁𝙴 𝙽𝙾 𝙽𝙰 𝚆𝙰 𝙳𝙾𝙽𝚀𝚄𝙸𝚇𝙾𝚃𝙴 𝙳𝙾𝙵𝙻𝙰𝙼𝙸𝙽𝙶𝙾",

                body: "𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐗𝐌𝐃",

                mediaType: 1,

                thumbnail: thumbBuffer, // ✅ This MUST be a buffer

                renderLargerThumbnail: false,

                mediaUrl: `https://files.catbox.moe/x7fi39.jpg`,

                sourceUrl: `https://files.catbox.moe`,
                
                thumbnailUrl: `https://whatsapp.com/channel/0029Vb65HSyHwXbEQbQjQV26`,

            }
        }
    });
}

export default channelSender;
