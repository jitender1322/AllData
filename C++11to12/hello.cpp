#include <iostream>
using namespace std;

class Array{
  private:
    int *arr;
    int size;

  public:

  Array(int s){
    size = s;
    arr = new int[size];
    cout << "Memory Allocated" << endl;
  }

  void AddEle(){
    for (int i = 0; i < size; i++){
      cout << "Enter the value for index no. "<< i;
      cin >> arr[i];
    }
  }

  ~Array(){
    delete[] arr;
    arr = NULL;
    cout << "Memory Deallocated";
  }
};


int main(){
  int num;
  cout << "Enter the size of array : ";
  cin >> num;

  Array arr(num);
  arr.AddEle();
}