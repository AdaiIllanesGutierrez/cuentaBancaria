//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor(dinero) {
   this.dinero=dinero;
  }

  open() {
  this.dinero=0;
  }

  close() {
    throw new Error("Remove this statement and implement this function");
  }

  deposit(num) {
    let dinero=num;
   this.dinero+=dinero;
    return this.dinero;
  }

  withdraw(num) {
    let dinero=num;
   this.dinero-=dinero;
    return this.dinero;
  }

  get balance() {
 
    return this.dinero;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
