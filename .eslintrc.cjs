module.exports = {
  // 指定解析器
  parser: '@typescript-eslint/parser',
  
  // 指定解析器选项
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: './tsconfig.json'
  },

  // 指定环境
  env: {
    node: true,
    es2022: true,
    browser: false
  },

  // 扩展配置
  extends: [
    'eslint:recommended'
  ],

  // 插件
  plugins: [
    '@typescript-eslint'
  ],

  // 规则配置
  rules: {
    // TypeScript 相关规则
    'no-empty': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',

    // 通用规则
    'no-console': 'off', // 允许console，因为项目中有日志输出
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-unused-vars': 'off', // 使用TypeScript版本
    'no-undef': 'off', // TypeScript会处理这个
    'no-redeclare': 'off', // TypeScript会处理这个
    
    // 代码风格（放宽规则）
    'indent': ['warn', 2, { 
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1
    }],
    'quotes': ['warn', 'single', { 
      avoidEscape: true,
      allowTemplateLiterals: true
    }],
    'semi': ['warn', 'always'],
    'comma-dangle': ['warn', 'always-multiline'],
    'object-curly-spacing': ['warn', 'always'],
    'array-bracket-spacing': ['warn', 'never'],
    'space-before-function-paren': ['warn', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always'
    }],
    'keyword-spacing': ['warn', { 
      before: true, 
      after: true 
    }],
    'space-infix-ops': 'warn',
    'eol-last': ['warn', 'always'],
    'no-trailing-spaces': 'warn',
    'no-multiple-empty-lines': ['warn', { 
      max: 2, 
      maxEOF: 1 
    }],
    
    // 最佳实践
    'eqeqeq': 'off',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-return-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'prefer-promise-reject-errors': 'error',
    'yoda': 'error',
    
    // 变量声明
    'no-duplicate-imports': 'warn',
    'no-useless-rename': 'warn',
    'prefer-arrow-callback': 'warn',
    'prefer-template': 'warn',
    'template-curly-spacing': ['warn', 'never'],
    
    // 函数相关
    'func-call-spacing': ['warn', 'never'],
    'no-extra-parens': ['warn', 'functions'],
    'no-magic-numbers': 'off', // 关闭魔法数字检查

    // 注释相关
    'spaced-comment': ['warn', 'always', {
      line: {
        markers: ['/'],
        exceptions: ['-', '+']
      },
      block: {
        markers: ['!'],
        exceptions: ['*'],
        balanced: true
      }
    }]
  },

  // 忽略文件
  ignorePatterns: [
    'node_modules/',
    'dist/',
    '*.js',
    '*.d.ts',
    '*.d.ts.map',
    '*.js.map',
    'coverage/',
    '.nyc_output/',
    '*.min.js'
  ],

  // 覆盖特定文件的规则
  overrides: [
    {
      // 测试文件
      files: ['**/*.test.ts', '**/*.spec.ts', 'test/**/*.ts'],
      env: {
        jest: true
      },
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'no-magic-numbers': 'off'
      }
    },
    {
      // 配置文件
      files: ['*.config.js', '*.config.ts', '.eslintrc.cjs'],
      env: {
        node: true
      },
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-console': 'off'
      }
    },
    {
      // 类型定义文件
      files: ['**/*.d.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      }
    }
  ]
};