function openPDF(documentName) {
    var pdfViewer = document.getElementById("pdfModal");
    var pdfViewer = document.getElementById("pdfViewer");
    var pdfDiv = document.querySelector(".pdfDiv");
    $('#pdfModal').modal('show');
    pdfDiv.style.display = "block";
    pdfViewer.style.display = "block";
    pdfViewer.src = getPDFPath(documentName);

    var modalTitle = document.getElementById("meuModalLabel");
    modalTitle.textContent = documentName;

    console.log("Abrindo " + getPDFPath(documentName));
}

// Fechar o PDF
/*document.getElementById("pdfViewer").addEventListener("click", function() {
    this.style.display = "none";
});*/

function getPDFPath(documentName) {
    var documentPaths = {
        "O Mundo Sombrio de Sabrina": "../static/docs/O Mundo Sombrio de Sabrina.pdf",
        "Hidrate seu Pet": "../static/docs/Hidrate seu Pet.pdf",
        "Animais em Extinção": "../static/docs/Animais em Extinção.pdf",
        "Espécies de Peixes": "../static/docs/Espécies de Peixes.pdf",
        "Gato Manhoso": "../static/docs/Gato Manhoso.pdf",
        "DivertidaMentes de uma Bailarina": "../static/docs/DivertidaMentes de uma Bailarina.pdf",
        "Espécies de Gatos": "../static/docs/Espécies de Gatos.pdf",
        "Previsão do tempo": "../static/docs/Previsão do tempo.pdf",
        "Lingua Brasileira de Sinais (Libras)": "../static/docs/Lingua Brasileira de Sinais (Libras).pdf",
        "Lei aprovada em SP": "../static/docs/Lei aprovada em SP.pdf",
        "Gravidez silenciosa": "../static/docs/Gravidez silenciosa.pdf",
        "O Pequeno Príncipe": "../static/docs/O Pequeno Príncipe.pdf",
        "Porque você deveria adotar um animal": "../static/docs/Porque você deveria adotar um animal.pdf",
    };

    return documentPaths[documentName];
}
