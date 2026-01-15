import img20251128 from '../assets/images/events-images/2025-11-28.jpg'
import img20251204 from '../assets/images/events-images/2025-12-04.jpg'
import img20251211 from '../assets/images/events-images/2025-12-11.jpg'
import img20251212 from '../assets/images/events-images/2025-12-12.jpg'
import img20251214 from '../assets/images/events-images/2025-12-14.jpg'
import img20251216 from '../assets/images/events-images/2025-12-16.jpg'
import img20251218 from '../assets/images/events-images/2025-12-18.jpg'
import img20251222 from '../assets/images/events-images/2025-12-22.jpg'
import img20251224 from '../assets/images/events-images/2025-12-24.jpg'
import img20260103 from '../assets/images/events-images/2026-01-03.jpg'
import img20260114 from '../assets/images/events-images/2026-01-14.jpg'

export type EventItem = {
	id: string
	title: string
	description: string
	date: string
	place: string
	image: string
	tag: string
	instagram?: string
	facebook?: string
	calendar?: boolean
	startDate?: string
	endDate?: string
	startTime?: string
	endTime?: string
	location?: string
}

export const events: EventItem[] = [
	{
		id: '2026-01-14-hejka-studenci',
		title: 'Hejka Studenci i Pasjonaci! 👋',
		description: `🔄 Reupload! Wdarł się mały błąd w matrixie (czytaj: w dacie), więc wrzucamy jeszcze raz. Wracamy na właściwą linię czasową z poprawnym terminem!
		Zapraszamy na stacjonarną, łódzką edycję Global Game Jamu, która odbędzie się w Centrum Szkoleniowo-Konferencyjnym Uniwersytetu Łódzkiego! 🏢
		To dla nas wyjątkowa chwila – po raz pierwszy gospodarzem łódzkiej edycji wydarzenia jest ekipa SKN Artefakty z Wydział Fizyki i Informatyki Stosowanej Uniwersytet Łódzki. 🚀
		Tworzymy tę imprezę jako wydarzenie otwarte – od pasjonatów dla pasjonatów. Chcemy, by każdy znalazł tu swoje miejsce. Niezależnie od swojej roli, niezależnie od tego czy jesteś programistą, grafikiem, muzykiem, czy level designerem - niezależnie też od swojego doświadczenia, czy jesteś kimś kto zjadł już zęby na robieniu gier czy dopiero stawiasz swoje pierwsze kroki w jamowym gamedevie – czekamy właśnie na ciebie! 💻🎨🎵
		🤝 Nie masz drużyny? Spokojnie! Nie musisz przychodzić z gotowym składem. Na miejscu możesz dołączyć do innych, poznać świetnych ludzi i wymienić się wiedzą.
		⚠️ Uwaga: Wymagamy chociaż podstawowych umiejętności w swojej dziedzinie – podczas eventu skupiamy się na tworzeniu, więc nie będzie czasu na naukę od zera.
		A, czy wspomnieliśmy już, że będzie darmowa pizza? 🍕😋
		Przyjdź, stwórz grę i zbuduj cenne doświadczenia! ✅ Wstęp jest darmowy. 📝 Obowiązują wcześniejsze zapisy (datę startu rejestracji podamy wkrótce!).
		Do zobaczenia przy kodzie!
		Zarząd SKN Artefakty 🐉`,
		date: '2026-01-14',
		place: 'WFiIS, Łódź',
		image: img20260114,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DTfu5WPDeZj/',
		facebook: 'https://www.facebook.com/photo/?fbid=122269292588076747&set=a.122120223686076747',
		calendar: false,
	},
	{
		id: '2026-01-03-hejka-studenci',
		title: 'Hejka Studenci! 👋',
		description: `Mamy to! Nasza oficjalna strona internetowa właśnie wystartowała w sieci! 🌐 Od teraz całą naszą działalność znajdziecie w jednym, przejrzystym miejscu pod adresem: 👉 skn-artefakty.pl
		Strona to efekt ciężkiej pracy i talentu naszej ekipy. Projekt i wykonanie to zasługa naszej członkini Aleksandry Stopki oraz wiceprzewodniczącego Jakuba Gorządka. Wielkie brawa dla nich! 👏
		Co znajdziecie na stronie? 🎮 Nasze Projekty – portfolio gier i aplikacji, które tworzymy. 📅 Wydarzenia – archiwum i zapowiedzi tego, co robimy na uczelni. 📍 Lokalizacja – mapka, która doprowadzi Was prosto do naszej sali. 📝 Formularz kontaktowy – najszybsza droga, żeby do nas napisać, zapytać o rekrutację lub współpracę.
		Wbijajcie, testujcie i dajcie znać, jak Wam się podoba!
		Zarząd SKN Artefakty 🐉`,
		date: '2026-01-03',
		place: 'WFiIS, Łódź',
		image: img20260103,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DTDKfGHjzUu/',
		facebook: 'https://www.facebook.com/photo?fbid=122267847992076747&set=a.122120223686076747',
		calendar: false,
	},
	{
		id: '2025-12-24-hejka-studenci',
		title: 'Hejka Studenci! Wszystkiego Najlepszego z okazji Świąt!🎄✨',
		description: `Odłóżcie klawiatury i spędźcie te dni razem z rodziną! ⌨️
		Pamiętajcie że w Święta bug się rodzi, kod truchleje, choć nie w biosie osadzony - segfault krzepnie, flash ciemnieje - backtrace będzie nieskończony! ✨
		Odpocznijcie, nabierzcie nowych pomysłów i szerszego spojrzenia na to co robicie na co dzień. Niech to będzie czas dla was i waszych rodzin. ✨
		I widzimy się oczywiście po nowym roku! 🎆👋
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-24',
		place: 'WFiIS, Łódź',
		image: img20251224,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DSpMyZFDI4Z/',
		facebook: 'https://www.facebook.com/photo?fbid=122266477136076747&set=a.122120223686076747',
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
		Link: https://discord.gg/2UvEkYtsSx
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-22',
		place: 'WFiIS, Łódź',
		image: img20251222,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DSkQ8qWDnmO/',
		facebook: 'https://www.facebook.com/photo?fbid=122266243496076747&set=a.122120223686076747',
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
		Wpadajcie, żeby wspólnie zamknąć ten rok!
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-17',
		place: 'WFiIS, Łódź',
		image: img20251218,
		tag: 'MEETING',
		instagram: 'https://www.instagram.com/p/DSXY90ZCC35/',
		facebook: 'https://www.facebook.com/photo?fbid=122265606152076747&set=a.122120223686076747',
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
		Mieliśmy okazję być tam, reprezentować "Artefakty" i po prostu cieszyć się atmosferą akademickiej wspólnoty, a także udzielić kilku wywiadów. ✨ Tak jak w przypadku ŁDI – po małym poślizgu czasowym wracamy do Was z fotkami i wspomnieniami, bo działo się naprawdę sporo! Dziękujemy organizatorom i wszystkim, z którymi mogliśmy zbić pionę. 🙌
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-16',
		place: 'BUŁ, Łódź',
		image: img20251216,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DSU0KgXFPMp/',
		facebook: 'https://www.facebook.com/photo?fbid=122265248948076747&set=a.122120223686076747',
		calendar: false,
	},
	{
		id: '2025-12-14-hejka-studenci',
		title: 'Hejka Studenci! 👋 Listopadowych podsumowań ciąg dalszy! 🌪️',
		description: `Zaczynamy od jednego z najważniejszych wydarzeń minionego miesiąca. Mieliśmy przyjemność wystawiać się na Łódzkich Dniach Informatyki, które odbywały się od 4 do 6 listopada 2025! 💻 To była niesamowita okazja, żeby poczuć puls branży IT i GameDevu w Łodzi. 🚀
		Super było zobaczyć Was wszystkich! Wielkie dzięki dla każdego, kto podszedł do naszego stoiska, przybił piątkę i zamienił z nami słowo. 🤝 Miło było porozmawiać o Waszych zainteresowaniach i pasji do gier. Po całym tym listopadowym pędzie w końcu możemy na spokojnie powspominać ten świetny event. Dziękujemy za Waszą obecność i energię! ⚡
		Do zobaczenia na kolejnych edycjach!
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-14',
		place: 'WMiI, Łódź',
		image: img20251214,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DSPqoVUjZ-e/',
		facebook: 'https://www.facebook.com/photo?fbid=122264948906076747&set=a.122120223686076747',
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
		Bardzo cieszymy się z zaufania, jakim nas obdarzyliście! ❤️ To dla nas ogromne wyróżnienie, ale też wyzwanie. Obiecujemy, że postaramy się o dalszy rozwój koła, ciekawe warsztaty i jeszcze więcej GameDevowej zajawki. Trzymajcie za nas kciuki! ✊
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-12',
		place: 'WFiIS, Łódź',
		image: img20251212,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DSKhBy8lomt/',
		facebook: 'https://www.facebook.com/photo?fbid=122264629424076747&set=a.122120223686076747',
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
		Link: https://discord.gg/2UvEkYtsSx
		Do usłyszenia! 
		Zarząd SKN Artefakty 🐉`,
		date: '2025-12-10',
		place: 'MS Teams',
		image: img20251211,
		tag: 'MEETING',
		instagram: 'https://www.instagram.com/p/DSFXZwPAccz/',
		facebook: 'https://www.facebook.com/photo?fbid=122264289656076747&set=a.122120223686076747',
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
		📌 Szczegóły: 📅 Termin: 4 grudnia (czwartek) ⏰ Godzina: 18:00 📍 Miejsce: WFiIS UŁ (konkretną salę podamy na naszym Discordzie)
		Do zobaczenia! Zarząd SKN Artefakty 🐉`,
		date: '2025-12-03',
		place: 'WFiIS, Łódź',
		image: img20251204,
		tag: 'WORKSHOP',
		instagram: 'https://www.instagram.com/p/DRzsGsPFX8C/',
		facebook: 'https://www.facebook.com/photo?fbid=122263158704076747&set=a.122120223686076747',
		calendar: true,
		startDate: '2025-12-04',
		endDate: '2025-12-04',
		startTime: '18:00',
		endTime: '19:00',
	},
	{
		id: '2025-11-28-cos-sie-kroi',
		title: '✨ Coś się kroi... ✨',
		description: `Przygotujcie się, bo w Artefaktach nadchodzą zmiany! 🚀 Odświeżamy naszą szatę graficzną, ale też  reaktywujemy nasze sociale, żeby być z Wami w stałym kontakcie. Szykujcie się na wizualny level up i większą dawkę contentu na naszych socialach. Bądźcie czujni – efekty ujawnimy już za chwilę! ⏳`,
		date: '2025-11-28',
		place: 'WFiIS, Łódź',
		image: img20251128,
		tag: 'INFORMATION',
		instagram: 'https://www.instagram.com/p/DRmd6caAIAb/',
		facebook: 'https://www.facebook.com/photo/?fbid=122262453620076747&set=a.122120223686076747',
		calendar: false,
	}
]

export const latestEvents = [...events]
	.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	.slice(0, 3)
