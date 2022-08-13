export const getChallengens = () => {
  const pages = import.meta.glob('./views/vuejsChallenges/*.vue')
  console.log(pages)
  let fileAry: string[] = []
  Object.keys(pages).forEach(path => {
    const fileName = path.split('/')[3].split('.')[0]
    fileName && fileAry.push(fileName)
  })

  let challengenRouter: any[] = []

  fileAry.forEach(path => {
    challengenRouter.push({
      path: `/${path}`,
      name: path.split('-').join('').charAt(0),
      component: pages[`./views/vuejsChallenges/${path}.vue`],
      redirect: ''
    })
  })
  return {
    fileAry,
    challengenRouter
  }
}
