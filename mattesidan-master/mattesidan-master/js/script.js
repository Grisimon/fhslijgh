function calculatePQ() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b ** 2 - 4 * a * c;

    if (discriminant > 0) {
        const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('pQResult').innerText = `x1 = ${x1}, x2 = ${x2}`;
    } else if (discriminant === 0) {
        const x = -b / (2 * a);
        document.getElementById('pQResult').innerText = `x = ${x}`;
    } else {
        document.getElementById('pQResult').innerText = 'Inga riktiga lösningar';
    }
}

function calculatePythagoras() {
    const katet1 = parseFloat(document.getElementById('katet1').value);
    const katet2 = parseFloat(document.getElementById('katet2').value);

    const hypotenuse = Math.sqrt(katet1 ** 2 + katet2 ** 2);

    document.getElementById('pythagorasResult').innerText = `Hypotenusan är ${hypotenuse}`;
}

function calculateFunction() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);

    const k = (y2 - y1) / (x2 - x1);
    const m = y1 - k * x1;

    document.getElementById('functionResult').innerText = `Funktionen är: y = ${k}x + ${m}`;
}
