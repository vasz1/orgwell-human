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
    role: 'Zoli',
    stat: 'Iránymutatás',
    quote: 'A coaching a kérdezés- és az odafigyelés keverékének művészete: nem tanácsot kap az ember, nem megmondják mit kellene ebben a helyzetben tenni, inkább a jól irányított kérdésekkel a coach rávezet a megoldásra. Diána ennek mestere - csak kérdez és kérdez, de nem tanácsol. Pont, ahogy egy coachnak kell.'
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
