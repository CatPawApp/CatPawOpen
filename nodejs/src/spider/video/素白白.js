// http://localhost:5757/api/素白白?ac=list&t=movie_bt&pg=1
// http://localhost:5757/api/素白白?ac=detail&ids=57235
// http://localhost:5757/api/素白白?wd=我的&pg=1
// http://localhost:5757/api/素白白?play=bXZfNTcyMzUtbm1fMQ%3D%3D&flag=由qq倾情打造
const {getHtml} = $.require('./_lib.request.js')
var rule = {
    类型: '影视',
    title: '素白白',
    desc: '素白白纯js版本',
    host: 'https://www.subaibaiys.com',
    homeUrl: '',
    url: '',
    searchUrl: '/page/fypage?s=**',
    searchable: 2,
    quickSearch: 0,
    timeout: 5000,
    play_parse: true,
    filterable: 1,
    filter_url: '{{fl.class || fl.area || fl.year || fl.catedd}}',
    filter: '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',
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
        'Accept-Language': 'zh-CN,zh;q=0.9',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Referer': 'https://www.subaibaiys.com/',
        'Upgrade-Insecure-Requests': '1',
    },
    class_parse: async () => {
        return {
            class: [{type_id: "movie_bt", type_name: "影视筛选"}, {
                type_id: "new-movie",
                type_name: "电影"
            }, {type_id: "tv-drama", type_name: "电视剧"}, {
                type_id: "hot-month",
                type_name: "热门电影"
            }, {type_id: "high-movie", type_name: "高分电影"}, {
                type_id: "cartoon-movie",
                type_name: "动漫电影"
            }, {type_id: "hongkong-movie", type_name: "香港经典电影"}, {
                type_id: "domestic-drama",
                type_name: "国产剧"
            }, {type_id: "american-drama", type_name: "欧美剧"}, {
                type_id: "korean-drama",
                type_name: "韩剧"
            }, {type_id: "anime-drama", type_name: "动漫剧"}, {
                type_id: "marvel-movies",
                type_name: "漫威宇宙电影系列"
            }, {type_id: "fastfurious", type_name: "速度与激情电影系列"}, {
                type_id: "zero-zero-seven",
                type_name: "007系列(25部正传+2部外传)"
            }],
        }
    },
    预处理: async () => {
        return []
    },
    推荐: async () => {
        return []
    },
    一级: async function (tid, pg, filter, extend) {
        let {MY_CATE, input} = this;
        if (pg <= 0) pg = 1;
        const html = (await getHtml({
            url: rule.host + "/" + (extend.class || tid) + (extend.area || "") + (extend.year || "") + (extend.catedd || "") + "/page/" + pg,
            headers: rule.headers
        })).data
        const $ = pq(html);
        let videos = []
        for (const item of $("div.bt_img > ul > li")) {
            const img = $(item).find("img:first")[0],
                a = $(item).find("a:first")[0],
                hdinfo = $($(item).find("div.hdinfo")[0]).text().trim(),
                remark = $($(item).find("div.jidi")[0]).text().trim();
            videos.push({
                vod_id: a.attribs.href.replace(/.*?\/movie\/(.*).html/g, "$1"),
                vod_name: img.attribs.alt,
                vod_pic: img.attribs["data-original"],
                vod_remarks: remark || hdinfo || ""
            })
        }
        return videos
    },
    二级: async function (ids) {
        let {input} = this;
        const html = (await getHtml({
            url: rule.host + "/movie/" + ids[0] + ".html",
            headers: rule.headers
        })).data
        const $ = pq(html);
        const html_js = $("ul.moviedteail_list > li");
        let vod = {
            vod_id: ids[0],
            vod_pic: $("div.dyimg img:first").attr("src"),
            vod_remarks: "",
            vod_content: misc.stripHtmlTag($("div.yp_context").html()).trim()
        };
        const playlist = $('div.paly_list_btn > a').map((_, a) => {
            return a.children[0].data + '$' + a.attribs.href.replace(/.*?\/v_play\/(.*).html/g, '$1');
        }).get();
        let playFroms = [];
        playFroms.push('由qq倾情打造');
        vod.vod_play_from = playFroms.join('$$$');
        vod.vod_play_url = playlist.join("#");
        return vod
    },
    搜索: async function (wd, quick, pg) {
        let {input} = this
        const html = await request(input);
        const $ = pq(html);
        let videos = []
        for (const item of $("div.search_list > ul > li")) {
            const img = $(item).find("img:first")[0],
                a = $(item).find("a:first")[0],
                hdinfo = $($(item).find("div.hdinfo")[0]).text().trim(),
                remark = $($(item).find("div.jidi")[0]).text().trim();
            videos.push({
                vod_id: a.attribs.href.replace(/.*?\/movie\/(.*).html/g, "$1"),
                vod_name: img.attribs.alt,
                vod_pic: img.attribs["data-original"],
                vod_remarks: remark || hdinfo || ""
            })
        }
        return videos
    },
    lazy: async function (flag, id, flags) {
        let {input} = this;
        const link = rule.host + "/v_play/" + id + ".html"
        const html = (await getHtml({
            url: link,
            headers: rule.headers
        })).data
        const $ = pq(html)
        const js = $('script:contains(window.wp_nonce)').html();
        const group = js.match(/(var.*)eval\((\w*\(\w*\))\)/);
        const result = eval('md5 = CryptoJS;' + group[1] + group[2]);
        const play_url = result.match(/url:.*?['"](.*?)['"]/)[1];
        return {parse: 0, url: play_url}
    },
};
