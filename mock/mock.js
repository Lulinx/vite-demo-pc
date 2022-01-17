const mockData = {
    "dogFamily": {
        "statusCode": "000000",
        "desc": "请求成功",
        "result": {
            "petFamilyList": [{ "petID": 1, "name": "法老王猎犬", "engName": "Pharaoh Hound", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img5701405934288.jpg" }, { "petID": 2, "name": "比熊犬", "engName": "Bichon Frise", "price": "1000-3000元", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick22281435572067.png" }, { "petID": 3, "name": "拉布拉多猎犬", "engName": "Labrador", "price": "1000-3000元", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick12541435573782.png" }, { "petID": 4, "name": "阿拉斯加雪橇犬", "engName": "Alaskan Malamute", "price": "3000起", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img50961416195246.jpg" }, { "petID": 5, "name": "博美犬", "engName": "Pomeranian", "price": "1000-3000元", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick53831435572176.png" }, { "petID": 6, "name": "哈士奇", "engName": "Siberian Huskiy", "price": "2000-4000元", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick14371435571930.png" }, { "petID": 7, "name": "罗威纳犬", "engName": "Rottweiler", "price": "3500左右", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img92461407811854.jpg" }, { "petID": 8, "name": "金毛犬", "engName": "Golden Retriever", "price": "800-3000元", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick83771435571788.png" }, { "petID": 9, "name": "藏獒", "engName": "Canis lupus familiaris", "price": "500-50000元不等", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img89221407815357.jpg" }, { "petID": 10, "name": "英国斗牛犬", "engName": "Bulldog", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img30671406195314.jpg" }, { "petID": 11, "name": "惠比特犬", "engName": "Whippet", "price": "3000左右", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img10301406279607.jpg" }, { "petID": 12, "name": "秋田犬", "engName": "Japanese Akita", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img90061406622680.jpg" }, { "petID": 13, "name": "西施犬", "engName": "Shih Tzu", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img82341406534748.jpg" }, { "petID": 14, "name": "雪纳瑞", "engName": "Schnauzer", "price": "1500起", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick2311435657437.png" }, { "petID": 15, "name": "伯恩山犬", "engName": "BerneseMountain", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img50161407393634.jpg" }, { "petID": 16, "name": "伯瑞犬", "engName": "Briard", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img99471407393013.jpg" }, { "petID": 17, "name": "比特犬", "engName": "", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick76951500863293.jpg" }, { "petID": 18, "name": "串串", "engName": "", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick70981491560372.jpg" }, { "petID": 19, "name": "阿根廷杜高犬", "engName": "", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick92711480484715.jpg" }, { "petID": 20, "name": "高加索犬", "engName": "", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick58081481766550.jpg" }, { "petID": 21, "name": "奥达猎犬", "engName": "Otterhound", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img60371407461398.jpg" }, { "petID": 22, "name": "中华田园犬", "engName": "", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/imagick62021473240207.jpg" }, { "petID": 23, "name": "斯开岛梗", "engName": "SkyeTerrier", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img39481407230587.jpg" }, { "petID": 24, "name": "卷毛寻回猎犬", "engName": "Curly-CoatedRetriever", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img22671407405102.jpg" }, { "petID": 25, "name": "克伦伯猎鹬犬", "engName": "ClumberSpaniel", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img45811406628222.jpg" }, { "petID": 26, "name": "史毕诺犬", "engName": "Spinone Italiano", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img66101411550227.jpg" }, { "petID": 27, "name": "凯安梗", "engName": "Cairn Terrier", "price": "1000—5000元", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img30391406624704.jpg" }, { "petID": 28, "name": "恩特雷布赫山地犬", "engName": "Entlebucher", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img39531406710923.jpg" }, { "petID": 29, "name": "乞沙比克猎犬", "engName": "ChesapeakeBayRetriever", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img98301407146089.jpg" }, { "petID": 30, "name": "英国雪达犬", "engName": "English Setter", "price": "", "coverURL": "http://img.boqiicdn.com/Data/BK/P/img35421407216285.jpg" }],
            "totalCount": 141
        }
    },
    "searchDreamDetail": {
        "statusCode": "000000",
        "desc": "请求成功",
        "result": [
            {
                "content": "梦见猫产仔，吉兆，会有好运气。 求职者梦见猫生小猫，求职运势一般，合适的机会较少，观望的时候较多，会理性地调整自己的求职方向。投资人梦见猫生小猫，说明您的财运一般，波动较大，得失参半。正财方面想要收获需要付出更多的汗水与精力。投资有机会，但不必急着收获，一些长远性的投资对你更有利。生活中你有点大手大脚，要注意少带钱财出门。梦见猫生小猫，会有小状况发生，要心平气和的去处理问题。未婚的人梦见猫生小猫，则恋情起伏不定。虽然桃花盛开，但是要小心分辨好桃花和烂桃花，已婚的尤其要小心染上绯闻。您往往会被情绪化或有个性的异性吸引。女人梦见猫生小猫，则表示最近做事干净利落，不拖泥带水。女性梦见猫生小猫，一般是内心对于少年时期愿望的未达成抱有焦虑，所以会做生猫的梦。女性梦见猫生小猫时小猫死了，则表示你当前很在意一些事情，压力过大，无形的影响了你。",//内容
                "title": "梦见猫生小猫"//标题
            },
            {
                "class": "在猫和老鼠的梦境里，猫代表着正义的力量，老鼠代表着小人或者困难，猫捉住老鼠表明你将得到朋友的帮助，克服困难，在事业或生活上取得成功。梦见猫在抓老鼠，表示你有可能会遇上小偷。外出时要特别小心扒手和抢劫，自行车也不要忘了上锁。另外要特别注意友情，只要互相帮助，大家组织一些活动，日子就能过得很快活。梦见抓老鼠，表示会交上不诚实的朋友。梦见猫捉老鼠，表示能赚进大笔钱财。外出的人梦见猫捉老鼠，可能很难回到家里了。梦见猫捉老鼠，是祥兆，敌人会互相残杀，两者俱亡。 梦见捕老鼠，敌人已经阴谋着要暗算自己，要做好防御的工作。原版周公解梦猫捉鼠，主进大财。《周公解梦》猫捕鼠者，主得财。《周公解梦》梦猫捕鼠。此梦主得财，须防子孙灾。若有姓褚者梦此，则为苦哀之象。 《梦林玄解》梦猫捕鼠。梦此主得财。须防子媳有灾。出行人梦之，有不得归之叹。 《断梦秘书》",//内容
                "title": "梦见猫捉老鼠"//标题
            }
        ]
    }
}

export default (key) => {
    return new Promise(res => {
        setTimeout(() => {
            res(mockData[key])
        }, 1000);
    })
}