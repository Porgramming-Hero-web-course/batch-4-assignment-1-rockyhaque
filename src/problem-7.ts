class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const presentYear = new Date().getFullYear();
    return presentYear - this.year;
    // console.log(presentYear)
  }
}

// const car = new Car("Honda", "Civic", 2020);

// console.log(car.getCarAge())
