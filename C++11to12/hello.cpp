#include <iostream>
using namespace std;


int main(){

  int n,element;

  cout << "Enter the number of elements : ";
  cin >> n;

  int arr[n];

  for(int i=0;i<n;i++){
    cout << "Enter the " << i+1 << " Element : ";
    cin >> arr[i];
  }

  cout << "Enter the element to search from the Array : ";
  cin >> element;

  for(int i=0;i<n;i++){
    if(arr[i]==element){
      cout << "The element is found on index : " << i << endl;
      break;
    }else{
      cout << "Given element is not in array";
    }
  }



  return 0;
}