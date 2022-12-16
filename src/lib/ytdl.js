const yt = require('ytdl-core')
const yts = require('yt-search')

async function ytDonlodMp3 (url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
        .then((data) => {
          const pormat = data.formats
          const audio = []
          for (let i = 0; i < pormat.length; i++) {
            if (pormat[i].mimeType === 'audio/webm; codecs=\"opus\"') {
              const aud = pormat[i]
              audio.push(aud.url)
            }
          }
          const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
          const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
          const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
          const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
          const published = data.player_response.microformat.playerMicroformatRenderer.publishDate

          const result = {
            titulo: title,
            thumb,
            canal: channel,
            data_de_lançamento: published,
            views,
            download: audio[1]
          }
          return (result)
        })
      resolve(yutub)
    } catch (error) {
      reject(error)
    }
  })
}

async function ytDonlodMp4 (url) {
  return new Promise((resolve, reject) => {
    try {
      const id = yt.getVideoID(url)
      const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
        .then((data) => {
          const pormat = data.formats
          const video = []
          for (let i = 0; i < pormat.length; i++) {
            if (pormat[i].container === 'mp4' && pormat[i].hasVideo === true && pormat[i].hasAudio === true) {
              const vid = pormat[i]
              video.push(vid.url)
            }
          }
          const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
          const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
          const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
          const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
          const published = data.player_response.microformat.playerMicroformatRenderer.publishDate

          const result = {
            titulo: title,
            thumb,
            canal: channel,
            data_de_lançamento: published,
            views,
            download: video[0]
          }
          return (result)
        })
      resolve(yutub)
    } catch (error) {
      reject(error)
    }
  })
}

async function ytPlayMp3 (query) {
  return new Promise((resolve, reject) => {
    try {
      const search = yts(query)
        .then((data) => {
          const url = []
          const pormat = data.all
          for (let i = 0; i < pormat.length; i++) {
            if (pormat[i].type === 'video') {
              const dapet = pormat[i]
              url.push(dapet.url)
            }
          }
          const id = yt.getVideoID(url[0])
          const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
            .then((data) => {
              const pormat = data.formats
              const audio = []
              // const video = []
              for (let i = 0; i < pormat.length; i++) {
                if (pormat[i].mimeType === 'audio/webm; codecs=\"opus\"') {
                  const aud = pormat[i]
                  audio.push(aud.url)
                }
              }
              const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
              const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
              const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
              const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
              const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
              const result = {
                titulo: title,
                thumb,
                canal: channel,
                data_de_lançamento: published,
                views,
                download: audio[0]
              }
              return (result)
            })
          return (yutub)
        })
      resolve(search)
    } catch (error) {
      reject(error)
    }
  })
}

async function ytPlayMp4 (query) {
  return new Promise((resolve, reject) => {
    try {
      const search = yts(query)
        .then((data) => {
          const url = []
          const pormat = data.all
          for (let i = 0; i < pormat.length; i++) {
            if (pormat[i].type === 'video') {
              const dapet = pormat[i]
              url.push(dapet.url)
            }
          }
          const id = yt.getVideoID(url[0])
          const yutub = yt.getInfo(`https://www.youtube.com/watch?v=${id}`)
            .then((data) => {
              const pormat = data.formats
              const video = []
              for (let i = 0; i < pormat.length; i++) {
                if (pormat[i].container === 'mp4' && pormat[i].hasVideo === true && pormat[i].hasAudio === true) {
                  const vid = pormat[i]
                  video.push(vid.url)
                }
              }
              const title = data.player_response.microformat.playerMicroformatRenderer.title.simpleText
              const thumb = data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url
              const channel = data.player_response.microformat.playerMicroformatRenderer.ownerChannelName
              const views = data.player_response.microformat.playerMicroformatRenderer.viewCount
              const published = data.player_response.microformat.playerMicroformatRenderer.publishDate
              const result = {
                titulo: title,
                thumb,
                canal: channel,
                data_de_lançamento: published,
                views,
                download: video[0]
              }
              return (result)
            })
          return (yutub)
        })
      resolve(search)
    } catch (error) {
      reject(error)
    }
  })
}

async function ytSearch (query) {
  return new Promise((resolve, reject) => {
    try {
      const cari = yts(query)
        .then((data) => {
          const res = data.all
          return res
        })
      resolve(cari)
    } catch (error) {
      reject(error)
    }
  })
}

module.exports = {
  ytDonlodMp3,
  ytDonlodMp4,
  ytPlayMp3,
  ytPlayMp4,
  ytSearch
}
