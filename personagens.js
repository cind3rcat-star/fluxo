/* ============================================
   BANCO DE DADOS LOCAL — Personagens
   Usado em TODAS as páginas
============================================ */

function getPersonagens() {
    return JSON.parse(localStorage.getItem("db_personagens") || "[]");
}

function salvarPersonagens(lista) {
    localStorage.setItem("db_personagens", JSON.stringify(lista));
}

/* Criar personagem */
function addPersonagem(p) {
    const lista = getPersonagens();
    p.id = Date.now(); // ID único
    lista.push(p);
    salvarPersonagens(lista);
}

/* Editar personagem */
function updatePersonagem(id, novosDados) {
    const lista = getPersonagens();
    const idx = lista.findIndex(x => x.id === id);
    if (idx >= 0) {
        lista[idx] = { ...lista[idx], ...novosDados };
        salvarPersonagens(lista);
    }
}

/* Excluir personagem */
function deletePersonagem(id) {
    let lista = getPersonagens().filter(p => p.id !== id);
    salvarPersonagens(lista);
}
