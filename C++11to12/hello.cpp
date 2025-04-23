#include <iostream>
using namespace std;
#include <string.h>
#include <vector>


int main()
{

  // vector <int> Arr;
  // vector <int> Arrr(5,2);

  // g++ -std=c++11 file.cpp 
  // vector <int> Arrrr{12,23,12,54,23,54};

  // Arrrr.push_back(33);
  // Arrrr.pop_back();
  // Arrrr.insert(Arrrr.begin()+2,66);
  // Arrrr.erase(Arrrr.begin()+2);


  // cout << Arr.empty() << endl;
  // cout << Arrrr.at(1) << endl;

  int n;
  cout << "Enter value : ";
  cin >> n;


  vector <int> v1(n,n);
  vector <vector<int>> v2(n,v1);

  for(vector<int> elem : v2){
    for(int e:elem){
      cout << e << " ";
    }
    cout <<endl;
  }
  
  return 0;
}