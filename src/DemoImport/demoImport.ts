const makeDemoImport = () => {
  const dev = () => console.log('hello.dev')

  return Object.freeze({
    dev
  })
}

const demoImport = makeDemoImport()

export default demoImport
