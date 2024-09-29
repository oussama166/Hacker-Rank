def timeConversion(s) -> str:
    timeZone = s[len(s) - 2 : :]
    newArray = s.split(":")
    newArray[0] = str(int(newArray[0]) + 12)
    return "".join(newArray)


print(timeConversion("07:05:45PM"))
