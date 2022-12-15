import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';
import { ReactComponent as TslSVG } from './assets/images/2021-TSL-Logo-Test_Blue-Splash-copy.svg';
import {Article} from './components/layout';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div class = "cover">
              <div class = "tsl-logo">
                <TslSVG />
              </div>
              <img class = "cover-img" src={require('./assets/images/tsl_queer_cover.png')} />
              <div class = "title-cont">
                  <h1 class = "title"> queering <br/> claremont</h1>
                  <h1 ><ReactTypingEffect text={["celebrating queer histories and futures"]}/></h1>
              </div>
          </div>

          <div className="editor">
            <img class = "editor-header" src = {require("./assets/images/letter-from-editors.jpeg")}/>
            
            <div className = "editor-text"> 
              <p><b>Kayla Alcorcha and Cassidy Bensko</b></p>
              <p>This semester, TSL revived its Special Projects desk, a section specifically dedicated to covering underrepresented aspects of our campuses’ history. We started this project with the intention of finishing it before the end of October, in time for Queer History month. But soon into our research, we realized that the history of queer culture on this campus filled with brimming joy, unspeakable hardships and untamed messiness. Our work had only just begun. 
              </p>
              <p>We dug through TSL volumes from the 1950s to the 2000s, focusing our efforts on years that we knew marked historical steps forward in the creation of a queer community at the 5Cs — e.g. the formation of the Gay Student Union (GSU) in the 1970s, the creation of the Pink Triangles in 1986 and the opening of “The Closet” in 1993. We spent hours with our heads buried in the Honold Mudd archives, but have almost nothing to show for it. 
              </p>
              <p>Throughout this production process, queer incompatibility with the Claremont Colleges, and more broadly, hegemonic institutions, has been a dominating, recurring theme. 
              </p>
              <p>As an institution, TSL must concede that its documentation of queer issues on campus was historically neglected. As we sifted through the pages of old volumes searching for any positive coverage on queer culture, we were disheartened (although not surprised) to only find stories of hate incidents and protests. Some of this absence is reflective of the queer experience: Most of the meaningfully documented history we were able to gather came from a careful combing of the margins. 
              </p>
              <p>
              The Queer Resource Center’s unofficially archived binders of student event flyers, alumni surveys, anecdotes and staff logs illuminated the stories we are telling today. We recognized that printing a holistic representation of queer lives at the 5Cs — names and photos included — would jeopardize the safety of those who lived them. We were diligent to honor the privacy of students who openly celebrated their identity in a pre-internet context. We specifically omitted publications like OutSpoken, as well as photos of a drag ball LGSU threw. We encourage you to experience them  — in their entirety — for yourself at the QRC and the Claremont Colleges Special Collections. 
              </p>
              <p>
              A (graphic) sapphic sex poem. A still of a drag queen dancing on top of a table. A scathing critique of “Ellen,” before the show was popular. The truth of the matter is that this is largely a history of queer young adults, who had not even the slightest clue of what they were doing. They were a perfectly disjointed community of misfits creating community the only way they knew how. There were large swaths of time where most queer students would not even call the on-campus LGBTQIA+ population a community — and yet we were here all the same.
              </p>
              <p>The documented history we do have tells the tale of an often underground and resilient lineage of queer students. Stepping into the archives, admiring student posters, alumni surveys, poems, etc., we saw queer life documented by the people who lived it, largely because no one else cared to do it. Queer life was not simply a bulleted timeline of clubs and homophobic incidents. It was LGBSU themed dances, first crushes, infighting and reconciliations between lesbian and gay student groups, heartbreak, resistance, unfettered self-creation and so much more. 
              </p>
              <p>
              Recently, TSL published an op-ed about the lack of institutional support for CMC’s queer students, and the writer received intense, hateful backlash over Instagram. It is obvious and reductive to assert that homophobia still exists — we know this. But it’s how we support each other as a community that speaks to who we are as the 5Cs today. 
              </p>
              <p>
              As queer students ourselves, working with this history forced us to confront a sense of absence on campus. Queer culture is a widespread but faint pulse — the result of a detachment from the history which unites us in the first place. As you interact with the histories, posters and artifacts we’ve curated for you, we ask you to reflect on this sentiment and the other feelings that they elicit. 
              </p>
              </div>
          </div>

          <h1>Contents</h1>
          <div className='contents'>
            <div className='flex-grid'> 
              <AnchorLink className = 'col' href='#transvesta'><p className = 'col'><b>How two Pomona alumnae shaped transgender identity </b><br/> by Ava Francis-Hall </p></AnchorLink>
              
              <AnchorLink className = 'col' href='#timeline'><p><b>From informal space to permanent place: Looking <br/> back at the QRC’s evolution</b>
              <br/> by Kayla Alcorcha</p></AnchorLink> 
              
              <AnchorLink className = 'col' href='#lav-letters'><p><b>LGSU’s Lavender Letters to the queer community</b>
              <br/> by Elina Lingappa and Jada Shavers</p></AnchorLink>
              
              <AnchorLink className = 'col' href='#crisis'><p><b>How 5C students, staff responded to the AIDS crisis</b>
              <br/> by Hannah Weaver</p></AnchorLink>

              <AnchorLink className = 'col' href='#cmc'><p><b>CMC Grad Shares Five Reasons Why He Hated It</b>
              <br/> by Paul Miailovich PO ’93</p></AnchorLink>

              <AnchorLink className = 'col' href='#qrc'><p><b>‘Chosen family’ at the center of QRC mentorship program</b>
              <br/> by Jenna McMurtry</p></AnchorLink>

              <AnchorLink className = 'col' href='#canva'><p><b>The cost of aesthetic convenience — <br/>how Canva subdues the radical</b>
              <br/> by Cassidy Bensko and Ava Francis-Hall</p></AnchorLink>
          
              <p className = 'col'><b>Built by the TSL Web Developer Team</b>
              <br/> Liz Johnson & Michele Tang</p>
            </div>
            
          </div>
          

          <div className='transvesta' id ='transvesta'>
            <Article type = "feature" title1 = "How two Pomona alumnae shaped" title2 = "transgender identity" 
              author = "Ava Francis-Hall"/>

            <div className = "article-text">
              <p>Barbara Ann Richards knew she was a woman long before she stepped into a Los Angeles
              courthouse to convince the world of her sex change. On July 2, 1941, Richards was met by the
              scrutiny of a superior court looking for her to explain what was, in their eyes,
              the unexplainable. How does a man suddenly become a woman? </p>
              
              <p>Richards’ answer: unstoppable and irrevocable biological changes. </p>

              <p>“I began to observe that my skin had become smoother, that the shape of my face was different, my waist was smaller, my hips heavier, my throat smaller,” Richards stated. The beard she had once proudly sported had stopped growing. Her voice had changed pitch. She became “increasingly fond of cooking and housework.”
              </p>
              <p>
              Unwilling to understand Richards’ transition as anything beyond a biological anomaly, the media sensationalized her story for a fascinated public. Headlines presented Richards as a “caprice of nature” and a person who had gone through a “strange metamorphosis.” She caught the interest of the University of California, San Francisco psychiatric department, and was soon invited to speak about her transition at a conference. 
              </p>

              <p>As Richards was introduced at the conference, one academic sitting in the crowd &ldquo;deeply blushed&rdquo; and became &ldquo;very nervous.&rdquo; Virginia Prince PO &rsquo;35 found Richards uncannily relatable. The two were of a similar age. They shared an early affinity for cross dressing. They had both been in the same first year class at the same small liberal arts school in Southern California &mdash; Pomona College.&nbsp;</p>
              <p>She sat staring at Richards, who only attended Pomona her first year, with incredulity. How had their &ldquo;transvestic history&rdquo; been so similar, but Virginia was the one sitting in the crowd while Richards was the subject of the conference?&nbsp;</p>
              <p>Prince would not stay out of the spotlight for long, however. Although not much is known about her time at Pomona, her later work would be referenced for decades to come. The larger-than-life-figure would leave a complicated legacy for the transgender community as co-founder and editor of&nbsp;<a href="https://vault.library.uvic.ca/collections/6576cedf-1282-4089-8351-08f73f4199b4?locale=en&page=11">Transvestia</a> magazine from 1960 through 1980.&nbsp;</p>
              <p>Pomona history professor Gary Kates had the opportunity to meet Prince in the early 1990s when he was writing a book about Chevalier d&rsquo;Eon, an 18th-century French diplomat who began living as a woman at age 49. Klein felt that Prince was a kind of reincarnation of d&rsquo;Eon, and he was not alone in that belief.&nbsp;</p>
              <p>&ldquo;[Prince] felt that way too. We met and, and shook hands, and we sat down, and she said to me, &lsquo;What can you possibly tell me about d&rsquo;Eon that I don&apos;t already know?&rsquo;&rdquo; Klein said.</p>
              <p>The project that would soon become the famed magazine Transvestia began in a ramshackle house in Long Beach, affectionately known as Johnny&rsquo;s Place. In the early 1950s, the house became well known among transgender and cross dressing communities as a safe space for open expression and of gender identity. Eventually, the idea of a newsletter was floated to stay in touch with transgender acquaintances of Johnny and others. Prince knew exactly what to call it: Transvestia.&nbsp;</p>
              <p>In 1952, contacts across the country received a promotional message about&nbsp;Transvestia&nbsp;and a subsequent request of a five dollar donation. However, the handful of five dollar donations soon ran out after two issues were published and the first version of&nbsp;Transvestia&nbsp;met its end.&nbsp;</p>
              <p>A couple of years later, Prince would get in touch with radio station executive Barbara Elin and formulate a new, profitably sustainable version of Transvestia. The first issue appeared in January 1960 under Chevalier Publications, a Los Angeles-based publisher founded by Prince. The magazine would continue to be edited by Prince until her departure in 1980, when Carol Beecroft would take over the editor position.&nbsp;</p>
              <p>Readers could expect anything from fashion tips to life advice between the pages of Transvestia. Their own experiences and struggles with identity and gender were reflected in the personal narratives and fictional stories published in the magazine. Transvestia reminded readers that though they face discrimination in their personal lives, there was a network of transgender individuals who celebrated their chosen identity.&nbsp;</p>
              <p>However, for Prince, that sense of acceptance would not apply to transgender individuals who opted for gender affirming surgeries or to those who were sexually involved with those of the same sex. Prince held these prejudices when she created the heterosexual-only crossdressing organization Hose and Heels Club in 1961,which would later be known as Alpha Chapter of the Foundation for Full Personality Expression, and later&nbsp;<a href="https://tri-ess.org/">Society for the Second Self</a> (Tri Ess or Tri Sigma) in 1975.&nbsp;</p>
              <p>At the time, Prince was of the belief that gender and sexuality were two completely different entities, and one did not imply anything about the other. In the cross-dressing community, Prince belonged to a faction who believed that gender affirming surgery was not necessary, with some even considering surgery as a mutilation of the body. She considered herself a transgenderist &mdash; someone who lived entirely as a woman without gender affirming surgery. The subjects and audience of Transvestia were referred to as &ldquo;transvestites&rdquo; or &ldquo;TV&rdquo; for short in the pages of the magazine.&nbsp;</p>
              <p>Some years after Prince stepped away from the editor role of Transvestia, she relocated to the Claremont area in the last period of her life.&nbsp;</p>
              <p>As for Barbara Ann Richards, she was able to resume her life outside of the public eye once the sensationalism of her transformation wore off. At the very top of her list of priorities was remarrying the love of her life, Richard Wilcox.&nbsp;</p>
              <p>Wilcox and Richards connected in 1940 as many couples in the throes of a blossoming romance do: in a quiet, secluded corner of an overwhelming party. After discussing their own gender identities &mdash; with neither having transitioned at the time, Wilcox was perceived as a woman and Richards as a man &mdash; the two decided they were meant to be together. They&nbsp;<a href="https://slate.com/human-interest/2022/03/barbara-ann-richards-trans-history-california.html">formally wed</a> in November 1940. Less than a year later, Richards&rsquo; mission to have her new name legally recognized would commence.</p>
              <p>The two now lie together in Forest Lawn Memorial Park, leaving a legacy unrecognized by many but felt by all who have won legal recognition of their preferred gender and name.&nbsp;</p>

            </div>
          </div>

          <div className = "timeline" id = "timeline">
            <Article type = "feature" title1 = "From informal space to permanent place: Looking back at the QRC’s evolution"
            author = "Kayla Alcorcha" warning = ""/>
            <div className = "article-text" >
            <p>
              Based on letters, surveys and notes in the archives of the Queer Resource Center (QRC), we know that the queer community at the Claremont Colleges was relatively underground until the early 1970s when a group of students began meeting at Monsour Counseling Center. 
              </p>
              <p>
              They called themselves the Gay Student Union (GSU). Their meetings were discussion-based, but they eventually started organizing social events. Sometime between 1981 and 1982, the GSU changed its name to the Lesbian and Gay Student Union (LGSU) in response to protests from lesbian students. 
              </p>
              <p>
              In 1983, there were mixed gender LGSU meetings as well as separate meetings of the LSU and GSU. An undated poster tells us that the women’s meeting was held in Wilbur Hall at Scripps College and the men’s meeting in the McAllister Center. In 1984, LSU began holding their meetings in the <a href = "https://www.pomona.edu/students/student-organizations/womens-union/history">Women’s Union</a> in Walker Lounge at Pomona.
              </p>
              <p>
              Also in 1983, LGSU wrote and self-published the <AnchorLink href = "#lav-letters">Lavender Letters</AnchorLink>, a weekly newsletter circulated to the queer community about “activities and general goings-on of the LGSU.” They advertised study breaks, student-faculty mixers, awareness events and more. 
              </p>
              <p>In the fall of 1985, a group of Scripps College students founded the Pink Triangles, which aimed to be more political than LGSU and was primarily for lesbian and bisexual students. A flyer from 1987 reads, &ldquo;So we can meet each other and know we are not alone, but have a thriving, loving community in Claremont.&rdquo; Another flyer says, &ldquo;An open meeting will be held this week at Jan&rsquo;s &mdash; that&rsquo;s Dorsey 201,&rdquo; showing how tight-knit the community was.</p>
              <p>LGSU and the Pink Triangles sometimes collaborated to throw events at Scripps&rsquo; Motley Cafe, such as a &ldquo;Dance to your heart&rsquo;s content&rdquo; Valentine&rsquo;s Day party and a &ldquo;B-GLAD Week&rdquo; dance in 1990 where the $2 entry fees went to the Foothill AIDS Project.&nbsp;</p>
              <p>Social events like these were a great way to bring the queer community together, as were the weekly meetings, but the LGSU wanted a officially designated, institutionally-recognized center &mdash; and so they proposed it.&nbsp;</p>
              <p>On March 24, 1993, the Lesbian, Gay, Bisexual Resource Center (LGBRC), affectionately called &ldquo;The Closet,&rdquo; opened in upstairs Walker Lounge at Pomona College. It had a student board and a steering committee made up of faculty and staff from the 5Cs.&nbsp;</p>
              <p>A few years later, in October 1995, the LGBRC officially changed its name to the Queer Resource Center (QRC).&nbsp;</p>
              <p>In 1998, the first and only six-college queer student-faculty publication, OutSpoken, went to print. Containing photos, prose, poems and academic writing on queer subjects, the four existing editions of this magazine provide an unparalleled and intimate look into queer life at the 5Cs from 1998-99. Copies are available at Honnold-Mudd Special Collections.</p>
              <p>In 2001, the QRC created the <AnchorLink href = "#qrc">Queer, Questioning and Allied Mentor Program (QQAMP)</AnchorLink>, a program that paired mentors and mentees to provide support and guidance on queer-related issues. Because of the significant increase of activity in the QRC, Pomona College created a Graduate Assistant (GA) position in 2002.&nbsp;</p>
              <p>In 2006, the QRC moved to its present location in Walton Commons at Pomona College, but there&rsquo;s no surviving record of where the decision came from. The same year, Adriana di Bartolo-Beckman, who is currently the&nbsp;assistant vice president for student affairs at&nbsp;Scripps, was hired as the GA.</p>
              <p>She remembers that, at the time, the QRC shared a wall with the dining hall for the Pomona Lawry Towers residence hall, and that there was a targeted incident that went unaddressed by administration.</p>
              <p>&ldquo;Somebody set off a fire extinguisher &hellip; but because it was set off in the kitchen and the QRC, it wasn&rsquo;t seen as the same as a hate crime. At that time, the students that were part of the space painted that wall rainbow,&rdquo;&nbsp;di Bartolo-Beckman&nbsp;said.</p>
              <p>In the fall 2009, di Bartolo-Beckman became the QRC&rsquo;s half-time coordinator, and in the spring of 2010, the student deans of the Claremont Colleges agreed to pilot a full-time coordinator position for the 2010&ndash;2011 year.&nbsp;</p>
              <p>In spring 2011, the President&rsquo;s Council of The Claremont Colleges agreed to expand the existing QRC into the formally funded 7C center it is today. This monumental decision provided funding for general programming as well as two full-time positions &mdash; QRC Director, at that point di Bartolo-Beckman, and QRC Program Coordinator.</p>
              <p>&ldquo;I think there&rsquo;s really something to be said about institutionally-backed spaces. Where the money goes is where the value is. So when the colleges made the decision to back an LGBTQ center, it was saying &lsquo;our students exist, and they need expertise and support,&rsquo;&rdquo; di Bartolo-Beckman said.</p>
              <p>In 2014, the QRC created&nbsp;Leadership and Engagement in Gender and Sexuality&nbsp;<a href="https://colleges.claremont.edu/qrc/about/get-involved/legs/">(LEGS)</a>, a mentor program that connects&nbsp;7C students with local LGBTQIA+ high school students in collaboration with the 7Cs&rsquo; Draper Center for Community Partnerships.&nbsp;Mauricio Navarro PO &rsquo;14 wrote the original&nbsp;<a href="https://drive.google.com/file/d/1a-yu13TsoIfMwblofhwYrHkmLwa3fjs-/view">proposal</a> for the program, which explained, &ldquo;There currently exists a lack of institutionalized venues for college and high school students in the Inland Empire to build community around gender and sexual identity.&rdquo;</p>
              <p>Youssef El Mosalami PO &lsquo;24, who has been a LEGS mentor since their second year at Pomona, said they see much of their younger self in their high school mentees and expressed gratitude for the chance to be the &ldquo;queer elder&rdquo; they lacked while growing up.&nbsp;</p>
              <p>&ldquo;Being a mentor has given me an ability to heal my inner child, but also recognize the amount of work that&apos;s still needed to be done,&rdquo; El Mosalami said.&nbsp;</p>
              <p>In the last decade, the structure of the QRC has remained the same, and this settled presence at the 5Cs has helped many incoming students feel welcome and supported. The rich history of LGSU and the Pink Triangles has dissolved and disseminated into modern student groups like&nbsp;<a href="https://www.hmc.edu/admission/2022/01/24/club-highlight-prism/">PRISM</a>,&nbsp;<a href="https://www.instagram.com/pz_qt_alliance/">QTs Alliance</a>,&nbsp;<a href="http://scrippsvoice.com/the-return-of-family-scripps-queer-affinity-group-is-up-and-thriving/">FAMILY</a> and&nbsp;<a href="http://www.associatedstudentsofclaremontmckennacollege.org/lgbtq-student-resources">SAGA</a>.&nbsp;</p>
              <p>Following the departure of former Director Sharon Chia Claros over the summer, the QRC&nbsp;<a href="https://www.instagram.com/p/ClSFw5DPaaI/?utm_source=ig_web_copy_link">announced</a> that Bri S&eacute;rr&aacute;no will lead the QRC beginning Dec. 16.</p>
            </div>
          </div>
      
  
            <div class = "lavender">
                  <div class = "lav-container">
                      <img class = "flower" src = {require("./assets/images/lavender-illust.png")}/>
                      <img class = "letter" src = {require("./assets/images/lav-let-backg.jpg")}/>
                      <img class = "flower" src = {require("./assets/images/lavender-illust.png")}/>
                  </div>

            </div>
            <div id = "lav-letters">
              <Article type = "feature" title1 = "LGSU’s Lavender Letters to the queer community" 
              author = "Elina Lingappa and Jada Shavers" 
              warning = "CW: Mentions of homophobic violence"/>
            </div>
            <div className = "article-text">
              <p> While he was head of the Lesbian and Gay Student Union (LGSU), Paul Wadler PO ’82 started an underground system to create a queer community at the Claremont Colleges where almost none existed. 
              </p>
              <p>“We didn't have any way to communicate, and I interned in the admissions office,” Wadler told TSL. “[I] kind of typed out a newsletter and put it in sealed envelopes… And that was it. That was the Lavender Letter.”
              </p>
              <p>The Lavender Letters, initially, were a method of communication between queer students and faculty, most of whom were closeted at the time. Wadley drew inspiration from the <a href = "https://www.pomona.edu/students/student-news-information">Pomona Chirps Newsletter</a>, a weekly note to students detailing relevant activities and opportunities.  
              </p> 
              <p>Printed on lilac-colored paper, the letters were also a nod to the associations that the color has had with queerness across history. This thread can be traced as far back as Sappho, but most recent in Wadler&rsquo;s lifetime was the reclamation of the color as a symbol of&nbsp;<a href="https://www.cnn.com/style/article/lgbtq-lavender-symbolism-pride/index.html">resistance</a> and empowerment during the LGBTQ civil rights movement in the late 1960s.</p>
              <p>Wadley&rsquo;s Lavender Letters brought this sentiment to the 5Cs, and even for years after he graduated it remained a weekly tradition. New LGSU leadership meant new authors, and they took care to emphasize the group&rsquo;s non-hierarchical and community-centered structure when asking for input on organizational activities.</p>
              <p>&ldquo;The Lavender Letter, as the main source of information concerning the activities of the LGSU, will try to provide the members of the Claremont gay community with announcements and information on the activities and general goings-on of the LGSU,&rdquo;&nbsp;one of the issues reads.</p>
              <p>Hoping to draw people out and into the community, the letters were written in a friendly and informal voice, addressing readers with endearing jingles and closing out the note with a comic.&nbsp;</p>
              <p>&ldquo;HEY THERE, HI THERE, HO THERE,&rdquo; a letter from January 1985 begins. The body of the letter, sprinkled with handwritten edits, announced that a meeting time consensus had been reached after many polls. The letters served as a fun way for the community to share both the mundane and extraordinary events, from Valentine&rsquo;s Day parties to excursions to Big Bear.</p>
              <p>As a primarily event-oriented space, the letter shared that &ldquo;we brainstormed for four weeks or at least four minutes and, by golly, we have lots of great ideas for LGSU! Delightful dances, stupendous study breaks, marvelous mixers (student-faculty type), not to mention awesome awareness activities. Yes it&rsquo;s time once again for us to educate the masses, make them &lsquo;aware&rsquo; and all that jazz,&rdquo; the letter reads before proceeding to ask for volunteers for meeting facilitation and event organizing.&nbsp;</p>
              <p>By highlighting events that centered education and awareness, the letters aimed to bring everyone into the conversation. By allowing serious and lighthearted topics to flow interchangeably, the letters created a space that could balance importance and fun.&nbsp;</p>
              <p>Most of the letters followed this format: goofy notes with task-focused points. At other times, however, the goofy writing style was put aside to address heavier topics.</p>
              <p>After a homophobic, student-written &ldquo;Letters to the Editors&rdquo; was printed in TSL and The Collage, LGSU used that week&rsquo;s edition of the Lavender Letters to address the situation.</p>
              <p>&ldquo;We need to acknowledge and reflect upon the oppression, if we feel it as such, and then we must decide whether or not to do something,&rdquo; an issue from April 19, 1983 reads. &ldquo;We need to respond as a group&nbsp;and&nbsp;as individuals not with ambivalence, but with patience and pride.&rdquo;</p>
              <p>Homophobia was not uncommon on campus, making the Lavender Letters even more of a necessity at the time. Wadley recalls that the letters, and other LGSU fliers, were frequently pulled down from bulletin boards.</p>
              <p>&ldquo;It was a different time. We didn&apos;t have support or the administration or anything,&rdquo; Wadley said. &ldquo;Now it&rsquo;s kind of understood that the school is pro-feminist, pro-egalitatian and anti-racist &mdash; and that wasn&rsquo;t true back then.&rdquo;</p>
              <p>Wadley was one of the few openly gay men on campus, and this visibility was met with acts of oppression and violence. Harmful comments were often left on the bulletin board outside of his dorm, and several times other students snuck into his room while he was asleep.&nbsp;</p>
              <p>&ldquo;I would come home to nasty messages on my door,&rdquo; Wadley said. &ldquo;I mean that was kind of just the way it was. People would come in my room while I was sleeping and flip my bed over.&rdquo; &nbsp;</p>
              <p>According to Wadley, faculty members were also outwardly homophobic. Fred Sontag, an <a href="https://www.latimes.com/local/obituaries/la-me-frederick-sontag20-2009jun20-story.html">esteemed</a> philosophy professor at Pomona who is the namesake for several Pomona facilities, was one of the most notorious.&nbsp;</p>
              <p>&ldquo;He was this really sexist, homophobic guy,&rdquo; Wadley said. &ldquo;He would write letters to The Student Life opposing our ideas, saying that homosexual orientation is unnatural; that sex is obviously for reproduction, and non-reproductive sex is goes against nature.&rdquo;&nbsp;</p>
              <p>This perspective of the professor appears to be forgotten or ignored, however, as numerous tributes were in the&nbsp;<a href="https://www.latimes.com/local/obituaries/la-me-frederick-sontag20-2009jun20-story.html">LA Times</a> and&nbsp;<a href="https://tsl.news/news939/">TSL</a> after the professor&rsquo;s death.&nbsp;</p>
              <p>Such blatant homophobia mobilized young people into student organizing. Wadley recalled that homophobic local politics inspired many students to get involved in political advocacy. Wadley also gave nod do the &ldquo;robust feminist community,&rdquo; who were largely gay themselves, that took him under their wings as a student.</p>
              <p>&ldquo;During that time, lesbians were pretty amazing,&rdquo; he said. &ldquo;I mean, they were just so strong &hellip; they were fearless.&rdquo;</p>
              <p>Channeling his hopes for student activism, Wadley began communicating with other student groups. He recalled an event in which all the student leaders in Southern California came together for a conference in San Deigo, and he maintained contact with queer student unions in UCLA and UCSD.&nbsp;</p>
              <p>&ldquo;That time was an interesting time,&rdquo; Wadley said. &ldquo;We understood that we were the boldest gay organization on the West Coast.&rdquo;</p>
              <p>Wadley also attempted to put together a Pomona College Progressive Coalition, bringing together the LGSU, Black Student Union, Hispanic Student Union and Feminists Against Repression. However, the group didn&rsquo;t come to full fruition.&nbsp;</p>
              <p>Nonetheless, avenues like the Lavender Letters remained to hold together an integral community at this time.&nbsp;</p>
              <p>Even after Wadley graduated, the Lavender Letters continued, as did his individual activism. The AIDS epidemic hit right at the time of Wadley&rsquo;s graduation, catalyzing a 20-year career as an AIDS activist.&nbsp;</p>
              <p>Wadley reflects on his time at Pomona, including writing The Lavender Letters, as fundamental to his future endeavors.</p>
              <p>&ldquo;It taught me how to organize and be an activist,&rdquo; Wadley said. &ldquo;That was really what I learned at Pomona was all about organizing. I didn&apos;t realize that I was learning that.&rdquo;</p>
              <p>Even so, Wadley implores current students to maintain self-awareness around their activism.</p>
              <p>&ldquo;Martin Luther King quoted a unitarian minister all the time that the arc of the universe is long, but it bends toward justice,&rdquo; he said. &ldquo;There&rsquo;s always more justice that needs to be done. We don&rsquo;t know who is next, we don&rsquo;t know who we&rsquo;re being unjust to.&rdquo;</p>
              <p>He admitted that his work was not perfect, reflecting on many commonly-held transphobic sentiments within the LGSU at the time and the importance of being open to change.&nbsp;</p>
              <p>&ldquo;There&rsquo;s something we&rsquo;re doing today that we&rsquo;re going to realize is wrong. So we just shouldn&rsquo;t take ourselves too seriously,&rdquo; he said. &ldquo;We need to remember that there were people who came before us [and] that we&rsquo;re standing on their shoulders.&rdquo;&nbsp;</p>
            </div>

          <div class = "lavender">
                <div class = "lav-container">
                    <img class = "flower" src = {require("./assets/images/pink-triangle.png")}/>
                    <img class = "letter" src = {require("./assets/images/Copy of AIDS graphic (from Nov92 TSL issue) (1).jpeg")}/>
                    <img class = "flower" src = {require("./assets/images/pink-triangle.png")}/>
          </div>

          </div>
          <div id = "crisis">
            <Article type = "feature" title1 = "How 5C students, staff responded to the AIDS crisis"
            author = "Hannah Weaver" 
            warning = ""/>
          </div>
          <div className = "article-text">
            <p>
            World AIDS Day is Dec. 1, and although it’s been over 40 years since AIDS was <a href = "https://www.hiv.gov/hiv-basics/overview/history/hiv-and-aids-timeline">first identified</a> in the United States, the virus and its cultural effects linger on. 
            </p>
            <p>
            In the early years of the AIDS epidemic, because cases were highest among men who had sex with other men, the virus was initially dubbed <a href = "https://www.nytimes.com/1982/05/11/science/new-homosexual-disorder-worries-health-officials.html">“Gay-Related Immune Deficiency"</a> (GRID). Though the name was soon changed, the association of AIDS as a “gay disease” remained. 
            </p>
            <p>
            Then-President Ronald Reagan <a href = "https://www.sfgate.com/opinion/openforum/article/Reagan-s-AIDS-Legacy-Silence-equals-death-2751030.php">did not address</a> nor mention AIDS until 1987, and consequently, it did not reach the public consciousness as something to be concerned about until then. To better understand how Claremont reacted to the virus, TSL dug through the Honnold-Mudd Library’s archives.
            </p>
            <p><strong>Early debates about AIDS</strong></p>
            <p>In the early &rsquo;80s, much of the initial discourse surrounding AIDS was amongst academic and medical professionals, as it was not well known or understood by the general public. In Claremont, one of the first instances of this can be traced to a 1985&nbsp;<a href="https://claremontreviewofbooks.com/aids-public-morality-and-public-health/">article</a> published in The Claremont Review of Books.</p>
            <p>The article in question was written by San Jose State professor John Adams Wettergreen. Titled &ldquo;AIDS, Public Morality, and Public Health,&rdquo; the article blamed the AIDS pandemic on the &ldquo;perversity and sickness of the &lsquo;gay lifestyle.&rsquo;&rdquo;&nbsp;</p>
            <p>&ldquo;In short, the homo&shy;sexuals who typically contract AIDS are the dregs of the &lsquo;gay community&rsquo; &mdash; disease-and-drug-ridden, used, and abused by other homosexuals,&rdquo; Wettergreen wrote.</p>
            <p>Wettergreen&rsquo;s article received a great deal of criticism from readers, as displayed in the &ldquo;Correspondence&rdquo; section of the following issue. One letter to the editor came from the Monsour Counseling Center, written by director Kumea Shorter-Gooden and staff psychologist Kevin P. Austin.</p>
            <p>&ldquo;Your decision to publish this article has, unfortunately, contributed to the problem of intolerance and discrimination towards people because of their sexual orientation,&rdquo; they wrote. &ldquo;Further, it has failed to provide a forum for a meaningful discussion of the public health concerns caused by the AIDS pandemic, presumably the goal of publishing such an article.&rdquo;</p>
            <p>Many faculty members also responded to the article, including Pitzer sociology professor Peter Nardi. He wrote by far the longest letter to the editors, combating Wettergreen&rsquo;s every point.&nbsp;</p>
            <p>&ldquo;Ultimately the question is, why does Wettergreen want to blame and punish?&rdquo; Nardi wrote. &ldquo;The goal is to seek a cure for AIDS and to prevent more cases. Education and information are the key methods to achieve these ends. His article is the antithesis of these goals.&rdquo;&nbsp;</p>
            <p><strong>5C students react</strong></p>
            <p>Shortly after, the student body joined the conversation around AIDS prevention. In 1986, TSL published its first AIDS-related article, the first of many to display different views about how the general public and the 5Cs should respond to the AIDS crisis.&nbsp;</p>
            <p>In an issue published Oct. 24, 1986, TSL opinions editor Hugo Mart&iacute;n PO &rsquo;87 wrote an op-ed pertaining to California State Proposition 64, which sought to re-classify AIDS as a communicable disease. Proponents&nbsp;<a href="https://web.archive.org/web/20110716084151/http://holmes.uchastings.edu/initiatives.pdf/373.pdf#">stated</a> that AIDS could be spread through casual contact, a claim which opponents said was not scientifically backed and would cause those diagnosed with AIDS to be unnecessarily placed into quarantine.</p>
            <p>&ldquo;AIDS is a disease not a political issue,&rdquo; Mart&iacute;n wrote at the time. &ldquo;Politicians should stick to politics and leave medicine to those who understand it.&rdquo;</p>
            <p>It&rsquo;s been 30 years since Mart&iacute;n graduated from Pomona, but he still recalls some of the frustrations college students felt while living through the AIDS pandemic.&nbsp;</p>
            <p>&ldquo;I remember having discussions with friends about how previous generations got to experiment with their sexuality in college but we could not,&rdquo; he said via email. &ldquo;It was unfair, we felt, but we couldn&rsquo;t really blame anyone.&rdquo;&nbsp;</p>
            <p>On Feb. 20, 1987, TSL published a four-page spread titled &ldquo;Fear and AIDS,&rdquo; addressing concerns about the disease itself and related homophobia.</p>
            <p>One article from the spread, titled &ldquo;Living with the Threat of Death&rdquo; was written by Bruce Hall, a Claremont student whose exact class year and school are unknown, who explained why AIDS felt closer to him, as a gay student.</p>
            <p>&ldquo;Every pall that passes down the aisle, every obituary I read, could be my own&hellip; I will never escape the possibility that my life may end with little warning or comfort,&rdquo; he wrote.</p>
            <p><strong>Student-led education and prevention efforts</strong></p>
            <p>The &ldquo;Fear and AIDS&rdquo; spread also featured an outline of the &ldquo;Six-College Policy on AIDS,&rdquo; which emphasized the colleges&rsquo; three-prong approach on education, medical support and counseling.</p>
            <p>According to the policy outline, the Student AIDS Advisory Committee (SAAC) worked in conjunction with Student Health Services to organize &ldquo;comprehensive&rdquo; education programs.</p>
            <p>Most prominently, SAAC and SHS encouraged safe sex practices, particularly emphasizing condom use. Such emphasis, however, was not received without backlash.</p>
            <p>Earlier on in the 1986-87 school year, a sex seminar &ldquo;sparked controversy,&rdquo; according to a Nov. 14 TSL article credited to C. Hammarsk Jold. The seminar was a part of Sexual Health Awareness week, held jointly by the Student Health Advisory Committee (SHAC) and the AIDS Education Committee.</p>
            <p>The seminar, titled &ldquo;How-To&rsquo;s of Healthy Loving and Safer Sex,&rdquo; was offensive to some students, who saw it as &ldquo;equating intimate love with casual sex, and implying that &lsquo;safe&rsquo; sex is unrelated to love and respect,&rdquo; according to the article.</p>
            <p>In a Feb. 27, 1987 article, Mart&iacute;n reported on the establishment of an AIDS task force, in what he called &ldquo;Pomona College&rsquo;s strongest move so far to address the AIDS issue.&rdquo;</p>
            <p>In the article, Pomona&rsquo;s dean of students at the time, Richard Fass, explained the administration&rsquo;s reasoning for starting the task force.</p>
            <p>&ldquo;This is a life and death issue,&rdquo; Fass said. &ldquo;We want students to take AIDS seriously.&rsquo;&rdquo;&nbsp;</p>
            <p>According to a Feb. 20, 1987 TSL article titled &ldquo;Policy vs. Practice&rdquo; by Lara Broadfield, AIDS education was not well-attended or taken seriously. Despite strong AIDS education and anti-discrimination policies, enduring homophobia hindered many committees&rsquo; efforts.</p>
            <p>&ldquo;Though a nationwide 1986 poll showed that Pomona freshmen are more tolerant of homosexuality than are college freshmen nationwide, this open-mindedness may not extend to concern about AIDS prevention,&rdquo; Broadfield wrote.</p>
            <p><strong>Faculty involvement</strong></p>
            <p>Many concerned faculty, especially those that identified as LGBTQ+, got involved both on and off campus during the AIDS pandemic.</p>
            <p>As a guest writer for TSL, Professor Nardi provided his thoughts on the social impacts of AIDS.</p>
            <p>&ldquo;AIDS has once again given people in our society the permission to discriminate against gay people, thereby bringing out homophobia which is so much a part of our culture,&rdquo; Nardi wrote.</p>
            <p>Ralph Bolton, an anthropology professor, was one of three Pomona faculty members to come out as gay in 1983. That same year, he first heard about AIDS while on sabbatical in Norway.&nbsp;</p>
            <p>&ldquo;You know, when you&apos;re out in the boonies [in Claremont] and in suburbia, you don&apos;t necessarily hear about these things,&rdquo; he said. &ldquo;Especially since I wasn&apos;t [involved with] the gay community.&rdquo;</p>
            <p>Upon his return to the U.S., Bolton was inspired to start volunteering at the AIDS Project in Los Angeles.</p>
            <p>&ldquo;I did that for a while until I realized that, actually, my anthropological contribution could be more significant than washing toilets,&rdquo; he said.</p>
            <p>So, Bolton used his anthropological expertise to give a lecture at Pomona on Jan. 29, 1987, on the U.S. government&rsquo;s lackluster response to AIDS. He argued that the U.S. had a worse response than countries like Norway, due to cultural differences such as the lack of open talk about sex, less risk-aversion and more of a religious presence. In particular, Bolton blamed the Reagan administration for underfunding and misallocating AIDS-prevention resources.&nbsp;</p>
            <p>&ldquo;If we wanted to commit genocide against the gay population, we could not do it as well as this Administartion has in its treatment of the AIDS problem,&rdquo; Bolton said in his lecture.&nbsp;</p>
            <p><strong>AIDS in the &rsquo;90s and beyond</strong></p>
            <p>Bolton went on to research sexual behaviors in response to AIDS in Belgium and even taught a class on AIDS, &rdquo;at least four years before such a course appeared in anthropology at Berkeley,&rdquo; he said.</p>
            <p>In many ways, the 5Cs were ahead of its peers despite the countless setbacks and backlash organizers faced. According to Bolton, the committees, initiatives and classes formed during the &rsquo;80s and &rsquo;90s were the result of dedicated students and faculty at the 5Cs, rather than any of the college&rsquo;s administrations.&nbsp;</p>
            <p>Bolton also taught a class on human sexuality that was so popular that he had to cap it at 100 students.&nbsp;</p>
            <p>&ldquo;I had a colleague go by, and she said, &lsquo;what the hell is going on in there?&rsquo; [because] everybody was laughing and carrying on,&rdquo; Bolton recalled.</p>
            <p>&ldquo;My real goal was &hellip; to have serious conversations about sex that lead them to a understand their own needs and their own behaviors,&rdquo; he said.</p>
            <p>It was these efforts that sustained focus on AIDS prevention and general sexual education throughout the 90&rsquo;s.</p>
            <p>To commemorate World AIDS Day in 1991, SAAC painted Pomona&rsquo;s Walker Wall with the words &ldquo;AIDS does discriminate&rdquo; and a picture of the world. In November 1992, they organized an AIDS benefit dance. According to a TSL&nbsp;<a href="https://sites.google.com/g.hmc.edu/lgbt-archive-project/home/aids?authuser=0#h.p_Dsi_PSbjCAco">article</a> published at the time, the event raised over $7000 for&nbsp;<a href="https://fapinfo.org/">Foothill AIDS Project</a>.</p>
            <p>Though SAAC is no longer active, their work&rsquo;s legacy can be seen in the continued safe sex education and&nbsp;<a href="https://colleges.claremont.edu/qrc/resources/community-resources/safer-sex-resources/">resources</a> promoted at the 5Cs. Commemoration of World AIDS Day also continues &mdash; this year with a&nbsp;<a href="https://www.pomona.edu/museum/events/2022/12/art-after-hours-film-screening-visual-aids-day-without-art-being-belonging">film screening</a> at the Benton Museum of Art and a queer sex trivia game at the Motley.&nbsp;</p>
            <p>Jacqueline Tsai SC &rsquo;25 helped organize the trivia event to start conversations about the AIDS epidemic among today&rsquo;s college students.</p>
            <p>&ldquo;Reviving this history of our community is incredibly important, especially at the 5Cs,&rdquo; Tsai said via text. &ldquo;I am so excited to see what our queer community can do here in the next few years.&rdquo;</p>


          </div>

          <div className='cmc' id = "cmc">
          <Article type = "reprint" title1 = "CMC Grad Shares Five Reasons Why He Hated It" 
          author = "Paul Miailovich PO ’93" line = "This article is a reprint from the March 1, 1996 issue of TSL."/>
          <div className = "article-text">
            <p>
            The Beckett Hall newsletter had the basic dorm news, and it also included a gossip column. The column had a regular feature titled the “Fag Alert” which reported alleged homosexual activity by dorm members. When the publishers were confronted by an offended student, the paper included the student in their next Fag Alert. Undaunted, the student took the dorm newsletter to the Collage who published it with the names deleted. The Collage ran an editorial about homophobia at CMC and the RA of Beckett stepped in and prohibited future Fag Alerts. The students were never reprimanded by the administration for their slanderous hate speech.
            </p>
            <p>
            In the late 80’s and the early 90’s, several sexist incidents at CMC gained national news coverage. Unable to ignore the problem any longer, Jack Stark, President of CMC, appointed a task force to investigate sexism on the campus even though he stated his belief that CMC did not have a problem with sexism. At an open forum on the subject, Jack Stark admitted that he had lived a largely all male existence: from an all male high school, to the Marines, to a student at an all male college and finally as an administrator of an all male college. He granted that perhaps he was not as sensitive to women's issues as he should be. Talk about an understatement! Jack Stark was, and remains, totally out of touch with the issues that face the campus. The fact that he needed to appoint a task force to determine whether there was sexism at CMC shows how clueless this man is. 
            </p>
            <p>In case you haven&apos;t realized it, the school exists because of the Development Department, not the other way around. The professors, the classes, the dining halls, the dorms, the entire college is just a front operation for the money-grubbing drones of the Development Department. Publications like&nbsp;Profiles&nbsp;are the propaganda that fuel the illusion that education is CMC&apos;s major goal. CMC will market it&rsquo;s &ldquo;diverse student,&rdquo; as long as diversity sells. They clearly haven&apos;t realized that drag queens are a hot commodity at the moment, or we would see articles about CMC&apos;s &ldquo;thriving drag culture&rdquo;.</p>
            <p>At one time I was the only out gay man at CMC. Torrey Sun once confessed to me that he could count the number of gay and lesbian students at CMC on one hand, and therefore could not justify &ldquo;making a big deal&rdquo; about gay and lesbian issues. As long as gay and lesbian students at CMC remain silent, the college will never take their concerns seriously. Despite the invisibility of gay men and lesbians, I had no trouble finding willing male sexual partners. After a couple of beers, those closet doors come flying open! By the time I graduated from CMC, I knew five closeted gay men from ROTC, four from the football team, three from the water polo team and three from the Young Republican club, to name a few. Yet these very same students would laugh at lesbian jokes, would write anti-gay articles in the college newspapers and would lobby against antidiscrimination policies. Although I knew of two gay faculty members who were out of the closet, only one was courageous enough to be open with his students. I know of at least two professors who are gay, but closeted. These same professors often bashed the gay life-style in their professional life, and yet I saw one of these professors last month cavorting in a gay bar in Los Angeles! I understand the pressures that would cause individuals to remain in the closet, but I cannot condone the hypocrisy of those who had bashed gays and lesbians while secretly having sex with the very people they claim to despise.</p>
            <p>For the most part, CMC students are a bunch of sheep; sheep with very good SAT scores and GPA&rsquo;s, but sheep nonetheless. No one dares buck the system for fear of ruining those all important letters of recommendation. No one wants to protest the corruption around them because a bad conduct mark on student files might cost a prestigious job. Few students have any firm beliefs and would rather parrot the views accepted by the flock. Reactionaries who fight the PC dogma are as brainwashed as the bleeding heart liberal who preach it.&nbsp;</p>
          </div>
          </div>

          <div class = "lavender">
                <div class = "lav-container">
                  <img class = "letter" src = {require("./assets/images/lucia_tsl_specialedition_2.png")}/>
                  <img class = "letter" src = {require("./assets/images/lucia_tsl_specialedition_3.png")}/>
                </div>
          </div>

          <div id = "qrc">
            <Article type = "feature" title1 = "‘Chosen family’ at the center of QRC mentorship program" 
            author = "Jenna McMurtry" warning = ""/>
          </div>
          <div className = "article-text">
            <p>For Claremont Graduate University student Annamae Sax, joining the <a href = "https://colleges.claremont.edu/qrc/about/whats-in-the-qrc/">Queer Resource Center</a> as a mentor wasn’t just about finding queer community in Claremont. It was also about paying forward a sense of belonging that mentors had once given them when they were still an undergraduate at the University of Arizona. 
            </p>
            <p>Now, as a graduate assistant for the center, Sax oversees the 7Cs’ Queer, Questioning and Allied Mentorship Program (QQAMP).
            </p>
            <p>
            Founded in 2001, <a href = "https://colleges.claremont.edu/qrc/about/get-involved/qqamp/">QQAMP</a> started when the QRC was still run out of “The Closet” in the upstairs area of Pomona College’s Walker Lounge and wasn’t yet the formally-funded 7C institution it is today. The effort to create the mentorship program was largely driven by students.
            </p>
            <p>
              Applications for the program are open on a rolling basis, with openings to become mentors or mentees. Head mentors then pair applicants based on interests and identities expressed in a survey.
            </p>
            <p>
            By the end of their first year as a mentor, Sax had at least eight mentees, several of whom still keep in touch regularly.
            </p>
            <p>&ldquo;Applying and getting to be a mentor that year was so life changing,&rdquo; Sax said. &ldquo;I know how cliche it sounds. [My mentees] are changing my life just as much as I change theirs &mdash; but that&rsquo;s a hundred percent true.&rdquo;</p>
            <p>Through QQAMP, mentors and mentees can help plan events at the QRC, which can vary as widely from casual kickbacks over the weekend to&nbsp;<a href="https://www.instagram.com/p/CkG59RtPTrc/?igshid=MDJmNzVkMjY=">trans-only swim hours</a>.</p>
            <p>Sax said a highly anticipated return to Hamburger Mary&rsquo;s in West Hollywood for drag brunch will take place this weekend, an annual trip that often offers a first glimpse of popular LGBTQIA+ spots in Los Angeles for QQAMP mentees.</p>
            <p>&ldquo;Drag brunch was born out of an event we called &lsquo;Queering LA,&rsquo;&rdquo; Sax said. &ldquo;[For] so many kids, it&rsquo;s their first drag show. I choke up every time we go and do it. These kids have such a good time.&rdquo;</p>
            <p>Working to oversee the entire QQAMP program, Sax said creating a space where students can be their full authentic selves is essential to all the work they do at the QRC.</p>
            <p>&ldquo;I know a lot of particularly capitalistic professional spaces encourage you to leave identities and leave stuff at the door and just come in and be &lsquo;professional.&rsquo; &nbsp;And I refuse to work that way,&rdquo; Sax said.</p>
            <p>Instead Sax seeks to foster a space where intersectionality takes precedence and students&rsquo; whole identities &mdash; with all their complexities &mdash; can flourish.&nbsp;</p>
            <p>Earlier in her career, Scripps&nbsp;Assistant Vice President for Student Affairs Adriana di Bartolo-Beckman spent six years serving the QRC, starting as a graduate assistant and later becoming the center&rsquo;s director. Like Sax, she recognizes how QQAMP gives students the necessary freedom to explore their identities.&nbsp;</p>
            <p>&ldquo;Not only do we get messages on how you&rsquo;re supposed to be straight and cis[gender], we also get messages on how to be queer,&rdquo; she said. &ldquo;I think the mentor program is so important because so much about queering sexuality and gender is naming it for yourself. The definition of queer is the undoing what is normative, so how in this action of mentorship do we create space for the undoing of it?&rdquo;</p>
            <p>For Devlin Orlin PO &rsquo;25, finding QQAMP helped make his transition to college life as smooth as possible. Weekly meals and a budget for boba with his mentor turned into a friendship he would not have otherwise.</p>
            <p>&ldquo;The idea of horizontality is definitely prized in the mentorship program,&rdquo; Orlin said. &ldquo;The mentor gets just as much as the mentee does [while] meeting new people.&rdquo;</p>
            <p>Jessica Delgado CG &rsquo;22 is working alongside Sax as a head mentor for QQAMP this semester before wrapping up a masters degree in English and Cultural Studies this fall. For Delgado, serving in a mentorship role has been crucial to expand what a representation of queerness can look like in academic spaces.&nbsp;</p>
            <p>&ldquo;It&rsquo;s a complete full-circle sort of situation where I distinctly remember my first mentor at community college,&rdquo; Delgado said. &ldquo;I never really encountered someone who was so openly out in academia, specifically, so that was really inspiring. To be able to do that for someone means the world to me.&rdquo;&nbsp;</p>
            <p>Through QQAMP, Delgado has been able to share a lot of the QRC&rsquo;s other resources with students: a free clothing closet, study space and an expansive library collection of over 2,000 books and movies.</p>
            <p>Delgado said having resources like those at the QRC have helped them recognize their needs, not only as a student but as a whole person as well.</p>
            <p>&ldquo;It means being able to have an actual space where there&rsquo;s an ability to express queerness, and to be able to have conversations that are not uncomfortable and to address questions that might be uncomfortable somewhere else, but are totally normal in our spaces,&rdquo; Delgado said.</p>
            <p>Following the Nov. 19 Club Q tragedy in Colorado last month, both QQAMP and QRC have had to turn into a space for healing. What was initially planned as an event for Trans Remembrance Day transpired into a&nbsp;<a href="https://www.instagram.com/p/ClPbuMBPV2f/?igshid=MDJmNzVkMjY%3D">memorial</a> with Monsour Counseling and Psychological Services for the five lives that were lost in the shooting.&nbsp;</p>
            <p>Whether it&rsquo;s celebrating someone&rsquo;s first drag show or coming together in the wake of a tragedy, the QRC&rsquo;s mentorship program boils down to togetherness.&nbsp;</p>
            <p>&ldquo;I feel like it&rsquo;s always good to circle back to what the queer trans community has always done best: chosen family,&rdquo; Sax said. &ldquo;That&rsquo;s what this program is really about: our chosen family and getting to build our community together.&rdquo;</p>
          </div>

          <div className = "canva" id = "canva">
            <Article type = "opinion" title1 = "The cost of aesthetic convenience — how Canva subdues the radical"
            author = "Cassidy Bensko and Ava Francis-Hall"
            warning = ""/>
            <div className = "article-text">
              <p>
              The Claremont Colleges currently host a large population of openly queer students — and yet any vague sense of community, of queer family, feels so distant. We feel the gravity of individual relationships between queer people. But the sense of fight, of shared struggle and history, largely feels absent, and nowhere is this more visible than the soulless visuals of a commodified queer identity offered by graphic design programs like Canva. 
              </p>
              <p>
              Providing thousands of templates for flyers, Instagram posts and Twitter banners, <a href = "https://www.canva.com/">Canva</a> allows for the seamless transition of ideas into aesthetically pleasing graphics necessary to compete in the economy of attention brought on by our visually demanding culture.  
              </p>
              <p>
              While Canva and design programs like it make the presentation of ideas and events easy and accessible, it’s worth investigating the organic, place-specific quality that’s absent from these ready-made posters plastered on our social media feeds and campus walls.
              </p>
              <p>
              Queer people, specifically Black trans women, have been at the forefront of visual culture for decades. Working at the margins, they’ve harnessed the transformative power of art upon radical imagination to envision radical queer pasts, presents and futures. Manifestations of immense grief and hard-won pride, queer political protest art was often blunt, homemade, in-your-face and downright radical. 
              </p>
              <p>
              In the binders of vintage Lesbian and Gay Student Union (LGSU) event posters at the Queer Resource Center (QRC), this sense of counter-cultural irreverence is felt. Hand-written and composed of crude collages, these posters advertised queer student gatherings, screenings, dances and political action with a uniquely fringe aesthetic that aligned with queer positions in society. Admiring the humor and creativity of these flyers, we began to recognize the life force that is absent from the ready-made infographics and flyers we see every day on campus. 
              </p>
              <p>In the late 1980s and &rsquo;90s, radical queer art had to be framed for public consumption as mounting pressure grew for activists to both publicize the fight against AIDS and enlist people in that fight. The movement needed symbolism that would be a unifying force across gay and straight populations. The artists decided on a&nbsp;<a href="https://holocaustlearning.org.uk/latest/reclaiming-the-pink-triangle/">pink triangle</a>, used to mark homosexual individuals in Nazi concentration camps during the Holocaust, and the slogan &ldquo;SILENCE=DEATH&rdquo; as a warning beacon of queer present and futures.&nbsp;</p>
              <p>This was advertising in a certain respect: readily distinguishable and palatable for all audiences. So why is this more radical than the current state of mass-produced protest art today?</p>
              <p>The message was steeped in an unforgiving realism that did not cater to corporate interests and could be incorporated by queer artists in their own work.&nbsp;<a href="https://www.theguardian.com/artanddesign/2022/nov/17/keith-haring-art-fashion-brand-partnerships">Keith Haring</a> incorporated the slogan and pink triangle into his work; in a black and white photo titled &ldquo;Silence=Death,&rdquo; artist&nbsp;<a href="https://delart.org/silence-death/">David Wojnarowicz</a> stares into the camera with his mouth sewn shut.</p>
              </div>
          </div>
          <div className = "dyke">
            <div className = "article-text">
              <p>The symbolism could be reproduced because it was so well-known, and the art was so well-known because it was reproduced. But these reproductions were not a hollow, feeble request that people care. The art demanded people care. It had a sense of urgency, of authenticity that only comes from a community fighting for something bigger than itself.</p>
              <p>There&rsquo;s an odd feeling that comes with seeing the same trendy Canva template used for both an Instagram boutique&rsquo;s sale and a mutual aid request. They shouldn&rsquo;t look the same. Why do they look the same? The uniformity, the soulless palatability of these graphics spark the kind of recognition a distant car alarm might. Sure, it registers in our brain that something might be amiss, but the alarm eventually blends in with the rest of the noise. And that is what these graphics have created: blank, fuzzy noise that drowns out a recognition of significance.&nbsp;</p>
              <p>The cultural emptiness is felt doubly with templates made specifically for queer topics. Radical queerness is reduced to a wash of images so cute and inoffensive they might as well be Target ads, like cutesie Pride Month history infographics and neat Trans Day of Remembrance Instagram story posts.&nbsp;</p>
              <p>Precooked and garnished with co-opted political language, these templates reduce queer political art into meaningless masks of faux allyship. The text &ldquo;Trans Lives Matter,&rdquo; a battle cry derived from the endemic violence and brutality faced by Black trans women at the hands of police, locked behind a paywall. The language of revolution slapped onto rainbows, gay stock photos and color-blocked minimalist figures &mdash; you may not have liberation, but you&rsquo;ll never be at a loss for vapid corporate rainbow capitalism.&nbsp;</p>
              <p>That being said, Canva is alluring. It is quick, easy and addresses some accessibility issues that come with homemade flyers that can be harder to read. Further, it would be wrong to chastise unpaid activists for using platforms like Canva, as templated posts can help place grassroots causes on equal footing with large companies in the glittery, bloody fight for the human attention span that takes place online every second of every day.&nbsp;</p>
              <p>In 1935, when discussing the consequences of an increasingly aestheticized political culture due to the accessibility of art production tools, media studies scholar Benjamin Walter wrote, &ldquo;Fascism sees its salvation in giving these masses not their right, but instead a chance to express themselves.&rdquo;&nbsp;</p>
              <p>Canva, like production tools of Walter&rsquo;s time, makes the expression of self unbelievably easy &mdash; but it stops there. If we traded ease for authenticity in the creation of promotional materials, the greater culture of these colleges would shift to something more organic and true to student expression. What if you knew the person who drew the art on the dorm bulletin boards? Or a physical copy of a club newsletter filled with comics was sent to members, like the <AnchorLink href = "#lav-letters">Lavender Letters?&nbsp;</AnchorLink></p>
              <p>We must be cognizant of how the need for aesthetically appealing images has dulled radical politics. Instagram story posts cannot be the only method of maintaining community ties. As an unguided generation of queer people, we must seriously reckon with what is a digitally curated identity devoid of any attachment to history and what is a genuine identity derived from shared struggle and mutual adoration.</p>
              <p><i>Ava Francis-Hall PZ &rsquo;24 and Cassidy Bensko SC &rsquo;25, with a newfound love of old gay posters (shoutout to our fave: &ldquo;dyke study break extravanganza&rdquo;), decided to put their noggins together, eat two chicken sandwiches and write this piece.&nbsp;</i></p>
            </div>
          </div>

          {/* <Article type = "gallery" title1 = "Snapshots of queer life" 
          author = "various"
          line = "A homage to Outspoken, TSL asked the 5C queer community for multimedia submissions"/>

          <img class = "letter" src = {require("./assets/images/hands-lav.jpeg")}/>
                       */}
        </div>
        
    )
  }
}

export default App