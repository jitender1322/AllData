#include <iostream>
using namespace std;

#include <string.h>


class student{
   public: 
    char name[50];
    int rollNo;
    static char course[50];

        setData(){
                cout << "Enter student roll no. : ";
                cin >> this->rollNo;
                cout << "Enter student name : ";
                cin >> this->name;
            };

        getData(){
             cout << this->rollNo << endl;
             cout << this->name << endl;
             cout << this->course << endl;
        }
};

char student::course[50];


int main(){
    strcpy(student::course,"Fullstack");

    cout << "enter number of student : ";
    int num;
    cin >> num;

    student one[num];

   for(int i=0;i<num;i++){
        one[i].setData();
    }
    for(int i=0;i<num;i++){
        one[i].getData();
    }  
}