
'use strict';
class RangeValidator  {
  /**
   * 
   * @param {*} from 
   * @param {*} to 
   */
  constructor (from, to) {
      this.from = from;
      this.to = to;
  }
      set from (newFrom) {
          if(typeof newFrom !== "number"){
              throw new TypeError ("This symbol is not a number")
          }
        this._from = newFrom;
      };
      get from (){
        return this._from;
      };
      set to (newTo) {
          if (typeof newTo !== "number"){
              throw new TypeError ("This symbol is not a number!")
          }
        this._to = newTo;
      };
      get to(){
        return this._to;
      }
    
    validate (number) {
      if (number >= this.from && number <= this.to) {
        return number;
      }else {
         throw new TypeError ("Wrong number!");
      }
    }
    get range(){
    return [from, to];
    };
}

const numbers = new RangeValidator (5, 15);
console.log(numbers);
