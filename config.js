const ownerNumber = ["5511977782073@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '5511977782073' 
// mude para seu numero

const apikeyporn = 'fc8fe174f018b95cdae9272493f1a12f'
// sua key do imgbb para ativar o antiporn

const cr = '𝐖𝐙𝐙 𝐁𝐎𝐓\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = '*seu número está bloqueado*'
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*esse comando está bloqueado, contate o propitetário do bot para saber o pq*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*corre random, ban ta chegandokjkk*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*c é adm ent n vou te banir por mandar mensagem proibida*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'hmm pornozinho na hora errada, ja sabe né...'
// mensagem de ban no antiporn

const adminmsgporn = '*tu é adm ent n vou te banir por mandar porno na hora errada*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'random mandando link vai rodarkjkk'
// mensagem de ban no antilink

const adminmsglink = 'como c é adm pode mandar link'
// mensagem de quando adm manda link

const adminmsgpalavra = 'isso tá na lista das palavras proibidas pelo bot'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'palavra proibida? já sabe né'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 2
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://i.imgur.com/RR18JiI.jpg'
const textmsgday = 'bom dia puta '
// link e mensagem de bom dia

const linkimgeve = 'https://i.ibb.co/bLXgcBW/lp-tarde-anime-by-hitsukinyan-db7fpqr-fullview.jpg'
const textmsgeve = `boa tarde é o caralho`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.ibb.co/VJCd34F/EKvo372-X0-AEd-Hz.jpg'
const textmsgnig = 'boa noite vagabund'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'ops ocorreu um erro, tente novamente'
// mensagem de erro

const notregister = `*comando não registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = 'vc amor'
const linkbotlindo = 'https://photos1.iorbix.com/00/00/00/00/02/72/43/64/C--6tZwaASQH-b.jpg'
const botfeio = 'seu pai também é e ng fala nada'
const cadebot = 'oi, me chamou?'
const botfdp = 'sou um bot mano, para de ser carentekkj '
const botgostoso = 'obrigado fof'
const botfofo = 'obrigado lind'
const botbaianor = 'sua mãe dorme na minha rede'
const botcorno = 'vc webnamora amig kkjjkk'
const botputa = 'ok'
const botgay = 'vc'
const botviado = 'vc também'
const numbotfeio = 'obrigado'
// KEYS

const apiTobz = 'key'
// pra pegar a key do Tobz va até o numero 
//wa.me/447418349954 se registre no bot
// e depois escreva #generateapikey que o 
//bot do tobz vai gerar sua key

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: 'aguarde um pouco por favor...',
    success: 'opa, sucesso!',
    error: {
        stick: 'ops, ocorreu um erro ao converter a imagem em um adesivo',
        Iv: 'ops, link inválido..'
    },
    only: {
        group: 'ei, esse comando só pode ser usado em grupos! ',
        ownerG: 'ei, esse comando só pode ser usado pelo proprietário do grupo!',
        ownerB: 'ei, esse comando só pode ser usado pelo proprietário do bot!',
        admin: 'esse comando só pode ser utilizado por adms otáriokkjkk',
        Badmin: 'esse comando só pode ser usado quando o bot é adm'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:meu criador lindo\n' 
+ 'ORG:Ian;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=5511977782073:+55 11 9777-82073\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyporn = apikeyporn
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.apiTobz = apiTobz
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber