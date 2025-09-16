
export async function owner2(message, client) {

    const remoteJid = message.key.remoteJid;

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: 𝙻𝙾𝚁𝙳 ミ 𝙼𝙸𝙽𝙰𝚃𝙾 彡 𝙳𝙴𝚅\n' // full name
            + 'ORG: 🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=242064828524:+242064828524\n' // WhatsApp ID + phone number
            + 'END:VCARD'

    await client.sendMessage(remoteJid,

        { 
            contacts: { 

                displayName: '_*𝙻𝙾𝚁𝙳 ミ 𝙼𝙸𝙽𝙰𝚃𝙾 彡 𝙳𝙴𝚅*_', 

                contacts: [{ vcard }] 
            }
        }
    );

}

export default owner2;
