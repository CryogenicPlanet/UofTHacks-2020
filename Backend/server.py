from flask import Flask
app = Flask(__name__)


@app.route('/')
def hello():
    return "Hello World!"

@app.route('/getClothes', methods=["GET"])
def get_clothes():
    return "clothes"

@app.route('/setClothes', methods=["POST"])
def set_clothes():
    return "info"

if __name__ == '__main__':
    app.run()