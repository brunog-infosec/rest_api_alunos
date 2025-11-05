import Sequelize from 'sequelize';
import databaseconfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

// Array com todos Models
const models = [Aluno, User, Foto];
const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));
// Verifica se tem o módulo associate de tabelas
models.forEach((model) => model.associate && model.associate(connection.models));
