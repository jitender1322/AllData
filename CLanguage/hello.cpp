#include <iostream>
using namespace std;

class Stack
{
private:
    int *arr;
    int capacity;
    int top;
    int count;

public:
    Stack(int capacity)
    {
        this->capacity = capacity;
        arr = new int[capacity];
        top = -1;
        count = 0;
    }

    ~Stack()
    {
        delete[] arr;
    }

    void push(int element)
    {
        if (top == capacity - 1)
        {
            cout << "Stack is overflowed!" << endl;
        }
        else
        {
            arr[++top] = element;
            count++;
            cout << "Element added!" << endl;
        }
    }

    void pop()
    {
        if (top == -1)
        {
            cout << "Stack is underflowed!" << endl;
        }
        else
        {
            top--;
            count--;
            cout << "Element popped!" << endl;
        }
    }

    void peek()
    {
        if (top == -1)
        {
            cout << "Stack is empty!" << endl;
        }
        else
        {
            cout << "Top element: " << arr[top] << endl;
        }
    }

    void display()
    {
        if (top == -1)
        {
            cout << "Stack is empty!" << endl;
        }
        else
        {
            cout << "Stack elements: ";
            for (int i = top; i >= 0; i--)
            {
                cout << arr[i] << " ";
            }
            cout << endl;
        }
    }

    void isEmpty()
    {
        if (top == -1)
        {
            cout << "Yes, Stack is empty!" << endl;
        }
        else
        {
            cout << "Nope, Stack has elements." << endl;
        }
    }

    void isFull()
    {
        if (top == capacity - 1)
        {
            cout << "Yes, Stack is full!" << endl;
        }
        else
        {
            cout << "Nope, Stack is not full yet." << endl;
        }
    }

    void size()
    {
        cout << "Current size of stack: " << count << endl;
    }
};

int main()
{
    int choice, element;
    Stack stack(4);

    do
    {
        cout << "\n========= Stack Menu =========\n";
        cout << "1. Push\n";
        cout << "2. Pop\n";
        cout << "3. Peek\n";
        cout << "4. Display\n";
        cout << "5. isEmpty\n";
        cout << "6. isFull\n";
        cout << "7. Size\n";
        cout << "0. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter an element: ";
            cin >> element;
            stack.push(element);
            break;
        case 2:
            stack.pop();
            break;
        case 3:
            stack.peek();
            break;
        case 4:
            stack.display();
            break;
        case 5:
            stack.isEmpty();
            break;
        case 6:
            stack.isFull();
            break;
        case 7:
            stack.size();
            break;
        case 0:
            cout << "Exiting... Bye Bye!" << endl;
            break;
        default:
            cout << "Invalid choice!" << endl;
        }
    } while (choice != 0);

    return 0;
}
