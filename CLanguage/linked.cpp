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
}

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
    }
}



int main(){

};