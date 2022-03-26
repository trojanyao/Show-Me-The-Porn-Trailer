export function AddBtn(obj) {
    // 创建按钮元素
    let btn = document.createElement('a')
    btn.innerText = '▶︎ 播放预告片'

    // 按钮样式
    btn.style.padding = '10px 20px'
    btn.style.position = 'absolute'
    btn.style.right = '10px'
    btn.style.top = '10px'
    btn.style.background = 'white'
    btn.style.borderRadius = '8px'

    // 文字样式
    btn.style.fontSize = '16px'
    btn.style.color = 'black'
    btn.style.textDecoration = 'none'

    // 按钮属性
    btn.target = 'blank'
    btn.href = obj.videoUrl

    // 添加显示按钮
    obj.div.appendChild(btn)
}