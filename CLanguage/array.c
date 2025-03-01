#include <stdio.h>

int main()
{
    // int arr[3][3] = {
    //     // 0 1 2
    //     {1, 2, 3}, // 0
    //     {4, 5, 6}, // 1
    //     {7, 8, 9}  // 2
    // }

    // int arr[3][3];

    // arr[0][0] = 9;
    // arr[0][1] = 12;
    // arr[0][2] = 14;

    // arr[1][0] = 55;
    // arr[1][1] = 34;
    // arr[1][2] = 65;

    // arr[2][0] = 22;
    // arr[2][1] = 62;
    // arr[2][2] = 72;

    // for(int i=0;i<=2;i++){
    //     for(int j=0;j<=2;j++){
    //         printf("%d ",arr[i][j]);
    //     };
    //     printf("\n");
    // };

    int row, col;

    printf("Enter the number of rows in array : ");
    scanf("%d", &row);

    printf("Enter the number of col in array : ");
    scanf("%d", &col);

    int arr[row][col];

    printf("Enter the %d value for your array(row wise) : ", row * col);

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            scanf("%d", &arr[i][j]);
        }
    }

    for (int i = 0; i < row; i++)
    {
        for (int j = 0; j < col; j++)
        {
            printf("%d ", arr[i][j]);
        };
        printf("\n");
    };
};
