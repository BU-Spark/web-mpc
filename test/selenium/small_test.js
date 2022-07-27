const { Builder } = require('selenium-webdriver')

async function start() {
  const chrome = require('selenium-webdriver/chrome')
  const options = new chrome.Options()

  options.addArguments('--disable-dev-shm-usage')
  options.addArguments('--no-sandbox')
  options.addArguments('--headless')

  const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build()

  await driver.get('https://google.com')
  await driver.sleep(1000)
  const text = await driver.executeScript('return document.documentElement.innerText')
  console.log(text)
  driver.quit()
}

start()