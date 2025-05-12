#include <iostream>
using namespace std;

class Stack
{
private:
  int *arr;
  int top;
  int capacity;
  int count;

public:
  Stack(int capacity)
  {
    this->arr = new int[capacity];
    this->top = -1;
    this->capacity = capacity;
    this->count = 0;
  }

  void push(int element)
  {
  }
  void pop()
  {
  }
  void peek()
  {
  }
  void display()
  {
  }
  void isEmpty()
  {
  }
  void isFull()
  {
  }
  void size()
  {
  }
};

int main()
{

  Stack stack(5);
  int choice, element;

  do
  {

    cout << "Press 1 for push" << endl;
    cout << "Press 2 for pop" << endl;
    cout << "Press 3 for peek" << endl;
    cout << "Press 4 for display" << endl;
    cout << "Press 5 for isEmpty" << endl;
    cout << "Press 6 for isFull" << endl;
    cout << "Press 7 for size" << endl;
    cout << "Press 0 for exit" << endl;

    cin >> choice;

    switch (choice)
    {
    case 1:
      cout << "Enter the element : ";
      cin >> element;
      stack.push(element);
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
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