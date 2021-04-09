
'use strict';
class RangeValidator (from, to) {
  this.from = from;
  this.to = to;
  if (typeof from !== "number" || typeof to !== "number"){
    throw new TypeError ("This symbol is not a number!");
  }
function validate (number) {
  if number >= this.from && number <= this.to{
    return number;
  }
  throw new TypeError ("Wrong number!");
}

  set from (newFrom) {
    this._from = newFrom;
  };
  get from (){
    return this._from;
  };
  set to (newTo) {
    this._to = newTo;
  };
  get to(){
    return this._to;
  }
};
get Range(){
return `${this.from} ${this.to}`;
}


  

