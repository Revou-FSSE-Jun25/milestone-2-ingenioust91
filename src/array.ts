//index 0:scissor 1:rock 2:paper
type questionType = {
	quest : string,
	user:string[],
	userScissor : string[],
	userRock : string[],
	userPaper: string[]
}

const question1 : questionType[] = [{
    quest: 'Aku pikir bolanya di tim kakak.',

    user:[
	'Enggak, bolanya jelas ada di timmu.',
	'Mari kita review bareng-bareng.',
	'Kami coba ambil dulu bolanya.',
    ],

    userScissor :[
	'Kita catat dulu biar manager yang decide.',
	'Setelah di-mapping, bolanya ada di tim kakak.',
	'Ternyata memang di tim kami'
	],

    userRock :[
	'Ternyata memang di tim kami.',
	'Setuju, review bareng aja.',
	'Kenapa review lagi, waktunya udah mepet.'
	],

    userPaper :[
	'Bagus, memang itu bagian timmu.',
	'Maaf, setelah direview bolanya ada di tim kami.',
	'Kita mapping dulu siapa yang pegang bola sebenarnya.'
	],
}]

const question2  : questionType[] = [{
    quest: 'Agak jauh ya dari last discussion.',

    user:[
	'Discussion kemarin nggak relevan lagi.',
	'Ga terlalu jauh, kita bisa tarik benang merahnya.',
	'Benar, jauh dari last discussion.',
    ],

    userScissor :[
	'Kita tarik benang merahnya aja biar nyambung.',
	'Discussion kemarin sudah final, jangan di-skip.',
	'Betul juga.'
	],

    userRock :[
	'Benar, memang ada benang merahnya.',
	'Aku ikutin benang merahmu.',
	'Nah kan, ternyata tidak ada benang merahnya.'
	],

    userPaper :[
	'Nah, kan. Discussion kemarin jadi nggak ada gunanya.',
	'Maaf, discussion kemarin ternyata gak relevan lagi.',
	'Kita tarik benang merahnya aja biar nyambung.'
	],
}]


const question3 :{quest:string, user:string[], userScissor:string[], userRock:string[], userPaper:string[] }[] = [{
    quest: 'Nah, itu bottleneck-nya dimana ya, kak?',

    user:[
	'Kita coba review bareng.',
	'Bottleneck jelas di timmu, bukan di kami.',
	'Sepertinya ada di tim kami.',
    ],

    userScissor :[
	'Kita sama-sama lagi review juga.',
	'Nah kan, setelah direview memang ada ditimmu.',
	'Maaf, setelah direview ternyata ada di tim kami.'
	],

    userRock :[
	'I see, mungkin timku perlu re-adjust timeline lagi.',
	'Kita catat dulu biar manager yang decide.',
	'Tapi setelah dicek root causenya ada di timmu nih, kak.'
	],

    userPaper :[
	'Exactly, segera diselesaikan ya.',
	'Maaf, setelah direview ternyata ada di tim kami.',
	'Ternyata ada bagian tim kami juga nih, kita aligned sama sama ya.'
	],
}]


const question4 :{quest:string, user:string[], userScissor:string[], userRock:string[], userPaper:string[] }[] = [{
    quest: 'As I mentioned before on the call yesterday ya, kak.',

    user:[
	'Gak ada yang confirm kemarin',
	'Yes, sudah kita note juga kemarin.',
	'Oke, mungkin miss dari kami.',
    ],

    userScissor :[
	'Kita sama-sama miss kemarin ya, kak. Coba recheck bareng.',
	'Wait, di minutes kemarin udah ada loh.',
	'Maaf kak, ternyata miss dari kami.'
	],

    userRock :[
	'Oke noted, berarti ada alignment gap di timku ya.',
	'Oke, berarti kita aligned ya.',
	'Kalau gitu timmu catatannya beda nih, kak. Coba align ulang aja.'
	],

    userPaper :[
	'Lain kali tolong di recheck sebelum meeting ya kak.',
	'Maaf ternyata memang belum dimention kemarin ya, kak',
	'Kita sama-sama miss kemarin ya, kak. Coba recheck bareng.'
	],
}]

const listQuestion : {}[] = [question1, question2, question3, question4]

const tooLow : string[] = [
    "Too low! Come on, that's not complicated",
    "That’s under my number. I don't like it.",
    "Not enough. Revise your guess."
]

const tooHigh : string[] = [
    "Above my number. Don't tell me you can't handle this",
    "That’s more than what I had in mind. Try again.",
    "Nope, that’s too much. Revise it."
]

const right : string[] = [
    "Finally. I know my instructions are clear.",
    "Good. But I expect faster.",
    "OK. Do Better next time."
]

const allFalse : string[] = [
    "You can’t handle something this simple?",
    "Do I have to do everything myself?",
    "Can you even do this job or not?"
]

const imgStillFalse : string[] = [
    "./assets/boss-mikir-false-1.png",
    "./assets/boss-mikir-false-2.png",
    "./assets/boss-mikir-false-3.png",
    "./assets/boss-mikir-false-4.png"
]

// const imgRight = [
//     "./assets/boss-mikir-right-1.png",
//     "./assets/boss-mikir-right-2.png"
// ]


export {listQuestion,
    tooLow, tooHigh, right, allFalse, imgStillFalse
}