"""
    Context manager
"""

"""
 Python calls the __enter__() magic method when starting a with block whereas
 the __exit__() method is called at the end. An object that implements both __enter__() and __exit__() 
 methods is called a context manager. By defining those methods, you can create your own context manager.
"""

class MySecretConnection:
    def __init__(self, url):
        self.url = url
        print("hello")
    def __enter__(self):
        print("Hi...")
        print('entering', self.url)
    def __exit__(self, exc_type, exc_val, exc_tb):
        print("case...")
        print('leaving', self.url)

with MySecretConnection('https://finxter.com') as finxter:
    # Called finxter.__enter__()
    pass
    # Called finxter.__exit__()