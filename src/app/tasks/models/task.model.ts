export class Task {
  constructor(public id: number,
              public action: string,
              public priority: number,
              public estHours: number,
              public actHours?: number,
              public done?: boolean) {
    this.actHours = actHours || 0;
    this.done = done || false;
  }
}

