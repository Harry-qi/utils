export const setStorageItem = (key, value) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  window.sessionStorage.setItem(key, value);
};

export const getStorageItem = (key) => {
  const data = window.sessionStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    // 如果不是一个真实有效的JSON格式字符串，直接返回原字符串
    return data;
  }
};

export const removeItem = (key) => {
  window.localStorage.removeItem(key);
};
