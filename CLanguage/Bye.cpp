#include <iostream>
using namespace std;

int main()
{

    int arr[5] = {12, 54, 2, 56, 3};
    int pass = 1;

    while (pass <= 5 - 1)
    {
        for (int i = 0; i < 5; i++)
        {
            if (arr[i] > arr[i + 1])
            {
                int temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
        pass++;
    };

    for(int a : arr)
    {
        cout << a << " ";
    }
};