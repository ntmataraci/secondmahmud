export const turkishLanguage = [
  {
    name: "Menü",
    sectionOne: "Yeni Oyun",
    sectionTwo: "Devam Et",
    sectionThree: "Nasıl Oynanır",
    stats: [
      "Merkezi Yönetim",
      "Halk Desteği",
      "Askeri Destek",
      "Barış ihtimali",
    ],
  },
  {
    scene: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mahmud_II.jpg/220px-Mahmud_II.jpg",
    header:"Tahta çıkış",
    entrance: "Şehzade Mahmud, ağabeyi Sultan IV. Mustafa'nın 14 aylık saltanatı boyunca korku dolu günler geçirdi. İstanbul’dan sağ kurtulup kaçabilen Nizam-ı Cedidciler Rumelide yenilikçi ve III. Selim yanlısı olan Rusçuk ayanı Alemdar Mustafa Paşa’nın yanına sığınmışlardı. Tarihe Rusçuk ayanı diye geçen bu kişiler, III. Selim’i tekrar tahta çıkarmaya karar vermişlerdi. Alemdar Mustafa Paşa 28 Temmuz 1808'de 15 bin kişilik ordusu ile Sultan III. Selim'i tahta çıkarmak için Topkapı Sarayına dayandığında tahtta bulunan Sultan IV. Mustafa, Sultan III. Selim ve kardeşi Şehzade Mahmud'un ölüm emrini verdi. Haremdeki dairesinde feci şekilde öldürülen Sultan Selim'in cesedi Arz Odası'nın önünde bırakıldı ve Alemdar Mustafa Paşa, sarayın Babüssade kapısını kırdığında tahta çıkarmak için geldiği Sultan III. Selim'in cesedi ile karşılaştı. Bunun üzerine Şehzade Mahmud'un derhal bulunup getirilmesini emretti. O sırada haremde Şehzade Mahmud'u katletmek için cellatlar ile Şehzadenin hizmetkarları arasında çatışmalar yaşanıyordu. Şehzadenin maiyetindeki cariyelerden Cevri Kalfa'nın hamam külhanından aldığı bir kase külü katillerin yüzüne avuç avuç atmasıyla kazanılan zamanla ağalar Şehzade Mahmud’u damdan kaçırmayı akıl ettiler. Haremden Kuşhane’nin damına geçen şehzade, kuşaklarla birbirine bağlanan iki merdivenle Başimam Hafız Ahmet Efendi ve arkadaşları tarafından Enderun avlusuna indirildi ve Alemdar Mustafa Paşa'nın bulunduğu yere getirildi. Oradan Hırka-i Saadet dairesine geçilerek Sultan II. Mahmud'a biat edildi.",
    choices: [
      {
        name: "a",
        content: "Abimin intikamını Alacağım !",
        effect: [
          { stat: "Adm", point: -5 },
          { stat: "Peo", point: 5 },
        ],
      },
      {
        name: "b",
        content: "Bu olayı kişisileştirmeyeceğim.",
        effect: [
          { stat: "Adm", point: 10 },
          { stat: "Peo", point: -5 },
        ],
      },
    ],
  },
  {
    scene: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Mustafa_bairakdar.jpg",
    header: "Alemdar Mustafa Paşa Vakası",
    entrance:`Alemdar Mustafa Paşa'nın sadrazamlık döneminde İstanbul'da barınan adamlarının yağmalara karışması, halka Kabakçı Mustafa isyancılarını aratır olması halk arasında huzursuzluk yaratmış, ona olan güveni sarsmıştı.
    Sened-i İttifak ise II. Mahmud'a "padişahın otoritesinin kısıtlandığı" yönünde duyurulmuş, padişah paşaya karşı kışkırtılmıştı.
    Alemdar Mustafa Paşa'nın Yeniçeriler'in "kendilerine alternatif olduğu düşüncesiyle" karşı çıktığı Nizam-ı Cedit'i (Sekban-i Cedit olarak farklı isimle de olsa) yeniden kurması, Yeniçeri ocaklarında yolsuzluk tespiti yapmaya kalkışması onların da düşmanlığını kazanmasına yetmişti.
    Sonunda (15 Kasım - 18 Kasım 1808)'de ortaya çıkan Alemdar Vakası adı verilen yeniçeri isyanının ilk gününde isyancı Yeniçeriler, Alemdar'ın kalmakta olduğu Bâbıâli'yi bastılar. Sekbanların karşı koyması üzerine de ateşe verdiler. Saraydan yardım gelmeyince umudunu yitiren Alemdar barut mahzenini ateşleyerek içeri girmeye çalışan 1000'e yakın yeniçeriden 600 kadarıyla birlikte öldü.
    Yeniçeriler yangından sonra onun ölüsünü bularak günlerce İstanbul'da dolaştırdılar; sonra parçalayıp Yedikule dışındaki bir kör kuyuya attılar.[10] Alemdar'ın kemikleri Yeniçeri Ocağı'nın ilgasından sonra oradan çıkartılarak Yedikule surları civarına gömülmüştür. II. Meş­rutiyet'in ilanından sonra da Zeynep Sultan Camii haziresine nakledilmiştir. `,
    choices: [
      {
        name: "a",
        content: "Devlet ortaklık istemez, Alemdar Paşaya yardım göndermedim.",
        effect: [
          { stat: "Adm", point: 15 },
          { stat: "Peo", point: 5 },
          { stat: "Mil", point: -5 },
        ],
      },
      {
        name: "b",
        content: "Alemdar Paşa benim hayatımı kurtardı. Ona yardım etmeliydim.",
        effect: [
          { stat: "Adm", point: -5 },
          { stat: "Peo", point: -5 },
          { stat: "Mil", point: 5 },
        ],
      },
    ],
  },
  {
    scene: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/1/1b/London_news_c1877_-_scanned_constantinopole%281996%29-Opening_of_the_first_parlement.png",
    header:"Sened-i İttifak",
    entrance: `Sened-i İttifak, (29 Eylül 1808) Osmanlı Sadrazamı Alemdar Mustafa Paşa'nın Rumeli ve Anadolu âyanlarını İstanbul'da toplayarak yapmış olduğu anayasal bazı vasıflar içeren bir antlaşmadır.
    Anayasa hukukçuları Türk tarihindeki ilk anayasal belge olarak genellikle Sened-i İttifak’ı kabul ederler ve Türkiye’deki anayasacılık hareketlerini bununla başlatırlar. “Devlet iktidarını sınırlandırmayı maksad edinen bir girişim olarak” bu belgeyi 1215 yılında İngiltere'de kabul edilen İngiliz Magna Carta’sına benzetenler de vardır.[1] Ancak Shaw ve Berkes gibi birçok önemli tarihçi Türkiye'de anayasal düzenin ve demokrasinin tarihi gelişiminde Sened-i İttifak'ın iddia edildiği kadar mühim bir rol oynamadığını belirtmektedir`,
    choices: [
      {
        name: "a",
        content: "Anayasa çalışmalarını teşvik et",
        effect: [
          { stat: "Adm", point: -10 },
          { stat: "Peo", point: 5 },
          { stat: "Mil", point: 5 },
        ],
      },
      {
        name: "b",
        content: "Otoriter Rejim En iyisi",
        effect: [
          { stat: "Adm", point: 5 },
          { stat: "Peo", point: -5 },
          { stat: "Mil", point: -10 },
        ],
      },
    ],
  },
  {
    scene: 4,
    img: "https://kulturelbellek.com/wp-content/uploads/2021/11/ayan.jpg",
    header:"Ayanlar Meselesi",
    entrance: `Sırp meselesini halletmek Sultan Mahmud için en hayati meselelerden biriydi. Sırplar 9 yıldır isyan halindeydi. Bu isyanlar bir türlü bastırılamamıştı. Rumelideki 3. Ordu bunun için görevlendirildi. Hurşit Ahmet Paşa, tertip ettiği 80 bin kişilik ordusuyla Niş’ten yürüyüşe geçerek Sırpların üzerine yürüdü. 30 Ekim 1813’te Hurşit Ahmet Paşa Belgrad’a girdi. Sırplar'ın eline geçen kaleler ve şehirlerin geri alınmasıyla isyan sona erdi. İsyanın lideri Kara Yorgi Avusturya’ya kaçmak zorunda kaldı.

    Sultan II. Mahmud, Bükreş Antlaşması'nın getirdiği barış ortamını fırsat bilerek tahta geçer geçmez imzalamak zorunda kaldığı Sened-i İttifak’ı, devlete başkaldıran ayanları ortadan kaldırmak için bir delil kabul etti. Alemdar’ın öldürülmesinden sonra Rumeli’de ve Anadolu’da ayanlar, başkenti hiçe sayarak hareketlerine devam ettiler. Sultan Mahmud Otoritesini imparatorluğun her tarafında geçirmek için bu ayanlara karşı esaslı bir harekete geçti. Bu doğrultuda yapılan çalışmalarla ayanlardan bir kısmı öldürüldü. Bazıları da sürüldü. Bütün bu ayaklanmalara ve iç harplere rağmen Rumeli’de ve Anadolu’da devlet otoritesini kurmak mümkün oldu. `,
    choices: [
      {
        name: "a",
        content: "Ayanları kanlı bir şekilde yok et.",
        effect: [
          { stat: "Adm", point: 20 },
          { stat: "Peo", point: -5 },
          { stat: "Mil", point: -5 },
        ],
      },
      {
        name: "b",
        content: "Ayanlarla orta yol bul.",
        effect: [
            { stat: "Adm", point: -20 },
            { stat: "Peo", point: 5 },
            { stat: "Mil", point: 5 },
        ],
      },
    ],
  },
  {
    scene: 5,
    img: "https://www.bilgipedia.com.tr/wp-content/uploads/2021/01/yunan-isyani.jpg",
    header:"Yunan İstanı",
    entrance: `1821 yılında Yunan âsilerin Mora’daki sivil Türkler’i kılıçtan geçirmeleri üzerine II. Mahmud, isyanın başlıca tahrikçisi olan İstanbul’daki Ortodoks Patriğini astırdı. Romanya’da da Rusya’nın tahrikiyle bir isyan çıktı. Türk ordusu, bu isyanı kolayca bastırdı. Fakat Mora isyanı bastırılamadı. Zira bir Fransız kolordusu başta olmak üzere bütün Avrupa’dan yardım alıyordu. Yalnız Avusturya Osmanlı’yı tutuyordu. Prusya, İngiltere ve İspanya tarafsızdı. Rusya ile Fransa, Yunanistan’a bağımsızlık verilmesini şiddetle istiyorlardı. Lord Cochrane ve Sir Richard Church gibi İngiliz generallerinin komutasındaki Yunanlar, tamamen ezilmişler; isyan Mısır ordusu tarafından tamamen bastırılmıştı ki 20 Ekim 1827’de Navarin faciası oldu. Türk donanması, Mora’nın güneybatısındaki bu limanda bulunuyordu. İngiliz – Fransız – Rus müttefik donanması, savaş bayrağı çekmek usulden olduğu halde bunu yapmaksızın limana girdi, böyle bir hareket beklemeyen Osmanlı donanmasına birdenbire ateş açıp imha etti. Navarin faciasının hemen akabinde 1828'de Rusya da Yunanistan ile ilgili istekleri kabul ettirmek için Osmanlı Devletine savaş açtı. Bir sene önce donanması Navarin'de yok olan, Yeniçeriler’i de kanlı bir katliamla ortadan kaldıran, yeni modern ordusu henüz çekirdek halinde bulunan II. Mahmud, Avrupa’nın baskısına karşı koyamadı. Rus ordusunun Balkanları geçip Edirne’ye kadar gelmesi üzerine Rusya ile Edirne Antlaşması imzalandı. Ruslar, bütün Osmanlı topraklarından çekildi. Ancak Yunanistan’a bağımsızlık koparmakla yetindi, böylece Balkanlar’daki Ortodokslar arasında koruyucu rolüne sahip çıkmayı umuyordu. Mora ve Attika yarımadaları ile Eğriboz ve Kiklad adalarından ibaret küçücük 49.414 km² bir Yunan Krallığı kuruldu. `,
    choices: [
      {
        name: "a",
        content: "Yunan Krallığını kabul etme!",
        effect: [
          { stat: "Adm", point: 5 },
          { stat: "Peo", point: 5 },
          { stat: "Mil", point: 5 },
          { stat: "War", point: -35 },
        ],
      },
      {
        name: "b",
        content: "Barış Şartlarına uy.",
        effect: [
            { stat: "Adm", point: -5 },
            { stat: "Peo", point: -5 },
            { stat: "Mil", point: -5 },
            { stat: "War", point: 35 },
        ],
      },
    ],
  },
  {
    scene: 6,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg/474px-ModernEgypt%2C_Muhammad_Ali_by_Auguste_Couder%2C_BAP_17996.jpg",
    header:"Kavalalı Mehmet Ali Paşa İsyanı",
    entrance: `Kavalalı Mehmet Ali Paşa, Mora’da büyük güçler karşısındaki kayıplarını tazmin için Sultan Mahmud’dan zengin insan ve doğa kaynakları olan Suriye eyaletinin valiliğini istedi. Sultan Mahmud ona, bunun yerine Girit valiliğini verdi ama adada düzen sağlamanın kendisi için büyük mali yük getireceğinin farkında olduğundan Mehmet Ali Paşa bunu reddetti. 1831’de Suriye’ye karşı karadan ve denizden bir sefere girişti. Yeniden canlandırılan Mısır ordusuna komuta eden oğlu İbrahim Paşa, Akka, Şam, Hama ve Humus'u alarak Toroslar'ı aştı. Anadolu'da yerel nüfustan heyecanlı bir karşılama gördü. Sultan Mahmud, böylesine açık bir isyana tahammül gösteremezdi. Mehmet Ali Paşa ve oğlu İbrahim Paşa asi ilan edilip üzerlerine Sadrazam Reşid Mehmet Paşa komutasında bir ordu gönderildi. İki ordu Konya'da karşılaştığında Osmanlı ordusu yenildi ve sadrazam esir alındı. `,
    choices: [
      {
        name: "a",
        content: "Mısır Krallığını tanı.",
        effect: [
          { stat: "Adm", point: -10 },
          { stat: "Peo", point: -10 },
        ],
      },
      {
        name: "b",
        content: "Savaş Bitmeyecek !",
        effect: [
          { stat: "Mil", point: 10 },
          { stat: "War", point: -15 },
        ],
      },
    ],
  },
  {
    scene: 7,
    img: "https://seyler.ekstat.com/img/max/800/q/qQWRRIkhIUvjw0Kz-636852573331916490.jpg",
    header:"Vaka-i Hayriye Yeniçeri Ocağının Kaldırılışı",
    entrance: `Yeniçeri Ocağının kaldırılması, Sadrazam Benderli Mehmet Selim Sırrı Paşa zamanında gerçekleştirildi. On yedi yıldır bu ocağı kaldırmayı tasarlayan II. Mahmut, 25 Mayıs 1825'te bu fikrini uygulamaya koydu. Eşkinci Ocağı adı verilen yeni bir askeri sınıf kurulduğunu resmen açıkladı. Avrupa tarzında üniforma giydirilen yeni ordu, 11 Haziran 1826'da eğitime başladı. Bundan üç gün sonra ayaklanan yeniçeriler, kazanlarını Etmeydanı'na çıkararak gösterilere başladılar. Ulemayı yanına alan II. Mahmut, Sancak-ı Şerif'i çıkararak halkı yeniçerilere karşı savaşmaya çağırdı. Yeniçeri Ocağı dışındaki bütün ocaklar, padişaha sadakatlerini bildirdiler. Aksaray'daki Etmeydanı'nda bulunan yeniçeri kışlaları top ateşine tutuldu. 6.000'den fazla yeniçeri öldürüldü. 20.000 civarında isyancı da tutuklandı. 16 Haziran 1826'da tarihe karışan Yeniçeri Ocağı'nın yerine, Asakir-i Mansure-i Muhammediye adlı yeni bir ocak kuruldu. Anlamı ise "Muhammed'in zafer kazanmış orduları"dır.

    Ocak ile beraber aynı dönemde Beşiktaş Cemiyet-i İlmiyesi de kapatılıp dernek üyeleri sürgüne gönderilmişti.[3] `,
    choices: [
      {
        name: "a",
        content: "Yeniçerilerden kalanları yok et.",
        effect: [
          { stat: "Adm", point: -10 },
          { stat: "Mil", point: -15 },
        ],
      },
      {
        name: "b",
        content: "Sağkalanlar yeni orduya katılsın.",
        effect: [
          { stat: "Mil", point: 5 },
          { stat: "Peo", point: -15 },
        ],
      },
    ],
  },
  {
    badGame:"Adm",
    content:"Adm kaybettin"
  },
  {
    badGame:"Peo",
    content:"Peo kaybettin"
  },
  {
    badGame:"Mil",
    content:"Mil kaybettin"
  },
  {
    badGame:"War",
    content:"war kaybettin"
  },
];
