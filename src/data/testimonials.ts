export interface Testimonial {
  id: string;
  role: string;
  stat: string;
  quote: string;
  author?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    role: 'Középvezető',
    stat: 'Céltudatosság',
    quote: 'A coaching során megtaláltam azt a fókuszt, ami évek óta hiányzott.'
  },
  {
    id: '2',
    role: 'Vállalkozó',
    stat: 'Hatékonyság',
    quote: 'Segített más perspektívából rátekinteni a kihívásaimra, így könnyebben hozok meg nehéz döntéseket.'
  },
  {
    id: '3',
    role: 'Magánszemély',
    stat: 'Belső béke',
    quote: 'Dióval a munka rávilágított arra, hogy az önmagamra szánt idő nem önzőség, hanem az egyensúly alapja.'
  }
];
