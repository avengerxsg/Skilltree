/*global $ */

var changelog = {
    "C20150319": {
		"date": "March 19, 2015",
		"attrib": {
			"Skill Update": "Buffs for Destroyer, Force Master, Summoner<br><br>Destroyer<br>Judgement + Fury<li>Now have separate skill trees and can be used independently</li><li>See the new trees for further details</li><br>Wedge<li>No longer has a skill tree but now has the old T2C2 effects by default</li><br>Destroy<li>Damage of C2, C3 is increased</li><br>Abyss<li>No longer has a skill tree</li><li>Damage increased</li><li>+30% movement speed and defense, charge disable for 4 sec effects added</li><br>Hurricane<li>C3 now generates 30% chi on deflect</li><li>C1 now ignores defense</li><li>T5C1 now gives +80% movement speed from 60% and removes immobilize effects multiple times during use</li><br>Stomp<li>T5C3 gives 20% increased damage for Fury, Destroy but no longer gives max speed Fury, Destroy</li><li>Fixed T5C2 displaying wrong defense % increase</li><br>Sever + Catapult<li>Now have separate skill trees and can be used independently</li><li>See the new trees for further details</li><br>Slam<li>T3C2 now gives 120% chi over 4 sec</li><br>Flame Wheel + Inflaming Wheel<li>Now have separate skill trees and can be used independently</li><li>See the new trees for further details</li><br>Adamant<li>Cooldown of T4C2 reduced to 1 min from 1 min 30 sec</li><br>Annihilate<li>T4C1 no longer can be casted 2 times in a row but damage is increased to compensate</li><br><br>Force Master<br>Frost Palm<li>No longer has 30% chance to freeze enemies</li><li>Damage increased</li><br>Pyrodragon/Pyroblast<li>C1, C3 damage increased</li><li>C3 cost reduced to 2 from 3</li><br>Ice Flower<li>T3C2 no longer heals but generates 100% chi instead</li><li>Not in the skill tree but allies can now press [F] to get out of Ice Prison</li><br>Dragon Wave<li>C1 damage increased to seized, force gripped enemies</li><br>Cryoblast<li>Now instantly applies synergy stun (double stun)</li><br>Shift Step<li>Skill names changed to Flame/Frost Step</li><br><br>Summoner<br>Hornet<li>C3 cooldown reduced to 6 sec from 9 sec</li><li>C4 cost reduced to 2 from 3</li><li>C4 cast time reduced to 0.3 sec from 0.5</li><li>C4 is instantly cast on crit</li><li>T3C4 no longer instantly cast on enemies under status effects and instead deals additional damage on instant cast</li><li>T5C4 is instantly cast on seized, force gripped enemies and generates 1 chi, down from 2, on critical hit</li>"
		}
	},
	"C20150129": {
		"date": "January 29, 2015",
		"attrib": {
			"Site Update": "<br>You can now generate links to your build and load builds directly from the link!<li>This option can be found in the Save/Load menu</li>"
		}
	},
	"C20150127": {
		"date": "January 27, 2015",
		"attrib": {
			"Announcement": "<br>Changelog has been cleared and from now on will only be used to update big changes rather than simple minor translation fixes here and there. That said, you can still access the more detailed(?) commit history at <a href=\"https://github.com/dakaringer/BnS-ST/commits/gh-pages\">Github</a>."
		}
	}
};

var d;
for (d in changelog) {
	if (changelog.hasOwnProperty(d)) {
        var tab = "";
        var pane = "";
		var categories = "";
        var a;
		for (a in changelog[d].attrib) {
            if (changelog[d].attrib.hasOwnProperty(a)) {
                categories += a + ", ";
            }
		}
		categories = categories.substring(0, categories.length - 2);
		tab = "<li><a href=\"javaScript:void(0);\" onclick=\"expand();\"><p class=\"builder\">" + categories + "</p> <p class=\"levelreq\"></p><p class=\"title\">" + changelog[d].date + "</p></a></li>";
		var desc = "";
        var b;
		for (b in changelog[d].attrib) {
            if (changelog[d].attrib.hasOwnProperty(b)) {
                desc += b + "<br>" + changelog[d].attrib[b] + "<br>";
            }
		}
		pane = "<div><p class=\"date\">" + changelog[d].date + "</p><br>" + desc + "</div>";
        
        $("#buildlist").append(tab);
        $("#changedesc").append(pane);
	}
}