from flask import Flask
from flask import jsonify

app = Flask(__name__)

base_url = "https://airlabs.co/api/v9/flights"

@app.route("/flight_info")
def get_flight_info():


app.run()