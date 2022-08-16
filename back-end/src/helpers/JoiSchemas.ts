import { Joi } from 'celebrate';

class JoiSchemas {
  public static userCreate = Joi.object().keys({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });
}

export default JoiSchemas;
