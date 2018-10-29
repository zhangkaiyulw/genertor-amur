const parsingSchemaDefinitions = require('../../shared/parsingSchemaDefinitions');
const generateModel = require('./generateModel');
const orms = require('../../orms');
const { pushInstructions } = require('scaffold-kit');

module.exports = ({ args, options, variant = 'model' }) => {
  console.log(options);
  const orm = orms[options.orm];
  const schemaDefs = parsingSchemaDefinitions(args, orm);

  pushInstructions([{
    createFile: {
      content: generateModel(schemaDefs, variant, options.orm),
      dest: `${options.modelDir}/${variant === 'model' ? schemaDefs.modelName : schemaDefs.varName.concat('Schema')}.js`
    }
  }, {
    ensureDirectory: {
      name: options.modelDir
    }
  }]);
};