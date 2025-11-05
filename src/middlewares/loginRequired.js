import jwt from 'jsonwebtoken';
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  // Caso não tenha o header de autenticação retorna erro
  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Required'],
    });
  }

  const [, token] = authorization.split(' '); // Separa os dados do token apenas

  try {
    // Realiza a decodificação do Token e trás os dados do user
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados; // Faz o Destructuring e pega o id e email do user

    // Verifica na base de dados se o usuário existe, para evitar token expirado
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid User'],
      });
    }

    req.userId = id; // Passa o id para a requisição
    req.userEmail = email; // Passa o email para a requisição
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token Expired or Invalid.'],
    });
  }
};
