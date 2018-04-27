from flask import Flask, request, jsonify

app = Flask(__name__)

stores = [{"name": "Mo4Less", "items": [
    {"name": "Spalding Basketball", "price": 19.99}]}]


@app.route('/')  # Home page of site
def home():  # You can call this whatever you want
    return 'Hello, World!'


@app.route('/store', methods=['POST'])
def createStore():
    request_data = request.get_json()
    new_store = {
        'name': request_data['name'],
        'items': []
    }
    stores.append(new_store)
    return jsonify(new_store)


@app.route('/store')
def getStore():
    return jsonify({"stores": stores})


@app.route('/store/<string:name>/item')
def getStoreItem(name):
    for store in stores:
        if store['name'] == name:
            return jsonify({'items': store['items']})
    return jsonify({'message': 'store not found'})


@app.route('/store/<string:name>/item', methods=['POST'])
def createItemStore(name):
    request_data = request.get_json()
    for store in stores:
        if store['name'] == name:
            new_item = {
                'name': request_data['name'],
                'price': request_data['price']
            }
            store['items'].append(new_item)
            return jsonify(new_item)
    return jsonify({'message:': 'store not found'})


app.run(port=8080)
