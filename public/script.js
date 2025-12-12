async function roll() {
    const expr = document.getElementById("expr").value;
    if (!expr) return;

    const res = await fetch(`/api/roll?expr=${encodeURIComponent(expr)}`);
    const data = await res.json();

    const card = document.getElementById("result-card");

    document.getElementById("r-expression").textContent = data.expression;

    // Exibir breakdown bonito
    const breakdownText = data.breakdown
        .map(b => `d${b.faces}: [${b.rolls.join(", ")}]`)
        .join(" | ");

    document.getElementById("r-breakdown").textContent = breakdownText;
    document.getElementById("r-total").textContent = data.total;

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
