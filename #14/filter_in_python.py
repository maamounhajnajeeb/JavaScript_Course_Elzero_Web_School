my_list = [
    1, -5, -4, 2, 4, 6, -9, 8,
]

def bigger_than_zero(element):
    return element >= 0

print(list(filter(bigger_than_zero, my_list)))