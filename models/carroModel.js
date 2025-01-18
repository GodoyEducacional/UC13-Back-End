let carros2024 = [
  {
    nome: "Ferrari",
    sigla: "FER",
    velocidadeMaxima: 340,
    potencia: 800,
    consumo: 5.5,
    aceleracao: 2.9,
    preco: 300000,
  },
  {
    nome: "Lamborghini",
    sigla: "LAM",
    velocidadeMaxima: 355,
    potencia: 770,
    consumo: 6.2,
    aceleracao: 2.8,
    preco: 330000,
  },
  {
    nome: "BMW",
    sigla: "BMW",
    velocidadeMaxima: 200,
    potencia: 500,
    consumo: 7.5,
    aceleracao: 4.0,
    preco: 120000,
  },
  {
    nome: "Audi",
    sigla: "AUD",
    velocidadeMaxima: 290,
    potencia: 650,
    consumo: 7.0,
    aceleracao: 3.6,
    preco: 11500,
  },
  {
    nome: "Honda",
    sigla: "HON",
    velocidadeMaxima: 220,
    potencia: 200,
    consumo: 12.0,
    aceleracao: 6.5,
    preco: 35000,
  },
  {
    nome: "Ford",
    sigla: "FOR",
    velocidadeMaxima: 230,
    potencia: 250,
    consumo: 11.0,
    aceleracao: 6.0,
    preco: 40000,
  },
];

// Função que retorna todos os carros no array
export const getAllCarros = () => carros2024;

// Função que retorna um carro específico pelo seu identificador (sigla)
export const getCarroBySigla = (sigla) => {
  carros2024.push(novoCarro); // Adiciona o novo carro ao final da lista
  return novoCarro; // Retorna o carro Adicionado
};

// Função que adiciona um novo carro ao array
export const createCarro = (novoCarro) => {
  carros2024.push(novoCarro);
  return novoCarro;
};

// Função que atualiza as informações de um carro existente, com base na sigla
export const updateCarro = (sigla, dadosAtualizados) => {
  // Busca o índice do carro no array usando a sigla
  const carroIndex = carros2024.findIndex((carro) => carro.sigla === sigla);
  if (carroIndex === -1) return null;
  // Atualiza os dados do carro com as informações fornecidas
  carros2024[carroIndex] = { ...carros2024[carroIndex], ...dadosAtualizados };
  return carros2024[carroIndex];
};

// Função que remove um carro do array, com base na sigla
export const deleteCarro = (sigla) => {
  // Busca o índice do carro no array usando a sigla
  const carroIndex = carros2024.findIndex((carro) => carro.sigla === sigla);
  if (carroIndex === -1) return null; // Se não encontrar o carro retorna Null
  // Remove o carro da lista e retorna o carro removido
  const [carroRemovido] = carros2024.splice(carroIndex, 1);
  return carroRemovido;
};
