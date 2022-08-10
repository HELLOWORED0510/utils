/**
 * 等待元素加载完成
 *
 */
export const waitFor = (selector: string): Promise<Element> => {
  return new Promise((resolve) => {
    const ele = document.querySelector(selector)
    
    if (ele) {
      resolve(ele)
    } else {
      const observer = new MutationObserver(() => {
        const ele = document.querySelector(selector)
        if (ele) {
          resolve(ele)
          observer.disconnect()
        }
      })
      observer.observe(document.body, {
        subtree: true,
        childList: true,
      })
    }
  })
}
