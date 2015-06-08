var heiti = [
	'steingeit',
	'vatnsberi',
	'fiskur',
	'hrutur',
	'naut',
	'tviburi',
	'krabbi',
	'ljon',
	'meyja',
	'vog',
	'sporddreki',
	'bogamadur',
]
var heiti_isl = [
	'steingeit',
	'vatnsberi',
	'fiskur',
	'hrútur',
	'naut',
	'tvíburi',
	'krabbi',
	'ljón',
	'meyja',
	'vog',
	'sporðdreki',
	'bogamaður',
]
var lysing = {}
/* var lysing = {
	'steingeit': 'Steingeit.',
	'vatnsberi': 'Vatnsberi.',
	'fiskur': 'Fiskur.',
	'hrutur': 'Hrútur.',
	'naut': 'Nautið er illt.',
	'tviburi': 'Tvíburinn er klofinn.',
	'krabbi': 'Krabbinn er rauður.',
	'ljon': 'Ljón.',
	'meyja': 'Meyjan er bljúg.',
	'vog': 'Vog.',
	'sporddreki': 'Sporðdreki.',
	'bogamadur': 'Bogamaður.',
}
*/
lysing['steingeit'] = '' +
/*
'<p>Þú rennur oftast saman við fjöldann, því þú ert bæði hógvær í klæðaburði og ' +
'framkomu. Þú skeytir lítið um tískufyrirbæri og klæðist oft íhaldssömum, dökkum ' +
'fötum úr vönduðu efni, jafnvel þegar þú ferð í samkvæmisskrúðann.</p>' +
'' +
*/
'<p>Þú ert iðjusöm og þægileg í viðmóti, vinnur skipulega að langtímamarkmiðum og stefnir ' +
'að því að öðlast viðurkenningu og virðingu fyrir erfiði þitt. Þú ert þolinmóð ' +
'og yfirleitt metnaðargjörn, einræn og seintekin, en trygg vinum þínum og ' +
'fjölskyldu og mjög áreiðanleg í öllum samskiptum.</p> ' +
'' +
'<p>Veraldleg gæði, vegtyllur og ' +
'vald skipta þig miklu máli og þú ert íhaldssöm á umhverfi þitt og átt bágt með ' +
'að sætta þig við breytingar. Þér lætur best að vinna þar sem þú getur hækkað í ' +
'stöðu, en ef þú starfar innan stjórnmálaflokks, hentar þér betur að aðrir ' +
'standi í sviðsljósinu á meðan þú hefur sjálf töglin og hagldirnar á bakvið ' +
'tjöldin.</p>' /*+
'' +
'<p>Í íþróttum heillast þú yfirleitt af greinum, þar sem þú þarft að ' +
'sigrast á erfiðleikum, t.d. fjallgöngum eða skíðagöngum. Þér hættir til að ' +
'halda óþarflega mikið aftur af tilfinningum þínum og sjálfsagi þinn og ' +
'sjálfsafneitun gengur oft út í öfgar.</p>'
*/

lysing['vatnsberi'] = '' +
/*
'<p>Þú ert há og glæsileg, með loðnar augabrýr og óstýrilátt hár. Þú klæðist ' +
'gjarnan dýrum og nýtískulegum fötum, en yfirleitt skapar þú þér þó eigin ' +
'fatastíl.</p>' +
'' +
*/
'<p>Þú ert sjálfstæð í hugsun og fylgir ekki viðteknum skoðunum. Þú vilt ' +
'einlæglega berjast gegn alls kyns óréttlæti, ekki síst félagslegu. Þú ert ' +
'vingjarnleg og opin í framkomu og nýtur þín vel í félagslegu samhengi, bæði í ' +
'stærri og minni hópum.</p>' +
'' +
'<p>Þú ert ævintýragjörn og stundum sérvitur, átt til bæði önuglyndi og ' +
'þrjósku, ekki síst ef þú neyðist til að verja eigin sérlyndi. Þú ert hins ' +
'vegar óþreytandi að berjast fyrir minni máttar. Þrátt fyrir mannúðlegt ' +
'hjartalag ert þú oft fjarlæg og erfitt að ná sambandi við þig.</p>' /*+
'' +
'<p>Þú ert frumleg í hugsun og velur þér gjarnan óvenjulegt starfssvið, eins og ' +
't.d. stjörnufræði, fornleifafræði eða annað vísindatengt, en gætir allt eins ' +
'tekið upp á því að gerast flugmaður eða skrifa vísindaskáldsögur!</p>' +
*/

lysing['fiskur'] = '' +
/*
'<p>Augu þín eru falleg og tjáningarrík og fatastíllinn er afar persónulegur, ' +
'oft með frumlegu mynstri og sniði eða á hinn bóginn gömul, snjáð föt sem ' +
'eigandinn hefur notað árum saman. Þú hefur afar mikinn áhuga á fótum og ' +
'fótabúnaði, sem getur einkennst af sömu öfgum og annar fatnaður, en fætur þínir ' +
'eru oft fallega lagaðir og nettir.</p>' /*+
'' +
*/
'<p>Þú ert mikil dansmanneskja og hefur yndi af allri tónlist. Þú ert víðsýn og ' +
'nægjusöm og lætur vel að stjórn, nema þegar þú ert beitt þrýstingi. Þú ert ' +
'einkar upptekin af þjáningum annarra, og reyndar líka þínum eigin, og átt til ' +
'að finna hjá þér þörf fyrir píslarvætti.</p>' +
'' +
'<p>Þú ert rómantísk og dreymnir og hafa djúpa ást á lífinu, en lætur þig oft ' +
'reka með straumnum og ert lítill baráttumaður, enda átt þú bágt með að vinna ' +
'markvisst. Þú hefur næma eðlisávísun og ert mjög hjartahlý og hjálpsöm, enda ' +
'vinamörg, en stundvísi er ekki þín sterkasta hlið.</p>' /*+
'' +
'<p>Þú hefur mikla sköpunargáfu og finnur þér oft starf sem tengist listum, ' +
'gjarnan ljóðlist eða rómantískum bókmenntum. Þú ert mögulega tónlistarmaður eða ' +
'vinnur við kvikmyndir. Þú hefur líka einlægan áhuga á náttúrunni og ' +
'umhverfisvernd, trúarbrögðum og félagslega bágstöddu fólki, svo störf á þeim ' +
'vettvangi gætu veitt þér mikla ánægju.</p>'
*/

lysing['hrutur'] = '' +
/*
'<p>Þú ert oft grönn og spengileg. Þú ert lítið hrifin af skrautgripum og fötum sem ' +
'hefta hreyfingafrelsi þitt, enda hvatvís og lifandi og fljót að bregðast við.</p>' /*+
'' +
*/
'<p>Þú hefur oftast ríka þörf fyrir að tjá þig í verki. Þú ert dugandi, blátt ' +
'áfram og átt bágt með að þola tafir og aðgerðaleysi. Þú ert óþolinmóð og ' +
'þrjósk, en líka gædd persónu-töfrum og stefnir einbeitt að settu marki. Þú ' +
'ert fæddur leiðtogi og fljót að hugsa, en eðlislæg hreinskilni veldur því ' +
'að þú átt bágt með að segja ósatt og ert oft bæði saklaus og einlæg í ' +
'hjarta.</p>' +
'' +
'<p>Þú hefur gaman af íþróttum, helst ef í þeim felst hraði, hreyfing og ' +
'líkamleg snerting, enda finnst þér fátt verra en að sitja aðgerðalaus.</p>' /*+
'' +
'<p>Þú ert í eðli þínu brautryðjandi, svo þú hneigist til að velja þér starf ' +
'sem krefst frumlegrar hugsunar, og gerast gjarnan vísindamaður, ' +
'uppfinningamaður, skurðlæknir, geðlæknir eða sálfræðingur, en þú getur allt ' +
'eins tekið upp á því að reka eigin fyrirtæki, iðulega innan nýrrar ' +
'starfsgreinar. Þú heillast líka af stjórnmálum og ert oft virkur félagi eða í ' +
'stjórn þíns stéttarfélags.</p>' +
*/

lysing['naut'] = '' +
/*
'<p>Þú ert með gildan háls, lágt enni og hrokkið hár. Oftast ertu íhaldssöm í ' +
'klæðaburði en getur þó ekki stillt þig um áberandi fylgihluti, t.d. skartgripi, ' +
'bindi, sokka o.s.frv.</p>' +
'' +
*/
'<p>Þú ert lífsnautnamanneskja og kannt vel að meta sætindi og góðan mat, eins og ' +
'reyndar öll veraldleg gæði og líkamleg atlot. Þú ert líka stöðuglynd og þrjósk ' +
'og hvikar ekki út af þeirri leið sem þú velur þér.</p>' +
'' +
'<p>Þú ert lengi að taka ákvörðun, en þegar þú hefur gert það, getur ekkert stöðvað ' +
'þig. Þú ert oft einkar séð í fjármálum og peningar skiptir þig oft miklu máli, ' +
'ekki síst vegna öryggisins sem þú veita.</p>' +
'' +
'<p>Þú ert orðheldin, þolinmóð og trygglynd, og hefur einkar gott minni, en getur ' +
'verið gríðarlega skapbráð, langrækin og afbrýðisöm. Það getur verið nærri því ' +
'ógerlegt að fá þig til að skipta um skoðun.</p>' /*+
'' +
'<p>Þú hefur næmt auga fyrir fegurð og listum, og oft hneigist þú til starfa ' +
'sem tengjast slíku, gjarnan innan bókmennta eða myndlistar, en ekki síður ' +
'starfa innan fjármálaheimsins.</p>'
*/

lysing['tviburi'] = ''+
/*
'<p>Þú ert heldur lágvaxin, grönn og líkamlega veikbyggð.</p>' +
'' +
*/
'<p>Þitt helsta einkenni er að gera margt í einu; tala mikið og gjarnan með miklu ' +
'handapati og þú virðist aldrei geta verið kyrr. Þú ert gríðarlega forvitin og ' +
'hefur mikla þörf fyrir að skiptast á hugmyndum og skoðunum við aðra.</p>' +
'' +
'Þú ert fjölhæf, greind og fljót að hugsa, einkum í öllum tjáskiptum, en þú ' +
'getur líka verið kaldhæðin, hvikul og óáreiðanleg og fljót að gleyma öllum ' +
'loforðum.</p>' +
'' +
'<p>Þó þú hrífist af alls kyns hugmyndum, hafa þú ekki endilega ýkja mikla þörf ' +
'fyrir að sjá þeim hrint í framkvæmd. Þú ert oftast daðurgjörn og yfirborðskennd ' +
'og þú talar stöðugt. Versti óvinur þinn er leiðindi og þú gerir næstum hvað sem ' +
'er til að komast hjá þeim.</p>' /*+
'' +
'<p>Líklega vinnur þú við fjölmiðla eða sem sölumaður.</p>'
*/

lysing['krabbi'] = '' +
/*
'<p>Þú ert búlduleitin og föl. Þú reynir að klæða sig eins og tíðkast í  ' +
'umhverfi þínu, en fylgist samt illa með tískunni og velur oft saman ' +
'óheppilegar flíkur eða föt sem komin eru úr tísku.</p>' +
'' +
*/
'<p>Þú ert trygglynd, tilfinninganæm og viðkvæm og vilt vernda aðra og hlúa ' +
'að þeim. Þú ert mikil fjölskyldumanneskja og líður yfirleitt best heima, innan ' +
'um ættingja og nána vini. Þú ert fús til að hlusta á vandamál annarra, gefa góð ' +
'ráð og miðla af reynslu þinni, en þú ert líka auðsærð og spéhrædd og gleymir ' +
'aldrei því sem gert er á hluta þinn.</p>' +
'' +
'<p>Þú býrð yfir miklu innsæi og djúpum tilfinningum en hættir til tortryggni ' +
'og drottnunargirni. Öðrum finnst oft að þú sért að kæfa þá með ' +
'tilfinningum.</p>' /*+
'' +
'<p>Viðskipti eiga vel við þig, einkum lítil fyrirtæki og þá gjarnan ' +
'fjölskyldufyrirtæki, en þú ert líka hrifin af góðum mat og matargerð, svo þér ' +
'lætur ágætlega að reka veitingahús.</p>'
*/

lysing['ljon'] = '' +
/*
'<p>Þú ert oft bein í baki, mittismjó og með stutta fótleggi og hættir til að ' +
'fitna, en ferð yfirleitt ekki í megrun fyrr en slíkt er óumflýjanlegt. Þú ' +
'fylgir yfirleitt tískunni og ert vel klædd, en hættir samt til öfga. Þú ert ' +
'veik fyrir skrauti og skartgripum, ekki síður en gullhömrum og aðdáun.</p>' +
'' +
*/
'<p>Þú hefur mikla þörf fyrir að vekja athygli og vilt vera miðpunktur hvar sem ' +
'þú ert stödd. Þú ert opin, félagslynd og skapandi, hjartahlý og lífsglöð.</p>' +
'' +
'<p>Þú hefur gaman af að leika þér, en þú getur líka verið hrokafull, ' +
'sjálfumglöð og eigingjörn. Þú ert í eðli þínu örlát og bjartsýn og eldmóðurinn ' +
'er gríðarlegur, ekki síst í ástamálum, þar sem þú upphefur hvert einasta ' +
'smáskot og lítur á það sem rómantíska stórmynd þar sem þú leikur sjálf ' +
'aðalhlutverkið.</p>' /*+
'' +
'<p>Ást þín á hinu leikræna verður oft til þess að þú reynir fyrir þér í ' +
'skemmtanaiðnaðinum, einkum leiklist og rokktónlist, en reyndar ert þú ánægð ' +
'alls staðar þar sem þú færð að njóta þín og vekja athygli.</p>'
*/

lysing['meyja'] = '' +
/*
'<p>Þú ert gjarnan auðþekkjanleg af háum kollvikum, en þá ekki síður stórum og ' +
'hreinum augum. Þú klæðir þig tilgerðarlaust og smekklega, en eltir ekki ' +
'endilega nýjustu tískugrillur.</p>' /*+
'' +
*/
'<p>Þú ert hagsýn og dugleg, en lítið gefin fyrir langar og hugmyndafræðilegar ' +
'samræður og vilt miklu frekar láta verkin tala. Þú vilt helst vera á fartinni, ' +
'ekki þó stefnulaust heldur við að sinna einhverjum verkefnum.</p>' +
'' +
'<p>Þú ert holdleg og veraldleg, en beitir orku þinni yfirleitt á hagnýtan og ' +
'vinnutengdan hátt. Þú hefur mikla skipulags- og aðlögunarhæfileika, en ert ' +
'haldin fullkomnunaráráttu og getur búið yfir óhóflega mikilli sjálfsgagnrýni og ' +
'smámunasemi. Þú hefur rökfasta hugsun og oft hvassa tungu, og átt bágt með að ' +
'þola hirðuleysi og slóðaskap. Þú ert áreiðanleg og hjálpsöm og fús að vera ' +
'öðrum innan handar.</p>' /*+
'' +
'<p>Þú lætur ágætlega hjúkrun og reyndar hvert það starf sem krefst nákvæmni og ' +
'sjálfsaga, t.d. úrsmíði eða tölvuvinna af öllu tagi. Þú ert smekkvís og getur ' +
'gert það gott sem fatahönnuður eða í listiðnaði, helst þá þeim greinum þar sem ' +
'notuð eru jarðarefni, t.d. við leirkeragerð eða textílvinnu.</p>'
*/

lysing['vog'] = '' +
/*
'<p>Þú vekur oft rómantískar tilfinningar og þykir kynþokkafull, enda klæðir þú þig ' +
'oft djarflega og tælandi. Einna mest áberandi í fari þínu er þó hvað þú ert ' +
'blátt áfram og óþvinguð.</p>' /*+
'' +
*/
'<p>Þú ert gædd miklum persónutöfrum en ert oft dul og vilt ekki bera vandamál ' +
'þín á torg. Þú átt líka oft erfitt með að taka ákvarðanir. Engu að síður þér ' +
'mikið í mun að ná markmiðum þínum, hvort sem það er félagslega eða í samböndum, ' +
't.d. hjónabandi.</p>' +
'' +
'<p>Þú ert í eðli þínu diplómatísk og mikill sáttasemjari og átt auðvelt með að ' +
'lægja öldur. Þú hefur sterka réttlætiskennd, en þolir illa háværar deilur og ' +
'ósamlyndi af öllu tagi. Þú vilt mjög gjarnan fá að vita að þú sért mikils metin ' +
'og átt bágt með að vera ein.</p>' /*+
'' +
'<p>Þú velur þér störf, þar sem mannleg samskipti ert í fyrirrúmi, og nýtur þín ' +
'einkar vel í opinbert starfi.</p>'
*/

lysing['sporddreki'] = '' +
/*
'<p>Þú ert grönn, með hvöss og djúp augu og þungar augabrýr. Þú ert yfirleitt afar ' +
'kynþokkafull og klæðir þig líka þannig, gjarnan í flegnar blússur eða svört ' +
'leðurföt.</p>' /*+
'' +
*/
'<p>Þú tengist djúpum tilfinningum, yfirleitt þeim sem snerta kynlíf og ' +
'sjálfsbjargarhvöt. Flestum þykir þú leyndardómsfull og spennandi. Undir ' +
'heilsteyptu ytra borði leynist gríðarleg tilfinningaólga, afbrýðisemi og ' +
'ástríða, og þú reynir af fremsta megni að skapa þér tilfinningalegt öryggi í ' +
'heimi sem þér finnst fjandsamlegur.</p>' +
'' +
'<p>Þú hefur mjög næma eðlisávísun og fæstir geta farið á bak við þig. Þú hefur ' +
'oftast mikinn áhuga á yfirskilvitlegum efnum. Þú ert hefnigjörn en einbeitt og ' +
'þolgóð og gefst ekki upp fyrr en í fulla hnefana.</p>' /*+
'' +
'<p>Þú værir framúrskarandi byltingarmaður, einkum af öfgakenndara taginu, en þú ' +
'kastar þér reyndar af ástríðu út í hverja þá vinnu sem vekur áhuga þinn og ' +
'kitlar ímyndunaraflið. Í íþróttum velur þú þér iðulega eitthvað sem hætta ' +
'fylgir (eða gæti fylgt), t.d.  skylmingar, karate og teygjuhopp, en þú hafur ' +
'líka yndi af dansi og tónlist.</p>'
*/

lysing['bogamadur'] = '' +
/*
'<p>Þú hefur hátt enni og beinar augabrúnir. Þú klæðist gjarnan íþróttagöllum ' +
'eða öðrum tilgerðarlausum fatnaði, en ert sjaldnast hirðuleysisleg. Þú ert ' +
'gjarnan mikil matmanneskja, en þú ert líka mikið gefin fyrir íþróttir, svo þú ' +
'ferð yfirleitt ekki að fitna fyrr en upp úr miðjum aldri, þegar þú hættir að ' +
'hreyfa sig eins mikið.</p>' +
'' +
*/
'<p>Þú hefur einlæga ást á sannleika og réttlæti, en hættir til að láta skoðanir ' +
'þínar alltof opinskátt í ljós, iðulega óumbeðin! Þú hefur líka djúpa þörf fyrir ' +
'að víkka sjóndeildarhring þinn og hefur því mörg áhugamál, auk þess sem þú hafa ' +
'þérstakt dálæti á ferðalögum.</p>' +
'' +
'<p>Þú ert lífsglöð, opin og hreinskilin mannvinur, en hefur litla þolinmæði með ' +
'smávægilegum vandamálum hversdagslífsins. Þú hefur lítinn áhuga á fjármálum og ' +
'helst iðulega illa á peningum, enda veik fyrir fjárhættuspilum.</p>' /*+
'' +
'<p>Þú velur þér oft starf þar sem þú ert mikið á ferð og flugi.  Þú ert ' +
'fyrirtaks leiðsögumaður, íþróttamaður eða íþróttaþjálfari eða jafnvel ' +
'áhættuleikari í kvikmyndum, en Þú værir líka í essinu þínu ef þú ynnir í ' +
'spilavíti!</p>'
*/

function merki(man, dag) {
	/*
	 * Tekur mánuð og dag og skilar stjörnumerkinu.
	 */
	switch (man) {
		case 'jan':
			if (dag <= 19) merkid = 'steingeit'; else merkid = 'vatnsberi'; break;
		case 'feb':
			if (dag <= 18) merkid = 'vatnsberi'; else merkid = 'fiskur'; break;
		case 'mar':
			if (dag <= 20) merkid = 'fiskur'; else merkid = 'hrutur'; break;
		case 'apr':
			if (dag <= 19) merkid = 'hrutur'; else merkid = 'naut'; break;
		case 'mai':
			if (dag <= 20) merkid = 'naut'; else merkid = 'tviburi'; break;
		case 'jun':
			if (dag <= 20) merkid = 'tviburi'; else merkid = 'krabbi'; break;
		case 'jul':
			if (dag <= 22) merkid = 'krabbi'; else merkid = 'ljon'; break;
		case 'agu':
			if (dag <= 22) merkid = 'ljon'; else merkid = 'meyja'; break;
		case 'sep':
			if (dag <= 22) merkid = 'meyja'; else merkid = 'vog'; break;
		case 'okt':
			if (dag <= 23) merkid = 'vog'; else merkid = 'sporddreki'; break;
		case 'nov':
			if (dag <= 21) merkid = 'sporddreki'; else merkid = 'bogamadur'; break;
		case 'des':
			if (dag <= 21) merkid = 'bogamadur'; else merkid = 'steingeit'; break;
	}
	return merkid;
}

function shuffle(array) {
	/*
	 * Fengið frá:
	 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	 */
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function birta_lysingar(man, dag) {
	// DEBUG console.log('birti lýsingar');
	// DEBUG console.log(man)
	// DEBUG console.log(dag)
	// DEBUG console.log(merki(man, dag));
	
	// Setjum merkið í breytu svo við komumst í það síðar þegar við svörum.
	var merkid = merki(man, dag);
	// Búum til lista af merkjum til að birta og bætum "rétta" merkinu inn.
	merkin = [ merkid, ]
	// Bætum slembið við þremur öðrum stjörnumerkjum.
	while (merkin.length < 4) {
		tmp = heiti[Math.floor(Math.random()*12)]
		// DEBUG console.log('er '+tmp+' inni? '+$.inArray(tmp, merkin))
		// Ef merkið er ekki þegar inni bætum við því við listann:
		if ($.inArray(tmp, merkin) == -1) {
			merkin.push(tmp)
		}
	}
	// Stokkum nú listanum.
	shuffle(merkin)
	// DEBUG console.log(merkin)

	// Felum fæðingardagstöflurnar
	$('#faedingardagur').hide()

	// Bætum lýsingunum við.
	$('#lysingar').html('<h2>Veldu þá lýsingu sem passar þér best.</h2>');
	for (idx in merkin) {
		// DEBUG console.log(merkin[idx])
		$('#lysingar').append('<div class="lysing" data-merki="' +merkin[idx]+ '">' +lysing[merkin[idx]]+ '</div>');
	}
	// DEBUG console.log(lysing[merki(man, dag)]);
	// DEBUG console.log(lysing[heiti[Math.floor(Math.random()*12)]])

}

$(document).ready(function() {

	/*
	 * Færum class-ann 'valinn' á þann mánuð og þann dag sem valinn er.
	 */
	$('.manudur').click(function(){
		$('.manudur').removeClass('valinn');
		$(this).addClass('valinn');
	});
	$('.dagur').click(function(){
		$('.dagur').removeClass('valinn');
		$(this).addClass('valinn');
	});

	/*
	 * Hér er CSRF token-inn fenginn úr köku (jquery.cookie plugin-sins er
	 * krafist), og AJAX sending jQuery sett upp til að nota hana.
	 *  https://docs.djangoproject.com/en/1.8/ref/csrf/#how-to-use-it
	 */
	var csrftoken = $.cookie('csrftoken');
	function csrfSafeMethod(method) {
		// these HTTP methods do not require CSRF protection
		return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
	}
	$.ajaxSetup({
		beforeSend: function(xhr, settings) {
			if (!csrfSafeMethod(settings.type) && !this.crossDomain) {
					xhr.setRequestHeader("X-CSRFToken", csrftoken);
			}
		}
	});

	/*
	 * Birtum viðeigandi svar þegar lýsing er valin og skráum svörunina í gagnagrunninn.
	 */
	$('#lysingar').on('click', '.lysing', function(){
		console.log($(this).data('merki'))
		console.log('rétta er: '+merkid);

		// Felum lýsingarnar.
		$('#lysingar').hide();
		// Búum til svarstreng til að birta.
		string = '<h2>Takk fyrir þáttökuna!</h2>'
		string += '<p>Þú valdir lýsingu sem almennt er tengd við stjörnumerkið '+ $(this).data('merki') +'.'
		if ($(this).data('merki')!=merkid)
			string += ' Það <strong style="color: red">passar reyndar ekki</strong> við klassíska stjörnumerkið þitt, '+ merkid +'.'
		else
			string += ' Það <strong style="color: green">passar einmitt</strong> við klassíska stjörnumerkið þitt.'
		string += ' Ef engin tengsl eru á milli persónugerðar fólks og þess stjörnumerkis sem það er í, ætti (að öllu öðru jöfnu) 25% þáttakenda að ramba á það merki sem klassíski stjörnuhringurinn úthlutar fólki.'
		// Bætum svarstrengnum við á réttum stað.
		$('#nidurstodur').append(string);

	 	// Sendum svar á þjóninn.
		$.ajax({
			url : "skra_svar/",
			type : "POST",
			data : { faedingardags: '1972-'+$('.manudur.valinn').data('manudur')+'-'+$('.dagur.valinn').attr('id'),
						merki: merkid,
						valid: $(this).data('merki'),
			},
			error : function(xhr,errmsg,err) {
				console.log('ERROR');
				console.log(xhr.status + ": " + xhr.responseText);
			}
		})
		.done(function(msg) {
			console.log(msg);
			//hlutfall = jQuery.parseJSON(msg);
			//hlutfall = jQuery.parseJSON(msg).hlutfall * 100;
			hlutfall = Math.round(jQuery.parseJSON(msg).hlutfall * 100);
			//hlutfall = jQuery.parseJSON(msg) * 100;
			//hlutfall = parseFloat(jQuery.parseJSON(msg)) * 100;
			//hlutfall = Math.round(parseFloat(jQuery.parseJSON(msg)) * 100);

			$('#nidurstodur').append('Hlutfall þeirra sem hafa tekið þátt í þessu litla verkefni og hitt á "sitt merki" er '+ hlutfall +'%.');
		});
	});

});
