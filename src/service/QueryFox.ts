async function QueryFoxes() {
    const response = await fetch("https://randomfox.ca/floof/");
    return response.json();
}

export default QueryFoxes;
