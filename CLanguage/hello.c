#include <stdio.h>
#include <string.h>

int main()
{
   FILE *p = fopen("demo.txt", "a");

   char s[1000];

   strcpy(s, "this is Append mode!");

   if (p == NULL)
   {
      printf("File could not open");
   }
   else
   {
      printf("file lodded successfully ! \n");
      fputs("\n", p);
      // fgets(s, 50, p);
      fputs(s, p);
      fclose(p);
   }

   // printf("%s",s);
}