import React from 'react';
import { Link} from 'react-router-dom';
import Header from "../component/Header";
import Footer from "../component/Footer";
import { Row, Col, BackTop, Breadcrumb } from 'antd';


export default function NewsPage(props) {    
    // const id = useParams();
    const newsitem = [{
        vid:"2022-04-11-16b254d63",
        dt:"2022-04-08T00:00:00",
        title:"讓綠能更有價值！微電能源用太陽能推動共好價值鏈。〈天下雜誌＋聽天下 Podcast專訪〉",
        release_unit:"集團事業部",
        external:"N",
        hyperlink:null,
        content:"<iframe width='560' height='315' src='https://www.youtube.com/embed/NyZh51zmFpg' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe><br><h3><strong>讓綠能更有價值！微電能源用太陽能推動共好價值鏈</strong></h3><p><strong>(文章來源：</strong><a href=\"https://www.cw.com.tw/article/5120655\">讓綠能更有價值！微電能源用太陽能推動共好價值鏈｜天下雜誌 </a>)</p><p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電，更期待打造環境共好、經濟共好及社會共好的共好價值鏈。</p><figure class=\"image\"><img src=\"https://storage.googleapis.com/www-cw-com-tw/article/202203/article-624568c7b0f76.jpg\" alt=\"綠能-微電能源-永續-太陽能-ESG-生態鏈\" srcset=\"https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202203%2Farticle-624568c7b0f76.jpg/?w=630 630w, https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202203%2Farticle-624568c7b0f76.jpg/?w=1260 1260w, https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Farticle%2F202203%2Farticle-624568c7b0f76.jpg/?w=1600 1600w\" sizes=\"100vw\" width=\"100%\"><figcaption>微電能源創辦人王愍廸董事長出席天下SDGs論壇，分享微電串連電流、資訊流、金流的共好價值鏈。圖片來源：天下雜誌</figcaption></figure><p>文 - 葉亞薇 <a href=\"https://www.cw.com.tw/search/doSearch.action?key=%E6%95%B4%E5%90%88%E5%82%B3%E6%92%AD%E9%83%A8%E4%BC%81%E5%8A%83%E8%A3%BD%E4%BD%9C\">整合傳播部企劃製作</a><br>發布時間：2022-03-31</p><p>太陽能除了發電、成為綠電投資項目，還能有哪些新的想像？創立7年的微電能源，正是再生能源產業創新的一匹黑馬。身為台大電機系、經濟所學霸的創辦人王愍廸，原本在新加坡從事金融工作，一場金融海嘯，讓他重新思索金融業的本質與自己能做的事。他決定返台，接觸了「一人一千瓦」社會企業，十分認同其公民電廠理念：只要每人投資一千瓦太陽光電就能平衡自用電，開啟了他對太陽能產業的想像。</p><p>&nbsp;</p><h3>開啟太陽能的無限潛力 為下一代創造多贏價值</h3><p>「讓能源成為人人可以參與和碰觸的事情，是我心中公民電廠的概念。」王愍廸創辦微電能源，成為國發基金第一個投資的太陽能營運團隊，積極推動 EPC 的核心基礎，目前除了營運是屏東最大的民營太陽能電廠，也將建置台南最大的漁電共生電廠，朝向整體800MW(概念上是 25 萬戶家庭的年用電量)的電廠規模邁進，並積極推動太陽能參與綠電市場以及儲能應用。</p><p>同樣也是金融業出身、微電能源業務長沈時華，則是在一場陪客戶了解光電投資的會議上認識王愍廸後，展開了她進入太陽能領域的旅程。「從本質來說，太陽能是潔淨能源，是對地球與未來友善的模式；對我來說，太陽能可以完成我的使命感：保留一個好的環境給下一個世代的孩子們。」而從市場與業務角度來看，沈時華認為太陽能具有穩定經營與獲利的基礎，是長期穩定的資產，也是可預期管理與長期價值的項目，具多贏價值。</p><p>當越來越多人知道綠能對於低碳永續的價值，微電能源如何透過創意，讓綠能更有價值？王愍廸認為，透過電流、資訊流、金流的串連，讓太陽能不僅是再生能源的一種選項，更可以轉變成為服務每一個人的價值系統，真正成為映照每一個人的陽光。「我們首先建立一個完整的資訊架構，配合電廠本身的監控裝置，讓參與太陽能投資的人，都可以清楚看見電廠每日的發電狀況，以及售電的收益計算。」如此一來，投資人能完整掌握投資標的狀況，電異常也能即時偵測發現，進而即時應變，做到更高效率的電廠維運。</p><p>「It’s all about data, 我們建置而且持有太陽能電廠，不斷的蒐集能源數據，也研發數據分析與應用的模式，透過與不同領域夥伴的合作，將太陽能的價值串連到能源以及能源產業以外的更大範圍。」王愍廸說，像是微電和研華科技合作，在太陽能廠合作的基礎上，推動IoT與能源數據應用的研發，沈時華也表示，「微電推出可控成本的長期綠電供應模式，協助台灣中小企業能夠用合理的價格取得綠電憑證，推進RE100的目標，也提升國際競爭力。儲能方面，則推動光電與儲能的複合計畫，讓儲能的投資與應用能在合理可控的範圍，協助台灣更有效運用再生能源。」</p><figure class=\"image\"><img src=\"https://storage.googleapis.com/www-cw-com-tw/ckeditor/202203/ckeditor-6245697fd97ad.jpg\" alt=\"\" srcset=\"https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Fckeditor%2F202203%2Fckeditor-6245697fd97ad.jpg/?w=630 630w, https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Fckeditor%2F202203%2Fckeditor-6245697fd97ad.jpg/?w=1260 1260w, https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Fckeditor%2F202203%2Fckeditor-6245697fd97ad.jpg/?w=1600 1600w\" sizes=\"100vw\"><figcaption>圖片來源：微電能源。</figcaption></figure><p>&nbsp;</p><h3>跨界多元運用 人人都能為減碳共好盡力</h3><p>沈時華再以與聯邦銀行合作「綠卡」信用卡的應用案例，說明綠能價值的轉換創意。「透過信用卡優惠，鼓勵電動汽機車充電、大眾運輸工具、環境友善的餐飲，以及共享汽機車的使用，目前已累積3萬卡友，達到每月50到100噸的碳排效益，預估未來每一年透過卡友的消費選擇，可達到近1,200噸的碳排效益，即相當於3座大安森林公園的碳排。」這項榮獲經濟部2021「Buying Power 社會創新產品及服務採購獎勵機制」特別獎肯定的創意，正是鼓勵卡友的每一筆消費，為自己的未來投下決定性的選票。</p><p>「Light Donate來點亮」的計畫，則鼓勵持有太陽能資產的持有者，將穩定的電費獲益，轉為中長期支持 NPO 的動力。王愍廸說明，很多時候NPO面臨的困境其實是每次募得的經費只夠支撐一年到三年的時間，這是絕不可能改變一個地方長久以來的社會現況的。因此，透過把太陽能獲利轉變為中長期捐款，不只讓企業更容易推動公益，也讓NPO得以少花些力氣在募款，更加專注於實現其社會影響力，「像是協助偏鄉弱勢、醫療需求以外的增額交通補助支持，以及偏鄉小學營養午餐食材配送的最後一哩路等，都是長期創造改變的社會共好專案。」</p><figure class=\"image\"><img src=\"https://storage.googleapis.com/www-cw-com-tw/ckeditor/202203/ckeditor-624569ddb9a79.jpg\" alt=\"\" srcset=\"https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Fckeditor%2F202203%2Fckeditor-624569ddb9a79.jpg/?w=630 630w, https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Fckeditor%2F202203%2Fckeditor-624569ddb9a79.jpg/?w=1260 1260w, https://image-resizer.cwg.tw/resize/uri/https%3A%2F%2Fstorage.googleapis.com%2Fwww-cw-com-tw%2Fckeditor%2F202203%2Fckeditor-624569ddb9a79.jpg/?w=1600 1600w\" sizes=\"100vw\"><figcaption>圖片來源：微電能源。</figcaption></figure><p>正朝向上市興櫃努力的微電能源認為，「再生能源高數據化與普及化的特性，得以在產生能源之外進一步連結多方與產業，開拓綠能生態鏈。」王愍廸表示，持續精進太陽能電廠的規模與管理，以及能源數據和優化調度能力，實踐共好，是微電不變的努力承諾。微電即將在台南麻豆開展最大的漁電共生專案，這個位於先行區內的室內養殖型太陽能電廠模式，無論設計、建造、施工和維運的要求，都比其他漁電共生模式的複雜度及成本相對較高，極具指標性意義。微電期許，在經濟與環境之間取得平衡，持續推動各項合作的共好，從能源、經濟、社會、環境等各方面來為綠能增值，實現微電的價值。</p><p>-----------------------------------------------------------------------------------------------------------------------------------------------</p><p>&nbsp;</p><h3><strong>聽天下Podcast</strong></h3><h4>【2022聽誰說SDGs Ep.18】太陽能的共好價值鏈？打造永續生活的可能</h4><p>【聆聽連結】<br>Apple Podcast: <a href=\"https://reurl.cc/rQNZqr\">https://reurl.cc/rQNZqr</a><br>Spotify: <a href=\"https://reurl.cc/Lp9XKL\">https://reurl.cc/Lp9XKL</a></p><p>台灣在去年宣布加入2050淨零碳排的行列。2050年我國的能源配比中，再生能源將躍居第一，成為發電主力，其中風電和光電更是重中之重。</p><p>在眾多的太陽能業者中，微電能源跨界集結能量，持續致力加值綠能，讓太陽能不只是發電，期待打造能源共好、經濟共好及社會共好的共好價值鏈！今天我們將一起來聊聊微電能源創立的故事、以及如何打造共好價值鏈。<br><br>主持人：Christina 賢齡<br>來賓：<br>微電能源創辦人暨董事長 王愍廸<br>微電能源業務長 沈時華<br><br>&nbsp;</p>",
        spokesman:"曾昭人",
        spokesman_department:"集團事業部",
        spokesman_position:"協理",
        status:"approved",
        createtime:"2022-04-11T16:32:08",
        createuser:"蘇亭伃",
        updatetime:"2022-04-12T15:35:44",
        updateuser:"曾昭人",
        approvetime:"2022-04-12T15:39:08",
        apporveuser:null
    }]
    const htmlStr = newsitem[0].content;
    const dateArr = newsitem[0].dt.split("-");
    return (
        <div>
            <Header/>
            <div className='page-title'>
                <h1>News</h1>
            </div>           
            <div className='breadcrumb'>
                <div className='container-s'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to="/">Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to="/news">News</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            News
                        </Breadcrumb.Item>
                    </Breadcrumb>
                </div>   
            </div>
            <section className='page-news-page-section'>
                <div className="container-s">
                    <div className="news-page-box">
                        <Row gutter={[64, 48]}>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <div className='news-page-box-title'>                                   
                                    <h1>{newsitem[0].title}</h1>                                    
                                    <div className="publish">發布單位 ／ 集團事業部</div>
                                    <div className="date">{dateArr[0] + "." + dateArr[1] + "." + dateArr[2].slice(0,2)}</div>
                                </div>
                            </Col>
                            <Col lg={16} md={16} sm={24} xs={24}>
                                <div className="news-page-box-content">
                                    <div dangerouslySetInnerHTML={{__html: htmlStr}}></div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section>
            <div className="news-page-next">
                <div className="container-s">
                    <Row justify="space-between" align="middle">
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <Link className='news-page-next-back' to='/news'>Back to List</Link>
                        </Col>
                        <Col lg={12} md={12} sm={12} xs={12}>
                            <div className="pre-next">
                                <Link className="btn-more isview pre-btn" to='/service'>
                                    <div className="btn-more-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                                        <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                                        <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                                        </svg>
                                        <i></i>
                                    </div>
                                </Link>
                                <Link className="btn-more isview next-btn" to='/service'>
                                    <div className="btn-more-wrap">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
                                        <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                                        <circle r="38" cx="40" cy="40" strokeWidth="2" fill="none"></circle>
                                        </svg>
                                        <i></i>
                                    </div>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="news-page-hot">
                <div className="container-s">
                    <h3 className='news-page-hot-title'>HOT NEWS</h3>
                    <Row gutter={[48, 24]}>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Link className='news-item' to="/news/test">
                                <div className='news-item-date'>
                                    <div className='news-item-date-day'>24</div>
                                    <div className='news-item-date-month'>2022.07</div>
                                </div>
                                <div className='news-item-content'>
                                    <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                    <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Link className='news-item' to="/news/test">
                                <div className='news-item-date'>
                                    <div className='news-item-date-day'>24</div>
                                    <div className='news-item-date-month'>2022.07</div>
                                </div>
                                <div className='news-item-content'>
                                    <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                    <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Link className='news-item' to="/news/test">
                                <div className='news-item-date'>
                                    <div className='news-item-date-day'>24</div>
                                    <div className='news-item-date-month'>2022.07</div>
                                </div>
                                <div className='news-item-content'>
                                    <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                    <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                </div>
                            </Link>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <Link className='news-item' to="/news/test">
                                <div className='news-item-date'>
                                    <div className='news-item-date-day'>24</div>
                                    <div className='news-item-date-month'>2022.07</div>
                                </div>
                                <div className='news-item-content'>
                                    <h3>讓綠能更有價值！微電能源用太陽能推動共好價值鏈微電能源用太陽能推動共好價值鏈</h3>
                                    <p>全球追求淨零碳排如火如荼，台灣也宣布2050淨零轉型政策，積極發展再生能源，成為未來的發電主力，其中風電和光電更是重中之重。2015年創立的微電能源，跨界集結能量，持續致力加值綠能，讓太陽能不只是發電...</p>
                                </div>
                            </Link>
                        </Col>
                    </Row>
                </div>
            </div>
            <BackTop />
            <Footer/>
        </div>
        
    );
}