def say_hello(f_name, l_name):
    message = "hello"
    
    def message_func():
        message = f"{message} {f_name} {l_name}"
    
    message_func()
    
    return message
    

print(say_hello("Maamoun", "Haj Najeeb"))