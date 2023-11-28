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
        "O Mundo Sombrio de Sabrina": "../static/teste.pdf",
        "O Mundo dos Animais": "../static/teste.pdf",
        "Hidrate seu Pet": "../static/teste.pdf",
        "Animais em Extinção": "../static/teste.pdf",
        "Espécies de Peixes": "../static/teste.pdf",
        "Gato Minhoso": "../static/teste.pdf",
        "DivertidaMentes de uma Bailarina": "../static/teste.pdf",
        "Espécies de Gatos": "../static/teste.pdf",
        "Previsão do tempo no Litoral Leste, no Agreste e no Vale do Assú": "../static/teste.pdf",
        "Lingua Brasileira de Sinais (Libras)": "../static/teste.pdf",
        "Lei aprovada em SP": "../static/teste.pdf",
        "Gravidez silenciosa": "../static/teste.pdf",
        "O Pequeno Príncipe": "../static/teste.pdf",
        "Porque você deveria adotar um animal": "../static/teste.pdf",
    };

    return documentPaths[documentName];
}
