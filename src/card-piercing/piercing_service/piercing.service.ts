import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Piercing, PIERCINGS } from '../piercing'; 


@Injectable({
  providedIn: 'root'
})
export class PiercingService {

  constructor() { }
  
  getPiercings(): Observable<Piercing[]> {
    return of(PIERCINGS);
  }
}
