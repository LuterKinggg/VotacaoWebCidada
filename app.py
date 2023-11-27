from flask import Flask, render_template, request, redirect, flash

app = Flask(__name__)
app.secret_key = 'secretkey'

# Configuração para servir arquivos estáticos
app.config['STATIC_FOLDER'] = 'static'

votes = {
    "O Mundo Sombrio de Sabrina" : 0,
    "O Mundo dos Animais" : 0,
    "Hidrate seu Pet" : 0,
    "Animais em Extinção" : 0,
    "Espécies de Peixes" : 0,
    "Gato Minhoso" : 0,
    "DivertidaMentes de uma Bailarina" : 0,
    "Espécies de Gatos" : 0,
    "Previsão do tempo no Litoral Leste, no Agreste e no Vale do Assú" : 0,
    "Lingua Brasileira de Sinais (Libras)" : 0,
    "Lei aprovada em SP" : 0,
    "Gravidez silenciosa" : 0,
    "O Pequeno Príncipe" : 0,
    "Porque você deveria adotar um animal" : 0,
}
count = 0

@app.route("/")
def index():
    return render_template("index.html", votes=votes)

@app.route("/resultado")
def resultado():
    if count == 0:
        return render_template("resultado.html", votes = votes, count = 1)
    return render_template("resultado.html", votes = votes, count = count)

@app.route("/voto", methods=["POST"])
def voto():
    global count
    selection = request.form.get("option")
    if selection is None:
        flash("Selecione uma opção!")
        return redirect("/")
    if selection not in votes:
        flash("Selecione uma opção valida")
        return redirect("/")
    votes[selection] += 1
    count += 1
    print(selection)
    print(votes)
    return redirect("/resultado") 

if __name__ == "__main__":
    app.run(debug=True)
