from modules import database
import json

from flask import Flask
app = Flask(__name__)
database.initialize()


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/getClothes', methods=["GET"])
def get_clothes():
    return json.dumps(database.query_clothes(10))

@app.route('/setClothes', methods=["POST"])
def set_clothes():
    return "info"

if __name__ == '__main__':
    app.run()