#include <iostream>
using namespace std;

int main()
{

    int arr[5] = {12, 54, 2, 56, 3};
    int pass = 1;

    // BUBBLE SORT

    // while (pass < 5)
    // {
    //     for (int i = 0; i < 5 - pass; i++)
    //     {
    //         if (arr[i] > arr[i + 1])
    //         {
    //             int temp = arr[i];
    //             arr[i] = arr[i + 1];
    //             arr[i + 1] = temp;
    //         }
    //     }
    //     pass++;
    // };

    // INSERTION SORT

    // for(int i=1;i<n;i++){
    //     int key = arr[i];
    //     int j=i-1;
    //     while (j>=0 && key<arr[j])
    //     {
    //         arr[j+1] = arr[j];
    //         j--;
    //     }
    //     arr[j+1]=key;
    // }

    // for(int i=0;i<n;i++){
    //     int key = arr[i];
    //     int j=i-1;
    //     while (j>=0 && key <arr[j])
    //     {
    //         arr[j+1]=arr[j];
    //         j--;
    //     }
    //     arr[j+1]=key;
    // }

    // Selection Sort

    for(int i=0;i< n-1;i++){
        int minIndex = i;
        for(int j=i+1;j<n;j++){
            if(arr[j]<arr[minIndex]){
                minIndex = j;
            }
        }
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }


    
    for (int a : arr)
    {
        cout << a << " ";
    }


};