# myArray=[1,3,7,3,-2,4,6,8]

#----------------LINEAR SEARCH -------------------------------------
# def linearSearch(arr,start,end,target):
#     for index in range(start,end+1):
#         if arr[index]==target:
#             return index
#     return -1

# print(linearSearch(myArray,2,5,-2))


#-----------------------CHECKING MIINIMUM VALUE---------------------

# def minVlaue(arr):
#     min=arr[0]
#     for i in arr:
#         if i<min:
#             min=i
#     return min

# print(minVlaue(myArray))


#--------------------------2D-Array-----------------------------------

# my2DArray=[
#     [1,32,34,95],
#     [12,45,46,],
#     [14,86,37],
#     [34,17,18,29,65,83]
# ]

# def linearSearch2D(my2DArray,target):
#     for row in range(len(my2DArray)+1):
#         for i in range(len(my2DArray[row])):
#             if my2DArray[row][i]==target:
#                 return [row,i]
#     return "Not Found"

# print(linearSearch2D(my2DArray,83))




