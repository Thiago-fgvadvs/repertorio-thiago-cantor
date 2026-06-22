var $=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var F=Object.getOwnPropertySymbols;var ne=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var V=(e,n,a)=>n in e?$(e,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[n]=a,k=(e,n)=>{for(var a in n||(n={}))ne.call(n,a)&&V(e,a,n[a]);if(F)for(var a of F(n))ae.call(n,a)&&V(e,a,n[a]);return e},O=(e,n)=>Z(e,ee(n));const{useState,useEffect,useMemo,useRef,useCallback}=React,_ic=e=>n=>(n=n||{},React.createElement("svg",{width:n.size||22,height:n.size||22,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:n.className,style:n.style,"aria-hidden":"true",dangerouslySetInnerHTML:{__html:e}})),Music=_ic('<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>'),Search=_ic('<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>'),ListMusic=_ic('<path d="M21 15V6"/><path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M12 12H3"/><path d="M16 6H3"/><path d="M12 18H3"/>'),Settings=_ic('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>'),Play=_ic('<polygon points="6 3 20 12 6 21 6 3"/>'),Plus=_ic('<path d="M5 12h14"/><path d="M12 5v14"/>'),Trash2=_ic('<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>'),Pencil=_ic('<path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/><path d="m15 5 4 4"/>'),ChevronLeft=_ic('<path d="m15 18-6-6 6-6"/>'),ChevronRight=_ic('<path d="m9 18 6-6-6-6"/>'),Save=_ic('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>'),X=_ic('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),ExternalLink=_ic('<path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>'),Minus=_ic('<path d="M5 12h14"/>'),Type=_ic('<polyline points="4 7 4 4 20 4 20 7"/><line x1="9" x2="15" y1="20" y2="20"/><line x1="12" x2="12" y1="4" y2="20"/>'),Pause=_ic('<rect x="14" y="4" width="4" height="16" rx="1"/><rect x="6" y="4" width="4" height="16" rx="1"/>'),ArrowUp=_ic('<path d="m5 12 7-7 7 7"/><path d="M12 19V5"/>'),ArrowDown=_ic('<path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>'),Check=_ic('<path d="M20 6 9 17l-5-5"/>'),FileText=_ic('<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>'),Upload=_ic('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/>'),Lock=_ic('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'),Unlock=_ic('<rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'),Spotify=_ic('<circle cx="12" cy="12" r="10"/><path d="M7.5 14.5c2.5-1 6-0.8 8.5 0.7"/><path d="M7 11.3c3-1.1 7-0.9 10 1"/><path d="M7.2 8.2c3.4-1.1 7.6-0.8 10.3 1.1"/>'),Tag=_ic('<path d="M12.6 2.6A2 2 0 0 0 11.2 2H4a2 2 0 0 0-2 2v7.2a2 2 0 0 0 .6 1.4l8.8 8.8a2 2 0 0 0 2.8 0l6.4-6.4a2 2 0 0 0 0-2.8z"/><circle cx="7.5" cy="7.5" r="1.5" fill="currentColor"/>'),SB=window.supabase.createClient(window.SUPA_URL,window.SUPA_KEY),C={bg:"#0c1622",card:"#13243a",card2:"#1b3350",line:"#2b4a66",txt:"#eef5ff",mut:"#9db4d4",gold:"#ffd24d",rose:"#ff8aa6",violet:"#9b8cff",green:"#1ed760",danger:"#ff6b8a",blue:"#5fb0ff"},SEED={songs:[{id:"imagine",t:"Imagine",artist:"John Lennon",pri:"Rock",tags:["Rock"],lyrics:`Imagine there's no heaven
It's easy if you try
No hell below us
Above us only sky

Imagine all the people  Living for today

Imagine there's no countries
It isn't hard to do
Nothing to kill or die for
And no religion too

Imagine all the people  Living life in peace

You may say, I'm a dreamer
But I'm not the only one
I hope some day you'll join us
And the world will be as one

Imagine no possessions
I wonder if you can
No need for greed or hunger
A Brotherhood of man

Imagine all the people Sharing all the world

You may say, I'm a dreamer
But I'm not the only one
I hope some day you'll join us
And the world will live as one`,sp:"",sps:"https://open.spotify.com/search/Imagine%20John%20Lennon"},{id:"livin-on-a-prayer",t:"Livin' On A Prayer",artist:"Bon Jovi",pri:"Rock",tags:["Rock"],lyrics:`Tommy used to work on the docks
Union's been on strike
He's down on his luck... it's tough, so tough

Gina works the diner all day
Working for her man, she brings home her pay For love - for love

She says: We've got to hold on to what we've got
'Cause it doesn't make a difference
If we make it or not
We've got each other and that's a lot
For love - we'll give it a shot

Oh, we're half way there
Whoah, livin' on a prayer
Take my hand, we'll make it, I swear
Whoah, livin' on a prayer

Tommy got his six string in hock
Now he's holding in what he used
To make it talk - so tough, it's tough
Gina dreams of running away
she cries in the night
Tommy whispers: Baby it's okay, someday

We've got to hold on to what we've got
'Cause it doesn't make a difference
If we make it or not
We've got each other and that's a lot
For love - we'll give it a shot

Oh, We're half way there
Whoah, Livin' On A Prayer
Take my hand, we'll make it, I swear
Whoah, Livin' On A Prayer
Livin' on a prayer

We've got to hold on ready or not
You live for the fight when that's all that you've got

Oh, we're half way there
Whoah, livin' on a prayer
Take my hand, we'll make it, I swear
Whoah, livin' on a prayer

Oh, we're half way there
Whoah, livin' on a prayer
Take my hand, we'll make it, I swear
Whoah, livin' on a prayer`,sp:"",sps:"https://open.spotify.com/search/Livin%27%20On%20A%20Prayer%20Bon%20Jovi"},{id:"viva-la-vida",t:"Viva La Vida",artist:"Coldplay",pri:"Rock",tags:["Rock"],lyrics:`I used to rule the world
Seas would rise when I gave the word
Now in the morning I sleep alone
Sweep the streets that I used to own

I used to roll the dice
Feel the fear in my enemy's eyes
Listen as the crowd would sing:
"Now the old king is dead!
Long live the king!"

One minute I held the key
Next the walls were closed on me
And I discovered that my castles stand
Upon pillars of salt and pillars of sand

I hear Jerusalem bells are ringing
Roman Cavalry choirs are singing
Be my mirror my sword and shield
My missionaries in a foreign field
For some reason I can't explain
Once you go there was never
Never an honest word
That was when I ruled the world

It was the wicked and wild wind
Blew down the doors to let me in
Shattered windows and the sound of drums
People couldn't believe what I'd become

Revolutionaries wait
For my head on a silver plate
Just a puppet on a lonely string
Oh who would ever want to be king?

I hear Jerusalem bells a ringing
Roman Cavalry choirs are singing
Be my mirror my sword and shield
My missionaries in a foreign field
For some reason I can't explain
I know Saint Peter won't call my name
Never an honest word
But that was when I ruled the world

I hear Jerusalem bells a ringing
Roman Cavalry choirs are singing
Be my mirror my sword and shield
My missionaries in a foreign field
For some reason I can't explain
I know Saint Peter will call my name
Never an honest word
But that was when I ruled the world`,sp:"",sps:"https://open.spotify.com/search/Viva%20La%20Vida%20Coldplay"},{id:"clocks",t:"Clocks",artist:"Coldplay",pri:"Rock",tags:["Rock"],lyrics:`Lights go out and I can't be saved
Tides that I tried to swim against
Bought me down upon my knees
Oh I beg, I beg and I plead
Singing
Come out things unsaid
Shoot an apple of my head
And a
trouble that can't be named
A tiger's waiting to be tamed
Singing

You are, you are

Confusion that never stops
closing walls and ticking clocks
Gonna
Come back and take you home
I could not stop, that you now know
Singing
Come out upon my seas
Cursed missed opportunities
Am I
a part of the cure?
Or am I part of the disease?
Singing

You are, you are  You are, you are

You are, you are

And nothing else compares
Oh! no, nothing else compares
And nothing else compares

You are, you are

Home, home where I wanted to go
Home, home where I wanted to go
Home (You are), home where I wanted to go
Home (You are), home where I wanted to go`,sp:"",sps:"https://open.spotify.com/search/Clocks%20Coldplay"},{id:"oh-pretty-woman",t:"Oh, Pretty Woman",artist:"Roy Orbison",pri:"Rock",tags:["Rock"],lyrics:`Pretty woman, walkin' down the street, pretty woman
The kind I like to meet, pretty woman
I don't believe you, you're not the truth
No one could look as good as you. Mercy!

Pretty woman, Won't you pardon me? Pretty woman,
I couldn't help but see, pretty woman, that you look lovely as can be.
Are you lonely just like me?  Wow!

Pretty woman, stop awhile.
Pretty woman, talk awhile
Pretty woman, give your smile to me.
Pretty woman, yeah, yeah, yeah
Pretty woman, look my way
Pretty woman, say you'll stay with me

'Cause I need you, I'll treat you right
Come with me baby, be mine tonight
Pretty woman, don't walk on by
Pretty woman, don't make me cry
Pretty woman, don't walk away, Hey, O.K.
If that's the way it must be, O.K.
I guess I'll go on home. It's late.
There'll be tomorrow night, but wait!
What do I see? Is she walking back to me?
Yeah, she's walking back to me,
Oh, oh, pretty woman`,sp:"",sps:"https://open.spotify.com/search/Oh%2C%20Pretty%20Woman%20Roy%20Orbison"},{id:"copacabana",t:"Copacabana",artist:"Renaud (vers. francesa)",pri:"Diversos",tags:["Diversos"],lyrics:`Elle s'appelait Lola, elle \xE9tait Show Girl
Avec ses plumes et son chapeau
Sa robe fendue de bas en haut
Elle dansait chantait
Cha-cha meringu\xE9

Quand elle r\xEAvait d'\xEAtre une star
Tony tenait le bar
Sur la piste bond\xE9e, Lola se d\xE9cha\xEEnait
Ils s'aimaient tellement tous les deux
Qu'ils \xE9taient heureux

L\xE0 au Copa Copacabana
Le coin le plus chaud
de La Havana
L\xE0 au Copa Copacabana
Passion et musique ce sont des mots magiques
L\xE0 au Copa

Comme ils s'aimaient

Un soir vint Rico, en Borsalino
Escort\xE9 par toute sa mafia
Il venait voir danser Lola
Quand elle eu fini, il l'appela vers lui
Rico allant un peu trop loin,
Alors Tony sera les poings
Sautant par dessus le bar,
D\xE9clancha la bagarre
Un coup de feu, du sang et des cris,
Qui tua Tony

L\xE0 au Copa Copacabana
Le coin le plus chaud
de La Havana
L\xE0 au Copa Copacabana
Passion et musique ce sont des mots magiques
L\xE0 au Copa

Comme elle pleurait

Elle s'appelait Lola elle \xE9tait Show Girl
Mais il y a 20 ans de \xE7a
Y avait des shows dans ce temps-l\xE0
Maintenant c'est Disco
Mais pas pour Lola
Quand elle r\xEAvait d'\xEAtre une star
Tony tenait le bar

{au Refrain}`,sp:"",sps:"https://open.spotify.com/search/Copacabana%20Renaud%20%28vers.%20francesa%29"},{id:"corazon-partio",t:"Coraz\xF3n Part\xEDo",artist:"Alejandro Sanz",pri:"Latina",tags:["Latina"],lyrics:`Tiritas pa este coraz\xF3n part\xEDo.
Ti-ri-ti-tando de frio
Tiritas pa este coraz\xF3n part\xEDo,
Pa este coraz\xF3n

Ya lo ves, que no hay dos sin tres,
que la vida va y viene y que no se detiene...
Y, qu\xE9 s\xE9 yo,
pero mi\xE9nteme aun que sea, dime que algo queda entre nosotros dos, que en tu habitaci\xF3n
nunca sale el sol, ni existe el tiempo, ni el dolor.

Ll\xE9vame si quieres a perder,
a ning\xFAn destino, sin ning\xFAn por qu\xE9.

Ya lo s\xE9, que coraz\xF3n que no ve
es coraz\xF3n que no siente,
o coraz\xF3n que te miente amor.

Pero, sabes que en lo m\xE1s profundo de mi alma
sigue aquel dolor por creer en ti
\xBFqu\xE9 fue de la ilusi\xF3n y de lo bello que es vivir?

\xBFPara qu\xE9 me curaste cuando estaba herido
si hoy me dejas de nuevo el coraz\xF3n part\xEDo?

\xBFQui\xE9n me va a entregar sus emociones?
\xBFQui\xE9n me va a pedir que nunca le abandone?
\xBFQui\xE9n me tapar\xE1 esta noche si hace fr\xEDo?
\xBFQui\xE9n me va a curar el coraz\xF3n part\xEDo?
\xBFQui\xE9n llenar\xE1 de primaveras este enero,
y bajar\xE1 la luna para que juguemos?
Dime, si t\xFA te vas, dime cari\xF1o m\xEDo,
\xBFqui\xE9n me va a curar el coraz\xF3n part\xEDo?

Tiritas pa este coraz\xF3n part\xEDo.
Tiritas pa este coraz\xF3n part\xEDo.

Dar solamente aquello que te sobra
nunca fue compartir, sino dar limosna, amor.
Si no lo sabes t\xFA, te lo digo yo.
Despu\xE9s de la tormenta siempre llega la calma.
pero, s\xE9 que despu\xE9s de ti,
despu\xE9s de ti no hay nada.

\xBFPara qu\xE9 me curaste cuando estaba herido
si hoy me dejas de nuevo el coraz\xF3n part\xEDo?

\xBFQui\xE9n me va a entregar sus emociones?
\xBFQui\xE9n me va a pedir que nunca le abandone?
\xBFQui\xE9n me tapar\xE1 esta noche si hace fr\xEDo?
\xBFQui\xE9n me va a curar el coraz\xF3n part\xEDo?
\xBFQui\xE9n llenar\xE1 de primaveras este enero,
y bajar\xE1 la luna para que juguemos?
Dime, si t\xFA te vas, dime cari\xF1o m\xEDo,
\xBFqui\xE9n me va a curar el coraz\xF3n part\xEDo?

\xBFQui\xE9n me va a entregar ...`,sp:"",sps:"https://open.spotify.com/search/Coraz%C3%B3n%20Part%C3%ADo%20Alejandro%20Sanz"},{id:"with-arms-wide-open",t:"With Arms Wide Open",artist:"Creed",pri:"Rock",tags:["Rock"],lyrics:`Well I just heard, the news today
It seems my life, is going to change
I close my eyes, begin to pray
Then tears of joy, stream down my face

With arms wide open Under the sunlight
Welcome to this place I'll show you everything
With arms wide open,  With arms wide open

Well I don't know, if I'm ready
To be the man, I have to be
I'll take a breath, I'll take her by my side
We stand in awe, we've created life

With arms wide open Under the sunlight
Welcome to this place  I'll show you everything
With arms wide open Now everything has changed
I'll show you love   I'll show you everything
With arms wide open      wide open

If I had just one wish  Only one demand
I hope he's not like me
I hope he understands
That he can take this life
And hold it by the hand
And he can greet the world
With arms wide open

With Arms wide open  Under the sunlight
Welcome to this place  I'll show you everything
With arms wide open
Now everything has changed
I'll show you love
I'll show you everything
With arms wide open

With arms wide open
I'll show you everything oh yeah
With arms wide open
wide open`,sp:"",sps:"https://open.spotify.com/search/With%20Arms%20Wide%20Open%20Creed"},{id:"i-just-wanna-stop",t:"I Just Wanna Stop",artist:"Gino Vannelli",pri:"Balada",tags:["Balada","Diversos"],lyrics:`For your love
When I think about those nights in Montreal
I get the sweetest thoughts of you and me
Memories of love above the city lights
Ooh, I tried so hard to take it
But oh Lord my heart won't make it

I just wanna stop
And tell you what I feel about you babe
I just wanna stop
I never wanna live without you babe
I just gotta stop   For your love

When I think about the way the world must turn
I get the saddest thoughts for you and me
Memories of life and times go on and on
Ooh, I've tried hard to forget it
But of Lord my mind won't let it

I just wanna stop
And tell you what I feel about you babe
I just wanna stop
The world ain't right without you babe
I just wanna stop For your love  (Solo)

Ooo, I've tried so hard to take it
But oh Lord my heart won't make it

I just wanna stop
And tell you what I feel about you babe
I just wanna stop
The world ain't right without you babe
I just wanna stop`,sp:"",sps:"https://open.spotify.com/search/I%20Just%20Wanna%20Stop%20Gino%20Vannelli"},{id:"i-say-a-little-prayer",t:"I Say A Little Prayer",artist:"Diana King",pri:"Diversos",tags:["Diversos"],lyrics:`The moment I wake up,
before I put on my make up
I say a little prayer for you
While combing my hair now
And wonderin' what dress to wear now
I say a little prayer for you

Forever and ever you'll stay in my heart
And I will love you forever and ever
We never will part and I will love you
Together, forever that's how it should be
To live without you could only mean heartbreak for me

I run for the bus love,
while riding I think of us, love
And say a little prayer for you
At work I just take time, and all through my coffee break time
I say a little prayer for you

Chorus

Darlin' believe me, for me there is no one but you
Say you love me too`,sp:"",sps:"https://open.spotify.com/search/I%20Say%20A%20Little%20Prayer%20Diana%20King"},{id:"i-was-born-to-love-you",t:"I Was Born To Love You",artist:"Queen",pri:"Rock",tags:["Ax\xE9","Bahia","Rock"],lyrics:`I was born to love you
With every single beat of my heart
Yes, I was born to take care of you
Every single day...

I was born to love you
With every single beat of my heart
Yes, I was born to take care of you
Every single day of my life

You are the one for me
I am the man for you
You were made for me
you're my ecstasy
If I was give every opportunity
I'd kill for your love

So take a chance with me
Let me romance with you
I'm caught in a dream And my dream's come true
It's so hard to believeThis is happening to me
An amazing feeling Comin' through -

I was born to love you
With every single beat of my heart
Yes, I was born to take care of you
Every single day of my life

I wanna love you
I love every little thing about you
I wanna love you, love you, love you
Born - to love you
Born - to love you  Yes I was born to love you
Born - to love you
Born - to love you Every single day - of my life

An amazing feeling
Comin' through

I was born to love you
With every single beat of my heart
Yes, I was born to take care of you
Every single day of my life

Yes I was born to love you
Every single day,of my life

Go, I love you babe
Yes, I was born to love you
I wanna love you, love you, love you
I wanna love you
I get so lonely, lonely, lonely, lonely
Yeah, I want to love you
Yeah, give it to me`,sp:"",sps:"https://open.spotify.com/search/I%20Was%20Born%20To%20Love%20You%20Queen"},{id:"aicha",t:"A\xEFcha",artist:"Khaled",pri:"Internacional",tags:["Internacional"],lyrics:`Comme si je n'existais pas,
elle est pass\xE9e \xE0 c\xF4t\xE9 de moi
Sans un regard, reine de Saba,
j'ai dit, A\xEFcha, prends, tout est pour toi

Voici, les perles, les bijoux,
aussi l'or autour de ton cou
Les fruits, biens m\xFBrs au go\xFBt de miel,
ma vie, Aicha si tu m'aimes!

J'irai o\xF9 ton souffle nous m\xE8ne,
dans les pays d'ivoire et d'\xE9b\xE8ne
J'effacerais tes larmes, tes peines,
rien n'est trop beau pour une si belle

A\xEFcha, A\xEFcha \xE9coute-moi,
A\xEFcha, A\xEFcha t'en vas pas,
A\xEFcha, A\xEFcha regarde moi,
A\xEFcha, A\xEFcha reponds-moi

Je dirais les mots les po\xE8mes,
je jouerais les musiques du ciel,
je prendrais les rayons du soleil,
pour \xE9lairer tes yeux de r\xEAves

Oooh! A\xEFcha, A\xEFcha \xE9coute-moi,
A\xEFcha, A\xEFcha t'en vas pas

Elle a dit: "Garde tes tr\xE9sors,
moi, je vaux mieux que tout \xE7a.
Des barreaux sont des barreaux m\xEAme en or
Je veux les m\xEAmes droits que toi
Et du respect pour chaque jour,
moi je ne veux que l'amour"`,sp:"",sps:"https://open.spotify.com/search/A%C3%AFcha%20Khaled"},{id:"ca-fait-rire-les-oiseaux",t:"\xC7a Fait Rire Les Oiseaux",artist:"La Compagnie Cr\xE9ole",pri:"Diversos",tags:["Diversos"],lyrics:`\xC7a fait rir' les oiseaux.
\xC7a fait chanter les abeilles.
\xC7a chasse les nuages Et fait briller le soleil.
\xC7a fait rir' les oiseaux Et danser les \xE9cureuils.
\xC7a rajoute des couleurs Aux couleurs de
l'arc-en-ciel.
\xC7a fait rir' les oiseaux, Oh, oh, oh,
rir' les oiseaux
\xC7a fait rir' les oiseaux, Oh, oh, oh,
rir' les oiseaux.

Une chanson d'amour,
C'est comme un looping en avion :
\xC7a fait battre le c\u0153ur Des filles et des gar\xE7ons.

Une chanson d'amour, C'est l'oxyg\xE8n' dans la maison.
Tes pieds n'touch'nt plus par terre.T'es en l\xE9vitation.
Si y a d' la pluie dans ta vie,Le soir te fait peur.

La musique est l\xE0 pour \xE7a.
Y a toujours une m\xE9lodiePour des jours meilleurs.
Allez, tape dans tes mains :
\xC7a porte bonheur.C'est magique, un refrainQu'on reprend tous en ch\u0153ur.

\xC7a fait rir' les oiseaux.
\xC7a fait chanter les abeilles.
\xC7a chasse les nuages Et fait briller le soleil.
\xC7a fait rir' les oiseaux Et danser les \xE9cureuils.
\xC7a rajoute des couleurs Aux couleurs de
l'arc-en-ciel.
\xC7a fait rir' les oiseaux, Oh, oh, oh,
rir' les oiseaux

T'es revenu chez toiLa t\xEAte pleine de souvenirs :
Des soirs au clair de lune,Des moments de plaisir.
T'es revenu chez toiEt tu veux d\xE9j\xE0 repartir
Pour trouver l'aventure Qui n'arr\xEAte pas de finir.

Si y a du gris dans ta nuit,Des larmes dans ton c\u0153ur.
La musique est l\xE0 pour \xE7a.
Y a toujours une m\xE9lodiePour des jours meilleurs.
Allez, tape dans tes mains: \xC7a porte bonheur.
C'est magique, un refrainQu'on reprend tous en ch\u0153ur
\xC7a fait rir' les oiseaux.
\xC7a fait chanter les abeilles.
\xC7a chasse les nuages Et fait briller le soleil.
\xC7a fait rir' les oiseaux Et danser les \xE9cureuils.
\xC7a rajoute des couleurs Aux couleurs de
l'arc-en-ciel.
\xC7a fait rir' les oiseaux, Oh, oh, oh,
rir' les oiseaux (3x)`,sp:"",sps:"https://open.spotify.com/search/%C3%87a%20Fait%20Rire%20Les%20Oiseaux%20La%20Compagnie%20Cr%C3%A9ole"},{id:"et-si-tu-n-existais-pas",t:"Et Si Tu N'existais Pas",artist:"Joe Dassin",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Et si tu n'existais pas,
Dis-moi pourquoi j'existerais.
Pour tra\xEEner dans un monde sans toi,
Sans espoir et sans regrets.

Et si tu n'existais pas,
J'essaierais d'inventer l'amour,
Comme un peintre qui voit sous ses doigts
Na\xEEtre les couleurs du jour.
Et qui n'en revient pas.

Et si tu n'existais pas,
Dis-moi pour qui j'existerais.
Des passantes endormies dans mes bras
Que je n'aimerais jamais.

Et si tu n'existais pas,
Je ne serais qu'un point de plus
Dans ce monde qui vient et qui va,
Je me sentirais perdu,
J'aurais besoin de toi.

Et si tu n'existais pas,
Dis-moi comment j'existerais.
Je pourrais faire semblant d'\xEAtre moi,
Mais je ne serais pas vrai.
Et si tu n'existais pas,
Je crois que je l'aurais trouv\xE9,
Le secret de la vie, le pourquoi,
Simplement pour te cr\xE9er
Et pour te regarder.`,sp:"",sps:"https://open.spotify.com/search/Et%20Si%20Tu%20N%27existais%20Pas%20Joe%20Dassin"},{id:"il-faut-qu-on-s-aime-il-faut-qu-on-slash",t:"Il Faut Qu'on S'aime (Il Faut Qu'on Slash)",artist:"Patrick S\xE9bastien",pri:"Diversos",tags:["Diversos"],lyrics:`ll faut qu\u2019\xE7a chang\u2019
que I\u2019poisson roug\u2019
Pass\u2019 \xE0 L\u2019orang
LL Faut qu\u2019on sach
LL Faut qu\u2019on s\u2019marr
Qu\u2019on vir\u2019 les t\xE2ch\u2019s
Qui nous fout\u2019nt le cafard

(La vie c\u2019est travailler
Payer ses imp\xF4ts fermer sa gueul\u2019
Voil\xE0 c\u2019est \xE7a)

Viv\u2019 la f\xEAt Et viv\u2019 les dingues
Viv\u2019 les kings de la d\xE9glingu\u2019
les petites lulu
Qui font voir leurs lolos
L\u2019\xE9t\xE9 quand il fait chaud

Viv\u2019 la f\xEAt\u2019 Et viv\u2019 les boums
Les allum\xE9s qui osent tout
Envoyez les chansons
Champagn\u2019 et mort aux cons

(Vach\u2019 de programm\u2019
disait le g\xE9n\xE9ral  Yeah)

ll faut qu\u2019\xE7a boug\xB4
Faut changer l\u2019eau
Ou L\u2019poisson roug\u2019
Finit sur L\u2019dos
Faut qu\u2019on s\u2019r\xE9veill
Pour qu\u2019on s\u2019vacanc\u2019
Soleil soleil
La vie faut qu\u2019on s\u2019la dans\u2019

(Comm\u2019\xE7a (3x))

Viv\u2019 la f\xEAt\u2019 Et viv\u2019 les dingues
Viv\u2019 les kings de la d\xE9glingu\u2019
les petites lulu qui nous font
Des bisous des c\xE2lins tout partout

Viv\u2019 la f\xEAt  Et viv\u2019 les fous
Les allum\xE9s qui osent tout
LL faut s\u2019\xE9clater plus
Pour en profiter plus
(Ah non  Faut travailler  plus
pour gagner plus C\u2019est \xE7a ouais)

Viv\u2019 la f\xEAt\u2019 Et viv\u2019 les dingues
Viv\u2019 les kings de la d\xE9glingu\u2019
Et les vill\u2019s qui aim\u2019nt \xE7a
Bodega Bodega Sangria et salsa

Viv\u2019 la f\xEAt  Et viv\u2019 les fous
Les allum\xE9s qui osent tout
Envoyez la folie champagn\u2019
Et viv\u2019 la vie

(Oui, oui, oui, oui)

Ll faut qu\u2019on slach
Qu\u2019on s\u2019d\xE9barrass\u2019
Des t\xEAt\u2019s \xE0 claqu\u2019s
Qui nous les cass
ll faut qu\u2019\xE7a boug
Fini l\u2019bocal
Le poisson roug
Ce soir s\u2019en va au bal
yes`,sp:"",sps:"https://open.spotify.com/search/Il%20Faut%20Qu%27on%20S%27aime%20%28Il%20Faut%20Qu%27on%20Slash%29%20Patrick%20S%C3%A9bastien"},{id:"la-machine-a-danser",t:"La Machine \xE0 Danser",artist:"",pri:"Diversos",tags:["Diversos"],lyrics:`La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker,
La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker.

On l'a trouv\xE9e dans une boite \xE0 swinger
Elle fait claquer des mains,
elle fait taper des pieds
Et toutes les nuits, au milieu des fum\xE9es,
On est c\xE2lin, c\xE2lin on est coll\xE9, coll\xE9
Elle fait... ouai... ouai ! ... ouai !

La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker,
La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker.

Danser, danser, rouler, zouker, zouker
oh oh oh oh oh oh oh oh oh oh oh oh oh oh

Tout l'monde est l\xE0, tout l'monde veut l'approcher
Tout l'monde lui veut du bien,
tout l'monde veut la toucher
Quand elle commence, on n'peut plus l'arr\xEAter
Tempo bloquer cent-vingt, on n'peut pas r\xE9sister
Elle fait... ouai... ouai ! ... ouai !
Et elle fait... ouai ... ouai ! ... ouai !

La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker,
La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker.

Danser, danser, rouler, zouker, zouker
oh oh oh oh oh oh oh oh oh oh oh oh oh oh

Solo

Danser c'est danser, ouai !
Rouler c'est rouler, ouai !
Zouker c'est zouker, ouai !
Zouker zouker zouker, h\xE9 ! (2x)
La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker,
La machine \xE0 danser, la machine \xE0 danser
La machine \xE0 rouler, la machine \xE0 zouker zouker.

Danser, danser, rouler, zouker, zouker
oh oh oh oh oh oh oh oh oh oh oh oh oh oh`,sp:"",sps:"https://open.spotify.com/search/La%20Machine%20%C3%A0%20Danser"},{id:"la-vie-en-rose",t:"La Vie en Rose",artist:"Grace Jones",pri:"Pop",tags:["Francesa","Internacional","Pop"],lyrics:`Des yeux qui font baisser les miens
Un rire qui se fait sur sa bouche
Voil\xE0 le portrait sans retouche
De l'homme auquel j'appartiens

Quand il me prend dans ses bras
Il me parle tout bas
je vois la vie en rose

Il me dit des mots d'amour
des mots de tous les jours
Et \xE7a me fait quelque chose

Il est entr\xE9 dans mon coeur
Une part de bonheur
Dont je connais la cause

C'est lui pour moi
Moi pour lui
dans la vie
Il me l'a dit, l'a jur\xE9 pour la vie

Et d\xE8s que je l'aper\xE7ois
Alors je sens en moi, mon coeur qui bat...

When he takes me in his arms
and whispers love to me
everything's lovely
It's him for me and me for him
all our lives
and it's so real what I feel
this is why

Et d\xE8s que je l'aper\xE7ois
Alors je sens en moi,mon coeur qui bat...     la vie .........

La vie en rose,la vie en rose
ohhhhhhhh.....la vie
La vie en rose,

La vie en rose, la vie en rose
la vie en rose, la vie en rose
la vie en rose, la vie en rose
la vie en rose, la vie en rose

Je t'aimerai pour toujours, mon`,sp:"",sps:"https://open.spotify.com/search/La%20Vie%20en%20Rose%20Grace%20Jones"},{id:"les-champs-elysees",t:"Les Champs-\xC9lys\xE9es",artist:"Joe Dassin",pri:"Francesa",tags:["Francesa"],lyrics:`Je m'baladais sur l'avenue
Le coeur ouvert \xE0 l'inconnu
J'avais envie de dire bonjour \xE0 n'importe qui
N'importe qui et ce fut toi
Je t'ai dit n'importe quoi
Il suffisait de te parler
Pour t'apprivoiser

Aux Champs-Elys\xE9es
Aux Champs-Elys\xE9es
Au soleil, sous la pluie, \xE0 midi ou \xE0 minuit
Il y a tout ce que vous voulez
Aux Champs-Elys\xE9es

Tu m'as dit "J'ai rendez-vous
Dans un sous-sol avec des fous
Qui vivent la guitare \xE0 la main
Du soir au matin"
Alors je t'ai accompagn\xE9e
On a chant\xE9, on a dans\xE9
Et l'on n'a m\xEAme pas pens\xE9
\xC0 s'embrasser

Aux Champs-Elys\xE9es
Aux Champs-Elys\xE9es
Au soleil, sous la pluie, \xE0 midi ou \xE0 minuit
Il y a tout ce que vous voulez
Aux Champs-Elys\xE9es

Hier soir deux inconnus
Et ce matin sur l'avenue
Deux amoureux tout \xE9tourdis
Par la longue nuit
Et de l'\xC9toile \xE0 la Concorde
Un orchestre \xE0 mille cordes
Tous les oiseaux du point du jour
Chantent l'amour

Aux Champs-Elys\xE9es
Aux Champs-Elys\xE9es
Au soleil, sous la pluie, \xE0 midi ou \xE0 minuit
Il y a tout ce que vous voulez
Aux Champs-Elys\xE9es (2x)`,sp:"",sps:"https://open.spotify.com/search/Les%20Champs-%C3%89lys%C3%A9es%20Joe%20Dassin"},{id:"ma-plus-belle-histoire-d-amour",t:"Ma Plus Belle Histoire D'Amour",artist:"Claudy Siar",pri:"Diversos",tags:["Diversos"],lyrics:`Nous sommes rest\xE9s si longtemps
A se regarder \xE0 se d\xE9sirer
Mais un jour nous avons os\xE9
et depuis tu es ma plus belle histoire d\u2019amour

Lorsque tu disais : Fais de moi ce que tu veux
En moi c\u2019est allum\xE9 le feu
Consumant jusqu\u2019au bout
Mon coeur, mon corps je te l\u2019avoue
Et pour toujours tu es ma plus belle histoire d\u2019amour

"Je t'aime"   ahhh ahhhh ahhh

Toutes les calomnies ne t\u2019ont pas fait renoncer
Sur moi ils voulaient te tromper
On verra si demain
apr\xE8s qu\u2019ils aient compris enfin
Que pour toujours tu es ma plus belle histoire d\u2019amour

ahhh ahhhh ahhh`,sp:"",sps:"https://open.spotify.com/search/Ma%20Plus%20Belle%20Histoire%20D%27Amour%20Claudy%20Siar"},{id:"padam-padam",t:"Padam... Padam",artist:"\xC9dith Piaf",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Cet air qui m'obs\xE8de jour et nuit
Cet air n'est pas n\xE9 d'aujourd'hui
Il vient d'aussi loin que je viens
Tra\xEEn\xE9 par cent mille musiciens
Un jour cet air me rendra folle
Cent fois j'ai voulu dire pourquoi
Mais il m'a coup\xE9 la parole
Il parle toujours avant moi
Et sa voix couvre ma voix

Padam...padam...padam...
Il arrive en courant derri\xE8re moi
Padam...padam...padam...
Il me fait le coup du souviens-toi
Padam...padam...padam...

C'est un air qui me montre du doigt
Et je tra\xEEne apr\xE8s moi comme un dr\xF4le d'erreur
Cet air qui sait tout par coeur

Il dit: "Rappelle-toi tes amours
Rappelle-toi puisque c'est ton tour
'y a pas d'raison pour qu'tu n'pleures pas
Avec tes souvenirs sur les bras..."

Et moi je revois ceux qui restent
Mes vingt ans font battre tambour
Je vois s'entrebattre des gestes
Toute la com\xE9die des amours
Sur cet air qui va toujours

Padam...padam...padam...
Des "je t'aime" de quatorze-juillet
Padam...padam...padam...
Des "toujours" qu'on ach\xE8te au rabais
Padam...padam...padam...
Des "veux-tu" en voil\xE0 par paquets
Et tout \xE7a pour tomber juste au coin d'la rue
Sur l'air qui m'a reconnue

\xC9coutez le chahut qu'il me fait

Comme si tout mon pass\xE9 d\xE9filait

Faut garder du chagrin pour apr\xE8s
J'en ai tout un solf\xE8ge sur cet air qui bat
Qui bat comme un coeur de bois`,sp:"",sps:"https://open.spotify.com/search/Padam...%20Padam%20%C3%89dith%20Piaf"},{id:"paroles-paroles",t:"Paroles, Paroles",artist:"Dalida & Alain Delon",pri:"Francesa",tags:["Francesa"],lyrics:`C'est \xE9trange,
Je ne sais pas ce qui m'arrive ce soir,
Je te regarde comme pour la premi\xE8re fois.
Encore des mots toujours des mots
Les m\xEAmes mots
Je ne sais plus comme te dire,
Rien que des mots
Mais tu es cette belle histoire d'amour...
Que je ne cesserai jamais de lire.
Des mots faciles des mots fragiles
C'\xE9tait trop beau
Tu es d'hier et de demain
Bien trop beau
De toujours ma seule v\xE9rit\xE9.
Mais c'est fini le temps des r\xEAves
Les souvenirs se fanent aussi
Quand on les oublie
Tu es comme le vent qui fait chanter les violons
Et emporte au loin le parfum des roses.
Caramels, bonbons et chocolats
Par moments, je ne te comprends pas.
Merci, pas pour moi
Mais tu peux bien les offrir \xE0 une autre
Qui aime le vent et le parfum des roses
Moi, les mots tendres enrob\xE9s de douceur
Se posent sur ma bouche mais jamais sur mon coeur
Une parole encore.
Paroles, paroles, paroles
\xC9coute-moi.
Paroles, paroles, paroles
Je t'en prie.
Paroles, paroles, paroles
Je te jure.
Paroles, paroles, paroles, paroles, paroles
Encore des paroles que tu s\xE8mes au vent
Voil\xE0 mon destin te parler....
Te parler comme la premi\xE8re fois.
Encore des mots toujours des mots
Les m\xEAmes mots
Comme j'aimerais que tu me comprennes.
Rien que des mots
Que tu m'\xE9coutes au moins une fois.
Des mots magiques des mots tactiques
Qui sonnent faux
Tu es mon r\xEAve d\xE9fendu.
Oui, tellement faux
Mon seul tourment et mon unique esp\xE9rance.
Rien ne t'arr\xEAte quand tu commences
Si tu savais comme j'ai envie
D'un peu de silence
Tu es pour moi la seule musique...
Qui fit danser les \xE9toiles sur les dunes
Caramels, bonbons et chocolats
Si tu n'existais pas d\xE9j\xE0 je t'inventerais.
Merci, pas pour moi
Mais tu peux bien les ouvrir \xE0 une autre
Qui aime les \xE9toiles sur les dunes
Moi, les mots tendres enrob\xE9s de douceur
Se posent sur ma bouche mais jamais sur mon coeur
Encore un mot juste une parole
Paroles, paroles, paroles
\xC9coute-moi.
Paroles, paroles, paroles
Je t'en prie.
Paroles, paroles, paroles
Je te jure.
Paroles, paroles, paroles, paroles, paroles
Encore des paroles que tu s\xE8mes au vent
Que tu es belle!
Paroles, paroles, paroles
Que tu est belle!
Paroles, paroles, paroles
Que tu es belle!
Paroles, paroles, paroles
Que tu es belle!
Paroles, paroles, paroles, paroles, paroles
Encore des paroles que tu s\xE8mes au vent`,sp:"",sps:"https://open.spotify.com/search/Paroles%2C%20Paroles%20Dalida%20%26%20Alain%20Delon"},{id:"pelados-em-santos",t:"Pelados em Santos",artist:"Mamonas Assassinas",pri:"Diversos",tags:["Diversos"],lyrics:`Mina,
Seus cabelo \xE9 "da hora",
Seu corpo \xE9 um viol\xE3o,
Meu docinho de coco,
T\xE1 me deixando louco.

Minha Bras\xEDlia amarela
T\xE1 de portas abertas,
Pra mode a gente se amar,
Pelados em Santos.

Pois voc\xEA minha "Pitxula",
Me deixa legalz\xE3o,
N\xE3o me sinto sozinho,
Voc\xEA \xE9 meu chuchuzinho!
Music is very good! (Oxente ai, ai, ai!)

Mas comigo ela n\xE3o quer se casar,
Na Bras\xEDlia amarela com roda ga\xFAcha,
Ela n\xE3o quer entrar.
Feij\xE3o com jab\xE1,
A desgra\xE7ada n\xE3o quer compartilhar.
Mas ela \xE9 linda,
Muito mais do que linda,
Very, very beautiful!

Voc\xEA me deixa doid\xE3o!!!
Meu docinho de coco!
Music is very porreta! (Oxente Paraguai!)

Pro Paraguai ela n\xE3o quis viajar,
Comprei um Reebok e uma cal\xE7a Fiorucci,
Ela n\xE3o quer usar.
Eu n\xE3o sei o que fa\xE7o
Pra essa mulher eu conquistar.
Por que ela \xE9 linda,
Muito mais do que linda,
Very, very beautiful!

Voc\xEA me deixa doid\xE3o!!!
Meu chuchuzinho!
Eu te I love youuuuu!
(perai que tem mais um pouquinho de "u")
uuuuuuuuuuuu...`,sp:"",sps:"https://open.spotify.com/search/Pelados%20em%20Santos%20Mamonas%20Assassinas"},{id:"quizas-quizas-quizas",t:"Quiz\xE1s, Quiz\xE1s, Quiz\xE1s",artist:"",pri:"Bolero",tags:["Bolero","Latina"],lyrics:`Siempre que te pregunto
Que, cu\xE1ndo, c\xF3mo y d\xF3nde
T\xFA siempre me respondes
Quiz\xE1s, Quiz\xE1s, Quiz\xE1s.

Y as\xED pasan los d\xEDas
Y yo, desesperado
Y t\xFA, t\xFA contestando
Quiz\xE1s, Quiz\xE1s, Quiz\xE1s.

Est\xE1s perdiendo el tiempo
Pensando, pensando,
Por lo que m\xE1s t\xFA quieras
\xBFHasta cu\xE1ndo? \xBFHasta cu\xE1ndo?

Y as\xED pasan los d\xEDas
Y yo, desesperado
Y t\xFA, t\xFA contestando
Quiz\xE1s, Quiz\xE1s, Quiz\xE1s.

Siempre que te pregunto
Que, cu\xE1ndo, c\xF3mo y d\xF3nde
T\xFA siempre me respondes
Quiz\xE1s, Quiz\xE1s, Quiz\xE1s.

Y as\xED pasan los d\xEDas
Y yo, desesperado
Y t\xFA, t\xFA contestando
Quiz\xE1s, Quiz\xE1s, Quiz\xE1s.

Est\xE1s perdiendo el tiempo
Pensando, pensando,
Por lo que m\xE1s t\xFA quieras
\xBFHasta cu\xE1ndo? \xBFHasta cu\xE1ndo?

Y as\xED pasan los d\xEDas
Y yo, desesperado
Y t\xFA, t\xFA contestando
Quiz\xE1s, quiz\xE1s, quiz\xE1s.
Quiz\xE1s, quiz\xE1s, quiz\xE1s.
Quiz\xE1s!!! Quiz\xE1s!! Quiz\xE1s!`,sp:"",sps:"https://open.spotify.com/search/Quiz%C3%A1s%2C%20Quiz%C3%A1s%2C%20Quiz%C3%A1s"},{id:"thank-you-for-loving-me",t:"Thank You For Loving Me",artist:"Bon Jovi",pri:"Rock",tags:["Rock"],lyrics:`It\xB4s hard for me to say the things
I want to say sometimes
There\xB4s no one here but you and me
And that broken old street light
Lock the doors  leave the world outside
All I\xB4ve got, to give to you
Are these five words and I

Thank you for loving me
For being my eyes
When I couldn\xB4t see
For parting my lips
When I couldn\xB4t breathe
Thank you for loving me
Thank you for loving me

I never knew I had a dream
Until that dream was you
When I look, into your eyes
The sky\xB4s a different blue
Cross my heart
I wear no disguise
If I tried, you\xB4d make believe
That you believed my lies

Thank you for loving me
For being my eyes
When I couldn\xB4t see
For parting my lips
When I couldn\xB4t breathe
Thank you for loving me

You pick me up when I fall down
You ring the bell before they count me out
If I was drowning you would part the sea
And risk your own life to rescue me

Lock the doors
leave the world outside
All I\xB4ve got to give to you
Are these five words and I

Thank you for loving me
For being my eyes
When I couldn\xB4t see
For parting my lips
When I couldn\xB4t breathe

Thank you for loving me
When I couldn\xB4t fly
Oh, you gave me wings
You parted my lips
When I couldn\xB4t breathe
Thank you for loving me
Thank you for loving me
Thank you for loving me
Oh, for loving me.`,sp:"",sps:"https://open.spotify.com/search/Thank%20You%20For%20Loving%20Me%20Bon%20Jovi"},{id:"this-love",t:"This Love",artist:"Maroon 5",pri:"Pop",tags:["Pop"],lyrics:`I was so high I did not recognize
The fire burning in her eyes
The chaos that controlled my mind
Whispered goodbye and she got on a plane
Never to return again
But always in my heart

This love has taken its toll on me
She said Goodbye too many times before
her heart is breaking in front of me
I have no choice cause I won't say goodbye anymore

I tried my best to feed her appetite
Keep her coming every night
So hard to keep her satisfied

Oh Kept playing love like it was just a game
Pretending to feel the same
Then turn around and leave again

This love has taken its toll on me
She said Goodbye too many times before
her heart is breaking in front of me
I have no choice cause I won't say goodbye anymore

I'll fix these broken things
Repair your broken wings
And make sure everything's alright

My pressure on your hips
Sinking my fingertips
Into every inch of you
Cause I know that's what you want me to do

This love has taken its toll on me
She said Goodbye too many times before
And her heart is breaking in front of me
I have no choice cause I won't say goodbye anymore

This love has taken its toll on me
She said Goodbye too many times before
And my heart is breaking in front of me
She said Goodbye too many times before

This love has taken its toll on me
She said Goodbye too many times before
And her heart is breaking in front of me
I have no choice cause I won't say goodbye anymore...`,sp:"",sps:"https://open.spotify.com/search/This%20Love%20Maroon%205"},{id:"voyage-voyage",t:"Voyage Voyage",artist:"Desireless",pri:"Francesa",tags:["Francesa"],lyrics:`Au dessus des vieux volcans,
Glisse des ailes sous les tapis du vent,
Voyage, voyage,   Eternellement.

De nuages en mar\xE9cages,
De vent d'Espagne en pluie d'\xE9quateur,
Voyage, voyage, Vole dans les hauteurs

Au dessus des capitales, Des id\xE9es fatales,
Il Regarde l'oc\xE9an...

Voyage, voyage
Plus loin que la nuit et le jour, Voyage
Dans l'espace inou\xEF de l'amour.
Voyage, voyage
Sur l'eau sacr\xE9e d'un fleuve indien, Voyage
Et jamais ne revient.

Sur le Gange ou l'Amazone,
Chez les blacks, chez les sikhs, chez les jaunes, Voyage, voyage
Dans tout le royaume.

Sur les dunes du Sahara,
Des iles Fidji au Fujiyama,
Voyage, voyage,  Ne t'arr\xEAtes pas.
Au dessus des barbel\xE9s,
Des coeurs bombard\xE9s,
Il Regarde l'oc\xE9an.

Voyage, voyage
Plus loin que la nuit et le jour, Voyage
Dans l'espace inou\xEF de l'amour.
Voyage, voyage
Sur l'eau sacr\xE9e d'un fleuve indien, Voyage
Et jamais ne revient.

Au dessus des capitales, Des id\xE9es fatales,
Il Regarde l'oc\xE9an.

Voyage, voyage
Plus loin que la nuit et le jour, Voyage
Dans l'espace inou\xEF de l'amour.
Voyage, voyage
Sur l'eau sacr\xE9e d'un fleuve indien, Voyage
Et jamais ne revient.`,sp:"",sps:"https://open.spotify.com/search/Voyage%20Voyage%20Desireless"},{id:"wonderful-tonight",t:"Wonderful Tonight",artist:"Eric Clapton",pri:"Rock",tags:["Rock"],lyrics:`It's late in the evening
She's wonderin' what clothes to wear
She puts on her make-up
And brushes her long blond hair

And then she asks me, "Do I look all right?"
And I say yes, you look wonderful tonight

We go to a party  And everyone turns to see
This beautiful lady  walkin around with me

And then she asks me, "Do you feel all right?"
And I say yes, I feel wonderful tonight

I feel wonderful because I see the love light in your eyes
And the wonder of it all is that you just don't realize      how much I love you

It's time to go home now
And I've got an achin' head
So I give her the car keys
And she helps me to bed

And then I tell her As I turn out the light
I say my darlin', you were wonderful tonight
Oh, my darling, you were wonderful tonight`,sp:"",sps:"https://open.spotify.com/search/Wonderful%20Tonight%20Eric%20Clapton"},{id:"o-jeito-e-da-uma-fugidinha",t:"O Jeito \xC9 D\xE1 Uma Fugidinha",artist:"Luan Santana",pri:"Sertanejo",tags:["Diversos","Sertanejo"],lyrics:`Ohhhhhhhh

T\xF4 bem na parada, ningu\xE9m consegue entender
Chego na balada, todos param pra me ver
Tudo dando certo mas eu t\xF4 esperto, \u2028n\xE3o posso bota tudo a perder

Sempre tem aquela // pessoa especial, \u2028que fica na dela, sabe seu potencial
E mexe comigo, isso \xE9 um perigo, \u2028logo agora que fiquei legal

T\xF4 morrendo de vontade de te agarrar,
N\xE3o sei quanto tempo mais vou suportar
Mas pra gente se encontrar ningu\xE9m pode saber, j\xE1 pensei e sei o que devo fazer

O jeito \xE9 d\xE1 uma fugidinha com voc\xEA
O jeito \xE9 d\xE1 uma fugida com voc\xEA
Se voc\xEA quer saber o que vai acontecer,
Primeiro a gente foge, depois a gente v\xEA

OHHHHHH`,sp:"",sps:"https://open.spotify.com/search/O%20Jeito%20%C3%89%20D%C3%A1%20Uma%20Fugidinha%20Luan%20Santana"},{id:"forever",t:"Forever",artist:"Kiss",pri:"Diversos",tags:["Diversos"],lyrics:`Kiss

Forever Kiss
I gotta tell you what I'm feeling inside
I could lie to myself but it's true
There's no denying when I look in your eyes
Girl, I'm out of my head over you

I lived so long believing all love is blind
But everything about you
Is telling me this time it's

Forever, this time I know
And there's no doubt in my mind
Forever, until my life is through
Girl, I'll be loving you forever

I hear the echo of the promise I made
When you're strong you can stand on your own
Those words grow distant as I look at your face
No, I don't wanna go it alone

I never thought I'd lay my heart on the line
But everything about you
Is telling me this time it's

Forever, this time I know
And there's no doubt in my mind
Forever, until my life is through
Girl, I'll be loving you forever

Oh

I see my future when I look in your eyes
It took your love to make my heart come alive
Cause I lived my life believing all love is blind
But everything about you is telling me this time it's

Forever, this time I know
And there's no doubt in my mind
Forever, until my life is through
Girl, I'll be loving you forever

Oh

It's Forever, this time I know
And there's no doubt in my mind
Forever, until my life is through
Girl, I'll be loving you forever`,sp:"",sps:"https://open.spotify.com/search/Forever%20Kiss"},{id:"happy-together",t:"Happy Together",artist:"The Turtles",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Happy Together The Turtles
Imagine me and you, I do
I think about you day and night
It's only right
To think about the girl you love
And hold her tight
So happy together

If I should call you up
Invest a dime
And you say you belong to me
And ease my mind
Imagine how the world could be
So very fine  So happy together

I can't see me lovin' nobody but you
For all my life
When you're with me
Baby the skies will be blue
For all my life

Me and you
And you and me
No matter how they tossed the dice
It had to be
The only one for me is you
And you for me So happy together

{Refrain}

Me and you
And you and me
No matter how they tossed the dice
It had to be
The only one for me is you
And you for me
So happy together
So happy together
How is the weather
So happy together
We're happy together
So happy together...`,sp:"",sps:"https://open.spotify.com/search/Happy%20Together%20The%20Turtles"},{id:"night-fever",t:"Night Fever",artist:"Bee Gees",pri:"Anos 70",tags:["Anos 70"],lyrics:`Listen to the ground:
there is movement all around.
There is something goin' down, and I can feel it.
On the waves of the air,
there is dancin' out there.
If it's somethin' we can share, we can steal it.

And that sweet city woman,
she moves through the light,
Controlling my mind and my soul.
When you reach out for me, yeah, and the feelin' is right,

fever, night fever: we know how to do it.
Gimme the night fever, night fever: we know how to show it.

Here I am, prayin' for this moment to last,
Livin' on the music so fine, born on the wind,
Makin' it mine.

night fever, night fever: we know how to do it.
Gimme the night fever, night fever: we know how to show it.

In the heat of our love, don't need no help for us to make it.
Gimme just enough takin' us to the mornin'.
I got fire in my mind. I get higher in my walkin',
And I'm glowin' in the dark; I give you warnin'.

And that sweet city woman,
she moves through the light,
Controlling my mind and my soul.
When you reach out for me, yeah, and the feelin' is right,

The fever, night fever: we know how to do it.
Gimme the night fever, night fever: we know how to show it.

Here I am, prayin' for this moment to last,
Livin' on the music so fine, born on the wind,
Makin' it mine.

Night fever, night fever: we know how to do it.
Gimme the night fever, night fever: we know how to show it.
Gimme the night fever, night fever: we know how to do it.
Gimme the night fever, night fever: we know`,sp:"",sps:"https://open.spotify.com/search/Night%20Fever%20Bee%20Gees"},{id:"celebration",t:"Celebration",artist:"Kool & The Gang",pri:"Anos 70",tags:["Anos 70"],lyrics:`Celebrate good times, come on!
Celebrate good times, come on!

There's a party goin' on right here
A celebration to last throughout the years
So bring your good times, and your laughter too
We gonna celebrate your party with you
Come on now

Celebration
Let's all celebrate and have a good time
Celebration
We gonna celebrate and have a good time

It's time to come together
It's up to you, what's your pleasure
Everyone around the world Come on!

Yahoo! It's a celebration Yahoo!

Celebrate good times, come on!
It's a celebration

We're gonna have a good time tonight
Let's celebrate, it's all right`,sp:"",sps:"https://open.spotify.com/search/Celebration%20Kool%20%26%20The%20Gang"},{id:"give-it-up",t:"Give It Up",artist:"KC and the Sunshine Band",pri:"Anos 70",tags:["Anos 70"],lyrics:`Everybody wants you,
everybody wants your love
I\xB4d just like to make you mine, oh, mine

Na, na, na, na, na, na, na, na, na, na, now
Baby give it up, give it up, baby give it up

Everybody sees you,
everybody looks and stares
I\xB4d just like to make you mine, oh, mine

Na, na, na, na, na, na, na, na, na, na, now
Baby give it up, give it up, baby give it up

Give it up....

Na, na, na, na, na, na, na, na, na, na, now
Baby give it up, give it up, baby give it up

Everybody wants you,
everybody wants your love
I\xB4d just like to make you mine, oh mine

Na, na, na, na, na, na, na, na, na, na, now
Baby give it up, give it up, baby give it up

Can you give it, can you give it, give it up
Come on baby I need your love

Do you know I wanna you baby
Come on baby, I want your love

Give it up, some of your love
Come on and play the game of love

Everybody feels with me, give it up
Come on baby I need your love

Can I touch you, can I love you
Come on baby, baby, I love you

Can you give it, give it up
Come on baby, give me your love`,sp:"",sps:"https://open.spotify.com/search/Give%20It%20Up%20KC%20and%20the%20Sunshine%20Band"},{id:"i-say-a-little-prayer-2",t:"I Say A Little Prayer",artist:"Gloria Gaynor",pri:"Anos 70",tags:["Anos 70"],lyrics:`The moment I wake up
Before I put on my makeup
I say a little prayer for you
While combing my hair, now
And wondering what dress to wear now
I say a little prayer for you

Forever, and ever, you'll stay in my heart
And I will love you
Forever, and ever, never apart
and I will love you
Together, forever, that's how it must be
To live without you
But only Be heart break for me

I run for the bus, dear
While riding I think of us, dear
I say a little prayer for you
At work I just take time
And all through my coffee break time
I say a little prayer for you`,sp:"",sps:"https://open.spotify.com/search/I%20Say%20A%20Little%20Prayer%20Gloria%20Gaynor"},{id:"you-ll-be-in-my-heart",t:"You'll Be In My Heart",artist:"Phil Collins",pri:"Balada",tags:["Balada","Casamento","Cerim\xF4nia"],lyrics:`COME STOP YOUR CRYING IT WILL BE ALL RIGHT
JUST TAKE MY HAND HOLD IT TIGHT

I WILL PROTECT YOU FROM ALL AROUND YOU
I WILL BE HERE DON'T YOU CRY

FOR ONE SO SMALL, YOU SEEM SO STRONG
MY ARMS WILL HOLD YOU, KEEP YOU SAFE AND WARM
THIS BOND BETWEEN US CAN'T BE BROKEN
I WILL BE HERE DON'T YOU CRY

'CAUSE YOU'LL BE IN MY HEART
YES, YOU'LL BE IN MY HEART
FROM THIS DAY ON NOW AND FOREVER MORE
YOU'LL BE IN MY HEART
NO MATTER WHAT THEY SAY
YOU'LL BE HERE IN MY HEART ALWAYS

WHY CANT THEY UNDERSTAND THE WAY WE FEEL
THEY JUST DONT TRUST WHAT THEY CANT EXPLAIN
I KNOW WERE DIFFERENT BUT DEEP INSIDE US
WERE NOT THAT DIFFERENT AT ALL

AND YOU'LL BE IN MY HEART
YES, YOU'LL BE IN MY HEART
FROM THIS DAY ON NOW AND FOREVER MORE

DONT LISTEN TO THEM, CAUSE WHAT DO THEY KNOW
WE NEED EACH OTHER, TO HAVE AND TO HOLD
THEY'LL SEE IN TIME, I KNOW

WHEN DESTINY CALLS YOU, YOU MUST BE STRONG
I MAY NOT BE WITH YOU, BUT YOU GOTTA HOLD ON
THEY'LL SEE IN TIME, I KNOW

WELL SHOW THEM TOGETHER CUZ...

YOU'LL BE IN MY HEART
BELIEVE, YOU'LL BE IN MY HEART
I'LL BE THERE FROM THIS DAY ON
NOW AND FOREVER MORE

YOULL BE IN MY HEART
NO MATTER WHAT THEY SAY
YOULL BE HERE IN MY HEART ALWAYS

ALWAYS...
I'LL BE WITH YOU
I'LL BE THERE FOR YOU ALWAYS
ALWAYS AND ALWAYS
JUST LOOK OVER YOUR SHOULDER
JUST LOOK OVER YOUR SHOULDER
JUST LOOK OVER YOUR SHOULDER
I'LL BE THERE ALWAYS`,sp:"",sps:"https://open.spotify.com/search/You%27ll%20Be%20In%20My%20Heart%20Phil%20Collins"},{id:"what-a-wonderful-world",t:"What A Wonderful World",artist:"Louis Armstrong",pri:"Balada",tags:["Balada","Casamento","Cerim\xF4nia"],lyrics:`I SEE TREES OF GREEN, RED ROSES TOO.
I SEE THEM BLOOM FOR ME AND YOU.
AND I THINK TO MYSELF,
WHAT A WONDERFUL WORLD.

I SEE SKIES OF BLUE AND CLOUDS OF WHITE,
THE BRIGHT BLESSED DAY, THE DARK SACRED NIGHT.
AND I THINK TO MYSELF,
WHAT A WONDERFUL WORLD.

THE COLOURS OF THE RAINBOW, SO PRETTY IN THE SKY.
ARE ALSO ON THE FACES OF PEOPLE GOING BY.
I SEE FRIENDS SHAKING HANDS, SAYING: "HOW DO YOU DO?"
THEY'RE REALLY SAYING:"I LOVE YOU".

I HEAR BABIES CRY, I WATCH THEM GROW,
THEY'LL LEARN MUCH MORE, THAN I'LL NEVER KNOW.
AND I THINK TO MYSELF,
WHAT A WONDERFUL WORLD.

YES, I THINK TO MYSELF,
WHAT A WONDERFUL WORLD.`,sp:"",sps:"https://open.spotify.com/search/What%20A%20Wonderful%20World%20Louis%20Armstrong"},{id:"iris",t:"Iris",artist:"Goo Goo Dolls",pri:"Balada",tags:["Balada","Casamento","Cerim\xF4nia"],lyrics:`AND I'D GIVE UP FOREVER TO TOUCH YOU
CAUSE I KNOW THAT YOU FEEL ME SOMEHOW
YOU'RE THE CLOSEST TO HEAVEN
THAT I'LL EVER BE
AND I DON'T WANT TO GO HOME RIGHT NOW

 AND ALL I CAN TASTE IS THIS MOMENT
 AND ALL I CAN BREATHE IS YOUR LIFE
 CAUSE SOONER OR LATER IT'S OVER
 I JUST DON'T WANT TO MISS YOU TONIGHT

AND I DON'T WANT THE WORLD TO SEE ME
CAUSE I DON'T THINK THAT THEY'D UNDERSTAND
WHEN EVERYTHING'S MADE TO BE BROKEN
I JUST WANT YOU TO KNOW WHO I AM

AND YOU CAN'T FIGHT THE TEARS THAT AIN'T COMING
OR THE MOMENT OF TRUTH IN YOUR LIES
WHEN EVERYTHING FEELS LIKE THE MOVIES
YEAH YOU BLEED JUST TO KNOW YOU'RE ALIVE

AND I DON'T WANT THE WORLD TO SEE ME
 CAUSE I DON'T THINK THAT THEY'D UNDERSTAND
 WHEN EVERYTHING'S MADE TO BE BROKEN
 I JUST WANT YOU TO KNOW WHO I AM
 I DON'T WANT THE WORLD TO SEE ME
 CAUSE I DON'T THINK THAT THEY'D UNDERSTAND
 WHEN EVERYTHING'S MADE TO BE BROKEN
 I JUST WANT YOU TO KNOW WHO I AM`,sp:"",sps:"https://open.spotify.com/search/Iris%20Goo%20Goo%20Dolls"},{id:"con-te-partiro",t:"Con Te Partir\xF2",artist:"Andrea Bocelli",pri:"Balada",tags:["Balada","Casamento","Cerim\xF4nia"],lyrics:`Quando sono solo Sogno all'orizzonte
E mancan le parole,
S\xEC lo so che non c'\xE8 luce
In una stanza quando manca il sole,
Se non ci sei tu con me.

Su le finestre
Mostra a tutti il mio cuore
Che hai acceso,
Chiudi dentro me
La luce che
hai incontrato per strada.

Con te partir\xF2. Paesi che non ho mai
Veduto e vissuto con te,
Adesso s\xEC li vivr\xF2.

Con te partir\xF2 Su navi per mari
Che, io lo so,
No, no, non esistono pi\xF9,
Con te io li rivivr\xF2.

Quando sei lontana
Sogno all'orizzonte
E mancan le parole
E io s\xEC lo so
Che sei con me, con me.

Tu mia luna tu sei qui con me,
Mio sole tu sei qui con me,
Con me, con me.

Con te partir\xF2.
Paesi che non ho mai
Veduto e vissuto con te,
Adesso s\xEC le vivr\xF2.

Con te partir\xF2
Su navi per mari
Che, io lo so,
No, no, non esistono pi\xF9,
Con te io li rivivr\xF2.
Io con te.`,sp:"",sps:"https://open.spotify.com/search/Con%20Te%20Partir%C3%B2%20Andrea%20Bocelli"},{id:"pai-nosso",t:"Pai Nosso",artist:"",pri:"Balada",tags:["Balada","Casamento","Cerim\xF4nia"],lyrics:` no c\xE9u,
santificado seja o teu nome
E venha a n\xF3s o teu reino,
e seja feita a tua vontade

Pai, meu pai do c\xE9u, meu pai do c\xE9u
Eu quase me esqueci, me esqueci
Que o teu amor vela por mim,
vela por mim
Que seja feito assim
Meu pai, meu pai do c\xE9u,
meu pai do c\xE9u
Eu quase me esqueci, me esqueci
Que o teu amor vela por mim,
vela por mim
Que seja feito assim

O alimento desse dia,
dai nos agora e sempre
E perdoai nossas ofensas,
de um modo maior com que perdoamos

Pai, meu pai do c\xE9u, meu pai do c\xE9u
Eu quase me esqueci, me esqueci
Que o teu amor vela por mim, vela por mim
Que seja feito assim
Meu pai, meu pai do c\xE9u, meu pai do c\xE9u
Eu quase me esqueci, me esqueci
Que o teu amor vela por mim, vela por mim
Que seja feito assim

E n\xE3o nos deixeis cair em tenta\xE7\xE3o,
mas livra-nos de todo o mal, am\xE9m`,sp:"",sps:"https://open.spotify.com/search/Pai%20Nosso"},{id:"let-s-twist-again",t:"Let's Twist Again",artist:"Chubby Checker",pri:"Anos 50",tags:["Anos 50","Anos 50/60"],lyrics:`C'mon everybody, clap your hands
Ah, you're looking good
I'm gonna sing my song and
It won't take long
We gonna to the Twist
And goes like this

C'mon let's twist again
Like we did last summer
Yeah! Let's twist again
Like we did last year

Do you remenber when
Things were really humming
Yeah! Let's twist again
Twistin' time is here

We go round and round
and up and down
we go again
Ooh, baby make me know
You love me so and then

Twist again
Like we did last summer
C\xB4mon. Let's twist again
Like we did last year`,sp:"",sps:"https://open.spotify.com/search/Let%27s%20Twist%20Again%20Chubby%20Checker"},{id:"tutti-frutti",t:"Tutti Frutti",artist:"Little Richard",pri:"Anos 50",tags:["Anos 50","Anos 50/60"],lyrics:`Wop-bop-a-loom-a-boom-bam-boom
tutti frutti
Au rutti tutti frutti au rutti tutti frutti
Au rutti tutti frutti au rutti tutti frutti
Au rutti wop-bop-a-loom-bop-a-boom-bam-boom

I Got a girl named Sue
She knows just what to do
She rocks to the east
She rocks to the west
She's the gal that I love best

I got a girl named Daisy
She almost drives me crazy
She knows how to love me
Yes indeed, boy you don't know
What she do with me`,sp:"",sps:"https://open.spotify.com/search/Tutti%20Frutti%20Little%20Richard"},{id:"rock-around-the-clock",t:"Rock Around The Clock",artist:"Bill Haley & His Comets",pri:"Anos 50",tags:["Anos 50","Anos 50/60"],lyrics:`One, Two, Three O'clock, Four O'clock rock,
Five, Six, Seven O'clock, Eight O'clock rock.
Nine, Ten, Eleven O'clock, Twelve O'clock rock,
We're gonna rock around the clock tonight.

Put your glad rags on and join me hon',
We'll have some fun when the clock strikes one.

We're gonna rock around the clock tonight,
We're gonna rock, rock, rock, 'till broad daylight,
We're gonna rock, gonna rock, around the clock tonight.

When the clock strikes two, three and four,
If the band slows down we'll yell for more.

We're gonna rock around the clock tonight,
We're gonna rock, rock, rock, 'till broad daylight,
We're gonna rock, gonna rock, around the clock tonight.

When the chimes ring five, six, and seven,
We'll be right in seventh heaven.

We're gonna rock around the clock tonight,
We're gonna rock, rock, rock, 'till broad daylight,
We're gonna rock, gonna rock, around the clock tonight.

When it's eight, nine, ten, eleven too,
I'll be goin' strong and so will you.

We're gonna rock around the clock tonight,
We're gonna rock, rock, rock, 'till broad daylight,
We're gonna rock, gonna rock, around the clock tonight.

When the clock strikes twelve we'll cool off then,
Start rockin' 'round the clock again.

We're gonna rock around the clock tonight,
We're gonna rock, rock, rock, 'till broad daylight,
We're gonna rock, gonna rock around the clock tonight.`,sp:"",sps:"https://open.spotify.com/search/Rock%20Around%20The%20Clock%20Bill%20Haley%20%26%20His%20Comets"},{id:"blue-suede-shoes",t:"Blue Suede Shoes",artist:"Elvis Presley",pri:"Anos 50",tags:["Anos 50","Anos 50/60","Rock"],lyrics:`Well, it's one for the money,
Two for the show,
Three to get ready,
Now go, cat, go.

But don't you step on my blue suede shoes.
You can do anything but lay off of my Blue
suede shoes.

Well, you can knock me down,
Step in my face,
Slander my name
All over the place.

Do anything that you want to do, but uh-uh,
Honey, lay off of my shoes
Don't you step on my Blue suede shoes.
You can do anything but lay off of my blue
suede shoes.

You can burn my house,
Steal my car, Drink my liquor
From an old fruitjar.

Do anything that you want to do, but uh-uh,
Honey, lay off of my shoes
Don't you step on my blue suede shoes.
You can do anything but lay off of my blue
suede shoes.

CUPIDO/BANHO DE LUA`,sp:"",sps:"https://open.spotify.com/search/Blue%20Suede%20Shoes%20Elvis%20Presley"},{id:"jailhouse-rock",t:"Jailhouse Rock",artist:"Elvis Presley",pri:"Anos 50",tags:["Anos 50","Anos 50/60"],lyrics:`The warden threw a party in the county jail.
The prison band was there and they began to wail.
The band was jumpin' and the joint began to swing.
You should've heard those knocked out jailbirds sing.
Let's rock, everybody, let's rock.
Everybody in the whole cell block
was dancin' to the Jailhouse Rock.

Spider Murphy played the tenor saxophone,
Little Joe was blowin' on the slide trombone.
The drummer boy from Illinois went crash, boom, bang,
the whole rhythm section was the Purple Gang.
Let's rock, everybody, let's rock.
Everybody in the whole cell block
was dancin' to the Jailhouse Rock.

Number forty-seven said to number three:
"You're the cutest jailbird I ever did see.
I sure would be delighted with your company,
come on and do the Jailhouse Rock with me."
Let's rock, everybody, let's rock.
Everybody in the whole cell block
was dancin' to the Jailhouse Rock.

The sad sack was a sittin' on a block of stone
way over in the corner weepin' all alone.
The warden said, "Hey, buddy, don't you be no square.
If you can't find a partner use a wooden chair."
Let's rock, everybody, let's rock.
Everybody in the whole cell block
was dancin' to the Jailhouse Rock.

Shifty Henry said to Bugs, "For Heaven's sake,
no one's lookin', now's our chance to make a break."
Bugsy turned to Shifty and he said, "Nix nix,
I wanna stick around a while and get my kicks."
Let's rock, everybody, let's rock.
Everybody in the whole cell block
was dancin' to the Jailhouse Rock.`,sp:"",sps:"https://open.spotify.com/search/Jailhouse%20Rock%20Elvis%20Presley"},{id:"biquini-de-bolinha-amarelinha",t:"Biqu\xEDni de Bolinha Amarelinha",artist:"Ronnie Cord",pri:"Anos 50/60",tags:["Anos 50/60"],lyrics:`Ana Maria entrou na cabine
E foi vestir um biqu\xEDni legal
Mas era t\xE3o pequenino o biqu\xEDni
Que Ana Maria ate sentiu-se mal
Ai, ai, ai, mas ficou sensacional

Era um biqu\xEDni de bolinha amarelinha t\xE3o pequinininho
Mal cabia na Ana Maria
Biqu\xEDni de bolinha amarelinha t\xE3o pequenininho
Que na palma da m\xE3o se escondia
Ana Maria toda envergonhada
N\xE3o que sair da cabine assim
Ficou com medo que a rapaziada
Olhasse tudo por tim por tim
Ai, ai, ai, a garota t\xE1 pra mim

Era um biqu\xEDni de bolinha amarelinha t\xE3o pequenininho
Mau cabia na Ana Maria
Biqu\xEDni de bolinha amarelinha t\xE3o pequenininho
Que na palma da m\xE3o se escondia

Ana Maria olhou-se no espelho
E fosse quase despida afinal
Ficou com o rosto todinho vermelho
E escondeu o mai\xF3 no dedal

Acabou toda folia
Da mocinha da cabine
Mas quem \xE9 que n\xE3o queria
Ver a mo\xE7a no biqu\xEDni`,sp:"",sps:"https://open.spotify.com/search/Biqu%C3%ADni%20de%20Bolinha%20Amarelinha%20Ronnie%20Cord"},{id:"meu-erro",t:"Meu Erro",artist:"Bar\xE3o Vermelho",pri:"Anos 80",tags:["Anos 80","Nacional"],lyrics:`Eu quis dizer Voc\xEA n\xE3o quis escutar
Agora n\xE3o pe\xE7a N\xE3o me fa\xE7a promessas
Eu n\xE3o quero te ver Nem quero acreditar
Que vai ser diferente Que tudo mudou

Voc\xEA diz n\xE3o saber O que houve de errado
E o meu erro foi crer que estar ao seu lado, bastaria
Ah meu Deus era tudo o que eu queria
Eu dizia o seu nome N\xE3o, me abandone

Mesmo querendo eu n\xE3o vou me enganar
Eu conhe\xE7o os seus passos
Eu vejo os seus erros
N\xE3o h\xE1 nada de novo Ainda somos iguais
Ent\xE3o n\xE3o me chame N\xE3o olhe pra tr\xE1s

Voc\xEA diz n\xE3o saber O que houve de errado
E o meu erro foi crer que estar ao seu lado, bastaria
Ah meu Deus era tudo o que eu queria
Eu dizia o seu nome N\xE3o, me abandone jamais`,sp:"",sps:"https://open.spotify.com/search/Meu%20Erro%20Bar%C3%A3o%20Vermelho"},{id:"oculos",t:"\xD3culos",artist:"Os Paralamas do Sucesso",pri:"Anos 80",tags:["Anos 80","Nacional"],lyrics:`Se as meninas do Leblon
N\xE3o olham mais pra mim. Eu uso \xF3culos

E volta e meia
Eu entro com meu carro pela contram\xE3o
Eu to sem \xF3culos

Se eu to alegre
Eu ponho os \xF3culos e vejo tudo bem
Mas se eu to triste eu tiro os \xF3culos
Eu n\xE3o vejo ningu\xE9m

Por que voc\xEA n\xE3o olha pra mim?
Me diz o que \xE9 que eu tenho de mal
Por que voc\xEA n\xE3o olha pra mim?
Por tr\xE1s dessa lente tem um cara legal...

Eu decidi dizer que eu nunca fui o tal
Era mais jogo se eu tentasse
fazer charme de intelectual
Se eu te disser
Periga voc\xEA n\xE3o acreditar em mim.

Eu n\xE3o nasci de \xF3culos...
Eu n\xE3o era assim...

Por que voc\xEA n\xE3o olha pra mim?
Me diz o que e que eu tenho de mal.
Por que voc\xEA n\xE3o olha pra mim?
Por tr\xE1s dessa lente tem um cara legal.

Por que voc\xEA n\xE3o olha pra mim?
Por que voc\xEA diz sempre que n\xE3o?
Por que voc\xEA n\xE3o olha pra mim?
Por tr\xE1s dessa lente tambem bate um cora\xE7\xE3o.`,sp:"",sps:"https://open.spotify.com/search/%C3%93culos%20Os%20Paralamas%20do%20Sucesso"},{id:"descobridor-dos-sete-mares",t:"Descobridor dos Sete Mares",artist:"Tim Maia",pri:"Anos 80",tags:["Anos 80","Nacional"],lyrics:`Uma luz azul me guia
Com a firmeza e os lampejos do farol
E os recifes la de cima
Me avisam dos perigos de chegar
Angra dos Reis e Ipanema
Iracema e Itamaraca
Porto Seguro, S\xE3o Vicente
Bra\xE7os abertos sempre a esperar

Pois bem cheguei
Quero ficar bem a vontade na verdade eu sou assim
Descobridor dos 7 mares, navegar eu quero

Uma lua me ilumina
Com a clareza e o brilho do cristal
Transando as cores desta vida
Vou colorindo a alegria de chegar
Boa viagem e Ubatuba
Grumari e Leme e Guaruj\xE1
Praia Vermelha e Ilha Bela
Bra\xE7os abertos sempre a esperar`,sp:"",sps:"https://open.spotify.com/search/Descobridor%20dos%20Sete%20Mares%20Tim%20Maia"},{id:"nao-quero-dinheiro-so-quero-amar",t:"N\xE3o Quero Dinheiro (S\xF3 Quero Amar)",artist:"Tim Maia",pri:"Anos 80",tags:["Anos 80","Nacional"],lyrics:`Vou pedir pra voc\xEA voltar
Vou pedir pra voc\xEA ficar
Eu te amo Eu te quero bem

Vou pedir pra voc\xEA gostar
Vou pedir pra voc\xEA me amar
Eu te amo Eu te adoro, meu amor

A semana inteira fiquei esperando
Pra te ver sorrindo Pra te ver cantando
Quando a gente ama n\xE3o pensa em dinheiro
S\xF3 se quer amar Se quer amarSe quer amar

De jeito maneira N\xE3o quero dinheiro
Eu quero amor sincere Isto \xE9 que eu espero
Grito ao mundo inteiro N\xE3o quero dinheiro
Eu s\xF3 quero amar

Espero para ver se voc\xEA vem
N\xE3o te troco nessa vida por ningu\xE9m
Porque eu te amoEu te quero bem
Acontece que na vida a gente tem
Que ser feliz por ser amado por algu\xE9m
Porque eu te amo Eu te adoro, meu amor

A semana inteira fiquei esperando
Pra te ver sorrindo
Pra te ver cantando
Quando a gente ama n\xE3o pensa em dinheiro
S\xF3 se quer amar
Se quer amar
Se quer amar
De jeito maneira
N\xE3o quero dinheiro
Eu quero amor sincero
Isto \xE9 que eu espero
Grito ao mundo inteiro
N\xE3o quero dinheiro
Eu s\xF3 quero amar [2x]

De jeito maneira
N\xE3o quero dinheiro
Eu quero amor sincero
Isto \xE9 que eu espero
Grito ao mundo inteiro
N\xE3o quero dinheiro
Eu s\xF3 quero amar`,sp:"",sps:"https://open.spotify.com/search/N%C3%A3o%20Quero%20Dinheiro%20%28S%C3%B3%20Quero%20Amar%29%20Tim%20Maia"},{id:"musica-urbana",t:"M\xFAsica Urbana",artist:"Capital Inicial",pri:"Anos 80",tags:["Anos 80","Nacional"],lyrics:`Contra todos e contra ningu\xE9m
O vento quase sempre nunca tanto diz
Estou s\xF3 esperando o que vai acontecer (uo

Eu tenho pedras nos sapatos
Onde os carros est\xE3o estacionados
Andando por ruas quase escuras os carros passam... (2x)      briged

As ruas t\xEAm cheiro de gasolina e \xF3leo diesel
Por toda plataforma, Toda a plataforma
Por toda a plataforma voc\xEA n\xE3o v\xEA a torre...

(Oho-uo-uo ho. Oho-uo-uo ho. Uo o ho.)

Tudo errado mas tudo bem
Tudo quase sempre como eu sempre quis
Sai da minha frente que agora eu quero ver

N\xE3o me importam os seus atos
Eu n\xE3o sou mais um desesperado
Se eu ando por ruas quase escuras as ruas passam...

Tudo errado mas tudo bem
Tudo quase sempre como eu sempre quis
Sai da minha frente que agora eu quero ver... (uo o ho)

N\xE3o me importam os seus atos
Eu n\xE3o sou mais um desesperado
Se eu ando por ruas quase escuras as ruas passam...

As ruas t\xEAm cheiro de gasolina e \xF3leo diesel
Por toda plataforma, Toda a plataforma
Por toda a plataforma voc\xEA n\xE3o v\xEA a torre... yeah

(Oho-uo-uo ho. Oho-uo-uo ho uo o. Uo o ho.)

"Deixa eu ver essas m\xE3os a\xED pra cima, vai!"`,sp:"",sps:"https://open.spotify.com/search/M%C3%BAsica%20Urbana%20Capital%20Inicial"},{id:"a-little-respect",t:"A Little Respect",artist:"Erasure",pri:"Anos 90",tags:["Anos 90"],lyrics:`I try to discover
a little something to make me sweeter
Oh baby refrain from breaking my heart
I'm so in love with you I'll be forever blue
That you gimme no reason why you make me work  so hard

That you gimme no That you gimme no
That you gimme no That you gimme no

Soul, I hear you calling Oh baby please
Give a little respect to me

And if I should falter
would you open your arms to me?
We can make love not war
and live at peace with our hearts

I'm so in love with you I'll be forever blue
What religion or reason could drive a man to forsake his lover?

Don't you tell me no Don't you tell me no
Don't you tell me no Don't you tell me no

Soul, I hear you calling
Oh baby please  Give a little respect to me

I'm so in love with you I'll be forever blue
That you gimme no reason,
you know you make me  work so hard

That you gimme no That you gimme no
That you gimme no That you gimme no

Soul, I hear you calling
Oh baby please
Give a little respect to me
I hear you calling
Oh baby please
Give a little respect to me

                    S\xF3 Voz e Teclado`,sp:"",sps:"https://open.spotify.com/search/A%20Little%20Respect%20Erasure"},{id:"the-rhythm-of-the-night",t:"The Rhythm of the Night",artist:"Corona",pri:"Anos 90",tags:["Anos 90"],lyrics:`The night, oh yeah
The rhythm of the night

This is the rhythm of my life
My life, oh yeah
The rhythm of my life

(Solo Teclado)

You could put some joy upon my face
Oh, sunshine in an empty place
Take me to turn to
And babe I'll make you stay

Oh, I can ease you of your pain
Feel you give me love again
Round and round we go
Each time I hear you say

This is the rhythm of the night
The night, oh yeah
The rhythm of the night

This is the rhythm of my life
My life, oh yeah
The rhythm of my life      (Solo Teclado)`,sp:"",sps:"https://open.spotify.com/search/The%20Rhythm%20of%20the%20Night%20Corona"},{id:"mr-vain",t:"Mr. Vain",artist:"Culture Beat",pri:"Anos 90",tags:["Anos 90"],lyrics:`Call him Mr.Vain

Call him Mr.Raider call him Mr.wrong
Call him Mr.vain

He said:
I know what I want
And I want it now
I want you, cause I'm Mr.Vain

I know what I want
And I want it now
I want you, cause I'm Mr.Vain\u2026

(Intro Teclado)`,sp:"",sps:"https://open.spotify.com/search/Mr.%20Vain%20Culture%20Beat"},{id:"what-is-love",t:"What Is Love",artist:"Haddaway",pri:"Anos 90",tags:["Anos 90"],lyrics:`(Teclado)
Yeah, h\xEA\u2026
(Teclado)
Vocal Feminino:
Ooh, ooh, ooh\u2026

I don't know why you're unfair
I give you my love
But you don't care
So what is right and what is wrong
Gimme a sign
 What is love?
Oh baby, don't hurt me
Don't hurt me no more
What is love?
Oh baby, don't hurt me
Don't hurt me no more

(Vocal Feminino)
Whoa whoa whoa\u2026 Whoa whoa whoa\u2026

(Solo Teclado)`,sp:"",sps:"https://open.spotify.com/search/What%20Is%20Love%20Haddaway"},{id:"run-to-you-verificar",t:"Run To You (verificar)",artist:"",pri:"Anos 90",tags:["Anos 90"],lyrics:`I never knew that this could end
I'm still thinking about you Now
and it's hard to find your way
I never wanted to let you go
You gotta run to me
Oh,  can't you see
You gotta run to me
Oh,  can't you see
You gotta run to me
Oh, can't you see
You gotta run to me
Oh, can't you see
You Gottta run to me\u2026(Fim)`,sp:"",sps:"https://open.spotify.com/search/Run%20To%20You%20%28verificar%29"},{id:"listen-to-the-music",t:"Listen To The Music",artist:"The Doobie Brothers",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Don't you feel it growin', day by day
People gettin' ready for the news
Some are happy, some are sad

Oh, we got to let the music play
What the people need
Is a way to make 'em smile
It ain't so hard to do if you know how

Gotta get a message
Get it on through
Oh, now mama's go'n' to after 'while

Oh, oh, listen to the music
Oh, oh, listen to the music
Oh, oh, listen to the music
All the time

Well I know, you know better
Everything I say
Meet me in the country for a day
We'll be happy
And we'll dance
Oh, we're gonna dance our blues away

And if I'm feelin' good to you
And you're feelin' good to me
There ain't nothin' we can't do or say
Feelin' good, feeling fine

Oh, baby, let the music play

Oh, oh, listen to the music
Oh, oh, listen to the music
Oh, oh, listen to the music
All the time

Like a lazy flowing river
Surrounding castles in the sky

And the crowd is growing bigger
List'nin' for the happy sounds
And I got to let them fly

Oh, oh, listen to the music
Oh, oh, listen to the music
Oh, oh, listen to the music
All the time`,sp:"",sps:"https://open.spotify.com/search/Listen%20To%20The%20Music%20The%20Doobie%20Brothers"},{id:"have-you-ever-seen-the-rain",t:"Have You Ever Seen The Rain?",artist:"Creedence Clearwater Revival",pri:"Rock",tags:["Anos 50/60","Rock","Sertanejo"],lyrics:`Someone told me long ago
There's a calm before the storm
I know  It's been coming for some time
When it's over, so they say
It'll rain a sunny day
I know Shinin' down like water

I wanna know Have you ever seen the rain?
I wanna know Have you ever seen the rain
Comin' down on a sunny day?

Yesterday, and days before
Sun is cold and rain is hot I know
Been that way for all my time
'Til forever, on it goes
Through the circle, fast and slow
I know It can't stop, I wonder

I wanna knowHave you ever seen the rain?
I wanna know Have you ever seen the rain
Comin' down on a sunny day? Yeah!

I wanna know Have you ever seen the rain?
I wanna know Have you ever seen the rain
Comin' down on a sunny day?`,sp:"",sps:"https://open.spotify.com/search/Have%20You%20Ever%20Seen%20The%20Rain%3F%20Creedence%20Clearwater%20Revival"},{id:"rock-and-roll-all-nite",t:"Rock And Roll All Nite",artist:"Kiss",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`YOU SHOW US EVERYTHING YOU'VE GOT
YOU KEEP ON DANCIN' AND THE ROOM GETS HOT
YOU DRIVE US WILD, WE'LL DRIVE YOU CRAZY
YOU SAY YOU WANNA GO FOR A SPIN
THE PARTY'S JUST BEGUN, WE'LL  LET YOU IN
YOU DRIVE US WILD, WE'LL DRIVE YOU CRAZY
YOU KEEP ON SHOUTIN', YOU KEEP ON SHOUTIN'

I WANNA ROCK AND ROLL ALL NIGHT AND PARTY EVERYDAY (4X)

YOU KEEP ON SAYING YOU'LL BE MINE FOR A WHILE
YOU'RE LOOKIN' FANCY AND I LIKE YOUR STYLE
YOU DRIVE US WILD, WE'LL DRIVE YOU CRAZY

YOU SHOW US EVERYTHING YOU'VE GOT
BABY, BABY THAT'S QUITE A LOT
AND YOU DRIVE US WILD, WE'LL DRIVE YOU CRAZY
YOU KEEP ON SHOUTIN', YOU KEEP ON SHOUTIN'
I WANNA ROCK AND ROLL ALL NIGHT AND PARTY EVERYDAY (11X)`,sp:"",sps:"https://open.spotify.com/search/Rock%20And%20Roll%20All%20Nite%20Kiss"},{id:"i-can-t-get-no-satisfaction",t:"(I Can't Get No) Satisfaction",artist:"The Rolling Stones",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`I can't get no satisfaction
I can't get no satisfaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm drivin' in my car
And that man comes on the radio
He's tellin' me more and more
About some useless information
Supposed to fire my imagination
I can't get no, oh no no no
Hey hey hey, that's what I say

I can't get no satisfaction
I can't get no satisfaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm watchin' my TV
And that man comes on to tell me
How white my shirts can be
But he can't be a man 'cause he doesn't smoke
The same cigarrettes as me
I can't get no, oh no no no
Hey hey hey, that's what I say

I can't get no satisfaction
I can't get no girl reaction
'Cause I try and I try and I try and I try
I can't get no, I can't get no

When I'm ridin' round the world
And I'm doin' this and I'm signing that
And I'm tryin' to make some girl
Who tells me baby better come back later next week
'Cause you see I'm on losing streak
I can't get no, oh no no no
Hey hey hey, that's what I say

I can't get no, I can't get no
I can't get no satisfaction
No satisfaction, no satisfaction, no satisfaction`,sp:"",sps:"https://open.spotify.com/search/%28I%20Can%27t%20Get%20No%29%20Satisfaction%20The%20Rolling%20Stones"},{id:"born-to-be-wild",t:"Born To Be Wild",artist:"Steppenwolf",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`GET YOUR MOTOR RUNNING
HEAD OUT ON THE HIGHWAY
LOOKIN' FOR ADVENTURE
IN WHATEVER COMES OUR WAY

YEAH, DARLIN', GONNA MAKE IT HAPPEN
TAKE THE WORLD IN A LOVE EMBRACE
FIRE ALL OF YOUR GUNS AT ONCE AND
EXPLODE INTO SPACE

I LIKE SMOKE AND LIGHTNING
HEAVY METAL THUNDER
RACIN' WITH THE WIND
AND THE FEELING THAT I'M UNDER

YEAH, DARLIN', GONNA MAKE IT HAPPEN
TAKE THE WORLD IN A LOVE EMBRACE
FIRE ALL OF YOUR GUNS AT ONCE AND
EXPLODE INTO SPACE

LIKE A TRUE NATURE'S CHILD
WE WERE BORN, BORN TO BE WILD
WE CAN CLIMB SO HIGH
I NEVER WANNA DIE
BORN TO BE WILD BORN TO BE WILD

GET YOUR MOTOR RUNNING
HEAD OUT ON THE HIGHWAY
LOOKIN' FOR ADVENTURE
IN WHATEVER COMES OUR WAY

YEAH, DARLIN', GONNA MAKE IT HAPPEN
TAKE THE WORLD IN A LOVE EMBRACE
FIRE ALL OF YOUR GUNS AT ONCE AND
EXPLODE INTO SPACE

LIKE A TRUE NATURE'S CHILD
WE WERE BORN, BORN TO BE WILD
WE CAN CLIMB SO HIGH
I NEVER WANNA DIE
BORN TO BE WILD BORN TO BE WILD`,sp:"",sps:"https://open.spotify.com/search/Born%20To%20Be%20Wild%20Steppenwolf"},{id:"suddenly-i-see",t:"Suddenly I See",artist:"KT Tunstall",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Her face is a map of the world, is a map of the world
You can see she's a beautiful girl, she's a beautiful girl
And everything around her is a silver pool of light
People who surround her feel the benefit of it
It makes you calm
She'll hold you captivated in her palm

Suddenly I see(suddenly i see) this is what I wanna be
Suddenly I see(suddenly i see) why the hell it means so much to me
Suddenly I see(suddenly i see) this is what I wanna be
Suddenly I see (suddenly i see)why the hell it means so much to me

I feel like walking the world, like walking the world
You can hear she's a beautiful girl, she's a beautiful girl
She fills up every corner like she's born in black and white
Makes you feel warmer when you're trying to remember what you heard
She likes to leave you hanging on her world

Suddenly I see(suddenly i see) this is what I wanna be
Suddenly I see (suddenly i see)why the hell it means so much to me
Suddenly I see(suddenly i see) this is what I wanna be
Suddenly I see(suddenly i see) why the hell it means so much to me

And she's taller than most, and she's looking at me
I can see her eyes looking from the page in the magazine
She makes me feel like I could be a tower, big strong tower yeah

The power to beThe power to give
The power to see, yeah, yeah
She got the power to beThe power to give
The power to see, yeah, yeah
The power to be
The power to give
The power to see, yeah, yeah
She got the power to be
The power to give
The power to see, yeah, yeah

Suddenly I see this is what I wanna be
Suddenly I see why the hell it means so much to me
Suddenly I see this is what I want to be
Suddenly I see why the hell it means so much to me`,sp:"",sps:"https://open.spotify.com/search/Suddenly%20I%20See%20KT%20Tunstall"},{id:"kiss-me",t:"Kiss Me",artist:"Sixpence None the Richer",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Kiss me out of the bearded barley.
Nightly, beside the green, green grass.
Swing, swing, swing the spinning step.
You wear those shoes and I will wear that dress.

Oh, kiss me beneath the milky twilight.
Lead me out on the moonlit floor.
Lift your open hand.
Strike up the band and make the fireflies dance,
Silver moon's sparkling.   So kiss me.

Kiss me down by the broken tree house.
Swing me high upon its hanging tire.
Bring, bring, bring your flowered hat.
We'll take the trail marked on your father's map.

Oh, kiss me beneath the milky twilight.
Lead me out on the moonlit floor.
Lift your open hand.
Strike up the band and make the fireflies dance,
Silver moon's sparkling. So kiss me.

Oh, kiss me beneath the milky twilight.
Lead me out on the moonlit floor.
Lift your open hand.
Strike up the band and make the fireflies dance,
Silver moon's sparkling. So kiss me.  So kiss me.`,sp:"",sps:"https://open.spotify.com/search/Kiss%20Me%20Sixpence%20None%20the%20Richer"},{id:"la-puerta",t:"La Puerta",artist:"Luis Miguel",pri:"Bolero",tags:["Bolero","Latina"],lyrics:`La puerta se cerr\xF3 detr\xE1s de ti
Y nunca m\xE1s volviste a aparecer
Dejaste abandonada la ilusi\xF3n
Que hab\xEDa en mi coraz\xF3n por ti

La puerta se cerr\xF3 detr\xE1s de ti
Y as\xED detr\xE1s de ti se fue mi amor
Creyendo que podr\xEDa convencer
A tu alma de mi padecer

Pero es que no supiste soportar
Las penas que nos dio
La misma adversidad
As\xED como tambi\xE9n
Nos dio felicidad,
Nos vino a castigar con el dolor

La puerta se cerr\xF3 detr\xE1s de ti
Y nunca m\xE1s volviste a aparecer
Dejaste abandonada la ilusi\xF3n
Que hab\xEDa en mi coraz\xF3n por ti`,sp:"",sps:"https://open.spotify.com/search/La%20Puerta%20Luis%20Miguel"},{id:"historia-de-un-amor",t:"Historia de un Amor",artist:"",pri:"Bolero",tags:["Bolero","Latina"],lyrics:`Ya no estas mas a mi lado coraz\xF3n
en el alma s\xF3lo tengo soledad
y si ya no puedo verte
por qu\xE9 Dios me hizo quererte
para hacerme sufrir mas.

Siempre fuiste la raz\xF3n de mi existir
adorarte para mi fue religi\xF3n
en tus besos yo encontraba
el calor que me brindaba
el amor y la pasi\xF3n.

Es la historia de un amor
como no hay otro igual
que me hizo comprender
todo el bien, todo el mal
que le dio luz a mi vida
apag\xE1ndola despu\xE9s
hay que vida tan obscura
sin tu amor no vivir\xE9.

Siempre fuiste la raz\xF3n de mi existir
adorarte para mi fue religi\xF3n
en tus besos yo encontraba
el calor que me brindaba
el amor y la pasi\xF3n.

Es la historia de un amor
como no hay otro igual
que me hizo comprender
todo el bien, todo el mal
que le dio luz a mi vida
apag\xE1ndola despu\xE9s
hay que vida tan obscura
sin tu amor no vivir\xE9.

Siempre fuiste la raz\xF3n de mi existir
adorarte para mi fue religi\xF3n
en tus besos yo encontraba
el calor que me brindaba
el amor y la pasi\xF3n.`,sp:"",sps:"https://open.spotify.com/search/Historia%20de%20un%20Amor"},{id:"el-dia-que-me-quieras",t:"El D\xEDa Que Me Quieras",artist:"Carlos Gardel",pri:"Bolero",tags:["Bolero","Latina"],lyrics:`Acaricia mi sue\xF1o El suave murmullo
De tu suspirar
Como r\xEDe la vida Si tus ojos negros
Me quieren mirar

Y si es m\xEDo el amparo
De tu risa leve  Que es como un cantar

Ella aqu\xEDeta mi herida Todo, todo se olvida

El d\xEDa que me quieras, la rosa que engalana
Se vestir\xE1 de fiesta con su mejor color
Y al viento las campanas dir\xE1n que ya eres m\xEDa
Y locas las fontanas se contar\xE1n su amor

La noche que me quieras desde el azul del cielo
Las estrellas celosas nos mirar\xE1n pasar
Y un rayo misterioso har\xE1 nido en tu pelo
Luciernaga curiosa que ver\xE1
Que eres mi...consuelo

Y un rayo misterioso har\xE1 nido en tu pelo
Luciernaga curiosa que ver\xE1
Que eres mi...consuelo`,sp:"",sps:"https://open.spotify.com/search/El%20D%C3%ADa%20Que%20Me%20Quieras%20Carlos%20Gardel"},{id:"la-barca",t:"La Barca",artist:"Luis Miguel",pri:"Bolero",tags:["Bolero","Latina"],lyrics:`Dicen que la distancia es el olvido
Pero yo no concibo esta raz\xF3n
Porque yo seguir\xE9 siendo el cautivo
De los caprichos de tu coraz\xF3n

Supiste esclarecer mis pensamientos
Me diste la verdad que yo so\xF1\xE9
Ahuyentaste de m\xED los sufrimientos
En la primera noche que te am\xE9

Hoy mi playa se viste de amargura
Porque tu barca tiene que partir
A cruzar otros mares de locura
Cuida que no naufrague tu vivir

Cuando la luz del sol se est\xE9 apagando
Y te sientas cansada de vagar
Piensa que yo por ti estar\xE9 esperando
Hasta que t\xFA decidas regresar

Supiste esclarecer mis pensamientos
Me diste la verdad que yo so\xF1\xE9
Ahuyentaste de m\xED los sufrimientos
En la primera noche que te am\xE9

Hoy mi playa se viste de amargura
Porque tu barca tiene que partir
A cruzar otros mares de locura
Cuida que no naufrague tu vivir

Cuando la luz del sol se est\xE9 apagando
Y te sientas cansada de vagar
Piensa que yo por ti estar\xE9 esperando
Hasta que t\xFA decidas regresar`,sp:"",sps:"https://open.spotify.com/search/La%20Barca%20Luis%20Miguel"},{id:"el-reloj",t:"El Reloj",artist:"",pri:"Bolero",tags:["Bolero","Latina"],lyrics:`Reloj no marques las horas
Porque voy a enloquecer
Ella se ir\xE1 para siempre
Cuando amanezca otra vez.

Nom\xE1s nos queda esta noche
Para vivir nuestro amor
Y tu tic-tac me recuerda
Mi irremediable dolor.

Reloj det\xE9n tu camino
Porque mi vida se apaga
Ella es la estrella que alumbra mi ser
Yo sin su amor no soy nada.

Det\xE9n el tiempo en tus manos
Haz esta noche perpetua
Para que nunca se vaya de m\xED
Para que nunca amanezca.

INSTRUMENTAL

Reloj det\xE9n tu camino
Porque mi vida se apaga
Ella es la estrella que alumbra mi ser
Yo sin su amor no soy nada.

Det\xE9n el tiempo en tus manos
Haz esta noche perpetua
Para que nunca se vaya de m\xED
Para que nunca amanezca.`,sp:"",sps:"https://open.spotify.com/search/El%20Reloj"},{id:"sway",t:"Sway",artist:"Michael Bubl\xE9",pri:"Latina",tags:["Latina"],lyrics:`When marimba rhythms start to play
Dance with me, make me sway
Like a lazy ocean hugs the shore
Hold me close, sway me more

Like a flower bending in the breeze
Bend with me, sway with ease
When we dance you have a way with me
Stay with me, sway with me

Other dancers may be on the floor
Dear, but my eyes will see only you
Only you have that magic technique
When we sway I go weak

I can hear the sounds of violins
Long before it begins
Make me thrill as only you know how
Sway me smooth, sway me now

(solo)

Other dancers may be on the floor
Dear, but my eyes will see only you
Only you have that magic technique
When we sway I go weak

I can hear the sounds of violins
Long before it begins
Make me thrill as only you know how
Sway me smooth, sway me now

When marimba rhythms start to play
Dance with me, make me sway
Like a lazy ocean hugs the shore
Hold me close, sway me more

Like a flower bending in the breeze
Bend with me, sway with ease
When we dance you have a way with me
Stay with me, sway with me

When marimba start to play
Hold me close, make me sway
When we dance you have a way with me
Stay with me, sway with me`,sp:"",sps:"https://open.spotify.com/search/Sway%20Michael%20Bubl%C3%A9"},{id:"can-t-take-my-eyes-off-you",t:"Can't Take My Eyes Off You",artist:"Frankie Valli",pri:"Latina",tags:["Jazz","Latina","Standard"],lyrics:` and The Four Seasons
You're just too good to be true.
Can't take my eyes off you.
You'd be like Heaven to touch.
I wanna hold you so much.
At long last love has arrived
And I thank God I'm alive.
You're just too good to be true.
Can't take my eyes off you.

Pardon the way that I stare.
There's nothing else to compare.
The sight of you leaves me weak.
There are no words left to speak,
But if you feel like I feel,
Please let me know that it's real.
You're just too good to be true.
Can't take my eyes off you.

I love you, baby,
And if it's quite alright,
I need you, baby,
To warm a lonely night.
I love you, baby.
Trust in me when I say:
Oh, pretty baby,
Don't bring me down, I pray.
Oh, pretty baby, now that I found you, stay
And let me love you, baby.
Let me love you.

You're just too good to be true.
Can't take my eyes off you.
You'd be like Heaven to touch.
I wanna hold you so much.
At long last love has arrived
And I thank God I'm alive.
You're just too good to be true.
Can't take my eyes off you.

I love you, baby, And if it's quite alright,
I need you, baby, To warm a lonely night.
I love you, baby.Trust in me when I say:
Oh, pretty baby,
Don't bring me down, I pray.
Oh, pretty baby, now that I found you, stay..`,sp:"",sps:"https://open.spotify.com/search/Can%27t%20Take%20My%20Eyes%20Off%20You%20Frankie%20Valli"},{id:"la-vida-es-un-carnaval",t:"La Vida Es Un Carnaval",artist:"Celia Cruz",pri:"Latina",tags:["Latina"],lyrics:`Todo aqu\xE9l que piense
Que la vida es desigual
Tiene que saber que no es as\xED
Que la vida es una hermosura
Hay que vivirla

Todo aqu\xE9l que piense
Que est\xE1 solo y que est\xE1 mal
Tiene que saber que no es as\xED
Que en la vida no hay nadie solo
Y siempre hay alguien

Ay, no hay que llorar,
Que la vida es un carnaval
Y es mas bello vivir cantando
Oh oh oh ay, no hay que llorar
Que la vida es un carnaval
Y las penas se van cantando (2x)

Todo aqu\xE9l que piense
Que la vida siempre es cruel
Tiene que saber que no es as\xED
Que tan solo hay momentos malos
Y todo pasa

Todo aqu\xE9l que piense
Que esto nunca va a cambiar
Tiene que saber que no es as\xED
Que al mal tiempo, buena cara
Y todo cambia

Ay, no hay que llorar,
Que la vida es un carnaval
Y es m\xE1s bello vivir cantando
Oh oh oh ay, no hay que llorar
Que la vida es un carnaval
Y las penas se van cantando (2x)`,sp:"",sps:"https://open.spotify.com/search/La%20Vida%20Es%20Un%20Carnaval%20Celia%20Cruz"},{id:"la-camisa-negra",t:"La Camisa Negra",artist:"Juanes",pri:"Latina",tags:["Latina"],lyrics:`Tengo la camisa negra
Hoy mi amor est\xE1 de luto
Hoy tengo en el alma una pena
y es por culpa de tu embrujo

Hoy s\xE9 que t\xFA ya no me quieres
y eso es lo que m\xE1s me hiere
que tengo la camisa negra
y una pena que me duele

mal parece que solo me qued\xE9
y fue pura tolita tu mentira
que maldita mala suerte la m\xEDa
que aquel d\xEDa te encontr\xE9

por beber del veneno malevo de tu amor
yo qued\xE9 moribundo y lleno de dolor
respir\xE9 de ese humo amargo de tu adi\xF3s
y desde que t\xFA te fuiste yo solo tengo...

tengo la camisa negra
porque negra tengo el alma
yo por ti perd\xED la calma
y casi pierdo hasta mi cama

cama cama c'mon baby
te digo con disimulo
que tengo la camisa negra
y debajo tengo el difunto

tengo la camisa negra
ya tu amor no me interesa
lo que ayer me supo a gloria
hoy me sabe a pura
mi\xE9rcoles por la tarde y t \xFA que no llegas
ni siquiera muestras se\xF1as
y yo con la camisa negra
y tus maletas en la puerta

mal parece que solo me qued\xE9
y fue pura todita tu mentira
que maldita mala suerte la m\xEDa
que aquel d\xEDa te encontr\xE9

por beber del veneno malevo de tu amor
yo qued\xE9 moribundo y lleno de dolor
respir\xE9 de ese humo amargo de tu adi\xF3s
y desde que t\xFA te fuiste yo solo tengo...

tengo la camisa negra
porque negra tengo el alma
yo por ti perd\xED la calma
y casi pierdo hasta mi cama

cama cama camon baby
te digo con disimulo
que tengo la camisa negra
y debajo tengo el difunto`,sp:"",sps:"https://open.spotify.com/search/La%20Camisa%20Negra%20Juanes"},{id:"corazon-espinado",t:"Coraz\xF3n Espinado",artist:"Santana feat. Man\xE1",pri:"Latina",tags:["Balada","Latina"],lyrics:`CORAZ\xD3N ESPINADO
Esa mujer me esta matando
me ha espinado el coraz\xF3n
por m\xE1s que trato de olvidarla
mi alma no da raz\xF3n.

Mi coraz\xF3n aplastado
dolido y abandonado
a ver a ver tu sabes dime mi amor
cuanto amor y que dolor nos qued\xF3

Ah ah ah coraz\xF3n espinado
Como duele me duele mam\xE1
Ah ah ah como me duele el amor

Como duele como duele el coraz\xF3n
cuando uno es bien entregado
pero no olvides mujer que algun d\xEDa diras
ay ay ay como me duele el amor

Ah ah ah coraz\xF3n espinado
Como duele me duele mam\xE1
Ah ah ah como me duele el amor

Como me duele el olvido
como duele el coraz\xF3n
como me duele estar vivo
sin tenerte a un lado amor

Coraz\xF3n espinado....
coraz\xF3n espinado....`,sp:"",sps:"https://open.spotify.com/search/Coraz%C3%B3n%20Espinado%20Santana%20feat.%20Man%C3%A1"},{id:"medo-de-chuva",t:"Medo de Chuva",artist:"",pri:"Forr\xF3",tags:["Forr\xF3"],lyrics:`Voc\xEA que tem medo de chuva
voc\xEA n\xE3o \xE9 nem de papel
muito menos feito de a\xE7ucar
ou algo parecido com mel,
experimente tomar banho de chuva
e conhecer a energia do c\xE9u
a energia dessa \xE1gua sagrada
nos aben\xE7oa da cabe\xE7a aos p\xE9s,

Oh chuva, eu pe\xE7o que caia devagar \u2028s\xF3 molhe esse povode alegria
para nunca mais chorar, para nunca mais
chorar (2x)

Voc\xEA que tem medo de chuva
voc\xEA n\xE3o \xE9 nem de papel
muito menos feito de a\xE7ucar
ou algo parecido com mel,
experimente tomar banho de chuva
e conhecer a energia do c\xE9u
a energia dessa \xE1gua sagrada
nos aben\xE7oa da cabe\xE7a aos p\xE9s,`,sp:"",sps:"https://open.spotify.com/search/Medo%20de%20Chuva"},{id:"esperando-na-janela",t:"Esperando na Janela",artist:"Gilberto Gil / Targino Gondim",pri:"Forr\xF3",tags:["Forr\xF3"],lyrics:`Ainda me lembro do seu caminhar
Seu jeito de olhar, eu me lembro bem
Fico querendo sentir o seu cheiro
\xC9 daquele jeito que ela tem

O tempo todo eu fico feito tonto
Sempre procurando, mas ela n\xE3o vem
E esse aperto no fundo do peito
Desses que o sujeito n\xE3o pode aguentar, ah

E esse aperto aumenta meu desejo
Eu n\xE3o vejo a hora de poder lhe falar

Por isso eu vou na casa dela, ai, ai
Falar do meu amor pra ela, vai
T\xE1 me esperando na janela, ai, ai
N\xE3o sei se vou me segurar`,sp:"",sps:"https://open.spotify.com/search/Esperando%20na%20Janela%20Gilberto%20Gil%20/%20Targino%20Gondim"},{id:"nosso-xote",t:"Nosso Xote",artist:"",pri:"Forr\xF3",tags:["Forr\xF3"],lyrics:`Moreno me convidou para dan\xE7ar um xote
Beijou o meu cabelo cheirou meu cangote
Fez meu corpo inteiro se arrepiar
Fiquei sem jeito e ele me acolheu junto ao peito
E foi nos bra\xE7os desse moreno
Que eu forroziei at\xE9 o dia clariar
Oi oi oi oi oi oi me encantei por teu olhar
Moreno chega mais pra c\xE1
Meu dengo vem me chameg\xE1
Oi oi oi oi oi oi teu jeito de balancear
O corpo inteiro
Faz meu cora\xE7\xE3o bater
ligeiro assim eu vou me apaixonar`,sp:"",sps:"https://open.spotify.com/search/Nosso%20Xote"},{id:"voce-nao-vale-nada",t:"Voc\xEA N\xE3o Vale Nada",artist:"Avi\xF5es do Forr\xF3",pri:"Forr\xF3",tags:["Forr\xF3"],lyrics:`Voc\xEA n\xE3o vale nada, Mas eu gosto de voc\xEA!
Voc\xEA n\xE3o vale nada,  Mas eu gosto de voc\xEA!
Tudo que eu queriaera saber Porqu\xEA?!?
Tudo que eu queria era saber Porqu\xEA?!?

Voc\xEA brincou comigo,
bagun\xE7ou a minha vida.
E essse meu sofrimento
n\xE3o tem explica\xE7\xE3o.
J\xE1 fiz de quase tudo tentando te esquecer.
Vendo a hora morrer
n\xE3o posso me acabar na m\xE3o.
Seu sangue \xE9 de barata,
a Boca \xE9 de vampiro.
Um dia eu lhe tiro de vez do meu cora\xE7\xE3o.
A\xED n\xE3o mais te queroAmor n\xE3o d\xEA ouvidos
Por favor me perdoa T\xF4 morrendo de paix\xE3o.

Eu quero ver voc\xEA sofrer
S\xF3 pra deixar de ser ruim
Eu vou fazer voc\xEA chorar, se humilhar
Ficar correndo atr\xE1s de mim...(2X)

Voc\xEA n\xE3o vale nada,
Mas eu gosto de voc\xEA!
Voc\xEA n\xE3o vale nada,
Mas eu gosto de voc\xEA!
Tudo que eu queria
era saber Porqu\xEA?!?
Tudo que eu queria
era saber Porqu\xEA?!?`,sp:"",sps:"https://open.spotify.com/search/Voc%C3%AA%20N%C3%A3o%20Vale%20Nada%20Avi%C3%B5es%20do%20Forr%C3%B3"},{id:"i-ve-got-you-under-my-skin",t:"I've Got You Under My Skin",artist:"Frank Sinatra",pri:"Jazz/Standard",tags:["Baile","Fox","Jazz","Standard"],lyrics:`I've got you under my skin
I've got you deep in the heart of me
So deep in my heart, that you're really a part of me
I've got you under my skin

I've tried so not to give in
I've said to myself this affair it never gonna go so well
But why should I try to resist, when baby I know so well   I've got you under my skin

I would sacrifice anything come what might
For the sake of having you near
In spite of a warning voice that comes in the night  And repeats in my ear

Don't you know little fool, you never can win
Use your mentality, wake up to reality
But each time that I do, just the thought of you  Makes me stop before I begin
'Cause I've got you under my skin

I would sacrifice anything come what might
for the sake of having you near
in spite of a warning voice that comes in the night
and repeats the shouts in my ear

dont you know you fool, you never can win
why not Use your mentality, wake up to reality
but each time I do, just the thought of you
makes me stop just before i begin
cause I've got you under my skin
I love you under my skin`,sp:"",sps:"https://open.spotify.com/search/I%27ve%20Got%20You%20Under%20My%20Skin%20Frank%20Sinatra"},{id:"cheek-to-cheek",t:"Cheek to Cheek",artist:"Frank Sinatra",pri:"Jazz/Standard",tags:["Baile","Fox","Jazz","Standard"],lyrics:`HEAVEN I'M IN HEAVEN
AND MY HEART BEATS SO THAT I CAN HARDLY SPEAK
AND I SEEM TO FIND THE HAPPINESS I SEEK
WHEN WE'RE OUT TOGETHER DANCING CHEEK TO CHEEK

HEAVEN I'M IN HEAVEN
AND THE CARES THAT HUNG AROUND ME THROUGH THE WEEK
SEEM TO VANISH LIKE A GAMBLERS LUCKY STREAK
WHEN WE'RE OUT TOGETHER DANCING CHEEK TO CHEEK

OH, I LOVE TO CLIMB A MOUNTAIN
AND TO REACH THE HIGHEST PEAK
BUT IT DOESN'T THRILL ME HALF AS MUCH AS DANCING CHEEK TO CHEEK

OH, I LOVE TO GO OUT FISHING
IN A RIVER, OR A CREEK
BUT I DON'T ENJOY IT HALF AS MUCH AS DANCING CHEEK TO CHEEK

DANCE WITH ME
I WANT MY ARM ABOUT YOU
THAT CHARM ABOUT YOU WILL CARRY ME THROUGH TO...

HEAVEN I'M IN HEAVEN
AND MY HEART BEATS SO THAT I CAN HARDLY SPEAK
AND I SEEM TO FIND THAT HAPPINESS I SEEK
WHEN WE'RE OUT TOGETHER SWINGING CHEEK TO CHEEK

COME ON AND DANCE WITH ME
I WANT MY ARM ABOUT YOU
THAT CHARM ABOUT YOU WILL CARRY ME THROUGH
RIGHT UP TO...

HEAVEN  I'M IN HEAVEN
AND MY HEART BEATS SO THAT I CAN HARDLY SPEAK
AND I SEEM TO FIND THAT HAPPINESS I SEEK
WHEN WE'RE OUT TOGHETHER DANCING
OUT TOGETHER DANCING
OUT TOGETHER DANCING CHEEK TO CHEEK!`,sp:"",sps:"https://open.spotify.com/search/Cheek%20to%20Cheek%20Frank%20Sinatra"},{id:"fly-me-to-the-moon",t:"Fly Me To The Moon",artist:"Frank Sinatra",pri:"Jazz/Standard",tags:["Baile","Fox","Jazz","Standard"],lyrics:`FLY ME TO THE MOON
LET ME PLAY AMOUNG THE STARS
LET ME SEE WHAT SPRING IS LIKE
ON JUPITER AND MARS
IN OTHER WORDS, HOLD MY HAND
IN OTHER WORDS, BABY KISS ME

FILL MY HEART WITH SONG AND
LET ME SING FOR EVER MORE
YOU ARE ALL I LONG FOR
ALL I WORSHIP AND ADORE
IN OTHER WORDS, PLEASE BE TRUE
IN OTHER WORDS, I LOVE YOU

FILL MY HEART WITH SONG AND
LET ME SING FOR EVER MORE
YOU ARE ALL I LONG FOR
ALL I WORSHIP AND ADORE
IN OTHER WORDS, PLEASE BE TRUE
IN OTHER WORDS
IN OTHER WORDSSS, I LOVE YOU`,sp:"",sps:"https://open.spotify.com/search/Fly%20Me%20To%20The%20Moon%20Frank%20Sinatra"},{id:"new-york-new-york",t:"New York, New York",artist:"Frank Sinatra",pri:"Jazz/Standard",tags:["Baile","Balada","Fox","Jazz","Standard"],lyrics:`Start spreading the news, I'm leaving today
I want to be part of it, New York, New York

These vagabond shoes Are longing to stray
Right through the very heart of it,
New York, New York

I wanna wake up in a city That doesn't sleep
And find I'm king of the hill, Top of the heap

These little town blues  Are melting away.
I'll make a brand new start of it,
In old New York.

If I can make it there, I'll make it anywhere.
It's up to you, New York, New York.

New York, New York.
I want to wake up in that city
That never sleeps
And find I'm a number one
Top of the list, King of the hill,
A number one.

These little town blues
(all) melting away.

I'm gonna make
A brand new start of it
In old New York.

And if I can make it there,
I'm gonna make it anywhere.
It's up to you,
New York,
New York!
New York!!`,sp:"",sps:"https://open.spotify.com/search/New%20York%2C%20New%20York%20Frank%20Sinatra"},{id:"verdade-chinesa",t:"Verdade Chinesa",artist:"Zeca Pagodinho",pri:"Samba",tags:["Samba"],lyrics:`Era s\xF3 isso Que eu queria da vida
Uma cerveja Uma ilus\xE3o atrevida
Que me dissesse Uma verdade chinesa
Com uma inten\xE7\xE3o
De um beijo doce na boca...

A tarde cai Noite levanta a magia
Quem sabe a gente Vai se ver outro dia
Quem sabe o sonho Vai ficar na conversa
Quem sabe at\xE9 a vida Pague essa promessa.

Muita coisa a gente faz
Seguindo o caminho Que o mundo tra\xE7ou
Seguindo a cartilha Que algu\xE9m ensinou
Seguindo a receitaDa vida normal...

Mas o que \xE9 Vida afinal?
Ser\xE1 que \xE9 fazer
O que o mestre mandou?
\xC9 comer o p\xE3o Que o diabo amassou?
Perdendo da vida
O que tem de melhor...

Senta, se acomoda
\xC0 vontade, t\xE1 em casa
Toma um copo, d\xE1 um tempo
Que a tristeza vai passar
Deixa, pr\xE1 amanh\xE3 Tem muito tempo
O que vale \xC9 o sentimento
E o amor que a gente Tem no cora\xE7\xE3o...

(Repetir a letra)

(Final):
Senta, se acomoda
\xC0 vontade, t\xE1 em casa
Toma um copo, d\xE1 um tempo
Que a tristeza vai passar...
Deixa, pr\xE1 amanh\xE3
Tem muito tempo
O que vale \xC9 o sentimento
E o amor que a gente
Tem no cora\xE7\xE3o...(2x)`,sp:"",sps:"https://open.spotify.com/search/Verdade%20Chinesa%20Zeca%20Pagodinho"},{id:"agamamou",t:"Agamamou",artist:"Olodum",pri:"Samba",tags:["Samba"],lyrics:`E a galera l\xE1 do Morro do Salgueiro e Vidigal, t\xE1 querendo balan\xE7ar
A torcida do Corinthians e Flamengo t\xE1 tamb\xE9m, t\xE1 querendo balan\xE7ar
E o povo do nordeste, do xaxado quer oque?
T\xE1 querendo balan\xE7ar
A Bahia do batuque, da mandinga e coisa e tal, t\xE1 querendo balan\xE7ar

Brasileiro vive na ra\xE7a,
o pagode \xE9 o canto da massa
T\xE1 plantando at\xE9 bananeira,
\xE9 Jos\xE9, \xE9 Jo\xE3o, \xE9 Ferreira
Mas ningu\xE9m me reconhece como grande cidad\xE3o
\xC9 cidad\xE3o, \xE9 cidad\xE3o, \xE9 cidad\xE3o

Ningu\xE9m me reconhece como grande cidad\xE3o
\xC9 cidad\xE3o, \xE9 cidad\xE3o, \xE9 cida...
Ningu\xE9m me reconhece como grande cidad\xE3o
\xC9 cidad\xE3o, \xE9 cidad\xE3o, \xE9 cidad\xE3o
Ningu\xE9m me reconhece como grande cidad\xE3o
\xC9 cidad\xE3o, \xE9 cidad\xE3o, \xE9 cidad\xE3\xE3\xE3\xE3\xE3\xE3\xE3o...Ah, Ah, Eh, Kedjendjen

Requebra de c\xE1, requebra de l\xE1,
t\xE1 querendo balan\xE7ar
Um olho daqui e outro acol\xE1,
t\xE1 querendo balan\xE7ar
Na palma da m\xE3o pro povo esquentar,
t\xE1 querendo balan\xE7ar
E bl\xE1, bl\xE1, bl\xE1, e bl\xE1, bl\xE1, bl\xE1,
t\xE1 querendo balan\xE7ar

Agamamou, love, love, love, jou, jou`,sp:"",sps:"https://open.spotify.com/search/Agamamou%20Olodum"},{id:"flor-de-lis",t:"Flor de Lis",artist:"Djavan",pri:"Samba",tags:["Samba"],lyrics:`Valei-me, Deus! \xC9 o fim do nosso amor
Perdoa, por favor
Eu sei que o erro aconteceu
Mas n\xE3o sei o que fez Tudo mudar de vez
Onde foi que eu errei?
Eu s\xF3 sei que amei,
Que amei, que amei, que amei

Ser\xE1 talvez Que minha ilus\xE3o
Foi dar meu curacao Com toda for\xE7a
Pra essa mo\xE7a Me fazer feliz
E o destino n\xE3o quis
Me ver como raiz
De uma flor de lis

E foi assim que eu vi
Nosso amor na poeira, Poeira
Morto na beleza fria de Maria
E o meu jardim da vida
Ressecou, morreu
Do p\xE9 que brotou Maria
Nem margarida nasceu.

E o meu jardim da vida
Ressecou, morreu
Do p\xE9 que brotou Maria
Nem margarida nasceu.`,sp:"",sps:"https://open.spotify.com/search/Flor%20de%20Lis%20Djavan"},{id:"fato-consumado",t:"Fato Consumado",artist:"Djavan",pri:"Samba",tags:["Samba"],lyrics:`Eu quero ver voc\xEA mandar na raz\xE3o
Pra mim n\xE3o \xE9 qualquer not\xEDcia que abala um cora\xE7\xE3o (4x)

Se toda hora \xE9 hora de dar decis\xE3o,
eu falo agora
No fundo eu julgo o mundo um fato consumado e vou embora
N\xE3o quero mais, de mais a mais,
me aprofundar nessa hist\xF3ria
Arreio os meus anseios, perco o veio e vivo de mem\xF3ria

Eu quero \xE9 viver em paz
Por favor me beije a boca
Que louca, que louca!
Eu quero \xE9 viver em paz
Por favor me beije a boca
Que louca, que louca!`,sp:"",sps:"https://open.spotify.com/search/Fato%20Consumado%20Djavan"},{id:"ive-brussel",t:"Ive Brussel",artist:"",pri:"Samba",tags:["Samba"],lyrics:`Voc\xEA com essa mania sensual ....
de sentir e me olhar
Voc\xEA com esse seu jeito contagiante....
fiel e sutil de lutar

N\xE3o sei n\xE3o, assim voc\xEA acaba me conquistando
N\xE3o sei n\xE3o, assim eu acabo me entregando

Pois est\xE1 fazendo um ano e meio amor
Que eu estive por aqui
Desconfiado, sem jeito  quase calado
Quando fui bem recebido e desejado por voc\xEA

Nunca como eu poderia esquecer amor
Ai, ai ai se naquele dia voc\xEA foi tudo, foi demais pra mim
Ai, ai se naquele dia voc\xEA. foi tudo, fez de mim um anjo

Ive, Ive Ive Brussel, Brussel, Brussel, Brussel`,sp:"",sps:"https://open.spotify.com/search/Ive%20Brussel"},{id:"eu-fui",t:"Eu Fui",artist:"",pri:"Samba",tags:["Samba"],lyrics:` d\xE1 mais
N\xE3o adianta se desesperar, gritar, chorar
Se voc\xEA quiser acreditar ou n\xE3o tanto faz
Eu j\xE1 t\xF4 na pista, na pegada pronto pra atacar
Quando voc\xEA me tinha voc\xEA nunca quis me dar valor
Voc\xEA lembra como eu vivia atr\xE1s de voc\xEA
Que decep\xE7\xE3o pois voc\xEA foi o meu primeiro amor
Agora j\xE1 era eu aprendi vo botar pra ....

Fui..

N\xE3o quero mais sofrer assim
FUI
Voc\xEA fez muito mal pra mim
FUI
\xC9 bom pra voc\xEA aprender
Se fizer assim como fez pra mim
Novamente vai ouvir

FUI..

deu pra mim n\xE3o d\xE1 mais
S\xF3 quero aproveitar o tempo que deixei pra tr\xE1s
Deu pra mim n\xE3o d\xE1 mais
J\xE1 me cansei de ser aquele bom rapaz.`,sp:"",sps:"https://open.spotify.com/search/Eu%20Fui"},{id:"danca-do-bole-bole",t:"Dan\xE7a do Bole-bole",artist:"Exalta Samba",pri:"Samba",tags:["Samba"],lyrics:`Mulherada que dan\xE7a \xE9 essa que o corpo fica todo mole?
[Mulherada que dan\xE7a \xE9 essa que o corpo fica todo mole?]
\xC9 uma dan\xE7a nova que bole, bole, bole, bole
[\xC9 uma dan\xE7a nova que bole, bole, bole, bole]

Bole, bole, bole, bole
Bole, bole, bole, bole
Bole, bole, bole, bole
Bole, bole, bole, bole

Bole, bole, bole, bole
Bole, bole, bole, bole
Bole, bole, bole, bole
Bole, bole, bole, bole

[Mulheraaaada]

Mulherada que dan\xE7a \xE9 essa que o corpo fica todo mole?
[Mulherada que dan\xE7a \xE9 essa que o corpo fica todo mole?]
\xC9 uma dan\xE7a nova que bole,bole, bole, bole
[\xC9 uma dan\xE7a nova que bole,bole, bole, bole]

Bole, bole, bole, bole [loirinha]
Bole, bole, bole, bole [moreninha]
Bole, bole, bole, bole [mulatinha]
Bole, bole, bole, bole [dan\xE7a pretinha]

Bole, bole, bole, bole [dan\xE7a branquinha]
Bole, bole, bole, bole [dan\xE7a ruivinha]
Bole, bole, bole, bole [japonesinha]
Bole, bole, bole, bole

[Mulheraaaada]`,sp:"",sps:"https://open.spotify.com/search/Dan%C3%A7a%20do%20Bole-bole%20Exalta%20Samba"},{id:"peguei-um-ita-no-norte-salgueiro",t:"Peguei Um Ita No Norte (Salgueiro)",artist:"",pri:"Samba",tags:["Carnaval","Samba","Samba-Enredo"],lyrics:`Explode cora\xE7\xE3o
Na maior felicidade
\xC9 lindo meu Salgueiro
Contagiando e sacudindo esta cidade

L\xE1 vou eu...
Me levo pelo mar da sedu\xE7\xE3o (sedu\xE7\xE3o)
Sou mais um aventureiro
Rumo ao Rio de Janeiro
Adeus Bel\xE9m do Par\xE1
Um dia eu volto, meu pai
N\xE3o chore, pois vou sorrir
Felicidade, o velho Ita vai partir!

Oi, no balan\xE7o das ondas, eu vou
No mar eu jogo a saudade, amor
O tempo traz esperan\xE7a e ansiedade,
Vou navegando em busca da felicidade

Em cada porto que passo
Eu vejo e retrato em fantasia
Cultura, folclore e h\xE1bitos
Com isso refa\xE7o minha alegria
Chego ao Rio de Janeiro
Terra do samba, da mulata e futebol
Vou vivendo o dia a dia
Embalado na magia Do seu carnaval

Explode cora\xE7\xE3o
Na maior felicidade
\xC9 lindo meu Salgueiro
Contagiando e sacudindo esta cidade`,sp:"",sps:"https://open.spotify.com/search/Peguei%20Um%20Ita%20No%20Norte%20%28Salgueiro%29"},{id:"gavioes-fiel",t:"Gavi\xF5es Fiel",artist:"",pri:"Samba",tags:["Carnaval","Samba","Samba-Enredo"],lyrics:`Me d\xEA a m\xE3o, me abra\xE7a
Viaja comigo pro c\xE9u
Sou Gavi\xE3o, levanto a ta\xE7a
Com muito orgulho, pra del\xEDrio da Fiel
Me d\xEA a m\xE3o, me abra\xE7a
Viaja comigo pro c\xE9u
Sou Gavi\xE3o, levanto a ta\xE7a
Com muito orgulho, pra del\xEDrio da Fiel

Ai, um brinde,
Um brinde ao jubileu de prata
Convido a massa, pra comemorar
Explode um grito na galera
Tem gol de fera, para delirar
Explode um grito na galera
Tem gol de fera, para delirar
Oi, hoje,
Hoje sou crian\xE7a reino encantado de brinquedo e fantasia
Na minha lembran\xE7a
Sonhei dourado e brinquei de poesia
Vou te levar pro infinito
Vou te beijar do jeito mais bonito
Ai que gostoso
Ai que gostoso amor, ai que saudade
Te amo, te amo de verdade
Maravilhas
Fadas e rainhas, mil her\xF3is na minha hist\xF3ria
O que \xE9 bom pra sempre
Fica gravado na mem\xF3ria
Tem pierr\xF4
Pierr\xF4 arlequim colombina
Todo mundo quer sambar
Se enroscar na serpentina
Olha pra mim abre o teu sorriso
\xC9 Carnaval sou rei do riso
Vou gargalhar, quero alegria
Lavar a alma com o som da bateria
Olha pra mim abre o teu sorriso
\xC9 Carnaval sou rei do riso
Vou gargalhar, quero alegria
Lavar a alma com o som da bateria
Me d\xEA a m\xE3o
Me d\xEA a m\xE3o, ma abra\xE7a...`,sp:"",sps:"https://open.spotify.com/search/Gavi%C3%B5es%20Fiel"},{id:"atras-da-verde-e-rosa-so-nao-vai-quem-ja-morreu-",t:"Atr\xE1s da Verde e Rosa S\xF3 N\xE3o Vai Quem J\xE1 Morreu (Mangueira 1994)",artist:"",pri:"Samba",tags:["Carnaval","Samba","Samba-Enredo"],lyrics:`ME LEVA QUE EU VOU
SONHO MEU ATR\xC1S DA VERDE E ROSA S\xD3 N\xC3O VAI QUEM J\xC1 MORREU

Bahia \xE9 luz
De poeta ao luar
Misticismo de um povo
Salve todos orix\xE1s
Quem me mandou
Estrelas de l\xE1
Foi s\xE3o salvador
Pra noite brilhar
Mangueira!
Jogando flores pelo mar
Se encantou com a musa
Que a Bahia d\xE1

Ob\xE1 berimbau ganz\xE1
\xD4 capoeira bis
Joga um verso pra iai\xE1

Caetano e Gil \xF4\xF4
Com a tropic\xE1lia no olhar
Doces b\xE1rbaros ensinando
A brisa a bailar
A meiguice de uma voz
Uma can\xE7\xE3o
No Teatro Opini\xE3o
Beth\xE2nia explode cora\xE7\xE3o
Domingo no parque amor
Alegria alegria eu vou
A flor na festa do interior
Seu nome \xE9 Gal
Aplausos ao cancioneiro
\xC9 carnaval \xE9 Rio de Janeiro

Me leva que eu vou
Sonho meu bis
Atras da verde-e-rosa
S\xF3 n\xE3o vai quem j\xE1 morreu`,sp:"",sps:"https://open.spotify.com/search/Atr%C3%A1s%20da%20Verde%20e%20Rosa%20S%C3%B3%20N%C3%A3o%20Vai%20Quem%20J%C3%A1%20Morreu%20%28Mangueira%201994%29"},{id:"o-que-e-o-que-e",t:"O Que \xC9, O Que \xC9?",artist:"Gonzaguinha",pri:"Samba",tags:["Carnaval","Samba","Samba-Enredo"],lyrics:`Eu fico com a pureza das respostas das crian\xE7as
\xC9 a vida, \xE9 bonita e \xE9 bonita
Viver e n\xE3o ter a vergonha de ser feliz
Cantar (e cantar e cantar)a beleza de ser um eterno
aprendiz
Ah meu deus!, eu sei, eu sei que a vida devia ser bem
melhor e ser\xE1
Mas isso n\xE3o impede que eu repita
\xC9 bonita, \xE9 bonita e \xE9 bonita

Viver, e n\xE3o ter a vergonha de ser feliz
Cantar (e cantar e cantar) a beleza de ser um eterno
aprendiz
Eu sei que a vida devia ser bem melhor e ser\xE1
Mas isso n\xE3o impede que eu repita
\xC9 bonita, \xE9 bonita e \xE9 bonita.

E a vida?
E a vida o que \xE9 diga l\xE1, meu irm\xE3o?
Ela \xE9 a batida de um cora\xE7\xE3o?
Ela \xE9 uma doce ilus\xE3o?
Mas e a vida?
Ela \xE9 maravilha ou \xE9 sofrimento?
Ela \xE9 alegria ou lamento?
O que \xE9, o que \xE9 meu irm\xE3o?

H\xE1 quem fale que a vida da gente
\xC9 um nada no mundo
\xC9 uma gota, \xE9 um tempo
Que finda num segundo,
H\xE1 quem fale que \xE9 um divino
Mist\xE9rio profundo
\xC9 o sopro do criador
Numa atitude repleta de amor
Voc\xEA diz que \xE9 luta e prazer;
Ele diz que a vida \xE9 viver;
Ela diz que o melhor \xE9 morrer,
Pois amada n\xE3o \xE9
E o verbo sofrer.

Eu s\xF3 sei que confio na mo\xE7a
E na mo\xE7a eu ponho a for\xE7a da f\xE9
Somos n\xF3s que fazemos a vida
Como der ou puder ou quiser

Sempre desejada
Por mais que esteja errada
Ningu\xE9m quer a morte
S\xF3 saude e sorte

E a pergunta roda
E a cabe\xE7a agita
Fico com a pureza da resposta das crian\xE7as
\xC9 a vida, \xE9 bonita e \xE9 bonita

Viver, e n\xE3o ter a vergonha de ser feliz
Cantar (e cantar e cantar) a beleza de ser um eterno
aprendiz
Eu sei que a vida devia ser bem melhor e ser\xE1
Mas isso n\xE3o impede que eu repita
\xC9 bonita, \xE9 bonita e \xE9 bonita`,sp:"",sps:"https://open.spotify.com/search/O%20Que%20%C3%89%2C%20O%20Que%20%C3%89%3F%20Gonzaguinha"},{id:"samba-enredo-1986-mangueira",t:"Samba-Enredo 1986 (Mangueira)",artist:"",pri:"Samba",tags:["Carnaval","Samba","Samba-Enredo"],lyrics:`A hora \xE9 essa!!!!!

Tem xinxim e acaraj\xE9,
Tamborim e samba no p\xE9. (bis)

Lua cheia... lua cheia
leva a jangada pro mar
Oh! sereira
como \xE9 belo o teu cantar
das estrelas a mais linda t\xE1 no gantois
mangueira, ber\xE7o do samba
Caymmi a inspira\xE7\xE3o
que mora no meu cora\xE7\xE3o,
Bahia terra sagrada
De Iemanja Ians\xE3,
Mangueira supercampe\xE3.

Tem xinxim e acaraj\xE9,
Tamborim e samba no p\xE9. (bis)`,sp:"",sps:"https://open.spotify.com/search/Samba-Enredo%201986%20%28Mangueira%29"},{id:"bum-bum-paticumbum-prugurundum-verificar",t:"Bum Bum Paticumbum Prugurundum (verificar)",artist:"",pri:"Samba",tags:["Carnaval","Samba","Samba-Enredo"],lyrics:` Paticundum Prugurudum
Nosso samba minha gente \xE9 isso ai

Bum Bum Paticundum Prugurudum
Contagiando a marques de sapuca\xED`,sp:"",sps:"https://open.spotify.com/search/Bum%20Bum%20Paticumbum%20Prugurundum%20%28verificar%29"},{id:"man-i-feel-like-a-woman",t:"Man! I Feel Like A Woman!",artist:"Shania Twain",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Let's go girls!

I'm going out tonight - I'm feelin' alright
Gonna let it all hang out
Wanna make some noise- really raise my voice
Yeah, I wanna scream and shout

No inhibitions - make no conditions
Get a little outta line
I ain't gonna act politically correct
I only wanna have a good time

The best thing about being a woman
Is the prerogative to have a little fun and...

Oh, oh, oh, go totally crazy - forget I'm a lady
Men's shirts - short skirts
Oh, oh, oh, really go wild - yeah, doin' it in style
Oh, oh, oh, get in the action - feel the attraction
Color my hair - do what I dare
Oh, oh, oh, I wanna be free - yeah, to feel the way I feel
Man! I feel like a woman!

The girls need a break - tonight we're gonna take
The chance to get out on the town
We don't need romance - we only wanna dance
We're gonna let our hair hang down

Oh, oh, oh, go totally crazy - forget I'm a lady
Men's shirts - short skirts
Oh, oh, oh, really go wild - yeah, doin' it in style
Oh, oh, oh, get in the action - feel the attraction
Color my hair - do what I dare
Oh, oh, oh, I wanna be free - yeah, to feel the way I feel
Man! I feel like a woman!

I get totally crazy
Can you feel it
Come, come, come on baby
I feel like a woman`,sp:"",sps:"https://open.spotify.com/search/Man%21%20I%20Feel%20Like%20A%20Woman%21%20Shania%20Twain"},{id:"meteoro",t:"Meteoro",artist:"Luan Santana",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Te dei o Sol, Te dei o Mar
Pra ganhar seu cora\xE7\xE3o;
Voc\xEA \xE9 raio de saudade;
Meteoro da paix\xE3o;
Explos\xE3o de sentimentos que eu n\xE3o pude acreditar; Aaaahh...
Como \xE9 bom poder te amar;

Depois que eu te conheci; Fui mais feliz;
Voc\xEA \xE9 exatamente o que eu sempre quis;
Ela se encaixa perfeitamente em mim;
O nosso quebra-cabe\xE7a teve fim;

Se for sonho, n\xE3o me acorde;
Eu preciso flutuar;
Pois s\xF3 quem sonha, Consegue alcan\xE7ar.

Repete cabe\xE7a

T\xE3o veloz quanto a luz;
pelo Universo eu viajei;
Vem me guia, me conduz;
Que pra sempre te amarei;

(Refrao 2x)`,sp:"",sps:"https://open.spotify.com/search/Meteoro%20Luan%20Santana"},{id:"ciumenta",t:"Ciumenta",artist:"C\xE9sar Menotti & Fabiano",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Saia dessa paran\xF3ia
De dizer que tenho outra
Porque assim voc\xEA vai ficar louca
\xC9 uma barra o teu ci\xFAme possessivo
Nunca p\xF5e f\xE9 naquilo que eu digo
Me liga toda hora pra saber
Com quem \xE9 que eu estou
No futebol com os amigos ou em
Qualquer lugar que eu vou

Ciumenta
Para de ser t\xE3o ciumenta
Desse jeito nenhum homem te aguenta
Ah eu j\xE1 nem sei o que fazer

Ciumenta
Para de ser t\xE3o ciumenta
Desse jeito nenhum homem te aguenta
Se liga ou voc\xEA vai me perder.`,sp:"",sps:"https://open.spotify.com/search/Ciumenta%20C%C3%A9sar%20Menotti%20%26%20Fabiano"},{id:"chora-me-liga",t:"Chora, Me Liga!",artist:"Jo\xE3o Bosco & Vin\xEDcius",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`N\xE3o era pra voc\xEA se apaixonar
Era s\xF3 pra gente ficar,
Eu te avisei  Meu bem eu te avisei.

Voc\xEA sabia que eu era assim
Paix\xE3o de uma noite
Que logo tem fim
Eu te falei  Meu bem eu te falei

N\xE3o vai ser t\xE3o f\xE1cil assim
voc\xEA me ter nas m\xE3os
Logo voc\xEA que era acostumada a brincar com outro cora\xE7\xE3o
N\xE3o venha me perguntar Qual a melhor sa\xEDda
Eu j\xE1 sofri muito por amor
Agora eu vou curtir a vida

Chora, me liga  Implora o meu beijo de novo
Me pede socorro
Quem sabe eu vou te salvar
Chora, me liga
Implora pelo meu amor  Pede por favor
Quem sabe um dia eu volto a te procurer`,sp:"",sps:"https://open.spotify.com/search/Chora%2C%20Me%20Liga%21%20Jo%C3%A3o%20Bosco%20%26%20Vin%C3%ADcius"},{id:"amo-noite-e-dia",t:"Amo Noite e Dia",artist:"Jorge & Mateus",pri:"Sertanejo",tags:["Sertanejo"],lyrics:` colado ao teu,
Alguma chave, algum segredo
que me prende ao seu,
Teu jeito perigoso de me conquistar,
Teu jeito t\xE3o gostoso de me abra\xE7ar,

Tudo se perde, se transforma, se ningu\xE9m te v\xEA.
Eu busco \xE0s vezes nos detalhes encontrar voc\xEA,
O tempo j\xE1 n\xE3o passa, s\xF3 anda pra tr\xE1s,
Me perco nessa estrada n\xE3o aguento mais....

I\xEA, I\xEA, I\xEA...

Passa o dia, passa a noite t\xF4 apaixonado,
Cora\xE7\xE3o no peito sofre sem voc\xEA do lado,
Dessa vez tudo \xE9 real, nada de fantasia...
Saiba que eu te amo. Amo Noite e Dia....`,sp:"",sps:"https://open.spotify.com/search/Amo%20Noite%20e%20Dia%20Jorge%20%26%20Mateus"},{id:"paga-pau",t:"Paga Pau",artist:"Fernando & Sorocaba",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Ela \xE9 atriz, ela faz cena,
Ela mete uma press\xE3o.
Se joga na minha frente .. Me engana n\xE3o!

Feito cobra mal matada,
Ela rebola eu passo mal,
Com o nariz empinado... Ela \xE9 tal !

Se eu mando um xaveco,
Ela finge n\xE3o ouvir,
Mas se eu grito: "Olha a Bruxa", vem discutir

Sua psicologia t\xE1 um tanto Quando errada,
Ou me aceita de uma vez... Ou t\xE1 danada!

Voc\xEA diz que n\xE3o me ama,
Voc\xEA diz que n\xE3o me quer
Mas fica pagando pau,
Qual \xE9 que \xE9?

Todo dia seu teatro \xE9
Exatamente igual,
Voc\xEA finge que me
Odeia mais no fundo
Paga pau!`,sp:"",sps:"https://open.spotify.com/search/Paga%20Pau%20Fernando%20%26%20Sorocaba"},{id:"leilao",t:"Leil\xE3o",artist:"C\xE9sar Menotti & Fabiano",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Estou a beira da loucura
Ningu\xE9m mais me segura
T\xF4 fora da sua vida Eu j\xE1 fui!!!

Quero a minha liberdade
Posso at\xE9 sentir saudades
Sei que custa dominar o cora\xE7\xE3o
Mas meu amor n\xE3o d\xE1 mais
Pra voc\xEA tanto fazEu me entrego Eu j\xE1 fui!!!

Eu quero a felicidade
Saber na verdade
Quem gosta de mim

Eu vou fazer um leil\xE3o
Quem da mais pelo meu cora\xE7\xE3o
Me ajude voltar a viver
Eu prefiro que seja voc\xEA

Eu vou fazer um leil\xE3o
Quem da mais pelo meu cora\xE7\xE3o
Me ajude voltar a viver
Estou aqui t\xE3o perto
Me arremate para voc\xEA.`,sp:"",sps:"https://open.spotify.com/search/Leil%C3%A3o%20C%C3%A9sar%20Menotti%20%26%20Fabiano"},{id:"que-pescar-que-nada",t:"Que Pescar, Que Nada!",artist:"Bruno & Marrone",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`J\xE1 paguei quem eu devia
Gra\xE7as a Deus eu t\xF4 sossegado
Eu pus o burro na sombra
E t\xF4 levando at\xE9 meu cunhado
Enchi o tanque do carro
Comprei cigarro e uma pinga boa
Juntei a traia de pesca
Vai ser uma festa l\xE1 na lagoa

Falei pra minha patroa Que a farra \xE9 boa
E bem comportada
E vou com alguns amigos
N\xE3o tem perigo nessa parada
N\xE3o ponho a cara pra fora
Nem jogar bola ela quer deixar
O jeito que tem agora
\xC9 falar pra ela que eu vou pescar

Que pescar que nada Vou beijar na boca
Ver a mulherada na madrugada
Ficando louca

Que pescar que nada Vou matar a fome
L\xE1 ninguem se mete
l\xE1 Vai ter sete pra cada homem`,sp:"",sps:"https://open.spotify.com/search/Que%20Pescar%2C%20Que%20Nada%21%20Bruno%20%26%20Marrone"},{id:"bebo-pra-carai",t:"Bebo Pra Cara\xED",artist:"Gino & Geno",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Toda vez que agente briga ela diz que vai embora
Aquela mala me assusta, pronta do lado de fora
Quando a gente quebra o pau, sempre eu fico e ela sai
Fico doido de saudade, ai eu bebo pa carai...

Ai eu bebo, ai eu bebo, Bebo pa carai,
bebo pa carai, bebo pa carai Refr\xE3o 2X

De repente ela volta toda cheia de alegria
Nem parece que a gente brigou naquele dia
Eu boto a mala pra dentro e pra cama a gente vai
E depois de tanto love, ai eu bebo pa carai...

Refr\xE3o 2X

(*) Depois de uma semana em casa, quero um trenzinho diferente
Uma coisa mais novinha, dessas que anima a gente
Toda vez que eu dou uma volta, quando eu chego a casa cai
Outra vez aquela mala, ai eu bebo pa carai`,sp:"",sps:"https://open.spotify.com/search/Bebo%20Pra%20Cara%C3%AD%20Gino%20%26%20Geno"},{id:"o-bicho-vai-pegar-o-chao-vai-tremer",t:"O Bicho Vai Pegar (O Ch\xE3o Vai Tremer)",artist:"Edson & Hudson",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`O ch\xE3o vai tremer
O bicho vai pegar
Sanfona vai gemer
Poeir\xE3o vai levantar

Pode ser com bota, com chinelo ou com sapato
Seja com tamanco, botina e at\xE9 descal\xE7o
O que importa agora \xE9 curtir esse bail\xE3o
No tinido da madeira, quero ver tremer o ch\xE3o

Mulherada bate palma, os homens batendo o p\xE9
Abra\xE7o, beijo na boca, \xE9 isso que a galera quer
Pode misturar cacha\xE7a com cerveja e guaran\xE1
Hoje eu quero a tristeza bem longe deste lugar`,sp:"",sps:"https://open.spotify.com/search/O%20Bicho%20Vai%20Pegar%20%28O%20Ch%C3%A3o%20Vai%20Tremer%29%20Edson%20%26%20Hudson"},{id:"pode-chorar",t:"Pode Chorar",artist:"Jorge & Mateus",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Quase que acabo com a minha vida
Voc\xEA me p\xF4s num beco sem sa\xEDda
Por que fez isso comigo?
Me dediquei somente a voc\xEA
Tudo o que eu podia eu tentei fazer
Mas n\xE3o, n\xE3o adiantou.

Voc\xEA n\xE3o sabe o que \xE9 Amar
Voc\xEA n\xE3o sabe o que \xE9 Amor
Acha que \xE9 somente ficar, ficar, ficar
E se rolar rolou.
N\xE3o se maltrata o cora\xE7\xE3o
De quem n\xE3o merece sofrer.
N\xE3o vou ficar na solid\xE3o de m\xE3o em m\xE3o
Assim como voc\xEA.

Pode chorar,
Mas eu n\xE3o volto pra voc\xEA.
Pode chorar,
Voc\xEA n\xE3o vai me convencer.
Pode chorar,
Voc\xEA se lembra o quanto eu chorei por voc\xEA.`,sp:"",sps:"https://open.spotify.com/search/Pode%20Chorar%20Jorge%20%26%20Mateus"},{id:"bala-de-prata",t:"Bala de Prata",artist:"Fernando & Sorocaba",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Criminosa
N\xE3o posso olhar dentro do seu olhar,
Bala de Prata acerta pra matar.
Virei seu ref\xE9m e n\xE3o quero escapar.
Bandida
Voc\xEA atirou em minha dire\xE7\xE3o,
E acertou bem no meu cora\xE7\xE3o.
Minha vida ficou na palma de suas m\xE3os.

Hoje cedo acordei mas sei l\xE1
uma coisa diferente em mim
O meu corpo arranhado, suado,
uma hist\xF3ria sem come\xE7o e fim
Ela entrou no meio da noite,
tem a chave do meu cora\xE7\xE3o
de repente soltou seus cabelos
me entreguei sem ter rea\xE7\xE3o.

N\xE3o posso olhar dentro do seu olhar,
Bala de Prata acerta pra matar.
Virei seu ref\xE9m e n\xE3o quero escapar.
Bandida
Voc\xEA atirou em minha dire\xE7\xE3o,
E acertou bem no meu cora\xE7\xE3o.
Minha vida ficou na palma de suas m\xE3os.

Estou vivendo na cela da paix\xE3o
eu fui condenado pelo amor
Ela \xE9 perigo \xE9 abrigo
uma mistura de querer e dor
Ela \xE9 um pouco do fogo e do gelo,
ela \xE9 sol \xE9 chuva de ver\xE3o
O seu charme me fez prisioneiro
invadiu de vez meu cora\xE7\xE3o.

N\xE3o posso olhar dentro do seu olhar,
Bala de Prata acerta pra matar.
Virei seu ref\xE9m e n\xE3o quero escapar.
Bandida
Voc\xEA atirou em minha dire\xE7\xE3o,
E acertou bem no meu cora\xE7\xE3o.
Minha vida ficou na palma de suas m\xE3os.

Criminosa
n\xE3o posso olhar dentro do seu olhar,
Bala de prata acerta pra matar.
Virei seu ref\xE9m e n\xE3o quero escapar.
Bandida
Voc\xEA atirou em minha dire\xE7\xE3o,
E acertou bem no meu cora\xE7\xE3o.
minha vida ficou na palma de suas m\xE3os.`,sp:"",sps:"https://open.spotify.com/search/Bala%20de%20Prata%20Fernando%20%26%20Sorocaba"},{id:"mala-pronta",t:"Mala Pronta",artist:"Hugo Pena & Gabriel",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Voc\xEA passou da conta
E me tirou do s\xE9rio
Voc\xEA fez tudo errado e acabou o mist\xE9rio
Hoje eu tirei a prova
Hoje eu sa\xED pra rua
Hoje eu dividi a minha vida e a sua
N\xE3o d\xE1 mais, n\xE3o valeu
Dessa vez, voc\xEA me perdeu

Deixa a mala pronta
Arruma a sua roupa
Pode ir embora que eu arranjo outra
Eu t\xF4 falando s\xE9rio, pode acreditar
Sabendo que eu tenho raz\xE3o porque que eu vou chorar
Deixa a mala pronta

N\xE3o d\xE1 mais, n\xE3o valeu
Dessa vez, voc\xEA me perdeu

Deixa a mala pronta Arruma a sua roupa
Pode ir embora que eu arranjo outra
Eu t\xF4 falando s\xE9rio, pode acreditar
Sabendo que eu tenho raz\xE3o porque que eu vou chorar(2X)`,sp:"",sps:"https://open.spotify.com/search/Mala%20Pronta%20Hugo%20Pena%20%26%20Gabriel"},{id:"vendaval",t:"Vendaval",artist:"Fernando & Sorocaba",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Vendaval
Ela devasta minha vida
Por causa de um ci\xFAme banal
Um erro de um minuto n\xE3o pode ter valor,
se eu vivi com voc\xEA 24 horas de amor

O vaso se quebrou
O nosso amor morreu
A chama se apagou
Ser\xE1 que tudo isso \xE9 erro meu
Voc\xEA \xE9 imprevisivel menina e mulher
Fecha a cara quando quer
N\xE3o sabe ouvir um n\xE3o  uou n\xE3o

Vendaval
Ela devasta minha vida
Por causa de um ci\xFAme banal
Um erro de um minuto n\xE3o pode ter valor,
se eu vivi com voc\xEA 24 horas de amor

Sou humano tenho os meus defeitos
Essa \xE9 a vida real
N\xE3o fa\xE7a essa garoa
Se transformar em um temporal
Comece a enxergar o lado bom do amor
Quem ama enfrenta a dor
N\xE3o minta pro cora\xE7\xE3o

Vendaval
Ela devasta minha vida
Por causa de um ci\xFAme banal
Um erro de um minuto n\xE3o pode ter valor,
se eu vivi com voc\xEA 24 horas de amor`,sp:"",sps:"https://open.spotify.com/search/Vendaval%20Fernando%20%26%20Sorocaba"},{id:"vou-fazer-pirraca",t:"Vou Fazer Pirra\xE7a",artist:"Jorge & Mateus",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Vou pagar promessa de joelhos
S\xF3 pra esquecer voc\xEA
Vou passar uns dias l\xE1 na lua
Eu n\xE3o quero mais te ver

Vou falar pro meu cora\xE7\xE3o bater o p\xE9
Pra n\xE3o morrer de paix\xE3o, n\xE3o quero
Mais esse amor que me faz t\xE3o mal
Chega de sofrer..adeus, ponto final

N\xE3o vou mais chorar, como chorei
Nem me lembrar que um dia te amei
Bye Bye tristeza, adeus solid\xE3o
Vou fazer pirra\xE7a pro seu cora\xE7\xE3o (2x)

Vou pagar promessa de joelhos
S\xF3 pra esquecer voc\xEA
Vou passar uns dias l\xE1 na lua
Eu n\xE3o quero mais te ver

Vou falar pro meu cora\xE7\xE3o bater o p\xE9
Pra n\xE3o morrer de paix\xE3o, n\xE3o quero
Mais esse amor que me faz t\xE3o mal
Chega de sofrer..adeus, ponto final.

N\xE3o vou mais chorar, como chorei
Nem me lembrar que um dia te amei
Bye Bye tristeza, adeus solid\xE3o
Vou fazer pirra\xE7a pro seu cora\xE7\xE3o (2x)`,sp:"",sps:"https://open.spotify.com/search/Vou%20Fazer%20Pirra%C3%A7a%20Jorge%20%26%20Mateus"},{id:"borboletas",t:"Borboletas",artist:"Victor & Leo",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Percebo que o tempo j\xE1 n\xE3o passa
Voc\xEA diz que n\xE3o tem gra\xE7a amar assim
Foi tudo t\xE3o bonito, mas voou pro infinito
Parecido com borboletas de um jardim

Agora voc\xEA volta
E balan\xE7a o que eu sentia por outro algu\xE9m
Dividido entre dois mundos
Sei que estou amando mas ainda n\xE3o sei quem

N\xE3o sei dizer o que mudou
Mas nada est\xE1 igual
Numa noite estranha,a gente se estranha,e fica mal
Voc\xEA tenta provar que tudo em n\xF3s morreu
Borboletas sempre voltam
E o seu jardim sou eu`,sp:"",sps:"https://open.spotify.com/search/Borboletas%20Victor%20%26%20Leo"},{id:"fada",t:"Fada",artist:"",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Dona... da minha vida
Voc\xEA se foi  Levou meu calor
Voc\xEA se foi mas n\xE3o me levou

Lua, lua de encanto
Ou\xE7a pra quem eu canto
Ela levou minha magia
Mas ela \xE9 minha alegria

Vejo uma luz, uma estrela brilhar
Sinto um cheiro de perfume no ar
Vejo minha fada e sua vara de cond\xE3o
Tocando meu cora\xE7\xE3o

Refr\xE3o:
Madrugada de amor que n\xE3o vai acabar
Se estou sonhando n\xE3o quero mais acordar
Minha hist\xF3ria linda, meu conto de amor

Algo aqui me diz que essa paix\xE3o n\xE3o \xE9 em v\xE3o
O meu sentimento \xE9 bem mais que uma emo\xE7\xE3o
Eu espero o tempo que for
Minha fada do amor`,sp:"",sps:"https://open.spotify.com/search/Fada"},{id:"como-um-anjo",t:"Como Um Anjo",artist:"C\xE9sar Menotti & Fabiano",pri:"Sertanejo",tags:["Sertanejo"],lyrics:`Como um anjo Voc\xEA apareceu na minha vida
Como um anjo Repleto de ternura e de paix\xE3o oh oh...
Como um anjo
Encanto e sedu\xE7\xE3o doce aventura
Hum que loucura voc\xEA desabrochando no meu cora\xE7\xE3o

Linda menina
Com olhar inocente, mal\xEDcia, desejo e tenta\xE7\xE3o
Que me cobre de amor e car\xEDcias vencendo a solid\xE3o

S\xF3 voc\xEA pra me fazer feliz

Ai Ai Ai Ai Ai
Anjo, a luz do sol t\xE1 me acordando
N\xE3o v\xE1 embora estou te amando
Por favor n\xE3o me deixe s\xF3
Ai Ai Ai Ai Ai
Anjo, n\xE3o quero abrir meus olhos
Quero seguir vivendo um sonho de sermos s\xF3 voc\xEA e eu

Linda menina com olhar inocente mal\xEDcia, desejo e tenta\xE7\xE3o
Que me cobre de amor e car\xEDcias vencendo a solid\xE3o
S\xF3 voc\xEA pra me fazer feliz Ai Ai Ai Ai Ai
Anjo, a luz do sol t\xE1 me acordando
N\xE3o v\xE1 embora estou te amando
Por favor n\xE3o me deixe s\xF3
Ai Ai Ai Ai Ai
Anjo, n\xE3o quero abrir meus olhos
Quero seguir vivendo um sonho de sermos s\xF3 voc\xEA e eu

Anjo, a luz do sol t\xE1 me acordando
N\xE3o v\xE1 embora estou te amando
Por favor n\xE3o me deixe s\xF3 Ai Ai Ai Ai Ai
Anjo, n\xE3o quero abrir meus olhos
Quero seguir vivendo um sonho de sermos s\xF3 voc\xEA e eu..`,sp:"",sps:"https://open.spotify.com/search/Como%20Um%20Anjo%20C%C3%A9sar%20Menotti%20%26%20Fabiano"},{id:"my-girl",t:"My Girl",artist:"The Temptations",pri:"Ax\xE9",tags:["Ax\xE9","Bahia","Balada"],lyrics:`I\xB4ve got sunshine   on a cloudy day
When it's cold outside
I\xB4ve got the month of May
I guess you'd say
What can make me feel this way
My girl (my girl, my girl)
Talking about my girl (my girl)

I've got so much honey
The bees envy me
I\xB4ve got a sweeter song
Than the birds  in the trees

Well    I guess you'd say
What can make me feel this way
My girl (my girl, my girl)
Talking about my girl (my girl)

Ooooh, Hooooo

Hey, hey, hey
Hey, hey, hey

Ooooooooo yeah

I don't need no money fortune or fame
I\xB4ve got all the riches baby
One man can claim

Well,  I guess you'd say
What can make me feel this way
My girl (my girl, my girl)
Talking about my girl (my girl)

Talking about my girl
I've got sunshine on a cloudy day
With my girl
I've even got the month of may
With my girl`,sp:"",sps:"https://open.spotify.com/search/My%20Girl%20The%20Temptations"},{id:"let-s-stay-together",t:"Let's Stay Together",artist:"Al Green",pri:"Ax\xE9",tags:["Ax\xE9","Bahia"],lyrics:`I, I'm so in love with you,
whatever you want to do,
is alright with me,
'cause you make me feel
so brand-new,

I want to spend my life with you,

they say it seems, baby,
since we've been together,
oh  loving you forever,
is what I neeeeed.

Let me be the one you come runnin' to,
I'll never be, ah, untrue,

Ooo baby,Let's... Let's stay together,
loving you whether, whether,
times are good or bad, happy or sad,

ohh yehh
whether time are good or bad,
happy or sad.

Why, somebody?,
Why do people break up,
Ohh  and turn around and make up?
I just can't see.

You'd never do that to me
(would you baby)?
Being around you, is all I see.
Here's what I want to do:

Let's... Let's stay together,
loving you whether, whether,
times are good or bad,
happy or sad.
(come on)

Let's... Let's stay together,
loving you whether, whether,
times are good or bad,
happy or sad...`,sp:"",sps:"https://open.spotify.com/search/Let%27s%20Stay%20Together%20Al%20Green"},{id:"sexbomb",t:"Sexbomb",artist:"Tom Jones",pri:"Ax\xE9",tags:["Ax\xE9","Bahia"],lyrics:`Spy on me baby use satellite
Infrared to see me move through the night
Aim gonna fire shoot me right
I'm gonna like the way you fight

Now you found the secret code I use
to wash away my lonely blues
So I can't deny or lie cause you're
the only one to make me fly.

Sexbomb Sexbomb you're a Sexbomb
You can give it to me, when I need to come along
Sexbomb sexbomb you're my sexbomb
And baby you can turn me on.

No don't get me wrong ain't gonna do you no harm (no)
This bomb's made for lovin' and you can shoot it far
I'm your main target come and help me ignite
Love struck holding you tight.

Make me explode although you know
the route to go to sex me slow
And yes, I must react to claims of those
who say that you are not all that.

Sexbomb Sexbomb you're a Sexbomb
You can give it to me, when I need to come along
Sexbomb sexbomb you're my sexbomb
And baby you can turn me on. (2x)

(Break)
You can give me more and more counting up the score
You can turn me upside down and inside out
You can make me feel the real deal
And I can give it to you any time because you're mine

Chorus:
Sexbomb Sexbomb you're a Sexbomb
You can give it to me, when I need to come along
Sexbomb Sexbomb you're my Sexbomb
And baby you can turn me on. 8x`,sp:"",sps:"https://open.spotify.com/search/Sexbomb%20Tom%20Jones"},{id:"crazy-little-thing-called-love",t:"Crazy Little Thing Called Love",artist:"Queen",pri:"Ax\xE9",tags:["Ax\xE9","Bahia"],lyrics:`This thing called love I just can't handle it
This thing called love I must get round to it
I ain't ready
Crazy little thing called love

This thing (this thing) called love (called love)
It cries (like a baby)
In a cradle all night
It swings (woo woo)
It jives (woo woo)
It shakes all over like a jelly fish
I kinda like it
Crazy little thing called love

There goes my baby
She knows how to Rock'n'Roll
She drives me crazy
She gives me hot and cold fever
Then she leaves me in a cool cool sweat

I gotta be cool relax get hip!
Get on my track's
Take a back seat
Hitchhike
And take a long ride on my motor bike
Until I'm ready
Crazy little thing called love

I gotta be cool relax get hip!
Get on my track's
Take a back seat
Hitchhike
And take a long ride on my motor bike
Until I'm ready (ready Freddie)
Crazy little thing called love

This thing called love I just can't handle it
This thing called love I must get round to it
I ain't ready
Crazy little thing called love...`,sp:"",sps:"https://open.spotify.com/search/Crazy%20Little%20Thing%20Called%20Love%20Queen"},{id:"i-gotta-feeling",t:"I Gotta Feeling",artist:"The Black Eyed Peas",pri:"Dance",tags:["Dance"],lyrics:`I gotta feeling
That tonight's gonna be a good night
That tonight's gonna be a good night
That tonight's gonna be a good, good night

Tonight's the night, let's live it up
I got my money, let's spend it up
Go out and smash it like oh my God
Jump off that sofa, let's get, get off

I know that we'll have a ball if we get down
And go out and just lose it all
I feel stressed out, I wanna let it go
Let's go way out spaced out and losing all control

Fill up my cup, Mazel Tov
Look at her dancing, just take it off
Let's paint the town, we'll shut it down
Let's burn the roof and then we'll do it again

Let's do it, let's do it, let's do it, let's do it
And do it and do it, let's live it up
'Cause I gotta feeling
That tonight's gonna be a good night

Tonight's the night, let's live it up
I got my money, let's spend it up
Go out and smash it like oh my God
Jump off that sofa, let's get, get off

Fill up my cup, drink, Mazel Tov, lahyme
Look at her dancing, move it, move it, just take it off
Let's paint the town, we'll shut it down
Let's burn the roof and then we'll do it again

Let's do it, let's do it, let's do it, let's do it

Here we come, here we go, we gotta rock
Easy come, easy go, now we on top
Feel the shot, body rock, rock it, don't stop
Round and round, up and down, around the clock

Monday, Tuesday, Wednesday and Thursday
Friday, Saturday, Saturday to Sunday
Get, get, get, get, get with us, you know what we say, say
Party every day, p-p-party every day

And I'm feelin'
That tonight's gonna be a good night
That tonight's gonna be a good night
That tonight's gonna be a good, good night

I gotta feeling
That tonight's gonna be a good night
That tonight's gonna be a good night
That tonight's gonna be a good, good night`,sp:"",sps:"https://open.spotify.com/search/I%20Gotta%20Feeling%20The%20Black%20Eyed%20Peas"},{id:"stereo-love",t:"Stereo Love",artist:"Edward Maya & Vika Jigulina",pri:"Dance",tags:["Dance"],lyrics:`When you're gonna stop breaking my heart
I don't wanna be another one
Paying for the things I never done
Don't let go Don't let go To my love

I hate to see you cry
Your smile is a beautiful lie
I hate to see you cry
My love is dying inside x2

I can fix all those lies
But baby, baby I run, but I'm running to you
You won't see me cry, I'm hiding inside
My heart is in pain but I'm smiling for you

Can I get to your soul
Can you get to my thoughts
Can you promise we won't let go
All the things that I need
All the things that you need
You can make it feel so real.
Cuz' you can't deny
You've blown my mind
When I touch your body
I feel I'm loosing control
Cuz' you can't deny
You've blown my mind
When I see you my baby
I just don't wanna let go

When you're gonna stop breaking my heart
I don't wanna be another one
Paying for the things I never done
Don't let go Don't let go To my love

I hate to see you cry
My love is dying inside
I can fix all those lies
But baby, baby I run, but I'm running to you
You won't see me cry, I'm hiding inside
My heart is in pain but I'm smiling for you
Oh baby I'll try to make the things right
I need you more than air when I'm not with you
Please don't ask me why, just kiss me this time
My only dream \xEFs about you and I...`,sp:"",sps:"https://open.spotify.com/search/Stereo%20Love%20Edward%20Maya%20%26%20Vika%20Jigulina"},{id:"rise-up",t:"Rise Up",artist:"Yves Larock",pri:"Dance",tags:["Dance"],lyrics:`My dream is to fly
Over the rainbow so high (4x)

My dream is to fly
Over the rainbow so high (4x)
I try to fly, no lie, so high Direction sky
I try to fly, no lie, so high Direction sky

Rise Up Don't you fall down again
Rise Up long time I broake the chains
I try to fly, no lie, so high Direction sky

Rise up, Rise up, Rise up, Rise up
How about the rain
Rise up, Rise up, Rise up, Rise up
For my mind and my brain
I try to fly, no lie, so high Direction sky
I try to fly, no lie, so high Direction sky

My dream is to fly
Over the rainbow so high`,sp:"",sps:"https://open.spotify.com/search/Rise%20Up%20Yves%20Larock"},{id:"bad-romance-poker-face-medley-lady-gaga",t:"Bad Romance / Poker Face (Medley Lady Gaga)",artist:"Lady Gaga",pri:"Dance",tags:["Dance"],lyrics:`Rah-rah-ah-ah-ah! Roma-roma-ma!
Ga-ga-ooh-la-la! Want your bad romance

I want your ugly I want your disease
I want your everything As long as it's free
I want your love love-love I want your love)

I want your drama The touch of your hand
I want your leather-studded kiss in the sand
And I want your love Love-love-love
I want your love

You know that I want you
And you know that I need you
I want your bad, your bad romance

I want your love and I want your revenge
You and me could write a bad romance
I want your love and All your love is revenge
You and me could write a bad romance

Oh-oh-oh-oh-oooh! Oh-oh-oooh-oh-oh!
Caught in a bad romance (2x)
Rah-rah-ah-ah-ah! Roma-roma-ma!
Ga-ga-ooh-la-la! Want your bad romance 2x

I want your horror I want your design
'Cause you're a criminal
As long as your mine I want your love
Love-love-love I want your love

I want your psycho Your vertical stick
Want you in my room
When your baby is sick I want your love
Love-love-love I want your love

You know that I want you
And you know that I need you
I want your bad, your bad romance

I want your love and I want your revenge
You and me could write a bad romance
I want your love and All your love is revenge
You and me could write a bad romance

Oh-oh-oh-oh-oooh! Oh-oh-oooh-oh-oh!
Caught in a bad romance
Rah-rah-ah-ah-ah! Roma-roma-ma!
Ga-ga-ooh-la-la! Want your bad romance
_______________//____________________
I've had a little bit too much
All of the people start to rush
A dizzy twister dance, \u2028can't find my drink or man
Where are my keys, I lost my phone (phone)

What's go-ing on-on the floor?
I love this record baby but I can't see straight  anymore
Keep it cool, what's the name of this club?
I can't remember but it's alright, a-alright

Just dance, gonna be okay (da-da-doot-n)
Just dance, spin that record babe (da-da-
Just dance, gonna be okay (duh-duh-duh)
Dance, dance, dance, just ju-ju-just dance

Wish I could shut my playboy mouth
How'd I turn my shirt inside out?
Control your poison babe, \u2028roses have thorns they say
And we're all gettin' hosed tonight

Can't read my, can't read my
No he can't read my poker face
(She got me like nobody)
Can't read my, can't read my
No he can't read my poker face
(She got me like nobody)

Can't read my, can't read my
No he can't read my poker face
(She got me like nobody)
Can't read my, can't read my
No he can't read my poker face
(She got me like nobody)`,sp:"",sps:"https://open.spotify.com/search/Bad%20Romance%20/%20Poker%20Face%20%28Medley%20Lady%20Gaga%29%20Lady%20Gaga"},{id:"loca",t:"Loca",artist:"Shakira",pri:"Dance",tags:["Dance"],lyrics:`She's playing dumb all the time
Just to keep it fun
To get you on like (ahh!)
Be careful amigo
She\xB4s talking and walking just to work you up
And she\xB4d died for your love
But your love's only mine, now

Yo sigo tranquila
Like I'm on a beach in Anguilla
Sippin' my Corona
Like there\xB4s nothin' goin' on
I ain\xB4s leaving you alone
What is meant for me
No other girl is gonna take it
So give him up

And I'm crazy, but you like it (loca, loca, loca)
You like that it ain't easy (loca, loca, loca)
And I'm crazy but you like it (loca, loca, loca)
I'm crazy but you like it

That girl is a naughta
Hot though, I heat it up when I touch her
Chica caliente
Got me bumping to merengue
I feel so el presidente
I'm runnin' shit and I'm lovin' it
She's got a mean old bumper
But you should see what she does with it
She dip it down low (down low, down low)
I can never get enough (oh no, oh no)
She gives me the runaround,
But I stay chasin'
But I need help, I'm in love
With a crazy girl
But it's all good
and it's fine by me
Just as long as I hear her say, "Ay, papi"

And I'm crazy, but you like it (loca, loca, loca)
You like that it ain't easy (loca, loca, loca)
And I'm crazy but you like it (loca, loca, loca)
I'm crazy but you like it

You're the one for me
And for her no more
Now you think she's got it all Ain\xB4t got one kiki
You're the one for me And for her no more
Though you think she's got it all I got my kiki

Okay, she doesn\xB4t know the things
That I do to please you
I'll take you to the malec\xF3n por un caminito
They saw your girlfriend looking for me with a rifle
Cause we were dancing mambo
What she don\xB4t allow it?

I really can't help it
If I make the lady loca
I don't want no trouble
I just wanna hit the (Ooh!)

And I'm crazy, but you like it
'Cause a kinda girl like me
They are running out of in the market

And I'm crazy, but you like it (loca, loca, loca)
You like that it ain't easy (loca, loca, loca)
And I'm crazy but you like it (loca, loca, loca)
I'm crazy but you like it (Dios M\xEDo)

That girl is (loca)
That girl is (loca)
That girl is (loca)

Pure madness

Loca
That girl is (loca)
That girl is (loca)

You're the one for me
And for her no more
Though you think she's got it all
I got my kiki

And I'm crazy, but you like it (loca, loca, loca)
You like that it ain't easy (loca, loca, loca)
Loca, loca, loca, loca
Loca`,sp:"",sps:"https://open.spotify.com/search/Loca%20Shakira"},{id:"club-can-t-handle-me",t:"Club Can't Handle Me",artist:"Flo Rida feat. David Guetta",pri:"Dance",tags:["Dance"],lyrics:`You know I know how
To make em stop and stare as I zone out
The club can't even handle me right now
Watchin you watchin me I go all out
The club can't even handle me right now (2x)

I own the light and I don't need no help
Gotta be the feeling that scarface player
Fuckin gon wild can't handle this plan
Like of the club arrogant like yeah!
Top like money all the girls just melt
Want to many all know me like Twelve
Look like cash and they all just stare
Bottles, Models, standin on chairs
Fall out 'cause that's the business
All out it's so ridiculous
Zone out so much attention
Scream out I'm in the building (hey!)
They watchin I know this
I'm rockin I'm rolling
I'm holding, I know it You know it

You know I know how
To make em stop and stare as I zone out
The club can't even handle me right now
Watchin you watchin me I go all out
The club can't even handle me right now
The club can't even handle me right now

Still feelin myself I'm like outta control
Can't stop now more shots lets go
Ten more rounds can I get a Kato
Paparazzi trying to make me pose
Came to party to I came no more
Celebrate coz that's all I know
Tip the groupies takin off their clothes
Grand finale' like superbowl
Go hard run the show
That's right wild out got money to blow
More light more ice when I walk in the door
No hype I do it big all over the globe
Yeah!

I said it Go tell it
Confetti Who ready?
I'm ready!
You ready!
Lets get it!

You know I know how
To make em stop and stare as I zone out
The club can't even handle me right now
Watchin you watchin me I go all out
The club can't even handle me right now Crazy`,sp:"",sps:"https://open.spotify.com/search/Club%20Can%27t%20Handle%20Me%20Flo%20Rida%20feat.%20David%20Guetta"},{id:"crazy-in-love",t:"Crazy in Love",artist:"Beyonc\xE9",pri:"Dance",tags:["Dance"],lyrics:`I look and stare so deep in your eyes,
I touch on you more and more every time,
When you leave I'm begging you not to go,
Call your name two or three times in a row,
Such a funny thing for me to try to explain,
How I'm feeling and my pride is the one to blame.
'Cuz I know I don't understand,
Just how your love your doing no one else can.

Got me looking so crazy right now, your love's
Got me looking so crazy right now (in love)
Got me looking so crazy right now, your touch
Got me looking so crazy right now (your touch)
Got me hoping you'll page me right now,
your kiss
Got me hoping you'll save me right now
Looking so crazy in love's,
Got me looking, got me looking so crazy in love.

Uh oh, uh oh, uh oh, oh no no

When I talk to my friends so quietly,
Who he think he is? Look at what you did to me,
Tennis shoes, don't even need to buy a new dress,
If you ain't there ain't nobody else to impress,
The way that you know what I thought I knew,
It's the beat my heart skips when I'm with you,
But I still don't understand,
Just how the love your doing no one else can.

Got me looking so crazy right now, your love's
Got me looking so crazy right now (oh crazy)

[Bridge - Beyonce]
Got me looking, so crazy, my baby
I'm not myself, lately I'm foolish, I don't do this,
I've been playing myself, baby I don't care
'Cuz your love's got the best of me,
And baby you're making a fool of me,
You got me sprung and I don't care who sees,
'Cuz baby you got me, you got me, so crazy baby   HEY!

Got me looking so crazy right now, your love's
Got me looking so crazy right now (lookin' crazy)`,sp:"",sps:"https://open.spotify.com/search/Crazy%20in%20Love%20Beyonc%C3%A9"},{id:"love-is-gone",t:"Love Is Gone",artist:"David Guetta",pri:"Dance",tags:["Dance"],lyrics:`What are we supposed to do
After all that we've been through
When everything that felt so right is wrong
Now that the love is gone

There is nothing else to prove
Now you still deny the simple truth
Can't find a reason to keep holding on
Now that love is gone  Love is gone...(2x)

I feel so hurt inside
Feel so hurt inside
Got to find a reason

What are we supposed to do
After all that we've been through

Got to find a reason (x5)
To hold on`,sp:"",sps:"https://open.spotify.com/search/Love%20Is%20Gone%20David%20Guetta"},{id:"love-generation",t:"Love Generation",artist:"Bob Sinclar",pri:"Dance",tags:["Dance"],lyrics:`From Jamaica to the world,
it's just love, it's just love,  Yeah!

Why must our children play in the streets,
broken hearts and fading dreams,
peace and love to everyone that you meet,
don't you worry, it could be so sweet,
Just look to the rainbow, you will see
sun will shine till eternity,
I've got so much love in my heart,
No-one can tear it apart, Yeah,

Be the love generation, Yeah, yeah, yeah,
Be the love generation, c'mon c'mon yeah,

(whistling.....)

Be the love generation, Yeah, yeah, yeah, yeah
Be the love generation, Ooohhh

Don't worry about a thing,
it's gonna be alright,`,sp:"",sps:"https://open.spotify.com/search/Love%20Generation%20Bob%20Sinclar"},{id:"let-me-think-about-it",t:"Let Me Think About It",artist:"Ida Corr & Fedde Le Grand",pri:"Dance",tags:["Dance"],lyrics:`Let me think about it  Let me think about it

You're saying baby  I'll take you for a ride
Let's get together  Work it all night

I'll be your love  You sexy look fine
I'll make you feel like Heaven is near

Let me think about it Let me think about it

Ragh!

Come on girl believe me I'll make you see
That I am the true way Towards ecstasy

Touch me, feel me Then you will find
We are meant to be...  And I ain't lying

Let me think about it Let me think about it

Ragh!

Can I get with baby
Blow your mind or whatever you like
(Let me think) Thik about it
You don't have to think no more
Baby, just call

You say you want me
You say you need me
You say you love me
Ain\xB4t believe (4x)

Let me think about it
Let me think about it
Let me think about it`,sp:"",sps:"https://open.spotify.com/search/Let%20Me%20Think%20About%20It%20Ida%20Corr%20%26%20Fedde%20Le%20Grand"},{id:"i-don-t-know-why",t:"I Don't Know Why",artist:"Moony",pri:"Dance",tags:["Dance"],lyrics:`Never happy, not satisfied
Always complains for nothing
Hopes and dreams are fading away
It's not hard to figure it out
There's no doubt, you'll find a way
Live the moment, each and every day

I don't know why
I cannot see the beauty in front of me
I cannot...  I don't know why
I cannot see the beauty in front of me
(in front of me)

Is it there?
Is it right there?
Right in front of you (right in front of you)
This is what you've been looking for
For a long, long time
Make it real, make it right now (make it right now, make it right now)
You've got to live it now`,sp:"",sps:"https://open.spotify.com/search/I%20Don%27t%20Know%20Why%20Moony"},{id:"set-me-free",t:"Set Me Free",artist:"House Boulevard",pri:"Dance",tags:["Dance"],lyrics:`And the things you do
Time after time
You made me blue
Crying for help  But now we're through

I was lost and despair
But now I know
Memories remainFor you too
Searching for light
Everywhere I turn

Come on somebody come on
Rescue me
Come on somebody come on
Set me free
Come on somebody come on
Rescue me
Come on somebody come on

Set me free`,sp:"",sps:"https://open.spotify.com/search/Set%20Me%20Free%20House%20Boulevard"},{id:"thriller",t:"Thriller",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`something evil's lurkin' in the dark
Under the moonlight
You see a sight that almost stops your heart

You try to scream
But terror takes the sound before you make it
You start to freeze
As horror looks you right between the eyes
You're paralyzed

'Cause this is thriller
Thriller night
And no one's gonna save you
From the beast about to strike
You know it's thriller
Thriller night
You're fighting for your life
Inside a killer
Thriller tonight, yeah

You hear the door slam
And realize there's nowhere left to run
You feel the cold hand
And wonder if you'll ever see the sun

You close your eyes
And hope that this is just imagination Girl,
but all the while
You hear a creature creepin' up behind
You're outta time

'Cause this is thriller Thriller night
There ain't no second chance
Against the thing with the forty eyes, girl
(Thriller) (Thriller night)
You're fighting for your life
Inside a killerThriller tonight

Night creatures call
And the dead start to walk in their masquerade
There's no escaping the jaws of the\u2019 alien this time   This is the end of your life

They're out to get you
There's demons closing in on every side
They will possess you
Unless you change that number on your dial

Now is the time
For you and I to cuddle close together, yeah
All through the night
I'll save you from the terror\u2019 on the screen
I'll make you see
That this is thriller Thriller night
'Cause I can thrill you more
Than any ghost would ever dare try
(Thriller) (Thriller night)
So let me hold you tight And share a
(killer, diller, chiller)(Thriller here tonight)
'
Cause this is thriller Thriller night
Girl, I can thrill you more
Than any ghost would ever dare try uh uh
(Thriller) (Thriller night)
So let me hold you tight
And share a (killer, thriller)

I'm gonna thrill you tonight

[Vincent Price]
Darkness falls across the land
The midnight hour is close at hand
Creatures crawl in search of blood
To terrorize y'all's neighborhood  (I'm gonna thrill you tonight)

And whosoever shall be found
Without the soul for getting down
Must stand and face the hounds of hell
And rot inside a corpse's shell

I'm gonna thrill you tonight
(Thriller, thriller)
I'm gonna thrill you tonight
(Thriller night, thriller)
I'm gonna thrill you tonight
Ooh, babe, I'm gonna thrill you tonight
Thriller night, babe

[Vincent Price]
The foulest stench is in the air
The funk of forty thousand years
And grizzly ghouls from every tomb
Are closing in to seal your doom
And though you fight to stay alive
Your body starts to shiver
for no mere mortal can resist
the evil of the thriller`,sp:"",sps:"https://open.spotify.com/search/Thriller%20Michael%20Jackson"},{id:"ben",t:"Ben",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:` need look no more
We both found what we were looking for
With a friend to call my own
I'll never be alone
And you, my friend will see
You've got a friend in me
(You've got a friend in me)
I used to say "I" and "me"
Now it's "us", now it's "we"`,sp:"",sps:"https://open.spotify.com/search/Ben%20Michael%20Jackson"},{id:"i-ll-be-there",t:"I'll Be There",artist:"The Jackson 5",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`We must bring salvation back
Where there is love, I'll be there

And oh - I'll be there to comfort you,
Build my world of dreams around you
I'm so glad that I found you
I'll be there with a love that's strong
I'll be your strength,      I'll keep holding on`,sp:"",sps:"https://open.spotify.com/search/I%27ll%20Be%20There%20The%20Jackson%205"},{id:"i-want-you-back",t:"I Want You Back",artist:"The Jackson 5",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`Uh-huh huh huh huh
Let me tell ya now  Uh-huh
When I had you to myself
I didn't want you around
Those pretty faces always made you
stand out in a crowd
But someone picked you from the bunch
when glance was all it took
Now it's much too late for me
to take a second look

Oh baby give me one more chance
(show you that I love you)
Won't you please let me
(back to your heart)
Oh darlin' I was blind to let you go
(let you go baby)
But now since I see you in his arms`,sp:"",sps:"https://open.spotify.com/search/I%20Want%20You%20Back%20The%20Jackson%205"},{id:"abc",t:"ABC",artist:"The Jackson 5",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:` to learn, girl
Things you never, never knew before...
Like I before E except after C...
And why 2 plus 2 makes 4
Now! Now! Now! I'm gonna teach you...
Teach you, teach you
All about love, dear...
Sit yourself down, take a seat
All you gotta do is reapeat after me

ABC
Easy as...
123
Or simple as...
DO RE MI, ABC, 123
Baby, you and me, girl! (2x)`,sp:"",sps:"https://open.spotify.com/search/ABC%20The%20Jackson%205"},{id:"billie-jean",t:"Billie Jean",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`From a movie scene
I said: Don't mind, but what do you mean
I am the one
Gonna dance on the floor in the round

She said I am the one
Gonna dance on the floor in the round

She told me her name was Billie Jean
As she caused a scene
Then every head turned with eyes
That dreamed of being the one
Gonna dance on the floor in the round

People always told me be careful of what you do
Don't go around, breaking young girl's hearts
And mother always told me
Be careful of who you love
Be careful of what you do
'Cause the lie becomes the truth

Billie Jean is not my lover
She's just a girl who claims that I am the one
But the kid is not my son
She says I am the one, but the kid is not my son`,sp:"",sps:"https://open.spotify.com/search/Billie%20Jean%20Michael%20Jackson"},{id:"bad",t:"Bad",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:` Gonna tell you right
Just show your face In broad daylight
I'm telling you On how I feel
Gonna hurt your mind Don't shoot to kill
Come on. Come on.
Lay it on me   All right...

I'm giving you  On count of three
To show your stuff  Or let it be...

I'm telling you Just watch your mouth
I know your game What you're about

Well they say the sky's the limit
And to me that's really true
But my friend you have seen nothin'
Just wait 'til I get through...

Because I'm bad, I'm bad. Come on.
(Bad bad-really, really bad)
You know I'm bad, I'm bad. You know it.
(Bad bad-really, really bad)
You know I'm bad, I'm bad.
Come on, you know.
(Bad bad-really, really bad)
And the whole world has to answer right now Just to tell you once again,   Who's bad...`,sp:"",sps:"https://open.spotify.com/search/Bad%20Michael%20Jackson"},{id:"beat-it",t:"Beat It",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:` don't you ever come around here
Don't wanna see your face, you better disappear
The fire's in their eyes and their words are really clear
So beat it, just beat it

You better run, you better do what you can
Don't wanna see no blood, don't be a macho man
You wanna be tough, better do what you can
So beat it, but you wanna be bad

Just beat it, beat it, beat it, beat it
No one wants to be defeated
Showin' how funky and strong is your fight
It doesn't matter who's wrong or right
Just beat it, beat it
Just beat it, beat it
Just beat it, beat it`,sp:"",sps:"https://open.spotify.com/search/Beat%20It%20Michael%20Jackson"},{id:"ain-t-no-sunshine",t:"Ain't No Sunshine",artist:"Bill Withers",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`You ever want something
that you know you shouldn't have
The more you know you shouldn't have it,
The more you want it

And then one day you get it,
It's so good too

But it's just like my girl
When she's around me
I just feel so good, so good

But right now I just feel cold, so cold
Right down to my bones
'Cause ooh...

Ain't no sunshine when she's gone
It's not warm when she's away
Ain't no sunshine when she's gone
And she's always gone too long
Anytime she goes away`,sp:"",sps:"https://open.spotify.com/search/Ain%27t%20No%20Sunshine%20Bill%20Withers"},{id:"the-girl-is-mine",t:"The Girl Is Mine",artist:"Michael Jackson & Paul McCartney",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`Every night she walks right in my dreams
Since I met her from the start
I\xB4m so proud I am the only one
Who is special in her heart
The girl is mine
The doggone girl is mine

I know she\xB4s mine
Because the doggone girl is mine

(Paul)
I love you more than he  (Take you anywhere)

(Michael)
But I love you endlessly (Loving we will share)

(Michael & Paul)
So come and go with me
Two on the town

(Michael)
But we both cannot have her
So it\xB4s one or the other
And one day you\xB4ll discover
That she\xB4s my girl forever and ever`,sp:"",sps:"https://open.spotify.com/search/The%20Girl%20Is%20Mine%20Michael%20Jackson%20%26%20Paul%20McCartney"},{id:"you-are-not-alone",t:"You Are Not Alone",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`Another day has gone I'm still all alone
How could this be?
You're not here with me
You never said good-bye
Someone tell me, why?
Did you have to go?
And leave my world so cold?

Everyday I sit and ask myself
How did love slip away?
Something whispers in my ear and says:

That you are not alone
I am here with you
Though you're far away
I am here to stay

You are not alone
I am here with you
Though we're far apart
You're always in my heart
You are not alone...

...and girl you know that I'll   be there
I'll be there...

But you are not alone
I am here with you
Though you're far away
I am here to stay
You are not alone
I am here with you
Though we're far apart
You're always in my heart
You are not alone...

But you are not alone (You are not alone)
I am here with you (I am here with you)
Though you're far away
(Though you're far away, you are near)
I am here to stay
You are not alone (You are always in my heart)
I am here with you
Though we're far apart
You're always in my heart
You are not alone...`,sp:"",sps:"https://open.spotify.com/search/You%20Are%20Not%20Alone%20Michael%20Jackson"},{id:"they-don-t-care-about-us",t:"They Don't Care About Us",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`Skin head
Dead head
Everybody
Gone bad
Situation
Aggravation
Everybody
Allegation
In the suite
On the news
Everybody
Dog food
Bang bang
Shock dead
Everybody's
Gone mad

All I wanna say is that
They don't really care about us
All I wanna say is that
They don't really care about us

Beat me
Hate me
You can never
Break me
Will me
Thrill me
You can never
Kill me
Judge me
Sue me
Everybody
Do me
Kick me
Kike me
Don't you
Black or white me

All I wanna say is that
They don't really care about us
All I wanna say is that
They don't really care about us

Tell me what has become of my life
I have a wife and two children who love me
I am the victim of police brutality, no
I'm tired of bein' the victim of hate
Your rapin' me of my pride
Oh for God's sake
I look to heaven to fulfill its prophecy
Set me free
Skinhead
Deadhead
Everybody
Gone bad
Trepidation
Speculation
Everybody
Allegation
In the suite
On the news
Everybody
Dog food
Black man
Black mail
Throw the brother
In jail

All I wanna say is that
They don't really care about us
All I wanna say is that
They don't really care about us`,sp:"",sps:"https://open.spotify.com/search/They%20Don%27t%20Care%20About%20Us%20Michael%20Jackson"},{id:"human-nature",t:"Human Nature",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`Across the nighttime
The city winks a sleepless eye
Hear her voice
Shake my window
Sweet seducing sighs

Get me out
Into the nighttime
Four walls won't hold me tonight
If this town
Is just an apple
Then let me take a bite

If they say --
Why, why, tell 'em that it's human nature
Why, why, does he do me that way
If they say --
Why, why, tell 'em that it's human nature
Why, why does he do me that way

Reaching out
To touch a stranger
Electric eyes are ev'rywhere
See that girl
She knows I'm watching
She likes the way I stare
If they say --
Why, why, tell 'em that it's human nature
Why, why, does he do me that way
If they say --
Why, why, tell 'em that it's human nature
Why, why , why`,sp:"",sps:"https://open.spotify.com/search/Human%20Nature%20Michael%20Jackson"},{id:"black-or-white",t:"Black or White",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`On a Saturday bang
Boy is that girl with you
Yes we're one and the same

Now I believe in miracles
And a miracle Has happened tonight

But, IF You're thinkin' About my baby
It don't matter if you're  Black or White

They print my message In the Saturday sun
I had to tell them I ain't second to none

And I told about equality
And it's true Either you're wrong
Or you're right

But, IF You're thinkin'About my baby
It don't matter if you're Black or White
I am tired of this devil
I am tired of this stuff
I am tired of this business
Going gets rough
I ain't scared of
Your brother
I ain't scared of no sheets
I ain't scare of nobody
Girl when the
Goin' gets mean

(L. T. B. Rap performance)
Protection  For gangs, clubs And nations
Causing grief in Human relations
It's a turf war On a global scale
I'd rather hear both sides Of the tale
See, it's not about races Just places Faces
Where your blood Comes from Is where your space is
I've seen the bright Get duller
I'm not going to spend My life being a color

Don't tell me you agree with me
When I saw you kicking dirt in my eye

But, if You're thinkin' about my baby
It don't matter if you're black or white

It's black, it's white
It's tough for you
To get by
It's black , it's white, whoo

It's black, it's white
It's tough for you
To get by
It's black , it's white, whoo`,sp:"",sps:"https://open.spotify.com/search/Black%20or%20White%20Michael%20Jackson"},{id:"heal-the-world",t:"Heal The World",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`And I know that it is love
And this place could be much
Brighter than tomorrow

And if you really try
You'll find there's no need to cry
In this place you'll feel
There's no hurt or sorrow

There are, ways to get there
If you care enough for the living
Make a little space
Make a better place ...

Heal the world
Make it a better place
For you and for me
And the entire human race
There are,  people dying
If you care enough for the living
Make it a better place
For you and for me

If you want to know why
There's love that cannot lie
Love is Strong It only cares of joyful giving

If we try we shall see
In this bliss we cannot feel
Fear od dread
We stop existing and start living

The it, feels that always
Love's enough for us growing
Make a better world
Make a better world ...

Heal the world Make it a better place
For you and for me
And the entire human race
There are people dying
If you care enough for the living
Make a better place for you and for me
And the dream we were conceived in
Will reveal a joyful face
And the world we once believed in
Will shine again in grace
Then why do we keep strangling life
Wound this earth, crucify its soul
Though it's plain to see
This world is heavenly\u2026 be god\u2019s glow

Heal the world
Make it a better place
For you and for me
And the entire human race
There are people dying
If you care enough for the living
Make a better place for you and for me

Heal the world Make it a better place
For you and for me
And the entire human race
There are people dying
If you care enough for the living
Make a better place for you and for me (3x)
you and for me, you and for me, you and for me

Heal the world we\u2019re living
Say it before like children`,sp:"",sps:"https://open.spotify.com/search/Heal%20The%20World%20Michael%20Jackson"},{id:"smooth-criminal",t:"Smooth Criminal",artist:"Michael Jackson",pri:"Pop",tags:["Anos 80","Michael Jackson","Pop"],lyrics:`It was the sound of a crescendo
He came into her apartment
He left the bloodstains on the carpet
She ran underneath the table
He could see she was unable
So she ran into the bedroom
She was struck down, it was her doom

Annie are you ok? So, annie are you ok
Are you ok, annie
Annie are you ok? So, annie are you ok
Are you ok, annie
Annie are you ok? So, annie are you ok?
Are you ok, annie?
Annie are you ok?
So, annie are you ok, are you ok, annie?

(annie are you ok?)
(will you tell us that you're ok?)
(there's a sign in the window)
(that he struck you - a crescendo annie)
(he came into your apartment)
(he left the bloodstains on the carpet)
(then you ran into the bedroom)
(you were struck down)
(it was your doom)

Annie are you ok? So, annie are you ok?
Are you ok annie?
Annie are you ok? So, annie are you ok?
Are you ok annie?
Annie are you ok? So, annie are you ok?
Are you ok annie?
You've been hit by
You've been hit by -   a smooth criminal

So they came into the outway
It was sunday - what a black day
Mouth to mouth resus - citation
Sounding heartbeats - intimidations

Annie are you ok? So, annie are you ok?
Are you ok annie?
Annie are you ok? So, annie are you ok?
Are you ok annie?
Annie are you ok? So, annie are you ok?
Are you ok annie?
Annie are you ok? So, annie are you ok
Are you ok annie?

(annie are you ok?)
(will you tell us that you're ok?)
(there's a sign in the window)
(that he struck you - a crescendo annie)
(he came into your apartment)
(left the bloodstains on the carpet)
(then you ran into the bedroom)
(you were struck down)
(it was your doom)

annie are you ok?
so, annie are you ok?
are you ok annie?
(you've been hit by)
(you've been struck by -A smooth criminal)

Okay, i want everybody to clear the area right now!

Aaow!
(annie are you ok?)
I don't know!
(will you tell us, that you're ok?)
I don't know!
(there's a sign in the window)
I don't know!
(that he struck you - a crescendo annie)
I don't know!
(he came into your apartment)
I don't know!
(left bloodstains on the carpet)
I don't know why baby!
(then you ran into the bedroom)
I don't know!
(you were struck down)
(it was your doom - annie!)
(annie are you ok?)

Dad gone it - baby!
(will you tell us, that you're ok?)
Dad gone it - baby!
(there's a sign in the window)
Dad gone it - baby!
(that he struck you - a crescendo annie)
Hoo! hoo!

(he came into your apartment)
Dad gone it!
(left bloodstains on the carpet)
Hoo! hoo! hoo!
(then you ran into the bedroom)
Dad gone it!
(you were struck down)
(it was your doom-annie!)
Aaow!!!

You've been hit by
You've been hit by -   a smooth criminal`,sp:"",sps:"https://open.spotify.com/search/Smooth%20Criminal%20Michael%20Jackson"},{id:"do-you-wanna-dance",t:"Do You Wanna Dance?",artist:"Bobby Freeman / Johnny Rivers",pri:"Balada",tags:["Balada"],lyrics:`Do you wanna dance and hold my hand ?
Tell me that I'm your man
Baby, do you wanna dance ?

Do you wanna dance under the moonlight ?
Squeeze and kiss me all through the night
Baby, do you wanna dance ? (2x)

Girl now
do you do you do you do you wanna dance ?
Do you do you do you do you wanna dance ?
Do you do you wanna dance ?`,sp:"",sps:"https://open.spotify.com/search/Do%20You%20Wanna%20Dance%3F%20Bobby%20Freeman%20/%20Johnny%20Rivers"},{id:"stand-by-me",t:"Stand By Me",artist:"Ben E. King / John Lennon",pri:"Balada",tags:["Balada"],lyrics:`When the night has come
And the land is dark
And the moon is the only light we'll see

No I won't be afraid, no I won't be afraid
Just as long as you stand, stand by me

So darling, darling, stand by me, oh stand by me Stand by me, stand by me

If the sky that we look upon
Should tumble and let fall
And the mountains should crumble to the sea

I won't cry, I won't cry, no I won't shed a tear
Just as long as you stand, stand by me

And darling, darling, stand by me, oh stand by me, oh stand now
Stand by me, stand by me`,sp:"",sps:"https://open.spotify.com/search/Stand%20By%20Me%20Ben%20E.%20King%20/%20John%20Lennon"},{id:"rock-and-roll-lullaby",t:"Rock and Roll Lullaby",artist:"B.J. Thomas",pri:"Balada",tags:["Balada"],lyrics:`She was just sixteen and all alone
When I came to be
So we grew up together
My mama child and me
Now things were bad and she was scared
But whenever I would cry
She'd calm my fears and dry my tears
With a rock and roll lullaby

And she would sing sha na na na na na na
It will be all right sha na na na na na....
Sha na na na na na na na ...
Now just hold on tight

Sing it to me mama (mama mama ma)
Sing it sweet and clear, oh!
Mama let me hear that old rock and roll lullaby

We made it through the lonely days
But Lord the nights were long
And we'd dream of better moments
When mama sang her song
Now I can't recall the words at all
It don't make sense to try
'Cause I just knew lots of love came thru
In that rock and roll lullaby

And she'd sing sha na na na na na na na
It will be all right
Sha na na na na na na na
Now just hold on tigh

I can hear you mama, mama, mama, mama
nothing loose my soul
like the sound of the good old rock and roll lullaby`,sp:"",sps:"https://open.spotify.com/search/Rock%20and%20Roll%20Lullaby%20B.J.%20Thomas"},{id:"put-your-records-on",t:"Put Your Records On",artist:"Corinne Bailey Rae",pri:"Balada",tags:["Balada"],lyrics:`Three little birds, sat on my window.
And they told me I don't need to worry.
Summer came like cinnamon  So sweet,
Little girls double-dutch on the concrete.

Maybe sometimes, we got it wrong, but it's alright
The more things seem to change, the more they stay the same Oh, don't you hesitate.

Girl, put your records on, \u2028tell me your favorite song
You go ahead, let your hair down
Sapphire and faded jeans, \u2028I hope you get your dreams,
Just go ahead, let your hair down.

You're gonna find yourself somewhere, somehow.

Blue as the sky, sunburnt and lonely,
Sipping tea in the bar by the road side,
Don't you let those other boys fool you,
Gotta love that afro hairdo.

Maybe sometimes, we feel afraid, \u2028but it's alright
The more you stay the same, the more they seem to change.
Don't you think it's strange?

Girl, put your records on, tell me your favorite song
You go ahead, let your hair down
Sapphire and faded jeans, I hope you get your dreams,
Just go ahead, let your hair down.

You're gonna find yourself somewhere, somehow.

'Twas more than I could take, pity for pity's sake
Some nights kept me awake, I thought that I was stronger
When you gonna realize, that you don't even have to try any longer.
Do what you want to.

Girl, put your records on, tell me your favorite song
You go ahead, let your hair down
Sapphire and faded jeans, I hope you get your dreams,
Just go ahead, let your hair down.

Girl, put your records on, tell me your favorite song
You go ahead, let your hair down
Sapphire and faded jeans, I hope you get your dreams,
Just go ahead, let your hair down.`,sp:"",sps:"https://open.spotify.com/search/Put%20Your%20Records%20On%20Corinne%20Bailey%20Rae"},{id:"how-deep-is-your-love",t:"How Deep Is Your Love",artist:"Bee Gees",pri:"Balada",tags:["Balada"],lyrics:`I know your eyes in the morning sun
I feel you touch me in the pouring rain
and the moment that you wander far from me
I wanna feel you in my arms again.

And you come to me on a summer breeze
keep me warm in your love then you softlyleave
and it's me you need to show
how deep is your love

How deep is your love? How deep is your love?
I really mean to learn
Cause we're living in a world of fools
breaking us down when they all should let us be
we belong to you and me.

I believe in you
you know the door to my very soul.
you're the light in my deepest darkest hour
you're my saviour when I fall

And you may not think I care for you
when you know down inside that I really do
and it's me you need to show How deep is your love?`,sp:"",sps:"https://open.spotify.com/search/How%20Deep%20Is%20Your%20Love%20Bee%20Gees"},{id:"cruisin",t:"Cruisin'",artist:"Huey Lewis & Gwyneth Paltrow",pri:"Balada",tags:["Balada"],lyrics:`Baby let's cruise, away from here
Don't be confused, the way is clear
And if you want it you got it forever
This is not a one night stand, baby, yeah so

Let the music take your mind
Just release and you will find

You're gonna fly away
Glad you're goin' my way
I love it when we're cruising together
The music is played for love,
Cruising is made for love
I love it when we're cruising together

Baby tonight belongs to us
Everything's right, do what you must
And inch by inch we get closer and closer
To every little part of each other ooh baby, yeah

Let the music take your mind
Just release and you will find
You're gonna fly away
Glad you're going my way
I love it when we're cruising together
The music is played for love,
Cruising is made for love
I love it when we're cruising together

Cruise with me baby Uhhhh Uhhhh

Ooooh
Baby let's cruise  Let's flow, let's glide
Ooooh let's open up, and go inside
and if you want it you got it forever
I could just stay here beside you and love you baby

Let the music, take your mind
Just release and you will find

You're gonna fly away
I'm glad you're going my way
I love it, when we're cruising together
The music is played for love,
Cruising is made for love
I love it, when we're cruising together`,sp:"",sps:"https://open.spotify.com/search/Cruisin%27%20Huey%20Lewis%20%26%20Gwyneth%20Paltrow"},{id:"i-ll-be-over-you",t:"I'll Be Over You",artist:"Toto",pri:"Balada",tags:["Balada"],lyrics:`Some people live their dreams
Some people close their eyes
Some people's destiny
Passes by

There are no guarantees
There are no alibis
That's how our love must be
Don't ask why

It takes some time
God knows how long
I know that I can forget you

As soon as my heart stops breakin'
Anticipating
As soon as forever is through
I'll be over you

Remembering times gone by
Promises we once made
What are the reasons why
Nothing stays the same

There were the nights holding you close
Someday I'll try to forget them

As soon as my heart stops breakin'
Anticipating
Someday I\`ll be over you
As soon as my heart stops breakin'
Anticipating
Someday I\`ll be over you

As soon as my heart`,sp:"",sps:"https://open.spotify.com/search/I%27ll%20Be%20Over%20You%20Toto"},{id:"fallen",t:"Fallen",artist:"Lauren Wood",pri:"Balada",tags:["Balada"],lyrics:`I can't believe it, you're a dream comin' true.
I can't believe how I have fallen for you.
And I was not looking, was content to remain.
And it's ironic to be back in the game.

You are the one who's led me to the sun.
How could I know that I was lost without you...

And I want to tell you, you control my brain..
And you should know that you are life in my veins.

You are the one who's led me to the sun.
How could I know that I was lost without you...

I can't believe it, you're a dream comin' true.
I can't believe how I have fallen for you.

And I was not looking, was content to remain.
And it's erotic to be back in the game.`,sp:"",sps:"https://open.spotify.com/search/Fallen%20Lauren%20Wood"},{id:"everything",t:"Everything",artist:"Michael Bubl\xE9",pri:"Balada",tags:["Balada"],lyrics:`You're a falling star  You're the getaway car
You're the line in the sand When I go too far
You're the swimming pool
On an august day
And you're the perfect thing to say
And you play it cool but it's kinda cute
Oh when you smile at me you know exactly what you do
Baby don't pretend that you don't know it's true
Cause you can see it when I look at you

And in this crazy life
And through these crazy times
It's you It's you
You make me sing You're every line
You're every word You're everything

You're a carousel  You're a wishing well
And you light me up When you ring my bell
You're a mystery  You're from out of space
You're every minute of my every day
And I can't believe that i'm your man
And I get to kiss you baby just because I can
Whatever comes our way We'll see it through
And you know that's what our love can do

And in this crazy life
And through these crazy times
It's you It's you
You make me sing You're every line
You're every word You're everything

And so la la la la... la la la  So la la la la... la la

And in this crazy life
And through these crazy times
It's you It's you
You make me sing
You're every line  You're every word
You're everything...

You're every song  And i sing along
Cause you're my everything

Yeah, yeah  So la la la la... la la la`,sp:"",sps:"https://open.spotify.com/search/Everything%20Michael%20Bubl%C3%A9"},{id:"easy",t:"Easy",artist:"Commodores / Lionel Richie",pri:"Balada",tags:["Balada"],lyrics:`Know it sounds funny
But, I just can't stand the pain
Girl, I'm leaving you tomorrow
Seems to me girl
You know I've done all I can
You see I begged, stole and I borrowed!
(yeah)

Ooh, that's why I'm easy
I'm easy like Sunday morning
That's why I'm easy
I'm easy like Sunday morning

Why in the world would anybody put chains
on me?
I've paid my dues to make it
Everybody wants me to be
What they want me to be
I'm not happy when I try to fake it! no!

Ooh, that's why I'm easy
I'm easy like Sunday morning, yeah
That's why I'm easy
I'm easy like Sunday morning

I wanna be high, so high
I wanna be free to know the things
I do are right
I wanna be free
Just me! Whoa, oh! Babe!

That's why I'm easy
I'm easy like Sunday morning, yeah
That's why I'm easy
I'm easy like Sunday morning, whoa
'Cause I'm easy
Easy like Sunday morning, yeah
'Cause I'm easy
Easy like Sunday morning`,sp:"",sps:"https://open.spotify.com/search/Easy%20Commodores%20/%20Lionel%20Richie"},{id:"dona",t:"Dona",artist:"Roupa Nova",pri:"Balada",tags:["Balada"],lyrics:`Sonhos, sempre verdadeiros
Oh Dona desses animais
Dona dos seus ideais

Pelas ruas onde andas
Onde mandas todos n\xF3s
Somos sempre mensageiros
Esperando tua voz

Teus desejos, uma ordem
Nada \xE9 nunca, nunca \xE9 n\xE3o
Por que tens essa certeza
Dentro do teu curacao

T\xE3, t\xE3, t\xE3, batem na porta
N\xE3o precisa ver quem \xE9
Pra sentir a impaci\xEAncia
Do teu pulso de mulher

Um olhar me atira \xE0 cama
Um beijo me faz amar
N\xE3o levanto, n\xE3o me escondo
Porque sei que \xE9s minha
Dona...
Dona desses trai\xE7oeiros...
Sonhos sempre verdadeiros

N\xE3o h\xE1 pedra em teu caminho
N\xE3o h\xE1 ondas no teu mar
N\xE3o h\xE1 vento ou tempestade
Que te impe\xE7am de voar

Entre a cobra e o passarinho
Entre a pomba e o gavi\xE3o
Ou teu \xF3dio ou teu carinho
Nos carregam pela m\xE3o

\xC9 a mo\xE7a da cantiga A mulher da cria\xE7\xE3o
Umas vezes nossa amiga
Outras nossa perdi\xE7\xE3o

O poder que nos levanta
A for\xE7a que nos faz cair
Qual de n\xF3s ainda n\xE3o sabe
Que isso tudo te faz
Dona, Dona...`,sp:"",sps:"https://open.spotify.com/search/Dona%20Roupa%20Nova"},{id:"eu-te-devoro",t:"Eu Te Devoro",artist:"Djavan",pri:"Balada",tags:["Balada"],lyrics:` Me confundem da cabe\xE7a aos p\xE9s
Mas por dentro eu te devoro
Teu olhar N\xE3o me diz exato quem tu \xE9s
Mesmo assim eu te devoro
Te devoraria a qualquer pre\xE7o
Porque te ignoro ou te conhe\xE7o
Quando chove ou quando faz frio

Noutro plano
Te devoraria tal Caetano A Leonardo di Caprio
\xC9 um milagre
Tudo o que Deus criou Pensando em voc\xEA
Fez a via-l\xE1ctea Fez os dinossauros
Sem pensar em nada Fez a minha vida E te deu

Sem contar os dias
Que me faz morrer sem saber de ti
Jogado \xE0 solid\xE3o
Mas se quer saber
Se eu quero outra vida,
N\xE3o, n\xE3o.

Eu quero mesmo \xE9 viver
Pra esperar, esperar
Devorar voc\xEA`,sp:"",sps:"https://open.spotify.com/search/Eu%20Te%20Devoro%20Djavan"},{id:"final-feliz",t:"Final Feliz",artist:"Jorge Arag\xE3o",pri:"Balada",tags:["Balada"],lyrics:`Eu n\xE3o tenho nada a esconder
Agora \xE9 pra valer
Haja o que houver.

N\xE3o t\xF4 nem a\xED
Eu n\xE3o t\xF4 nem aqui pro que dizem
Eu quero \xE9 ser feliz
E viver pra ti

Pode me abra\xE7ar sem medo
Pode encostar tua m\xE3o na minha

Meu amor,
Deixa o tempo se arrastar
Sem fim

Meu amor,
N\xE3o h\xE1 mal nenhum gostar assim

Oh, meu bem,
Acredite no final
Feliz

Meu amor, meu amor`,sp:"",sps:"https://open.spotify.com/search/Final%20Feliz%20Jorge%20Arag%C3%A3o"},{id:"don-t-know-why",t:"Don't Know Why",artist:"Norah Jones",pri:"Balada",tags:["Balada"],lyrics:` 'til I saw the sun
I don't know why I didn't come
I left you by the house of fun
I don't know why I didn't come

I waited 'til I saw the sun
I don't know why I didn't come
I left you by the house of fun
I don't know why I didn't come

When I saw the break of the day
I wished that I could fly away
Instead of kneeling in the sand
Catching teardrops in my hand

My heart is drenched in wine
But you'll be on my mind
Forever

Out across the endless sea
I would die in ecstasy
But I'll be a bag of bones
Driving down the road along

My heart is drenched in wine
But you'll be on my mind
Forever

Something has to make you run
I don't know why I didn't come
I feel as empty as a drum
I don't know why I didn't come

Something has to make you run
I don't know why I didn't come
I feel as empty as a drum
I don't know why I didn't come

Something has to make you run
I don't know why I didn't come
I feel as empty as a drum
I don't know why I didn't come`,sp:"",sps:"https://open.spotify.com/search/Don%27t%20Know%20Why%20Norah%20Jones"},{id:"besame-mucho",t:"B\xE9same Mucho",artist:"",pri:"Balada",tags:["Balada"],lyrics:`B\xE9same, b\xE9same mucho
como si fuera esta noche
la \xFAltima vez
b\xE9same, b\xE9same mucho
que tengo miedo a perderte
perderte despu\xE9s

B\xE9same, b\xE9same mucho
como si fuera esta noche
la \xFAltima vez
b\xE9same, b\xE9same mucho
que tengo miedo a perderte
perderte despu\xE9s

Quiero tenerte muy cerca
tenerte a mi lado
verte junto a mi
piensa que tal vez ma\xF1ana
yo ya estar\xE9 lejos
muy lejos de ti`,sp:"",sps:"https://open.spotify.com/search/B%C3%A9same%20Mucho"},{id:"i-ve-had-the-time-of-my-life",t:"(I've Had) The Time of My Life",artist:"Bill Medley & Jennifer Warnes",pri:"Balada",tags:["Balada"],lyrics:`Now I've had the time of my life
No, I never felt like this before
Yes, I swear it's the true
And I owe it all to you
'Cause I've had the time of my life
And I owe it all to you

I've been waiting for so long
Now I've finally found someone
To stand by me
We saw the writing on the wall
As we felt this magical Fantasy

Now with passion in our eyes
There's no way we could disguise it
Secretly
So we take each other's hand
'Cause we seem to understand
The urgency  Just remember

You're the one thing
I can't get enough of
So I'll tell you something
This could be love because (CHORUS)
I've had the time of my life
No, I never felt this way before
Yes, I swear it's the truth
And I owe it all to you
'Cause I had the time of my life
And I've searched through every open door
Till I've found the truth
and I owe it all to you  hey baby

With my body and soul
I want you more than you'll ever know
So we'll just let it go
Don't be afraid to lose control, no
Yes, I know what's on your mind
When you say "Stay with me tonight."
Stay whit me Just remember

You're the one thing
I can't get enough of
So I'll tell you something
This could be love because

(CHORUS)

I've had the time of my life
No, I never felt this way before
Yes, I swear it's the truth
And I owe it all to you
'Cause I had the time of my life
And I've searched through every open door
Till I've found the truth
And I owe it all to you`,sp:"",sps:"https://open.spotify.com/search/%28I%27ve%20Had%29%20The%20Time%20of%20My%20Life%20Bill%20Medley%20%26%20Jennifer%20Warnes"},{id:"unforgettable",t:"Unforgettable",artist:"Nat King Cole",pri:"Baile",tags:["Baile","Fox"],lyrics:`Unforgettable, that's what you are
Unforgettable though near or far
Like a song of love that clings to me
How the thought of you that stings to me
Never before has someone been more

Unforgettable in every way
And forever more, that's how you'll stay
That's why, darling, it's incredible
That someone so unforgettable
Thinks that I am unforgettable too

Unforgettable in every way
And forever more, that's how you'll stay
That's why, darling, it's incredible
That someone so unforgettable
Thinks that I am unforgettable too`,sp:"",sps:"https://open.spotify.com/search/Unforgettable%20Nat%20King%20Cole"},{id:"the-way-you-look-tonight",t:"The Way You Look Tonight",artist:"Rod Stewart",pri:"Baile",tags:["Baile","Fox"],lyrics:`Some day, when I'm awfully low
When the world is cold
I will feel a glow just thinking of you
And the way you look tonight

Yes, you're so lovely, with your eyes so warm
And your lips so soft
There is nothing for me but to love you
And the way you look tonight

With each word your tenderness grows
Tearing my fears apart
And that laugh that wrinkles your nose
Touches my foolish heart

Yes you're lovely, never ever change
Keep that breathless charm
Won't you please arrange it?'
Cause I love you
Just the way you look tonight

With each word your tenderness grows
Tearing my fears apart
And that laugh that wrinkles your nose
Touches my foolish heart

Yes you're lovely, never ever change
Keep that breathless charm
Won't you please arrange it?
'Cause I love you
Just the way you look tonight
Just the way you look tonight
Darling
Just the way you look tonight`,sp:"",sps:"https://open.spotify.com/search/The%20Way%20You%20Look%20Tonight%20Rod%20Stewart"},{id:"close-to-you",t:"Close To You",artist:"The Carpenters",pri:"Baile",tags:["Baile","Fox"],lyrics:`WHY DO BIRDS SUDDENLY APPEAR
EVERY TIME YOU ARE NEAR?
JUST LIKE ME, THEY LONG TO BE
CLOSE TO YOU

WHY DO STARS FALL DOWN FROM THE SKY
EVERY TIME YOU WALK BY?
JUST LIKE ME, THEY LONG TO BE
CLOSE TO YOU

ON THE DAY THAT YOU WERE BORN
THE ANGELS GOT TOGETHER
AND DECIDED TO CREATE A DREAM COME TRUE
SO THEY SPRINKLED MOON-DUST
IN YOUR HAIR OF GOLD
AND STARLIGHT IN YOUR EYES OF BLUE

THAT IS WHY ALL THE GIRLS IN TOWN
FOLLOW YOU ALL AROUND
JUST LIKE ME, THEY LONG TO BE
CLOSE TO YOU

ON THE DAY THAT YOU WERE BORN
THE ANGELS GOT TOGETHER
AND DECIDED TO CREATE A DREAM COME TRUE
SO THEY SPRINKLED MOON-DUST
IN YOUR HAIR OF GOLD
AND STARLIGHT IN YOUR EYES OF BLUE

THAT IS WHY ALL THE GIRLS IN TOWN
FOLLOW YOU ALL AROUND
JUST LIKE ME, THEY LONG TO BE
CLOSE TO YOU

JUST LIKE ME, THEY LONG TO BE
CLOSE TO YOU`,sp:"",sps:"https://open.spotify.com/search/Close%20To%20You%20The%20Carpenters"},{id:"can-t-smile-without-you",t:"Can't Smile Without You",artist:"Barry Manilow",pri:"Baile",tags:["Baile","Fox"],lyrics:`You know I can't smile without you
I can't smile without you
I can't laugh and I can't sing
I'm finding it hard to do anything
you see I feel sad when you're sad
I feel glad when you're glad
If you only knew what I'm going through
I just can't smile without you

You came along just like a song
And brighten my day
Who would have believed that you where part of a dream
Now it all seems light years away

And now you know I can't smile without you
I can't smile without you
I can't laugh and I can't sing
I'm finding it hard to do anything
You see I feel sad when your sad
I feel glad when you're glad
If you only knew what I'm going through
I just can't smile

Now some people say happiness
Takes so very long to find
Well, I'm finding it hard leaving your love behind me

And you see I can't smile without you
I can't smile without you
I can't laugh and I can't sing
I'm finding it hard to do anything
You see I feel glad when you're glad
I feel sad when you're sad
If you only knew what I'm going through
I just can't smile without you`,sp:"",sps:"https://open.spotify.com/search/Can%27t%20Smile%20Without%20You%20Barry%20Manilow"},{id:"i-left-my-heart-in-san-francisco",t:"I Left My Heart In San Francisco",artist:"Tony Bennett",pri:"Baile",tags:["Baile","Fox"],lyrics:`The loveliness of Paris
seems somehow sadly gay
The glory that was Rome
is of another day
I've been terribly alone and forgotten in Manhattan
I'm going home to my city by the bay.

I left my heart ...in San Francisco
High on a hill, it calls to me.
To be where little cable cars
climb halfway to the stars!
The morning fog may chill the air
I don't care!

My love waits there... in San Francisco
Above the blue and windy sea
When I come home to you, San Francisco,
your golden sun will shine for me!`,sp:"",sps:"https://open.spotify.com/search/I%20Left%20My%20Heart%20In%20San%20Francisco%20Tony%20Bennett"},{id:"hello-detroit",t:"Hello Detroit",artist:"Sammy Davis Jr.",pri:"Baile",tags:["Baile","Fox","Jazz","Standard"],lyrics:`Hello Detroit
You've won my heart
Your renaissance, and waterfronts
Give you a flare of your own
Irresistible you
Hug and kissable you
You're alive with so much feeling
And I will always, be there for you
I will say, a little prayer for you
And I will always care for you  hello

Hello Detroit You've touched my soul
Thanks for the memories  I cherish so

Winter, Spring, Summer and Fall
You've got it all
Hello Hello Hello
Hello Detroit

SOLO METAL

On a stroll through Belle Isle Park
Greektown after dark
You instill in the young, the will to become
Stars and champions

Hello my friend  How have you been?
It's in the air  It's everywhere
The magical touch of you

Irresistible you Hug and kissable you
You're alive with so much feeling

And I will always be there for you
I will say a little prayer for you
I will always care for you

Hello  Big D  Motor City
And the Motown sound that's got the whole world singin'

I will always be there for you
I will always say a little prayer for you
I will always care for you
Hello Detroit`,sp:"",sps:"https://open.spotify.com/search/Hello%20Detroit%20Sammy%20Davis%20Jr."},{id:"just-a-gigolo",t:"Just A Gigolo",artist:"David Lee Roth",pri:"Baile",tags:["Baile","Fox","Jazz","Standard"],lyrics:`I 'm just a gigolo, and everywhere I go,
People know the part I'm playin'.
Pay for every dance, sellin' each romance,
Ooohh what they're sayin'.

There will come a day,
when youth will pass away,
What will they say about me?
When the end comes I know, there was just a gigolo
Life goes on without me. (Volta capo)

I ain't got nobody, nobody, cares for me,
Nobody, nobody, cares for me.
I'm so sad and lonely, sad and lonely, sad and lonely
Won't some sweet mama come and take a chance with me? Cause I ain't so bad.`,sp:"",sps:"https://open.spotify.com/search/Just%20A%20Gigolo%20David%20Lee%20Roth"},{id:"beauty-and-the-beast",t:"Beauty and the Beast",artist:"Celine Dion & Peabo Bryson",pri:"Balada",tags:["Balada"],lyrics:`Tale as old as time True as it can be
Barely even friends Then somebody bends
Unexpectedly

Just a little change Small, to say the least
Both a little scared Neither one prepared
Beauty and the Beast

Ever just the same  Ever a surprise
Ever as before Ever just as sure
As the sun will rise (Oooh, Oooh)

Ever just the same  Ever a surprise
Ever as before Ever just as sure
As the sun will rise (Oooh, Oooh)

Tale as old as time Tune as old as song
Bittersweet and strange
Finding you can change
Learning you were wrong

Certain as the sun Rising in the east
Tale as old as time Song as old as rhyme
Beauty and the Beast

Tale as old as time Song as old as rhyme
Beauty and the Beast
Beauty and the Beast.`,sp:"",sps:"https://open.spotify.com/search/Beauty%20and%20the%20Beast%20Celine%20Dion%20%26%20Peabo%20Bryson"},{id:"endless-love",t:"Endless Love",artist:"Lionel Richie & Diana Ross",pri:"Balada",tags:["Balada"],lyrics:`, There's only you in my life
The only thing that's right
My first love,You're every breath that I take
You're every step I make

And I I-I-I-I-I
I want to share All my love with you
No one else will do...

And your eyes Your eyes, your eyes
They tell me how much you care
Ooh yes, you will always be
My endless love

Two hearts, Two hearts that beat as one
Our lives have just begun

Forever Ohhhhhh
I'll hold you close in my arms
I can't resist your charms

And love Oh, love
I'll be a fool For you, I'm sure
You know I don't mind
Oh, you know I don't mind

'Cause you, You mean the world to me, Oh
I know I know I've found in you
My endless love

Oooh-woow
Boom, boom

Oooh, and love Oh, love
I'll be that fool For you, I'm sure
You know I don't mind
Oh you know-
I don't mind

And, yes You'll be the only one
'Cause No one can deny
This love I have inside
And I'll give it all to you
My love
My love, my love
My endless love`,sp:"",sps:"https://open.spotify.com/search/Endless%20Love%20Lionel%20Richie%20%26%20Diana%20Ross"},{id:"hero",t:"Hero",artist:"Mariah Carey",pri:"Balada",tags:["Balada"],lyrics:`, if you look inside your heart.
You don't have to be afraid of what you are.
There's an answer, if you reach into your soul,
And the sorrow that you know will melt away.

And then a hero comes along, with the strength to carry on,
And you cast your fears aside, and you know you can survive.
So when you feel like hope is gone,
Look inside you and be strong,
And you'll finally see the truth, that a hero lies in you.

It's a long road, when you face the world alone.
No one reaches out a hand for you to hold.
You can find love, if you search within yourself,
And the emptiness you felt will disappear.

And then a hero comes along, with the strength to carry on,
And you cast your fears aside, because you know you can survive.
So when you feel like hope is gone,
Look inside you and be strong,
And you'll finally see the truth, that a hero lies in you.

Lord knows, dreams are hard to follow.
But don't let anyone, take them away- ay ay.
Hold on, there will be tomorrow.
In time, you'll find the way.

And then a hero comes along, with the strength to carry on,
And you cast your fears aside, because you know you can survive.
So when you feel like hope is gone,
Look inside you and be strong,
And you'll finally see the truth, that a hero lies in you .

That a hero lies in... you
That a hero lies in... you`,sp:"",sps:"https://open.spotify.com/search/Hero%20Mariah%20Carey"},{id:"after-the-love-has-gone",t:"After the Love Has Gone",artist:"Earth, Wind & Fire",pri:"Balada",tags:["Balada"],lyrics:`For a while to love was all we could do
we were young and we knew
and our eyes were alive
Deep inside we knew our love was true

For a while we paid no mind to the past
we knew love would lastEv'ry night somethin' right
would invite us to begin the dance

Somethin' happened along the way
what used to be happy was sad
Somethin' happened along the way
and yesterday was all we had

And oh after the love has gone
how could you lead me on
and not let me stay around

Oh oh oh after the love has gone
what used to be right is wrong
Can love that's lost be found

For a while to love each other with all
we would ever needLove was strong for so long
never knew that what was wrong oh baby wasn't right We tried to find what we had
till sadness was all we shared
We were scared
this affair would lead our love into

Somethin' happened along the way
yesterday was all we had
Somethin' happened along the way
what used to be happy is sad

Somethin' happened along the way
oh yesterday was all we had

oh after the love has gone
how could you lead me on
and not let me stay around

Oh oh oh after the love has gone
what used to be right is wrong
Can love that's lost be found

Oh oh oh oh oh oh after the love has gone
what used to be right is wrong
Can love that's lost be found
Oh woh woh after the love has gone
what used to be right is wrong
Can love that's lost be found

Oh woh woh after the love has gone
what used to be right is wrong
Can love that's lost be found
Oh woh who

Solo

Oh woh woh after the love has gone
what used to be right is wrong
Can love that's lost be found

Woh woh woh after the love has gone
what used to be right is wrong
Can love that's lost be found
Woh woh woh`,sp:"",sps:"https://open.spotify.com/search/After%20the%20Love%20Has%20Gone%20Earth%2C%20Wind%20%26%20Fire"},{id:"emocoes",t:"Emo\xE7\xF5es",artist:"Roberto Carlos",pri:"Jazz/Standard",tags:["Jazz","Standard"],lyrics:`Quando eu estou aqui
Eu vivo esse momento lindo
Olhando pra voc\xEA
E as mesmas emo\xE7\xF5es sentindo
S\xE3o tantas j\xE1 vividas
S\xE3o momentos que eu n\xE3o esqueci
Detalhes de uma vida
Hist\xF3rias que eu contei aqui

Amigos eu ganhei
Saudades eu senti, partindo
E \xE0s vezes eu deixei
Voc\xEA me ver chorar, sorrindo

Sei tudo que o amor
\xC9 capaz de me dar
Eu sei j\xE1 sofri
Mas n\xE3o deixo de amar

Se chorei Ou se sorri
O importante
\xC9 que emo\xE7\xF5es eu vivi

S\xE3o tantas j\xE1 vividas
S\xE3o momentos que eu n\xE3o esqueci
Detalhes de uma vida
Hist\xF3rias que eu contei aqui

Mas eu estou aqui
Vivendo esse momento lindo
De frente pra voc\xEA
E as emo\xE7\xF5es se repetindo

Em paz com a vida
E o que ela me traz
Na f\xE9 que me faz
Otimista demais

Se chorei Ou se sorri
O importante
\xC9 que emo\xE7\xF5es eu vivi

Se chorei Ou se sorri
O importante
\xC9 que emo\xE7\xF5es eu vivi`,sp:"",sps:"https://open.spotify.com/search/Emo%C3%A7%C3%B5es%20Roberto%20Carlos"},{id:"they-can-t-take-that-away-from-me",t:"They Can't Take That Away From Me",artist:"Frank Sinatra",pri:"Jazz/Standard",tags:["Jazz","Standard"],lyrics:`The way you wear your hat
The way you sip your tea
The memory of all that
No no  they can't take that away from me

The way your smile just beams
The way you sing off key
The way you haunt my dreams
No no  they can't take that away from me

We may never
Never never meet again, on that bumpy road to love
but I'll always, always keep the memory of

The way you hold your knife
The way we danced till three
The way you changed my life
Hey No they can't take that away from me
No you can't take that away from me

Solo

We may never
Never never meet again, on that bumpy road to love
but I'll always, always keep the memory of

The way you hold your knife
The way we danced till three
The way you changed my life
Oh No they can't take that away from me
No they can't take that away from me
No they can't take that away from me
No they can't take that away from me`,sp:"",sps:"https://open.spotify.com/search/They%20Can%27t%20Take%20That%20Away%20From%20Me%20Frank%20Sinatra"},{id:"for-once-in-my-life",t:"For Once In My Life",artist:"Michael Bubl\xE9",pri:"Jazz/Standard",tags:["Jazz","Standard"],lyrics:`For once in my life
I've got someone who needs me
Someone I've needed so long
For once unafraid
I can go where life leads me
And somehow I know I'll be strong

For once I can touch
what my heart used to dream of
Long before I knew
The Someone warm like you
Oh Could make my dreams come true

For once in my life
I won't let sorrow hurt me
Not like it's hurt me before
For once I've got someone
I know won't desert me
And I'm not alone anymore

For once I can say:
"This is mine you can't take it"
as long as I know I got a love I can make it
For once in my life
I've got someone who needs me (solo)
For once I can say:
"This is mine you can't take it"
as long as I know I got a love I can make it
For once in my life
I've got someone who needs me

For once in my life
I've got someone who needs me`,sp:"",sps:"https://open.spotify.com/search/For%20Once%20In%20My%20Life%20Michael%20Bubl%C3%A9"},{id:"beyond-the-sea",t:"Beyond The Sea",artist:"Bobby Darin",pri:"Jazz/Standard",tags:["Jazz","Standard"],lyrics:`Somewhere beyond the sea
Somewhere waiting for me
My lover stands on golden sands
And watches the ships that go sailing

Somewhere beyond the sea
She's there watching for me
If I could fly like birds on high
Then straight to her arms
I'd go sailing

It's far beyond the stars
It's near beyond the moon
I know beyond the doubt
My heart will lead me there soon

We'll meet beyond the shore
We'll kiss just like before
Happy we will be beyond the sea
And never again i'll go sailing

Solo

I know beyond the doubt
My heart will lead me there soon

We'll meet,
I know we'll meet beyond the shore
We'll kiss just as before
And happy we'll be beyond the sea
And never again i'll go sailing

And never again i'll go sailing

And never again i'll go sailing
Yeah`,sp:"",sps:"https://open.spotify.com/search/Beyond%20The%20Sea%20Bobby%20Darin"},{id:"all-of-me",t:"All of Me",artist:"Frank Sinatra",pri:"Jazz/Standard",tags:["Jazz","Standard"],lyrics:`  Why not take all of me?
Can't you see?
I'm no good     without you

Take my lips    I want to lose them
Take this arms  I'll never use them

Your goodbyes left me with eyes that cry
How can I get along, without you?
You got the part that once was my heart
So, why not why not  take all of me?

All of me  Step of all of me?
Can't you see?
I'm a mess without you
Take my lips    I want to lose them
Take this arms I'll never use them

Your goodbye left me with eyes that I cry
Now I'm lost without you
And now that you took that part
That used to be my heart

You took the part that used to be my heart
So, why not take all of me?`,sp:"",sps:"https://open.spotify.com/search/All%20of%20Me%20Frank%20Sinatra"},{id:"proud-mary",t:"Proud Mary",artist:"Creedence Clearwater Revival",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Left a good job in the city,
Working for The Man every night and day,
And I never lost one minute of sleeping,
Worrying 'bout the way things might have been.

Big wheel keep on turning,
Proud Mary keep on burning,
Rolling, rolling, rolling on the river.

Cleaned a lot of plates in Memphis,
Pumped a lot of pain down in New Orleans,
But I never saw the good side of the city,
Until I hitched a ride on a river boat queen.

Rolling, rolling, rolling on the river.
If you come down to the river,
Bet you gonna find some people who live.
You don't have to worry 'cause you have no money,
People on the river are happy to give.

Rolling, rolling, rolling on the river.
Rolling, rolling, rolling on the river.
Rolling, rolling, rolling on the river.`,sp:"",sps:"https://open.spotify.com/search/Proud%20Mary%20Creedence%20Clearwater%20Revival"},{id:"twist-and-shout",t:"Twist and Shout",artist:"The Beatles",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Well, shake it up baby now
Twist and shout
Come on, come on, come, come on baby now
Come on and work it on out
Well work it on out, honey
You know you look so good
You know you got me goin' now
Just like I knew you would

Well, shake it up baby now
Twist and shout
Come on, come on, come, come on baby now
Come on and work it on out
You know you twist, little girl
You know you twist so fine
Come on and twist a little closer now
And let me know that you're mine, woo

Ah, ah, ah, ah
Yeah, shake it up baby now
Twist and shout
Come on, come on, come, come on baby now
Come on and work it on out
You know you twist, little girl
You know you twist so fine
Come on and twist a little closer now
And let me know that you're mine
Well shake it, shake it, shake it, baby now`,sp:"",sps:"https://open.spotify.com/search/Twist%20and%20Shout%20The%20Beatles"},{id:"a-hard-day-s-night",t:"A Hard Day's Night",artist:"The Beatles",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`It's been a hard day's night
And I've been workin' like a dog.
It's been a hard day's night.
I should be sleepin' like a log,

But when I get home to you,
I find the things that you do
Will make me feel alright.

You know I work all day
To get you money to buy you things
And it's worth it just to hear you say,
You're gonna give me everything.

So why on earth should I moan?
'Cause when I get you alone,
You know I feel okay.

When I'm home,
Everything seems to be right.
When I'm home,
Feeling you holding me tight.
Tight, yeah.

It's been a hard day's night
And I've been workin' like a dog.
It's been a hard day's night.
I should be sleepin' like a log,

But when I get home to you,
I find the things that you do
Make me feel alright.
You make me feel alright.
You know I feel alright.

Solo

So why on earth should I moan?
'Cause when I get you alone,
You know I feel okay.

When I'm home,
Everything seems to be right.
When I'm home,
Feeling you holding me tight.
Tight, yeah.

It's been a hard day's night
And I've been workin' like a dog.
It's been a hard day's night.
I should be sleepin' like a log,

But when I get home to you,
I find the things that you do
Make me feel alright.
You make me feel alright.
You know I feel alright.`,sp:"",sps:"https://open.spotify.com/search/A%20Hard%20Day%27s%20Night%20The%20Beatles"},{id:"i-wanna-hold-your-hand",t:"I Wanna Hold Your Hand",artist:"The Beatles",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Oh yeah, I'll tell you something
I think you'll understand
When I say that something
I wanna hold your hand

I wanna hold your hand
I wanna hold your hand

Oh, please! Say to me
You'll let me be your man
And, please! Say to me
You'll let me hold your hand

Now let me hold your hand
I wanna hold your hand

And when I touch you I feel happy inside
It's such a feeling that my love
I can't hide, I can't hide, I can't hide

Yeah, you got that something
I think you'll understand
When I say that something
I wanna hold your hand

I wanna hold your hand
I wanna hold your hand

And when I touch you I feel happy inside
It's such a feeling that my love
I can't hide, I can't hide, I can't hide

Yeah, you got that something
I think you'll understand
When I feel that something
I wanna hold your hand

I wanna hold your hand
I wanna hold your hand
I wanna hold your hand`,sp:"",sps:"https://open.spotify.com/search/I%20Wanna%20Hold%20Your%20Hand%20The%20Beatles"},{id:"stayin-alive",t:"Stayin' Alive",artist:"Bee Gees",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Well, you can tell by the way I use my walk
I'm a woman's man, no time to talk.
Music loud and women warm,
I've been kicked around since I was born.
And now it's all right, it's okay,
you may look the other way.
We can try to understand
the New York Times' effect on man.

Whether you're a brother
or whether you're a mother
you're stayin' alive, stayin' alive.
Feel the city breakin' and everybody shakin'
and you're stayin' alive, stayin' alive.
Ah, ah, ah, ah, stayin' alive, stayin' alive,
ah, ah, ah, ah, stayin' alive.

Oh, when you walk.

Well, now I get low and I get high,
and when I can't get either, I really try.
Got the wings of heaven on my shoes,
I'm a dancin' man and I just can't lose.
You know, it's all right, it's okay,
I'll live to see another day.
We can try to understand
the New York Times' effect on man.

(Repeat chorus)

(Bridge)
Life goin' nowhere, somebody help me,
somebody help me, yeah.
Life goin' nowhere, somebody help me, yeah.
I'm stayin' alive.

Well, you can tell by the way I use my walk
I'm a woman's man, no time to talk.
Music loud and women warm,
I've been kicked around since I was born.
And now it's all right, it's okay,
you may look the other way.
We can try to understand
the New York Times' effect on man.`,sp:"",sps:"https://open.spotify.com/search/Stayin%27%20Alive%20Bee%20Gees"},{id:"summer-nights",t:"Summer Nights",artist:"Grease (trilha)",pri:"Rock",tags:["Anos 50/60","Grease","Rock","Trilha"],lyrics:`Summer loving had me a blast
Summer loving happened so fast
I met a girl crazy for me
Met a boy cute as can be
Summer days drifting away, to oh oh the summer nights

Well-a well-a well-a huh
Tell me more, tell me more
Did you get very far?
Tell me more, tell me more
Like does he have a car?

She swam by me, she got a cramp
He ran by me, got my suit damp
I saved her life, she nearly drowned
He showed off, splashing around
Summer sun, something's begun, but oh oh the summer nights
Tell me more, tell me more
Was it love at first sight?
Tell me more, tell me more
Did she put a fight?
Took her bowling in the arcade
We went strolling, drank lemonade
We made out under the dock
We stayed out 'till ten o'clock
Summer fling, don't mean a thing, but oh
oh the summer nights

Tell me more, tell me more
But you don't have to bragg
Tell me more, tell me more
Cause he sounds like a drag

He got friendly, holding my hand
She got friendly down in the sand
He was sweet just turned eighteen
Well she was good you know what I mean
Summer heat, boy and girl meet, but oh oh the summer nights

Tell me more, tell me more
How much dough did he spend?

Tell me more, tell me more
Could she get me a friend?

It turned colder - that's where it ends
So I told her we'd still be friends
Then we made our true love vow
Wonder what she's doing now

Summer dreams ripped at the seams, but oh those summer nights

Tell me more, tell me more`,sp:"",sps:"https://open.spotify.com/search/Summer%20Nights%20Grease%20%28trilha%29"},{id:"you-re-the-one-that-i-want",t:"You're The One That I Want",artist:"Grease (trilha)",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`I got chills. They\xB4re multiplyin
And I\xB4m losin\xB4 control.
Cause the power you\xB4re suplyin
it\xB4s electrifyin\xB4!

You better shape up, cause I need a man
and my heart is set on you.
You better shape up you better understand
to my heart I must be true.

Nothin\xB4 left, nothin\xB4 left for me to do.

You\xB4re the one that I want.
(you are the one i want), o,o, oo honey.
The one that I want. Oh, yes indeed.

If you\xB4re filled with affection
you\xB4re too shy to convey,
meditate in my direction. Feel your way.

I better shape up, cause you need a man
i need a man who can keep me satisfied.
I better shape up if I\xB4m gonna prove
you better prove that my faith is justified.
Are you sure? Yes, I\xB4m sure down deep inside.

HAVAI 5.0`,sp:"",sps:"https://open.spotify.com/search/You%27re%20The%20One%20That%20I%20Want%20Grease%20%28trilha%29"},{id:"johnny-b-goode",t:"Johnny B. Goode",artist:"Chuck Berry",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Deep down in Louisiana close to New Orleans
Way back up in the woods among the evergreens,
There stood a log cabin made of earth and wood
Where lived a country boy named Johnny B. Goode,
Who never ever learned to read or write so well
But he could play a guitar just like a ringin' a bell.

Go Go  Go Johnny Go Go (x4)
Johnny B. Goode

He carry his guitar in a gunny sack,
Go sit beneath a tree by the railroad track
Oh the engineers would see him sittin in the shade,
Strummin with the rhythm that the drivers made,
People passin' by they would stop and say
"Oh my but that little country boy can play"

(Chorus)

His momma told him "some day you will be a man,
And you will be the leader of a big ol' band
Many people comin' from miles around,
To hear you play your music till the sun go down,
Maybe some day your name will be in lights sayin
'Johnny B. Goode' tonight"`,sp:"",sps:"https://open.spotify.com/search/Johnny%20B.%20Goode%20Chuck%20Berry"},{id:"pode-vir-quente-que-eu-estou-fervendo",t:"Pode Vir Quente Que Eu Estou Fervendo",artist:"Erasmo Carlos",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Se voc\xEA quer brigar
E acha que com isso estou sofrendo
Se enganou meu bem
Pode vir quente que eu estou fervendo (2x)

Pode tirar seu time de campo
Que o meu cora\xE7\xE3o \xE9 do tamanho de um trem
Iguais \xE0 voc\xEA j\xE1 apanhei mais de cem
Pode vir quente que eu estou fervendo`,sp:"",sps:"https://open.spotify.com/search/Pode%20Vir%20Quente%20Que%20Eu%20Estou%20Fervendo%20Erasmo%20Carlos"},{id:"menina-linda",t:"Menina Linda",artist:"Renato e Seus Blue Caps",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Ah! Deixe essa boneca, fa\xE7a-me o favor
Deixe isso tudo e vem brincar de amor
De amor, hei hei hei de amor

Oh! Meu bem
Lembre-se que existe por ai algu\xE9m
Que t\xE3o sozinho vive sem ningu\xE9m
Sem ningu\xE9m, sem ningu\xE9m

Menina linda eu lhe adoro ahhhh
Menina pura como a flor
Sua boneca vai quebrar AHHHH
Mas viver\xE1 o nosso amor`,sp:"",sps:"https://open.spotify.com/search/Menina%20Linda%20Renato%20e%20Seus%20Blue%20Caps"},{id:"festa-de-arromba",t:"Festa de Arromba",artist:"Erasmo Carlos",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Vejam s\xF3 que festa de arromba
No outro dia eu fui parar
Presentes no local,O r\xE1dio e a televis\xE3o
Cinema, mil jornais Muita gente, confus\xE3o

Quase n\xE3o consigoNa entrada chegar
Pois a multid\xE3o Estava de amargar
Hey, Hey,(hey, hey) Que onda
Que festa de arromba

Logo que eu cheguei notei
Ronnie Cord com um copo na m\xE3o
Enquanto Prini Lorez Bancava o anfitri\xE3o
Apresentando a todo mundo Meire Pav\xE3o
Wanderl\xE9a ria e Cleide desistia
De agarrar um doce Que do prato n\xE3o saia
Hey, Hey,(hey, hey) Que onda
Que festa de arromba

Renato e seus Blue CapsTocavam na piscina
The Clevers no terrace Jet Black's no sal\xE3o
Os Bells de cabeleira N\xE3o podiam tocar
Enquanto a Rosemary
N\xE3o parasse de dan\xE7ar
Mas vejam quem chegou de repente
Roberto Carlos em seu novo carr\xE3o
Enquanto Tony e Dem\xE9trius
Fumavam no jardim

S\xE9rgio e Z\xE9 Ricardo Esbarravam em mim
L\xE1 fora um corre corre Dos brotos do lugar
Era o Ed Wilson que acabava de chegar
Hey, Hey,(hey, hey) Que onda
Que festa de arromba

Renato e seus Blus CapsTocavam na piscina
The Clevers no terrace Jet Black's no sal\xE3o
Os Bells de cabeleira N\xE3o podiam tocar
Enquanto a Rosemary
N\xE3o parasse de dan\xE7ar

Mas vejam quem chegou de repente
Roberto Carlos em seu novo carr\xE3o
Enquanto Tony e Dem\xE9trius
Fumavam no jardim
S\xE9rgio e Z\xE9 Ricardo Esbarravam em mim
L\xE1 fora um corre corre Dos brotos do lugar
Era o Ed Wilson que acabava de chegar
Hey, Hey,(hey, hey) Que onda`,sp:"",sps:"https://open.spotify.com/search/Festa%20de%20Arromba%20Erasmo%20Carlos"},{id:"o-bom",t:"O Bom",artist:"Eduardo Ara\xFAjo",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:`Ele \xC9 O Bom, \xC9 O Bom, \xC9 O Bom

Ah!, Meu Carro \xC9 Vermelho, \u2028N\xE3o Uso Espelho Pra Me Pentear
Botinha Sem Meia
E S\xF3 Na Areia Eu Sei Trabalhar
Cabelo Na Testa, Sou O Dono Da Festa, Perten\xE7o Aos Dez Mais
Se Voc\xEA Quiser Experimentar
Sei Que Vai Gostar (2x)

Quando Eu Apare\xE7o O Coment\xE1rio \xC9 Geral, Ele \xC9 O Bom, \xC9 O BomDemais

Ter Muitas Garotas Para Mim \xC9 Normal, Eu Sou O Bom, Entre Os DezMais

Ele \xC9 O Bom, \xC9 O Bom, \xC9 O Bom`,sp:"",sps:"https://open.spotify.com/search/O%20Bom%20Eduardo%20Ara%C3%BAjo"},{id:"rua-augusta",t:"Rua Augusta",artist:"Roberto Carlos",pri:"Rock",tags:["Anos 50/60","Rock"],lyrics:` a 120 por hora
Botei a turma toda do passeio pra fora
Fiz curva em duas rodas sem usar a buzina
Parei a quatro dedos da vitrina

Hay, hay, Johnny Hay, hay, Alfredo
Quem \xE9 da nossa gang n\xE3o tem medo (2x)

Meu carro n\xE3o tem breque,
n\xE3o tem luz,n\xE3o tem buzina
Tem tr\xEAs carburadores, todos os tr\xEAs envenenados
S\xF3 p\xE1ra na subida quando acaba a gasolina
S\xF3 passa se tiver sinal fechado

Hay, hay, Johnny Hay, hay, Alfredo
Quem \xE9 da nossa gang n\xE3o tem medo (2x)

Toquei a 130 com destino \xE0 cidade
No Anhangaba\xFA eu botei mais velocidade
Com tr\xEAs pneus carecas derrapando na raia
Subi a galeria Prestes Maia Tremend\xE3o
Hay, hay, Johnny Hay, hay, Alfredo`,sp:"",sps:"https://open.spotify.com/search/Rua%20Augusta%20Roberto%20Carlos"},{id:"on-the-floor",t:"On The Floor",artist:"Jennifer Lopez feat. Pitbull",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:` and stay out on the floor
Dance the night away
Grab somebody drink a little more

La la la la la la la la la la la la la la
Tonight we gon' be it on the floor
La la la la la la la la la la la la la la
Tonight we gon' be it on the floor`,sp:"",sps:"https://open.spotify.com/search/On%20The%20Floor%20Jennifer%20Lopez%20feat.%20Pitbull"},{id:"chorando-se-foi-llorando-se-fue-lambada",t:"Chorando Se Foi (Llorando Se Fue / Lambada)",artist:"Ivete Sangalo",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Chorando se foi Quem um dia s\xF3 me fez chorar
Chorando se foi Quem um dia s\xF3 me fez chorar

Chorando estar\xE1 Ao lembrar de um amor
Que um dia n\xE3o soube cuidar
Chorando estar\xE1 Ao lembrar de um amor
Que um dia n\xE3o soube cuidar

A recorda\xE7\xE3o Vai estar com ele aonde for
A recorda\xE7\xE3o Vai estar com ele aonde for

Chorando estar\xE1 Ao lembrar de um amor
Que um dia n\xE3o soube cuidar
Chorando estar\xE1 Ao lembrar de um amor
Que um dia n\xE3o soube cuidar  (solo volta)`,sp:"",sps:"https://open.spotify.com/search/Chorando%20Se%20Foi%20%28Llorando%20Se%20Fue%20/%20Lambada%29%20Ivete%20Sangalo"},{id:"c-est-une-bossa-nova",t:"C'est Une Bossa Nova",artist:"",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`C'est une bossa nova,
Que j'ai dans\xE9 avec toi.
Je n'me souviens plus tr\xE8s bien o\xF9 \xE7a.

C'\xE9tait la fin de la nuit,
J'avais bu quelques whisky.
Alors tu m'as emen\xE9e chez toi.

Chez toi,
Je n'me souviens plus tr\xE8s bien pourquoi.
Chez toi,
C'est tellement loin d\xE9j\xE0.

C'est un bossa nova,
Je n'me souviens plus de toi.
Mais je me souviens de cet air-l\xE0.

Toi, Je me souviens que tu riais. Moi,

Je me souviens que je dansais.

C'est une bossa nova,
Que j'ai dans\xE9 avec toi.
Je n'me souviens plus tr\xE8s bien o\xF9 \xE7a.`,sp:"",sps:"https://open.spotify.com/search/C%27est%20Une%20Bossa%20Nova"},{id:"for-me-formidable",t:"For Me Formidable",artist:"Charles Aznavour",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`You are the one for me, for me, for me, formidable
You are my love very, very, very, v\xE9ritable
Et je voudrais pouvoir un jour enfin te le dire
Te l' \xE9crire

Dans la langue de Shakespeare
My daisy, daisy, daisy, d\xE9sirable
Je suis malheureux d' avoir si peu de mots
\xC0 t'offrir en cadeaux

Darling I love you, love you, darling
I want you
Et puis c' est \xE0 peu pr\xE8s tout
You are the one for me, for me, for me, formidable

You are the one for me, for me, for me, formidable

But how can you
See me, see me, see me, si minable
Je ferais mieux d'aller choisir mon vocabulaire
Pour te plaire

Dans la langue de Moli\xE8re
Toi, tes eyes, ton nose, tes lips adorables
Tu n'as pas compris tant pis
Ne t'en fais pas et viens-t-en dans mes bras

Darling I love you, love you,
Darling, I want you
Et puis le reste on s'en fout
You are the one for me, for me, for me, formidable

Je me demande m\xEAme  Pourquoi je t'aime
Toi qui te moques de moi et de tout
Avec ton air canaille, canaille, canaille
How can I love you`,sp:"",sps:"https://open.spotify.com/search/For%20Me%20Formidable%20Charles%20Aznavour"},{id:"non-je-ne-regrette-rien",t:"Non, Je Ne Regrette Rien",artist:"\xC9dith Piaf",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Non, rien de rien
Non, je ne regrette rien
Ni le bien qu'on m'a fait, ni le mal
Tout \xE7a m'est bien \xE9gal

Non, rien de rien
Non, je ne regrette rien
C'est pay\xE9, balay\xE9, oubli\xE9
Je me fous du pass\xE9`,sp:"",sps:"https://open.spotify.com/search/Non%2C%20Je%20Ne%20Regrette%20Rien%20%C3%89dith%20Piaf"},{id:"besame-mucho-versao-francesa",t:"B\xE9same Mucho (vers\xE3o francesa)",artist:"",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:` un autre pays \xE7a veut dire embrasse-moi

Besame besame mucho
Toute ma vie je voudrais
la chanter avec toi

Besame, besame mucho`,sp:"",sps:"https://open.spotify.com/search/B%C3%A9same%20Mucho%20%28vers%C3%A3o%20francesa%29"},{id:"bye-bye",t:"Bye Bye",artist:"Dalida",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Bye bye ce n'est pas un adieu
Bye bye c'est un mot merveilleux
Qu'on dit quand on se quitte en chantant
Qu'on se reverra dans pas longtemps

Ciao ciao ce n'est pas un adieu
Ciao ciao c'est un mot merveilleux
Qui rend moins triste tous les d\xE9parts
Enfin c'est un au revoir

Mais en partant je vous remercie
Vous avez vraiment \xE9t\xE9 si gentils
Merci monsieur le sous directeur
A toi aussi le petit chasseur

Et en partant on vous remercie
On \xE9tait content de vous voir ici
Mais puisqu'avec la nouvelle ann\xE9e
L'instant est venu de se quitter

Bye bye I'ann\xE9e quatre vingt un
Bye bye et que tout aille bien
Pendant cette ann\xE9e quatre vingt deux
C'est pour vous le plus cher de mes v\u0153ux

Ciao ciao l'ann\xE9e quatre vingt un
Ciao ciao et que l'ann\xE9e qui vient
Vous apporte beaucoup de bonheur
Se sont nos v\u0153ux les meilleurs

Bye bye ce n'est pas un adieu
Bye bye mais c'\xE9tait merveilleux
C'\xE9tait comme un beau soir de No\xEBl
Mais lorsque s'\xE9teignent les chandelles

Ciao ciao meme si l'on ne veut
Ciao ciao jamais se dire adieu
Il faut savoir avant de partir
Se le dire dans un sourire

Bye bye ce n'est pas un adieu
Bye bye c'est un mot merveilleux
Qu'on dit quand on se quitte en chantant
Qu'on se reverra dans pas longtemps

Ciao ciao ce n'est pas un adieu
Ciao ciao c'est un mot merveilleux
Qui rend moins triste tous les d\xE9parts
Enfin c'est un au revoir

Bye bye ce n'est pas un adieu
Bye bye
C'est un mot merveilleux
Qu'on dit quand on se quitte en chantant
Qu'on se reverra dans pas longtemps
Ciao ciao Ce n'est pas un adieu
Ciao ciao  C'est un mot merveilleux
Qui rend moins triste tous les d\xE9parts
Enfin c'est un au revoir (2x)`,sp:"",sps:"https://open.spotify.com/search/Bye%20Bye%20Dalida"},{id:"hello",t:"Hello",artist:"Martin Solveig & Dragonette",pri:"Dance",tags:["Dance"],lyrics:` and get along with you
Hello
It doesn't really mean that I'm into you
Hello

You're alright but I'm here darling to enjoy the party
Don't get too excited cause that's all you get from me Hey

Yeah I think you're cute but really you should know
I just came to say hello Hello, hello, hello

I'm not the kinda girl who get messed up with you Hello
I'mma let you try to convince me to Hello

Its alright I'm getting dizzy just enjoy the party
Its okay with me if you don't have that much to say, hey

Kinda like this thing but there's something you should know
I just came to say hello`,sp:"",sps:"https://open.spotify.com/search/Hello%20Martin%20Solveig%20%26%20Dragonette"},{id:"sexy-and-i-know-it",t:"Sexy and I Know It",artist:"LMFAO",pri:"Dance",tags:["Dance"],lyrics:`Girl look at that body(3x)
I work out (2x)

When I walk in the spot
This is what I see
Everybody stops
And they staring at me
I got passion in my pants
And I ain't afraid to show it
Show it, show it, show it

I'm sexy and I know it (2x)
Wiggle, wiggle, wiggle, wiggle, yeah...

Do the wiggle man
I do the wiggle man  Yeah

I'm sexy and I know it  hey  yeah
Girl look at that body
Girl look at that body
Girl look at that body I work out (2x)
Party rock!
Shake That !

Party rock!
Let's go!`,sp:"",sps:"https://open.spotify.com/search/Sexy%20and%20I%20Know%20It%20LMFAO"},{id:"party-rock-anthem",t:"Party Rock Anthem",artist:"LMFAO",pri:"Dance",tags:["Dance"],lyrics:`Everybody just have a good time
And we gonna make you lose your mind
Everybody just have a good time

Party rock is in the house tonight
Everybody just have a good time
And we gonna make you lose your mind
We just wanna see yaa!

Shake That !`,sp:"",sps:"https://open.spotify.com/search/Party%20Rock%20Anthem%20LMFAO"},{id:"take-over-control",t:"Take Over Control",artist:"Afrojack feat. Eva Simons",pri:"Dance",tags:["Dance"],lyrics:` Take over control
Plug it in and turn me on

I want you to
Take over control (3x)
Plug it in and turn me on
Ohhh ohhh Plug it in and turn me on (2x)`,sp:"",sps:"https://open.spotify.com/search/Take%20Over%20Control%20Afrojack%20feat.%20Eva%20Simons"},{id:"getting-over-you",t:"Getting Over You",artist:"David Guetta feat. Chris Willis",pri:"Dance",tags:["Dance"],lyrics:` right now,
If I only knew back then,
There's no gettin' over,
There's no gettin' over,
There's just no getting over you.
Wish I could spin my world into reverse
Just to have you back again,

There's no gettin' over,
There's no gettin over,
There's just no gettin' over you (you)!
just no getting over you

Yeah 3x
You like to drink? So do we
Get my bottles, bring 'um to me
Hold your glasses up, people everywhere
Now everybody put your hands in the air

Yeah yeah yeah, Girl I wanna, Yeah yeah
I wanna see you tonight,

Yeah yeah yeah, Girl I gotta, yeah yeah
I gotta I gotta I gotta see you tonight (2x)`,sp:"",sps:"https://open.spotify.com/search/Getting%20Over%20You%20David%20Guetta%20feat.%20Chris%20Willis"},{id:"where-them-girls-at",t:"Where Them Girls At",artist:"David Guetta feat. Flo Rida & Nicki Minaj",pri:"Dance",tags:["Dance"],lyrics:` in here, where do I begin?
I seen this one, I'm bout to go in
Then she said, I'm here with my friends
She got me thinking, and that's when I said

Where dem girls at, girls at?
Where dem girls at, girls at?
Where dem girls at, girls at?
So go get them, we can all be friends`,sp:"",sps:"https://open.spotify.com/search/Where%20Them%20Girls%20At%20David%20Guetta%20feat.%20Flo%20Rida%20%26%20Nicki%20Minaj"},{id:"the-time-dirty-bit",t:"The Time (Dirty Bit)",artist:"The Black Eyed Peas",pri:"Dance",tags:["Dance"],lyrics:`And I never felt this way before
And I swear this is true
And I owe it all to you
Oh I had the time of my life
And I never felt this way before
And I swear this is true
And I owe it all to you   Dirty bit (2x)

I came over here to rock
Light a fire, make it hot
I don't wanna take no pictures
I just wanna take some shots

So come on, let's go
Let's lose control
Let's do it all night
Till we can't do it no more

People rocking to the sound
Turn it up and watch you pound
We gon rock it to the top
Until the roof come burnin down
Yeah it's hot in here
The temperature
Has got these ladies
Gettin freaky

I got freaky, freaky baby
I was chillin with the ladies
I ain't come to get buldgy
I came here to get crazy
I was born to get wild
That's my style
If you didn't know that
Well baby now you know now

I had the time of my life
And I never felt this way before
And I swear this is true
And I owe it all to you
Oh I had the time of my life
And I never felt this way before
And I swear this is true
And I owe it all to you   Dirty bit (2x)`,sp:"",sps:"https://open.spotify.com/search/The%20Time%20%28Dirty%20Bit%29%20The%20Black%20Eyed%20Peas"},{id:"dynamite",t:"Dynamite",artist:"Taio Cruz",pri:"Dance",tags:["Dance"],lyrics:` in the air sometimes
Saying AYO
Gotta let go
I wanna celebrate and live my life
Saying AYO
Baby, let's go

Cause we gon' rock this club
We gon' go all night
We gon' light it up
Like it's dynamite

Cause I told you once
Now I told you twice
We gon' light it up
Like it's dynamite`,sp:"",sps:"https://open.spotify.com/search/Dynamite%20Taio%20Cruz"},{id:"last-friday-night-t-g-i-f",t:"Last Friday Night (T.G.I.F.)",artist:"Katy Perry",pri:"Dance",tags:["Dance"],lyrics:`Yeah we danced on tabletops
And we took too many shots
Think we kissed but I forgot

Last Friday night
Yeah we maxed our credit cards
And got kicked out of the bar
So we hit the boulevard

Last Friday night
We went streaking in the park
Skinny dipping in the dark
Then had a menage a trois

Last Friday night
Yeah I think we broke the law
Always say we're gonna stop-op
Whoa-oh-oah

This Friday night
Do it all again`,sp:"",sps:"https://open.spotify.com/search/Last%20Friday%20Night%20%28T.G.I.F.%29%20Katy%20Perry"},{id:"only-girl-in-the-world",t:"Only Girl (In the World)",artist:"Rihanna",pri:"Dance",tags:["Dance"],lyrics:`Like I'm the only girl in the world
Like I'm the only one that you'll ever love
Like I'm the only one who knows your heart
Only girl in the world...
Like I'm the only one that's in command
Cuz I'm the only one who understands
How to make you feel like a man

Only girl in the world...
Only girl in the world...`,sp:"",sps:"https://open.spotify.com/search/Only%20Girl%20%28In%20the%20World%29%20Rihanna"},{id:"moves-like-jagger",t:"Moves Like Jagger",artist:"Maroon 5 feat. Christina Aguilera",pri:"Dance",tags:["Dance"],lyrics:`Just shoot for the stars if it feels right
Then aim for my heart if you feel like
Take me away and make it okay
I swear I'll behave

You wanted control, so we waited
I put on a show, now I make it
You say I'm a kid, my ego is big
I don't give a shit

And it goes like this
Take me by the tongue and I'll know you
Kiss me 'til you're drunk and I'll show you
All the moves like Jagger
I've got the moves like Jagger
I've got the moooooves like Jagger

I don't need to try to control you
Look into my eyes and I'll own you
With them moves like Jagger
I've got the moves like Jagger
I've got the moooooves like Jagger`,sp:"",sps:"https://open.spotify.com/search/Moves%20Like%20Jagger%20Maroon%205%20feat.%20Christina%20Aguilera"},{id:"give-me-everything",t:"Give Me Everything",artist:"Pitbull feat. Ne-Yo",pri:"Dance",tags:["Dance"],lyrics:`Tonight
(Don't care what they say All the games they play Nothing is enough Till they handle love)
Let's do it tonight
(I want you tonight,I want you to stay

Grab somebody sexy tell 'em hey
Give me everything tonight (4x)

Reach for the stars And if you don't grab em, at least you're on top of the world  Think about it
Cuz if you slip I'm gonna fall on top of you girl
Put on 'em ball when they sleep at the Macy's
Baby baby And it ain't no secret
My granny's from Cuba but I'm an American
Tied over money like Seacrest
Put it on my life baby
I can make you feel right baby
I can't promise tomorrow
But I promise tonight Dale

Excuse me But I might drink a little more than I should tonight And I might take you home with me if I could tonight And baby I might make you feel so good tonight Cause we might not get tomorrow
Tonight I want all of you tonight
Give me everything tonight
For all we know we might not get tomorrow
Let's do it tonight`,sp:"",sps:"https://open.spotify.com/search/Give%20Me%20Everything%20Pitbull%20feat.%20Ne-Yo"},{id:"i-wanna-go",t:"I Wanna Go",artist:"Britney Spears",pri:"Dance",tags:["Dance"],lyrics:`-o-o All the way-ay-ay
Takin' out my freak tonight
I-I-I wanna sho-o-ow  All the dir-ir-irt
I got runnin' through my mind  Woah (2x)

Shame on me   To need release   Uncontrollably

I-I-I wanna go-o-o All the way-ay-ay
Takin' out my freak tonight
I-I-I wanna sho-o-ow  All the dir-ir-irt
I got runnin' through my mind

I-I-I wanna go-o-o
All the way-ay-ay
Takin' out my freak tonight
I-I-I wanna sho-o-ow
All the dir-ir-irt
I got runnin' through my mind  Woah`,sp:"",sps:"https://open.spotify.com/search/I%20Wanna%20Go%20Britney%20Spears"},{id:"till-the-world-ends",t:"Till the World Ends",artist:"Britney Spears",pri:"Dance",tags:["Dance"],lyrics:`I can't take it, take it, take no more
Never felt like, felt like, felt like this before
Come on get me, get me on the floor
DJ what you, what you waiting for?

Oh oh oh oh oh oh oh

See the sunlight, we ain't stopping
Keep on dancing til the world ends
If you feel it, let it happen
Keep on dancing til the world ends (2x)`,sp:"",sps:"https://open.spotify.com/search/Till%20the%20World%20Ends%20Britney%20Spears"},{id:"rabiosa",t:"Rabiosa",artist:"Shakira",pri:"Dance",tags:["Dance"],lyrics:`Let me get that mocha
Come get a little closer
And bite me en la boca

Oye papi
If you like it mocha
Come get a little closer
And bite me en la boca

Oye mami
I like your mocha
Come get a little closer
And bite me en la boca

Oye papi
If you like it mocha
Come get a little closer
And bite me en la boca

Rabiosa, rabiosa
Come closer, come pull me closer
Yo soy rabiosa, rabiosa
Come closer, come pull me closer`,sp:"",sps:"https://open.spotify.com/search/Rabiosa%20Shakira"},{id:"greased-lightnin-you-re-the-one-that-i-want",t:"Greased Lightnin' / You're The One That I Want",artist:"Grease (trilha)",pri:"Trilha",tags:["Grease","Trilha"],lyrics:`, it's systematic, it's hydromatic
Why it's greased lightnin'!

I got chills. They're multiplyin'.
And I'm losin' control.
'Cause the power you're supplyin',
it's electrifyin'!

You better shape up,
'cause I need a man
and my heart is set on you.
You better shape up;
you better understand
to my heart I must be true.

Nothin' left, nothin' left for me to do.

You're the one that I want. o,o, oo, honey.
The one that I want. o,o,oo, honey.
The one that I want You, o,o, ooooo
The one I need. Oh, yes indeed.

Why it's greased lightnin'!

We'll get some overhead lifters,
and some four barrel quads, oh yeah
Fuel injection cut off, and chrome plated rods, oh yeah
With a four-speed on the floor,
they'll be waitin' at the door
You know that I ain't braggin',
she's a real pussy wagon-greased lightnin'

Go, greased lightnin', you're burnin' up the quarter mile
Go, greased lightnin', you're coastin' through the heat lap trials
You are supreme, the chicks'll cream for greased lightnin'

We'll get some purple French tail lights and thirty-inch fins, oh yeah
A palomino dashboard and duel muffler twins, oh yeah
With new pistons, plugs, and shocks,
I can get off my rocks
You know that I ain't braggin',
she's a real pussy wagon - greased lightnin`,sp:"",sps:"https://open.spotify.com/search/Greased%20Lightnin%27%20/%20You%27re%20The%20One%20That%20I%20Want%20Grease%20%28trilha%29"},{id:"o-teu-cabelo-nao-nega",t:"O Teu Cabelo N\xE3o Nega",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Porque \xE9s mulata na cor,
Mas como a cor n\xE3o pega, mulata,
Mulata eu quero o teu amor.

Tens um sabor bem do Brasil;
Tens a alma cor de anil;
Mulata, mulatinha, meu amor,
Fui nomeado teu tenente interventor.`,sp:"",sps:"https://open.spotify.com/search/O%20Teu%20Cabelo%20N%C3%A3o%20Nega"},{id:"a-cabeleira-do-zeze",t:"A Cabeleira do Zez\xE9",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Olha a cabeleira do zez\xE9!
Ser\xE1 que ele \xE9?!
Ser\xE1 que ele \xE9?!

Ser\xE1 que ele \xE9 bossa nova?
Ser\xE1 que ele \xE9 maom\xE9?
Parece que \xE9 transviado,
Mas isso eu n\xE3o sei se ele \xE9.

Corta o cabelo dele!
Corta o cabelo dele!`,sp:"",sps:"https://open.spotify.com/search/A%20Cabeleira%20do%20Zez%C3%A9"},{id:"me-da-um-dinheiro-ai",t:"Me D\xE1 Um Dinheiro A\xED",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Ei, voc\xEA a\xED!
Me d\xE1 um dinheiro a\xED!
Me d\xE1 um dinheiro a\xED!

N\xE3o vai dar?  N\xE3o vai dar n\xE3o?
Voc\xEA vai ver a grande confus\xE3o
Que eu vou fazer bebendo at\xE9 cair
Me d\xE1 me d\xE1 me d\xE1, \xF4!
Me d\xE1 um dinheiro a\xED`,sp:"",sps:"https://open.spotify.com/search/Me%20D%C3%A1%20Um%20Dinheiro%20A%C3%AD"},{id:"colombina-ie-ie-ie",t:"Colombina I\xEA I\xEA I\xEA",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Colombina onde vai voc\xEA
Eu vou dan\xE7ar o i\xEA i\xEA i\xEA

A gangue s\xF3 me chama de palha\xE7o (\xE9 a m\xE3e!)
Palha\xE7o (\xE9 a m\xE3e!)
Palha\xE7o (\xE9 a m\xE3e!)
E a minha colombina que \xE9 voc\xEA
S\xF3 quer saber de i\xEA i\xEA i\xEA`,sp:"",sps:"https://open.spotify.com/search/Colombina%20I%C3%AA%20I%C3%AA%20I%C3%AA"},{id:"maria-sapatao",t:"Maria Sapat\xE3o",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Maria Sapat\xE3o,
Sapat\xE3o, Sapat\xE3o:
De dia \xE9 Maria; De noite \xE9 Jo\xE3o.

O sapat\xE3o est\xE1 na moda:
O mundo aplaudiu!
\xC9 um barato, \xE9 um sucesso
Dentro e fora do Brasil.`,sp:"",sps:"https://open.spotify.com/search/Maria%20Sapat%C3%A3o"},{id:"bota-camisinha",t:"Bota Camisinha",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Bota camisinha  Bota meu amor
Que hoje t\xE1 chovendo
N\xE3o vai fazer calor

Bota a camisinha no pesco\xE7o
Bota geral
N\xE3o quero ver ningu\xE9m
Sem camisinha
Pr\xE1 n\xE3o se machucar
No Carnaval...`,sp:"",sps:"https://open.spotify.com/search/Bota%20Camisinha"},{id:"tai-pra-voce-gostar-de-mim",t:"Ta\xED (Pra Voc\xEA Gostar de Mim)",artist:"Carmen Miranda",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Ta\xED, eu fiz tudo pra voc\xEA gostar de mim.
Ai meu bem, n\xE3o faz assim comigo n\xE3o!
Voc\xEA tem, voc\xEA tem que me dar seu cora\xE7\xE3o!

Meu amor, n\xE3o posso esquecer,
Se d\xE1 alegria faz tamb\xE9m sofrer.
A minha vida foi sempre assim:
S\xF3 chorando as m\xE1goas que n\xE3o t\xEAm fim.`,sp:"",sps:"https://open.spotify.com/search/Ta%C3%AD%20%28Pra%20Voc%C3%AA%20Gostar%20de%20Mim%29%20Carmen%20Miranda"},{id:"mulata-ie-ie-ie",t:"Mulata I\xEA I\xEA I\xEA",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Mulata bossa nova
Caiu no hully gully
E s\xF3 d\xE1 ela
\xCA \xEA \xEA \xEA \xEA \xEA \xEA \xEA
Na passarela

A boneca est\xE1
Cheia de fiufiu
Esnobando as louras
E as morenas do Brasil`,sp:"",sps:"https://open.spotify.com/search/Mulata%20I%C3%AA%20I%C3%AA%20I%C3%AA"},{id:"me-da-um-gelinho",t:"Me D\xE1 Um Gelinho",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Me d\xE1 um gelinho a\xED,
Eu t\xF4 a cem por hora,
Se n\xE3o, parar o calor,
Eu jogo a roupa fora. (bis)

\xC9 agora, \xE9 agora,
Que eu jogo a roupa fora,
\xC9 agora, \xE9 agora,
Que eu jogo a roupa fora.`,sp:"",sps:"https://open.spotify.com/search/Me%20D%C3%A1%20Um%20Gelinho"},{id:"coracao-corinthiano",t:"Cora\xE7\xE3o Corinthiano",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Doutor, eu n\xE3o me engano,
Meu cora\xE7\xE3o \xE9 Corinthiano (2x)

Eu n\xE3o sabia mais o que fazer
Troquei meu cora\xE7\xE3o cansado de sofrer

Ah! Doutor, eu n\xE3o me engano,
Botaram outro cora\xE7\xE3o Corinthiano`,sp:"",sps:"https://open.spotify.com/search/Cora%C3%A7%C3%A3o%20Corinthiano"},{id:"saca-rolha",t:"Saca-Rolha",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`As \xE1guas v\xE3o rolar
Garrafa cheia eu n\xE3o quero ver sobrar
Eu passo m\xE3o na saca saca saca rolha
E bebo at\xE9 me afogar
Deixa as \xE1guas rolar

Se a pol\xEDcia por isso me prender
Mas na \xFAltima hora me soltar
Eu pego o saca saca saca rolha
Ningu\xE9m me agarra ningu\xE9m me agarra`,sp:"",sps:"https://open.spotify.com/search/Saca-Rolha"},{id:"marcha-da-cueca",t:"Marcha da Cueca",artist:"",pri:"Marchinha",tags:["Carnaval","Marchinha"],lyrics:`Eu mato, Eu mato,
Quem roubou minha cueca
pra fazer pano de prato (2x)

Minha cueca Tava lavada
Foi um presente que eu ganhei da namorada

Minha cueca Tava lavada
Foi um presente que eu ganhei da namorada`,sp:"",sps:"https://open.spotify.com/search/Marcha%20da%20Cueca"},{id:"your-song",t:"Your Song",artist:"Billy Paul",pri:"Soul",tags:["Internacional","Soul"],lyrics:`It's a little bit funny Lord, this feeling inside
I'm not one of those who can easily hide
I don't have much money but, boy, if I did
I'd buy a big mansion where we both could live

If, if, if I was a sculpture Lord, honey,
but then again, no   (then again no, no)
Ora man who makes potions in a travelin' show
I know it's not much, I know it's not much, but it's the best I can do

You gave me a gift Lord,
and I'm go' sing for you
And you can tell everybody that
this is your song      (this is your song)
It may be a quite quite simple, but that's how it's done
I hope you don't mind, I hope you don't mind    What I wrote down in wordsssss, words      How wonderful life issss
when you're in the world, world, world
(if), if I was upon a rooftop
I'd kick off my shoes (kick my shoes off)
I'll write a few verses \u2028and gonna then I get the blues
But the sun's been quite, quite kind
while I wrote this song

It's for people like you and people like me
I wanna, I wanna keep turnin' on
So excuse me, So excuse me
So excuse me forgotten but this things I do

You see, you see I've forgotten
if they're green or blue, baby
And anyway the thing is, anyway the thing is, what I really mean

You are the sweetest eyes,
the sweetest eyes
The sweetest eyes I've ever seen

REFR\xC3O`,sp:"",sps:"https://open.spotify.com/search/Your%20Song%20Billy%20Paul"},{id:"somewhere-over-the-rainbow-what-a-wonderful-worl",t:"Somewhere Over The Rainbow / What A Wonderful World",artist:"Israel Kamakawiwo'ole",pri:"Balada",tags:["Balada"],lyrics:`Somewhere over the rainbow
Way up high
And the dreams that you dreamed of
Once in a lullaby ii ii iii
Somewhere over the rainbow
Blue birds fly
And the dreams that you dreamed of
Dreams really do come true ooh ooooh

Someday I'll wish upon a star
Wake up where the clouds are far behind me ee
Where trouble melts like lemon drops
High above the chimney tops thats where you'll find me oh
Somewhere over the rainbow blue birds fly
And the dream that you dare to,why, oh why can't I?

Well I see trees of green and
Red roses too,
I'll watch them bloom for me and you
And I think to myself
What a wonderful world

Well I see skies of blue and I see clouds of white
And the brightness of day
I like the dark and I think to myself
What a wonderful world

The colors of the rainbow so pretty in the sky
Are also on the faces of people passing by
I see friends shaking hands
Saying, "How do you do?"
They're really saying, I...I love you
I hear babies cry and I watch them grow,
They'll learn much more
Than we'll know
And I think to myself
What a wonderful world (w)oohoorld

Someday I'll wish upon a star,
Wake up where the clouds are far behind me
Where trouble melts like lemon drops
High above the chimney top that's where you'll find me
Oh, Somewhere over the rainbow way up high
And the dream that you dare to, why, oh why can't I?
ooooooooooooooooooooooooo`,sp:"",sps:"https://open.spotify.com/search/Somewhere%20Over%20The%20Rainbow%20/%20What%20A%20Wonderful%20World%20Israel%20Kamakawiwo%27ole"},{id:"em-nome-do-nosso-amor",t:"Em Nome do Nosso Amor",artist:"Padre Jonas Abib / Jonny",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Eu te escolhi e hoje estou aqui
para celebrar nossa uni\xE3o
Aos olhos do Senhor quero entregar a ti o meu cora\xE7\xE3o

Antes mesmo que nos descobrissemos
o Senhor j\xE1 nos havia escolhido
E este nosso encontro \xE9 obra do Senhor que agiu em n\xF3s

Nossos Caminhos foram tra\xE7ados
O Senhor te escolheu pra mim
e agora seremos um
Tua alegria, tuas vit\xF3rias ser\xE3o nossas
Seremos sempre um no amor maior

Mas se a tristeza chegar?
Eu vou estar ao teu lado
E juntos poderemos at\xE9 chorar
E se a dor invadir o meu ser
Venceremos a dor em nome do amor
Em nome do nosso amor

Nossos caminhos foram tra\xE7ados
O Senhor te escolheu pra mim
e agora seremos um
Tua alegria, tuas vit\xF3rias ser\xE3o nossas
Seremos sempre um no amor maior

Mas se a tristeza chegar?
Eu vou estar ao teu lado
E juntos poderemos at\xE9 chorar
E se a dor invadir o meu ser
Venceremos a dor em nome do amor
Em nome do nosso amor`,sp:"",sps:"https://open.spotify.com/search/Em%20Nome%20do%20Nosso%20Amor%20Padre%20Jonas%20Abib%20/%20Jonny"},{id:"ceu-de-santo-amaro-verificar",t:"C\xE9u de Santo Amaro (verificar)",artist:"Caetano Veloso",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Olho para o c\xE9u
Tantas estrelas dizendo da imensid\xE3o
Do universo em n\xF3s
A for\xE7a desse amor Nos invadiu
Com ela veio a paz, toda a beleza de sentir
Que para sempre uma estrela vai dizer
Simplesmente amo voc\xEA

Meu amor Vou lhe dizer Quero voc\xEA
Com a alegria de um p\xE1ssaro
Em busca de outro ver\xE3o
Na noite do sert\xE3o
Meu cora\xE7\xE3o s\xF3 quer bater por ti
Eu me coloco em tuas m\xE3os
Para sentir todo o carinho que sonhei
N\xF3s somos rainha e rei

Na noite do sert\xE3o
Meu cora\xE7\xE3o s\xF3 quer bater por ti
Eu me coloco em tuas m\xE3os
Para sentir todo o carinho que sonhei
N\xF3s somos rainha e rei

Olho para o c\xE9u
Tantas estrelas dizendo da imensid\xE3o
Do universo em n\xF3s
A for\xE7a desse amor nos invadiu
Ent\xE3o Veio a certeza de amar voc\xEA`,sp:"",sps:"https://open.spotify.com/search/C%C3%A9u%20de%20Santo%20Amaro%20%28verificar%29%20Caetano%20Veloso"},{id:"she",t:"She",artist:"Charles Aznavour / Elvis Costello",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Temas de Filmes
She
Maybe the face I can't forget,
A trace of pleasure or regret,
Maybe my treasure or
The price I have to pay.

She
Maybe the song that summer sings,
Maybe the chill that autumn brings,
Maybe a hundred different things
Within the measure of a day.

She
Maybe the beauty or the beast,
Maybe the famine or the feast,
May turn each day into a
Heaven or a hell.

She
Maybe the mirror of my dream,
A smile reflected in a stream,
She may not be what she may seem
Inside her shell.

She
Who always seems so happy in a crowd,
Whose eyes can be so private and so proud,
No one's allowed to see them
When they cry.

She
Maybe the love that cannot hope to last,
May come to me from shadows of the past,
That I remember till the day I die.

She
Maybe the reason I survive,
The why and wherefore I'm alive,
The one I'll care for through the
Rough and ready years.

Me, I'll take her laughter and her tears
And make them all my souvenirs
For where she goes I've got to be.
The meaning of my life is she, she

She`,sp:"",sps:"https://open.spotify.com/search/She%20Charles%20Aznavour%20/%20Elvis%20Costello"},{id:"como-e-grande-o-meu-amor-por-voce",t:"Como \xC9 Grande o Meu Amor por Voc\xEA",artist:"Roberto Carlos",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Eu tenho tanto pra lhe falar
Mas com palavras n\xE3o sei dizer
Como \xE9 grande o meu amor por voc\xEA
E n\xE3o ha nada pra comparar
Para poder lhe explicar
Como \xE9 grande o meu amor por voc\xEA

Nem mesmo o c\xE9u, nem as estrelas
Nem mesmo o mar e o infinito
N\xE3o \xE9 maior que o meu amor, nem mais bonito

Me desespero a procurar
Alguma forma de lhe falar
Como \xE9 grande o meu amor por voc\xEA

Nunca se esque\xE7a nem um segundo
Que eu tenho o amor maior do mundo
Como \xE9 grande o meu amor por voc\xEA

Nunca se esque\xE7a nem um segundo
Que eu tenho o amor maior do mundo
Como \xE9 grande o meu amor por voc\xEA

Mas como \xE9 grande o meu amor por voc\xEA`,sp:"",sps:"https://open.spotify.com/search/Como%20%C3%89%20Grande%20o%20Meu%20Amor%20por%20Voc%C3%AA%20Roberto%20Carlos"},{id:"je-t-aime-moi-non-plus",t:"Je T'aime... Moi Non Plus",artist:"Serge Gainsbourg & Jane Birkin",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Je t'aime je t'aime
Oh oui je t'aime
Moi non plus
Oh mon amour
Comme la vague irr\xE9solue

Je vais, je vais et je viens
Entre tes reins
Je vais et je viens
Entre tes reins
Et je me retiens`,sp:"",sps:"https://open.spotify.com/search/Je%20T%27aime...%20Moi%20Non%20Plus%20Serge%20Gainsbourg%20%26%20Jane%20Birkin"},{id:"c-est-si-bon",t:"C'est Si Bon",artist:"",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`De se dire des mots doux
Des petits rien du tout
Mais qui en disent long

En voyant notre mine ravie
Les passants dans la rue nous envient

C'est si bon
De guetter dans ses yeux
Un espoir merveilleux
Qui donne le frisson

C'est si bon
Cette petite sensation
Et si nous nous aimons
C'est parce que c'est si bon
C'est parce que c'est si bon
C'est parce que c'est si bon`,sp:"",sps:"https://open.spotify.com/search/C%27est%20Si%20Bon"},{id:"l-amerique",t:"L'Am\xE9rique",artist:"Joe Dassin",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`Mes amis, je dois m'en aller
Je n'ai plus qu'\xE0 jeter mes cl\xE9s
Car elle m'attend depuis que je suis n\xE9
L'Am\xE9rique

J'abandonne sur mon chemin
Tant de choses que j'aimais bien
Cela commence par un peu de chagrin
L'Am\xE9rique

L'Am\xE9rique, l'Am\xE9rique, je veux l'avoir et je l'aurai

L'Am\xE9rique, l'Am\xE9rique, si c'est un r\xEAve, je le saurai

Tous les sifflets des trains, toutes les sir\xE8nes des bateaux
M'ont chant\xE9 cent fois la chanson de l'Eldorado`,sp:"",sps:"https://open.spotify.com/search/L%27Am%C3%A9rique%20Joe%20Dassin"},{id:"i-love-america",t:"I Love America",artist:"Patrick Juvet",pri:"Francesa",tags:["Francesa","Internacional"],lyrics:`A magic fills the air
There's music everywhere
I love America
I love America
I love America  America

La, la, la, la -
La, la, la, la - salsa music

Rock and roll America, rock and roll
What I say
Rock and roll America, rock and roll
What I say
Rock and roll America, rock and roll`,sp:"",sps:"https://open.spotify.com/search/I%20Love%20America%20Patrick%20Juvet"},{id:"rivers-of-babylon",t:"Rivers of Babylon",artist:"Boney M.",pri:"Dance",tags:["Dance","Disco"],lyrics:`Ahahahahaahahahahaaaaaa
Ahahahahaahahahahaaaaaahahahahahahaha

By the rivers of Babylon,
There we sat down.
Yeah, yeah, we wept,
when we remembered Zion.

By the rivers of Babylon,
There we sat down.
Yeah, yeah, we wept,
when we remembered Zion.

THEN THE WICKED

Carried us away in captivity,
required from us a song.
Now how shall we sing the Lord song
in a strange land.`,sp:"",sps:"https://open.spotify.com/search/Rivers%20of%20Babylon%20Boney%20M."},{id:"daddy-cool",t:"Daddy Cool",artist:"Boney M.",pri:"Dance",tags:["Dance","Disco"],lyrics:`She's crazy like a fool
What about it Daddy Cool

She's crazy like a fool
What about it Daddy Cool
I'm crazy like a fool
What about it Daddy Cool

Daddy Daddy Cool Daddy Daddy Cool (2x)`,sp:"",sps:"https://open.spotify.com/search/Daddy%20Cool%20Boney%20M."},{id:"sunny",t:"Sunny",artist:"Boney M.",pri:"Dance",tags:["Dance","Disco"],lyrics:`Sunny, yesterday my life was filled with rain.
Sunny, you smiled at me and really eased the pain.
The dark days are gone, and the bright days are here,
My Sunny one shines so sincere.
Sunny one so true, I love you.

Sunny, thank you for the sunshine bouquet.
Sunny, thank you for the love you brought my way.
You gave to me your all and all.
Now I feel ten feet tall.
Sunny one so true, I love you.`,sp:"",sps:"https://open.spotify.com/search/Sunny%20Boney%20M."},{id:"ma-baker",t:"Ma Baker",artist:"Boney M.",pri:"Dance",tags:["Dance","Disco"],lyrics:`FREEZE ! I'm Ma Baker - put your hands in the air,    gimme all your money

She was the meanest cat
In old Chicago town
She was the meanest cat
She really moved them down
She had no heart at all
No no no heart at all

She was the meanest cat
Oh she was really though
She left her husband flat
He wasn't though enough
She took her boys along
'cos they were mean and strong

Ma Ma Ma Ma - Ma Baker - she thought her four sons
Ma Ma Ma Ma - Ma Baker - to handle their guns
Ma Ma Ma Ma - Ma Baker - she never could cry
Ma Ma Ma Ma - Ma Baker - but she knew how to die`,sp:"",sps:"https://open.spotify.com/search/Ma%20Baker%20Boney%20M."},{id:"rock-and-roll-mops",t:"Rock And Roll-Mops",artist:"",pri:"Rock",tags:["Francesa","Rock"],lyrics:`Adubadu adubadu badabada badibidi  badubadu\u2026

Qu'est-ce qu'il faut vous apporter ?

Apportez-moi sans h\xE9siter

Rock and roll-mops
Avec du pain beurr\xE9
Rock and roll-mops
Et du beefsteak hach\xE9
Rock and roll-mops
Avec un \u0153uf \xE0 cheval
Rock and roll-mops
Je me sens cannibal  Ohhhhhh Ohhhhhh

Et dans un plat
Rien que pour moi
Bien prepares  Pas trop assaisonn\xE9s

Rock and roll-mops
\xC7a m'a r\xE9confort\xE9
Rock and roll-mops
Je suis plein \xE0 craquer
Rock and roll-mops
Ma force a d\xE9cupl\xE9
On est retourn\xE9 s' coucher`,sp:"",sps:"https://open.spotify.com/search/Rock%20And%20Roll-Mops"},{id:"t-as-l-bonjour-d-alfred",t:"T'as L'Bonjour D'Alfred",artist:"",pri:"Rock",tags:["Francesa","Rock"],lyrics:` Ahh Oui
T'as l'bonjour d'Alfred Rock and Roll
T'as l'bonjour d'Alfred On the Rock

Je pourrais fair' de beaux voyages
Etre un typ' vraiment \xE0 la page
Mais comm' je n'ai pas de galette !
J' ai l' bonjour d' Alfred

T' as l' bonjour d' Alfred
T' as l' bonjour d' Alfred
T' as l' bonjour d' Alfred
T' as l' bonjour, T' as l' bonjour
T' as l' bonjour d' Alfred

J 'ai l' bonjour d' Alfred
J 'ai l' bonjour d' Alfred
J 'ai l' bonjour d' Alfred
T' as l' bonjour, T' as l' bonjour
T' as l' bonjour d' Alfred

J'aurais des tas de jolies femmes
Des blond' des brun' toute la gamme
Mais comm je n'ai pas de galette !

J' ai l' bonjour d' Alfred

TIRAR MUSICA FEMININA
DESCOBRIR NOME`,sp:"",sps:"https://open.spotify.com/search/T%27as%20L%27Bonjour%20D%27Alfred"},{id:"ca-rock-ca-va-verificar",t:"\xC7a Rock \xC7a Va (verificar)",artist:"",pri:"Rock",tags:["Francesa","Rock"],lyrics:`Rock and Roll pas c\u2019est
Rock and Roll parla
Rock and Roll  Mary
Oh no non pizza
O demande  pis \xE7a vaaaaa
Au Sarro oue toi

\xC7a va \xE7a va Au Sarro oue toi

\xC7a va \xE7a va Au Sarro oue toi

\xC7a va \xE7a va Au Sarro oue toi

Rock and Roll \xE7a vo \xE7a va`,sp:"",sps:"https://open.spotify.com/search/%C3%87a%20Rock%20%C3%87a%20Va%20%28verificar%29"},{id:"one",t:"One",artist:"U2",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Is it getting better
Or do you feel the same?
Will it make it easier on you now
You got someone to blame?

You say
One love,one life
When it's one need  In the night
One love
We get to share It
leaves you, baby
If you don't care for it

Did I disappoint you
Or leave a bad taste in your mouth?
You act like you never had love
And you want me to go without

Well, it's too late
Tonight
To drag your past out
Into the light

We're one
But we're not the same
We get to carry each other
Carry each other
One

Have you come here for forgiveness?
Have you come to raise the dead?
Have you come here to play Jesus
To the lepers in your head?

Did I ask too much?
More than a lot?
You gave me nothing now
It's all I got

We're one
But we're not the same
Well We hurt each other
Then we do it again

You say
Love is a temple
Love is a higher law
Love is a temple
Love is a higher law
You ask me to enter
But then you make me crawl
And I can't be holding on
To what you got
When all you got is hurt

One love
One blood
One life you got To do what you should
One life
With each other
Sisters, brothers

One life But we're not the same
We get to carry each other
Carry each other

One... one   Uh, uh, uh, oh
Make, make it, make it
Ahh, ahh, oh
Ahh, ahh
And one
Ahh, ahh... oh`,sp:"",sps:"https://open.spotify.com/search/One%20U2"},{id:"the-prayer",t:"The Prayer",artist:"Celine Dion & Andrea Bocelli",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`I pray you'll be our eyes,
and watch us where we go
And help us to be wise,
in times when we don't know
Let this be our prayer,
when we lose our way
Lead us to a place,
guide us with your grace
To a place where we'll be safe

La luce che tu dai
I pray we'll find your light
Nel cuore rester\xE0
And hold it in our hearts
A ricordarci che
When stars go out each night
L'eterna stella sei
Nella mia preghiera
Let this be our prayer
Quanta fede c'\xE8
When shadows fill our day
Lead us to a place
Guide us with your grace
Give us faith so we'll be safe

Sognamo un mondo senza pi\xF9 violenza
Un mondo di giustizia e di speranza
Ognuno dia la mano al suo vicino
Simbolo di pace e di fraternit\xE0

La forza che ci dia
We ask that life be kind
\xC8 il desiderio che
And watch us from above
Ognuno trovi amore
We hope each soul will find
Intorno e dentro a s\xE8
Another soul to love
Let this be our prayer
Let this be our prayer
Just like every child
Just like every child

Need to find a place,
guide us with your grace
Give us faith so we'll be safe
E la fede che
Hai acceso in noi
Sento che ci salver\xE1`,sp:"",sps:"https://open.spotify.com/search/The%20Prayer%20Celine%20Dion%20%26%20Andrea%20Bocelli"},{id:"can-you-feel-the-love-tonight",t:"Can You Feel the Love Tonight",artist:"Elton John",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`There's a calm surrender To the rush of day
When the heat of a rolling wind
Can be turned away

An enchanted moment,
And it sees me through
It's enough for this restless warrior
Just to be with you

And can you feel the love tonight
It is where we are
It's enough for this wide-eyed wanderer
That we got this far
And can you feel the love tonight
How it's laid to rest?
It's enough to make kings and vagabonds
believe the very best.

There's a time for everyone If they only learn
That the twisting kaleidoscope
Moves us all in turn

There's a rhyme and reason
To the wild outdoors
When the heart of this star-crossed voyager
Beats in time with yours

And can you feel the love tonight
It is where we are
It's enough for this wide-eyed wanderer
That we got this far
And can you feel the love tonight
How it's laid to rest?
It's enough to make kings and vagabonds
Believe the very best.`,sp:"",sps:"https://open.spotify.com/search/Can%20You%20Feel%20the%20Love%20Tonight%20Elton%20John"},{id:"can-t-help-falling-in-love",t:"Can't Help Falling in Love",artist:"Elvis Presley",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Wise men say, only fools rush in
But I can't help, falling in love with you
Shall I stay? Would it be a sin
If I can't help, falling in love with you?

Like a river flows, surely to the sea,
Darling, so it goes somethings are meant to be.
Take my hand, take my whole life too.
For I can't help, Falling in love with you

Like a river flows, surely to the sea
Darling so it goes, somethings are meant to be
Take my hand, take my whole life too.
For I can't help falling in love with you.

For I can't help falling in love with you.`,sp:"",sps:"https://open.spotify.com/search/Can%27t%20Help%20Falling%20in%20Love%20Elvis%20Presley"},{id:"perhaps-love",t:"Perhaps Love",artist:"Pl\xE1cido Domingo & John Denver",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Perhaps love is like a resting place,
a shelter from the storm
It exists to give you confort,
it is there to keep you warm
And in those times of trouble
when you are most alone
The memory of love will bring you home

Perhaps love is like a window,
perhaps an open door
It invites you to come closer,
it wants to show you more
And even if you lose yourself and don't know what to do
The memory of love will see you through

Oh love to some is like a cloud,
to some as strong as steel
For some a way of living, for some a way to feel
And some say love is holding on and some say letting go
And some say love is everything, some say they don't know

Perhaps love is like the ocean,
full of conflict, full of pain
Like a fire when it's cold outside,
thunder when it rains
If I should live forever, and all my dreams come true
My memories of love will be of you

Some say love is holding on and some say letting go
And some say love is everything,
some say they don't know

Perhaps love is like the ocean,
full of conflict, full of pain
Like a fire when it's cold outside,
thunder when it rains
If I should live forever, and all my dreams come true
My memories of love will be of you`,sp:"",sps:"https://open.spotify.com/search/Perhaps%20Love%20Pl%C3%A1cido%20Domingo%20%26%20John%20Denver"},{id:"somewhere-over-the-rainbow",t:"Somewhere Over The Rainbow",artist:"Judy Garland",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Somewhere over the rainbow
Way up high
There's a land that I heard of
Once in a lullaby

Somewhere over the rainbow
Skies are blue
And the dreams that you dare to dream
Really do come true

Some day I'll wish upon a star
And wake up where the clouds are far behind me
Where troubles melt like lemondrops
Away above the chimney tops
That's where you'll find me

Somewhere over the rainbow
Bluebirds fly
Birds fly over the rainbow
Why then, oh why can't I?
Some day I'll wish upon a star
And wake up where the clouds are far behind me
Where troubles melt like lemondrops
Away above the chimney tops
That's where you'll find me

Somewhere over the rainbow
Bluebirds fly
Birds fly over the rainbow
Why then, oh why can't I?

If happy little bluebirds fly
Beyond the rainbow
Why, oh why can't I?`,sp:"",sps:"https://open.spotify.com/search/Somewhere%20Over%20The%20Rainbow%20Judy%20Garland"},{id:"tudo-que-se-quer",t:"Tudo Que Se Quer",artist:"Em\xEDlio Santiago",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Olha nos meus olhos,Esquece o que passou.
Aqui neste momento. Sil\xEAncio e sentimento
Sou o teu poeta Eu sou o teu cantor
Teu rei e teu escravo Teu rio e tua estrada

Vem comigo meu amado amigo
Nessa noite clara de ver\xE3o
Seja sempre o meu melhor presente
Seja tudo sempre, como \xE9
\xC9 tudo que se quer

Leve como o vento Quente como o sol
Em paz na claridade
Sem medo e sem saudade
Livre como um sonho Alegre como a luz
Desejo e fantasia Em plena harmonia

Eu sou o teu homem Sou teu pai, teu filho
Sou aquele que te tem amor
Sou teu par, o teu melhor amigo
Vou contigo seja aonde for
E onde estiver, estou
Vem comigo meu amado amigo
Sou teu barco, neste mar de amor
Sou a vela que te leva longe
Da tristeza Eu sei, eu vou
E onde estiver estou.`,sp:"",sps:"https://open.spotify.com/search/Tudo%20Que%20Se%20Quer%20Em%C3%ADlio%20Santiago"},{id:"all-i-ask-of-you",t:"All I Ask of You",artist:"Andrew Lloyd Webber (Phantom of the Opera)",pri:"Casamento",tags:["Casamento","Cerim\xF4nia"],lyrics:`Temas de Filmes
(Raoul:)
No more talk Of darkness,
Forget these Wide-eyed fears
I'm here, Nothing can harm you -
My words will Warm and calm you
Let me be  Your freedom,
Let daylight Dry -your tears
I'm here,  With you, beside you,
To guard you And to guide you...

Say you love me
Every Waking moment,
Turn my head With talk of summertime...
Say you need me With you, Now and always...
Promise me that all
You say is true - That's all I ask  Of you...

Let me be Your shelter,
Let me Be your light
You're safe: No-one will find you
Your fears are Far behind you...

All I wantIs freedom,
A world with No more night...
And you Always beside me
To hold me And to hide me...
Then say you'll share with Me one Love,
one lifetime...
Let me lead you From your solitude...
Say you need me With you Here, beside you...
Anywhere you go, Let me go too \u2013
Christine,
That's all I ask Of you...

Say you'll share with Me one Love,
one lifetime...
Say the word And I will follow you...

Share each day with Me, each Night,
each morning...

Say you love me...

You know I do...

Love me - That's all I ask Of you...

Anywhere you go Let me go too...
Love me - That's all I ask
Of you`,sp:"",sps:"https://open.spotify.com/search/All%20I%20Ask%20of%20You%20Andrew%20Lloyd%20Webber%20%28Phantom%20of%20the%20Opera%29"},{id:"we-are-the-world-of-carnaval",t:"We Are the World of Carnaval",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Ah, que bom voc\xEA chegou
Bem-vindo a Salvador
Cora\xE7\xE3o do Brasil, do Brasil
Vem, voc\xEA vai conhecer
A cidade de luz e prazer
Correndo atr\xE1s do trio

Vai compreender que o baiano \xE9
Um povo a mais de mil
Que ele tem Deus no seu cora\xE7\xE3o
E o Diabo no quadril

We are Carnaval
We are folia
We are the world of Carnaval
We are Bahia`,sp:"",sps:"https://open.spotify.com/search/We%20Are%20the%20World%20of%20Carnaval%20Asa%20de%20%C3%81guia"},{id:"beijar-na-boca",t:"Beijar na Boca",artist:"Claudia Leitte",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Eu estava numa vida de horror
Com a cabe\xE7a baixa sem ningu\xE9m me d\xE1 valor
Andava atr\xE1s (thururu) da minha paz (thururu)

Agora que mudou a situa\xE7\xE3o
Choveu na minha horta vai sobrar na planta\xE7\xE3o
Deixei pra traz (thururu), pois tanto faz (thururu)

(Refr\xE3o)
Eu quero mais \xE9 beijar na boca
Eu quero mais \xE9 beijar na boca (eu quero mais)
Eu quero mais \xE9 beijar na boca
E ser feliz daqui pra frente... Pra sempre (2x)

J\xE1 me livrei daquela vida t\xE3o vulgar
Me vacinei de tudo que podia me pegar
Corri atr\xE1s (thururu)
Quem tenta faz (thururu)

Eu ando muito a fim de experimentar
Meter o p\xE9 na jaca sem ter que me preocupar
Eu quero mais mais mais mais...

(Refr\xE3o)
Eu quero mais \xE9 beijar na boca
Eu quero mais \xE9 beijar na boca (eu quero mais)
Eu quero mais \xE9 beijar na boca
e ser feliz daqui pra frente...pra sempre (2x)

Eu estava numa vida de horror
A cabe\xE7a doida sem ningu\xE9m me d\xE1 valor
Andava atr\xE1s (thururu) da minha paz (thururu)

Agora que mudou a situa\xE7\xE3o
Choveu na minha horta vai sobrar na planta\xE7\xE3o
Deixei pra tr\xE1s (thururu), pois tanto faz (thururu)

(Refr\xE3o)
Eu quero mais \xE9 beijar na boca
Eu quero mais \xE9 beijar na boca (eu quero mais)
Eu quero mais \xE9 beijar na boca
E ser feliz daqui pra frente... Pra sempre (2x)`,sp:"",sps:"https://open.spotify.com/search/Beijar%20na%20Boca%20Claudia%20Leitte"},{id:"erva-venenosa",t:"Erva Venenosa",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Parece uma rosa, de longe \xE9 formosa
E toda recalcada, alegria alheia incomoda
Venenosa \xCAh,\xCAh...erva venenosa
\xC9 pior do que cobra cascavel seu veneno \xE9 cruel

De longe nao \xE9 feia, tem voz de uma sereia
Cuidado, n\xE3o lhe toque
Ela \xE9 m\xE1, pode at\xE9 te dar um choque.
Venenosa \xCAH, \xCAH...Erva venenosa
\xC9 pior do que cobra cascavel seu veneno \xE9 cruel

Se co\xE7a como louca
Rachada tem a boca
Parece uma bruxa um anjo mau
Detesta todo mundo
N\xE3o para um segundo
Fazer maldade e seu ideal..

Como um c\xE3o danado,Seu grito \xE9 abafado
\xC9 vil, \xE9 mentirosa
Deus do ceu como ela \xE9 maldosa
Venenosa \xCAH....\xCAH...Erva venenosa.............`,sp:"",sps:"https://open.spotify.com/search/Erva%20Venenosa%20Chiclete%20com%20Banana"},{id:"empurra-empurra",t:"Empurra-Empurra",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`T\xE1 um empurra, empurra aqui
Mas t\xE1 gostoso
T\xE1 um empurra, empurra aqui
Mas t\xE1 gostoso
Melhor ainda \xE9 pular no meio do povo
Melhor ainda \xE9 pular no meio do povo (2x)

Aqui se dan\xE7a valsa Aqui se dan\xE7a twist
Cada um dan\xE7a de um jeito
S\xF3 n\xE3o vale ficar triste (2x)

oi,oi,oi
Deram um pis\xE3o no meu p\xE9
N\xE3o quero saber quem foi
oi,oi,oi
Deram um pis\xE3o no meu p\xE9
N\xE3o quero saber quem foi

Embalou, embala
embalou
N\xE3o para, n\xE3o para
N\xE3o para
(2x)`,sp:"",sps:"https://open.spotify.com/search/Empurra-Empurra%20Ivete%20Sangalo"},{id:"bomba",t:"Bomba",artist:"Braga Boys",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Um movimento sensual (sensual)
Um movimento bem sexy (sexy)
Um movimento bem sexy (sexy)
J\xE1 t\xE1 chegando o Braga Boys come\xE7a a dan\xE7a que \xE9 uma (bomba)

Para dan\xE7ar isso aqui \xE9 (Bomba)
Para balan\xE7ar isso aqui \xE9 (Bomba)
Para mexer isso aqui \xE9 (Bomba)

E a mulherada se joga assim, assim, assim, assim
todo mundo
com uma m\xE3o vai na cabe\xE7a,
uma m\xE3o vai na cabe\xE7a
O movimento \xE9 (sexy)
O movimento \xE9 (sexy)
Bota a m\xE3o nessa cintura
Bota a m\xE3o nessa cintura
O movimento \xE9 (sexy)
O movimento \xE9 (sexy)

E agora vamos come\xE7ar
Devagarinho at\xE9 em baixo, em baixo, em baixo
Devagarinho at\xE9 em cima, em cima, em cima
Devagarinho at\xE9 em baixo, em baixo, em baixo
Devagarinho at\xE9 em cima, em cima, em cima

(Sensual)
O movimento \xE9 sensual (Sensual)
O movimento \xE9 bem sexy (Sexy)
O movimento \xE9 bem sexy (sexy)
J\xE1 t\xE1 chegando o Braga Boys come\xE7a a dan\xE7a que \xE9 uma (Bomba)

Para dan\xE7ar isso aqui \xE9 (Bomba)
Para balan\xE7ar isso aqui \xE9 (Bomba)
E a mulherada se joga (Bomba)
E os marmanjos dan\xE7ando \xE9 (Bomba)
Tudo o que a r\xE1dio j\xE1 toca \xE9 (Bomba)
E na boate j\xE1 rola (Bomba)
E a galera j\xE1 dan\xE7a (Bomba)

--suavecito para abajo, para abajo, para abajo
suavecito para arriba, para arriba, para arriba
suavecito para abajo, para abajo, para abajo
suavecito para arriba, para arriba, para arriba
Un movimento sensual
Un movimento muy sexy
Un movimento muy sexy--

(sensual)
O movimiento \xE9 sensual (sensual)
O movimiento \xE9 bem sexy (sexy)
O movimiento \xE9 bem sexy (sexy)
J\xE1 t\xE1 chegando o Braga Boys come\xE7a a dan\xE7a que \xE9 uma (Bomba)

Para dan\xE7ar isso aqui \xE9 (Bomba)
Para balan\xE7ar isso aqui \xE9 (Bomba)
Para mexer isso aqui \xE9 (Bomba)

E a mulherada se joga assim, assim, assim, assim
todo mundo
com uma m\xE3o vai na cabe\xE7a,
uma m\xE3o vai na cabe\xE7a
O movimento \xE9 (sexy)
O movimento \xE9 (sexy)
Bota a m\xE3o nessa cintura
Bota a m\xE3o nessa cintura
O movimento \xE9 (sexy)
O movimento \xE9 (sexy)

E agora vamos come\xE7ar
Devagarinho at\xE9 em baixo, em baixo, em baixo
Devagarinho at\xE9 em cima, em cima, em cima
Devagarinho at\xE9 em baixo, em baixo, em baixo
Devagarinho at\xE9 em cima, em cima, em cima

(sensual)
O movimiento \xE9 sensual (sensual)
O movimiento \xE9 bem sexy (sexy)
O movimiento \xE9 bem sexy (sexy)
J\xE1 t\xE1 chegando o Braga Boys come\xE7a a dan\xE7a que \xE9 uma (Bomba)

Para dan\xE7ar isso aqui \xE9 (Bomba)
Para balan\xE7ar isso aqui \xE9 (Bomba)
E a mulherada se joga (Bomba)
E os marmanjos dan\xE7ando \xE9 (Bomba)
Tudo o que a r\xE1dio j\xE1 toca \xE9 (Bomba)
E na boate j\xE1 rola (Bomba)
Toda a galera j\xE1 dan\xE7a (Bomba)

Por isso pega na cintura
e acaba, e acaba, acaba, acaba, acaba logo
e acaba, e acaba, acaba, acaba, acaba logo
e acaba, e acaba, acaba, acaba, acaba logo
e acaba, e acaba, acaba, acaba, acaba logo`,sp:"",sps:"https://open.spotify.com/search/Bomba%20Braga%20Boys"},{id:"eva",t:"Eva",artist:"Banda Eva",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Meu amor, olha s\xF3 hoje o sol n\xE3o apareceu
\xC9 o fim da aventura humana na Terra
Meu planeta adeus,
Fugiremos n\xF3s dois na arca de No\xE9
Olha bem meu amor \xE9 o final da odisseia terrestre

Sou Ad\xE3o e voc\xEA ser\xE1...
Minha pequena Eva (Eva)
O nosso amor na \xFAltima astronave (Eva)
Al\xE9m do infinito eu vou voar
Sozinho com voc\xEA
E voando bem alto (Eva)
Me abra\xE7a pelo espa\xE7o de um instante (Eva)
Me cobre com teu corpo e me d\xE1
a for\xE7a pra viver...

Meu amor, olha s\xF3 hoje o sol n\xE3o apareceu
\xC9 o fim da aventura humana na Terra
Meu planeta adeus,
Fugiremos n\xF3s dois na arca de No\xE9
Olha bem meu amor no final da odiss\xE9ia terrestre

Eu sou Ad\xE3o e voc\xEA ser\xE1...
Minha pequena Eva (Eva)
O nosso amor na \xFAltima astronave (Eva)
Al\xE9m do infinito eu vou voar
Sozinho com voc\xEA
E voando bem alto (Eva)
Me abra\xE7a pelo espa\xE7o de um instante(Eva)
Me cobre com teu corpo e me d\xE1
a for\xE7a pra viver...

E pelo espa\xE7o de um instante
Afinal n\xE3o h\xE1 nada mais que o c\xE9u azul pra gente voar
Sobre o Rio, Beirute ou Madagascar
Toda a Terra reduzida a nada,a nada mais
Minha vida \xE9 um flash
de controles, bot\xF5es anti-at\xF4micos

Olha bem meu amor,
\xE9 o final da odiss\xE9ia terrestre
Sou Ad\xE3o e voc\xEA ser\xE1
Minha pequena Eva (Eva)
O nosso amor na \xFAltima astronave (Eva)
al\xE9m do infinito eu vou voar
sozinho com voc\xEA
E voando bem alto (Eva)
Me abra\xE7a pelo espa\xE7o de um instante (Eva)
me cobre com teu corpo e me d\xE1
a for\xE7a pra viver

Minha pequena Eva (Eva)
O nosso amor na ultima astronave (Eva)
alem do infinito eu vou voar
sozinho com voc\xEA...`,sp:"",sps:"https://open.spotify.com/search/Eva%20Banda%20Eva"},{id:"o-neguinha-vixe-mainha",t:"\xD3 Neguinha (Vixe Mainha)",artist:"Banda Mel / Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Por essa nega eu ponho roupa nova, uso \xF3culos escuros,
des\xE7o do muro, ela sabe me fazer feliz.
Nega! \xD3culos escuros, na parede, na parede, na parede do
meu sonho. Ela pintou alegria, arrumou tudo em mim,
caf\xE9 com p\xE3o \xE9 bom(\xE9 brasileira, \xE9 brasileira, \xE9 brasileira).

Vixe mainha \xF3 neguinha, tudo \xE9 t\xE3o bom
io io mainha, \xF3 neguinha, tudo \xE9 tempo
Vixe mainha \xF3 neguinha, tudo \xE9 t\xE3o bom
io io mainha, \xF3 neguinha, tudo \xE9 tempo

Por essa nega eu ponho roupa nova, uso \xF3culos escuros,
des\xE7o do muro, ela sabe me fazer feliz.
Nega! \xD3culos escuros, na parede, na parede, na parede do
meu sonho. Ela pintou alegria, arrumou tudo em mim,
caf\xE9 com p\xE3o \xE9 bom(\xE9 brasileira, \xE9 brasileira, \xE9 brasileira).

Vixe mainha \xF3 neguinha, tudo \xE9 t\xE3o bom
io io mainha, \xF3 neguinha, tudo \xE9 tempo
Vixe mainha \xF3 neguinha, tudo \xE9 t\xE3o bom
io io mainha, \xF3 neguinha, tudo \xE9 tempo

E tempo \xE9 tudo e tudo \xE9 tempo
tempo \xE9 nada tudo \xE9 tempo
e tempo \xE9 tudo e tempo \xE9 nada...

Vixe mainha \xF3 neguinha, tudo \xE9 t\xE3o bom
io io mainha, \xF3 neguinha, tudo \xE9 tempo
Vixe mainha \xF3 neguinha, tudo \xE9 t\xE3o bom
io io mainha, \xF3 neguinha, tudo \xE9 tempo

NEGA!`,sp:"",sps:"https://open.spotify.com/search/%C3%93%20Neguinha%20%28Vixe%20Mainha%29%20Banda%20Mel%20/%20Asa%20de%20%C3%81guia"},{id:"amor-perfeito",t:"Amor Perfeito",artist:"Babado Novo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Fecho os olhos pra n\xE3o ver passar o tempo
Sinto falta de voc\xEA....
Anjo bom, amor perfeito no meu peito
Sem voc\xEA n\xE3o sei viver

Ent\xE3o vem
Que eu conto os dias, conto as horas pra te ver
Eu n\xE3o consigo te esquecer
Cada minuto \xE9 muito tempo sem voc\xEA

Os segundos v\xE3o passando lentamente
N\xE3o tem hora pra chegar
At\xE9 quando te amando,te querendo
Meu cora\xE7\xE3o quer te encontrar

Ent\xE3o vem
Que nos teus bra\xE7os esse amor \xE9 uma can\xE7\xE3o
Eu n\xE3o consigo te esquecer
Cada minuto \xE9 muito tempo sem voc\xEA, semvoc\xEA

Eu n\xE3o vou saber me acostumar
Sem suas m\xE3os pra me acalmar
Sem seu olhar pra me entender
Sem seu carinho, amor, sem voc\xEA
Vem me tirar da solid\xE3o,
Fazer feliz meu cora\xE7\xE3o
J\xE1 n\xE3o importa quem errou
O que passou, passou Ent\xE3o vem....`,sp:"",sps:"https://open.spotify.com/search/Amor%20Perfeito%20Babado%20Novo"},{id:"100-voce",t:"100% Voc\xEA",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Um c\xE9u Sem Estrela, Uma Praia Sem Mar
Um amor Sem Carinho, Um Romance Sem Par
Carnaval sem festa, Um Jardim sem flor
\xC9 assim que eu me sinto longe do seu amor !
Como enganar um cora\xE7\xE3o t\xE3o ligado nesse amor ?
Como viver a minha vida sem teu jeito sedutor ?
N\xE3o d\xE1 mais pra segurar  T\xF4 viciado em voc\xEA !

N\xE3o d\xE1..., N\xE3o d\xE1..., Pra ficar..., Pra ficar Sem te Ver
J\xE1 estou ficando louco
N\xE3o d\xE1..., N\xE3o d\xE1..., Pra ficar..., Pra ficar Sem te Ver  Sou 100% voc\xEA!
L\xEA L\xEA L\xEA L\xEA L\xEA L\xEA L\xEA L\xEA

Estrada sem rumo, Saudade sem dor
Tv sem novela, Arco \xCDris sem cor
Chiclete sem Nana, Ver\xE3o sem calor
\xC9 assim que eu me sinto longe do seu amor
Como enganar um cora\xE7\xE3o tao ligado nesse amor ? Como viver a minha vida sem teu jeito sedutor ? N\xE3o d\xE1 mais pra segurar
T\xF4 viciado em voc\xEA !`,sp:"",sps:"https://open.spotify.com/search/100%25%20Voc%C3%AA%20Chiclete%20com%20Banana"},{id:"o-araketu-e-bom-demais",t:"O Araketu \xE9 Bom Demais",artist:"Ara Ketu",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`N\xE3o d\xE1 pr\xE1 esconder
O que eu sinto por voc\xEA Ara
N\xE3o d\xE1, n\xE3o d\xE1, n\xE3o d\xE1, n\xE3o d\xE1

S\xF3 sei
Que o corpo estremece
As pernas desobedecem
Inconscientemente a gente dan\xE7a
As m\xE3ozinhas ent\xE3o embalan\xE7am
Quando passa eu vou atr\xE1s
S\xF3 sei
Que o Ara Ketu \xE9 bom demais

\xCA \xF4
\xCA a \xEA a \xF4

Dancei, eu quebrei balancei, vibrei
O Ara Ketu me fez dan\xE7ar
Bota as m\xE3ozinhas pro ar
\xCA \xF4
\xCA a \xEA a \xF4`,sp:"",sps:"https://open.spotify.com/search/O%20Araketu%20%C3%A9%20Bom%20Demais%20Ara%20Ketu"},{id:"abalou",t:"Abalou",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Voc\xEA comigo \xE9 par  \xC9 mais do que sonhar
Amor t\xE3o raro de se viver
E eu quero aproveitar esse momento pra te dizer

Voc\xEA comigo \xE9 bis Me deixa t\xE3o afim
Meu pensamento me leva al\xE9m
Bastou voc\xEA entrar Na vida pra ficar tudo bem

N\xE3o quero desgrudar de voc\xEA
\xC9 bom parar o tempo
Tem tudo pra dar certo n\xF3s dois
J\xE1 sei que n\xE3o tem jeito T\xE1 feito
Voc\xEA me ganhou

Abalou, abalou Sacudiu, balan\xE7ou
Cora\xE7\xE3o \xE9 s\xF3 felicidade
Abalou, abalou Isso sim
\xC9 amor de verdade

Voc\xEA comigo \xE9 bis
Me deixa t\xE3o afim
Meu pensamento me leva al\xE9m
Bastou voc\xEA entrar
Na vida pra ficar tudo bem

N\xE3o quero desgrudar de voc\xEA
\xC9 bom parar o tempo
Tem tudo pra dar certo n\xF3s dois
J\xE1 sei que n\xE3o tem jeito
T\xE1 feito
Voc\xEA me ganhou

Abalou, abalouSacudiu, balan\xE7ou
Cora\xE7\xE3o \xE9 s\xF3 felicidade
Abalou, abalou
Isso sim \xC9 amor de verdade

N\xE3o quero desgrudar de voc\xEA
\xC9 bom parar o tempo
Tem tudo pra dar certo n\xF3s dois
J\xE1 sei que n\xE3o tem jeito
Feito voc\xEA...

Abalou, abalou
Sacudiu, balan\xE7ou
Cora\xE7\xE3o \xE9 s\xF3 felicidade
Abalou, abalou
Isso sim
\xC9 amor de verdade`,sp:"",sps:"https://open.spotify.com/search/Abalou%20Ivete%20Sangalo"},{id:"praieiro",t:"Praieiro",artist:"Jammil e Uma Noites",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`X\xE1, la la la la la

Sou praieiro Sou guerreiro T\xF4 solteiro
Quero mais o qu\xEA? (2X)

Quero mais ver\xE3o Quero mais tes\xE3o
Quero mais fevereiro

Quero mais amor dentro do cora\xE7\xE3o
Quero mais dinheiro
Quero praia e sol Quero namorar
Quero mais alegria

Quero Rio de Janeiro nos tempos de paz
Quero as meninas de Minas Gerais
Eu quero a Bahia
Eu sou da Bahia!

Porque eu sou brasileiro
Eu sou do litoral
Eu sou do mundo inteiro, inteiro!
Eu sou do carnaval!
(2x)

Sou praieiro Sou guerreiro T\xF4 solteiro
Quero mais o qu\xEA? (2x)

Quero mais ver\xE3o Quero mais tes\xE3o
Quero mais fevereiro

Quero mais amor dentro do cora\xE7\xE3o
Quero mais dinheiro
Quero praia e sol Quero namorar
Quero mais alegria

Quero Floripa e as ondas de l\xE1
Quero Noronha e as conchas do mar
Eu quero a Bahia!
Eu sou da Bahia!

Porque eu sou brasileiro
Eu sou do litoral
Eu sou do mundo inteiro, inteiro!
Eu sou do carnaval!
(2x)

Sou praieiro Sou guerreiro T\xF4 solteiro
Quero mais o qu\xEA?
(2x)`,sp:"",sps:"https://open.spotify.com/search/Praieiro%20Jammil%20e%20Uma%20Noites"},{id:"extravasa",t:"Extravasa",artist:"Claudia Leitte",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Dominou geral Sacudiu a pra\xE7a
Venha que o som \xE9 massa
Rock de timbau Groove de caba\xE7a
E a galera embala (2x)

Tem que ter
Bola na rede pra dizer que \xE9 gol
Vem dizer
A todo mundo que no nosso amor
Tem que ter
Uma balada pra gente dan\xE7ar, ah, ah

Extravasa
Libera e joga tudo pro ar
Eu quero ser feliz antes de mais nada
Extravasa
Libera e joga tudo pro ar, ar, ar, ar, ar, ar, ar (bis)

Dominou geral Sacudiu a pra\xE7a
Venha que o som \xE9 massa
Rock de timbau Groove de caba\xE7a
E a galera embala

Tem que ter`,sp:"",sps:"https://open.spotify.com/search/Extravasa%20Claudia%20Leitte"},{id:"sorte-grande-poeira",t:"Sorte Grande (Poeira)",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`A minha sorte grande foi voc\xEA cair do c\xE9u
Minha paix\xE3o verdadeira...

Viver a emo\xE7\xE3o, ganhar teu cora\xE7\xE3o
pra ser feliz a vida inteira

\xC9 lindo teu sorriso, o brilho dos teus olhos
meu anjo querubim

Doces dos meus beijos, calor dos meus bra\xE7os
perfume de jasmim

Chegou no meu espa\xE7o mandando no peda\xE7o
O amor que n\xE3o \xE9 brincadeira
pegou me deu um la\xE7o,
Dan\xE7ou bem no compasso,
de prazer levantou poeira

Poeira, poeira, poeira
Levantou poeira`,sp:"",sps:"https://open.spotify.com/search/Sorte%20Grande%20%28Poeira%29%20Ivete%20Sangalo"},{id:"rebolation",t:"Rebolation",artist:"Parangol\xE9",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Rebolation \xE9 bom bom
Rebolation \xE9 bom bom bom (6x)

Bota a m\xE3o na cabe\xE7a que vai come\xE7ar
o Rebolation tion tion, Rebolation
o Rebolation tion tion, Rebolation

Al\xF4 minha galera preste a aten\xE7\xE3o o Rebolation
\xC9 a nova sensa\xE7\xE3o, menino e menina n\xE3o fiquem de fora
Que vai come\xE7ar o pancad\xE3o o swing \xE9 bom gostoso de mais
Mulheres na frente homens atr\xE1s

M\xE3o na cabe\xE7a que vai come\xE7ar
O Rebolation tion tion, Rebolation
O Rebolation tion tion, Rebolation

\xD4 Rebolation \xE9 bom bom
O Rebolation \xE9 bom bom bom
Se voc\xEA fizer fica melhor (4x)

Bota a m\xE3o na cabe\xE7a que vai come\xE7ar
O Rebolation tion tion, Rebolation
O Rebolation tion tion, Rebolation`,sp:"",sps:"https://open.spotify.com/search/Rebolation%20Parangol%C3%A9"},{id:"pancadao",t:"Pancad\xE3o",artist:"Ax\xE9 Blond",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`E vai jogando pro lado de l\xE1
E vai jogando pro lado de l\xE1
E vem jogando pro lado pro lado de c\xE1
E vem jogando pro lado de c\xE1
E vai jogando pro lado de l\xE1
\xC9 pancad\xE3o esse samba a\xEA..
\xE9 porrad\xE3o esse samba ah
brinca n\xE3o se n\xE3o voc\xEA vai v\xEA
do meu balan\xE7o voc\xEA vai gostar

chega. chegando...sambando, sambando
bole, bole, bole sem parar..
vem nessa viagem, segura a sacanagem..
jogue todo o corpo..

...pro lado, pro lado, pro lado de l\xE1,
e vai jogando pro lado de l\xE1...
e vem jogando pro lado, pro lado de c\xE1,
e vem jogando pro lado de c\xE1...
e vai jogando pro lado, pro lado de l\xE1,
e vai jogando pro lado de l\xE1...
e vem jogando pro lado, pro lado de c\xE1,
e vem jogando pro lado de c\xE1...
rago mof...e vai,vai,vai...
e vai,vai,vai,vai.... RUA!!!`,sp:"",sps:"https://open.spotify.com/search/Pancad%C3%A3o%20Ax%C3%A9%20Blond"},{id:"ela-e-toda-boa",t:"Ela \xC9 Toda Boa",artist:"Psirico",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Pele bronzeada mulher brasileira a coisa mais linda
Chamada de aviao, corpo de violao, a maior obra prima
Em todos os cantos do universo, se v\xEA v\xE1rias delas brilhar
fruto do pecado que o homem sempre quer desfrutar
\xC9 uma obra divina que nasceu para o nosso bem
E quem ama levante o dedo e grite am\xE9m
Maravilhosa e seus elogios n\xE3o s\xE3o a toa
voc\xEA \xE9 a \xE1gua que mata minha sede
Mulher brasileira \xE9 toda boa

Toda boa, toda boa, ela \xE9 toda boa
(Ai, ai ela \xE9 toda boa)
\xC9 toda boa, toda boa, toda boa
(Ai, ai ela \xE9 toda boa)
Toda boa, toda boa, ela \xE9 toda boa
(Ai, ai ela \xE9 toda boa)
Toda boa, toda boa, toda boa
(Ai, ai ela \xE9 toda boa)

Auto estima gordinha
(t\xE1 toda fofinha)
Auto estima magrinha
(t\xE1 toda fortinha)
Auto estima coroa
(t\xE1 toda durinha)
Auto estima negona
(t\xE1 toda gatinha) 2 x.

Mulher brasileira \xE9 toda boa`,sp:"",sps:"https://open.spotify.com/search/Ela%20%C3%89%20Toda%20Boa%20Psirico"},{id:"brincadeira-da-tomada",t:"Brincadeira da Tomada",artist:"\xC9 o Tchan",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Olha a brincadeira da tomada,
chega pra c\xE1 pra brincadeira da tomada.
Seus bra\xE7os v\xE3o ficar bem l\xE1 no alto,
o seu par tamb\xE9m coloca as m\xE3os no alto.
Pluga a m\xE3o direita, Pluga a m\xE3o esquerda, deixa coladinho, vai, vai vai.

Encaixa, encaixa, encaixa, encaixa, encaixa, encaixa
Remeche e agacha`,sp:"",sps:"https://open.spotify.com/search/Brincadeira%20da%20Tomada%20%C3%89%20o%20Tchan"},{id:"danca-da-maozinha",t:"Dan\xE7a da M\xE3ozinha",artist:"Tchakabum",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Dance
A dan\xE7a da m\xE3ozinha
Que no final
Vai dar uma rodadinha

Dance
A dan\xE7a da m\xE3ozinha
Que no final
Vai dar uma rodadinha

Olhe pro lado
Olhe pro outro
Preparem o terreno
Que a dan\xE7a vai come\xE7ar

Olhe pro lado
Olhe pro outro
Preparem o terreno
Que a dan\xE7a vai come\xE7ar`,sp:"",sps:"https://open.spotify.com/search/Dan%C3%A7a%20da%20M%C3%A3ozinha%20Tchakabum"},{id:"caranguejo",t:"Caranguejo",artist:"Babado Novo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Vou catar Caranguejo l\xE1 no manguezal
Eu vou passar molho lamb\xE3o para temperar
Vou sair do jururu quando voc\xEA chegar
E sua anca que balan\xE7a pra l\xE1 e pra c\xE1 2X

Segura, segura na corda do caranguejo... pra l\xE1 e pra c\xE1
Segura na corda do caranguejo... pra l\xE1 e pra c\xE1

O seu cordeiro n\xE3o deixe essa corda arriar
Caranguejo \xE9 fuj\xE3o ele vai escapar
O seu cordeiro n\xE3o deixe o sir\xED-b\xF3ia pular
Pois o pir\xE3o ta no ponto

e na corda do carangueijo...

Segura na corda do caranguejo... pra l\xE1 e pra c\xE1
Segura na corda do caranguejo... pra l\xE1 e pra c\xE1

Mar\xE9 ta cheia espera esvaziar joga flores no mar  Sa\xFAda a rainha Iemanj\xE1 2X

e na corda do caranguejo...

Segura na corda do caranguejo... pra l\xE1 e pra c\xE1`,sp:"",sps:"https://open.spotify.com/search/Caranguejo%20Babado%20Novo"},{id:"agua-mineral",t:"\xC1gua Mineral",artist:"Timbalada",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Bebeu \xE1gua? N\xE3o!

T\xE1 com sede? T\xF4!

Olha, olha, olha, olha a \xE1gua mineral

\xC1gua mineral

\xC1gua mineral

\xC1gua mineral

Do Candeal

Voc\xEA vai ficar legal`,sp:"",sps:"https://open.spotify.com/search/%C3%81gua%20Mineral%20Timbalada"},{id:"joga-agua",t:"Joga \xC1gua",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`J\xE1 n\xE3o sou mais um pit bull de 25.
porque preciso proteger o meu amor.
ou fa\xE7a sol, fa\xE7a chuva, ou fa\xE7a vento
n\xE3o pare o movimento nessa onda de calor

quero \xE1gua nesse corpo
quero chuva no jardim
quero a felicidade
bem pertinho de mim

ai, que calor, tum tum tum tum tum tum
ai, que calor joga \xE1gua, joga agua`,sp:"",sps:"https://open.spotify.com/search/Joga%20%C3%81gua%20Asa%20de%20%C3%81guia"},{id:"beber-cair-e-levantar",t:"Beber, Cair e Levantar",artist:"Saia Rodada",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Vamos embora, pra um bar,
Beber, cair e levantar.
Vamos embora, pra um bar,
Beber, cair e levantar.
Beber, cair e levantar.(Bis)

Cabra safado,  Cara zoeira,
S\xF3 gosta mesmo \xE9 de mulher tranqueira.
Mulher direita o cara n\xE3o quer
Fica travado e at\xE9 briga com a mulher.
Eu j\xE1 quis me mudar pro meu amor
Mais a cacha\xE7a me pegou e a farra agora \xE9 meu lugar.
Eu j\xE1 quis me mudar pro meu amor
Mais a cacha\xE7a me pegou e a farra agora \xE9 meu lugar.
Mais se voc\xEA quiser me acompanhar eu vou te convidar pra ir pra onde ...
Vamos embora, pra um bar,
Beber, cair e levantar.
Bora, bora.
Vamos embora, pra um bar,
Beber, cair e levantar.
Beber, cair e levantar.(Bis)`,sp:"",sps:"https://open.spotify.com/search/Beber%2C%20Cair%20e%20Levantar%20Saia%20Rodada"},{id:"xo-satanas",t:"X\xF4 Satan\xE1s",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Eu era um b\xEAbado que vivia drogado, hoje estou curado
Encontrei jesus! encontrei jesus! encontrei jesus!
Na casa do senhor n\xE3o existe satan\xE1s
X\xF4 satan\xE1s! x\xF4 satan\xE1s! [2x]

Eu tava na vida, quase a me perder, a minha tenta\xE7\xE3o
Foi amar voc\xEA, com tanta loucura eu n\xE3o ag\xFCento
mais
X\xF4 satan\xE1s! x\xF4 satan\xE1s!x\xF4 satan\xE1s! x\xF4 satan\xE1s!

Eu era um b\xEAbado que vivia drogado, hoje estou curado
Encontrei jesus! encontrei jesus! encontrei jesus!
Na casa do senhor n\xE3o existe satan\xE1s
X\xF4 satan\xE1s! x\xF4 satan\xE1s! [2x]`,sp:"",sps:"https://open.spotify.com/search/X%C3%B4%20Satan%C3%A1s%20Asa%20de%20%C3%81guia"},{id:"minha-mulher-nao-deixa-nao",t:"Minha Mulher N\xE3o Deixa N\xE3o",artist:"Avi\xF5es do Forr\xF3",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Ei tu que beber?
- Quero n\xE3o!
- N\xE3o quer por qu\xEA?
- Por nada n\xE3o!
- Tu que fumar?
- Han han!
- N\xE3o quer por qu\xEA?
Vou n\xE3o, quero n\xE3o, posso n\xE3o, minha mulher, n\xE3o deixa N\xE3o,  N\xE3o vou n\xE3o, quero n\xE3o.
Vou n\xE3o, quero n\xE3o, posso n\xE3o, minha mulher, n\xE3o deixa  N\xE3o, N\xE3o vou n\xE3o, quero n\xE3o.

- Ei no meu carr\xE3o vamos sair,
Tem avi\xF5es todo mundo vai curtir.
E ai l\xE1 em marli tem cabe\xE7a de galo veeeenhaaaa.
Vou n\xE3o, quero n\xE3o, posso n\xE3o, minha mulher, n\xE3o deixa
N\xE3o,
N\xE3o vou n\xE3o, quero n\xE3o.
Vou n\xE3o, quero n\xE3o, posso n\xE3o, minha mulher, n\xE3o deixa
N\xE3o,
N\xE3o vou n\xE3o, quero n\xE3o.

- Ei tem duas nega. E ai, vamos arrastar?
Chamando a tua agente bota o bicho l\xE1.
Quem \xE9s tu? \xC9s boiol\xE3o? Tu vai ou n\xE3o.
Vou n\xE3o, quero n\xE3o, posso n\xE3o, minha mulher, n\xE3o deixa
N\xE3o,
N\xE3o vou n\xE3o, quero n\xE3o.
Vou n\xE3o, quero n\xE3o, posso n\xE3o, minha mulher, n\xE3o deixa
N\xE3o,
N\xE3o vou n\xE3o, quero n\xE3o.`,sp:"",sps:"https://open.spotify.com/search/Minha%20Mulher%20N%C3%A3o%20Deixa%20N%C3%A3o%20Avi%C3%B5es%20do%20Forr%C3%B3"},{id:"saia-e-bicicletinha",t:"Saia e Bicicletinha",artist:"Ka\xE7amba",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Ela ta de saia, De bicicletinha
Uma m\xE3o vai no guidon
E a outra tapando a calcinha {bis}

Da um arrepio quando ela sai pedalando
Mas tem uma m\xE3o na frente que t\xE1 sempre atrapalhando
Acho que ela tem medo do piriquito voar
Por isso que ela n\xE3o para de tampar {bis}

Eu n\xE3o aguento mais essa situa\xE7\xE3o
Vamos liberar geral vamos tirar essa m\xE3o
Bota a saia e vem pra rua com sua bicicletinha
Eu quero ver a cor da sua calcinha

Ela sai de saia De bicicletinha
Uma m\xE3o vai no guidon
E a outra tapando a calcinha{bis}

Da um arrepio quando ela sai pedalando
Mais tem uma m\xE3o na frente que t\xE1 sempre atrapalhando
Acho que ela tem medo do piriquito voar
Por isso ela n\xE3o para de tampar {bis}

Eu n\xE3o aguento mais
Essa situa\xE7\xE3o
Vamos liberar geral
Vamos tirar essa m\xE3o

Bota a saia e vem pra rua
Na sua bicicletinhaa
Eu quero ver a cor da sua calcinha {bis}`,sp:"",sps:"https://open.spotify.com/search/Saia%20e%20Bicicletinha%20Ka%C3%A7amba"},{id:"piriri-pom-pom",t:"Piriri Pom Pom",artist:"Oz Bambaz",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Piriri pom pom, piriri pom pom
Vem rebolar gostoso

Piriri pom pom, piriri pom pom
Embaixo \xE9 mais gostoso

Piriri pom pom, piriri pom pom
Eu sou Oz Bambaz da Bahia

Piriri pom pom, piriri pom pom
\xC9 Swing\xE3o que contagia

E arroche bem gostoso a\xED
Chame essa menina a\xED
Bota pra mexer assim
Mexe bem gostoso assim

E eu vou quebrando desse jeito assim
Descendo desse jeito vai...

Piriri pom pom, piriri pom pom
Vem requebrar gostoso

Piriri pom pom, piriri pom pom
Que esse baixo \xE9 mais gostoso

Piriri pom pom, piriri pom pom
Eu sou Oz Bambaz da alegria

Piriri pom pom, piriri pom pom
E swing\xE3o que contagia...

Mas eu vou na quebradeira assim
Eu vou mexendo assim
Eu vou com Oz bambaz assim
\xCA e vai descendo assim

Eu vou mexendo desse jeito assim
Quebrando desse jeito assim

Piriri pom pom, piriri pom pom
Vem requebrar de novo

Piriri pom pom, piriri pom pom
E mais em baixo \xE9 mais gostoso

Piriri pom pom, piriri pom pom
Sim, Eu sou Oz Bambaz da alegria

Piriri pom pom, piriri pom pom
E swing\xE3o que contagia`,sp:"",sps:"https://open.spotify.com/search/Piriri%20Pom%20Pom%20Oz%20Bambaz"},{id:"na-base-do-beijo",t:"Na Base do Beijo",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Quando eu te pegar voc\xEA vai ver...
voc\xEA vai ver...ai de ti...ai de ti...

Vai se amarrar, s\xF3 vai querer saber de mim
voc\xEA vai se dar bem, e eu tamb\xE9m
voc\xEA vai se dar bem, e eu tamb\xE9m

Comigo \xE9 na base do beijo,
Comigo \xE9 na base do amor
Comigo n\xE3o tem disse me disse
n\xE3o tem chove n\xE3o molha
Desse jeito que eu sou Comigo...
Comigo \xE9 na base do beijo,
Comigo \xE9 na base do amor
Comigo n\xE3o tem disse me disse
n\xE3o tem chove n\xE3o molha
Desse jeito que eu sou

Quando amo \xE9 pra valerQuando amo \xE9 pra valer
Dou carinho, me entrego, fa\xE7o o amor acontecer

Quando amo \xE9 pra valerQuando amo \xE9 pra valer
Dou carinho, me entrego, fa\xE7o o amor acontecer

Vamos namorar beijar na boca`,sp:"",sps:"https://open.spotify.com/search/Na%20Base%20do%20Beijo%20Ivete%20Sangalo"},{id:"ceu-da-boca",t:"C\xE9u da Boca",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`\xC9 de babaix\xE1! \xC9 de balacubaca!
\xC9 de babaix\xE1! \xC9 de balacubaca!
tetetetere tere tete tere tetere

Eu quero beijar a sua boca louca
Eu quero beijar a sua boca louca
Eu vou enfiar uva no c\xE9u da sua boca
Eu vou enfiar uva no c\xE9u da sua boca

E a\xED?  Chupa toda, disse toda
E a\xED?  Chupa toda, disse toda

\xC9 de babaix\xE1! \xC9 de balacubaca!
\xC9 de babaix\xE1!\xC9 de balacubaca!
tetetetere tere tete tere tetere

Eu quero beijar a sua boca louca
Eu quero beijar a sua boca louca
Eu vou enfiar uva no c\xE9u da sua boca
Eu vou enfiar uva no c\xE9u da sua boca

E a\xED?
Chupa toda, disse toda
E a\xED?
Chupa toda, disse toda`,sp:"",sps:"https://open.spotify.com/search/C%C3%A9u%20da%20Boca%20Ivete%20Sangalo"},{id:"a-galera",t:"A Galera",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Fevereiro Alegria
Muita festa Todo dia
Quem pode, pode
Quem n\xE3o pode se sacode
Quando a banda passa
E o som da banda empurrando todo mundo
Num swing massa
E a galera, \xF4, \xF4
A galera t\xE1 no clima
M\xE3o embaixo M\xE3o em cima
Quem pode, pode
Quem n\xE3o pode se sacode
Quando a banda passa
E o som da banda empurrando todo mundo
Num swing massa
E a galera, \xF4, \xF4
Desce, desce
Bem juntinho
Sobe, sobe
Bonitinho
E essa dan\xE7a todo mundo t\xE1 jogando no meio da pra\xE7a
O som da banda empurrando todo mundo
Num swing massa
E a galera, \xF4, \xF4`,sp:"",sps:"https://open.spotify.com/search/A%20Galera%20Ivete%20Sangalo"},{id:"berimbau-metalizado",t:"Berimbau Metalizado",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Que som \xE9 esse mano que o povo t\xE1 dan\xE7ando
Que vem de l\xE1 pra c\xE1?
\xC9 um som diferente
Que alucina a gente, faz dan\xE7ar

\xC9 uma mistura de tambor, violino e agog\xF4 que n\xE3o deixa ningu\xE9m parado
L\xE1 no fundo t\xE1 rolando o som que vem empurrando \xE9 o berimbau metalizado (2x)

T\xE1 t\xE1 t\xE1,t\xE1 arrastando toda a massa
T\xE1 t\xE1 t\xE1,t\xE1 balan\xE7ando o ch\xE3o da pra\xE7a
T\xE1 t\xE1 t\xE1, t\xE1 todo mundo arrepiado
Curtindo o som do berimbau metalizado (2x)

Que som \xE9 esse mano que o povo t\xE1 dan\xE7ando
Que vem de l\xE1 pra c\xE1?
\xC9 um som diferente
Que alucina a gente e faz dan\xE7ar

\xC9 uma mistura de tambor, violino e agog\xF4 que n\xE3o deixa ningu\xE9m parado
L\xE1 no fundo t\xE1 rolando o som que vem empurrando \xE9 o berimbau metalizado (2x)

T\xE1 t\xE1 t\xE1,t\xE1 arrastando toda a massa
T\xE1 t\xE1 t\xE1,t\xE1 balan\xE7ando o ch\xE3o da pra\xE7a
T\xE1 t\xE1 t\xE1, t\xE1 todo mundo arrepiado
Curtindo o som do berimbau metalizado (2x)

Que som \xE9 esse mano que o povo t\xE1 dan\xE7ando
Que vem de l\xE1 pra c\xE1?
Som diferente
Que alucina a gente, faz dan\xE7ar

\xC9 uma mistura de tambor, violino e agog\xF4 que n\xE3o deixa ningu\xE9m parado
L\xE1 no fundo t\xE1 rolando o som que vem empurrando \xE9 o berimbau

T\xE1 t\xE1 t\xE1,t\xE1 arrastando toda a massa
T\xE1 t\xE1 t\xE1,t\xE1 balan\xE7ando o ch\xE3o da pra\xE7a
T\xE1 t\xE1 t\xE1, t\xE1 todo mundo arrepiado
Curtindo o som do berimbau metalizado (4x)`,sp:"",sps:"https://open.spotify.com/search/Berimbau%20Metalizado%20Ivete%20Sangalo"},{id:"coracao",t:"Cora\xE7\xE3o",artist:"Rapazolla",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Cora\xE7\xE3o
Para que se apaixonou por algu\xE9m que nunca te amou
Algu\xE9m que nunca vai te amar

Eu vou fazer promessas
Para nunca mais amar
Algu\xE9m que s\xF3 quer me ver sofrer
Algu\xE9m que s\xF3 quer me ver chorar

Preciso sair dessa, dessa de me apaixonar
Por quem s\xF3 quer me fazer sofrer
Por quem s\xF3 quer me fazer chorar

\xC9 t\xE3o ruim quando algu\xE9m machuca a gente
O cora\xE7\xE3o fica doente
Sem jeito at\xE9 pra conversar

D\xF3i demais, s\xF3 quem ama sabe e sente
O que se passa em nossa mente
Na hora de deixar rolar

Nunca mais, eu vou provar do teu carinho
Nunca mais, eu vou poder te abra\xE7ar
Ou ser\xE1, que eu vivo bem melhor sozinho?
E se for, mais f\xE1cil assim pra perdoar

O amor, \xE0s vezes, s\xF3 confunde a gente
N\xE3o sei, com voc\xEA pode ser bem diferente
O amor, \xE0s vezes s\xF3 confunde a gente
N\xE3o sei, com voc\xEA pode ser bem diferente

Cora\xE7\xE3o
Para que se apaixonou por algu\xE9m que nunca te amou
Algu\xE9m que nunca vai te amar(bis)

Nunca mais, eu vou provar do teu carinho
Nunca mais, eu vou poder te abra\xE7ar
Ou ser\xE1, que eu vou viver melhor sozinho?
E se for, mais assim f\xE1cil pra perdoar

O amor, \xE0s vezes, s\xF3 confunde a gente
N\xE3o sei, com voc\xEA pode ser bem diferente
O amor, \xE0s vezes s\xF3 confunde a gente
N\xE3o sei, com voc\xEA pode ser bem diferente

Cora\xE7\xE3o`,sp:"",sps:"https://open.spotify.com/search/Cora%C3%A7%C3%A3o%20Rapazolla"},{id:"bola-de-sabao",t:"Bola de Sab\xE3o",artist:"Babado Novo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Baby baby  Queria tanto te ver
V\xEA se me liga as vezes
S\xF3 pra dizer um oi
Talvez quem sabe
N\xE3o seja assim t\xE3o tarde
Queria ter uma nave
Pra te levar
Pra dar um rol\xE9
Nas nuvens
E te vestir com a luz do sol
Te beijar infinito
Admirar as suas asas
Anjo venha voar s\xF3 no meu c\xE9u
Me pegue no teu colo
Que eu viajo al\xE9m do horizonte

Virou minha cabe\xE7a  E o cora\xE7\xE3o
Feito bola de sab\xE3o Me desmancho por voc\xEA

\xD4 \xF4 \xF4
\xD4 \xF4 \xF4 Refr\xE3o indica x 3 vezes o Refr\xE3o
\xD4 \xF4 \xF4

Nas nuvens
E te vestir com a luz do sol
Te beijar infinito
Admirar as suas asas
Anjo venha voar s\xF3 no meu c\xE9u
Me pegue no teu colo
Que eu viajo al\xE9m do horizonte

Pirou minha cabe\xE7a
E o cora\xE7\xE3o
Feito bola de sab\xE3o
Me desmancho por voc\xEA`,sp:"",sps:"https://open.spotify.com/search/Bola%20de%20Sab%C3%A3o%20Babado%20Novo"},{id:"lirirrixa",t:"Lirirrixa",artist:"Babado Novo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Lirirrixa Timbaleia
Badala, badala, badala
Rucutum, tan, tan, tan (bis)

Vem

Entre nesse passo que \xE9 bom
bum bum
Pra balan\xE7ar
bum bum
pra requebrar
Jogue a m\xE3o pra cima
Solta o corpo
O que que d\xE1?

Ei
Jogue para o lado de bandinha
(STOP IT)
D\xEA uma reboladinha

Reboladinha, reboladinha
Reboladinha, boladinha(repete)

Venha balan\xE7ar
Essa \xE9 a sensa\xE7\xE3o

Agita\xEA, hei! (bis)
Ou\xE7a o tum, tum, tum
Que vem do cora\xE7\xE3o
Badala, badala, badala
Rucutum, tan, tan, tan

Lirirrixa
Timbaleia
Badala, badala, badala
Rucutum, tan, tan, tan (bis)

Vem

Entre nesse passo que \xE9 bom
bum bum
Pra balan\xE7ar
bum bum
pra requebrar
Jogue a m\xE3o pra cima
Solta o corpo
O que que d\xE1?

Ei
Jogue para o lado de bandinha
(STOP IT)
D\xEA uma reboladinha

Reboladinha, reboladinha
Reboladinha, boladinha(repete)

Venha balan\xE7ar
Essa \xE9 a sensa\xE7\xE3o

Agita\xEA, hei! (bis)
Ou\xE7a o tum, tum, tum
Que vem do cora\xE7\xE3o
Badala, badala, badala
Rucutum, tan, tan, tan

Lirirrixa
Timbaleia
Badala, badala, badala
Rucutum, tan, tan, tan (bis)

Lirirrixa
Timbaleia
Badala, badala, badala
Rucutum, tan, tan, tan`,sp:"",sps:"https://open.spotify.com/search/Lirirrixa%20Babado%20Novo"},{id:"flor-do-reggae",t:"Flor do Reggae",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Um brilho de amor chegou na ilha inteira
E a Lua que traz o amor \xE9 Lua cheia
Um grito de dor que vem do peito de quem amou algu\xE9m
O reggae me traz saudades de quem me beijou
E agora t\xE1 t\xE3o distante em outra ilha
O amor me chamou de flor
E disse que eu era algu\xE9m pra vida inteira

Como se eu fosse flor, voc\xEA me cheira
Como se eu fosse flor, voc\xEA me rega
E nesse reggae eu vou a noite inteira
Porque morrer de amor \xE9 brincadeira`,sp:"",sps:"https://open.spotify.com/search/Flor%20do%20Reggae%20Ivete%20Sangalo"},{id:"quero-chiclete",t:"Quero Chiclete",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`CHICLETE,CHICLETE QUERO CHICLETE
CHICLETE,QUERO CHICLETE
CHICLETE,QUERO CHICLETE

CHICLETE PRA GRUDAR NO SEU OUVIDO
CHICLETE PRA TOCAR NO CORA\xC7\xC3O
CHICLETE NA BOCA PRA MIM \xC9 V\xCDCIO
CHICLETE PRA FICAR AMARRAD\xC3O

CHICLETE PRA GRUDAR NO SEU JU\xCDZO
CHICLETE PRA COLAR NOSSA PAIX\xC3O
CHICLETE SEM BANANA \xC9 PREJU\xCDZO
CHICLETE PRA GALERA \xC9 CHICLET\xC3O

N\xC3O \xC9 LAMBADA, N\xC3O \xC9.
N\xC3O \xC9 MERENGUE N\xC3O \xC9.
SABE QUAL \xC9, QUAL \xC9, QUAL \xC9?
\xC9 CHICLETE COM BANANA

CHICLETE OBA OBA...
CHICLETE OBA OBA...`,sp:"",sps:"https://open.spotify.com/search/Quero%20Chiclete%20Chiclete%20com%20Banana"},{id:"simbora",t:"Simbora",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`O sol j\xE1 foi embora, e o agito da rua chegou
\xC9 mais uma noite de festa
Luminosa como sempre, agito da Bahia
Lembrando vaga-lumes l\xE1 no meio da floresta

Nossa paix\xE3o \xE9 fogo, papai j\xE1 lhe chamou
N\xE3o sai de minissaia que o bicho j\xE1 pegou
Tomar um golinho n\xE3o vai resolver
Do jeito que ela bebe ela vai querer

Abre a clareira que ela vai sambar
\xC9 samba com galope da Bahia ia ia (2x)

Simbora \xEA, Simbora \xF4
lelelele \xF4o
Simbora \xEA, Simbora l\xE1
lelelele aa`,sp:"",sps:"https://open.spotify.com/search/Simbora%20Asa%20de%20%C3%81guia"},{id:"pais-tropical-arere-taj-mahal",t:"Pa\xEDs Tropical / Arer\xEA / Taj Mahal",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Moro...
Num pa\xEDs tropical,
Aben\xE7oado por Deus
E bonito por natureza (Mas que beleza!)

Em fevereiro (Em fevereiro)
Tem carnaval (Tem carnaval)
Eu tenho um fusca e um viol\xE3o,
Sou Flamengo e tenho uma n\xEAga chamada Tereza

"Sambaby", "Sambaby"
Eu posso n\xE3o ser um Band Leader (Pois \xE9)
Mas assim mesmo, l\xE1 em casa todos meus amigos, meus camaradinhas me respeitam (Pois \xE9)
Essa \xE9 a raz\xE3o da simpatia, do poder do algo mais e da alegria...

Sou fl\xE1,fl\xE1 ela eh me me

Tudo o que eu quero nessa vida
\xC9 amar voc\xEA
Amar voc\xEA
O seu amor \xE9 como uma chama acesa
que me queima de prazer
De prazer (2x)

Eu j\xE1 falei com Deus que n\xE3o vou te deixar
Vou te levar pra onde
Pra qualquer lugar
J\xE1 fiz de tudo pra n\xE3o te perder

Arer\xEA,
Um lobby, um hobby, um love com voc\xEA
Arer\xEA,
um lobby, um hobby, um love com voc\xEA

Cai, cai, cai, cai, cai pra c\xE1
Hey, hey, hey
Tudo, tudo,tudo, vai rolar

Arer\xEA,
Um lobby, um hobby, um love com voc\xEA
Arer\xEA,
um lobby, um hobby, um love com voc\xEA`,sp:"",sps:"https://open.spotify.com/search/Pa%C3%ADs%20Tropical%20/%20Arer%C3%AA%20/%20Taj%20Mahal%20Ivete%20Sangalo"},{id:"bota-pra-ferver",t:"Bota Pra Ferver",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`No c\xE9u azul destino das estrelas
Onde o vento sentiu a flor
A vida, bota pra ferver

Sabor de mel tempero de perfumes
Sou louco por voc\xEA
Mas a vida, bota pra ferver

Nessa constela\xE7\xE3o de luz neon
Heran\xE7a do batom cor de ma\xE7\xE3
Gritei pro c\xE9u, i\xF4 i\xF4 i\xF4 i\xF4 i\xF4 i\xF4

Agora a nave m\xE3e vai decolar
Eu j\xE1 n\xE3o posso mais te dar a m\xE3o
Fiquei pinel,i\xF4 i\xF4 i\xF4 i\xF4 i\xF4

Eu disse
Bota pra ferver, no caldeir\xE3o do amor
Bota pra ferver, a ilus\xE3o e a dor
Bota pra ferver, um rio de lagrimas.`,sp:"",sps:"https://open.spotify.com/search/Bota%20Pra%20Ferver%20Asa%20de%20%C3%81guia"},{id:"lobo-mau",t:"Lobo Mau",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Quem \xE9 voc\xEA?
Chapeuzinho Vermelho

Bom, se voc\xEA \xE9 chapeuzinho vermelho, ent\xE3o..
Eu sou o lobo mau au au
Eu sou o lobo mau au au
Eu sou o lobo mau au au

E o que voc\xEA vai fazer?

REFR\xC3O: Vou te comer, vou te comer, vou te comer, vou te comer, vou te comer, vou te comer
VAI, VAI, VAI (x2)

Chapeuzinho onde vai diz a\xED menina que eu vou atr\xE1s
(x4)

Pra que voce quer saber?

Eu sou o lobo mau au au (x8)

[REFR\xC3O]

Ai merenda boa bem gostosinha
quem preparou foi a
vovozinha (x2)

\xEAta danada

Ai merenda boa bem gostosinha
quem preparou foi a
danadinha
[REFR\xC3O]

Chapeuzinho de mai\xF4,
ouviu buzina e n\xE3o parou..

[REFR\xC3O}`,sp:"",sps:"https://open.spotify.com/search/Lobo%20Mau%20Ivete%20Sangalo"},{id:"tchubirabiron",t:"Tchubirabiron",artist:"Parangol\xE9",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Pra frente, pra frente Cintura cabe\xE7a
Tchubirabiron
Olha pra frente, pra frente Cintura cabe\xE7a
Tchubirabiron (2x)

Que dancinha legalTodo mundo vai fazer
Nesse Carnaval Eu sei que vai ferver
Voc\xEA quer tome  a\xED  Swingueira pra voc\xEA
Pega na cabe\xE7a e vai

Olha Pra frente, pra frente Cintura cabe\xE7a
Tchubirabiron
Olha pra frente, pra frente
Cintura cabe\xE7a
Tchubirabiron
Eu sei que voc\xEA quer
Sei que voc\xEA t\xE1 querendo
Eu sei que voc\xEA quer
Sei que voc\xEA t\xE1 querendo
Eu sei que voc\xEA quer
Sei que voc\xEA t\xE1 querendo
Eu sei que voc\xEA quer
Sei que voc\xEA t\xE1 querendo
Pega na cintura e vai
Pra frente, pra frente`,sp:"",sps:"https://open.spotify.com/search/Tchubirabiron%20Parangol%C3%A9"},{id:"explosao",t:"Explos\xE3o",artist:"Tchakabum",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Explos\xE3o TchacaBum
com a dan\xE7a do ver\xE3o
Explos\xE3o muito quente
quente feito um vulc\xE3o

Explos\xE3o nesse gingado caliente
que tem cheiro de camim
morena t\xE3o envolvente
quero voc\xEA s\xF3 pra mim

mexendo todo esse corpo
rebola quebrando formoso

Como uma cobra rebola rebola corpo de mola
o caldeir\xE3o fervendo vai entrar em erup\xE7\xE3o
voc\xEA vai ver daqui a pouco
o caldo vai ferver vai ferver vai ferver

Como uma cobra rebolarebola corpo de mola
o caldeir\xE3o fervendo vai entrar em erup\xE7\xE3o
voc\xEA vai ver daqui a pouco
o caldo vai ferver
vai ferver vai ferver`,sp:"",sps:"https://open.spotify.com/search/Explos%C3%A3o%20Tchakabum"},{id:"olha-a-onda",t:"Olha a Onda",artist:"Tchakabum",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Vou te pegar, essa \xE9 a galera do avi\xE3o
Se ligue agora nessa nova onda
Sou um pirata jogando a marca\xE7\xE3o, \xF4 \xF4 \xF4

Vou navegar, cumprindo as ordens do meu capit\xE3o
Capit\xE3o joga vem dan\xE7ando com a galera
Nessa aventura que \xE9 pura emo\xE7\xE3o, olha a onda!

Onda, onda, olha a onda
Onda, onda, olha a onda
Onda, onda, olha a onda
Onda, onda, olha a onda.
Vou te molhar, vou te banhar, vai sacudir vai abalar
Vou te molhar, vou te banhar, vai sacudir vai abalar
Molhou o seu rostinho, Molhou a barriguinha
Molhou o seu pezinho, Molhou todo corpinho deixa que eu vou te enxugar
Molhou o seu rostinho, Molhou a barriguinha
Molhou o seu pezinho, Molhou todo corpinho deixa que eu vou te enxugar
Balan\xE7a pra l\xE1, balan\xE7a pra c\xE1
Sacudiu tremeu, treme sem parar
Balan\xE7a pra l\xE1, balan\xE7a pra c\xE1
Sacudiu tremeu, treme sem parar

Capit\xE3o mandou o marujo sim senhor
Capit\xE3o mandou o marujo sim senhor
E o Capit\xE3o mandou o marujo sim senhor
Andou na prancha, cuidado o tubar\xE3o vai te pegar
Andou na prancha, cuidado o tubar\xE3o vai te pegar
Andou na prancha, cuidado o tubar\xE3o vai te pegar
Andou na prancha, cuidado o tubar\xE3o vai te pegar
Onda, onda, olha a onda
Onda, onda, olha a onda
Onda, onda, olha a onda
Onda, onda, olha a onda!`,sp:"",sps:"https://open.spotify.com/search/Olha%20a%20Onda%20Tchakabum"},{id:"danca-do-vampiro",t:"Dan\xE7a do Vampiro",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Voc\xEA \xE9 o amor que eu sempre quisVem pra mim
Coisinha sensual me despertou Fazendo assim

Por isso, mexe a bundinha
Bem devagarzinho
Vai descendo (vai) Vai subindo

Gatinha Poe o dente
No pesco\xE7o do rapaz
Na dan\xE7a do vampiro
Voc\xEA se satisfaz

Levante a m\xE3o Entre no clima
Batendo palma Na levada do ax\xE9

Levante a m\xE3o Entre no clima
Batendo palma S\xF3 pra ver como \xE9 que \xE9

O, o, o, ooo, que terror
O, o, o, ooo, na dan\xE7a do vampiro

2 vezes

Voc\xEA \xE9 o amor...`,sp:"",sps:"https://open.spotify.com/search/Dan%C3%A7a%20do%20Vampiro%20Asa%20de%20%C3%81guia"},{id:"danca-da-manivela",t:"Dan\xE7a da Manivela",artist:"Asa de \xC1guia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Dan\xE7a da Manivela  Dan\xE7a da Manivela

eu fui perguntar pra ela meu amor [meu amor]
se a dan\xE7a da manivela ela topou (bis)

dizendo que aqui t\xE1 quente

assim t\xE1 frio

muito quente, t\xE1 frio

aqui t\xE1 quente, aqui ta frio

muito quente, t\xE1 frio

pega no dedinho delaoo
pega no joelho dela
pega na coxinha dela
sobe mais um pouquinho
pega no rostinho dela,
pega no peitinho dela
pega no umbigo dela,
desce devagarinho`,sp:"",sps:"https://open.spotify.com/search/Dan%C3%A7a%20da%20Manivela%20Asa%20de%20%C3%81guia"},{id:"tchau-i-have-to-go-now",t:"Tchau, I Have to Go Now",artist:"Jammil e Uma Noites",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Tchau I have to go now I have to go now
Tchau (2x)

Eu queria ficar Mas s\xF3 que hoje n\xE3o d\xE1
Eu tenho que ir embora Eu tenho que trabalhar

Eu queria levar voc\xEA no meu porta-luva
Te dar um beijo de sol Um beijo de chuva

Eu quero que voc\xEA me guarde em seu pensamento
Eu quero que voc\xEA me queira em seu travesseiro
Eu quero que voc\xEA me queira sem julgamento
Eu quero que voc\xEA me queira em fevereiro

Quero ser o sol que ilumina sua manh\xE3
Ser o seu "pra sempre"
Ser seu amanh\xE3

Tchau, I have to go now
I have to go now, tchau ei,ei(2x)

Espero a gente, te quero agora e sempre...`,sp:"",sps:"https://open.spotify.com/search/Tchau%2C%20I%20Have%20to%20Go%20Now%20Jammil%20e%20Uma%20Noites"},{id:"festa",t:"Festa",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Festa no gueto,
Pode vir, pode chegar
Misturando o mundo inteiro
Vamos ver no que \xE9 que d\xE1

Hoje tem festa no gueto
Pode vir, pode chegar
Misturando o mundo inteiro
Vamos ver no que \xE9 que d\xE1

Tem gente de toda cor
Tem ra\xE7a de toda f\xE9
Guitarras de rock'n roll
Batuque de candombl\xE9
Vai l\xE1

Pra ver
A tribo se balan\xE7ar
O ch\xE3o da terra tremer
M\xE3e preta de l\xE1 mandou chamar
Avisou, Avisou, Avisou, Avisou

Que vai rolar a festa Vai rolar
O povo no gueto
Mandou avisar`,sp:"",sps:"https://open.spotify.com/search/Festa%20Ivete%20Sangalo"},{id:"canibal",t:"Canibal",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Morava numa ilha perdida e deserta
deserta, ilha deserta da dor,sonhava com um \xEDndio
que me desse alegria,e esse \xEDndio era voc\xEA amor
Com um penacho na cabe\xE7a,de uma tribo de paz
Tocava tambor,eu quero mais, eu quero mais
Com um penacho na cabe\xE7a,de uma tribo de paz
Tocava tambor,eu quero mais, eu quero mais
O seu amor \xE9 canibal
Comeu meu cora\xE7\xE3o
Mas agora eu sou feliz
O seu amor \xE9 canibal
Meu cora\xE7\xE3o agora \xE9 todo carnaval`,sp:"",sps:"https://open.spotify.com/search/Canibal%20Ivete%20Sangalo"},{id:"bate-lata",t:"Bate Lata",artist:"Gil Mel\xEAndia",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Era um menino tocador que dispensou o agog\xF4
E o tambor pra tocar lata
Do ta ta ta ele gostou
Do tum tum tum ele adorou
E muito mais do Ra ta ta ta
Era um menino tocador que dispensou o agog\xF4
E o tambor pra tocar lata
Do ta ta ta ele gostou
Do tum tum tum ele adorou
E muito mais do Ra ta ta ta

QUER APRENDER PEGUE A LATINHA
E BATE UMA NA OUTRA TCHA TCHA,
SEGURE O REAGGE N\xC3O SUSSEGUE
SE ENTREGUE A ESSA VIAGEM LOUCA

Venha de lata neg\xE3o
No meio da multid\xE3o
Se n\xE3o tem lata
Improvisa, bate na palma da m\xE3o

Venha de lata neg\xE3o
No meio da multid\xE3o
Se n\xE3o tem lata
Improvisa, bate na palma da m\xE3o`,sp:"",sps:"https://open.spotify.com/search/Bate%20Lata%20Gil%20Mel%C3%AAndia"},{id:"safado-cachorro-sem-vergonha",t:"Safado, Cachorro, Sem-Vergonha",artist:"Babado Novo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Deixa de ser mulherengo homem
O dia todo pensando em mulher
Voc\xEA t\xE1 doido pra ficar sozinho
T\xE1 querendo ficar a migu\xE9
Bem que minha m\xE3e falou
Pra eu n\xE3o casar com voc\xEA
Chego em casa do trabalho
Voc\xEA t\xE1 vendo TV
Passa o dia reclamando
Querendo me provocar
O que eu penso de voc\xEA
Caladinho, que eu vou dizer

Safado Cachorro Sem-vergonha
Eu dou duro o dia inteiro
E voc\xEA, colch\xE3o e fronha (bis)

E de noite faz tipo mansinho
Quer beijinhos, carinho
Quer me conquistar
Sai pra l\xE1 Que eu j\xE1 t\xF4 vacinada
Voc\xEA n\xE3o mudou nada
Caladinho, que eu vou falar

Safado`,sp:"",sps:"https://open.spotify.com/search/Safado%2C%20Cachorro%2C%20Sem-Vergonha%20Babado%20Novo"},{id:"carro-velho",t:"Carro Velho",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Cheiro de pneu queimado, carburador furado, cora\xE7\xE3o dilacerado!
Quero meu neg\xE3o do lado, cabelo penteado no meu carro envenenado

Eu vou Eu vou Ent\xE3o venha!
Pois eu sei que amar a p\xE9 amor, \xE9 lenha!
Eu vou Eu vou Ent\xE3o venha!
Pois eu sei que amar a p\xE9 amor, \xE9 lenha!
Eu vou pra l\xE1 dan\xE7ar, seja noite ou seja dia,
se eu beber algum amor, me guia!
Eu vou pra l\xE1 dan\xE7ar, seja noite ou seja dia, se eu beber algum amor, ohohoho me guia!

Quer andar de carro velho amor, que venha, pois eu sei que amar a p\xE9 amor, \xE9 lenha!
Quer andar de carro velho amor, que venha, pois eu sei que amar a p\xE9 amor, \xE9 lenha!

Cheiro de pneu queimado, carburador furado, cora\xE7\xE3o dilacerado!
Quero meu neg\xE3o do lado, cabelo penteado no meu carro envenenado

Eu vou Eu vou`,sp:"",sps:"https://open.spotify.com/search/Carro%20Velho%20Ivete%20Sangalo"},{id:"milla",t:"Milla",artist:"Netinho",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Oh Milla, mil e uma noites de amor com voc\xEA,
Na praia, num barco, num farol apagado
Num moinho abandonado,
Em mar grande, alto astral,
L\xE1 em Hollywood pra de tudo rolar,
Vendo estrelas caindo, vendo a noite passar,
Eu e voc\xEA, na ilha do sol Na ilha do sol

Tudo come\xE7ou a um tempo atr\xE1sNa ilha do sol
O destino te mandou de volta para o meu cais
(bis)

No cora\xE7\xE3o ficou lembran\xE7as de n\xF3s dois,
Como ferida aberta, como tatuagem
Oh Milla, mil e uma noites de amor com voc\xEA,
Na praia, num barco, num farol apagado
Num moinho abandonado,
Em mar grande, alto astral,
L\xE1 em Hollywood pra de tudo rolar,
Vendo estrelas caindo, vendo a noite passar,
Eu e voc\xEA, na ilha do sol`,sp:"",sps:"https://open.spotify.com/search/Milla%20Netinho"},{id:"pipoca",t:"Pipoca",artist:"Ara Ketu",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`O Araketo o Araketu quando toca, deixa todo mundo pulando que nem pipoca
O Araketo o Araketu quando toca, deixa todo mundo pulando que nem pipoca
O fogo \xE9 fogo, esquenta, esquenta o nosso amor
O fogo \xE9 fogo, esquenta, esquenta que o Ara chegou, vai vai vai

O Araketo o Araketu quando toca, deixa todo mundo pulando que nem pipoca (2x)

Eu vejo o povo cantar, eu vejo o povo dan\xE7ar na melodia da can\xE7\xE3o (2x)

Vamos dan\xE7ar no compasso, que eu vou seguir o teu passo abra o teu cora\xE7\xE3o
Vamos dan\xE7ar no compasso, que eu vou seguir o teu passo explode cora\xE7\xE3o (a galera sai do ch\xE3o comigo)
O fogo \xE9 fogo, esquenta, esquenta que o Ara chegou, vai vai vai`,sp:"",sps:"https://open.spotify.com/search/Pipoca%20Ara%20Ketu"},{id:"a-fila-andou",t:"A Fila Andou",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Nanan\xE1 Nanananan\xE1 Nanan\xE1

Cansei de esperar na janela de casa
Desisti do seu jogo agora vou me virar
N\xE3o quero mais l\xE1grimas na minha vida
Cansei desse papo de te amar sozinho
O meu cora\xE7\xE3o t\xE1 pedindo carinho
J\xE1 virei a p\xE1gina da nossa rela\xE7\xE3o

J\xE1 deletei voc\xEA da minha vida
Sem nenhum rancor na despedida
o que passou, passou j\xE1 se esqueceu
N\xE3o volta mais
Tirei o seu perfume da mem\xF3ria
Botei um ponto final na nossa hist\xF3ria
Eu j\xE1 chorei, eu j\xE1 sofriMas j\xE1 te esqueci
Preciso ser feliz!

A fila andou Eu te falei
N\xE3o deu valor Como eu te amei
Agora chora J\xE1 me perdeu
Boa sorte, v\xE1 embora

A fila andouEu te falei N\xE3o deu valor
Como eu te amei Agora chora
Voc\xEA j\xE1 me perdeu, t\xF4 fora!!`,sp:"",sps:"https://open.spotify.com/search/A%20Fila%20Andou%20Chiclete%20com%20Banana"},{id:"doce-desejo",t:"Doce Desejo",artist:"Bruno & Marrone",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`T\xE1 no jeito de olhar,
T\xE1 no gosto do beijo,
Na express\xE3o do sorriso,
T\xE1 no meu para\xEDso
Meu doce desejo...

T\xE1 no cheiro da flor,
Estampado na cara,
T\xE1 na for\xE7a do amor,
Na beleza da cor,
T\xE1 pulsando e n\xE3o p\xE1ra...

Refr\xE3o
Meu amor \xE9 s\xF3 seu,
Seu amor \xE9 s\xF3 meu,
Nosso amor \xE9 assim,
Eu s\xF3 sei te querer,
Tamb\xE9m sei que voc\xEA s\xF3 tem olhos pra mim...`,sp:"",sps:"https://open.spotify.com/search/Doce%20Desejo%20Bruno%20%26%20Marrone"},{id:"meu-cabelo-duro-e-assim",t:"Meu Cabelo Duro \xC9 Assim",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Ah eu tou maluco!...
Meu cabelo duro \xE9 assim, cabelo duro, de pixaim (bis)

Nega n\xE3o precisa nem falar, \u2028nega n\xE3o precisa nem dizer
Que meu cabelo duro se parece \xE9 com voc\xEA

Belezaaaaa, uh!! \xC9 Festaaaa, uh!!
Chiclete com Banana, uh uh !! (bis)
Meu cabelo duro \xE9 assim, \u2028cabelo duro, de pixaim

Lelele le \xF4\xF4\xF4\xF4 Lelele le \xF4\xF4\xF4\xF4
Quem me ligou, n\xE3o disse al\xF4
Tou no chuveiro tou com calor
Tou resolvendo, pra onde eu vou
O seguran\xE7a toca o agog\xF4
Eu tou ligado ligado no meu cabelo duro, que \xE9 de pixaim
\xC9 de pixaim, \xE9 de pixaim
Oi oi
- E a m\xE3o pra cima batendo palma, ah eu tou maluco
(Refr\xE3o)`,sp:"",sps:"https://open.spotify.com/search/Meu%20Cabelo%20Duro%20%C3%89%20Assim%20Chiclete%20com%20Banana"},{id:"vou-voar",t:"Vou Voar",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Eu preciso encontrar um amor
Que me deixe arrasado na cama
Um amor que desperte desejo
Um amor que me cale com um beijo
Um amor que mova montanhas

um amor que n\xE3o tenha capricho
Um amor que me jogue no lixo
Um amor que esmague meu peito
Pode ser um amor infiel
Ou ent\xE3o que me leve pro c\xE9u
Um amor que me pegue de jeito

Eu vou voar, atr\xE1s desse amor
Vou encontrar, seja onde for
Eu quero esse amor (3x)

Um amor que bagunce minha vida
Que sufoque e n\xE3o deixe saida
Ou ent\xE3o que acalme o meu cora\xE7\xE3o
N\xE3o me importa
Eu quero encontrar um amor
\xC9 melhor do que a solid\xE3o`,sp:"",sps:"https://open.spotify.com/search/Vou%20Voar%20Chiclete%20com%20Banana"},{id:"paz-carnaval-futebol",t:"Paz, Carnaval, Futebol",artist:"Ax\xE9 Mondo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Paz, carnaval, futebol,
n\xE3o mata, n\xE3o engorda e n\xE3o faz mal.
Carnaval,fultebol, se joga para cima e vira sol.

Vai, vai, vai, fica aqui meu avi\xE3o.
Vem, vem, vem, que o brasil n\xE3o tem vulc\xE3o.
Vai, vai, vai, suba aqui na minha moto.
Vem, vem, vem, aqui n\xE3o tem terremoto.

Temporal... de calor,
tome um sorvete, o tempo \xE9 bom para o amor.
No polo sul, tem vento frio,
para namorar vem todo mundo atr\xE1s do trio.

Beija docinho, que estou doidinho, para te molhar \xE0 boca.
Insola\xE7\xE3o, febre, paix\xE3o, dei f\xE9rias ao meu cora\xE7\xE3o`,sp:"",sps:"https://open.spotify.com/search/Paz%2C%20Carnaval%2C%20Futebol%20Ax%C3%A9%20Mondo"},{id:"vamo-pula",t:"Vamo Pul\xE1!",artist:"Sandy & Junior",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Estou sentindo solta pelo ar
Uma energia que quer me dominar
\xC9 uma coisa boa que vem na minha dire\xE7\xE3o
Que me contagia e at\xE9 dispara o cora\xE7\xE3o

Eu acho que j\xE1 sei de onde vem
Essa for\xE7a que me deixa assim
Est\xE1 bem em frente \xE0 mim
\xC9 uma vibra\xE7\xE3o, \xE9 tanta emo\xE7\xE3o
Que o corpo quer se agitar
Prepare-se: voc\xEA far\xE1 uma viagem incr\xEDvel...
Quando eu terminar de contar
Aten\xE7\xE3o para a contagem regressiva: 5, 4, 3
Vamo pular, vamo pular, vamo pular, vamo pular

S\xF3 quem consegue sentir essa magia
Transforma qualquer lugar em alegria
E quando voc\xEA pular, pular at\xE9 suar
E n\xE3o se cansa
\xC9 pura adrenalina no ar
S\xF3 quem consegue sentir essa magia
Consegue entrar na mesma sintonia
E quando voc\xEA pular, pular at\xE9 suar
E n\xE3o se cansa \xE9 pura adrenalina no ar.`,sp:"",sps:"https://open.spotify.com/search/Vamo%20Pul%C3%A1%21%20Sandy%20%26%20Junior"},{id:"famo-a-billionaire",t:"Famo$a (Billionaire)",artist:"Claudia Leitte",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Eu quero ser muito famosa
E ter o seu amor
Mas quero sentar no sof\xE1 do J\xF4

Eu quero casar com voc\xEA
E estar na TV
Faturar milh\xF5es no BBB

Sempre que eu vou me deitar
Eu vejo o meu nome brilhar, \xF4, \xF4, \xF4
Mas sinto que se estou com voc\xEA eu tenho paz
E o que eu vou fazer, se eu quero muito mais?

[RAP - Travis "Travie" McCoy]

Yeah I would have a show like Oprah
I would be the host of, everyday Christmas
Give Travie a wish list
I'd probably pull an Angelina and Brad Pitt
And adopt a bunch of babies that ain't never had sh-t
Give away a few Mercedes like here lady have this
And last but not least grant somebody their last wish
It's been a couple months since I've single so
You can call me Travie Claus minus the Ho Ho
Get it, hehe, I'd probably visit where Katrina hit
And damn sure do a lot more than FEMA did
Yeah can't forget about me stupid
Everywhere I go Imma have my own theme music

Sempre que eu vou me deitar
Eu vejo o meu nome brilhar
Mas sinto que se estou com voc\xEA eu tenho paz
E o que vou fazer, se eu quero muito mais?
O, o, o, o, o, o, eu quero muito mais
O, o, o, o, o, o, eu quero muito mais

I'll be playing basketball with the President,
dunking on his delegates
Then I'll compliment him on his political etiquette
Toss a double milli in the air just for the heck of it
But keep the fives, twentys, tens, and bens
completely separate
And yeah I'll be in a whole new tax bracket
We in recession but let me take a crack at it
I'll probably take whatever's left and just split it up
So everybody that I love can have a couple bucks
And not a single tummy around me would know what
hungry was, Eating good, sleeping soundly
I know we all have a similar dream
Go in your pocket pull out your wallet
And put it in the air and sing

Eu quero ser muito famosa
E usar apenas Loboutins
Ter no twitter um milh\xE3o de f\xE3s
Eu quero um carr\xE3o blindado
E voc\xEA do lado
Quero o selinho da Hebe Camargo

Sempre que eu vou me deitar
Eu vejo o meu nome brilhar, oh n\xE3o, n\xE3o
Mas sinto que se estou com voc\xEA eu tenho paz
E o que eu vou fazer, se eu quero muito mais?
O, o, o, o, o, o, eu quero muito mais

Eu quero ser muito famosa
E ter o seu amor`,sp:"",sps:"https://open.spotify.com/search/Famo%24a%20%28Billionaire%29%20Claudia%20Leitte"},{id:"acelera-ae-noite-do-bem",t:"Acelera A\xEA (Noite do Bem)",artist:"Ivete Sangalo",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Nesse lance, vou nesse ritmo, tudo pode rolar
J\xE1 sei onde vou nessa onda, t\xF4 doido afim de dan\xE7ar
Solta o som pra animar a noite DJ
Todo mundo ligado na noite do bem

(Refr\xE3o 2x)
Acelera\xEA, o cora\xE7\xE3o
Que hoje \xE9 dia de Ivete
Acelera\xEA, o cora\xE7\xE3o
Que hoje \xE9 dia de Ivete
Aaaah

M\xE3o com m\xE3o, Eu voc\xEA curti\xE7\xE3o, o hit \xE9 bom
Pense bem, mente s\xE3, corpo s\xE3o
T\xF4 feliz, t\xF4 afim, t\xF4 legal
E nesse astral
Vou ficar at\xE9 amanhecer

(Refr\xE3o 2x)
Acelera\xEA, o cora\xE7\xE3o
Que hoje \xE9 dia de Ivete
Acelera\xEA, o cora\xE7\xE3o
Que hoje \xE9 dia de Ivete
Aaaah`,sp:"",sps:"https://open.spotify.com/search/Acelera%20A%C3%AA%20%28Noite%20do%20Bem%29%20Ivete%20Sangalo"},{id:"ta-lisinho",t:"T\xE1 Lisinho",artist:"Chiclete com Banana",pri:"Ax\xE9",tags:["Ax\xE9"],lyrics:`Eu ganhei o meu dia
Quando te encontrei
Aqui no meio da folia

Meus olhos em seus olhos
Paix\xE3o de carnaval
J\xE1 joguei meu charme t\xE3o sedutor
J\xE1 te fiz rainha em Salvador

E pra virar seu rei
Ganhar seu cora\xE7\xE3o
Espera que j\xE1 tenho a solu\xE7\xE3o

J\xE1 passei gilette meu rosto ta lisinho
Agora t\xF4 de boa pra ganhar beijinho
T\xE1 lisinho ta lisinho
Pra ganhar beijinho`,sp:"",sps:"https://open.spotify.com/search/T%C3%A1%20Lisinho%20Chiclete%20com%20Banana"}],setlists:[{id:"set-70-light",name:"70 light",src:"70 light.txt",songs:["night-fever","celebration","give-it-up","i-say-a-little-prayer-2"]},{id:"set-ain-t-no-mountain-high-enough",name:"Ain't No Mountain High Enough",src:"Ain't No Mountain High Enough .txt",songs:["you-ll-be-in-my-heart","what-a-wonderful-world","iris","con-te-partiro","pai-nosso"]},{id:"set-anos-50",name:"Anos 50",src:"Anos 50 .txt",songs:["let-s-twist-again","tutti-frutti","rock-around-the-clock","blue-suede-shoes","jailhouse-rock"]},{id:"set-anos-50-60",name:"Anos 50 _60",src:"Anos 50 _60.txt",songs:["let-s-twist-again","tutti-frutti","rock-around-the-clock","blue-suede-shoes","jailhouse-rock","biquini-de-bolinha-amarelinha"]},{id:"set-anos-80-nacional",name:"Anos 80 nacional",src:"Anos 80 nacional.txt",songs:["meu-erro","oculos","descobridor-dos-sete-mares","nao-quero-dinheiro-so-quero-amar","musica-urbana"]},{id:"set-anos-90",name:"anos 90",src:"anos 90.txt",songs:["a-little-respect","the-rhythm-of-the-night","mr-vain","what-is-love","run-to-you-verificar"]},{id:"set-rocks",name:"ROCKS",src:"ROCKS.txt",songs:["listen-to-the-music","have-you-ever-seen-the-rain","rock-and-roll-all-nite","i-can-t-get-no-satisfaction","born-to-be-wild","suddenly-i-see","kiss-me"]},{id:"set-boleros",name:"Boleros",src:"Boleros.txt",songs:["la-puerta","historia-de-un-amor","el-dia-que-me-quieras","la-barca","el-reloj"]},{id:"set-latinas",name:"Latinas",src:"Latinas.txt",songs:["sway","can-t-take-my-eyes-off-you","la-vida-es-un-carnaval","la-camisa-negra","corazon-espinado"]},{id:"set-forro",name:"Forro",src:"Forro.txt",songs:["medo-de-chuva","esperando-na-janela","nosso-xote","voce-nao-vale-nada"]},{id:"set-standards",name:"Standards",src:"Standards.txt",songs:["i-ve-got-you-under-my-skin","cheek-to-cheek","fly-me-to-the-moon","new-york-new-york"]},{id:"set-samba",name:"samba",src:"samba.txt",songs:["verdade-chinesa","agamamou","flor-de-lis","fato-consumado","ive-brussel","eu-fui","danca-do-bole-bole"]},{id:"set-samba-enredo",name:"samba enredo",src:"samba enredo.txt",songs:["peguei-um-ita-no-norte-salgueiro","gavioes-fiel","atras-da-verde-e-rosa-so-nao-vai-quem-ja-morreu-","o-que-e-o-que-e"]},{id:"set-samaba-enrredo-navio",name:"Samaba enrredo Navio",src:"Samaba enrredo Navio.txt",songs:["samba-enredo-1986-mangueira","bum-bum-paticumbum-prugurundum-verificar","peguei-um-ita-no-norte-salgueiro"]},{id:"set-sertanejo",name:"Sertanejo",src:"Sertanejo.txt",songs:["man-i-feel-like-a-woman","meteoro","o-jeito-e-da-uma-fugidinha","ciumenta","chora-me-liga","amo-noite-e-dia","paga-pau","leilao","que-pescar-que-nada","bebo-pra-carai","o-bicho-vai-pegar-o-chao-vai-tremer","pode-chorar","bala-de-prata","mala-pronta","vendaval","vou-fazer-pirraca","have-you-ever-seen-the-rain","borboletas","fada","como-um-anjo"]},{id:"set-bahia",name:"Bahia",src:"Bahia.txt",songs:["my-girl","let-s-stay-together","sexbomb","crazy-little-thing-called-love","i-was-born-to-love-you"]},{id:"set-dance",name:"Dance",src:"Dance.txt",songs:["i-gotta-feeling","stereo-love","rise-up","bad-romance-poker-face-medley-lady-gaga","loca","club-can-t-handle-me","crazy-in-love","love-is-gone","love-generation","let-me-think-about-it","i-don-t-know-why","set-me-free"]},{id:"set-show-michael",name:"Show Michael",src:"Show Michael.txt",songs:["thriller","ben","i-ll-be-there","i-want-you-back","abc","billie-jean","bad","beat-it","ain-t-no-sunshine","the-girl-is-mine","you-are-not-alone","they-don-t-care-about-us","human-nature","black-or-white","heal-the-world","smooth-criminal"]},{id:"set-lentas-dancantes",name:"Lentas dan\xE7antes",src:"Lentas dan\xE7antes.txt",songs:["do-you-wanna-dance","stand-by-me","rock-and-roll-lullaby","put-your-records-on","how-deep-is-your-love","cruisin","i-ll-be-over-you","fallen","everything"]},{id:"set-lentas-e-baladas",name:"Lentas e Baladas",src:"Lentas e Baladas .txt",songs:["easy","dona","eu-te-devoro","final-feliz","don-t-know-why","how-deep-is-your-love","my-girl","new-york-new-york","besame-mucho","i-ve-had-the-time-of-my-life","corazon-espinado"]},{id:"set-fox-lento",name:"Fox Lento",src:"Fox Lento.txt",songs:["unforgettable","the-way-you-look-tonight","close-to-you","can-t-smile-without-you"]},{id:"set-fox-linha",name:"Fox linha",src:"Fox linha.txt",songs:["i-left-my-heart-in-san-francisco","new-york-new-york","i-ve-got-you-under-my-skin","hello-detroit","just-a-gigolo","cheek-to-cheek","fly-me-to-the-moon"]},{id:"set-rmaonticas-linha",name:"Rmaonticas Linha",src:"Rmaonticas Linha.txt",songs:["easy","beauty-and-the-beast","endless-love","hero","after-the-love-has-gone","i-just-wanna-stop"]},{id:"set-standards-new-times",name:"Standards NEW TIMES",src:"Standards NEW TIMES.txt",songs:["emocoes","new-york-new-york","they-can-t-take-that-away-from-me","for-once-in-my-life","fly-me-to-the-moon","i-ve-got-you-under-my-skin","beyond-the-sea","hello-detroit","all-of-me","cheek-to-cheek"]},{id:"set-apos-jantar-new-times",name:"ap\xF3s jantar NEW TIMES",src:"ap\xF3s jantar NEW TIMES.txt",songs:["have-you-ever-seen-the-rain","proud-mary","i-can-t-get-no-satisfaction","twist-and-shout","a-hard-day-s-night","i-wanna-hold-your-hand","stayin-alive","summer-nights","you-re-the-one-that-i-want","johnny-b-goode","blue-suede-shoes","pode-vir-quente-que-eu-estou-fervendo","menina-linda","festa-de-arromba","o-bom","rua-augusta","listen-to-the-music","rock-and-roll-all-nite","born-to-be-wild","suddenly-i-see","kiss-me"]},{id:"set-show-du-rio-a-pari",name:"Show Du rio a Pari",src:"Show Du rio a Pari.txt",songs:["on-the-floor","chorando-se-foi-llorando-se-fue-lambada","c-est-une-bossa-nova","for-me-formidable","la-vie-en-rose","non-je-ne-regrette-rien","padam-padam","et-si-tu-n-existais-pas","besame-mucho-versao-francesa","bye-bye"]},{id:"set-sunset-2012",name:"sunset 2012",src:"sunset 2012.txt",songs:["new-york-new-york","hello-detroit","just-a-gigolo","can-t-take-my-eyes-off-you"]},{id:"set-dance-1-atmosfera",name:"Dance 1 Atmosfera",src:"Dance 1 Atmosfera.txt",songs:["hello","sexy-and-i-know-it","party-rock-anthem","take-over-control","getting-over-you","where-them-girls-at","the-time-dirty-bit"]},{id:"set-dance-2-atmosfera",name:"Dance 2 Atmosfera",src:"Dance 2 Atmosfera.txt",songs:["loca","dynamite","last-friday-night-t-g-i-f","only-girl-in-the-world","moves-like-jagger","give-me-everything","i-wanna-go","till-the-world-ends","rabiosa"]},{id:"set-grease-megamix",name:"Grease Megamix",src:"Grease Megamix.txt",songs:["greased-lightnin-you-re-the-one-that-i-want","summer-nights"]},{id:"set-marchinhas-de-carnaval-1",name:"Marchinhas de carnaval 1",src:"Marchinhas de carnaval 1.txt",songs:["o-teu-cabelo-nao-nega","a-cabeleira-do-zeze","me-da-um-dinheiro-ai","colombina-ie-ie-ie","maria-sapatao","bota-camisinha","tai-pra-voce-gostar-de-mim","mulata-ie-ie-ie","me-da-um-gelinho","coracao-corinthiano","saca-rolha"]},{id:"set-bela-e-a-fera-e-over-the-rainbow",name:"bela e a fera e over the rainbow",src:"bela e a fera e over the rainbow.txt",songs:["beauty-and-the-beast","somewhere-over-the-rainbow-what-a-wonderful-worl"]},{id:"set-casa-sao-roque",name:"Casa Sao roque",src:"Casa Sao roque.txt",songs:["em-nome-do-nosso-amor","ceu-de-santo-amaro-verificar","she"]},{id:"set-pai-nosso-e-conte",name:"pai nosso e conte",src:"pai nosso e conte.txt",songs:["con-te-partiro","pai-nosso","como-e-grande-o-meu-amor-por-voce"]},{id:"set-medley-bon-voyage-2012",name:"Medley Bon Voyage 2012",src:"Medley Bon Voyage 2012 .txt",songs:["je-t-aime-moi-non-plus","c-est-si-bon","l-amerique","i-love-america"]},{id:"set-medley-boney-m-bon-voyage",name:"Medley Boney M (Bon Voyage)",src:"Medley Boney M (Bon Voyage).txt",songs:["rivers-of-babylon","daddy-cool","sunny","ma-baker"]},{id:"set-medley-rock-and-roll-french",name:"Medley Rock And Roll French",src:"Medley Rock And Roll French.txt",songs:["rock-and-roll-mops","t-as-l-bonjour-d-alfred","ca-rock-ca-va-verificar"]},{id:"set-cerimonia",name:"Cerimonia",src:"Cerimonia.txt",songs:["one","the-prayer","can-you-feel-the-love-tonight","can-t-help-falling-in-love","perhaps-love","she","somewhere-over-the-rainbow","tudo-que-se-quer","all-i-ask-of-you","you-ll-be-in-my-heart","what-a-wonderful-world","iris","con-te-partiro","pai-nosso"]},{id:"set-axe-mid",name:"axe mid",src:"axe mid.txt",songs:["we-are-the-world-of-carnaval","beijar-na-boca","erva-venenosa","empurra-empurra","bomba","eva","o-neguinha-vixe-mainha","amor-perfeito","100-voce","o-araketu-e-bom-demais","abalou","praieiro","extravasa","sorte-grande-poeira","rebolation","pancadao","ela-e-toda-boa","brincadeira-da-tomada","danca-da-maozinha","caranguejo","agua-mineral","joga-agua","beber-cair-e-levantar","xo-satanas","minha-mulher-nao-deixa-nao","saia-e-bicicletinha","piriri-pom-pom","na-base-do-beijo","ceu-da-boca","a-galera","berimbau-metalizado","coracao","bola-de-sabao","lirirrixa","flor-do-reggae","quero-chiclete","simbora","pais-tropical-arere-taj-mahal","bota-pra-ferver","lobo-mau","tchubirabiron","explosao","olha-a-onda","danca-do-vampiro","danca-da-manivela","tchau-i-have-to-go-now","festa","canibal","bate-lata","safado-cachorro-sem-vergonha","carro-velho","milla","pipoca","a-fila-andou","doce-desejo","meu-cabelo-duro-e-assim","vou-voar","paz-carnaval-futebol","vamo-pula","famo-a-billionaire","acelera-ae-noite-do-bem","ta-lisinho"]}],estilos:["Ax\xE9","Rock","Dance","Balada","Sertanejo","Pop","Francesa","Casamento","Samba","Marchinha","Jazz/Standard","Diversos","Baile","Latina","Bolero","Anos 50","Anos 80","Anos 90","Anos 70","Forr\xF3","Internacional","Anos 50/60","Trilha","Soul"]},SEED_SONGS=SEED.songs||[],SEED_SETLISTS=SEED.setlists||[],ESTILOS=SEED.estilos||[],ALL_TAGS=(()=>{const e={};return SEED_SONGS.forEach(n=>(n.tags||[]).forEach(a=>e[a]=(e[a]||0)+1)),Object.keys(e).sort((n,a)=>e[a]-e[n])})(),ESTILO_COR={};(()=>{const e=[C.green,C.gold,C.rose,C.violet,C.blue,"#ff9d5c","#6ee7b7","#f0abfc"];ESTILOS.forEach((n,a)=>ESTILO_COR[n]=e[a%e.length])})();const SEED_VERSION=1,S={async get(e){try{const{data:n}=await SB.from("cantor_kv").select("value").eq("key",e).maybeSingle();return n?n.value:null}catch(n){return console.error(n),null}},async set(e,n){try{return await SB.from("cantor_kv").upsert({key:e,value:n,updated_at:new Date().toISOString()}),!0}catch(a){return console.error(a),!1}}},uid=e=>(e||"u")+Date.now().toString(36)+Math.random().toString(36).slice(2,6),norm=e=>(e||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,""),nt=e=>norm(e).replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim(),driveEmbed=e=>{const n=(e||"").match(/\/d\/([A-Za-z0-9_-]+)/);return n?`https://drive.google.com/file/d/${n[1]}/preview`:e},SH=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],ENH={Db:"C#",Eb:"D#",Gb:"F#",Ab:"G#",Bb:"A#",Cb:"B",Fb:"E","E#":"F","B#":"C"};function shiftRoot(e,n){let a=ENH[e]||e,i=SH.indexOf(a);return i<0?e:SH[((i+n)%12+12)%12]}const CH_RE=/^([A-G](?:#|b)?)((?:maj|min|sus|add|dim|aug|m|M|°|º|\+|\d|\(|\)|b|#|\.)*)(?:\/([A-G](?:#|b)?))?$/;function isChordToken(e){return e?!!e.match(CH_RE):!1}function transposeToken(e,n){const a=e.match(CH_RE);if(!a)return e;let i=shiftRoot(a[1],n)+(a[2]||"");return a[3]&&(i+="/"+shiftRoot(a[3],n)),i}function isChordLine(e){const n=e.trim().split(/\s+/).filter(Boolean);return n.length?n.filter(isChordToken).length/n.length>=.6:!1}function transposeText(e,n){return!n||!e?e:e.split(`
`).map(a=>isChordLine(a)?a.replace(/\S+/g,i=>isChordToken(i)?transposeToken(i,n):i):a).join(`
`)}function App(){const[e,n]=useState(!0),[a,i]=useState("musicas"),[p,s]=useState({}),[g,c]=useState([]),[r,m]=useState([]),[u,y]=useState({font:19}),[t,v]=useState(null),[b,I]=useState(null),[l,d]=useState(null),[w,A]=useState(null),[f,T]=useState(null),[q,B]=useState(()=>{try{return localStorage.getItem("ct_editor")==="1"}catch(o){return!1}}),[G,x]=useState(!1),L=useRef({}),D=useCallback(async()=>{const[o,h,E,J,K,_]=await Promise.all([S.get("ct_over"),S.get("ct_added"),S.get("ct_setlists"),S.get("ct_settings"),S.get("ct_seedV"),S.get("ct_pin")]);K!==SEED_VERSION&&await S.set("ct_seedV",SEED_VERSION),s(o||{}),c(h||[]),m(E&&E.length?E:SEED_SETLISTS),E&&E.length||S.set("ct_setlists",SEED_SETLISTS),y(k({font:19},J||{})),T(_||null),n(!1)},[]);useEffect(()=>{D();const o=SB.channel("cantor_kv_rt").on("postgres_changes",{event:"*",schema:"public",table:"cantor_kv"},()=>D()).subscribe();return()=>{try{SB.removeChannel(o)}catch(h){}}},[D]);const M=(o,h,E)=>{E(h),L.current[o]&&clearTimeout(L.current[o]),L.current[o]=setTimeout(()=>S.set(o,h),600)},U=o=>M("ct_over",o,s),j=o=>M("ct_added",o,c),z=o=>M("ct_setlists",o,m),Y=o=>M("ct_settings",o,y),N=useMemo(()=>SEED_SONGS.filter(h=>!(p[h.id]&&p[h.id].hidden)).map(h=>k(k({},h),p[h.id]||{})).concat(g),[p,g]),R=useMemo(()=>{const o={};return N.forEach(h=>o[h.id]=h),o},[N]),P=(o,h)=>{o.startsWith("u")?j(g.map(E=>E.id===o?k(k({},E),h):E)):U(O(k({},p),{[o]:k(k({},p[o]||{}),h)}))},W=o=>{const h=k({id:uid("u")},o);return j([...g,h]),h.id},Q=o=>{const h=(o||"").trim();if(!f){if(h.length<4)return"Defina uma senha com ao menos 4 d\xEDgitos.";S.set("ct_pin",h),T(h),B(!0);try{localStorage.setItem("ct_editor","1")}catch(E){}return""}if(h===f){B(!0);try{localStorage.setItem("ct_editor","1")}catch(E){}return""}return"Senha incorreta."},H=()=>{B(!1);try{localStorage.removeItem("ct_editor")}catch(o){}};if(e)return React.createElement("div",{style:{background:C.bg,color:C.txt},className:"min-h-screen flex items-center justify-center p-6"},React.createElement("div",{className:"text-center"},React.createElement("div",{style:{width:64,height:64,borderRadius:18,background:`linear-gradient(135deg, ${C.violet}, ${C.green})`},className:"mx-auto mb-4 flex items-center justify-center"},React.createElement(Music,{size:30,style:{color:"#0c1622"}})),React.createElement("p",{style:{color:C.mut},className:"flex items-center justify-center gap-2"},React.createElement(Music,{size:18,style:{color:C.gold},className:"animate-pulse"})," Carregando o repert\xF3rio\u2026")));const oe=o=>r.find(h=>h.id===o);return React.createElement("div",{style:{background:C.bg,color:C.txt,minHeight:"100vh",fontFamily:"system-ui, sans-serif"}},React.createElement("div",{style:{background:`linear-gradient(135deg, ${C.card2}, ${C.card})`,borderBottom:`1px solid ${C.line}`},className:"px-4 pt-4 pb-3 sticky top-0 z-20"},React.createElement("div",{className:"flex items-center gap-2"},React.createElement("div",{style:{width:34,height:34,borderRadius:10,background:`linear-gradient(135deg, ${C.violet}, ${C.green})`},className:"flex items-center justify-center shrink-0"},React.createElement(Music,{size:18,style:{color:"#0c1622"}})),React.createElement("div",{className:"leading-tight"},React.createElement("h1",{className:"font-bold"},"Repert\xF3rio do Cantor"),React.createElement("p",{className:"text-xs",style:{color:C.mut}},"Thiago \xB7 ",N.length," m\xFAsicas")),React.createElement("button",{onClick:()=>q?H():x(!0),title:q?"Sair do modo edi\xE7\xE3o":"Entrar no modo edi\xE7\xE3o",style:{background:C.card2,color:q?C.gold:C.mut,marginLeft:"auto"},className:"px-2.5 py-2 rounded-lg flex items-center gap-1 text-xs shrink-0"},q?React.createElement(Unlock,{size:15}):React.createElement(Lock,{size:15}),q?React.createElement("span",null,"edi\xE7\xE3o"):null))),React.createElement("div",{className:"p-3 pb-24 max-w-2xl mx-auto"},a==="musicas"&&React.createElement(Repertorio,{songs:N,onPlay:o=>v(o),onAdd:W,onEdit:o=>d(o),editor:q}),a==="setlists"&&React.createElement(Setlists,{setlists:r,songById:R,onOpen:o=>A(o),saveSetlists:z,editor:q,onOpenLock:()=>x(!0)}),a==="ajustes"&&React.createElement(Ajustes,{settings:u,saveSettings:Y,songs:N,setlists:r,editor:q,hasPin:!!f,pin:f,onLock:H,onOpenLock:()=>x(!0),savePin:o=>{S.set("ct_pin",o),T(o)}})),React.createElement("nav",{style:{background:C.card,borderTop:`1px solid ${C.line}`},className:"fixed bottom-0 left-0 right-0 z-20"},React.createElement("div",{className:"max-w-2xl mx-auto grid grid-cols-3"},[{k:"musicas",ic:Music,lb:"M\xFAsicas"},{k:"setlists",ic:ListMusic,lb:"Setlists"},{k:"ajustes",ic:Settings,lb:"Ajustes"}].map(({k:o,ic:h,lb:E})=>React.createElement("button",{key:o,onClick:()=>i(o),className:"py-2.5 flex flex-col items-center gap-0.5",style:{color:a===o?C.gold:C.mut}},React.createElement(h,{size:20}),React.createElement("span",{style:{fontSize:10.5}},E))))),t&&React.createElement(Player,{song:R[t],settings:u,saveSettings:Y,updateSong:P,editor:q,onEdit:o=>{v(null),d(o)},openViewer:(o,h)=>I({url:o,title:h}),onClose:()=>v(null)}),b&&React.createElement(PdfViewer,{url:b.url,title:b.title,onClose:()=>I(null)}),l&&React.createElement(AddSong,{initial:l,estilos:ESTILOS,onClose:()=>d(null),onSave:o=>{l.id?P(l.id,o):W(o),d(null)}}),G&&React.createElement(LockModal,{hasPin:!!f,onClose:()=>x(!1),onSubmit:o=>Q(o)}),w&&React.createElement(SetlistEditor,{sid:w,setlists:r,saveSetlists:z,songs:N,songById:R,editor:q,onPlay:o=>v(o),onClose:()=>A(null)}))}function Repertorio({songs:e,onPlay:n,onAdd:a,onEdit:i,editor:p}){const[s,g]=useState(""),[c,r]=useState("Todos"),[m,u]=useState("Todas"),[y,t]=useState(!1),v=useMemo(()=>{const b=nt(s),I=b.split(" ").filter(Boolean);let l=e.filter(d=>{if(c!=="Todos"&&d.pri!==c||m!=="Todas"&&!(d.tags||[]).includes(m))return!1;if(!I.length)return!0;const w=nt((d.t||"")+" "+(d.artist||""));return I.every(A=>w.includes(A))});if(I.length){const d=w=>{const A=nt(w.t);return A===b?0:A.startsWith(b)?1:I[0]&&A.startsWith(I[0])?2:A.includes(b)?3:4};l=l.slice().sort((w,A)=>d(w)-d(A)||w.t.localeCompare(A.t,"pt"))}else l=l.slice().sort((d,w)=>d.t.localeCompare(w.t,"pt"));return l.slice(0,400)},[e,s,c,m]);return React.createElement("div",null,React.createElement("div",{className:"relative mb-2"},React.createElement(Search,{size:16,style:{color:C.mut},className:"absolute left-3 top-1/2 -translate-y-1/2"}),React.createElement("input",{value:s,onChange:b=>g(b.target.value),placeholder:"Buscar por t\xEDtulo ou artista\u2026",style:{background:C.card,border:`1px solid ${C.line}`,color:C.txt},className:"w-full pl-9 pr-3 py-2.5 rounded-xl outline-none"})),React.createElement("div",{className:"flex gap-2 overflow-x-auto pb-2"},React.createElement(Sel,{value:c,onChange:r,options:["Todos",...ESTILOS]}),React.createElement(Sel,{value:m,onChange:u,options:["Todas",...ALL_TAGS]}),p&&React.createElement("button",{onClick:()=>t(!0),style:{background:C.gold,color:"#2b2100"},className:"px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap flex items-center gap-1"},React.createElement(Plus,{size:14})," Nova")),React.createElement("p",{className:"text-xs mb-2",style:{color:C.mut}},v.length," m\xFAsica(s)"),React.createElement("div",{className:"space-y-2"},v.map(b=>React.createElement(SongRow,{key:b.id,s:b,onPlay:n,onEdit:i,editor:p}))),y&&React.createElement(AddSong,{estilos:ESTILOS,onClose:()=>t(!1),onSave:b=>{a(b),t(!1)}}))}function spLink(e){return e&&(e.sp||e.sps)||""}function SongRow({s:e,onPlay:n,onEdit:a,editor:i}){return React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full p-3 rounded-xl flex items-center gap-2"},React.createElement("button",{onClick:()=>n(e.id),className:"flex items-center gap-3 min-w-0 flex-1 text-left active:opacity-70"},React.createElement("div",{style:{background:C.card2,color:ESTILO_COR[e.pri]||C.gold,minWidth:40},className:"px-2 py-2 rounded-lg flex items-center justify-center"},React.createElement(Music,{size:16})),React.createElement("div",{className:"min-w-0 flex-1"},React.createElement("p",{className:"font-semibold truncate"},e.t),React.createElement("div",{className:"flex items-center gap-2 text-xs mt-0.5",style:{color:C.mut}},e.artist?React.createElement("span",{className:"truncate"},e.artist):null,React.createElement("span",{style:{color:ESTILO_COR[e.pri]||C.mut}},"\xB7 ",e.pri)))),spLink(e)?React.createElement("a",{href:spLink(e),target:"_blank",rel:"noreferrer",title:"Ouvir no Spotify",style:{background:C.card2,color:C.green},className:"p-2 rounded-lg shrink-0"},React.createElement(Spotify,{size:18})):null,i?React.createElement("button",{onClick:()=>a(e),title:"Editar",style:{background:C.card2,color:C.gold},className:"p-2 rounded-lg shrink-0"},React.createElement(Pencil,{size:16})):null,React.createElement("button",{onClick:()=>n(e.id),title:"Abrir letra",style:{color:C.gold},className:"p-1.5 shrink-0"},React.createElement(Play,{size:18})))}function Sel({value:e,onChange:n,options:a}){return React.createElement("select",{value:e,onChange:i=>n(i.target.value),style:{background:C.card,border:`1px solid ${C.line}`,color:C.txt},className:"px-3 py-1.5 rounded-full text-xs outline-none max-w-[46%]"},a.map(i=>React.createElement("option",{key:i,value:i},i)))}function Player({song:e,settings:n,saveSettings:a,updateSong:i,editor:p,onEdit:s,openViewer:g,onClose:c}){const[r,m]=useState(0),[u,y]=useState(!1),[t,v]=useState(0),b=useRef(null),I=n.font||19;if(useEffect(()=>{m(0),y(!1),v(0)},[e&&e.id]),useEffect(()=>{if(!r||!b.current)return;const f=b.current,T=setInterval(()=>{f.scrollTop+=r},60);return()=>clearInterval(T)},[r]),!e)return null;const l=spLink(e),d=u&&e.cifra?transposeText(e.cifra,t):e.letra||"",w=d.split(`
`),A=u&&e.cifra;return React.createElement("div",{style:{background:C.bg,color:C.txt},className:"fixed inset-0 z-[60] flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:`1px solid ${C.line}`},className:"px-3 py-2 flex items-center gap-2 sticky top-0"},React.createElement("button",{onClick:c,style:{background:C.card2},className:"p-2 rounded-lg"},React.createElement(X,{size:18})),React.createElement("div",{className:"min-w-0 flex-1"},React.createElement("p",{className:"font-bold truncate"},e.t),React.createElement("p",{className:"text-xs truncate",style:{color:C.mut}},e.artist?e.artist+" \xB7 ":"",e.pri)),p?React.createElement("button",{onClick:()=>s(e),title:"Editar",style:{background:C.card2,color:C.gold},className:"p-2 rounded-lg"},React.createElement(Pencil,{size:16})):null),React.createElement("div",{style:{background:C.card2,borderBottom:`1px solid ${C.line}`},className:"px-3 py-2 flex items-center gap-2 flex-wrap text-xs"},React.createElement("div",{className:"flex items-center gap-1"},React.createElement(Type,{size:13,style:{color:C.mut}}),React.createElement("button",{onClick:()=>a(O(k({},n),{font:Math.max(13,I-1)})),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Minus,{size:14})),React.createElement("span",{style:{minWidth:22},className:"text-center"},I),React.createElement("button",{onClick:()=>a(O(k({},n),{font:Math.min(34,I+1)})),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Plus,{size:14}))),React.createElement("div",{className:"flex items-center gap-1"},React.createElement("button",{onClick:()=>m(f=>f>0?0:1),style:{background:r?C.gold:C.card,color:r?"#2b2100":C.txt},className:"p-1.5 rounded-lg flex items-center gap-1"},r?React.createElement(Pause,{size:14}):React.createElement(Play,{size:14}),React.createElement("span",null,"rolar")),r>0&&React.createElement("input",{type:"range",min:"1",max:"5",value:r,onChange:f=>m(Number(f.target.value)),className:"w-16"})),A?React.createElement("div",{className:"flex items-center gap-1"},React.createElement("span",{style:{color:C.mut}},"Tom"),React.createElement("button",{onClick:()=>v(f=>f-1),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Minus,{size:14})),React.createElement("span",{style:{color:C.gold,minWidth:26},className:"text-center font-bold"},t>0?"+"+t:t),React.createElement("button",{onClick:()=>v(f=>f+1),style:{background:C.card},className:"p-1.5 rounded-lg"},React.createElement(Plus,{size:14}))):null,e.cifra?React.createElement("button",{onClick:()=>y(f=>!f),style:{background:u?C.gold:C.card,color:u?"#2b2100":C.txt},className:"px-2.5 py-1.5 rounded-lg font-semibold"},u?"Ver letra":"Ver cifra"):null,e.u?React.createElement("button",{onClick:()=>g(e.u,e.t),style:{background:C.blue,color:"#04203f"},className:"px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-1"},React.createElement(FileText,{size:13})," PDF"):null,l?React.createElement("a",{href:l,target:"_blank",rel:"noreferrer",style:{background:C.green,color:"#04261b"},className:"ml-auto px-2.5 py-1.5 rounded-lg font-semibold flex items-center gap-1"},React.createElement(Spotify,{size:14})," Spotify"):null),React.createElement("div",{ref:b,className:"flex-1 px-4 py-4",style:{overflow:"auto",scrollBehavior:"smooth",WebkitOverflowScrolling:"touch"}},d.trim()?A?React.createElement("pre",{style:{fontFamily:"ui-monospace, Menlo, monospace",fontSize:I,lineHeight:1.5,whiteSpace:"pre",display:"inline-block",minWidth:"100%"}},w.map((f,T)=>isChordLine(f)?React.createElement("div",{key:T,style:{color:C.gold,fontWeight:700}},f||"\xA0"):React.createElement("div",{key:T},f||"\xA0"))):React.createElement("div",{style:{fontSize:I,lineHeight:1.55,whiteSpace:"pre-wrap",wordBreak:"break-word",maxWidth:640,margin:"0 auto"}},w.map((f,T)=>React.createElement("div",{key:T,style:f.trim()?null:{height:I*.7}},f))):React.createElement("div",{className:"text-center py-10",style:{color:C.mut}},React.createElement(Music,{size:40,className:"mx-auto mb-3"}),React.createElement("p",null,"Sem letra cadastrada ainda."))))}function Setlists({setlists:e,songById:n,onOpen:a,saveSetlists:i,editor:p,onOpenLock:s}){const[g,c]=useState(""),r=useMemo(()=>{const u=nt(g);return e.filter(y=>!u||nt(y.name).includes(u)).slice().sort((y,t)=>y.name.localeCompare(t.name,"pt"))},[e,g]),m=()=>{const u=(prompt("Nome do novo setlist:")||"").trim();u&&i([...e,{id:uid("set"),name:u,style:"",songs:[]}])};return React.createElement("div",null,React.createElement("div",{className:"flex items-center gap-2 mb-3"},React.createElement("div",{className:"relative flex-1"},React.createElement(Search,{size:16,style:{color:C.mut},className:"absolute left-3 top-1/2 -translate-y-1/2"}),React.createElement("input",{value:g,onChange:u=>c(u.target.value),placeholder:"Buscar setlist\u2026",style:{background:C.card,border:`1px solid ${C.line}`,color:C.txt},className:"w-full pl-9 pr-3 py-2.5 rounded-xl outline-none"})),p?React.createElement("button",{onClick:m,style:{background:C.gold,color:"#2b2100"},className:"px-3 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-1 shrink-0"},React.createElement(Plus,{size:15})," Novo"):React.createElement("button",{onClick:s,style:{background:C.card2,color:C.mut},className:"px-3 py-2.5 rounded-xl text-sm flex items-center gap-1 shrink-0"},React.createElement(Lock,{size:14}))),React.createElement("p",{className:"text-xs mb-2",style:{color:C.mut}},r.length," setlist(s) \u2014 seus repert\xF3rios por estilo/evento"),React.createElement("div",{className:"space-y-2"},r.map(u=>React.createElement("button",{key:u.id,onClick:()=>a(u.id),style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full text-left p-3 rounded-xl flex items-center gap-3 active:opacity-70"},React.createElement("div",{style:{background:C.card2,color:C.violet,minWidth:40},className:"p-2 rounded-lg flex items-center justify-center"},React.createElement(ListMusic,{size:18})),React.createElement("div",{className:"min-w-0 flex-1"},React.createElement("p",{className:"font-semibold truncate"},u.name),React.createElement("p",{className:"text-xs",style:{color:C.mut}},(u.songs||[]).length," m\xFAsica(s)")),React.createElement(ChevronRight,{size:18,style:{color:C.mut}})))))}function SetlistEditor({sid:e,setlists:n,saveSetlists:a,songs:i,songById:p,editor:s,onPlay:g,onClose:c}){const r=n.find(l=>l.id===e)||{name:"",songs:[]},[m,u]=useState(!1),y=l=>a(n.map(d=>d.id===e?k(k({},d),l):d)),t=(r.songs||[]).map(l=>p[l]).filter(Boolean),v=(l,d)=>{const w=[...r.songs],A=l+d;A<0||A>=w.length||([w[l],w[A]]=[w[A],w[l]],y({songs:w}))},b=l=>y({songs:r.songs.filter((d,w)=>w!==l)}),I=()=>{confirm("Excluir este setlist? (as m\xFAsicas continuam no repert\xF3rio)")&&(a(n.filter(l=>l.id!==e)),c())};return React.createElement("div",{style:{background:C.bg,color:C.txt},className:"fixed inset-0 z-40 flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:`1px solid ${C.line}`},className:"px-3 py-2 flex items-center gap-2 sticky top-0"},React.createElement("button",{onClick:c,style:{background:C.card2},className:"p-2 rounded-lg"},React.createElement(X,{size:18})),React.createElement("div",{className:"min-w-0 flex-1"},s?React.createElement("input",{value:r.name,onChange:l=>y({name:l.target.value}),style:{background:"transparent",color:C.txt},className:"font-bold w-full outline-none"}):React.createElement("p",{className:"font-bold truncate"},r.name),React.createElement("p",{className:"text-xs",style:{color:C.mut}},t.length," m\xFAsica(s)")),s?React.createElement("button",{onClick:I,style:{color:C.danger},className:"p-2"},React.createElement(Trash2,{size:18})):null),React.createElement("div",{className:"overflow-y-auto flex-1 p-3 space-y-3"},s&&React.createElement("button",{onClick:()=>u(!0),style:{background:C.gold,color:"#2b2100"},className:"px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"},React.createElement(Plus,{size:14})," Adicionar m\xFAsica"),t.length===0&&React.createElement("p",{className:"text-xs",style:{color:C.mut}},"Setlist vazio."),React.createElement("div",{className:"space-y-2"},t.map((l,d)=>React.createElement("div",{key:l.id+d,style:{background:C.card,border:`1px solid ${C.line}`},className:"p-2.5 rounded-xl flex items-center gap-2"},React.createElement("span",{style:{color:C.mut,minWidth:20},className:"text-xs text-center"},d+1),s?React.createElement("div",{className:"flex flex-col"},React.createElement("button",{onClick:()=>v(d,-1),style:{color:C.mut},className:"p-0.5"},React.createElement(ArrowUp,{size:14})),React.createElement("button",{onClick:()=>v(d,1),style:{color:C.mut},className:"p-0.5"},React.createElement(ArrowDown,{size:14}))):null,React.createElement("button",{onClick:()=>g(l.id),className:"min-w-0 flex-1 text-left"},React.createElement("p",{className:"font-medium truncate text-sm"},l.t),React.createElement("p",{className:"text-xs",style:{color:C.mut}},l.artist?l.artist+" \xB7 ":"",React.createElement("span",{style:{color:ESTILO_COR[l.pri]}},l.pri))),spLink(l)?React.createElement("a",{href:spLink(l),target:"_blank",rel:"noreferrer",style:{color:C.green},className:"p-1.5"},React.createElement(Spotify,{size:16})):null,s?React.createElement("button",{onClick:()=>b(d),style:{color:C.danger},className:"p-1.5"},React.createElement(Trash2,{size:15})):null)))),m&&React.createElement(SongPicker,{songs:i,onClose:()=>u(!1),onPick:l=>y({songs:[...r.songs||[],l]})}))}function SongPicker({songs:e,onClose:n,onPick:a}){const[i,p]=useState(""),[s,g]=useState("Todos"),c=useMemo(()=>{const m=nt(i).split(" ").filter(Boolean);return e.filter(y=>{if(s!=="Todos"&&y.pri!==s)return!1;if(!m.length)return!0;const t=nt((y.t||"")+" "+(y.artist||""));return m.every(v=>t.includes(v))}).slice().sort((y,t)=>y.t.localeCompare(t.t,"pt")).slice(0,300)},[e,i,s]);return React.createElement("div",{style:{background:"rgba(0,0,0,0.6)"},className:"fixed inset-0 z-50 flex items-end sm:items-center justify-center"},React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full max-w-lg rounded-t-2xl sm:rounded-2xl max-h-[85vh] flex flex-col"},React.createElement("div",{className:"p-3 border-b",style:{borderColor:C.line}},React.createElement("div",{className:"flex items-center justify-between mb-2"},React.createElement("p",{className:"font-semibold"},"Adicionar m\xFAsica"),React.createElement("button",{onClick:n},React.createElement(X,{size:18,style:{color:C.mut}}))),React.createElement("input",{value:i,onChange:r=>p(r.target.value),placeholder:"Buscar\u2026",style:inp,autoFocus:!0}),React.createElement("div",{className:"mt-2"},React.createElement(Sel,{value:s,onChange:g,options:["Todos",...ESTILOS]}))),React.createElement("div",{className:"overflow-y-auto p-2 space-y-1"},c.map(r=>React.createElement("button",{key:r.id,onClick:()=>{a(r.id),n()},style:{background:C.card2},className:"w-full text-left p-2.5 rounded-lg flex items-center gap-2 active:opacity-70"},React.createElement("span",{className:"min-w-0 flex-1 truncate text-sm"},r.t,React.createElement("span",{style:{color:C.mut}}," \xB7 ",r.artist)),React.createElement("span",{className:"text-xs shrink-0",style:{color:ESTILO_COR[r.pri]}},r.pri))))))}function Ajustes({settings:e,saveSettings:n,songs:a,setlists:i,editor:p,hasPin:s,pin:g,onLock:c,onOpenLock:r,savePin:m}){const u=a.filter(t=>(t.letra||"").length>10).length,y=a.filter(t=>t.sp).length;return React.createElement("div",{className:"space-y-4"},React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"rounded-xl p-4 space-y-2"},React.createElement("p",{className:"font-semibold",style:{color:C.gold}},"Senha de edi\xE7\xE3o"),p?React.createElement(React.Fragment,null,React.createElement("p",{className:"text-sm",style:{color:C.green}},"\u2713 Modo edi\xE7\xE3o ativo neste aparelho."),React.createElement(PinChange,{hasPin:s,pin:g,savePin:m}),React.createElement("button",{onClick:c,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg text-sm flex items-center gap-1"},React.createElement(Lock,{size:14})," Sair do modo edi\xE7\xE3o")):React.createElement(React.Fragment,null,React.createElement("p",{className:"text-sm",style:{color:C.mut}},s?"S\xF3 quem tem a senha edita m\xFAsicas e setlists.":"Defina uma senha para liberar a edi\xE7\xE3o."),React.createElement("button",{onClick:r,style:{background:C.gold,color:"#2b2100"},className:"px-3 py-2 rounded-lg text-sm font-semibold flex items-center gap-1"},React.createElement(Unlock,{size:14})," ",s?"Entrar no modo edi\xE7\xE3o":"Criar senha de edi\xE7\xE3o"))),React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"rounded-xl p-4"},React.createElement("p",{className:"font-semibold mb-1",style:{color:C.gold}},"Sobre o repert\xF3rio"),React.createElement("p",{className:"text-sm",style:{color:C.mut}},a.length," m\xFAsicas \xB7 ",i.length," setlists \xB7 ",u," com letra \xB7 ",y," com link exato do Spotify."),React.createElement("p",{className:"text-xs mt-2",style:{color:C.mut}},"Filtre por estilo ou marcador na aba M\xFAsicas. Toque numa m\xFAsica para abrir a letra (fonte ajust\xE1vel e rolagem autom\xE1tica) e o Spotify.")),React.createElement(Field,{label:`Tamanho padr\xE3o da letra: ${e.font||19}px`},React.createElement("input",{type:"range",min:"13",max:"34",value:e.font||19,onChange:t=>n(O(k({},e),{font:Number(t.target.value)})),className:"w-full"})),React.createElement("p",{className:"text-xs text-center",style:{color:C.mut}},"Tudo o que voc\xEA edita \xE9 compartilhado em tempo real."))}function PinChange({hasPin:e,pin:n,savePin:a}){const[i,p]=useState(!1),[s,g]=useState(""),[c,r]=useState(""),[m,u]=useState("");if(!i)return React.createElement("button",{onClick:()=>p(!0),style:{color:C.blue},className:"text-sm underline block"},"Alterar senha");const y=()=>{if(e&&s.trim()!==n){u("Senha atual incorreta.");return}if(c.trim().length<4){u("M\xEDnimo 4 d\xEDgitos.");return}a(c.trim()),u("Senha atualizada \u2713"),g(""),r(""),setTimeout(()=>p(!1),1e3)};return React.createElement("div",{className:"space-y-2"},e?React.createElement("input",{value:s,onChange:t=>g(t.target.value),type:"password",inputMode:"numeric",placeholder:"Senha atual",style:inp}):null,React.createElement("input",{value:c,onChange:t=>r(t.target.value),type:"password",inputMode:"numeric",placeholder:"Nova senha (m\xEDn. 4 d\xEDgitos)",style:inp}),m?React.createElement("p",{className:"text-xs",style:{color:m.indexOf("\u2713")>=0?C.green:C.danger}},m):null,React.createElement("div",{className:"flex gap-2"},React.createElement("button",{onClick:y,style:{background:C.green,color:"#04261b"},className:"px-3 py-1.5 rounded-lg text-sm font-semibold"},"Salvar senha"),React.createElement("button",{onClick:()=>{p(!1),u("")},style:{background:C.card2,color:C.mut},className:"px-3 py-1.5 rounded-lg text-sm"},"Cancelar")))}const inp={background:C.bg,border:`1px solid ${C.line}`,color:C.txt,borderRadius:12,padding:"10px 12px",outline:"none",width:"100%"};function Field({label:e,children:n}){return React.createElement("label",{className:"block"},React.createElement("span",{className:"text-xs block mb-1",style:{color:C.mut}},e),n)}function AddSong({onClose:e,onSave:n,initial:a,estilos:i}){const p=!!(a&&a.id),[s,g]=useState(a?{t:a.t||"",artist:a.artist||"",pri:a.pri||"Diversos",tags:(a.tags||[]).join(", "),sp:a.sp||"",letra:a.letra||"",cifra:a.cifra||"",u:a.u||""}:{t:"",artist:"",pri:i&&i[0]||"Diversos",tags:"",sp:"",letra:"",cifra:"",u:""}),[c,r]=useState(""),m=(t,v)=>g(b=>O(k({},b),{[t]:v})),u=async t=>{const v=t.target.files&&t.target.files[0];if(v){if(v.type&&v.type.indexOf("pdf")<0){r("Selecione um PDF.");return}r("Enviando\u2026");try{const b=(v.name||"letra.pdf").normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[^A-Za-z0-9._-]+/g,"_"),I="up-"+Date.now().toString(36)+"-"+b,{error:l}=await SB.storage.from("letras").upload(I,v,{upsert:!0,contentType:"application/pdf"});if(l){r("Falha: "+l.message);return}const{data:d}=SB.storage.from("letras").getPublicUrl(I);m("u",d.publicUrl),r("PDF enviado \u2713")}catch(b){r("Falha no upload.")}}},y=()=>{if(!s.t.trim())return;const t={t:s.t.trim(),artist:s.artist.trim(),pri:s.pri,tags:s.tags.split(",").map(v=>v.trim()).filter(Boolean),sp:s.sp.trim(),letra:s.letra,cifra:s.cifra,u:s.u.trim()};n(t)};return React.createElement("div",{style:{background:"rgba(0,0,0,0.6)"},className:"fixed inset-0 z-[65] flex items-end sm:items-center justify-center"},React.createElement("div",{style:{background:C.card,border:`1px solid ${C.line}`},className:"w-full max-w-lg rounded-t-2xl sm:rounded-2xl max-h-[90vh] overflow-y-auto p-4 space-y-3"},React.createElement("div",{className:"flex items-center justify-between"},React.createElement("p",{className:"font-semibold",style:{color:C.gold}},p?"Editar m\xFAsica":"Nova m\xFAsica"),React.createElement("button",{onClick:e},React.createElement(X,{size:18,style:{color:C.mut}}))),React.createElement(Field,{label:"T\xEDtulo *"},React.createElement("input",{value:s.t,onChange:t=>m("t",t.target.value),style:inp,autoFocus:!0})),React.createElement(Field,{label:"Artista"},React.createElement("input",{value:s.artist,onChange:t=>m("artist",t.target.value),style:inp})),React.createElement("div",{className:"flex gap-2"},React.createElement(Field,{label:"Estilo principal"},React.createElement("select",{value:s.pri,onChange:t=>m("pri",t.target.value),style:inp},(i||[]).concat(i&&i.indexOf(s.pri)<0?[s.pri]:[]).map(t=>React.createElement("option",{key:t},t)))),React.createElement(Field,{label:"Marcadores (v\xEDrgula)"},React.createElement("input",{value:s.tags,onChange:t=>m("tags",t.target.value),placeholder:"Anos 80, Pop",style:inp}))),React.createElement(Field,{label:"Link do Spotify"},React.createElement("input",{value:s.sp,onChange:t=>m("sp",t.target.value),placeholder:"https://open.spotify.com/track/\u2026",style:inp})),React.createElement(Field,{label:"Letra"},React.createElement("textarea",{value:s.letra,onChange:t=>m("letra",t.target.value),rows:7,style:O(k({},inp),{whiteSpace:"pre-wrap"})})),React.createElement("div",null,React.createElement("label",{style:{background:C.card2,color:C.txt,border:"1px dashed "+C.line},className:"flex items-center justify-center gap-2 py-2.5 rounded-xl cursor-pointer text-sm font-medium"},React.createElement(Upload,{size:16})," Enviar PDF da letra",React.createElement("input",{type:"file",accept:"application/pdf",onChange:u,className:"hidden"})),c?React.createElement("p",{className:"text-xs mt-1",style:{color:c.indexOf("\u2713")>=0?C.green:c.indexOf("Enviando")>=0?C.mut:C.danger}},c):null),React.createElement(Field,{label:"Cifra em texto (opcional \u2014 habilita transpor)"},React.createElement("textarea",{value:s.cifra,onChange:t=>m("cifra",t.target.value),rows:4,wrap:"off",style:O(k({},inp),{fontFamily:"ui-monospace, monospace",whiteSpace:"pre",overflowX:"auto"})})),React.createElement("button",{onClick:y,style:{background:C.green,color:"#04261b"},className:"w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1"},React.createElement(Check,{size:16})," ",p?"Salvar altera\xE7\xF5es":"Salvar m\xFAsica")))}function PdfViewer({url:e,title:n,onClose:a}){const i=driveEmbed(e);return React.createElement("div",{style:{background:"rgba(0,0,0,0.92)"},className:"fixed inset-0 z-[70] flex flex-col"},React.createElement("div",{style:{background:C.card,borderBottom:"1px solid "+C.line},className:"px-3 py-2 flex items-center gap-2"},React.createElement("button",{onClick:a,style:{background:C.card2,color:C.txt},className:"px-3 py-2 rounded-lg flex items-center gap-1 font-semibold shrink-0"},React.createElement(ChevronLeft,{size:18})," Voltar"),React.createElement("p",{className:"font-semibold truncate flex-1"},n),React.createElement("a",{href:e,target:"_blank",rel:"noreferrer",style:{color:C.blue},className:"text-xs flex items-center gap-1 shrink-0"},React.createElement(ExternalLink,{size:13})," nova aba")),React.createElement("iframe",{title:n,src:i,className:"flex-1 w-full",style:{border:0,background:"#fff"}}))}function LockModal({hasPin:e,onClose:n,onSubmit:a}){const[i,p]=useState(""),[s,g]=useState(""),c=()=>{const r=a(i);r?g(r):n()};return React.createElement("div",{style:{background:"rgba(0,0,0,0.6)"},className:"fixed inset-0 z-[75] flex items-end sm:items-center justify-center"},React.createElement("div",{style:{background:C.card,border:"1px solid "+C.line},className:"w-full max-w-sm rounded-t-2xl sm:rounded-2xl p-4 space-y-3"},React.createElement("div",{className:"flex items-center justify-between"},React.createElement("p",{className:"font-semibold",style:{color:C.gold}},e?"Modo edi\xE7\xE3o":"Criar senha de edi\xE7\xE3o"),React.createElement("button",{onClick:n},React.createElement(X,{size:18,style:{color:C.mut}}))),React.createElement("p",{className:"text-xs",style:{color:C.mut}},e?"Digite a senha para editar neste aparelho.":"Defina uma senha (m\xEDn. 4 d\xEDgitos)."),React.createElement("input",{value:i,onChange:r=>{p(r.target.value),g("")},onKeyDown:r=>r.key==="Enter"&&c(),type:"password",inputMode:"numeric",placeholder:e?"Senha":"Nova senha",style:inp,autoFocus:!0}),s?React.createElement("p",{className:"text-xs",style:{color:C.danger}},s):null,React.createElement("button",{onClick:c,style:{background:C.gold,color:"#2b2100"},className:"w-full py-2.5 rounded-xl font-semibold flex items-center justify-center gap-1"},React.createElement(Unlock,{size:16})," ",e?"Entrar":"Criar e entrar")))}const _root=ReactDOM.createRoot(document.getElementById("root"));_root.render(React.createElement(App,null));try{window.__booted=!0}catch(e){}
