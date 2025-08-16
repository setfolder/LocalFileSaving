function textToFile(text, name) {
    const b = new Blob([ text ], { type: 'text/plain' });
    const url = window.URL.createObjectURL(b);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.type = 'text/plain';
    a.click();
};

document.getElementById('sf').addEventListener('click', () => {
    textToFile(document.getElementById('txt').value, 'abc.htm')
});
