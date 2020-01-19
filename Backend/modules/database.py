import sqlite3

def initialize():
    conn = sqlite3.connect('clothes.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS clothes
             (date timestamp, weather real, location text, clothing text)''')
    conn.commit()
    conn.close()

def query_clothes(weather, location):
    conn = sqlite3.connect('clothes.db')
    c = conn.cursor()
    c.execute('''SELECT clothing FROM clothes WHERE weather = (?) AND location = (?) ORDER BY date''', (weather, location))
    clothes = c.fetchall()
    conn.commit()
    conn.close()
    return clothes

def insert_clothes(date, weather, location, clothing):
    print(date, weather, clothing)
    conn = sqlite3.connect('clothes.db')
    c = conn.cursor()
    c.execute('''INSERT INTO clothes VALUES (?,?,?,?)''', (date, weather, location, clothing))
    conn.commit()
    conn.close()