import requests
from bs4 import BeautifulSoup

url = "https://world.openfoodfacts.org/nutriscore?utm_source=google-ad&utm_medium=search&utm_campaign=nutriscore-en&gad_source=1"

response = requests.get(url)
# print(response.status_code)

if response.status_code==200:
    soup = BeautifulSoup(response.text,"html.parser")
    print(soup.text)
    # allSpan = soup.find("span")
    allSpan = soup.findAll("h2")
    for heading in allSpan[:5]:
        print(heading.text)