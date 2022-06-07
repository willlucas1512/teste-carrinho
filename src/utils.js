export const formataPreco = (pValor) => {
  return `R$ ${String(pValor / 100).replace(/\./g, ",")}`;
};

export const formataNome = (pNome) => {
  return pNome[0].toUpperCase() + pNome.slice(1).toLowerCase();
};

export default { formataPreco, formataNome };
