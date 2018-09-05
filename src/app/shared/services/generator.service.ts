import {Injectable} from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() {
  }

  generate(length) {
    const result = [];
    for (let i = 0; length > i; i++) {
      const random = Math.random();
      result.push(random < 0.3 ? getRandomChar(48, 57) : random < 0.6 ? getRandomChar(65, 90) : getRandomChar(97, 122));
    }
    return result.join('');
  }
}

function getRandomChar(min: number, max: number) {
  return String.fromCharCode(min + Math.floor(Math.random() * Math.floor(max)));
}
