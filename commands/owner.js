
export async function owner(message, client) {

    const remoteJid = message.key.remoteJid;

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN: 🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹\n' // full name
            + 'ORG: 🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=2250712668494:+2250712668494\n' // WhatsApp ID + phone number
            + 'END:VCARD'

    await client.sendMessage(remoteJid,

        { 
            contacts: { 

                displayName: '_🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹_', 

                contacts: [{ vcard }] 
            }
        }
    );

}

export default owner;
