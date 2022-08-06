/**
 * 等待元素加载完成
 *
 */
export const wait = (selector: string, delay?: number): Promise<Element> => {
  return new Promise((resolve) => {
    const ele = document.querySelector(selector)
    if (ele) {
      resolve(ele)
    } else {
      setInterval(() => {
        const ele = document.querySelector(selector)
        if (ele) {
          resolve(ele)
        }
      }, delay || 100)
    }
  })
}
