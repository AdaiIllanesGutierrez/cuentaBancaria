//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {

  constructor(dinero) {
   this.activo = false
   this.dinero=dinero;
  }

  open() {
  if (this.activo) throw new ValueError()
  this.activo= true
  this.dinero=0;
  }

  close() {
    if (this.activo) this.activo= false
    else throw new ValueError()
  }

  deposit(num) {
    if (!this.activo || num<0 ) throw new ValueError()
    let dinero=num;
   this.dinero+=dinero;
    return this.dinero;
  }

  withdraw(num) {
    if (!this.activo || num>this.dinero || num<0) throw new ValueError()
    let dinero=num;
   this.dinero-=dinero;
    return this.dinero;
  }

  get balance() {
    if (!this.activo) throw new ValueError()
    return this.dinero;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
