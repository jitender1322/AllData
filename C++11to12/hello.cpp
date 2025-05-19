#include <iostream>
using namespace std;


int main(){

  int n;

  cout << "Enter the number of element in array : ";
  cin >> n;

  int arr[n];

  for(int i=0;i<n;i++){
    cout << "Enter the element : ";
    cin >> arr[i];
    cout << endl;
  }


  //Bubble Sort

  // int pass = 1;

  // while (pass<n)
  // {
  //   for(int i=0;i<n-pass;i++){
  //     if(arr[i]>arr[i+1]){
  //       int temp = arr[i];
  //       arr[i] = arr[i+1];
  //       arr[i+1] = temp; 
  //     }
  //   }
  //   pass++;
  // }

  //Insertion sort

  for(int i=1;i<n;i++){
    int key = arr[i];
    int j = i-1;
    while (j>=0 && key < arr[j]){
        arr[j+1] = arr[j];
        j--;
    }
    {
      /* code */
    }
    
  }

  for(int a : arr){
    cout << a << "-";
  }
  


  return 0;
}