
from bs4 import BeautifulSoup
import re
import json

"""
creates questions from neetcode.io/practice's index.html:

"name": "3Sum",
"questionUrl": "https://leetcode.com/problems/3sum",
"difficulty": "Medium",
"videoUrl": "https://www.youtube.com/watch?v=jzZsG8n2R9A&list=PLot-Xpze53ldVwtstag2TL4HQhAnC8ATf&index=9",
"solutionUrl": "https://github.com/neetcode-gh/leetcode/blob/main/python/15-3Sum.py",
"category": "Two Pointers"
"""

if __name__ == '__main__':

    with open("index.html") as fp:
        soup = BeautifulSoup(fp, 'html.parser')

    result = []

    for row in soup.find_all("tr"):
        link = row.find('a')
        button = row.find('button')
        question = {}

        if link:
            question['name'] = link.contents[0].strip()
            question['questionUrl'] = link.attrs['href']
        if button:
            question['difficulty'] = button.find('b').contents[0]
        if question:
            result.append(question)

    with open("result.json", "w") as f:
        json.dump(result, f, indent=4)
