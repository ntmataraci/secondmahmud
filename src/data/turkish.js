export const turkishLanguage = [
  {
    name: "Menü",
    sectionOne: "Yeni Oyun",
    sectionTwo: "2.Mahmut'un hikayesine eşlik et ve seçenekleri seçerek 10. soruya kadar gelmeye çalış. Dikkat et 50 puanın altına indiğin her bölüm için şans zarı atılır ve tahttan indirelebilirsin.",
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
    header:"Yunan İsyanı",
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
    scene: 8,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/1024px-Flag_of_Saudi_Arabia.svg.png",
    header:"Suud İsyanı",
    entrance: `Babasının ölmesi üzerine Muhammed bin Suud, Diriye ve çevresinde ilk olarak 1726’da bağımsız bir emir sanıyla hükmetmeye başladı. Bu dönemde Muhammed'in zamanındaki hayat tarzına dönülmesini savunan ve her türlü yeniliğe ve mezarlara karşı olan Vahhabiler, ve öğretilerin yayıcısı Muhammed bin Abdülvehhâb bazı sahâbelerin kabirlerini yıktırması sonucu gördüğü tepkiler üzerine Diriye’ye sığınmak zorunda kaldı. Vahhabilere göre mezarın sadece ziyareti değil, yerinin belli olması bile cehennemin kapılarını açacak bir kabahatti. 
    Napolyon Bonapart’ın 1798’de beklenmedik bir şekilde Mısır’ı işgal etmesi ve bunun ardından ortaya çıkan meseleler Suûdîler’in işine yaradı.[2] 1802'de Abdullah bin Suud, Kerbelâ’yı basıp matem ayini yapan Şiîler’in 2000’den fazlasını öldürerek Hüseyin’in sandukasını ateşe verip türbedeki 200 deve yükü altın ve gümüş eşyayı Diriye’ye getirdiler.[3] 1803’te Hicaz’a karşı giriştikleri işgal hareketi ile birlikte ilk önce Taif'i ardından da 1805’te yeniden Hicaz'a girip Medine’yi ele geçirdiler. Medine'de ne kadar türbe ve mezar varsa hepsi yerle bir edildi ve Mescid-i Nebevi yağmalandı. Bir yıl sonra da 1806'da Mekke'yi ele geçirdiler. Hac yolu seneler boyu kapalı kaldı ve uyarılara kulak asmadan Mekke’ye doğru yola çıkanlardan da hiçbir haber alınamadı. Özellikle bu son olaylar Osmanlı Devleti'nin prestijini sarsacak nitelikteydi, zîrâ Osmanlı Devleti bu iki kutsal şehir üzerinde 1517'den beri hükümranlığını kesintisiz sürdürmekteydi.
    
    `,
    choices: [
      {
        name: "a",
        content: "Kavalalı ailesinin yardımıyla suudları yok et",
        effect: [
          { stat: "Adm", point: -10 },
          { stat: "Mil", point: 5 },
        ],
      },
      {
        name: "b",
        content: "Kendi güçlerinle, suudları yok et",
        effect: [
          { stat: "Mil", point: -10 },
          { stat: "Adm", point: 15 },
        ],
      },
      {
        name: "c",
        content: "Özerklik tanı",
        effect: [
          { stat: "Adm", point: -25 },
          { stat: "Peo", point:  15 },
        ],
      },
    ],
  },
  {
    scene: 9,
    img: "https://img-s3.onedio.com/id-5adb51f7820103a50e903fa8/rev-0/w-620/f-jpg/s-f281ec242300121541dc7640b07b8d01cf96f7e1.jpg",
    header:"İnkilapçılık",
    entrance: `2. Mahmut'un yaptığı yenilikler.
 İlk posta ve polis örgütü kuruldu.
 Kıyafette değişiklikler ve düzenlemeler yapıldı. memurlara pantolon ve fes uygulaması, kravat,gömlek uygulaması getirildi.
 Müsadere usulü, yani devletin vatandaşların mallarına el koyması uygulaması kaldırıldı.
 Sağlık örgütü ve ilk karantina sistemi oluşturuldu.
 Devlet dairelerine padişah portresi asılması uygulaması getirildi.
 Avrupa'ya eğitim alması için ilk defa öğrenci gönderildi.
 İlköğretim istanbul'da zorunlu hale geldi.
 Müslüman tercümanlar yetiştirme amacı ile tercüme odaları kuruldu.
 Askeri okullarda fransızca zorunlu ders haline getirildi.
 Yurtiçine geziler düzenlendi.
 İlk resmi gazetesi olan takvimi vekayi gazetesi 1831'de yayınlandı.
 Batılı eğitim veren rüştiyeler ve mektebi ulumı edebiye gibi orta öğretim kurumları açıldı.
 Arazi kanunnamaesi ile mülkiyet hakkı getirildi.
 Müslüman tüccara vergi indirimi sağlamıştır.
 2. mahmut tarafından yerli malı kullanımı teşvik edilmiştir.
 İthal malların tüketimi sınırlandırılmaya çalışılmış ve ihracata önem verilmiştir.
 Yol yapımına önem verilmiştir.
 Ordunun ihtiyacına yönelik olarak feshane, çuha fabrikası ve bezhane gibi pek çok tesis kuruldu.
 Devletin gelirlerini arttırmak amacı ile evkaf vekâleti (vakıflar müdürlüğü) kurulmuştur.
 Askeri ve idari ileri düzenlemek için danışma meclisleri kuruldu.
 Divan kaldırıldı yerine nazırlıklar/bakanlıklar kuruldu.
 Senedi ittifak imzalandı.
 Memurlar, "iç işleri/dahiliye" ve "dış işleri/hariciye" memurları olmak üzere 2 gruba ayrıldı.
 Askeri ve idari işleri düzenlemek adına danışma meclisleri kuruldu.
 İlkokul zorunlu hale getirildi.
 Rüştiye açıldı.(ortaokul)
 İdadi açıldı.(lise )
 Fransızca resmi yabancı dil ilan edildi.
 Avrupa'ya ilk defa öğrenci gönderildi.
 Tıbbiye açıldı.
 İlk resmi gazete (takvimi vakai) çıkarıldı.
 Harbiye açıldı.
 Divan'ı hümayun kaldırılıp nazırlıklar kuruldu.(bakanlık)
 Encünemi danişme kuruldu. (tercüme odaları)
 İlk nüfus sayımı yapıldı.sadece erkekler sayıldı.
 Meclisi ahkamı adliye kuruldu.
 İl, ilçe,bucak ve muhtarlıklar kurulup vali, kaymakam atandı. 
    `,
    choices: [
      {
        name: "a",
        content: "Reforma Sadık Kal",
        effect: [
          { stat: "Adm", point: -10 },
          { stat: "Peo", point: -5 },
          { stat: "Mil", point: 10 },
          { stat: "War", point: 10 },
        ],
      },
      {
        name: "b",
        content: "Reforma Kısmen Sadık Kal",
        effect: [
          { stat: "Adm", point: -5 },
          { stat: "Peo", point: 0 },
          { stat: "Mil", point: 5 },
          { stat: "War", point: 5 },
        ],
      },
      {
        name: "c",
        content: "Reformları geri çek",
        effect: [
          { stat: "Adm", point: -90 },
          { stat: "Peo", point: -90 },
          { stat: "Mil", point: -90 },
          { stat: "War", point: -90 },
        ],
      }]},
      {
        scene: 10,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Mausoleum_of_Sultan_Mahmud_II_-_sarcophagus_of_a_sultan_-_P1030832.JPG/267px-Mausoleum_of_Sultan_Mahmud_II_-_sarcophagus_of_a_sultan_-_P1030832.JPG",
        header:"Ölüm",
        entrance: `Sultan Mahmud’dan umut kesildiği sırada sözde devleti ve milleti düşünen kimi devlet adamları ve Hüsrev Paşa, koma halindeki padişahın tahttan indirilmesine fetva alıp oğlu Şehzade Abdülmecit’i bir an evvel tahta oturtmak düşüncesindeydiler.[kaynak belirtilmeli] Buna karşılık Sultan Mahmud’a çok bağlı bir grup saray erkanı ise hekimlerin padişahı kasten tedavi etmedikleri, şayet oğlu Şehzade Abdülmecit ortadan kaldırılırsa mecbur kalıp iyileştirecekleri inancıyla daha korkunç, tehlikeli ve duygusal çareler peşindeydiler. Bunların başında da Hüsrev Paşa’nın siyasi rakibi Kaptan-ı Derya Müşir Ahmet Fevzi Paşa vardı. Hüsrev Paşa, olasılıkla kendi uydurması olan bu suikast ihtimalinden genç şehzadeyi ve annesi Bezmialem Sultan’ı gizlice bilgilendirerek onları kendisine minnettar kalmayı gözetmişti. Bu gizli hesapları komadaki padişah sezmiş ya da ona acımayarak kulağına fısıldayanlar olmuş olmalı ki ölümün beklendiği o günlerde Sultan Mahmud oğlu Şehzade Abdülmecit’e ve annesi Bezmialem Sultan’a küskündü.[kaynak belirtilmeli] Ölüm döşeğindeyken Şehzade Abdülmecit babasını son kez görmek isteğiyle gizlice odasına girmiş ayaklarına yüzünü sürüp ağlarken,[kaynak belirtilmeli] durumu fark eden Sultan Mahmud son takatini sarf edip oğlunun yüzünü tekmelemişti.[kaynak belirtilmeli] Sultan Mahmud 2 Temmuz 1839 Pazartesi günü sabaha karşı hayatını kaybetti. , 
        `,
        choices: [
          {
            name: "a",
            content: "Tebrikler oyunu kazandın",
            effect: [
              { stat: "Adm", point: 100 },
              { stat: "Peo", point: 100 },
              { stat: "Mil", point: 100 },
              { stat: "War", point: 100 },
            ],
          },
        ]
      },
  {
    badGame:"Adm",
    content:"Yönetimi merkezileştirmek ve yeniden padişah yetkilerini ele almak isterken, derebeyleri ve tarikatları açıkça karşına aldın. Sadrazamlarınla anlaşan bu gruplar seni tahttan indirdi ve zindana kapattı. Maalesef aklındakileri uygulayamadan yönetimi kaybettin."
  },
  {
    badGame:"Peo",
    content:"Arka arkaya yapılan reformlar ve yenilikler halk tarafından hoşnut karşılanmadı. Halka bu reformlara ayak uydurması için yeterli süre tanımadın. Halk desteğini alan diğer gruplar seni tahttan indirdi."
  },
  {
    badGame:"Mil",
    content:"Askeriye üzerinde yaptığın reformlar buradaki çıkar gruplarının harekete geçmesine sebep oldu. Ani bir baskınla tahttan indirildin."
  },
  {
    badGame:"War",
    content:"Osmanlı ordusu henüz savaşa hazır değilken, uyguladığın agresif tutum İngiltere, Rusya gibi büyük güçlerin sana saldırmasına sebep oldu. Savaş sonucu yönetimini kaybettin."
  },
];
