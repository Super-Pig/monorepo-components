const fs = require('fs')
const path = require('path')

const genComponentActions = () => {
  const actions = []
  const templateDir = path.join('plop-templates', 'component')

  const next = filename => {
    const stat = fs.statSync(filename)

    if (stat.isDirectory()) {
      fs.readdirSync(filename).forEach(file => next(path.join(filename, file)))
    } else {
      let newFilename = filename.replace(templateDir, '').replace('.hbs', '')
   
      const reg = /(stories\.js)$/

      if (reg.test(newFilename)) {
        newFilename = newFilename.replace(reg, '{{name}}.$1')
      }

      console.log(newFilename)

      actions.push({
        type: 'add',
        path: path.join('packages', '{{name}}', newFilename),
        templateFile: filename
      })
    }
  }

  fs.readdirSync(templateDir).forEach(file => next(path.join(templateDir, file)))

  return actions
}

module.exports = plop => {
  plop.setHelper('capitalUpper', text => `${text.charAt(0).toUpperCase()}${text.slice(1)}`)

  plop.setGenerator('add', {
    drscription: '创建组件',
    prompts: [{
      type: 'input',
      name: 'namespace',
      message: '组件命名空间'
    }, {
      type: 'input',
      name: 'name',
      message: '组件名称'
    }, {
      type: 'input',
      name: 'author',
      message: 'Author',
      default: 'Super-Pig'
    }, {
      type: 'input',
      name: 'email',
      message: 'Email',
      default: '250631521@qq.com'
    }],
    actions: genComponentActions()
  })
}