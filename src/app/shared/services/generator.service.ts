import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  constructor() { }


  * generateSequence(start: number, end: number) : IterableIterator<number> {
    for (let i = start; i <= end; i++) yield i;
  }

  * generate() {

    // 0..9
    yield* this.generateSequence(48, 57);

    // A..Z
    yield* this.generateSequence(65, 90);

    // a..z
    yield* this.generateSequence(97, 122);

  }

}

