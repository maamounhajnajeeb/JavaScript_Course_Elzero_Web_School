watchList = [{"Title": "inception", "imdbRating": 8.5}, {"Title": "dark knight", "imdbRating": 9.1}]

def iterate_func(element):
    return element["Title"]

titles = list(map(iterate_func, watchList))
print(titles)


def new_map(function, iterator):
    
    for item in iterator:
        yield function(item)
    
new_titles = list(new_map(iterate_func, watchList))
print(new_titles)