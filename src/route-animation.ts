import {
    transition,
    trigger,
    query,
    style,
    animate,
    group,
    animateChild
} from '@angular/animations';
import { Optional } from '@angular/core';
export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', [
            
            query(':enter, :leave',
          
                style({
                    position: 'absolute',

                   
                   
                    opacity: 0.3,
                    transform: 'scale(0) translateY(100%)'
                }),
                { optional: true }
                ),
                query(':enter',
              
                animate('0.9s ease',
                style({
                    opacity: 1,
                    transform: 'scale(1) translateY(0)'
                })),
                { optional: true },
                
               )
               
               

               
           
        ])
        //         
    ]);