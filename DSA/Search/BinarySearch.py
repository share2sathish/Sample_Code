"""
    1) Find middle element as pivot element
    2) Take that middle value as guessing value
    3) Check the guess value against target value
        - If both are same return that value
    4) If target value is greater than guess value
        - Exclude first half of the array and continue the search by follow above steps
    5) If target value is lesser than guess value
        - Exclude second half of the array and continue the search by follow above steps
"""


def binary_search(sortedArray, searchValue):
    low_index = 0
    high_index = len(sortedArray) - 1
    while low_index <= low_index:
        middle_index = int((low_index + high_index) / 2);
        pivot_value = sortedArray[middle_index]
        if pivot_value == searchValue:
            return sortedArray[middle_index], middle_index
        elif pivot_value > searchValue:
            high_index = middle_index - 1
        else:
            low_index = middle_index + 1
    return None


if __name__ == '__main__':
    sorted_array = list(range(1, 257, 1))
    print(binary_search(sorted_array, 30))
