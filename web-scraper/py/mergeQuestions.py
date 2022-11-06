import json

"""
Merges the result.json with the blind-75.json
"""

if __name__ == '__main__':

    with open('blind-75.json') as f1:
        blind75Data = json.load(f1)

    with open('result.json') as f2:
        resultData = json.load(f2)

    print(blind75Data[0])
    result = []

    for b75 in blind75Data:
        questionUrl = b75['questionUrl'] + '/'

        print(questionUrl)

        currResult = list(filter(lambda r : r['questionUrl'] == questionUrl, resultData))
        print(currResult)
        mergedQuestion = b75 | currResult[0]
        result.append(mergedQuestion)

    with open("mergedResults.json", "w") as f3:
        json.dump(result, f3, indent=4)
