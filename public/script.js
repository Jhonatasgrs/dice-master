async function roll() {
    const expr = document.getElementById("expr").value;
    if (!expr) return;

    const res = await fetch(`/api/roll?expr=${encodeURIComponent(expr)}`);
    const data = await res.json();

    const card = document.getElementById("result-card");

    document.getElementById("r-expression").textContent = data.expression;
    document.getElementById("r-breakdown").textContent = data.breakdown.join(", ");
    document.getElementById("r-total").textContent = data.total;

    // Mostra o card com animação
    card.classList.remove("hidden");
    card.classList.add("fade-in");
    setTimeout(() => card.classList.add("show"), 10);

    // Histórico
    const history = document.getElementById("history");
    const li = document.createElement("li");
    li.innerHTML = `
        <span>${data.expression}</span>
        <strong>${data.total}</strong>
    `;
    history.prepend(li);
}