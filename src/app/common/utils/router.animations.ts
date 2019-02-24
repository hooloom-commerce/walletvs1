import { trigger, animate, animateChild, style, group, query, transition } from '@angular/animations';

export const slideAnimation = trigger(
  'slideAnimation',
  [
    transition('* <=> *', [
      style({ height: '!' }),
      query(':enter', [
        style({ transform: 'translateX(100%)' })
      ], { optional: true }),
      query(':enter, :leave', [
        style({ position: 'absolute', top: 0, left: 0, right: 0 })
      ], { optional: true }),
      group([
        query(':leave', [
            animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
            animateChild()
        ], { optional: true }),
        // and now reveal the enter
        query(':enter', [
          animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' })),
          animateChild()
        ], { optional: true }),
      ]),
    ])
  ]
);

export const fadeAnimation = trigger(
  'fadeAnimation',
  [
    transition('* <=> *', [
        query(':enter', [
            style({ opacity: 0 })
        ],
        {optional: true}
        ),
        query(':leave', [
            style({ opacity: 0 }),
            animate('.3s ease-in-out', style({ opacity: 0, position: 'absolute', left: 0, right: 0, top: 0 }))
        ],
        {optional: true}
        ),
        query(':enter', [
            style({ opacity: 0 }),
            animate('.3s ease-in-out', style({ opacity: 1 }))
        ],
        {optional: true}
        )
    ])
  ]
);

