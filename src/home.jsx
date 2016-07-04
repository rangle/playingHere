import React from 'react';
import ReactDOM from 'react-dom';
import HeaderComponent from './components/header.jsx';
import ClassyDella from './components/ode-to-della.jsx';
import ArtistList from './components/artist-list.jsx';

const reasonsDellaIsGreat = ['Handsomeness', 'Intelligence', 'Wit', 'Humility', 'Charisma', 'Humour'];
const listOfArtistsTop5 = [{name:'Beyonce', location: 'Texas', link:'https://en.wikipedia.org/wiki/Beyonc%C3%A9', bio:'Beyoncé Giselle Knowles-Carter (/biːˈjɒnseɪ/;[4] born September 4, 1981)[5][6][7] is an American singer, songwriter, record producer and actress. Born and raised in Houston, Texas, she performed in various singing and dancing competitions as a child and rose to fame in the late 1990s as lead singer of R&B girl-group Destiny\'s Child. Managed by her father, Mathew Knowles, the group became one of the world\'s best-selling girl groups of all time. Their hiatus saw the release of Beyoncé\'s debut album, Dangerously in Love (2003), which established her as a solo artist worldwide, earned five Grammy Awards and featured the Billboard Hot 100 number-one singles "Crazy in Love" and "Baby Boy".'},
{name:'Rihanna', location: 'Barbados', link:'https://en.wikipedia.org/wiki/Rihanna', bio:'Robyn Rihanna Fenty (born February 20, 1988) is a Barbadian singer and songwriter. Born in Saint Michael and raised in Bridgetown, she first entered the music industry by recording demo tapes under the direction of record producer Evan Rogers in 2003. She ultimately signed a recording contract with Def Jam Recordings after auditioning for its then-president, hip-hop producer and rapper Jay Z. Rihanna\'s first two studio albums Music of the Sun (2005) and A Girl like Me (2006) charted on the top 10 of the U.S. Billboard 200 and respectively produced the singles "Pon de Replay" and "SOS".'},
{name:'Justin Bieber', location: 'Startford', link:'https://en.wikipedia.org/wiki/Justin_Bieber', bio:' Justin Drew Bieber born March 1, 1994)[4][5] is a Canadian singer and songwriter. After a talent manager discovered him through his YouTube videos covering songs in 2007 and signed to RBMG, Bieber released his debut EP, My World, in late 2009. It was certified platinum in the U.S.[6] He became the first artist to have seven songs from a debut record chart on the Billboard Hot 100.[7] Bieber released his first full-length studio album, My World 2.0, in 2010. It debuted at or near number one in several countries and was certified triple platinum in the U.S.[6] It was preceded by his most successful single to date, Baby.'},
{name:'Fifth Harmony', location: 'America', link:'https://en.wikipedia.org/wiki/Fifth_Harmony', bio:'Fifth Harmony is an American five-piece girl group formed on the second season of the The X Factor USA in July 2012. The group consists of members Ally Brooke, Normani Kordei, Dinah Jane, Camila Cabello, and Lauren Jauregui. They signed a joint deal with Syco Music, owned by Simon Cowell, and Epic Records, L.A. Reid\'s record label, after finishing in third place on the show.'},
{name:'Drake', location: 'Toronto', link:'https://en.wikipedia.org/wiki/Rihanna', bio:'Aubrey Drake Graham (born October 24, 1986),[2] better known as Drake, is a Canadian rapper, singer, songwriter, record producer and actor, born and raised in Toronto, Ontario.[3] He first garnered recognition for his role as Jimmy Brooks on the television series Degrassi: The Next Generation. He later rose to prominence as a rapper, releasing several independent mixtapes before signing to Lil Wayne\'s Young Money Entertainment in June 2009.[4] Drake\'s EP, So Far Gone (2009), spawned the singles "Best I Ever Had" and Im Goin In, which reached the top ten of the U.S. Billboard Hot 100.'}];

// Styles
import 'style!css!./styles/style.css';

export default class Main extends React.Component {

  render() {
    return <section id="root-container">
              <HeaderComponent title='Playing Heres' />
              <ClassyDella reasons={reasonsDellaIsGreat} />
              <ArtistList listIn={listOfArtistsTop5}/>
            </section>
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
