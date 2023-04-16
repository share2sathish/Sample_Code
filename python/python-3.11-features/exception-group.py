def exceptionGroup():
    exec_gr = ExceptionGroup('ExceptionGroup Message!',
                [FileNotFoundError("This File is not found"),
                ValueError("Invalid Value Provided"),
                ZeroDivisionError("Trying to divide by 0")])
    raise exec_gr
try:
    exceptionGroup()
except ExceptionGroup as eg:
    print(eg.exceptions)

try:
    exceptionGroup()
except* FileNotFoundError as fnf:
    print(fnf.exceptions)
except* ValueError as ve:
    print(ve.exceptions)
except* ZeroDivisionError as zde:
    print(zde.exceptions)

try:
    exceptionGroup()
except ExceptionGroup as eg:
    print(eg.exceptions)

