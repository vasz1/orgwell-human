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
    role: 'Eszter',
    stat: 'Előrelépés',
    quote: 'Nekem nagyon sokat segítettek ezek az ülések. Azzal, hogy Dia jókat kérdezett és jó feladatokat adott nekem, azzal tudtam előre menni, és így tudtak bennem megszületni azok a gondolatok és érzések, amik a lelkem mélyén szunnyadtak.'
  },
  {
    id: '3',
    role: 'Kata',
    stat: 'Belső béke',
    quote: 'Diával a munka rávilágított arra, hogy az önmagamra szánt idő nem önzőség, hanem az egyensúly alapja.'
  }
];
