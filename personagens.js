const STORAGE_KEY = "personagens_custom";

function getPersonagens() {
    let custom = [];
    try { custom = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch {}
    if(typeof PERSONAGENS_FIXOS === "undefined") { console.error("PERSONAGENS_FIXOS não carregado"); return custom; }
    return [...PERSONAGENS_FIXOS, ...custom];
}

function salvarCustom(lista) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
}

function adicionarPersonagem(p) {
    let lista = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    p.id = Date.now();
    lista.push(p);
    salvarCustom(lista);
}

function editarPersonagem(id, dados) {
    let lista = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    const i = lista.findIndex(p => p.id===id);
    if(i===-1) return;
    lista[i] = { ...lista[i], ...dados };
    salvarCustom(lista);
}

function removerPersonagem(id) {
    let lista = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    lista = lista.filter(p => p.id!==id);
    salvarCustom(lista);
}
