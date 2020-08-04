class SavingAccount extends Account{
   constructor(number,interest){
       super(number);
       this._interest=interest;

   }
   getInterest(){
    return this._interest;
   }
   setInterestRate(interest){
    if(interest <= 0){
        throw new RangeError("Interest rate has to be greater than zero");
    }

    this._interest = interest;
}
   addInterest(){
    this._balance += (this._balance * this._interest) / 100;

}
// toString() {
//     return `Account ${this._number}: balance ${this._balance}`;
//   }
toString(){
    return "SavingsAccount: balance: " + this._balance + " interest: " + this._interest
 }
   
}
