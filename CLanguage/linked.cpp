#include <iostream>
using namespace std;

class Node
{
public:
    int data;
    Node *next;

    Node(int data)
    {
        this->data = data;
        this->next = NULL;
    }
};

class LinkedList
{
public:
    Node *head;
    int count;

    LinkedList()
    {
        this->head = NULL;
        this->count = 0;
    }

    void insertInStart(int data)
    {
        Node *newNode = new Node(data);
        newNode->next = this->head;
        this->head = newNode;
        this->count++;
        cout << "Data inserted at start successfully!" << endl;
    }

    void insertInEnd(int data)
    {
        Node *newNode = new Node(data);
        if (this->head == NULL)
        {
            this->head = newNode;
        }
        else
        {
            Node *ptr = this->head;
            while (ptr->next != NULL)
            {
                ptr = ptr->next;
            }
            ptr->next = newNode;
        }
        this->count++;
        cout << "Data inserted at end successfully!" << endl;
    }

    void insertAtPosition(int data, int position)
    {
        Node *newNode = new Node(data);
        if (position == 0)
        {
            newNode->next = this->head;
            this->head = newNode;
        }
        else
        {
            Node *ptr = this->head;
            for (int i = 1; i < position; i++)
            {
                ptr = ptr->next;
            }
            newNode->next = ptr->next;
            ptr->next = newNode;
        }
        this->count++;
        cout << "Data inserted at position successfully!" << endl;
    }

    void deleteFromStart()
    {
        if (this->head == NULL)
        {
            cout << "List is empty, nothing to delete!" << endl;
            return;
        }
        Node *temp = this->head;
        this->head = this->head->next;
        delete temp;
        temp = NULL;
        this->count--;
        cout << "First node deleted successfully!" << endl;
    }

    void deleteFromEnd()
    {
        if (this->head == NULL)
        {
            cout << "List is empty, nothing to delete!" << endl;
            return;
        }
        if (this->head->next == NULL)
        {
            delete this->head;
            this->head = NULL;
        }
        else
        {
            Node *ptr = this->head;
            while (ptr->next->next != NULL)
            {
                ptr = ptr->next;
            }
            delete ptr->next;
            ptr->next = NULL;
        }
        this->count--;
        cout << "Last node deleted successfully!" << endl;
    }

    void updateData(int element, int position)
    {
        Node *ptr = this->head;
        for (int i = 1; i < position; i++)
        {
            ptr = ptr->next;
        }
        ptr->data = element;
        cout << "Node updated successfully!" << endl;
    }

    void printList()
    {
        Node *ptr = this->head;
        cout << "Linked List: ";
        while (ptr != NULL)
        {
            cout << ptr->data << " -> ";
            ptr = ptr->next;
        }
        cout << "NULL" << endl;
    }
};

int main()
{
    LinkedList list;

    int choice, element, position;

    do
    {
        cout << "\n-----------------------------\n";
        cout << "Press 1 to Insert at Start" << endl;
        cout << "Press 2 to Insert at End" << endl;
        cout << "Press 3 to Insert at Position" << endl;
        cout << "Press 4 to Print the List" << endl;
        cout << "Press 5 to Update Data at Position" << endl;
        cout << "Press 6 to Delete from Start" << endl;
        cout << "Press 7 to Delete from End" << endl;
        cout << "Press 0 to Exit" << endl;

        cout << "Enter your choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter value: ";
            cin >> element;
            list.insertInStart(element);
            break;
        case 2:
            cout << "Enter value: ";
            cin >> element;
            list.insertInEnd(element);
            break;
        case 3:
            cout << "Enter value: ";
            cin >> element;
            cout << "Enter position: ";
            cin >> position;
            list.insertAtPosition(element, position);
            break;
        case 4:
            list.printList();
            break;
        case 5:
            cout << "Enter new value: ";
            cin >> element;
            cout << "Enter position: ";
            cin >> position;
            list.updateData(element, position);
            break;
        case 6:
            list.deleteFromStart();
            break;
        case 7:
            list.deleteFromEnd();
            break;
        case 0:
            cout << "Exiting program. Bye!" << endl;
            break;
        default:
            cout << "Invalid choice! Try again." << endl;
        }

    } while (choice != 0);
}
