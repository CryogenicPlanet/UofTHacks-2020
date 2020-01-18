import sqlite3

def initialize():
    conn = sqlite3.connect('clothes.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS clothes
             (date timestamp, weather real, items text)''')
    conn.commit()
    conn.close()

def query_clothes(weather):
    conn = sqlite3.connect('clothes.db')
    c = conn.cursor()
    c.execute('''SELECT items FROM clothes WHERE weather = (?) ORDER BY date''', (weather,))
    clothes = c.fetchall()
    conn.commit()
    conn.close()
    return clothes