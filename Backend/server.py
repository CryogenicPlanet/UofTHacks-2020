from modules import database, clothes, weather
import base64
import json

from flask import Flask, request
app = Flask(__name__)
database.initialize()


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/getClothes', methods=["GET"])
def get_clothes():
    location = request.args['location']
    return json.dumps(database.query_clothes(weather.get_temp(location), location))

@app.route('/setClothes', methods=["POST"])
def set_clothes():
    img_encoded = request.json['image']
    image = base64.b64decode(img_encoded)
    location = request.json['location']
    clothes.put_classification(image, location)
    return ""

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=80)