const requireField = fieldName => {
  return value => {
    if (String(value).length === 0) {
      return fieldName + ' is required';
    }
    return true;
  };
};

module.exports = plop => {
  plop.setGenerator('screen', {
    description: 'Create a screen',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Screen/Screen.js.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Screen/Screen.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/{{pascalCase name}}.stylesheet.tsx',
        templateFile: 'plop-templates/Screen/Screen.stylesheet.js.hbs',
      },
      {
        type: 'add',
        path: 'src/screens/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Screen/index.js.hbs',
      },
    ],
  });

  plop.setGenerator('component', {
    description: 'Create a reusable component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/Component/Component.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stylesheet.tsx',
        templateFile: 'plop-templates/Component/Component.stylesheet.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/Component/index.js.hbs',
      },
      {
        type: 'add',
        path: 'src/components/index.ts',
        templateFile: 'plop-templates/injectable-index.js.hbs',
        skipIfExists: true,
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: "import {{pascalCase name}} from './{{pascalCase name}}';",
      },
      {
        type: 'append',
        path: 'src/components/index.ts',
        pattern: '/* PLOP_INJECT_EXPORT */',
        template: '\t{{pascalCase name}},',
      },
    ],
  });

  plop.setGenerator('api service', {
    description:
      'Create API service (A types file will be generated that you can use as payload)',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your service name?',
        validate: requireField('name'),
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/services/api/{{name}}/index.ts',
        templateFile: 'plop-templates/service.js.hbs',
      },
      {
        type: 'add',
        path: 'src/services/api/{{name}}/types.ts',
        templateFile: 'plop-templates/types.js.hbs',
      },
      // {
      //   type: 'add',
      //   path: 'src/services/api/index.ts',
      //   templateFile: 'plop-templates/injectable-index.js.hbs',
      //   skipIfExists: true,
      // },
      // {
      //   type: 'append',
      //   path: 'src/services/api/index.ts',
      //   pattern: '/* PLOP_INJECT_IMPORT */',
      //   template: "import {{name}} from './{{name}}';",
      // },
      // {
      //   type: 'append',
      //   path: 'src/services/api/index.ts',
      //   pattern: '/* PLOP_INJECT_EXPORT */',
      //   template: '\t{{name}},',
      // },
    ],
  });
};
