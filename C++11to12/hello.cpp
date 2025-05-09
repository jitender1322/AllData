#include <iostream>
using namespace std;


class Node{
  public:
    int data;
    Node *next;

    Node(int element){
      this->data = element;
      this->next=NULL;
    }
};

class LinkedList{
  public:
    Node *head = NULL;
    int count = 0;
  
  LinkedList(){
    this->head= NULL;
    this->count = 0;
  }

  void InsertElementAtStart(int element){
    Node *newNode = new Node(element);
    this->head = newNode;
  }

};

int main()
{

  return 0;
}