import type { Course } from '@/types/course';

export const course: Course = {
  title: 'Tarot, Ahnenheilung & das Lösen alter Glaubenssätze',
  slug: 'tarot-ahnenheilung',
  modules: [
    {
      slug: 'willkommen',
      title: 'Modul 0 – Willkommen & Einführung',
      description:
        'Komm zur Ruhe, orientiere dich und beginne den Kurs bewusst. Hier erfährst du, wie du das Beste aus dieser Reise herausholst.',
      isBonus: false,
      lessons: [
        {
          slug: 'willkommen-im-kurs',
          title: 'Willkommen im Kurs',
          intro:
            'Ich freue mich so sehr, dass du hier bist. In dieser ersten Lektion begrüße ich dich persönlich und lade dich ein, wirklich anzukommen.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 8,
          summary:
            'Du bist am richtigen Ort. Dieser Kurs begleitet dich auf deiner ganz persönlichen Heilungsreise – in deinem Tempo und mit vollem Mitgefühl.',
          reflectionQuestions: [
            'Was hat dich zu diesem Kurs geführt?',
            'Was möchtest du für dich loslassen?',
            'Welche Hoffnung trägst du in dir?',
          ],
          downloads: [
            { title: 'Starter-Workbook', fileUrl: '/downloads/starter-workbook.pdf' },
            { title: 'Kursleitfaden', fileUrl: '/downloads/kursleitfaden.pdf' },
          ],
        },
        {
          slug: 'so-nutzt-du-die-plattform',
          title: 'So nutzt du die Plattform',
          intro:
            'Damit du dich von Beginn an wohl und orientiert fühlst, zeige ich dir, wie du durch den Kurs navigierst.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 5,
          summary:
            'Du findest alle Lektionen in der Modulübersicht. Markiere Lektionen als abgeschlossen und verfolge deinen Fortschritt im Dashboard.',
          reflectionQuestions: [
            'Wann in deinem Alltag ist die beste Zeit zum Lernen?',
            'Wie möchtest du dir Notizen machen – digital oder analog?',
          ],
          downloads: [
            { title: 'Journal-Vorlage', fileUrl: '/downloads/journal-vorlage.pdf' },
          ],
        },
        {
          slug: 'spirituelle-arbeit-im-digitalen-raum',
          title: 'Spirituelle Arbeit im digitalen Raum',
          intro:
            'Kann man wirklich am Bildschirm Heilungsarbeit machen? Ja – und in dieser Lektion erfährst du, wie.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 10,
          summary:
            'Die Intensität deiner inneren Arbeit entscheidet – nicht das Medium. Schaffe dir einen ruhigen, heilsamen Raum für jede Lektion.',
          reflectionQuestions: [
            'Was hilft dir, dich auf spirituelle Arbeit einzustimmen?',
            'Welches Ritual könntest du vor jeder Lektion einführen?',
          ],
          downloads: [],
        },
        {
          slug: 'wie-du-mit-journal-audio-video-arbeitest',
          title: 'Wie du mit Journal, Audio, Video und Reflexion arbeitest',
          intro:
            'Dieser Kurs bildet sich nicht nur im Kopf ab – er wirkt im Herzen. Ich erkläre dir, wie du die verschiedenen Lernformen für dich nutzt.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 7,
          summary:
            'Kombiniere Video, Journaling und Reflexionsfragen für eine tiefe, nachhaltige Transformation.',
          reflectionQuestions: [
            'Welche Form des Ausdrucks fühlt sich für dich am natürlichsten an?',
            'Magst du gerne schreiben, zeichnen, oder einfach in Stille sitzen?',
          ],
          downloads: [],
        },
      ],
    },
    {
      slug: 'grundlagen',
      title: 'Modul 1 – Ahnenheilung, Karma & Glaubenssätze',
      description:
        'Verstehe die Wurzeln deiner Muster. Erkunde, was Ahnenheilung und Karma wirklich bedeuten – und wie du deine eigene Selbstwirksamkeit stärkst.',
      isBonus: false,
      lessons: [
        {
          slug: 'was-ist-ahnenheilung',
          title: 'Was ist Ahnenheilung?',
          intro:
            'Ahnenheilung ist kein Konzept aus dem Mittelalter – sie ist eine kraftvolle Form der Selbstreflexion und Transformation.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 15,
          summary:
            'Ahnenheilung bedeutet, die emotionalen und energetischen Erbschaften deiner Familie zu erkennen und liebevoll zu lösen.',
          reflectionQuestions: [
            'Welche Themen oder Muster wiederholten sich in deiner Familie über Generationen?',
            'Gibt es Glaubenssätze, die du von deinen Eltern oder Großeltern übernommen hast?',
            'Was möchtest du nicht weitergeben?',
          ],
          downloads: [
            { title: 'Reflexionsbogen Glaubenssätze', fileUrl: '/downloads/reflexionsbogen-glaubenssaetze.pdf' },
          ],
        },
        {
          slug: 'was-bedeutet-karma',
          title: 'Was bedeutet Karma in diesem Kontext?',
          intro:
            'Karma wird oft missverstanden. Hier lernst du, was es im Kontext von Ahnenheilung und persönlichem Wachstum wirklich bedeutet.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 12,
          summary:
            'Karma ist keine Strafe – es ist Energie, die nach Auflösung sucht. Du hast die Kraft, alte Muster zu wandeln.',
          reflectionQuestions: [
            'Welche Themen kehren in deinem Leben immer wieder zurück?',
            'Wofür kannst du dich selbst vergeben?',
          ],
          downloads: [],
        },
        {
          slug: 'vererbte-muster-erkennen',
          title: 'Vererbte Muster und Glaubenssätze erkennen',
          intro:
            'Manche unserer tiefsten Überzeugungen gehören gar nicht uns – sie wurden über Generationen weitergegeben.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 18,
          summary:
            'Indem du ererbte Glaubenssätze erkennst, beginnst du, sie bewusst zu verändern.',
          reflectionQuestions: [
            'Welcher Glaubenssatz über Geld, Liebe oder Sicherheit wurde dir mitgegeben?',
            'Dient dir dieser Glaubenssatz noch – oder begrenzt er dich?',
          ],
          downloads: [
            { title: 'Journal-Seiten Muster', fileUrl: '/downloads/journal-seiten.pdf' },
          ],
        },
        {
          slug: 'selbstwirksamkeit-entwickeln',
          title: 'Selbstwirksamkeit entwickeln',
          intro:
            'Heilung beginnt mit der Erkenntnis, dass du die Kraft hast, etwas zu verändern – in dir selbst.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 14,
          summary:
            'Selbstwirksamkeit ist der Glaube, dass deine Handlungen einen Unterschied machen. Diese Lektion gibt dir Werkzeuge, sie zu stärken.',
          reflectionQuestions: [
            'In welchem Bereich deines Lebens fühlst du dich kraftvoll?',
            'Wo möchtest du mehr Handlungsmacht gewinnen?',
          ],
          downloads: [],
        },
        {
          slug: 'erste-reflexionspraxis',
          title: 'Erste Reflexionspraxis',
          intro:
            'Jetzt geht es in die Praxis. Diese Lektion begleitet dich durch deine erste geführte Reflexionsübung.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 20,
          summary:
            'Mit regelmäßiger Reflexion schaffst du Raum für echte Transformation.',
          reflectionQuestions: [
            'Was hast du in dieser Reflexion über dich entdeckt?',
            'Was möchtest du als nächstes loslassen?',
          ],
          downloads: [
            { title: 'Übungsblatt Loslassen', fileUrl: '/downloads/uebungsblatt-loslassen.pdf' },
          ],
        },
      ],
    },
    {
      slug: 'grosse-arkana',
      title: 'Modul 2 – Große Arkana',
      description:
        'Die 22 Karten der Großen Arkana beschreiben den Weg der Seele. Lerne sie im Kontext von Karma und persönlichem Erbe kennen.',
      isBonus: false,
      lessons: [
        {
          slug: 'einfuehrung-grosse-arkana',
          title: 'Einführung in die Große Arkana',
          intro:
            'Die Große Arkana ist das Herz des Tarot-Decks – 22 Archetypen, die universelle menschliche Erfahrungen widerspiegeln.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 20,
          summary:
            'Jede Karte der Großen Arkana lädt uns ein, tiefer in unsere eigene Geschichte zu schauen.',
          reflectionQuestions: [
            'Welche Karte der Großen Arkana spricht dich intuitiv an?',
            'Welcher Archetyp resoniert mit deiner aktuellen Lebensphase?',
          ],
          downloads: [],
        },
        {
          slug: 'reise-durch-22-karten',
          title: 'Die Reise durch 22 Karten als Entwicklungsweg',
          intro:
            'Von Null (Der Narr) bis XXI (Die Welt) – die Große Arkana erzählt eine Geschichte von Aufbruch, Prüfung und Heimkommen.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 25,
          summary:
            'Der Weg durch die Große Arkana spiegelt unsere eigene Seelenwanderung wider.',
          reflectionQuestions: [
            'An welchem Punkt dieser Reise befindest du dich gerade?',
            'Welche Prüfung meisterst du gerade?',
          ],
          downloads: [],
        },
        {
          slug: 'karten-im-kontext-karma',
          title: 'Karten im Kontext von Karma und Erbe',
          intro:
            'Bestimmte Karten der Großen Arkana haben eine besondere Verbindung zu Karma, Ahnen und generationsübergreifenden Mustern.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 22,
          summary:
            'Das Rad des Schicksals, der Mond, der Stern – these Karten öffnen den Blick auf unsere tiefsten Muster.',
          reflectionQuestions: [
            'Welche Karten tauchen in deinen Legungen immer wieder auf?',
            'Was möchten sie dir zeigen?',
          ],
          downloads: [],
        },
        {
          slug: 'reflexion-und-anwendung-grosse-arkana',
          title: 'Reflexion und Anwendung',
          intro:
            'In dieser abschließenden Lektion zu Modul 2 setzen wir das Gelernte in eine persönliche Praxis um.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 18,
          summary:
            'Die Karten sind Spiegel – was sie zeigen, entscheidest du, was du damit machst, liegt in deiner Hand.',
          reflectionQuestions: [
            'Welche Erkenntnis aus diesem Modul berührt dich am tiefsten?',
            'Wie möchtest du die Große Arkana in deine persönliche Praxis integrieren?',
          ],
          downloads: [],
        },
      ],
    },
    {
      slug: 'muenzen',
      title: 'Modul 3 – Kleine Arkana: Münzen',
      description:
        'Die Münzen stehen für Materie, Sicherheit und Selbstwert. Entdecke, welche materiellen Muster dein Familiensystem geprägt haben.',
      isBonus: false,
      lessons: [
        {
          slug: 'bedeutung-der-muenzen',
          title: 'Bedeutung der Münzen',
          intro:
            'Die Münzen (Pentakel) repräsentieren unsere Beziehung zu Erde, Geld, Körper und materieller Sicherheit.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 15,
          summary:
            'Die Münzen laden uns ein, unsere Grundlagen zu stärken und unsere materielle Welt bewusst zu gestalten.',
          reflectionQuestions: [
            'Wie war die Beziehung zu Geld in deiner Kindheitsfamilie?',
            'Welche Überzeugungen über materielle Sicherheit wurden dir mitgegeben?',
          ],
          downloads: [],
        },
        {
          slug: 'materielle-muster-familiensystem',
          title: 'Materielle Muster im Familiensystem',
          intro:
            'Wie haben deine Vorfahren mit Geld, Besitz und Sicherheit umgegangen? Diese Muster beeinflussen uns oft unbewusst.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 18,
          summary:
            'Erkenne die materiellen Prägungen deiner Familie und entscheide bewusst, was du für dich übernimmst und was du loslässt.',
          reflectionQuestions: [
            'Welche Scarcity-Mindsets hast du geerbt?',
            'Wo blockierst du dich selbst in Bezug auf Wohlstand?',
          ],
          downloads: [],
        },
        {
          slug: 'sicherheit-selbstwert-stabilitaet',
          title: 'Sicherheit, Selbstwert, Stabilität',
          intro:
            'Selbstwert und materielle Sicherheit sind tief miteinander verwoben. Diese Lektion beleuchtet diese Verbindung.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 16,
          summary:
            'Echte Sicherheit entsteht von innen – sie beginnt damit, deinen eigenen Wert anzuerkennen.',
          reflectionQuestions: [
            'Woher beziehst du das Gefühl von Sicherheit?',
            'Was würde sich ändern, wenn du deinen inneren Wert vollständig anerkennst?',
          ],
          downloads: [],
        },
        {
          slug: 'praxisimpulse-muenzen',
          title: 'Praxisimpulse',
          intro:
            'Praktische Übungen und Kartenlegungen, die dir helfen, mit den Münzen in Resonanz zu gehen.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 15,
          summary:
            'Schließe dieses Modul mit einer kraftvollen Praxis ab, die deine Beziehung zu Sicherheit und Selbstwert stärkt.',
          reflectionQuestions: [
            'Was hast du in diesem Modul für dich entdeckt?',
            'Welchen einen Schritt in Richtung materieller Selbstfürsorge möchtest du gehen?',
          ],
          downloads: [],
        },
      ],
    },
    {
      slug: 'staebe',
      title: 'Modul 4 – Kleine Arkana: Stäbe',
      description:
        'Die Stäbe stehen für Feuer, Wille und Handlungskraft. Entdecke, wie du Energie aus deinem Familiensystem zurückholst.',
      isBonus: false,
      lessons: [
        {
          slug: 'bedeutung-der-staebe',
          title: 'Bedeutung der Stäbe',
          intro:
            'Die Stäbe repräsentieren Feuenergie – Passion, Kreativität, Initiative und Wandel.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 14,
          summary:
            'Die Stäbe rufen uns dazu auf, unsere eigene Flamme zu entfachen und mutig voranzugehen.',
          reflectionQuestions: [
            'Was entfacht deine Leidenschaft?',
            'Wo in deinem Leben wünschst du dir mehr Feuer und Energie?',
          ],
          downloads: [],
        },
        {
          slug: 'leistung-wille-handlungskraft',
          title: 'Leistung, Wille, Handlungskraft im Familiensystem',
          intro:
            'Wie wurde Leistung in deiner Familie bewertet? Wurden Einsatz und Wille gefeiert – oder erwartet?',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 17,
          summary:
            'Das Verständnis von Leistung in deinem Familiensystem hilft dir, deine eigene Handlungskraft zu befreien.',
          reflectionQuestions: [
            'Welche Botschaft hast du über Leistung und Arbeit mitbekommen?',
            'Überarbeitest du dich, weil du Wert durch Leistung beweisen möchtest?',
          ],
          downloads: [],
        },
        {
          slug: 'energie-zurueckholen',
          title: 'Energie zurückholen',
          intro:
            'Manchmal investieren wir Energie dort, wo sie nicht hingehört – in alte Rollenmuster, fremde Erwartungen oder vererbte Verpflichtungen.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 19,
          summary:
            'Deine Lebensenergie gehört dir. Diese Lektion zeigt dir, wie du sie bewusst zurückholst.',
          reflectionQuestions: [
            'Wo verlierst du am meisten Energie?',
            'Was würdest du tun, wenn du vollständig energetisch frei wärst?',
          ],
          downloads: [],
        },
        {
          slug: 'journaling-und-praxis-staebe',
          title: 'Journaling und Praxis',
          intro:
            'Schreibe, forsche, entdecke – eine geführte Journaling-Session zu den Themen des Feuers.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 20,
          summary:
            'Durch das Schreiben bringst du deine innere Flamme zum Leuchten.',
          reflectionQuestions: [
            'Was möchtest du jetzt aktiv in deinem Leben erschaffen?',
            'Welchen Schritt magst du morgen als erstes unternehmen?',
          ],
          downloads: [],
        },
      ],
    },
    {
      slug: 'kelche',
      title: 'Modul 5 – Kleine Arkana: Kelche',
      description:
        'Die Kelche stehen für Wasser, Emotionen und Beziehungen. Erkenne emotionale Verstrickungen und lerne loszulassen.',
      isBonus: false,
      lessons: [
        {
          slug: 'bedeutung-der-kelche',
          title: 'Bedeutung der Kelche',
          intro:
            'Die Kelche sind die Karten der Gefühle, der Träume, der Beziehungen – und der tiefen inneren Welt.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 13,
          summary:
            'Die Kelche laden uns ein, unsere emotionale Welt zu erforschen – mit Sanftheit und Neugier.',
          reflectionQuestions: [
            'Wie gut kennst du deine eigenen Emotionen?',
            'Erlaubst du dir, vollständig zu fühlen?',
          ],
          downloads: [],
        },
        {
          slug: 'emotionale-verstrickungen-erkennen',
          title: 'Emotionale Verstrickungen erkennen',
          intro:
            'Emotionale Verstrickungen entstehen, wenn wir Gefühle tragen, die nicht unsere sind – aus Loyalität, aus Schmerz oder aus Liebe.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 20,
          summary:
            'Das Erkennen emotionaler Erbschaften ist ein Akt der tiefen Selbstliebe.',
          reflectionQuestions: [
            'Welche Emotionen sind in deiner Familie nie ausgesprochen worden?',
            'Welche Gefühle trägst du, die möglicherweise nicht deins sind?',
          ],
          downloads: [],
        },
        {
          slug: 'herzoeffnung-und-loslassen',
          title: 'Herzöffnung und Loslassen',
          intro:
            'Loslassen ist keine Schwäche – es ist der kraftvollste Akt der Liebe, den wir uns selbst erweisen können.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 18,
          summary:
            'Mit einem offenen Herzen kannst du das Alte loslassen und Raum für Neues schaffen.',
          reflectionQuestions: [
            'Was trägst du mit dir, das du gerne loslassen würdest?',
            'Was braucht dein Herz, um sich zu öffnen?',
          ],
          downloads: [],
        },
        {
          slug: 'praxisimpulse-kelche',
          title: 'Praxisimpulse',
          intro:
            'Eine geführte Herzöffnungsmeditation und Überlegungen für deine persönliche Praxis.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 22,
          summary:
            'Dein Herz ist weit genug, um alles zu halten – und weise genug, um loszulassen.',
          reflectionQuestions: [
            'Was nimmst du aus diesem Modul mit?',
            'Wie zeigst du dir selbst Mitgefühl?',
          ],
          downloads: [],
        },
      ],
    },
    {
      slug: 'schwerter',
      title: 'Modul 6 – Kleine Arkana: Schwerter',
      description:
        'Die Schwerter stehen für Luft, Denken und Kommunikation. Erkenne vererbte Denkmuster und finde mentale Befreiung.',
      isBonus: false,
      lessons: [
        {
          slug: 'bedeutung-der-schwerter',
          title: 'Bedeutung der Schwerter',
          intro:
            'Die Schwerter sind die Karten des Geistes – sie zeigen, wie wir denken, kommunizieren und unsere Wahrheit sprechen.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 13,
          summary:
            'Die Schwerter fordern uns auf, klar zu denken und mutig unsere Wahrheit zu sprechen.',
          reflectionQuestions: [
            'Welche Gedanken beschäftigen dich immer wieder?',
            'Sprichst du offen, was du fühlst und denkst?',
          ],
          downloads: [],
        },
        {
          slug: 'vererbte-denkmuster-erkennen',
          title: 'Vererbte Denkmuster erkennen',
          intro:
            'Viele unserer Denkmuster stammen nicht aus uns selbst – sie wurden uns beigebracht, oft ohne böse Absicht.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 19,
          summary:
            'Das Erkennen vererbter Denkmuster ist der erste Schritt zu mentaler Freiheit.',
          reflectionQuestions: [
            'Welche negativen Überzeugungen wiederholen sich in deinen Gedanken?',
            'Woher stammen diese Überzeugungen?',
          ],
          downloads: [],
        },
        {
          slug: 'mentale-befreiung-neuorientierung',
          title: 'Mentale Befreiung und Neuorientierung',
          intro:
            'Du hast die Kraft, neue Gedankenwege zu bahnen. Diese Lektion zeigt dir, wie.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 17,
          summary:
            'Mentale Befreiung beginnt mit der bewussten Entscheidung, anders zu denken.',
          reflectionQuestions: [
            'Welchen Gedanken möchtest du bewusst loslassen?',
            'Welcher neue Gedanke soll an seine Stelle treten?',
          ],
          downloads: [],
        },
        {
          slug: 'integrationsübung-schwerter',
          title: 'Integrationsübung',
          intro:
            'Eine Schreibübung zur Integration der Erkenntnisse aus diesem Modul – klar, befreiend und präzise.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 18,
          summary:
            'Schreibe dei Weg in die Freiheit – ein Wort nach dem anderen.',
          reflectionQuestions: [
            'Welche mentale Klarheit hast du in diesem Modul gewonnen?',
            'Wie willst du in Zukunft mit inneren Kritikerstimmen umgehen?',
          ],
          downloads: [],
        },
      ],
    },
    {
      slug: 'integration',
      title: 'Modul 7 – Integration im Alltag',
      description:
        'Die Reise endet nicht mit dem letzten Video. Dieses Modul hilft dir, das Gelernte in deinen Alltag zu integrieren.',
      isBonus: false,
      lessons: [
        {
          slug: 'was-bleibt-nach-dem-kurs',
          title: 'Was bleibt nach dem Kurs?',
          intro:
            'Diese Frage ist wichtiger als die meisten denken. Was nimmst du mit – und wie trägst du es im Alltag?',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 14,
          summary:
            'Transformation braucht Zeit. Sie geschieht nicht in einem Moment, sondern in tausend kleinen Entscheidungen.',
          reflectionQuestions: [
            'Was hat sich während dieses Kurses in dir verändert?',
            'Welche Erkenntnis trifft dich am tiefsten?',
          ],
          downloads: [],
        },
        {
          slug: 'rituale-fuer-den-alltag',
          title: 'Rituale für den Alltag',
          intro:
            'Rituale sind Ankerpunkte in unserem Tag – sie bringen uns ins Spüren und erinnern uns, wer wir wirklich sind.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 16,
          summary:
            'Einfache, regelmäßige Rituale schaffen Raum für innere Gespräche und tiefe Einkehr.',
          reflectionQuestions: [
            'Welche kleinen Rituale könntest du in deinen Morgen oder Abend integrieren?',
            'Was erdet dich, wenn du dich verloren fühlst?',
          ],
          downloads: [
            { title: 'Integrationsplan', fileUrl: '/downloads/integrationsplan.pdf' },
          ],
        },
        {
          slug: 'eigene-praxis-aufbauen',
          title: 'Eigene Praxis aufbauen',
          intro:
            'Tarot ist kein Werkzeug für besondere Momente – er kann täglicher Begleiter sein.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 15,
          summary:
            'Eine eigene Tarot-Praxis aufzubauen bedeutet, eine ehrliche Verbindung mit dir selbst zu pflegen.',
          reflectionQuestions: [
            'Wie oft möchtest du Tarot in deine Reflexionspraxis einbauen?',
            'Welche Frage möchtest du täglich mit deinen Karten erforschen?',
          ],
          downloads: [],
        },
        {
          slug: 'rueckblick-und-ausblick',
          title: 'Rückblick und Ausblick',
          intro:
            'Wir blicken zurück auf deinen Weg – und richten den Blick gleichzeitig nach vorne.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 18,
          summary:
            'Jeder Schritt, den du gegangen bist, hat gezählt. Diese Reise gehört dir – und sie geht weiter.',
          reflectionQuestions: [
            'Worauf bist du in dir stolz?',
            'Was ist dein nächster Schritt auf deinem Weg?',
          ],
          downloads: [
            { title: '30-Tage-Journal', fileUrl: '/downloads/30-tage-journal.pdf' },
          ],
        },
      ],
    },
    {
      slug: 'legesysteme',
      title: 'Bonusmodul – Legesysteme',
      description:
        'Ein Geschenk für dich: Lerne kraftvolle Legesysteme kennen, die dir helfen, tiefer in deine Muster einzutauchen.',
      isBonus: true,
      lessons: [
        {
          slug: 'warum-legesysteme-helfen',
          title: 'Warum Legesysteme helfen',
          intro:
            'Legesysteme geben deiner Tarot-Praxis Struktur und Tiefe – sie sind der Rahmen, in dem die Karten sprechen.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 10,
          summary:
            'Ein gutes Legesystem stellt die richtigen Fragen – und lässt die Karten die Antworten zeigen.',
          reflectionQuestions: [
            'Welche Fragen brennen dir am stärksten auf der Seele?',
          ],
          downloads: [
            { title: 'Legesysteme-PDF', fileUrl: '/downloads/legesysteme.pdf' },
          ],
        },
        {
          slug: 'einfaches-3-karten-system',
          title: 'Einfaches 3-Karten-System',
          intro:
            'Das Drei-Karten-System ist der perfekte Einstieg – klar, kraftvoll und sofort anwendbar.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 12,
          summary:
            'Vergangenheit – Gegenwart – Zukunft. Oder: Situation – Herausforderung – Perspektive. So einfach, so wirkungsvoll.',
          reflectionQuestions: [
            'Welche drei Karten ziehst du heute für dich? Was sagen sie dir?',
          ],
          downloads: [],
        },
        {
          slug: 'legung-fuer-ahnenmuster',
          title: 'Legung für Ahnenmuster',
          intro:
            'Diese besondere Legung wurde speziell für die Arbeit mit Ahnenmustern und Familienerbschaften entwickelt.',
          mediaType: 'video',
          mediaUrl: '',
          durationMinutes: 20,
          summary:
            'Lass die Karten sprechen, was die Worte manchmal nicht können.',
          reflectionQuestions: [
            'Welche Erkenntnis über dein Familiensystem hat diese Legung gebracht?',
          ],
          downloads: [
            { title: 'Vorlage Legung', fileUrl: '/downloads/legung-vorlage.pdf' },
          ],
        },
        {
          slug: 'legung-fuer-loslassen',
          title: 'Legung für Loslassen und Integration',
          intro:
            'Eine abschließende Legung, die dir hilft, deine Reise zu integrieren und in die Zukunft zu blicken.',
          mediaType: 'audio',
          mediaUrl: '',
          durationMinutes: 22,
          summary:
            'Du hast so weit gekommen. Diese Legung ehrt deinen Weg und zeigt dir den nächsten Schritt.',
          reflectionQuestions: [
            'Was lässt du hinter dir?',
            'Was nimmst du mit?',
            'Was wartet vor dir?',
          ],
          downloads: [],
        },
      ],
    },
  ],
};

export function findLesson(lessonSlug: string) {
  for (const mod of course.modules) {
    const lesson = mod.lessons.find((l) => l.slug === lessonSlug);
    if (lesson) return { lesson, module: mod };
  }
  return null;
}

export function findModule(moduleSlug: string) {
  return course.modules.find((m) => m.slug === moduleSlug) ?? null;
}

export function getLessonNeighbors(lessonSlug: string) {
  const allLessons = course.modules.flatMap((m) =>
    m.lessons.map((l) => ({ ...l, moduleSlug: m.slug }))
  );
  const idx = allLessons.findIndex((l) => l.slug === lessonSlug);
  return {
    prev: idx > 0 ? allLessons[idx - 1] : null,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : null,
  };
}
