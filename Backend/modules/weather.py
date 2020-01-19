import requests

def get_temp(location):
    r = requests.get('http://api.weatherstack.com/current?access_key=7d9786416a423e7016f670fe40689b8c&query=' + location)
    data = r.json()
    temperature = data['current']['temperature']
    return temperature