from modules import database, weather
import datetime

def put_classification(link, location):
    print('test')
    time_now = datetime.datetime.now()
    database.insert_clothes(time_now, weather.get_temp(location), location, "sweater")