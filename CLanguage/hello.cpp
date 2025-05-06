#include <iostream>
using namespace std;
#include <string.h>

class Node
{
public:
    int data;
    Node *next;
};

int
main()
{
    Node *head = NULL;

    head = new Node();
    head->data=25;
    head->next = NULL;

    Node *current = NULL;
    current->data=25;
    current->next=NULL;
    head->next= current;

    current = new Node();
    current->data = 49;
    current->next=NULL;

    head->next->next = current;
}