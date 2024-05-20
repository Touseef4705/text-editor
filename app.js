    let editText = document.getElementById('editText');
    let normal = document.getElementById('normal');
    let bold = document.getElementById('bold');
    let italic = document.getElementById('italic');
    let underline = document.getElementById('underline');
    let inputColor = document.getElementById('inputColor');
    let noInput = document.getElementById('noInput');
    let fontFamily = document.getElementById('fontFamily');

    normal.addEventListener('click', function() {
        editText.style.fontWeight = 'normal';
        editText.style.fontStyle = 'normal';
        editText.style.textDecoration = 'none';
        editText.style.fontSize = '';
        editText.style.color = '';
        editText.style.fontFamily = '';
    });

    
    bold.addEventListener('click', function() {
        if (editText.style.fontWeight === 'bold') {
            editText.style.fontWeight = 'normal';
        } else {
            editText.style.fontWeight = 'bold';
        }
    });

    italic.addEventListener('click', function() {
        if (editText.style.fontStyle === 'italic') {
            editText.style.fontStyle = 'normal';
        } else {
            editText.style.fontStyle = 'italic';
        }
    });

    underline.addEventListener('click', function() {
        if (editText.style.textDecoration === 'underline') {
            editText.style.textDecoration = 'none';
        } else {
            editText.style.textDecoration = 'underline';
        }
    });

    inputColor.addEventListener('input', function() {
        editText.style.color = inputColor.value;
    })

    noInput.addEventListener('input', function() {
        editText.style.fontSize = `${noInput.value}px`;
    });

    fontFamily.addEventListener('change', function() {
        editText.style.fontFamily = fontFamily.value;
    });

let btn = document.getElementById('btn')

btn.addEventListener('click', function() {
 
    let blob = new Blob([editText.value]);
    
    let url = URL.createObjectURL(blob);
    
    this.href = url;
    
    this.download = 'download.txt';
});
