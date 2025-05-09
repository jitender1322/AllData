#include <iostream>
using namespace std;
#include <string.h>

class Node
{
public:
    int data;
    Node *next;

    Node(int data){
        this->data=data;
        this->next=NULL;
    }
};

class LinkedList
{
public:
    Node *head;
    int count,element;

    LinkedList()
    {
        this->head = NULL;
        this->count = 0;
    }

    void insertAtBeginning(int data) {
        Node *newNode = new Node(data);
        newNode->next=this->head;
        this->head= newNode;
        this->count++;
        cout << "Data inserted successfully !";
    };

    void insertAtEnding(int data) {
        Node *newNode = new Node(data);
        if(this->head==NULL){
            this->head=newNode;
        }else{
            Node *ptr = this->head;
            while (ptr->next!=NULL)
            {
                ptr = ptr->next;
            }
            ptr->next=newNode;
            this->count++;
            cout << "Element inserted at end successfully!";
        }
    };
    void insertAtPosition(int data,int position) {
        Node *newNode = new Node(data);
        if(position==0){
            newNode->next = this->head;
            this->head = newNode;
        }else{
            Node *ptr = this->head;
            for(int i=0;i<position-1;i++){
                ptr=ptr->next;
            }
            newNode->next=ptr->next;
            ptr->next=newNode;
            this->count++;   
        }
        cout << "Element inserted at given position successfully!" << endl;
    };

    void getAllNode(){
        Node *ptr = this->head;
        while (ptr!=NULL)
        {
          cout << ptr->data << " <- ";
          ptr = ptr->next;
        }
        cout << endl;
    }

    void updateNode(int data, int position)
    {
        Node *ptr = this->head;
        for(int i=0;i<position-1;i++){
            ptr = ptr->next;
        }
        ptr->data = data;
        cout << "Node updated successfully !" << endl;
    }
};

int main()
{
    LinkedList list;

    int choice,element,position;

    do
    {
        cout << "Press 1 for adding a node in the beginning" << endl;
        cout << "Press 2 for adding a node in the ending" << endl;
        cout << "Press 3 for adding a node anywhere in the list" << endl;
        cout << "Press 4 for getting all node in the list" << endl;
        cout << "Press 5 for updating node in the list" << endl;

        cout << "Press 0 for exiting the program" << endl;

        cout << "Enter a choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter value of element : ";
            cin >> element;
            list.insertAtBeginning(element);
            break;
        case 2:
            cout << "Enter value of element : ";
            cin >> element;
            list.insertAtEnding(element);
            break;
        case 3:
            cout << "Enter value of element : ";
            cin >> element;
            cout << "Enter position for element : ";
            cin >> position;
            list.insertAtPosition(element,position);
            break;
        case 4:
            list.getAllNode();
            break;
        case 5:
            cout << "Enter value of element : ";
            cin >> element;
            cout << "Enter position for element : ";
            cin >> position;
            list.updateNode(element,position);
        case 0 :
            break;
        default:
            break;
        }

    } while (choice != 0);  
}