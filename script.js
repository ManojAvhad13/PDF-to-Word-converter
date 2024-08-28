document.getElementById('uploadForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const fileInput = document.getElementById('pdfFile');
    const file = fileInput.files[0];

    if (!file) {
        alert("Please select a PDF file.");
        return;
    }

    setTimeout(() => {
        const modal = document.getElementById('successModal');
        modal.style.display = 'flex';
        const convertedWordBlob = new Blob([`Converted content of ${file.name}`], { type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
        const downloadLink = document.getElementById('downloadButton');
        downloadLink.href = URL.createObjectURL(convertedWordBlob);
        downloadLink.download = `${file.name.split('.pdf')[0]}.docx`;
    }, 1000);

    document.getElementById('output').textContent = `Processing ${file.name}...`;
});

document.querySelector('.close-button').addEventListener('click', function () {
    document.getElementById('successModal').style.display = 'none';
});

window.onclick = function (event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};
