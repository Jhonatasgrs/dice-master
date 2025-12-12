async function roll() {
    const expr = document.getElementById("expr").value;

    const res = await fetch(`http://localhost:3000/api/roll?expr=${expr}`);
    const data = await res.json();

    document.getElementById("output").textContent = JSON.stringify(
        data,
        null,
        2
    );
}