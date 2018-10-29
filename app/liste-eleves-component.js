angular.
  module('listeElevesApp').
  component('listeEleves', {
    template: '<ul>' +
    			'<li ng-repeat="eleve in eleves">' +
    				'<span>{{eleve.nom}}</span>' +
    				'<p>{{eleve.before_ifa}}<p>' +
    			'</li>' +
    		   '</ul>',
    controller: function listeElevesController() {
      this.eleves = [
      	{
		   "nom": "Chehaibou",
		   "prenom": "Sofiann",
		   "age": 30,
		   "ville": "Nancy",
		   "javascript": "oui",
		   "fav_web": "youtube",
		   "fav_web_why": "beaucoup de connaissances",
		   "fav_app": "duolingo",
		   "fav_app_why": "ludique",
		   "before_ifa": "Cesi.Exia",
		   "why_ifa": "Pour les PC",
		   "contact_mail": "schehaibou@gmail.com"
		 },
		 {
		   "nom": "Godard",
		   "prenom": "Jason",
		   "age": 24,
		   "ville": "Marly",
		   "javascript": "Non",
		   "fav_web": "https://www.twitch.tv/",
		   "fav_web_why": "Site bien pensé, chat, service video/streaming etc..",
		   "fav_app": "Youtube",
		   "fav_app_why": "Divertissement",
		   "before_ifa": "BTS aménagmt paysager, formation 3mois devweb webdesign",
		   "why_ifa": "Employeur, formation",
		   "contact_mail": "godard.jason@yahoo.fr"
		 },
		 {
		   "nom": "MARCHAL",
		   "prenom": "Jérémy",
		   "age": 18,
		   "ville": "metz",
		   "javascript": "non",
		   "fav_web": "youtube",
		   "fav_web_why": "divertissant enrichissant",
		   "fav_app": "snap",
		   "fav_app_why": "parler avec photo",
		   "before_ifa": "bac STI2D",
		   "why_ifa": "par passion en info , rapidité, embauche, alternance",
		   "contact_mail": "jeremymarchal90@gmail.com"
		 }
      ];
    }
 });