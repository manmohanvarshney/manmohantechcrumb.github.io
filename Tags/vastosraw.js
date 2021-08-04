var tag_inaaj = "https://googleads.g.doubleclick.net/pagead/ads?client=ca-video-pub-3737030722290655&slotname=Inaaj_Video_Tag&ad_type=video_text_image&description_url=https%3A%2F%2Fwww.inaaj.org%2F&max_ad_duration=30000&videoad_start_delay=0&vpmute=1&vpa=1"
var manmohan_ima_sample = 'https://manmohantechcrumb.github.io/Tags/tag1.xml'
var google_ima_sample = 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinear&correlator=';
var google_ima_NO_Ad = 'https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/single_ad_samples&ciu_szs=300x250&impl=s&gdfp_req=1&env=vp&output=vast&unviewed_position_start=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dredirecterror&nofb=1&correlator='
var tagObj = [{ "tag": google_ima_sample, "network": "google", format: "ima" }];

(function (t, i, s, a) {
    var c = 'script', src = 'https://vastos.performoo.com', E = window, m = document;
    if (self !== top) {
        E = top;
        m = top.document
    }
    if (!m.getElementById(i.adSlot)) {
        if (self === top) {
            m.write("<div id='" + i.adSlot + "'></div>");
        } else {
            let tcAdSlotDiv = m.createElement('div');
            tcAdSlotDiv.setAttribute("id", i.adSlot);
            window.frameElement.parentNode.appendChild(tcAdSlotDiv)
        }
    }
    E[t] = E[t] || {};
    b = m.getElementsByTagName(c)[0];
    m = m.createElement(c);
    E[t].i = i;
    E[t].a = a;
    E[t].s = s;
    E[t].src = src;
    m.async = 1;
    m.src = src + "/tc-initVast.js";
    b.parentNode.insertBefore(m, b)
})("tcEmbed", {
    env: 'b',
    ed: "3BRsqtVZBLO+2W2QvZcRpc1IA/Zbe3bRucW47hqqOa0baVm5oJDCZzy0KgoPQt+n6RdFydzEKThaeo3VCNBuzKiftP+qcmjoaRpX2WQaL/6F3Hf2A/5rv3ADtS2vIxeWUIAt8IoAcP0VbHe6a7SetQ==",
    adSlot: 'tcAdSlot',
    waitTime: .1,
    lnf: { d: '2c9f986e77de131d0177de1487320004', m: '2c9f986e785dbebd0178753420e90296' },
    s: 2, w: false,
    autoClose: true,
    // v: {
    //     type: "mp4",
    //     // url:""
    //     // url: "https://www.youtube.com/watch?v=B-hjuIQC0lg"
    //     // url: "https://performoo-media.s3.amazonaws.com/2c9f986e70c8cec90170c8ea58420006/2c9f986e784abbb501784abec6bb0002/dRmsq0CV/hls/playlist.m3u8\n"
    //     url: "https://manmohantechcrumb.github.io/video/MDH.mp4"
    // }
}, 2, tagObj);
