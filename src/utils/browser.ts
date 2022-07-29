import 'intersection-observer';

// 是否是刘海屏
export const judgeBigScreen = (): boolean => {
  let result = false;
  const rate = window.screen.height / window.screen.width;
  const limit = window.screen.height === window.screen.availHeight ? 1.8 : 1.65;
  if (rate > limit) {
    result = true;
  }
  return result;
};

// rem to px
export const rem2px = (n: number, base = 750): number => {
  return n * 100 * (document.documentElement.offsetWidth / base);
};

// 获取滚动条位置
export const getScrollTop = (): number => {
  return document.documentElement.scrollTop || document.body.scrollTop;
};

// 滚动到指定位置
export const setScrollTop = (top: number, smooth = false): void => {
  if (smooth && 'scrollBehavior' in document.documentElement.style) {
    try {
      window.scrollTo({
        top,
        behavior: 'smooth',
      });
    } catch (e) {
      document.documentElement.scrollTop = top;
      document.body.scrollTop = top;
    }
  } else {
    document.documentElement.scrollTop = top;
    document.body.scrollTop = top;
  }
};

const domVisibleDone: string[] = [];
// 元素曝光事件
export const domVisible = (
  dom: HTMLElement | null,
  opt?: {
    key?: string;
    threshold?: number[];
  },
): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (!dom) {
      reject(new Error('dom不存在'));
      return;
    }
    const { key, threshold = [0.5, 1] } = opt || {};
    if (key && domVisibleDone.includes(key)) {
      reject(new Error(`dom已经曝光过：${key}`));
      return;
    }
    const ob = new IntersectionObserver(
      (entries) => {
        if (entries[0].intersectionRatio < threshold[0]) {
          return;
        }
        entries.forEach((entry) => {
          if (entry.intersectionRatio > threshold[0]) {
            if (key) {
              domVisibleDone.push(key);
            }
            if (dom) {
              ob.unobserve(dom);
            }
            ob.disconnect();
            resolve(entry.intersectionRatio);
          }
        });
      },
      {
        threshold,
      },
    );
    ob.observe(dom);
  });
};
