    const editText = document.getElementById('editText');
    const normal = document.getElementById('normal');
    const bold = document.getElementById('bold');
    const italic = document.getElementById('italic');
    const underline = document.getElementById('underline');
    const inputColor = document.getElementById('inputColor');
    const noInput = document.getElementById('noInput');
    const fontFamily = document.getElementById('fontFamily');

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