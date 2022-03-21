const chalk = require('chalk');
const { WAConnection, Mimetype, MessageType } = requi
    ('@adiwajshing/baileys');
const fs = require('fs');
const ownr = "919745259627@s.whatsapp.net";
async function whatsAsena() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [3, 3234, 9]

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('MJ-')}${chalk.blue.bold('SIR')}
${chalk.white.italic('MJ-SIR STRINg')}
${chalk.blue.italic('ℹ️  Connecting to Whatsapp... Please wait.')}`);
	});

	conn.on('open', async () => {
		console.log(
			chalk.green.bold('MJ-SIR QR Code: '),
			'MJ;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				)
		);
		await conn.sendMessage(
			conn.user.jid,
			'MJ;;;' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
					'base64'
				),
			MessageType.text
		);
		await conn.sendMessage(
			ownr,'*New User Scanned 💥\n\n*'+'```Username :- ```'+ con.user.name + '\n\n```Jid :-``` '+conn.user.jid+'',
			MessageType.text
		);
		if (conn.user.jid.startsWith('91')) {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' + conn.user.name +'\n'+'* ⚠️ ©MJ-SIR',
				MessageType.text
			);
			await conn.sendMessage(
        conn.user.jid, fs.readFileSync("./abc/welcm.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true });
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*⚠️ Please Do Not Share This Code With Anyone ' +
					conn.user.name +'\n'+
					'* ⚠️ ©MJ-SIR',
				MessageType.text
			);
			await conn.sendMessage(
        conn.user.jid, fs.readFileSync("./abc/welcm.mp3"), MessageType.audio, { mimetype: Mimetype.mp4Audio, ptt: true });
		}
		console.log(
			chalk.green.bold(
				"EĞER MESAJI KOPYALAMIYORSANIZ LÜTFEN WHATSAPP'I KONTROL EDİN. KENDİ NUMARANIZA QR KODU GÖNDERİLDİ!\n"
			),
			chalk.green.bold(
				'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAsena();
