/* eslint max-len: 0 */

import { Link } from 'react-router';
import ArticleHero from './ArticleHero';
import targetForTransition from '../../../../src/components/TargetForTransition';

const ArticleHeroForTransition = targetForTransition(ArticleHero);

const Article = () => (
  <div className="end-container">
    <div className="reveal-container">
      <div className="flex-container">
        <ArticleHeroForTransition />
        <div className="text-container">
          <div className="sticky sticky-right close-button" id="close"><Link to="/">✖</Link></div>
          <h1>Storm Trooper</h1>
          <p>
            Jade gonk antilles darth antilles skywalker moff organa jabba. Hoth antilles skywalker luke bespin wedge. Calamari kessel padmé mon zabrak obi-wan qui-gon. Wampa wedge mace wedge calamari organa. Hutt grievous ventress secura leia. Amidala grievous secura ben windu dooku windu solo. Fett jar boba hutt padmé jade. Lobot luuke darth han darth secura moff. Kashyyyk wookiee fisto boba. Antilles hutt yoda darth calamari skywalker ben dagobah darth. Cade wedge skywalker wookiee grievous jabba ackbar.
          </p>
        </div>
      </div>

      <div className="article-body">
        <h2>Tarka</h2>
        <p>
          Lucas ipsum dolor sit amet organa mace naboo padmé jinn moff mon antilles fisto organa. Thrawn darth owen r2-d2 maul amidala. Gamorrean ben maul darth solo solo. Leia tatooine darth hutt gamorrean darth owen antilles. Bothan darth antilles yavin obi-wan yoda bespin moff fisto. Han mandalorians darth coruscant mandalore darth mon. Organa chewbacca coruscant gonk jinn binks organa. Ackbar hutt utapau skywalker. Kessel chewbacca dooku darth lars. Hutt maul obi-wan jabba jawa sidious ackbar moff. Mandalorians mon c-3p0 yoda sidious.
          Anakin ventress moff dantooine mon hutt moff. Palpatine aayla skywalker twi'lek palpatine. Grievous mace anakin k-3po droid r2-d2 skywalker. Solo palpatine windu twi'lek calamari lando yoda dantooine luke. Vader jar cade skywalker anakin hutt solo organa. Biggs solo obi-wan mara yoda skywalker. Luke antilles mace r2-d2 solo wicket darth moff luuke. Mon hutt gamorrean organa endor skywalker mon. Moff owen coruscant gonk jinn. Anakin binks dantooine thrawn. Darth kit fett luke ventress. Dantooine palpatine hutt sidious naboo.
        </p>
        <h2>Tarka</h2>
        <p>
          Owen binks hutt gamorrean calrissian moff jar. Dantooine coruscant lars fett alderaan kessel hutt kashyyyk organa. Wookiee mace fett solo kenobi. Mothma jabba vader qui-gon sith fett kamino moff c-3p0. Skywalker fett organa hoth ponda sidious mandalore. Antilles calamari jango binks mara calrissian darth. Darth mace maul c-3po padmé skywalker. Skywalker jinn hutt greedo moff maul solo tatooine hutt. Padmé obi-wan gonk qui-gon jar darth. Jar zabrak naboo moff. Calamari hutt lobot moff aayla padmé moff boba.
          Jade gonk antilles darth antilles skywalker moff organa jabba. Hoth antilles skywalker luke bespin wedge. Calamari kessel padmé mon zabrak obi-wan qui-gon. Wampa wedge mace wedge calamari organa. Hutt grievous ventress secura leia. Amidala grievous secura ben windu dooku windu solo. Fett jar boba hutt padmé jade. Lobot luuke darth han darth secura moff. Kashyyyk wookiee fisto boba. Antilles hutt yoda darth calamari skywalker ben dagobah darth. Cade wedge skywalker wookiee grievous jabba ackbar.
        </p>
      </div>
    </div>
  </div>
);

export default Article;