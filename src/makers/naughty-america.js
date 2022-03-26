export function NA() {
    // ----- 获取视频地址 -----
    // 获取系列名称首字母
    let seriesCap = ''
    let seriesName = document.querySelector('.site-title').innerText
    seriesName.split(' ').forEach(n => seriesCap += n.at(0))
    seriesCap = seriesCap.toLowerCase()
    switch (seriesCap) {
        case 'sbac': seriesCap = 'sbc'; break;
    }

    // 获取演员名字组合
    let nameString = []
    let aList = document.querySelectorAll('.scene-info .performer-list > a')
    aList.forEach(a => nameString.push(a.innerText.split(' ')[0]))
    nameString = nameString.join('').toLowerCase()
    console.log('演员名称字符串', nameString)

    // 拼接视频地址
    let videoUrl
    videoUrl = `https://videos.naughtycdn.com/${seriesCap}/trailers/${seriesCap}${nameString}trailer_720.mp4`
    console.log('视频地址', videoUrl)

    // ---- 添加页面按钮 -----
    let div = document.querySelector('.contain-start-card')
    return {
        div: div,
        videoUrl: videoUrl
    }
}