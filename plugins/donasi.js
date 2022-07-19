let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
╭─「 Donasi • Pulsa 」
│ • Indosat [085779150501]
│ • Tri  [089512630591]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/6285779150501
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
