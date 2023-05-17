class Something {
  constructor(param1) {
    this.param1 = param1;
  }

  sayMyName() {
    console.log(this.param1);
  }
}

const Walter = new Something("Heisenberg");

Walter.sayMyName();
