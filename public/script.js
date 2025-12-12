async function roll() {
    const expr = document.getElementById("expr").value;

    const res = await fetch(`/api/roll?expr=${expr}`)
    const data = await res.json();

    document.getElementById("output").textContent = JSON.stringify(
        data,
        null,
        2
    );
}