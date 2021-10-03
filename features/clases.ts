class Vechicle {
  constructor(public color: string) {}

  protected honc(): void {
    console.log('Beep');
  }
}

const vechicle = new Vechicle('orange');
console.log(vechicle.color);

class Car extends Vechicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honc();
  }
}

const car = new Car(4, 'blue');

car.startDrivingProcess();
