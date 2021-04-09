
'use strict';
class RangeValidator (from, to) {
  this.from = from;
  this.to = to;
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
getRange(){
return `${this.from} ${this.to}`;
}

  

