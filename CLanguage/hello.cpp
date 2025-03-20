#include <iostream>
using namespace std;

int main(){
    cout << "Enter 1 for pizza and 2 for burger : ";
    int num;
    cin >> num;

    if(num == 1){
        cout << "you ordered a pizza !" << endl;
    }else if(num == 2){
        cout << "you ordered a burger !" << endl;
    }else{
        cout << "your choice is wrong !" << endl;
    }

    for(int i=1;i<=5;i++){
        cout << i << endl ;
    }
}