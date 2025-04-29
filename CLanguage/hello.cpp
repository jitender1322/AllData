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

    head->data = 25;
    head->next = NULL;

    
    Node *head2 = NULL;
    head2 = new Node();
    
    head2->data = 50;
    head2->next = NULL;
    
    head->next = head2;    
    
    cout << head->next;
}