
describe('Testing functions of the Account class', () => {
    const account = new Account(10021);
    it('Test getNumber Method', () => {
        
        assert.equal(account.getNumber(), 10021 , " The client account no is 10021 ");
    });
    it('Test getBalance Method', () => {
       
        assert.equal(account.getBalance(), 0.0, "The default amount on new Account is 0.0");
    });
    
    it(' Test the deposit Method', () => {
        account.deposit(1000);
          assert.equal(account.getBalance(), 1000, "You have deposited 1000$");
        
    });
    it("Tries to withdraw -100.00 and throws an exception", ()=>{
        assert.throw(() => account.withdraw(-100.00), RangeError, "Withdraw amount has to be greater than zero");
    });
  
    it('Test the withdrow Method', () => {
        account.deposit(2000);
        account.withdraw(1000);
        assert.equal(account.getBalance(), 2000, " Your new balance");
        
    });
    
    it(' Displays the account informations', () => {
       
        assert.equal(account.toString(), "Account 10021: balance 2000");
    });
    it('Performs end of the month tasks', ()=>{
       assert.equal(account.endOfMonth(), ""); 
    });
});
describe(' Testing Saving Account class ', () => {
    const savingsAccount= new SavingAccount(10021,1.25);
    savingsAccount.deposit(1000.00);
    it('check if the interest rate is 2.5', () => { 
    assert.equal(savingsAccount.getInterest(), 1.25, "interest rate");
    });
    it('Try to Set  negative Interest rate', () => {
        assert.throw(() => savingsAccount.setInterestRate(-1.00), RangeError, "Interest rate has to be greater than zero");
    });
    it('Set interest rate', () => {
        savingsAccount.setInterestRate(1.25);
        assert.equal(savingsAccount.getInterest(), 1.25, "Interest rate");
    });
    it('Add interest Rate', () => {
        savingsAccount.addInterest();
        assert.equal(savingsAccount.getBalance(), 1012.5);
        
        
    });
});
describe("Tests Checking Account Class", function(){
    let checkingAccount = new CheckingAccount(10023, 0.00);
    checkingAccount.deposit(50000.00);

    it("Checks if the overdraft limit is 0.00", function(){
        assert.equal(checkingAccount.getOverdraftLimit(), 0.00);
    });

    it("Tries to set the overdraft limit to -1,000.00 and throws exception", function(){
        assert.throw(() => checkingAccount.setOverdraftLimit(-1000.00), RangeError, "Overdraft limit has to be greater than or equal to zero");
    });

    it("Sets the overdraft limit to 1,000.00", function(){
        checkingAccount.setOverdraftLimit(1000.00);
        assert.equal(checkingAccount.getOverdraftLimit(), 1000.00);
    });
    
    it("Tries to withdraw -50.00 and throws an exception", function(){
        assert.throw(() => checkingAccount.withdraw(-50.00), RangeError, "Withdraw amount has to be greater than zero");
    });

    it("With current balance of 50,000.00, making a withdrawal 40,000.00 and should have a balance of 10,000.00", function(){
        checkingAccount.withdraw(40000);
        assert.equal(checkingAccount.getBalance(), 10000.00);
    });

    it("Withdraws another 10,600.00 and should have a balance of -600.00", function(){
        checkingAccount.withdraw(10600);
        assert.equal(checkingAccount.getBalance(), -600.00);
    });

   

    it("Tries to withdraw beyond the overdraft limit and throws exception.", function(){
        assert.throw(() => checkingAccount.withdraw(1000.00), Error, "Insufficient funds: Your current balance is -600. Your overdraft limit is 1000.");
    });

    it("Displays the checking account information", function(){
        assert.equal(checkingAccount.toString(), "Checking account 10023: balance -600 and an overdraft limit of 1000.");
    });

    it("Performs end of month tasks", function(){
        assert.equal(checkingAccount.endOfMonth(), "Warning, low balance CheckingAccount 10023: balance: -600 overdraft limit: 1000");
    });
    
});

describe("Bank Test", function(){
    let bank = new Bank();

    it("Creates an Account and checks if its account number is 1", function(){
        assert.equal(bank.addAccount(), 1);
    });

    it("Creates a Savings Account and checks if its account number is 2", function(){
        assert.equal(bank.addSavingsAccount(1.55), 2);
    });

    it("Creates a Checking Account and checks if its account number is 3", function(){
        assert.equal(bank.addCheckingAccount(2500), 3);
    });

    it("Tries to close a non-existing account and it returns false.", function(){
        assert.equal(bank.closeAccount(4), false);
    });

    it("Closes an existing account", function(){
        assert.equal(bank.closeAccount(2), true);
    });

    it("Generates accounts report", function(){
        assert.equal(bank.accountReport(), "Account 1: balance 0\nChecking account 3: balance 0 and an overdraft limit of 2500.");
    });

    it("Performs end of month tasks - account status is okay.", function(){
        assert.equal(bank.endOfMonth(), "");
    });

    it("Performs end of month tasks - CheckingAccount run overdraft.", function(){
        bank._accounts[1].withdraw(1000);
        assert.equal(bank.endOfMonth(), "Warning, low balance CheckingAccount 3: balance: -1000 overdraft limit: 2500");
    });

    
});