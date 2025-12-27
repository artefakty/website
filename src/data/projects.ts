import imgFortress from '../assets/images/projects-images/fortress.jpg';
import imgBrozard from '../assets/images/projects-images/brozard.jpg';
import imgSmokenSails from '../assets/images/projects-images/smokensails.jpg';
import imgMirrorDash from '../assets/images/projects-images/mirrordash.jpg';
import imgJustanormalblackcat from '../assets/images/projects-images/justanormalblackcat.jpg';
import imgTheophiuchus from '../assets/images/projects-images/theophiuchus.jpg';
import imgThelosttable from '../assets/images/projects-images/thelosttable.jpg';
import imgUnipol from '../assets/images/projects-images/unipol.jpg';

export type Project = {
  id: string
  title: string
  description: string
  status: string
  genre: string
  authors: string
  projectLink: string
  image: string
  date: string
}

export const projects: Project[] = [
  {
    id: 'unipol',
    title: 'Unipol',
    description:
      '',
    status: 'GRA',
    genre: 'Monopoly-like',
    authors: 'Tobkubos, Gradi',
    projectLink: 'https://tobkubos.itch.io/unipol',
    image: imgUnipol,
    date: '2025-05-14',
  },
  {
    id: 'thelosttable',
    title: 'The Lost Table',
    description:
      'The Lost Table to platformówka, w której celem gracza jest odnalezienie zaginionych nóg stołu. Droga do sukcesu wymaga planowania i używania magicznej piłki, zdolnej do modyfikacji terenu. Piłka potrafi odbijać się od elementów mapy, co otwiera dodatkowe możliwości manipulowania otoczeniem i rozwiązywania zagadek. Po planszy latają jednak duchy, które potrafią zabierać poszczególne rodzaje magicznych piłek, co dodatkowo utrudnia rozgrywkę. Myśl strategicznie, wykorzystuj odbicia i działaj z refleksem, aby odzyskać nogi stołu i unikać przeszkadzających upiorów!',
    status: 'GRA, Game Jam',
    genre: 'Platformer',
    authors: 'BearNerd',
    projectLink: 'https://bearnerd.itch.io/lost-table',
    image: imgThelosttable,
    date: '2025-05-12',
  },
  {
    id: 'theophiuchus',
    title: 'The Ophiuchus',
    description:
      'Gra, w której gracz wciela się w tytułowego "Wężownika" , trzynasty znak zodiaku. Odrzucony przez pozostałą dwunastkę musi walczyć o wolność,  mimo że jego los jest z góry przesądzony...',
    status: 'GRA, Game Jam',
    genre: 'Shooter',
    authors: 'Tobkubos, kuba11g, Kassjan, Gradi, BearNerd',
    projectLink: 'https://tobkubos.itch.io/the-ophiuchus',
    image: imgTheophiuchus,
    date: '2025-04-27',
  },
  {
    id: 'justanormalblackcat',
    title: 'Just a normal black cat',
    description:
      'A game by Whale\'s Hand team:',
    status: 'GRA, Game Jam',
    genre: 'Puzzle, Platformer',
    authors: 'Piotr Kosek, Konrad Karwowski, Marcin "Dybs" Dybaś, Michał Domarecki, Dawid Piech',
    projectLink: 'https://shelim.itch.io/just-a-normal-black-cat',
    image: imgJustanormalblackcat,
    date: '2025-04-27',
  },
  {
    id: 'mirrordash',
    title: 'Mirror DASH!',
    description:
      'Commision for 23h WFIIS GameJam. Game for 2 players on split screen. Run and Build! Remember to not be transformed into table!',
    status: 'GRA, Game Jam',
    genre: 'Racing',
    authors: 'Tobkubos, kuba11g, Kassjan, Gradi',
    projectLink: 'https://tobkubos.itch.io/mirror-dash',
    image: imgMirrorDash,
    date: '2024-10-19',
  },
  {
    id: 'smokensails',
    title: 'Smoke\'n\'Sails',
    description:
      'Giera o wychillowanych Piratach. ARRRRRRRRRRR. Gra naszej produkcji czerpie inspirację z kultowej gry "Polybius". Głównym założeniem projektu było stworzenie rozrywki o przyjemnym, relaksującym charakterze, dostępnej do swobodnej zabawy. Zespół twórców, w składzie którego znaleźli się Adrian, Tobiasz, Jakub, Konrad oraz Michał, podjął wyzwanie tworzenia gry w ciągu zaledwie 24 godzin. Efektem pracy jest nasza gra, którą serdecznie zapraszamy do pobrania i eksploracji.',
    status: 'GRA, Game Jam',
    genre: 'Shooter',
    authors: 'Tobkubos, kuba11g, Kassjan, Gradi, mikeAl0ne',
    projectLink: 'https://tobkubos.itch.io/smokesnsail-szlifierka-ktowa-bosch',
    image: imgSmokenSails,
    date: '2024-03-11',
  },
  {
    id: 'brozard',
    title: 'BROzard',
    description:
      'BROzard is a roguelike game, where the player takes on the role of a wizard who fights against slimes. After each wave, the player has to allocate points to improve his battle skills. Additionally, he gets powerful artifacts every few waves. There is also a chance of a thunderstorm, which will reduce visibility. You can encounter up to 5 different slimes and their mutated versions as well!',
    status: 'GRA',
    genre: 'Survival',
    authors: 'Tobkubos, Gradi',
    projectLink: 'https://tobkubos.itch.io/brozard',
    image: imgBrozard,
    date: '2023-10-21',
  },
  {
    id: 'fortress',
    title: 'Fortress',
    description:
      'A game by HotPotato team',
    status: 'GRA, Game Jam',
    genre: 'STRATEGY, CARD GAME, SURVIVAL',
    authors: 'Piotr Szekalski (Lead / Art), Piotr Kosek (Coding), Grażyna Pietruszka (Art), Sebastian Brasiak (Art)',
    projectLink: 'https://shelim.itch.io/fortress',
    image: imgFortress,
    date: '2022-07-22',
  },
]

export const latestProjects = [...projects]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)
