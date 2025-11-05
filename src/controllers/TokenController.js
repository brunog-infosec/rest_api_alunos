import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;
    // Verifica se email e senha foram enviadas
    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas'],
      });
    }

    // Verifica se o email do usuário existe na base de dados
    const user = await User.findOne({ where: { email } });

    // Verifica se o usuário existe.
    if (!user) {
      return res.status(401).json({
        errors: ['Usuário não existe'],
      });
    }
    // Verifica se a senha está correta.
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        errors: ['Senha inválida'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    return res.status(200).json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
