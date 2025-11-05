import multer from 'multer';
import { extname, resolve } from 'path';

const random = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  // Verifica a extensão do arquivo se é imagem
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser png ou jpeg'));
    }

    return cb(null, true);
  },
  // Configuração da pasta onde os uploads serão salvos
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads', 'images'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${random()}${extname(file.originalname)}`); // Arquivo upado terá nome com base data unix
    },
  }),
  limits: { fileSize: 2097152 /* bytes */ }, // Limita o arquivo a 2mb
};
