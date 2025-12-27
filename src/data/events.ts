export type EventItem = {
	id: string
	title: string
	description: string
	date: string
	place: string
	image: string
	tag: string
	calendar?: boolean
	startDate?: string
	endDate?: string
	startTime?: string
	endTime?: string
	location?: string
}

const placeholderImage = '/assets/images/avatar.svg'

export const events: EventItem[] = [
	{
		id: '2025-12-24-hejka-studenci',
		title: 'Hejka Studenci! Wszystkiego Najlepszego z okazji Świąt!🎄✨',
		description: `Odłóżcie klawiatury i spędźcie te dni razem z rodziną! ⌨️
		Pamiętajcie że w Święta bug się rodzi, kod truchleje, choć nie w biosie osadzony - segfault krzepnie, flash ciemnieje - backtrace będzie nieskończony! ✨
		Odpocznijcie, nabierzcie nowych pomysłów i szerszego spojrzenia na to co robicie na co dzień. Niech to będzie czas dla was i waszych rodzin. ✨
		I widzimy się oczywiście po nowym roku! 🎆👋`,
		date: '2025-12-24',
		place: 'WFiIS, Łódź',
		image: 'src/assets/images/events-images/2025-12-24.jpg',
		tag: 'INFORMATION',
		calendar: false,
	},
	{
		id: '2025-12-22-hejka-studenci',
		title: 'Hejka Studenci! 👋',
		description: `Pewnie zauważyliście, że w naszych socialach powiewa świeżością. 🎨 Odświeżamy wygląd i ładujemy paski energii, żeby być z Wami w stałym kontakcie! Szykujcie się na znacznie większą aktywność – chcemy dostarczać Wam regularny loot w postaci newsów i inspiracji. 📈
		Co mamy w planach? Chcemy, żebyście poznali nas od podszewki! Będziemy chwalić się naszymi nowymi projektami, które właśnie kodujemy, ale też odkurzymy kilka produkcji z przeszłości, żeby pokazać Wam, jak ewoluowały Artefakty. 🐉🎮
		Będzie o tworzeniu gier, kreatywności i ludziach, którzy tworzą ten klimat.
		📍 Gdzie nas znaleźć? Nasza baza główna to niezmiennie Wydział Fizyki i Informatyki Stosowanej UŁ. Wpadajcie na naszego discorda po więcej informacji, a w międzyczasie śledźcie nasze pozostałe kanały, bo dopiero się rozkręcamy! 🚀
		❤️ Jeśli chcesz dołączyć do naszego koła, wpadnij na nasz serwer i wypełnij formularz!
		Link: https://discord.gg/2UvEkYtsSx`,
		date: '2025-12-22',
		place: 'WFiIS, Łódź',
		image: 'src/assets/images/events-images/2025-12-22.jpg',
		tag: 'INFORMATION',
		calendar: false,
	},
	{
		id: '2025-12-18-swiateczne-spotkanie-artefaktow',
		title: '🎄 Świąteczne spotkanie Artefaktów! 🐉',
		description: `Hejka Studenci! 👋 Najbliższe spotkanie stacjonarne będzie wyjątkowe, bo w klimacie przedwigilijnym!
		Co w planach? Standardowo – kto chce, może pokazać postęp w swoich projektach. Tym razem jednak głównym punktem programu ma być wigilijna pizza! 🎅🍕
		Obecność pizzy nie jest jeszcze pewna na 100%, ale jesteśmy dobrej myśli! W wariancie awaryjnym (gdyby jednak się nie udało), po pokazie projektów skoczymy wszyscy zintegrować się do Hell's Kitchen niedaleko naszego wydziału.
		📌 Szczegóły: 📅 Termin: 18 grudnia (czwartek) ⏰ Godzina: 18:00
		📍 Miejsce: Dolna część naszego wydziału (przestrzeń przed bufetem)
		Wpadajcie, żeby wspólnie zamknąć ten rok!`,
		date: '2025-12-17',
		place: 'WFiIS, Łódź',
		image: 'src/assets/images/events-images/2025-12-18.jpg',
		tag: 'MEETING',
		calendar: true,
		startDate: '2025-12-18',
		endDate: '2025-12-18',
		startTime: '18:00',
		endTime: '19:00',
	},
	{
		id: '2025-12-16-hejka-studenci',
		title: 'Hejka Studenci! 👋Rozliczanie listopadowych zawirowań i świętowania ciąg dalszy! 🎉',
		description: `W naszym listopadowym kalendarzu nie mogło zabraknąć tak ważnego jubileuszu. 14 listopada 2025 wzięliśmy udział w wydarzeniu "80-lecie kół naukowych". 🎓 To był dla nas zaszczyt móc świętować ten piękny, okrągły jubileusz w gronie innych pasjonatów nauki z Łodzi.
		Mieliśmy okazję być tam, reprezentować "Artefakty" i po prostu cieszyć się atmosferą akademickiej wspólnoty, a także udzielić kilku wywiadów. ✨ Tak jak w przypadku ŁDI – po małym poślizgu czasowym wracamy do Was z fotkami i wspomnieniami, bo działo się naprawdę sporo! Dziękujemy organizatorom i wszystkim, z którymi mogliśmy zbić pionę. 🙌`,
		date: '2025-12-16',
		place: 'BUŁ, Łódź',
		image: 'src/assets/images/events-images/2025-12-16.jpg',
		tag: 'INFORMATION',
		calendar: false,
	},
	{
		id: '2025-12-14-hejka-studenci',
		title: 'Hejka Studenci! 👋 Listopadowych podsumowań ciąg dalszy! 🌪️',
		description: `Zaczynamy od jednego z najważniejszych wydarzeń minionego miesiąca. Mieliśmy przyjemność wystawiać się na Łódzkich Dniach Informatyki, które odbywały się od 4 do 6 listopada 2025! 💻 To była niesamowita okazja, żeby poczuć puls branży IT i GameDevu w Łodzi. 🚀
		Super było zobaczyć Was wszystkich! Wielkie dzięki dla każdego, kto podszedł do naszego stoiska, przybił piątkę i zamienił z nami słowo. 🤝 Miło było porozmawiać o Waszych zainteresowaniach i pasji do gier. Po całym tym listopadowym pędzie w końcu możemy na spokojnie powspominać ten świetny event. Dziękujemy za Waszą obecność i energię! ⚡
		Do zobaczenia na kolejnych edycjach!`,
		date: '2025-12-14',
		place: 'WMiI, Łódź',
		image: 'src/assets/images/events-images/2025-12-14.jpg',
		tag: 'INFORMATION',
		calendar: false,
	},
	{
		id: '2025-12-12-czesc-studenci',
		title: 'Cześć Studenci! 👋 Listopadowe zawirowania za nami, więc czas na małe podsumowania! 🌪️',
		description: `Jak co roku w listopadzie, w naszym kole odbyły się wybory. Z ogromną przyjemnością ogłaszamy, że został wybrany nowy Zarząd SKN Artefakty! 🐉
		Oto skład, który będzie sterował naszym statkiem przez najbliższy rok:
		🔸 Przewodniczący: Kacper Musiał
		🔸 Wiceprzewodniczący: Piotr Kosek
		🔸 Wiceprzewodniczący: Jakub Gorządek
		Bardzo cieszymy się z zaufania, jakim nas obdarzyliście! ❤️ To dla nas ogromne wyróżnienie, ale też wyzwanie. Obiecujemy, że postaramy się o dalszy rozwój koła, ciekawe warsztaty i jeszcze więcej GameDevowej zajawki. Trzymajcie za nas kciuki! ✊`,
		date: '2025-12-12',
		place: 'WFiIS, Łódź',
		image: 'src/assets/images/events-images/2025-12-12.jpg',
		tag: 'INFORMATION',
		calendar: false,
	},
	{
		id: '2025-12-10-hejka-studenci',
		title: 'Hejka Studenci! 👋 Tym razem łączymy się online! 💻',
		description: `W ten czwartek, 11 grudnia przenosimy się na Teamsy. To idealny moment, żeby zrobić mały status check. ✅ Porozmawiamy sobie o naszych progressach i o tym co konkretnie robimy.
		To świetna okazja, żeby wymienić się doświadczeniami i zmotywować do dalszego działania przed świętami! Zapraszamy wszystkich członków koła (i tych, którzy chcą do nas dołączyć).
		📌 Szczegóły spotkania:
		📅 Termin: 11 grudnia (czwartek), godzina 18:00
		📍 Miejsce: MS Teams
		🔗 Gdzie znajdziecie link? Link do spotkania wrzucimy na nasz Discord około 10 minut przed startem. Bądźcie czujni!
		❤️ Jeśli chcesz dołączyć do naszego koła, wpadnij na nasz serwer i wypełnij formularz!
		Link: https://discord.gg/2UvEkYtsSx`,
		date: '2025-12-10',
		place: 'MS Teams',
		image: 'src/assets/images/events-images/2025-12-11.jpg',
		tag: 'MEETING',
		calendar: true,
		startDate: '2025-12-11',
		endDate: '2025-12-11',
		startTime: '18:00',
		endTime: '19:00',
	},
	{
		id: '2025-12-03-hejka-studenci',
		title: 'Hejka Studenci! 👋 Widzimy się już w ten czwartek!',
		description: `Mamy dla Was konkrety odnośnie do najbliższego spotkania. Szykujcie się na solidną dawkę wiedzy i integracji! ⚛️👾
		Jutro, a więc 4 grudnia, spotykamy się stacjonarnie na Wydziale Fizyki i Informatyki Stosowanej UŁ.
		Co w planach? Poza luźną dyskusją o Waszych projektach odbędzie się szybki kurs wprowadzający do Unity. 🛠️ Będziemy działać w praktyce, więc koniecznie weźcie ze sobą laptopy! 💻
		🎓 Dla kogo są warsztaty? Skupiamy się na pracy wewnątrz naszej grupy, dlatego warsztaty kierujemy do członków koła (obecnych i tych, którzy chcą dołączyć!). Przypominamy, że zgodnie z zasadami, naszymi członkami mogą być wyłącznie studenci.
		🆕 Wahasz się? Spokojnie, możecie dołączyć do nas na próbę, zobaczyć, jak działamy i czy ten klimat Wam pasuje. Wpadnijcie sprawdzić, czy to coś dla Was!
		❤️ Jeśli chcesz dołączyć do naszego koła, wpadnij na nasz serwer i wypełnij formularz! Link: https://discord.gg/2UvEkYtsSx
		📌 Szczegóły: 📅 Termin: 4 grudnia (czwartek) ⏰ Godzina: 18:00 📍 Miejsce: WFiIS UŁ (konkretną salę podamy na naszym Discordzie)`,
		date: '2025-12-03',
		place: 'WFiIS, Łódź',
		image: 'src/assets/images/events-images/2025-12-04.jpg',
		tag: 'WORKSHOP',
		calendar: true,
		startDate: '2025-12-04',
		endDate: '2025-12-04',
		startTime: '18:00',
		endTime: '19:00',
	},
	{
		id: '2025-11-28-cos-sie-kroi',
		title: '✨ Coś się kroi... ✨',
		description: 'Przygotujcie się, bo w Artefaktach nadchodzą zmiany! 🚀 Odświeżamy naszą szatę graficzną, ale też reaktywujemy nasze sociale, żeby być z Wami w stałym kontakcie. Szykujcie się na wizualny level up i większą dawkę contentu na naszych socialach. Bądźcie czujni – efekty ujawnimy już za chwilę! ⏳',
		date: '2025-11-28',
		place: 'WFiIS, Łódź',
		image: 'src/assets/images/events-images/2025-11-28.jpg',
		tag: 'INFORMATION',
		calendar: false,
	}
]

export const latestEvents = [...events]
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.slice(0, 3)
