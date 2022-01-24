const {
	WAConnection,
    MessageType,
    Presence,
    ReconnectMode,
    Mimetype,
    GroupSettingChange
	} = require("@adiwajshing/baileys")
const fs = require('fs')
const moment = require("moment-timezone")
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const { getBuffer, banner, start, success } = require('./lib/functions')
const { sleep } = require('./lib/offline')
const { color } = require('./lib/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetcher')
const creator = '62881037923331'
run = process.uptime() 
runtimee = `${kyun(run)}`
banChats = false
memek =`
baterai = 'unknown'
charging = 'unknown'

Github: Ga Ada

IG: Ga Ada`
require('./rounter.js')
nocache('./rounter.js', module => console.log(`${module} is now updated!`))
require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))
console.log(color('© 『𝘚W𝐼𝘛𝘊𝐻 𝐸𝘔𝘗𝐸𝑅𝛩̸𝑅』'))
sleep(4000)
console.log(color('Bukan untuk dijual bangke'))

const starts = async (client = new WAConnection()) => {
    client.autoReconnect = ReconnectMode.onConnectionLost
    client.logger.level = 'warn'
    client.version = [2, 2143, 3]
    client.browserDescription = ['Nevt Ganz ', 'Chrome', '3.0'] 
    client.on('qr', () => {
        console.log(color('[','white'), color('?','red'), color(']','white'), color(' Scan whatsapp'))
    })

    fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
    client.on('connecting', () => {
        start('2', 'Connecting...')
    })
    client.on('open', () => {
        success('2', 'Connected')
    })
    client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
        
        	// Baterai
	client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// Send Message
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await client.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    
    client.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    await client.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
                    		    //WELCOME ON /OFF YA ADICK ADICK//
client.on('group-participants-update', async (anu) => {

	try {

		mdata = await client.groupMetadata(anu.jid)

		console.log(anu)

		if (anu.action == 'add') {

			num = anu.participants[0]

			try {

				ppUrl = await client.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `SELAMAT DATANG
-------------------------
=> NAMA :   
=> UMUR :  
=> KOTA : 
--------------------------
Baca Deskripsi Dan Patuhi Peraturan Grup @${num.split('@')[0]}\n\n Join Pada Jam: ${time} Waktu Server`

				sendButImage(anu.jid, teks, `Nevt Botz (~_~)`, img,but = [{buttonId:`donasi`, 

               buttonText:{displayText: 'WELCOME'},type:1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'remove') {

			num = anu.participants[0]

			try {

				ppUrl = await client.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)

				teks = `
=> BABAY BEBAN GROUP

=> SEMOGA TIDAK BALIK LAGI YA

=> Sayonara*@${num.split('@')[0]}\n`

				sendButImage(anu.jid, teks, `Nevt Botz (~_~) `, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SAYONARA !!`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'promote') {

			num = anu.participants[0]

			try {

				ppUrl = await client.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)
shp = '=>'
var thu = await client.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
				teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT KAK`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			} else if (anu.action == 'demote') {

			num = anu.participants[0]

			try {

				ppUrl = await client.getProfilePicture(num)

				} catch {

					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'

				}

				img = await getBuffer(ppUrl)
shp = '=>'
thu = await client.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
				teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`

				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR YA`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})

			}

		} catch (e) {

			console.log(e)

			}

		})
    client.on('chat-update', async (message) => {
        require('./rounter.js')(client, message)
    })
  // client.sendMessage(`${creator}@s.whatsapp.net`, `Bot by RANZ BOTZ`, MessageType.text)
  //  client.sendMessage(`${creator}@s.whatsapp.net`, `${memek}`, MessageType.text)
}
/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()