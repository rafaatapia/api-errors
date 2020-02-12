import * as Yup from 'yup';
import error from '../schemas/error';

class ErrorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      status: Yup.string(),
      user: Yup.string().required(),
      body: Yup.string().required(),
      cpf: Yup.string(),
      module: Yup.string(),
      version: Yup.string(),
      os: Yup.string(),
    });

    await schema
      .validate(req.body)
      .catch(err => res.status(401).json({ error: err.errors }));
    const er = await error.create(req.body);

    return res.json(er);
  }

  async index(req, res) {
    const { cpf, module } = req.query;
    if (cpf && module) {
      const errors = await error.find({ cpf, module });
      return res.json(errors);
    }
    if (cpf) {
      const errors = await error.find({ cpf });
      return res.json(errors);
    }
    if (module) {
      const errors = await error.find({ module });
      return res.json(errors);
    }

    const errors = await error.find();
    return res.json(errors);
  }
}

export default new ErrorController();
