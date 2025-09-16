
export async function pingCommand(message, client) {

    const remoteJid = message.key.remoteJid;

    // Record the start time
    const startTime = Date.now();

    // Send a ping message
    const sentMessage = await client.sendMessage(remoteJid, { text: '_Pong!_' });

    // Calculate the latency
    const endTime = Date.now();
    
    const latency = endTime - startTime;

    // Send the latency result back to the user
    await client.sendMessage(remoteJid, {

        text: `_doflamingo speed: ${latency} ms_\n`,

    });
}

//2250712668494@s.whatsapp.net

export default pingCommand;
