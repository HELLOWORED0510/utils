import { Dom } from '../../src/index'
test('hello', async () => {
  document.body.innerHTML = `<div>
    <div class='name'></div>
    < /div>`
  const nameEle = await Dom.waitFor('.name')
  expect(nameEle).toEqual(document.querySelector('.name'))
})
