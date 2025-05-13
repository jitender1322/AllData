#include <iostream>
using namespace std;

class que
{
private:
    int *arr;
    int rear;
    int front;
    int capacity;
    int count;

public:
    que(int capacity)
    {
        this->arr = new int[capacity];
        this->rear = -1;
        this->front = -1;
        this->capacity = capacity;
        this->count = 0;
    }

    void inque(int element)
    {
        if(this->rear == -1 && this->front == -1){
            this->front++;
            this->rear++;
            this->arr[this->rear] = element;
            this->count++;
        }else{
            this->rear++;
            this->arr[this->rear] = element;
            this->count++;
        }
    }
    void deque()
    {
        if (this->rear == -1 && this->front == -1){
            cout << "Que is empty";
        }else{
            this->front++;
        }
    }
    void rearEl()
    {
        cout << this->arr[this->rear];
    }
    void frontEl()
    {
        cout << this->arr[this->front];
    }
};

int main()
{

    que Que(3);
    int choice, element;

    do
    {
        cout << "Press 1 for inque" << endl;
        cout << "Press 2 for deque" << endl;
        cout << "Press 3 for rear" << endl;
        cout << "Press 4 for front" << endl;
        cout << "Press 0 for exit" << endl;

        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter the element : ";
            cin >> element;
            Que.inque(element);
            break;
        case 2:
            Que.deque();
            break;
        case 3:
            Que.rearEl();
            break;
        case 4:
            Que.frontEl();
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 0:
            break;
        default:
            cout << "Invalid Choice";
            break;
        }

    } while (choice != 0);

    return 0;
}