from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key = 'secretkey'

# Configuração para servir arquivos estáticos
app.config['STATIC_FOLDER'] = 'static'

votes = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/resultado")
def resultado():
    return render_template("resultado.html", votes=votes)

@app.route("/voto", methods=["POST"])
def voto():
    selection = request.form.get("option")
    if selection is None:
        flash("Selecione uma opção")
        return redirect("/")
    selection = int(request.form.get("option"))
    votes[selection] += 1
    print(selection)
    print(votes)
    return redirect("/resultado") 

if __name__ == "__main__":
    app.run(debug=True)
