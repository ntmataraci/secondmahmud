export const englishLanguage=[
    {name:"Menu",
    sectionOne:"New Game",
    sectionTwo:"Accompany the story of 2.Mahmut and try to reach the 10th question by choosing the options. Be careful, for each level you get below 50 points, the lucky dice will be thrown and you can be dethroned.",
    sectionThree:"How To Play",
    stats:["Administrive","People Support","Military Support","Peace Chance"]
    },
        {
          scene: 1,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mahmud_II.jpg/220px-Mahmud_II.jpg",
          header:"Accession",
          entrance: `His mother was Nakşidil Valide Sultan. In 1808, Mahmud II's predecessor, and half-brother, Mustafa IV ordered his execution along with his cousin, the deposed Sultan Selim III, in order to defuse the rebellion. Selim III was killed, but Mahmud was safely kept hidden by his mother and was placed on the throne after the rebels deposed Mustafa IV. The leader of this rebellion, Alemdar Mustafa Pasha, later became Mahmud II's vizier.

          There are many stories surrounding the circumstances of his attempted murder. A version by the 19th-century Ottoman historian Ahmed Cevdet Pasha gives the following account: one of his slaves, a Georgian girl named Cevri, gathered ashes when she heard the commotion in the palace surrounding the murder of Selim III. When the assassins approached the harem chambers where Mahmud was staying, she was able to keep them away for a while by throwing ashes into their faces, temporarily blinding them. This allowed Mahmud to escape through a window and climb onto the roof of the harem. He apparently ran to the roof of the Third Court where other pages saw him and helped him come down with pieces of clothes that were quickly tied together as a ladder. By this time one of the leaders of the rebellion, Alemdar Mustafa Pasha arrived with his armed men, and upon seeing the dead body of Selim III proclaimed Mahmud as padishah. The slave girl Cevri Kalfa was awarded for her bravery and loyalty and appointed haznedar usta, the chief treasurer of the Imperial Harem, which was the second most important position in the hierarchy. A plain stone staircase at the Altınyol (Golden Way) of the Harem is called Staircase of Cevri (Jevri) Kalfa, since the events apparently happened around there and are associated with her.`,
          choices: [
            {
              name: "a",
              content: "Revenge for my brother !",
              effect: [
                { stat: "Adm", point: -5 },
                { stat: "Peo", point: 5 },
              ],
            },
            {
              name: "b",
              content: "It's not personal.",
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
          header: "Alemdar Mustafa Pasha ",
          entrance:`The fact that Alemdar Mustafa Pasha's men, who were sheltering in Istanbul during his viziership, were involved in the looting and that the people were searching for the Kabakçı Mustafa rebels, created unrest among the people and shook their trust.
          Sened-i İttifak is II. It was announced to Mahmud that "the sultan's authority was restricted", and the sultan was provoked against the pasha.
          Alemdar Mustafa Pasha's re-establishment of the Nizam-ı Cedit (albeit with a different name as Sekban-i Cedit), which the Janissaries opposed "with the thought of being an alternative to them", and his attempt to detect corruption in the Janissaries were enough to earn their hostility.
          Finally, on the first day of the Janissary revolt, called the Alemdar Incident, which emerged on 15 November - 18 November 1808), the rebel Janissaries raided the Sublime Porte, where Alemdar was staying. When the Sekbans resisted, they set it on fire. Losing his hope when no help from the palace came, Alemdar ignited the gunpowder cellar and died together with 600 of the nearly 1000 Janissaries who tried to enter.
          After the fire, the Janissaries found his body and walked it around Istanbul for days; then they cut it apart and threw it into a blind well outside Yedikule.[10] After the abolition of the Janissary Corps, Alemdar's bones were removed and buried around the Yedikule walls. II. After the proclamation of the Constitutional Monarchy, it was transferred to the Zeynep Sultan Mosque burial ground. `,
          choices: [
            {
              name: "a",
              content: "The state does not want partnership, I did not send aid to Alemdar Pasha.",
              effect: [
                { stat: "Adm", point: 15 },
                { stat: "Peo", point: 5 },
                { stat: "Mil", point: -5 },
              ],
            },
            {
              name: "b",
              content: "Alemdar Pasha saved my life. I should have helped him.",
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
          entrance: `Sened-i İttifak (September 29, 1808) is an agreement with some constitutional features signed by Ottoman Grand Vizier Alemdar Mustafa Pasha by gathering Rumelian and Anatolian notables in Istanbul.
          Constitutional lawyers generally accept Sened-i İttifak as the first constitutional document in Turkish history and start the constitutionalism movements in Turkey with it. There are also those who liken this document to the English Magna Carta, which was adopted in England in 1215, “as an attempt to limit the state power”.[1] However, many important historians such as Shaw and Berkes state that the Sened-i İttifak did not play as important a role as claimed in the historical development of the constitutional order and democracy in Turkey.`,
          choices: [
            {
              name: "a",
              content: "Promote constitutional studies",
              effect: [
                { stat: "Adm", point: -10 },
                { stat: "Peo", point: 5 },
                { stat: "Mil", point: 5 },
              ],
            },
            {
              name: "b",
              content: "Authoritarian Regime Best",
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
          header:"Feudal Lords",
          entrance: `Solving the Serbian issue was one of the most vital issues for Sultan Mahmud. Serbs had been in revolt for 9 years. These revolts were never suppressed. The 3rd Army in Rumelia was commissioned for this. Hurşit Ahmet Pasha marched from Nis with his army of 80,000 men and marched on the Serbs. On October 30, 1813, Hurşit Ahmet Pasha entered Belgrade. The rebellion ended with the recapture of the fortresses and cities captured by the Serbs. The leader of the uprising, Black George, had to flee to Austria.
      
          Sultan II. Mahmud accepted the Sened-i İttifak, which he had to sign as soon as he took the throne, taking advantage of the peace environment brought by the Bucharest Treaty, as an evidence to eliminate the notables who rebelled against the state. After the murder of Alemdar, the notables in Rumelia and Anatolia continued their movements, ignoring the capital. Sultan Mahmud took a fundamental action against these ayans in order to pass his authority all over the empire. Some of the notables were killed as a result of the work carried out in this direction. Some were also exiled. Despite all these uprisings and civil wars, it was possible to establish state authority in Rumelia and Anatolia. `,
          choices: [
            {
              name: "a",
              content: "Destroy the ayans in a bloody way.",
              effect: [
                { stat: "Adm", point: 20 },
                { stat: "Peo", point: -5 },
                { stat: "Mil", point: -5 },
              ],
            },
            {
              name: "b",
              content: "Agreement with the Ayans.",
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
          header:"Greek revolution",
          entrance: `In 1821, after the Greek rebels put the civilian Turks in the Peloponnese to the sword, II. Mahmud had the Orthodox Patriarch in Istanbul hanged, who was the main instigator of the rebellion. A rebellion broke out in Romania with the provocation of Russia. The Turkish army easily suppressed this revolt. But the Morea revolt could not be suppressed. Because he was getting help from all of Europe, especially from a French corps. Only Austria was holding the Ottomans. Prussia, England, and Spain were neutral. Russia and France strongly wanted the independence of Greece. Under the command of British generals such as Lord Cochrane and Sir Richard Church, the Greeks were utterly crushed; The revolt was completely suppressed by the Egyptian army, when on October 20, 1827, the Navarino disaster occurred. The Turkish fleet was stationed in this port in the southwest of the Peloponnese. The Anglo-French-Russian allied navy entered the port without doing so, although it was the way to raise the war flag, and suddenly opened fire and destroyed the Ottoman navy, which did not expect such a move. In 1828, right after the disaster in Navarin, Russia declared war on the Ottoman Empire in order to get the demands on Greece accepted. The new modern army, whose navy was destroyed in Navarin a year ago, and who destroyed the Janissaries with a bloody massacre, II. Mahmud could not resist the pressure of Europe. After the Russian army crossed the Balkans and reached Edirne, the Edirne Treaty was signed with Russia. The Russians withdrew from all Ottoman lands. But he contented himself with securing independence for Greece, hoping to reclaim his protective role among the Orthodox in the Balkans. A tiny 49,414 km² Greek Kingdom consisting of the Peloponnese and Attica peninsulas and the islands of Euboea and Cyclades was established.`,
          choices: [
            {
              name: "a",
              content: "Not recognizing the Greek Kingdom!",
              effect: [
                { stat: "Adm", point: 5 },
                { stat: "Peo", point: 5 },
                { stat: "Mil", point: 5 },
                { stat: "War", point: -35 },
              ],
            },
            {
              name: "b",
              content: "Comply with the terms of peace.",
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
          header:"Kavalalı Mehmet Ali Pasha Revolt",
          entrance: `Kavalalı Mehmet Ali Pasha asked Sultan Mahmud to be the governor of the Syrian province, which has rich human and natural resources, in order to compensate his losses against the great powers in Morea. Sultan Mahmud gave him the governorship of Crete instead, but Mehmet Ali Pasha refused, realizing that maintaining order on the island would impose a great financial burden on him. In 1831, he embarked on an expedition by land and sea against Syria. His son İbrahim Pasha, who commanded the revived Egyptian army, crossed the Taurus Mountains by taking Akka, Damascus, Hama and Homs. In Anatolia, he received an enthusiastic welcome from the local population. Sultan Mahmud could not tolerate such an open rebellion. Mehmet Ali Pasha and his son İbrahim Pasha were declared rebels and an army was sent against them under the command of Grand Vizier Reşid Mehmet Pasha. When the two armies met in Konya, the Ottoman army was defeated and the grand vizier was taken prisoner.`,
          choices: [
            {
              name: "a",
              content: "Recognize Egypt Kingdom",
              effect: [
                { stat: "Adm", point: -10 },
                { stat: "Peo", point: -10 },
              ],
            },
            {
              name: "b",
              content: "The War Won't End !",
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
          header:"Vaka-i Hayriye Abolition of the Janissaries",
          entrance: `The abolition of the Janissary Corps was carried out during the time of Grand Vizier Benderli Mehmet Selim Sırrı Pasha. II, who has been planning to remove this quarry for seventeen years. Mahmut put this idea into practice on May 25, 1825. He officially announced the establishment of a new military class called the Eşkinci Ocağı. Dressed in European-style uniforms, the new army began training on 11 June 1826. Three days later, the janissaries, who rose up, took their cauldrons to Etmeydanı and started demonstrations. II, who took the ulama with him. Mahmut removed the Sancak-ı Şerif and called on the people to fight against the Janissaries. Except for the Janissary Corps, all the corps declared their loyalty to the sultan. Janissary barracks in Etmeydanı in Aksaray were shelled. More than 6,000 janissaries were killed. Around 20,000 rebels were also arrested. In place of the Janissary Corps, which vanished into history on June 16, 1826, a new one, called Asakir-i Mansure-i Muhammediye, was established. It means "the victorious armies of Muhammad".
          `,
          choices: [
            {
              name: "a",
              content: "Order 66. Destroy all Janissaries.",
              effect: [
                { stat: "Adm", point: -10 },
                { stat: "Mil", point: -15 },
              ],
            },
            {
              name: "b",
              content: "Let the survivors join the new army.",
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
          header:"Suud Revolt",
          entrance: `Upon the death of his father, Mohammed bin Saud began to rule Diriyah and its environs for the first time as an independent emir in 1726. During this period, the Wahhabis, who advocated a return to the lifestyle of Muhammad's time and were against all kinds of innovations and tombs, and the spreader of the teachings, Mohammed bin Abdul-Wahhab, had to take refuge in Diriyah after the reactions they saw when the graves of some Companions were demolished. According to the Wahhabis, not only visiting the tomb, but even knowing its location was a misdemeanor that would open the gates of hell.
          The unexpected invasion of Egypt by Napoleon Bonaparte in 1798 and the ensuing issues benefited the Saudis.[2] In 1802, Abdullah bin Saud killed more than 2000 Shiites who raided Karbala and carried out mourning, set fire to Hussein's sarcophagus and brought 200 camel loads of gold and silver items from the tomb to Diriyah.[3] With the invasion movement they started against the Hejaz in 1803, they first entered Taif and then re-entered Hejaz in 1805 and captured Medina. All the shrines and tombs in Medina were destroyed and the Masjid an-Nabawi was plundered. A year later, in 1806, they captured Mecca. The pilgrimage route remained closed for years, and no news was received from those who set out for Mecca without heeding the warnings. Especially these last events were such as to shake the prestige of the Ottoman Empire, since the Ottoman Empire had been maintaining its sovereignty over these two holy cities uninterruptedly since 1517.
          
          `,
          choices: [
            {
              name: "a",
              content: "Destroy the Saudis with the help of the Kavalali family",
              effect: [
                { stat: "Adm", point: -10 },
                { stat: "Mil", point: 5 },
              ],
            },
            {
              name: "b",
              content: "Destroy the Saudis with your own forces",
              effect: [
                { stat: "Mil", point: -10 },
                { stat: "Adm", point: 15 },
              ],
            },
            {
              name: "c",
              content: "Recognize their Autonomy",
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
          header:"Revolutionism",
          entrance: `2. Mahmut's innovations.
          The first postal and police organization was established.
          Changes and adjustments were made to the outfit. trousers and fez, tie and shirt applications were introduced to the officers.
          The confiscation procedure, that is, the state confiscation of citizens' property, was abolished.
          The health organization and the first quarantine system were created.
          The practice of hanging sultan portraits in government offices was introduced.
          For the first time, students were sent to Europe to study.
          Primary education became compulsory in Istanbul.
          Translation rooms were established to train Muslim translators.
          French was made compulsory in military schools.
          Domestic trips were organized.
          The first official newspaper, the calendar vekayi newspaper, was published in 1831.
          Secondary education institutions such as the high school and the school of education were opened, providing Western education.
          The right of ownership was introduced with the land law.
          It provided tax relief to Muslim merchants.
          The use of domestic goods was encouraged by Mahmut 2.
          The consumption of imported goods was tried to be limited and export was given importance.
          The emphasis was placed on road construction.
          Many facilities such as feshane, broadcloth factory and bazaar were established to meet the needs of the army.
          In order to increase the revenues of the state, the foundations directorate (foundation directorate) was established.
          Advisory councils were established to organize military and administrative advances.
          The council was abolished and instead, ministries/ministries were established.
          The deed of alliance was signed.
          The civil servants were divided into 2 groups as "internal affairs/internal affairs" and "foreign affairs/external" officers.
          Advisory councils were established to regulate military and administrative affairs.
          Primary school was made compulsory.
          High School was opened. (secondary school)
          Idadi opened. (high school)
          French was declared an official foreign language.
          Students were sent to Europe for the first time.
          Medical opened.
          The first official newspaper (calendar casei) was published.
          Harvard opened.
          His Divan-ı Hümayun was abolished and ministerial offices were established.
          Advisory Board was established. (translation rooms)
          The first census was taken, only men were counted.
          The courthouse was established.
          Provinces, districts, sub-districts and mukhtars were established and governors and district governors were appointed.
          `,
          choices: [
            {
              name: "a",
              content: "Stick to the Reform",
              effect: [
                { stat: "Adm", point: -10 },
                { stat: "Peo", point: -5 },
                { stat: "Mil", point: 10 },
                { stat: "War", point: 10 },
              ],
            },
            {
              name: "b",
              content: "Partially Loyal to the Reform",
              effect: [
                { stat: "Adm", point: -5 },
                { stat: "Peo", point: 0 },
                { stat: "Mil", point: 5 },
                { stat: "War", point: 5 },
              ],
            },
            {
              name: "c",
              content: "Withdraw reforms",
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
              header:"Death",
              entrance: `When hope for Sultan Mahmud was lost, some statesmen and Hüsrev Pasha, who were thinking about the so-called state and the nation, were thinking of taking a fatwa to dethrone the comatose sultan and enthroning his son, Prince Abdulmecit, as soon as possible. a group of courtiers sought more terrible, dangerous and emotional remedies, believing that the physicians did not deliberately treat the sultan, and that if his son, Prince Abdulmecit, was removed, they would have to heal him. Chief among these was Hüsrev Pasha's political rival, Kaptan-ı Derya Müşir Ahmet Fevzi Pasha. Hüsrev Pasha had secretly informed the young prince and his mother, Bezmialem Sultan, about the possibility of this assassination, which was probably his own invention, and sought to remain grateful to him. The sultan, who was in a coma, must have sensed these secret calculations, or there must have been those who whispered in his ear out of pity that in those days when death was expected, Sultan Mahmud was resentful of his son, Şehzade Abdülmecit, and his mother, Bezmialem Sultan. While he was rubbing his face on his feet and crying, [citation needed] Realizing the situation, Sultan Mahmud exerted his last strength and kicked his son in the face.[citation needed] Sultan Mahmud died on Monday, July 2, 1839, towards the morning., 
              `,
              choices: [
                {
                  name: "a",
                  content: "Congratulations you won the game",
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
          content:"While you wanted to centralize the administration and reassert the sultan's powers, you openly confronted the feudal lords and sects. These groups, who made a deal with your grand viziers, deposed you and imprisoned you. Unfortunately, you lost the administration before you could implement what you had in mind."
        },
        {
          badGame:"Peo",
          content:"Successive reforms and innovations were not welcomed by the public. You did not give the people enough time to adapt to these reforms. Other groups with popular support have dethroned you."
        },
        {
          badGame:"Mil",
          content:"Your reforms on the military caused interest groups here to take action. You were dethroned by a sudden raid."
        },
        {
          badGame:"War",
          content:"While the Ottoman army was not yet ready for war, your aggressive attitude caused great powers such as England and Russia to attack you. You lost your control as a result of the war."
        },
      ];
      
