function openPDF() {
    var pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.style.display = "block";
    pdfViewer.src = "../static/teste.pdf";
}

// Adicione um evento para fechar o PDF se desejado
document.getElementById("pdfViewer").addEventListener("click", function() {
    this.style.display = "none";
});
