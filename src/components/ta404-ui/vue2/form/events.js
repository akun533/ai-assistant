export const blur = {
  label: '失去焦点时触发的事件',
  arguments: [{
    name: 'e',
    label: '浏览器Event对象',
  }],
}

export const click = {
  label: '点击事件',
  arguments: [{
    name: 'e',
    label: '浏览器Event对象',
  }],
}

export const change = {
  label: '输入框内容变化时的回调',
  arguments: [{
    name: 'e',
    label: 'e是浏览器Event对象，读取输入的值用法为 e.target.value',
  }],
}
