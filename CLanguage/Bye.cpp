#include <iostream>
using namespace std;
#include <string.h>

class Node{
    public:
        int data;
        Node *next;

    Node(int data){
        this->data = data;
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

    void insertElement(int element){
        Node *newNode = new Node(element);
        newNode->next=this->head;
        this->head= newNode;
        this->count++;
        cout << "Element inserted successfully!";
    }
};


int main(){

    LinkedList link;

    link.insertElement(25);

    return 0;
}
