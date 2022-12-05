
const configParams = {
  apiHost: 'https://ec2-3-73-100-28.eu-central-1.compute.amazonaws.com:8443',
  testImg: 'https://soul-menu-dev.s3.eu-central-1.amazonaws.com/image1.jpeg',
  testDrinkImg: 'https://ru.inshaker.com/uploads/cocktail/hires/15/1629722426-%D0%91%D0%B5%D0%BB%D1%8B%D0%B8%CC%86_%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B8%D0%B8%CC%86.jpg'
}

export const getConfig = () => {
  return  configParams
}