const schedule = require('node-schedule');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
const request = require('request');

const config = yaml.load(fs.readFileSync(path.join(__dirname, 'config.yaml'), 'utf8'));
const url = `${config.check_url}?aid=${config.aid}&uuid=${config.uuid}&spider=0&msToken=${config.msToken}&a_bogus=${config.a_bogus}`;

let i = 1
const job = schedule.scheduleJob('*/5 * * * * *', () => {
    console.log(`第${i++}次尝试`, new Date().toISOString())
    // 掘金更新了API接口校验
    request({
        url: url,
        method: 'POST',
        headers: {
            'accept': '*/*',
            'content-type': 'application/json',
            'origin': 'https://juejin.cn',
            'referer': config.url,
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/146.0.0.0 Safari/537.36',
            'cookie': config.cookie
        },
        body: JSON.stringify({})
    }, (err, res, body) => {
        if (err) {
            console.log('请求错误:', err)
        } else {
            console.log('[ status ] >', res.statusCode)
            if (res.statusCode == 200) {
                console.log('Result：', body)
            } else {
                console.log('响应内容:', body)
            }
        }
    });

});
