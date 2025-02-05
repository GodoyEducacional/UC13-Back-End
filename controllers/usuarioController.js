import {
  getAllUsuarios,
  getUsuarioByEmail,
  createUsuario,
  updateUsuario,
  deleteUsuario,
} from "../models/usuarioModel.js";

import {
  modeloUsuario,
  modeloLogin,
  modeloAtualizacaoUsuario,
} from "../validations/usuarioValidations.js";

import bcrypt from "bcrypt"; // Biblioteca para criptografia de senha

import jwt from "jsonwebtoken"; // Biblioteca para geração de tokens JWT

// npm install jsonwebtoken / npm install bcrypt

// Chave secreta para assinatura do Token JWT
const JWT_SECRET = "secreta-chave";

// Função para obter todos os usuários
export const getUsuarios = (req, res) => {
  // Busca usuarios "Em memoria, deveria ser banco de dados"
  const usuarios = getAllUsuarios();
  // Retorna os usuários com status 200
  res.status(200).json(usuarios);
};

// Função para obter um único usuario pelo ID
export const getUsuario = (req, res) => {
  const { id } = req.params;
  const usuario = usuario.find((user) => user.id === parseInt(id));

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }

  res.status(200).json(usuario);
};

// Função para criar um usuário
export const createUsuario = (req, res) => {
  const { error } = modeloUsuario.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  const novoUsuario = req.body;
  const usuarioCriado = createUsuario(novoUsuario);

  res.status(201).json(usuarioCriado);
};

// Função para atualizar as informações do usuario
export const updateUsuario = (req, res) => {
  const { id } = req.params;
  const { error } = modeloAtualizacaoUsuario.validate(req.body);

  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  const usuarioAtualizado = updateUsuario(id, req.body);

  if (!usuarioAtualizado) {
    return res
      .status(404)
      .json({ mensagem: "Usuário não encontrado para atualização!" });
  }

  res.status(200).json(usuarioAtualizado);
};

// Função para excluir um usuario
export const deleteUsuario = (req, res) => {
  const { id } = req.params;
  const usuarioRemovido = deleteUsuario(id);

  if (!usuarioRemovido) {
    return res
      .status(404)
      .json({ mensagem: "Usuario não encontrado para remoção!" });
  }

  res.status(200).json({
    mensagem: "Usuario removido com sucesso!",
    usuario: usuarioRemovido,
  });
};

// Função para fazer login de um usuário
export const loginUsuario = (req, res) => {
  const { error } = modeloLogin.validate(req.body);
  if (error) {
    return res.status(400).json({ mensagem: error.details[0].message });
  }

  const { email, senha } = req.body;

  const usuario = getUsuarioByEmail(email);

  if (!usuario) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }

  if (!bcrypt.compareSync(senha, usuario.senha)) {
    return res.status(401).json({ mensagem: "Senha inválida!" });
  }

  const token = jwt.sign({ id: usuario.id, email: usuario.email }, JWT_SECRET, {
    expiresIn: "1h",
  });

  res.status(200).json({ mensagem: "Login bem-sucedido!", token });
};
