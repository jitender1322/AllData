#include <iostream>
using namespace std;

int main(){
       int num;

       cout << "Enter a digit : ";
       cin >> num;

       int lastDigit = num % 10;
       int firstDigit;

       while(num >= 10){
        num = num / 10;
        firstDigit = num;
       }

       int sum = lastDigit + firstDigit;

       cout << "sum of first and last digit " << sum ;
      
}