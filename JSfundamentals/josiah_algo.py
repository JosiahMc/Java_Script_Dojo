
p = ['butt', 'm', 'x', 'o', 'p']
y = 'x'

def change_x(arr, x):
    for i in range(0, len(arr)):
        if arr[i] == y:
            arr[i] = "we changed X but we cant pop"
    return arr
print change_x(p,y)