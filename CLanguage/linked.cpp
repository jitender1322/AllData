#include <iostream>
using namespace std;


class Node{
    public:
        int data;
        Node *next;

    Node(int data){
        this->data=data;
        this->next=NULL;
    }
};

class LinkedList{
    public:
        Node *head;
        int count;
    
    LinkedList(){
        this->head=NULL;
        this->count=0;
    }

    void insertInStart(int data){
        Node *newNode = new Node(data);
        newNode->next=this->head;
        this->head=newNode;
        this->count++;
        cout << "Data inserted successfully !" << endl;
    }

    void insertInEnd(int data){
        Node *newNode = new Node(data);
        if(this->head==NULL){
            this->head= newNode;
        }else{
            Node *ptr = this->head;
            while(ptr->next != NULL){
                ptr = ptr->next;
            }
            ptr->next=newNode;
        }
        this->count++;
        cout << "Element inserted at end successfully!" << endl;
    }

    void insertAtPosition(int data, int position)
    {
        Node *newNode = new Node(data);
        if(position==0){
            newNode->next = this->head;
            this->head=newNode;
        }else{
            Node *ptr = this->head;
            for(int i=1;i<position;i++){
                ptr = ptr->next;
            }
            newNode->next = ptr->next;
            ptr->next=newNode;
        }
        cout << "Element inserted at given position successfully!" << endl;
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

    void updateData(int element,int position){
        Node *ptr = this->head;
        for(int i=1;i<position;i++){
            ptr = ptr->next;
        }
        ptr->data= element;
        cout << "Node updated successfully" << endl;
    }
};



int main(){
    LinkedList list;

    int choice, element, position;

    do
    {
        cout << "Press 1 for adding a node in the beginning" << endl;
        cout << "Press 2 for adding a node in the ending" << endl;
        cout << "Press 3 for adding a node anywhere in the list" << endl;
        cout << "Press 4 for printing all node in the list" << endl;
        cout << "Press 5 for updating a node in the list" << endl;
        cout << "Press 0 for exiting the program" << endl;

        cout << "Enter a choice: ";
        cin >> choice;

        switch (choice)
        {
        case 1:
            cout << "Enter value of element : ";
            cin >> element;
            list.insertInStart(element);
            break;
        case 2:
            cout << "Enter value of element : ";
            cin >> element;
            list.insertInEnd(element);
            break;
        case 3:
            cout << "Enter value of element : ";
            cin >> element;
            cout << "Enter position for element : ";
            cin >> position;
            list.insertAtPosition(element, position);
            break;
        case 4:
            list.printList();
            break;
        case 5:
            cout << "Enter value of element : ";
            cin >> element;
            cout << "Enter position for element : ";
            cin >> position;
            list.updateData(element, position);
            break;
        case 0:
            break;
        default:
            break;
        }

    } while (choice != 0);
};