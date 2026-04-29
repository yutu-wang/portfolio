const projectsData = {
    "modern-cave": {
        title: "The Modern Cave",
        meta: "王語彤、陳虹宇 | 沈浸式投影、電子感測元件 | 10x10m | 2024.05",
        description: `
            <p>柏拉圖在《理想國》中設計了一個洞穴寓言，描繪著居住在洞穴的人們依照投在牆面上的影子來推測外面的世界的樣子。而我們身處當下、觀望未來，依然被禁錮在名為「當下」的洞穴中，看著外面透進來的光線，想像未來的樣子。</p>
            <h4>創作動機</h4>
            <p>科技帶領世界具備多重的虛擬空間，我們探討虛擬空間及感知的關聯。透過在另一個世界的數位分身，作為現實肉身的延伸，畫面中的人影自身高度的同步互動，提升感官的沈浸感。</p>
            <h4>表現形式</h4>
            <p>透過投影建構出虛擬世界，由網路攝影機捕捉人們當下的活動瞬間，並即時合成錄像的特效顯示。</p>
        `,
        embedUrls: [
            "https://drive.google.com/file/d/1k8YkJ9XpZTwJBYWexBpnn-fq75R3MaGw/preview"
        ],
        bgImage: "images/畢業製作照片 (1).jpeg",
        images: ["images/畢業製作照片.jpg", "images/畢業製作照片 (1).jpeg", "images/畢業製作照片 (2).jpeg", "images/畢業製作照片4.jpeg", "images/畢業製作照片 (3).jpeg"],
        category: "New Media Art"
    },
    "icarus": {
        title: "新世紀寓言 . 伊卡洛斯",
        meta: "王語彤、李妍蓁 | 複合媒材雕塑、微電子裝置、投影 | 6x6x3m | 2024.01",
        description: `
            <p>伊卡洛斯因太接近太陽而使蠟翼融化，從天上墜入海裡溺死。他無視了自然的法則和神的權威，在天空自上至下掃視。他覺得自己像個神。</p>
            <p>我們以最新的超耐熱材料研發出了新型的翅膀！人類有足夠的能力飛向象徵神權的太陽，而這次在追逐的過程中融化的不是翅膀，而是用蠟做的，人的本體。</p>
            <p>......所以......科技的成功，真的代表人類的成功嗎......?</p>
            <h4>表現形式</h4>
            <p>作品由人類蠟像和透明翅膀組成。<br>透明翅膀象徵人類所追求的高度進步，以翅膀作為人類妄圖挑戰神權、超越神權的象徵。翅膀上投射了太陽風與行星際磁場之數據，代表朝著太陽前行、逼近太陽的意象。<br>人類蠟像會被由數據資料控制的高溫燈光照射，高溫燈光在此象徵太陽。人類在逐日的過程中，靠著翅膀拉近了和太陽的距離，卻不斷被摧毀、融化，最終消失。</p>
        `,
        embedUrls: [
            "https://drive.google.com/file/d/1tXzu0eFaoQzhaeuZ2VYulMdPhi8uGPzp/preview"
        ],
        bgImage: "images/依卡洛斯2.JPG",
        galleryLayouts: [
            { type: "grid-3", images: ["images/依卡洛斯3.JPG", "images/依卡洛斯5.JPG", "images/依卡洛斯4.JPG"] },
            { type: "large", images: ["images/依卡洛斯7.png"] }
        ],
        // video: "images/新世紀預言-依卡洛斯.mov#t=7",
        category: "New Media Art"
    },
    "nailglass": {
        title: "Nailglass 指甲沙漏",
        meta: "王語彤 | 生物媒材指甲、影像 | 2023",
        description: `
            <p>時間不斷往前，指甲也不斷增長。指甲位於手指末端的伸面，並幫助手完成較精細的動作，在日常中幾乎陪伴我們做任何事，也更容易留下痕跡，或是土壤、污垢，被顏料或焦油染色，指甲某種程度保留著我們的生活日常。</p>
            <p>若我們一個禮拜剪一次指甲，就好像剪掉了一個禮拜的時間一樣，無用的人類指甲，好像可以當做某種我們存在過的證明。</p>
            <p>時間看似不斷往前，但我們仍然重複過著每一個相似的週期，每天早上醒來要面對新的一天，從禮拜一到禮拜天，再回到禮拜一、禮拜天⋯⋯，就這樣日復一日，就像每次剪指甲，過了一個禮拜它又會長回來，指甲的時間只有七天，不停循環著七天，看似往前卻又形成一個圈，如同沙漏翻來覆去，從一端來看我們好像不斷地在被掠奪光陰，但從另一端看我們不斷的在獲取，時間從來沒有減少，只是顛倒反覆，重複著不斷消長的生命輪迴。</p>
            <h4>創作背景</h4>
            <p>作品《nailglass》搜集了 ９ 位不同身份與背景者的指甲，這些累積而成的生物媒材象徵人的成長和流失，這些指甲在長度、厚度、質地與顏色上皆呈現差異，其生長速度亦不相同。
個體之間的時間感並非一致，而是各自運行於不同的節奏之中——彷彿每個人都活在自己的指甲時區。</p>
        `,
        images: ["images/指甲2.jpg", "images/指甲1.JPG"],
        category: "New Media Art"
    },
    "text-photo": {
        title: "疫情下的「字」拍照",
        meta: "王語彤 | p5.js | 2021.08",
        description: `
            <p>用「疫情 防疫 生活 陽光 貓」等詞彙生成畫面，疫情期間關在房間裡的三個月，這些事物將我填滿，單調又重複的日子，壓抑、枯燥，日漸膨脹的情緒以創作為出口。</p>
            <p>導入這些文字後取得鏡頭授權，偵測顏色，動態的重組、運算文字和色彩，以文字描繪圖像。<br>隱約描繪人影的輪廓，即時的動態畫面與使用者做互動，對著盡頭擺姿勢、移動。滑鼠控制文字的大小，文字越小越密集，影像越清晰。</p>
            <p style="color: var(--primary); font-size: 0.9rem; margin-top: 1rem;">⚠️ 備註：請點擊下方作品畫面，並允許相機權限才能啟動 Webcam 互動喔！</p>
        `,
        embedUrls: [
            "https://openprocessing.org/sketch/1244921/embed/"
        ],
        bgImage: "images/字拍照2.jpg",
        category: "Creative Coding"
    },
    "sea": {
        title: "擬｜海",
        meta: "王語彤 | p5.js | 2024.05",
        description: `
            <p>以「海」作為大自然的原始母體象徵，粒子尺度的構成來模擬自然形態的生成邏輯，以數位語言重構出記憶中的海洋。</p>
        `,
        embedUrls: ["https://openprocessing.org/sketch/2258436/embed/"],
        bgImage: "images/擬海.png",
        category: "Creative Coding"
    },
    "universe": {
        title: "particle system",
        meta: "王語彤 | p5.js | 2024.05",
        description: `
            <p>利用迴圈及噪聲 (noise) 製作粒子系統，透過大量的程式碼實驗與參數調整，產生各種不同的生成藝術視覺效果。</p>
        `,
        embedUrls: [
            "https://openprocessing.org/sketch/2250950/embed/",
            "https://openprocessing.org/sketch/2237271/embed/",
            "https://openprocessing.org/sketch/2237266/embed/"
        ],
        bgImage: "images/particle system.png",
        category: "Creative Coding"
    },
    "bird-of-paradise": {
        title: "天堂鳥",
        meta: "王語彤 | p5.js | 2021",
        description: `
            <p>使用 p5.js 創作的互動式天堂鳥圖像。</p>
            <p style="color: var(--primary); font-size: 0.9rem; margin-top: 1rem;">⚠️ 備註：請點擊下方作品畫面進行互動。</p>
        `,
        embedUrls: ["https://openprocessing.org/sketch/1259559/embed/"],
        bgImage: "images/天堂鳥.jpg",
        category: "Creative Coding"
    },
    "digital-mountain": {
        title: "數位山巒",
        meta: "王語彤 | p5.js | 2024.04",
        description: `
            <p>《數位山巒》透過粒子系統與動態演算法，模擬地形的堆積與流動，形構出一種持續生成的數位地景。</p>
            <p>紅色光線自畫面中放射，與流動的粒子相互牽引。</p>
        `,
        embedUrls: ["https://openprocessing.org/sketch/2236046/embed/"],
        bgImage: "images/數位山巒.png",
        category: "Creative Coding"
    },
    "jellyfish": {
        title: "jellyfish",
        meta: "王語彤 | p5.js | 2024.04",
        description: `
            <p>曾在衝浪時被水母電傷，傷口發炎了一個月。</p>
            <p>作品以大量密集的水母影像構成畫面，並將其轉化為柔軟、可愛的形象，原本令人不適的經驗，變成一種帶點幽默與荒謬的視覺場景。</p>
        `,
        embedUrls: ["https://openprocessing.org/sketch/2235854/embed/"],
        bgImage: "images/jellyfish.png",
        category: "Creative Coding"
    },
    "soft-robot": {
        title: "脊椎測彎",
        meta: "王語彤、商睿庭、盧佩璇 | 矽膠、微電子裝置、軟機器 | 18x9x3cm | 2024.05",
        description: `
            <p>《脊椎測彎》以氣動裝置與矽膠製作的軟機器人為媒材，模擬脊椎彎曲、膨脹與扭動的狀態。</p>
            <p>作品以柔軟的方式呈現身體結構的變形，使原本隱藏於體內的變化被轉化為可見的動態形態。</p>
            <br>
            <p>本作品為實驗性創作，著重於材質與動作之間的關係測試，探索柔性機構如何表現身體感與變形過程。</p>
        `,
        embedUrls: [
            "https://drive.google.com/file/d/1_smEcRa4nM98LZ855RbwQsdmSjo1qgfD/preview",
            "https://drive.google.com/uc?export=embed&id=1_smEcRa4nM98LZ855RbwQsdmSjo1qgfD"
        ],
        // video: "images/脊椎側彎.mp4#t=10",
        bgImage: "images/脊椎側彎1.png",
        galleryLayouts: [
            {
                type: "grid-3",
                text: "<h4>實驗過程</h4><p>我們從矽膠的形狀開始，測試其在不同厚度與結構條件下的變形方式，並持續調整其膨脹、彎曲與扭動的動態行為。從葉子與葉脈的結構形式出發，探索其在氣動驅動下的變形潛力，並進一步轉化為具節段性的毛毛蟲型結構。經多次實驗與調整後，最終以魚骨式排列達到較穩定且可控制的彎曲效果，進而發展出類似脊椎的形態語言。<br>透過反覆實驗與測試，不斷修正材料厚度、結構形式與氣壓參數，逐步建立其形變的可能性。</p>",
                images: ["images/脊椎側彎4.png", "images/脊椎側彎5.png", "images/脊椎側彎6.png"],
                zoomImages: [0, 2]
            }
        ],
        category: "Experimental Lab"
    },
    "nya": {
        title: "第NYA感",
        meta: "王語彤、戴佳璇 | 人工皮、微電子裝置 | 10x10cm | 2024.05",
        description: `
            <p>肚子餓的時候，會發出咕嚕嚕的聲音。那你的皮膚呢？</p>
            <p>我們研發了一款可以貼附於任何部位的「皮膚」，當被觸碰時，會發出輕微、帶點黏膩的nya-ni 聲響。</p>
            <p>將觸覺轉譯成一種介於聲音與情緒之間的訊號，試著發明一種新的感覺——第nya感。</p>
        `,
        video: "images/第nya感.MOV",
        bgImage: "images/第nya感.JPG",
        galleryLayouts: [
            { type: "grid-2", images: ["images/第nya感.JPG", "images/第nya感2.JPG"] }
        ],
        category: "Experimental Lab"
    },
    "kuai-kuai": {
        title: "乖乖教",
        meta: "王語彤 | 微電子裝置、乖乖、影像 | 1.5x10m | 2023",
        description: `
            <p>《乖乖教》取材自台灣廣為流傳的「乖乖」文化——將綠色包裝的乖乖零食放置於電腦主機上，象徵設備能「乖乖運作」，而紅色包裝則被視為不吉利，因其隱含「出錯」的聯想。</p>
            <p>作品將一座「乖乖祭壇」設置於堆滿電腦主機與雜物的倉庫深處，終日運轉的主機持續發出微弱而穩定的綠光，營造出一種帶有不安與詭異的氛圍。</p>
            <p>在這個場域中，原本屬於工程與運算的理性系統，與象徵性、儀式性的行為交錯共存。作品藉此探討：在高度理性的科技環境中，人們如何透過非理性的信仰與日常實踐，尋求對系統穩定的想像與控制，形成一種介於迷信與習慣之間的行為模式。</p>
        `,
        bgImage: "images/乖乖教1.jpg",
        images: ["images/乖乖教2.JPG", "images/乖乖教3.jpg"],
        category: "Experimental Lab"
    },
    "xinchao": {
        title: "心潮",
        meta: "王語彤、黃煒傑、呂儷馨 | 微電子裝置、vr、複合媒材 | 3x3m | 2025.12",
        description: `
            <p>《心潮》是一件結合虛擬實境與多感官身體回饋的沉浸式體驗作品。以海洋作為情緒隱喻，將使用者的心率等生理數據轉化為動態變化的虛擬環境，使內在狀態得以被外顯化觀看。</p>
            <p>當心率上升時，海面將轉為陰天、雷雨等不穩定狀態，並同步影響波浪強度。作品同時結合 Arduino 驅動的觸覺裝置與水體回饋機制，使使用者在躺姿中同時感知視覺、聽覺與觸覺的變化。</p>
            <p>透過即時回饋與環境擾動，使內在情緒狀態得以被觀看與感知，並引導使用者在干擾中與自身共處。</p>
        `,
        bgImage: "images/心潮4.png",
        images: ["images/心潮1.jpg", "images/心潮2.jpg"],
        category: "Experimental Lab"
    }
};