{
    // Access Modifier 

    class BankAccount {
        readonly id: number;
        name: string; 
        // private balance: number;
        protected balance: number;  // protected use kora hoi eitake er child class a access dite. Private use korle child class a access paua jaina

        constructor(id: number, name: string, balance: number){
            this.id = id,
            this.name = name,
            this.balance = balance
        }

        addDeposit(amount: number){
            this.balance = this.balance + amount
        }

        cashOutDeposit(amount : number){
            this.balance = this.balance - amount
        }

        getConsole(){
            console.log(this.id, this.name, this.balance);
            
        }
        
    }

    class StudentAccount extends BankAccount {
        test(){
           return this.balance
        }
    }

    const amarAccount  = new BankAccount(1221, 'Mr. Emon', 100)
    const studentAccount  = new StudentAccount(1221, 'Mr. Koshai', 50)
    // amarAccount.id = 222

    amarAccount.addDeposit(50)
    amarAccount.cashOutDeposit(20)
    amarAccount.getConsole()

    console.log(studentAccount.test());
    

























    // 
}