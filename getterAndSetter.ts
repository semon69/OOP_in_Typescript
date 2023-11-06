{
    // Access Modifier 

    class BankAccount {
        readonly id: number;
        name: string; 
        protected balance: number;  

        constructor(id: number, name: string, balance: number){
            this.id = id,
            this.name = name,
            this.balance = balance
        }

        set Deposit(amount : number){
            this.balance = this.balance + amount
        }

        // addDeposit(amount: number){
        //     this.balance = this.balance + amount
        // }

        set CashOut(amount : number){
            this.balance = this.balance - amount
        }
        // cashOutDeposit(amount : number){
        //     this.balance = this.balance - amount
        // }

        get Balance(){
            return  this.balance
        }

        // getConsole(){
        //     console.log(this.id, this.name, this.balance);
            
        // }
        
    }

    class StudentAccount extends BankAccount {
        test(){
           return this.balance
        }
    }

    const amarAccount  = new BankAccount(1221, 'Mr. Emon', 100)
    const studentAccount  = new StudentAccount(1221, 'Mr. Koshai', 50)
    // amarAccount.id = 222

    // amarAccount.addDeposit(50)
    // amarAccount.cashOutDeposit(20)
    // amarAccount.getConsole()

    // console.log(studentAccount.test());
    amarAccount.CashOut = 20
    amarAccount.Deposit = 40
    console.log(amarAccount.Balance);
    




    // 
}