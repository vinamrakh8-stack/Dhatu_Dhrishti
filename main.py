from flask import Flask, jsonify, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("cover.html")


@app.route("/weather")
def weather():
    return render_template("weather.html")


@app.route("/machinery")
def machinery():
    return render_template("machinery.html")


@app.route("/ai-analysis")
def ai_analysis():
    return render_template("ai_analysis.html")


@app.route("/reports")
def reports():
    return render_template("reports.html")


@app.route("/api/status")
def status():
    return jsonify({"message": "Flask is running", "ok": True})


if __name__ == "__main__":
	app.run(debug=True,port=5001,host='0.0.0.0')
