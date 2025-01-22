import jwt from "jsonwebtoken";

// Definindo uma chave secreta para verificar e crar tokens JWT
const JWT_SECRET = "secreta-chave";

// Middleware de autenticação para verificar o token JWT nas requisições
export const authenticate = (req, res, next) => {
  // Obtendo o token do cabeçalho authorization (Token no formato "earer <token>")
  const token = req.headers.authorization?.split(" ")[1];

  // Se o token não for fornecido, retorna um erro 404 (Não autorizado)
  if (!token) {
    return res.status(401).json({ mensagem: "Token não fornecido!" });
  }

  try {
    // Verificando a validade do token utilizando a chave secreta
    // A função jwt.verify decodifica e valida o token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Se o token for valido, o payload decodificado é atribuido a req.user
    req.user = decoded;

    next();
  } catch (error) {
    // Se o token for invalido ou verificação falhar, retorna erro 401 (Não autorizado)
    res.status(401).json({ mensagem: 'Token inválido!'});
 }
};
