from flask import Flask, request, render_template
import requests
import os
print(os.listdir("templates/"))

app = Flask(__name__)

API_KEY = "e22b476318664228965163848250202"
BASE_URL ="http://api.weatherapi.com/v1/current.json"




@app.route("/", methods=["GET", "POST"])
def weather():
    weather_data = None
    if request.method == "POST":
        city = request.form["city"]
        params = {"key": API_KEY, "q": city, "aqi": "no"}
        response = requests.get(BASE_URL, params=params)
        if response.status_code == 200:
            data = response.json()
            weather_data = {
                "city": data["location"]["name"],
                "temperature": data["current"]["temp_c"],
                "condition": data["current"]["condition"]["text"],
                "humidity": data["current"]["humidity"],
                "wind_speed": data["current"]["wind_kph"]
            }
        else:
            weather_data = {"error": data.get("error", {}).get("message", "City not found")}
    return render_template("index.html", weather=weather_data)

if __name__ == "__main__":
    app.run(debug=True)