const REPO_URL = 'https://github.com/thundermiracle/web-configs';

function uncast(node) {
  let currentNode = node;

  while (
    currentNode.type === 'TypeCastExpression' ||
    currentNode.type === 'TSAsExpression'
  ) {
    currentNode = currentNode.expression;
  }

  return currentNode;
}

function getName(node) {
  const finalNode = uncast(node);
  const type = finalNode.type;

  if (type === 'Identifier') {
    return finalNode.name;
  } else if (type === 'Literal') {
    return String(finalNode.value);
  } else if (type === 'TemplateLiteral' && finalNode.expressions.length === 0) {
    return finalNode.quasis[0].value.raw;
  }
  return null;
}

const DEFAULT_IMPORT = Symbol('default');
const NAMESPACE_IMPORT = Symbol('namespace');

function getRootObject(memberExpression) {
  let currentObject = memberExpression;

  while (currentObject.object) {
    currentObject = currentObject.object;
  }

  return currentObject;
}

function docsUrl(ruleName) {
  return `${REPO_URL}/blob/main/packages/eslint-plugin/docs/rules/${ruleName}.md`;
}

module.exports = {
  uncast,
  getName,
  getRootObject,
  docsUrl,
  DEFAULT_IMPORT,
  NAMESPACE_IMPORT,
};
