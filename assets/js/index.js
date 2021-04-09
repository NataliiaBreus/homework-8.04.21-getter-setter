
'use strict';
class RangeValidator  {
  /**
   * 
   * @param {*} fromNumber 
   * @param {*} toNumber 
   */
  constructor (fromNumber, toNumber) 
  if (typeof fromNumber !== "number" || typeof toNumber !== "number"){
    throw new TypeError ("This symbol is not a number!");
  }
function validate (number) {
  if number >= this.fromNumber && number <= this.toNumber{
    return number;
  }
  throw new TypeError ("Wrong number!");
}
this.fromNumber = fromNumber;
this.toNumber = toNumber;

  set fromNumber (newFromNumber) {
    this._fromNumber = newFromNumber;
  };
  get fromNumber (){
    return this._fromNumber;
  };
  set toNumber (newToNumber) {
    this._toNumber = newToNumber;
  };
  get toNumber(){
    return this._toNumber;
  }
}
get Range(){
return `${this.fromNumber} ${this.toNumber}`;
}


  

