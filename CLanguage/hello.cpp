#include <iostream>
using namespace std;
#include <string.h>

class bank{
    private : 
        int accountNumber;
        char accountHolderName[100];
        int balance;
    
    public : 

        createAccount(){
            cout << "Enter Account number : ";
            cin >> this->accountNumber;
            cout << "Enter Account Holder Name : ";
            cin >> this->accountHolderName;
            cout << "Enter Account Balance : ";
            cin >> this->balance;
        }

        void deposit(int amount){
            this->balance += amount;
            cout << "Rs. " << amount << " Added in your account successfully !" << endl;
        }

        void withdraw(int amount){
            this->balance -= amount;
            cout << "Rs. " << amount << " debited from your account !" << endl;
        }

        void checkBalance(){
            cout << "Rs. " << this->balance << " available in your account !" << endl;
        }

        void getAccountInfo(){
            cout << "Your Account number is " << this->accountNumber << endl;
            cout << "Your Account Name is " << this->accountHolderName << endl;
            cout << "Your Account balance is " << this->balance << endl;
        }


};



int main(){
    int num=0;
   
    bank user[num];


    while(true){
        int choice;
        cout << "Welcome to our bank !" << endl;
        cout << "Select option from the given list : " << endl;
        cout << "1. Open your account" << endl;
        cout << "2. Deposit amount in your account" << endl;
        cout << "3. Check your account balance" << endl;
        cout << "4. Check your account info" << endl;

        cin >> choice;

        if(choice==1){
            cout << "Enter the number to open account : ";
            cin >> num;

            for(int i=0;i<num;i++){
                user[i].createAccount();
            }

        }else if( choice == 2){
            // int amount;
            // cout << "Enter amount to deposit : " ;
            // cin >> amount;
            // user.deposit(amount);
        }else if(choice == 3){
            // user.checkBalance();
        }else{
            break;
        }
    }

}