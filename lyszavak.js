lypattern = [
  "bazsaly",
  "béklyó",
  "bivaly",
  "boglya",
  "cikkely",
  "csákly",
  "csegely",
  "csoroszlya",
  "csuklya",
  "dereglye",
  "dereglyé",
  "derelye",
  "derelyé",
  "tévely",
  "ereklye",
  "furulya",
  "fuszulyka",
  "fákly",
  "gabalyo",
  "gabalyí",
  "gally",
  "gereblye",
  "gereblyé",
  "gerely",
  "gerendely",
  "gólya",
  "gulya",
  "guzsaly",
  "hely",
  "helly",
  "hólyag",
  "hüvely",
  "ily",
  "kalyiba",
  "kalyibá",
  "karvaly",
  "kétely",
  "kelyhe",
  "kelyhé",
  "kesely",
  "kuruglya",
  "máglya",
  "mely",
  "messzely",
  "métely",
  "mulya",
  "nyavaly",
  "oly",
  "paszuly",
  "pelyhe",
  "pelyhé",
  "pelyva",
  "pendely",
  "persely",
  "pikkely",
  "póly",
  "pulya",
  "pulyka",
  "pulyká",
  "saroglya",
  "selyem",
  "selyme",
  "selymé",
  "selyp",
  "semlyék",
  "skatulya",
  "sóly",
  "súly",
  "sulykol",
  "sulyok",
  "sulyom",
  "susulyka",
  "sülly",
  "szablya",
  "székely",
  "tavaly",
  "tégely",
  "tengely",
  "tévely",
  "toklyó",
  "zsemlye",
  "zsindely",
  "zsöllye",
  "amellyel",
  "baglyo",
  "gabalyo",
  "foglyul",
  "gereblyé",
  "hadifogly",
  "lyuk",
  "selyma",
  "spatulya",
  "veszéllyel",
  "zsivaly",
  "lyuggat",
  "ály",
  "ély",
  "öly",
  "lyá",
  "üly",
];

extended = lypattern.concat(
  lypattern
    .map((w) => {
      if (!w.includes("lly") && w.slice(-2) == "ly") {
        return w.replaceAll("ly", "lly");
      }
      return "";
    })
    .filter((el) => el != "")
);

noinclusions = extended.filter((w) => {
  for (i = 0; i < lypattern.length; i++) {
    if (w.includes(lypattern[i]) && w != lypattern[i]) {
      console.log(w);
      console.log(lypattern[i]);
      return false;
    }
  }
  return true;
});

function mapJ(text) {
  text = text.replaceAll("lly", "jj");
  text = text.replaceAll("ly", "j");
  return text;
}

lymap = new Map(noinclusions.map((el) => [el, mapJ(el)]));
