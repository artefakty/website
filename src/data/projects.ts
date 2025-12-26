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

const placeholderImage = '/assets/images/avatar.svg'

export const projects: Project[] = [
  {
    id: 'mirror-dash',
    title: 'MIRROR DASH',
    description:
      'Gra została stworzona na 23h WFIIS GameJam 2024. Gra dla 2 graczy na podzielonym ekranie. Biegaj i buduj! Pamiętaj, żeby nie zostać zamienionym w stół!',
    status: 'GRA Z GAME JAMU',
    genre: 'RACING',
    authors: 'Jan Kowalski, Anna Nowak, Jan Kowalski, Anna Nowak',
    projectLink: '/projects/mirror-dash',
    image: placeholderImage,
    date: '2024-12-11',
  },
  {
    id: 'darkness-rts',
    title: 'Darkness',
    description:
      'To nowy projekt rozwijany w czasie wolnym, w którym z głębokiej ciekawości zanurkowałem w Deterministic Lockstep.',
    status: 'WORK-IN-PROGRESS',
    genre: 'RTS',
    authors: 'Jan Kowalski',
    projectLink: '',
    image: placeholderImage,
    date: '2024-11-05',
  },
  {
    id: 'darkness-rts-game',
    title: 'Darkness',
    description:
      'To nowy projekt rozwijany w czasie wolnym, w którym z głębokiej ciekawości zanurkowałem w Deterministic Lockstep.',
    status: 'WORK-IN-PROGRESS',
    genre: 'RTS, Game',
    authors: 'Jan Kowalski',
    projectLink: '',
    image: placeholderImage,
    date: '2024-11-05',
  },
]

export const latestProjects = [...projects]
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  .slice(0, 3)
