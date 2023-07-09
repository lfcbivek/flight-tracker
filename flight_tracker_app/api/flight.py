from flask import Flask
from flask import jsonify
import os
from dotenv import load_dotenv
import requests
import airportsdata
airports = airportsdata.load()
load_dotenv()

app = Flask(__name__)

flight_info_url = "https://airlabs.co/api/v9/flights"
API_KEY = os.getenv('API_KEY')

@app.route("/flight_info")
def get_flight_info():
    # print(airports['KJFK'])
    params = {
        "api_key": API_KEY,
        "bbox": "-77.151 38.812 -76.889 38.961"
    }
    r = requests.get(flight_info_url,params=params)
    results = r.json()
    flights = results['response'][10] # Take max of 10 flights

    ret_obj = {}
    # for flight in flights:


    return(jsonify(r.json()))




app.run()