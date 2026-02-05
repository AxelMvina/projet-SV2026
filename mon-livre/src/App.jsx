import { useEffect, useState } from "react";
import "./index.css";
import riverTrack from "./assets/photo/Depuis le 16 décembre.wav";
import introMusic from "./assets/photo/universfield-cinematic-orchestral-intro-351349.mp3";
import introVideo from "./assets/photo/2026-02-04T17-01-10_la_couverture_du_watermarked.mp4";
import finalVideo from "./assets/photo/Snapchat-1683045232.mp4";
import firstMeetingPhoto from "./assets/photo/Snapchat-1183039470.jpg";
import momentsPhoto from "./assets/photo/3-36-103-23-0623-bLfGP1.jpg";
import galleryPhoto1 from "./assets/photo/Snapchat-1961997295.jpg";
import galleryPhoto2 from "./assets/photo/Snapchat-133781218.jpg";
import galleryPhoto3 from "./assets/photo/20250419_155539.jpg";
import galleryPhoto4 from "./assets/photo/IMG_20240523_135011.jpg";
import galleryPhoto5 from "./assets/photo/IMG_20240714_223701.jpg";
import galleryPhoto6 from "./assets/photo/IMG_20240715_211632.jpg";
import galleryPhoto7 from "./assets/photo/Snapchat-1315041528.jpg";
import galleryPhoto8 from "./assets/photo/Snapchat-1183039470.jpg";

const sections = [
  {
    id: "rencontre",
    title: "Chapitre 1",
    subtitle: "Là où tout a commencé…",
    image: firstMeetingPhoto,
    imageAlt: "Une photo de notre première rencontre",
    layout: "left",
    content: (
      <>
        <p>
          Le 16 décembre 2023 est devenu une date particulière. Pas parce que tout
          était parfait, mais parce que c’était le début de quelque chose de vrai.
        </p>
        <p>
          Je ne savais pas encore où ça nous mènerait, mais j’ai très vite su que
          je voulais continuer avec toi.
        </p>
      </>
    ),
  },
  {
    id: "vecu",
    title: "Chapitre 2",
    subtitle: "Nos moments",
    image: momentsPhoto,
    imageAlt: "Des photos de nos plus beaux moments",
    layout: "right",
    content: (
      <div className="timeline">
        <div className="timeline-item">
          <h3>🌱 Le début</h3>
          <p>Apprendre à se découvrir, doucement, sans se presser.</p>
        </div>
        <div className="timeline-item">
          <h3>✈️ Notre voyage préféré : l'Ardèche</h3>
          <p>
            Notre voyage. Des paysages, des rires, des moments simples… et cette
            sensation étrange que tout était exactement à sa place.
          </p>
        </div>
        <div className="timeline-item">
          <h3>🤍 Le quotidien</h3>
          <p>
            Parce que le bonheur, ce n’est pas seulement les grands moments, c’est
            aussi les petits gestes, chaque jour.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "voyages",
    title: "Chapitre 3",
    subtitle: "Nos voyages et expériences",
    image: galleryPhoto8,
    imageAlt: "Nos voyages ensemble",
    layout: "left",
    content: (
      <div className="timeline timeline-horizontal">
        <div className="timeline-item">
          <h3>✈️ L'Ardèche</h3>
          <p>Notre premier grand voyage ensemble. Des paysages à couper le souffle, des rires, des moments simples et cette sensation que tout était à sa place.</p>
        </div>
        <div className="timeline-item">
          <h3>🏍️ Le quad</h3>
          <p>En vrai le quad c'est vachement bien. Une aventure pleine d'adrénaline et de rires partagés.</p>
        </div>
        <div className="timeline-item">
          <h3>🌆 Rotterdam</h3>
          <p>Découvrir une nouvelle ville ensemble, ses rues, son ambiance unique.</p>
        </div>
        <div className="timeline-item">
          <h3>🏖️ Vacances Bretagne</h3>
          <p>Les vacances en Bretagne, entre mer et terre, des moments de détente précieux.</p>
        </div>
        <div className="timeline-item">
          <h3>🦁 Zoo de Beauval</h3>
          <p>Admirer les animaux ensemble, partager notre amour pour la nature.</p>
        </div>
        <div className="timeline-item">
          <h3>🌲 Forêt de Brocéliande</h3>
          <p>Se perdre dans les légendes et la magie de cette forêt mystique.</p>
        </div>
        <div className="timeline-item">
          <h3>🏰 Puy du Fou</h3>
          <p>Vivre l'histoire ensemble, des spectacles époustouflants et des émotions partagées.</p>
        </div>
        <div className="timeline-item">
          <h3>🎮 Match Valorant</h3>
          <p>Partager nos passions, même les plus geek, et s'amuser ensemble.</p>
        </div>
        <div className="timeline-item">
          <h3>🎵 Concert Fredz</h3>
          <p>Vibrer ensemble sur la musique, créer des souvenirs sonores inoubliables.</p>
        </div>
        <div className="timeline-item">
          <h3>🐼 Zoo PairiDaiza</h3>
          <p>Une journée magique parmi les animaux, découvrir le monde ensemble.</p>
        </div>
        <div className="timeline-item">
          <h3>🏛️ Bruges</h3>
          <p>Flâner dans les rues de cette belle ville, prendre le temps de profiter.</p>
        </div>
        <div className="timeline-item">
          <h3>🏰 Château de Chambord</h3>
          <p>Explorer l'histoire de France ensemble, s'émerveiller devant tant de beauté.</p>
        </div>
        <div className="timeline-item">
          <h3>🌊 Narbonne</h3>
          <p>Découvrir le sud de la France, ses plages et son charme méditerranéen.</p>
        </div>
        <div className="timeline-item">
          <h3>⛪ Abbaye de Fontfroide</h3>
          <p>Un moment de paix et de sérénité dans ce lieu chargé d'histoire.</p>
        </div>
      </div>
    ),
  },
  {
    id: "ressens",
    title: "Chapitre 4",
    subtitle: "Ce que je ressens",
    image: "/images/ce-que-je-ressens.jpg",
    imageAlt: "Un moment calme et doux à deux",
    layout: "left",
    content: (
      <div className="feelings">
        <p>Avec toi, je me sens compris.</p>
        <p>Je me sens en sécurité.</p>
        <p>
          Ta présence est naturelle, apaisante.
        </p>
        <p>
          Tu es là, simplement, et ça change beaucoup de choses.
        </p>
        <p>Depuis que tu es là, tout est plus simple, plus doux, plus évident.</p>
      </div>
    ),
  },
  {
    id: "avenir",
    title: "Chapitre 5",
    subtitle: "Et la suite…",
    image: "/images/notre-futur.jpg",
    imageAlt: "Une photo qui symbolise notre futur ensemble",
    layout: "right",
    content: (
      <div className="future">
        <p>Je ne sais pas exactement ce que l’avenir nous réserve.</p>
        <p>
          Mais je sais que je veux le découvrir avec toi. Continuer à construire.
          À rire. À prendre soin l’un de l’autre.
        </p>
        <ul>
          <li>Des moments simples, mais précieux.</li>
          <li>Des projets qui se construisent doucement.</li>
          <li>Un futur où l’on continue d’être nous, ensemble.</li>
        </ul>
      </div>
    ),
  },
];

function App() {
  const [showPreIntro, setShowPreIntro] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);
  const [galleryModal, setGalleryModal] = useState(null);
  const [secretOpen, setSecretOpen] = useState(false);
  const [answerGiven, setAnswerGiven] = useState(false);
  const [showFinalVideo, setShowFinalVideo] = useState(false);
  const [noButtonGone, setNoButtonGone] = useState(false);
  const [noButtonReturning, setNoButtonReturning] = useState(false);
  const [runAwayDirection, setRunAwayDirection] = useState({ x: 140, y: -90 });
  const [noButtonText, setNoButtonText] = useState("Non");
  
  const noSynonyms = [
    "Allez dis oui",
    "Clique sur l'autre",
    "Tu sais que tu veux",
    "L'autre bouton est mieux",
    "L'autre c'est mieux",
    "Tu hésites ?",
    "Allez, oui !",
    "L'autre bouton t'attend",
    "Dis oui",
    "Clique sur Évidemment",
    "Tu veux vraiment dire non ?",
    "L'autre est plus sympa",
    "Allez, dis oui !",
  ];

  // Faire réapparaître le bouton "Non" après 3 secondes avec un nouveau synonyme
  useEffect(() => {
    if (noButtonGone && !answerGiven) {
      const timer = setTimeout(() => {
        // Choisir un synonyme aléatoire différent du texte actuel
        setNoButtonText((currentText) => {
          const availableSynonyms = noSynonyms.filter(syn => syn !== currentText);
          return availableSynonyms[Math.floor(Math.random() * availableSynonyms.length)] || noSynonyms[0];
        });
        
        setNoButtonGone(false);
        setNoButtonReturning(true);
        // Réinitialiser l'animation après qu'elle soit terminée
        setTimeout(() => {
          setNoButtonReturning(false);
        }, 800);
      }, 3000); // Réapparaît après 3 secondes

      return () => clearTimeout(timer);
    }
  }, [noButtonGone, answerGiven]);

  const handleNoButtonHover = () => {
    // Générer une direction aléatoire
    const angle = Math.random() * Math.PI * 2; // Angle aléatoire en radians
    const distance = 200 + Math.random() * 150; // Distance entre 200 et 350px
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;
    
    setRunAwayDirection({ x, y });
    setNoButtonGone(true);
  };
  const [musicOn, setMusicOn] = useState(false);
  const [musicVolume, setMusicVolume] = useState(0.4);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const openPhoto = (photo) => {
    setGalleryModal(photo);
  };

  const closePhoto = () => {
    setGalleryModal(null);
  };

  const closeFinalVideo = () => {
    setShowFinalVideo(false);
  };

  const handleAnswer = () => {
    setAnswerGiven(true);
    setShowFinalVideo(true);
  };

  // Démarrage de la musique quand l'intro commence (après interaction utilisateur)
  useEffect(() => {
    if (!showIntro || musicStarted) return;
    
    const startIntroMusic = () => {
      if (musicStarted) return;
      const introAudio = document.getElementById("intro-music");
      if (introAudio) {
        introAudio.volume = 0.5;
        introAudio.play()
          .then(() => {
            setMusicStarted(true);
          })
          .catch(() => {
            // Si le navigateur bloque, on ignore
          });
      }
    };
    
    // Démarrer immédiatement après l'interaction utilisateur
    const timer = setTimeout(() => {
      startIntroMusic();
    }, 100);

    // Backup : essayer quand la vidéo joue
    const video = document.querySelector(".video-intro-player");
    const handlePlaying = () => {
      startIntroMusic();
    };
    
    if (video) {
      video.addEventListener("playing", handlePlaying);
    }

    return () => {
      clearTimeout(timer);
      if (video) {
        video.removeEventListener("playing", handlePlaying);
      }
    };
  }, [showIntro]);

  const handleVideoPlay = () => {
    if (!musicStarted) {
      const introAudio = document.getElementById("intro-music");
      if (introAudio) {
        introAudio.volume = 0.5;
        introAudio.play()
          .then(() => {
            setMusicStarted(true);
          })
          .catch(() => {});
      }
    }
  };

  const handleIntroClick = () => {
    if (!musicStarted) {
      const introAudio = document.getElementById("intro-music");
      if (introAudio) {
        introAudio.volume = 0.5;
        introAudio.play()
          .then(() => {
            setMusicStarted(true);
          })
          .catch(() => {});
      }
    }
  };

  const startIntro = () => {
    setShowPreIntro(false);
    setShowIntro(true);
    // Démarrer la musique immédiatement après l'interaction utilisateur
    setTimeout(() => {
      const introAudio = document.getElementById("intro-music");
      if (introAudio) {
        introAudio.volume = 0.5;
        introAudio.play()
          .then(() => {
            setMusicStarted(true);
          })
          .catch(() => {});
      }
    }, 100);
  };

  useEffect(() => {
    if (!showIntro && !showPreIntro) {
      const introAudio = document.getElementById("intro-music");
      if (introAudio) {
        introAudio.pause();
        introAudio.currentTime = 0;
      }
      setMusicStarted(false);
    }
  }, [showIntro, showPreIntro]);

  // Gestion musique (OFF par défaut) avec volume
  useEffect(() => {
    const audio = document.getElementById("bg-music");
    if (!audio) return;
    audio.volume = musicVolume;
    if (musicOn) {
      audio
        .play()
        .catch(() => {
          // si le navigateur bloque, on laisse juste l'état sur OFF visuel
          setMusicOn(false);
        });
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [musicOn, musicVolume]);

  // Animation d'apparition des pages au scroll (après l'intro)
  useEffect(() => {
    if (showIntro) return;

    let observer = null;
    const timer = setTimeout(() => {
      const pages = document.querySelectorAll(".page");
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("page-visible");
            }
          });
        },
        { threshold: 0.3 }
      );

      pages.forEach((page) => observer.observe(page));

      const firstPage = pages[0];
      if (firstPage) firstPage.classList.add("page-visible");
    }, 50);

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
    };
  }, [showIntro]);

  return (
    <div className="app-root">
      {/* BOUTON INITIAL - Avant l'intro */}
      {showPreIntro && (
        <div className="pre-intro">
          <button
            type="button"
            className="pre-intro-btn"
            onClick={startIntro}
          >
            Commencer
          </button>
        </div>
      )}

      {/* INTRO – Vidéo plein écran */}
      {showIntro && (
        <div className="video-intro" onClick={handleIntroClick}>
          <video
            className="video-intro-player"
            src={introVideo}
            autoPlay
            muted
            playsInline
            onPlay={handleVideoPlay}
            onEnded={() => setVideoEnded(true)}
          />
          <audio id="intro-music" src={introMusic} loop />
          {videoEnded && (
            <button
              type="button"
              className="video-intro-btn"
              onClick={() => setShowIntro(false)}
            >
              Découvrir notre histoire
            </button>
          )}
        </div>
      )}

      {!showIntro && (
        <>
      <header className="top-nav">
        <div className="logo">NOTRE HISTOIRE — AXEL &amp; AUDREY</div>
        <nav>
          <button onClick={() => scrollToSection("hero")}>Début</button>
          <button onClick={() => scrollToSection("rencontre")}>Rencontre</button>
          <button onClick={() => scrollToSection("vecu")}>Nos moments</button>
          <button onClick={() => scrollToSection("voyages")}>Nos voyages</button>
          <button onClick={() => scrollToSection("ressens")}>
            Ce que je ressens
          </button>
          <button onClick={() => scrollToSection("avenir")}>Notre futur</button>
          <button onClick={() => scrollToSection("galerie")}>Photos</button>
          <button onClick={() => scrollToSection("aime")}>Ce que j'aime</button>
          <button onClick={() => scrollToSection("question")}>La question</button>
        </nav>
        <div className="music-wrapper">
          <button
            type="button"
            className={`music-toggle ${musicOn ? "music-on" : ""}`}
            onClick={() => setMusicOn((v) => !v)}
          >
            {musicOn ? "♪" : "♫"}
          </button>
          <input
            className="music-volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={musicVolume}
            onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
            aria-label="Volume de la musique"
          />
        </div>
        <audio id="bg-music" src={riverTrack} loop />
      </header>

      <main className="book">
        {/* SECTION HERO */}
        <section id="hero" className="page hero-page">
          <div className="page-inner hero-inner">
            <div className="hero-content">
              <p className="hero-overline">Pour toi, Chat</p>
              <h1 className="hero-title">
                Depuis que tu es là, tout est plus simple.
              </h1>
              <p className="hero-subtitle">
                Je ne savais pas qu'une personne pouvait prendre autant de place,
                sans jamais envahir. Et pourtant, te rencontrer a changé beaucoup
                de choses en moi.
              </p>
              <p className="hero-subtitle">
                Alors j'ai voulu garder une trace. Pour nous. Pour toi, Chat.
              </p>
              <button
                className="hero-button"
                onClick={() => scrollToSection("rencontre")}
              >
                Commencer notre histoire
              </button>
            </div>
          </div>
        </section>

        {/* CHAPITRES PRINCIPAUX */}
        {sections.map((section, index) => (
          <section
            key={section.id}
            id={section.id}
            className={`page layout-${section.layout || "left"} section-${section.id}`}
          >
            <div className="page-inner">
              <div className="page-number">
                {index + 1} / {sections.length}
              </div>

              <div className="page-header">
                <h1>{section.title}</h1>
                <h2>{section.subtitle}</h2>
              </div>

              <div className="page-layout">
                <div className="page-photo">
                  <div className="photo-frame">
                    <img src={section.image} alt={section.imageAlt} />
                    <div className="photo-overlay" />
                  </div>
                </div>

                <div className="page-text">
                  <div className="page-content">{section.content}</div>
                </div>
              </div>

              {index < sections.length - 1 && (
                <button
                  className="next-arrow"
                  onClick={() => scrollToSection(sections[index + 1].id)}
                >
                  ↓
                </button>
              )}
            </div>
          </section>
        ))}

        {/* GALERIE POLAROIDS */}
        <section id="galerie" className="page layout-left">
          <div className="page-inner gallery-inner">
            <div className="page-number">Galerie</div>
            <div className="page-header">
              <h1>Des souvenirs que je garde précieusement.</h1>
              <h2>Petits instants volés, grands moments pour nous</h2>
            </div>
            <div className="gallery-grid">
              {[
                {
                  id: 1,
                  src: galleryPhoto1,
                  caption: "Ce jour-là, j'étais simplement bien.",
                },
                {
                  id: 2,
                  src: galleryPhoto2,
                  caption: "Un moment parmi tant d'autres, mais jamais banal.",
                },
                {
                  id: 3,
                  src: galleryPhoto3,
                  caption: "Avec toi, même le simple devient important.",
                },
                {
                  id: 4,
                  src: galleryPhoto4,
                  caption: "En vrai le quad c'est vachement bien.",
                },
                {
                  id: 5,
                  src: galleryPhoto5,
                  caption: "Ensemble, c'est tout.",
                },
                {
                  id: 6,
                  src: galleryPhoto6,
                  caption: "Juste les Boss",
                },
                {
                  id: 7,
                  src: galleryPhoto7,
                  caption: "BG",
                },
                {
                  id: 8,
                  src: galleryPhoto8,
                  caption: "Notre première rencontre IRL.",
                },
              ].map((photo, i) => (
                <button
                  key={photo.id}
                  type="button"
                  className={`polaroid-card polaroid-${i + 1}`}
                  onClick={() => openPhoto(photo)}
                >
                  <div className="polaroid-photo">
                    <img src={photo.src} alt={photo.caption} />
                  </div>
                  <div className="polaroid-caption">{photo.caption}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* CE QUE J'AIME CHEZ TOI */}
        <section id="aime" className="page layout-left">
          <div className="page-inner soft-section">
            <div className="page-number">Ce que j'aime</div>
            <div className="page-header">
              <h1>Ce que j'aime chez toi, Audrey…</h1>
              <h2>Toutes ces petites choses qui te rendent unique</h2>
            </div>
            <div className="love-list">
              {[
                "Ta sincérité, toujours, même quand ce n'est pas facile.",
                "Ta mignonnerie, souvent sans que tu t'en rendes compte.",
                "La façon que tu as de prendre soin de moi, naturellement.",
                "Ton regard quand tu es heureuse.",
                "Le calme que tu m'apportes, juste en étant là.",
              ].map((text, index) => (
                <div
                  key={text}
                  className="love-line"
                  style={{ animationDelay: `${index * 0.35}s` }}
                >
                  <span className="love-heart">♥</span>
                  <span className="love-text">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MESSAGE SECRET */}
        <section id="secret" className="page layout-right">
          <div className="page-inner secret-inner">
            <div className="page-number">Secret</div>
            <div className="page-header">
              <h1>Message secret</h1>
              <h2>Un petit coin rien que pour nous</h2>
            </div>
            <button
              type="button"
              className={`secret-card ${secretOpen ? "open" : ""}`}
              onClick={() => setSecretOpen((v) => !v)}
            >
              <div className="secret-icon">🔒</div>
              <div className="secret-label">
                {secretOpen
                  ? "Clique pour refermer le secret"
                  : "👉 Ouvrir le message"}
              </div>
              {secretOpen && (
                <div className="secret-message">
                  <p>
                    Je ne suis pas toujours très fort pour dire ce que je ressens à
                    voix haute, alors je l'écris ici.
                  </p>
                  <p>
                    Être avec toi, Audrey, ce n'est pas seulement aimer quelqu'un.
                    C'est se sentir compris. C'est se sentir en sécurité.
                  </p>
                  <p>
                    Tu prends soin de moi d'une manière simple et sincère, et ça
                    compte plus que tu ne l'imagines.
                  </p>
                  <p>Merci d'être toi. Merci d'être là. Chat.</p>
                </div>
              )}
            </button>
          </div>
        </section>

        {/* FINAL – LA QUESTION */}
        <section id="question" className="page final-page">
          <div className="page-inner final-inner">
            <div className="page-number">Final</div>
            <div className="final-stars" aria-hidden="true" />
            <div className="final-content">
              <h1>Et si on écrivait la suite ensemble ?</h1>
              <p className="final-subtitle">
                Alors, tu veux continuer ce livre avec moi ?
              </p>
              <div className="final-buttons">
                <button
                  type="button"
                  className="final-btn final-yes"
                  onClick={handleAnswer}
                  disabled={answerGiven}
                >
                  Évidemment
                </button>
                <button
                  type="button"
                  className={`final-btn final-no ${
                    noButtonGone ? "final-no-gone" : ""
                  } ${noButtonReturning ? "final-no-returning" : ""}`}
                  onClick={(e) => e.preventDefault()}
                  onMouseEnter={handleNoButtonHover}
                  disabled={answerGiven}
                  style={
                    noButtonGone || noButtonReturning
                      ? {
                          "--run-away-x": `${runAwayDirection.x}px`,
                          "--run-away-y": `${runAwayDirection.y}px`,
                        }
                      : {}
                  }
                >
                  {noButtonText}
                </button>
              </div>
              {answerGiven && (
                <p className="final-answer">
                  Merci d'être là. On a encore tellement de pages à écrire. 💗
                </p>
              )}
            </div>
          </div>
        </section>

        {/* VIDÉO FINALE */}
        {showFinalVideo && (
          <div className="final-video-overlay">
            <button
              type="button"
              className="final-video-close"
              onClick={closeFinalVideo}
              aria-label="Fermer la vidéo"
            >
              ✕
            </button>
            <video
              className="final-video-player"
              src={finalVideo}
              autoPlay
              muted
              playsInline
              loop
            />
          </div>
        )}

        {/* MODAL GALERIE */}
        {galleryModal && (
          <div className="modal-backdrop" onClick={closePhoto}>
            <div
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close"
                onClick={closePhoto}
              >
                ✕
              </button>
              <img 
                src={galleryModal.src} 
                alt={galleryModal.caption}
                className={galleryModal.id === 2 ? "modal-photo-middle" : ""}
              />
              <p>{galleryModal.caption}</p>
            </div>
          </div>
        )}

      </main>
        </>
      )}
    </div>
  );
}

export default App;
