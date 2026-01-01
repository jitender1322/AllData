import requests
from bs4 import BeautifulSoup


url = "https://www.flipkart.com/search?q=mobile&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
response = requests.get(url)

soup = BeautifulSoup(response.text,"html.parser")

# for p in soup.find_all("p"):
#     print(p)

headings = soup.find_all("div",class_="KzDlHZ")

print(headings)

# print(soup)