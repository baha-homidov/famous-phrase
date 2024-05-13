const quotes = [
  {
    nameEn: "Mason Cooley",
    textEn:
      "The most important thing in communication is hearing what isn't said.",
    nameRu: "Мейсон Кули",
    textRu: "Самое важное в общении - это слышать то, что не сказано.",
  },
  {
    nameEn: "George Carlin",
    textEn:
      "Have you ever noticed that anyone driving slower than you is an idiot, and anyone driving faster than you is a maniac?",
    nameRu: "Джордж Карлин",
    textRu:
      "Замечали ли вы, что любой, кто едет медленнее вас, - идиот, а кто едет быстрее - маньяк?",
  },
  {
    nameEn: "Rebecca Solnit",
    textEn: "The silence between people is often the loudest sound of all.",
    nameRu: "Ребекка Солнит",
    textRu: "Молчание между людьми часто бывает самым громким звуком.",
  },
  {
    nameEn: "C.S. Lewis",
    textEn:
      "We do not want merely to see beauty... we want something else which can hardly be put into words—to be united with the beauty we see, to pass into it, to receive it into ourselves, to bathe in it, to become part of it.",
    nameRu: "К.С. Льюис",
    textRu:
      "Мы не хотим просто видеть красоту... мы хотим еще чего-то, что едва ли может быть выражено словами - быть объединенными с красотой, которую мы видим, проникнуть в нее, принять ее в себя, окунуться в нее, стать ее частью.",
  },
  {
    nameEn: "Erwin Schrödinger",
    textEn:
      "The world is not a collection of distinct objects, but a continuum, where all things are interconnected.",
    nameRu: "Эрвин Шрёдингер",
    textRu:
      "Мир - это не совокупность отдельных объектов, а континуум, где все вещи взаимосвязаны.",
  },
  {
    nameEn: "Anaïs Nin",
    textEn: "We don't see things as they are, we see them as we are.",
    nameRu: "Анаис Нин",
    textRu:
      "Мы не видим вещи такими, как они есть, мы видим их такими, какие мы сами есть.",
  },
  {
    nameEn: "William James",
    textEn:
      "The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind.",
    nameRu: "Уильям Джеймс",
    textRu:
      "Самое важное открытие моего поколения заключается в том, что человек может изменить свою жизнь, изменив свои убеждения.",
  },
  {
    nameEn: "Suzanne Langer",
    textEn: "The only thing that interferes with my learning is my education.",
    nameRu: "Сюзанна Лэнгер",
    textRu: "Единственное, что мешает моему обучению - это мое образование.",
  },
  {
    nameEn: "John Cage",
    textEn: "The silence is not actually silent, but full of unheard sounds.",
    nameRu: "Джон Кейдж",
    textRu:
      "Молчание на самом деле не безмолвно, а полно невыслушанных звуков.",
  },
  {
    nameEn: "Rumi",
    textEn:
      "Raise your words, not your voice. It is rain that grows flowers, not thunder.",
    nameRu: "Руми",
    textRu:
      "Поднимайте свои слова, а не голос. Это дождь растит цветы, а не гром.",
  },
  {
    nameEn: "George Bernard Shaw",
    textEn:
      "When I am working on a problem, I never think about how to make it more 'interesting' or 'useful'. Only one thing counts: the solution of the problem.",
    nameRu: "Джордж Бернард Шоу",
    textRu:
      "Когда я работаю над проблемой, я никогда не думаю о том, как сделать ее более 'интересной' или 'полезной'. Есть только одно: решение проблемы.",
  },
  {
    nameEn: "Erich Fromm",
    textEn:
      "The most important thing in life is to learn how to give out love, and let it come in.",
    nameRu: "Эрих Фромм",
    textRu:
      "Самое важное в жизни - научиться отдавать любовь и позволить ей приходить к вам.",
  },
  {
    nameEn: "Pablo Picasso",
    textEn:
      "Every child is an artist, the problem is how to remain an artist once we grow up.",
    nameRu: "Пабло Пикассо",
    textRu:
      "Каждый ребенок - художник, проблема в том, как остаться художником, когда мы вырастем.",
  },
  {
    nameEn: "Jiddu Krishnamurti",
    textEn:
      "The highest form of intelligence is the ability to observe yourself without judgment.",
    nameRu: "Джидду Кришнамурти",
    textRu:
      "Самая высшая форма интеллекта - это способность наблюдать за собой без суждения.",
  },
  {
    nameEn: "Marie Curie",
    textEn:
      "One never notices what has been done; one can only see what remains to be done.",
    nameRu: "Мария Кюри",
    textRu:
      "Никогда не замечаешь того, что было сделано; можно лишь видеть, что осталось сделать.",
  },
  {
    nameEn: "Carl Sagan",
    textEn: "Somewhere, something incredible is waiting to be known.",
    nameRu: "Карл Саган",
    textRu: "Где-то, что-то невероятное ждет, чтобы быть открытым.",
  },
  {
    nameEn: "Virginia Woolf",
    textEn: "For most of history, Anonymous was a woman.",
    nameRu: "Вирджиния Вульф",
    textRu: "Большую часть истории Аноним была женщиной.",
  },
  {
    nameEn: "Buckminster Fuller",
    textEn:
      "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",
    nameRu: "Бакминстер Фуллер",
    textRu:
      "Вы никогда не измените вещи, сражаясь с существующей реальностью. Чтобы изменить что-то, создайте новую модель, которая сделает существующую модель устаревшей.",
  },
  {
    nameEn: "Frida Kahlo",
    textEn:
      "The only thing I know is that I paint because I need to, and I paint whatever passes through my head without any other consideration.",
    nameRu: "Фрида Кало",
    textRu:
      "Единственное, что я знаю, это то, что я рисую, потому что мне это нужно, и я рисую все, что приходит мне в голову, без каких-либо других соображений.",
  },
  {
    nameEn: "Albert Camus",
    textEn:
      "In the depth of winter, I finally learned that within me there lay an invincible summer.",
    nameRu: "Альбер Камю",
    textRu:
      "В глубине зимы я наконец понял, что внутри меня лежит непобедимое лето.",
  },
  {
    nameEn: "Georgia O'Keeffe",
    textEn:
      "Nobody sees a flower, really—it is so small—we haven't time, and to see takes time, like to have a friend takes time.",
    nameRu: "Джорджия О'Киф",
    textRu:
      "Никто на самом деле не видит цветок - он настолько мал, у нас нет времени, и чтобы увидеть, нужно время, как чтобы завести друга, нужно время.",
  },
  {
    nameEn: "Henry Miller",
    textEn:
      "The world is not to be put in order; the world is order, incarnate. It is for us to put ourselves in harmony with this order.",
    nameRu: "Генри Миллер",
    textRu:
      "Мир не нужно приводить в порядок; мир - это порядок, воплощенный. Нам нужно привести себя в гармонию с этим порядком.",
  },
  {
    nameEn: "Simone de Beauvoir",
    textEn:
      "One's life has value so long as one attributes value to the life of others.",
    nameRu: "Симона де Бовуар",
    textRu:
      "Жизнь имеет ценность только до тех пор, пока человек придает ценность жизни других.",
  },
  {
    nameEn: "Ralph Waldo Emerson",
    textEn:
      "The invariable mark of wisdom is to see the miraculous in the common.",
    nameRu: "Ральф Уолдо Эмерсон",
    textRu:
      "Неизменным признаком мудрости является умение видеть чудо в обыденном.",
  },
  {
    nameEn: "Eckhart Tolle",
    textEn:
      "The primary cause of unhappiness is never the situation but rather the thoughts about it.",
    nameRu: "Экхарт Толле",
    textRu:
      "Основная причина несчастья никогда не в ситуации, а скорее в мыслях о ней.",
  },
  {
    nameEn: "Marcel Proust",
    textEn: "The only true memory is the memory of the heart.",
    nameRu: "Марсель Пруст",
    textRu: "Единственная истинная память - это память сердца.",
  },
  {
    nameEn: "Lao Tzu",
    textEn: "Knowing others is intelligence; knowing yourself is true wisdom.",
    nameRu: "Лао Цзы",
    textRu: "Знать других - это интеллект; знать себя - это истинная мудрость.",
  },
  {
    nameEn: "Charles Bukowski",
    textEn:
      "Some people never go crazy. What truly horrible lives they must lead.",
    nameRu: "Чарльз Буковски",
    textRu:
      "Некоторые люди никогда не сходят с ума. Какие ужасные жизни они, должно быть, ведут.",
  },
  {
    nameEn: "Ayn Rand",
    textEn:
      "The question isn't who is going to let me; it's who is going to stop me.",
    nameRu: "Айн Рэнд",
    textRu:
      "Вопрос не в том, кто меня позволит; вопрос в том, кто меня остановит.",
  },
  {
    nameEn: "Khalil Gibran",
    textEn:
      "March on. Do not tarry. To go forward is to move toward perfection. March on, and fear not the thorns, or the sharp rocks on life's path.",
    nameRu: "Халиль Джубран",
    textRu:
      "Иди вперед. Не медли. Идти вперед - значит двигаться к совершенству. Иди вперед и не бойся шипов или острых камней на пути жизни.",
  },
  {
    nameEn: "Jean-Paul Sartre",
    textEn:
      "Man is condemned to be free; because once thrown into the world, he is forced to choose.",
    nameRu: "Жан-Поль Сартр",
    textRu:
      "Человек обречен быть свободным; потому что, однажды брошенный в мир, он вынужден выбирать.",
  },
  {
    nameEn: "Emily Dickinson",
    textEn:
      "Hope is the thing with feathers—That perches in our Soul—And sings the Tune without the words—And never stops—at all—",
    nameRu: "Эмили Дикинсон",
    textRu:
      "Надежда - это вещь с перьями, что засиживается в нашей Душе - И поет Мелодию без слов - И никогда не прекращается - вообще -",
  },
  {
    nameEn: "T.S. Eliot",
    textEn:
      "We shall not cease from exploration, and the end of all our exploring will be to arrive where we started and know the place for the first time.",
    nameRu: "Т.С. Элиот",
    textRu:
      "Мы не прекратим исследований, и концом всех наших исследований будет прийти к тому, где мы начали, и впервые узнаем это место.",
  },
  {
    nameEn: "Mahatma Gandhi",
    textEn:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    nameRu: "Махатма Ганди",
    textRu:
      "Живите так, будто вы умрете завтра. Учитесь так, будто вы будете жить вечно.",
  },
  {
    nameEn: "Walt Whitman",
    textEn:
      "Do I contradict myself? Very well then I contradict myself. I am large, I contain multitudes.",
    nameRu: "Уолт Уитмен",
    textRu:
      "Противоречу ли я себе? Очень хорошо, тогда я противоречу себе. Я велик, я содержу множества.",
  },
  {
    nameEn: "Sigmund Freud",
    textEn:
      "The unexamined life is not worth living, but the unlived life is not worth examining.",
    nameRu: "Зигмунд Фрейд",
    textRu:
      "Неисследованная жизнь не стоит того, чтобы жить, но не прожитая жизнь не стоит того, чтобы исследовать.",
  },
  {
    nameEn: "Martin Heidegger",
    textEn: "Being is not a static condition but a dynamic process.",
    nameRu: "Мартин Хайдеггер",
    textRu: "Бытие - это не статическое состояние, а динамический процесс.",
  },
  {
    nameEn: "Alice Walker",
    textEn:
      "The most common way people give up their power is by thinking they don't have any.",
    nameRu: "Элис Уокер",
    textRu:
      "Самый распространенный способ, которым люди отказываются от своей силы, это думать, что у них ее нет.",
  },
  {
    nameEn: "Fyodor Dostoevsky",
    textEn:
      "The mystery of human existence lies not in just staying alive, but in finding something to live for.",
    nameRu: "Федор Достоевский",
    textRu:
      "Тайна человеческого существования не заключается в том, чтобы просто оставаться в живых, а в том, чтобы найти что-то, ради чего стоит жить.",
  },
];

export default quotes;
