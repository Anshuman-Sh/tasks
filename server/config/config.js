const dotenv = require("dotenv");
const path = require("path");
const Joi = require("joi");

dotenv.config({ path: path.join(__dirname, "../.env") });

const envVarsSchema = Joi.object()
  .keys({
    PORT: Joi.number().required(),
    HOST: Joi.string().required(),
    USER: Joi.string().required(),
    PASSWORD: Joi.string().required(),
    DATABASE: Joi.string().required()
  })
  .unknown();

const { value: envVars, error } = envVarsSchema
  .prefs({ errors: { label: "key" } })
  .validate(process.env);

if (error) {
  throw new Error(`Config validation error: ${error}`);
}

module.exports = {
  port: envVars.PORT,
  host: envVars.HOST,
  user: envVars.USER,
  password: envVars.PASSWORD,
  database: envVars.DATABASE
};
