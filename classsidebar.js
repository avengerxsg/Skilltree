/*global $, builds */

var help = {
    "How to Use": "Basic Controls<li>Left click to learn</li><li>Right click to unlearn</li><li>Hover to display changes on the tooltip</li><br>Extra Features<li>Choose a featured build from this list on the right to instantly display a preset build</li><li>You can also save/load your own builds by using the \"Save/Load Build\" button on the top right</li><br>How damage is calculated<br>Skill damage is calculated by using the following formula:<li>Min damage = (attack - weapon constant) * skill multiplier</li><li>Max damage = (attack + weapon constant) * skill multiplier</li><li>Skill multiplier depends on the skill, attribute, and talent</li><li>Weapon constant depends on the weapon the character is holding</li>For this skill tree, all skills assume the following:<li>The character has an attack of 13 for all levels</li><li>The character does not have a weapon equipped (weapon constant = 1)</li><br>Level and skill points<li>Characters earn 1 skill point starting from level 15 to 50</li><li>Characters earn 5 skill points upon leveling to divine level 1</li><li>Characters earn 1 skill point for every even divine level</li><li>Characters earn 2 skill points for every odd divine level</li>",
    "Status Effect Information": "<p style=\"color:#eab614\">Crowd Controls</p>Down<li>Target falls on their back</li><li>Target can use backward roll, down abilities (block/counter/rising etc.), status escapes</li><br>Daze<li>Target kneels on the ground</li><li>Target can use backward roll, status escapes</li><br>Stun<li>Target puts their hand to their head</li><li>Target can use status escapes</li><br>Knock Back<li>Target is knocked back x meters</li><li>Usually accompanied with another crowd control effect after</li><br>Frostbite<li>Target is slowed</li><li>Charge abilities are disabled</li><li>Stacks up to 3 times</li><li>Freezes the target at 3 stacks</li><br>Freeze/Root/Immobilize<br><li>Target is rooted in ice</li><li>Target cannot move but can use charge abilities</li><br>Ice Prison<li>Target is locked in ice</li><li>All abilities are disabled</li><li>Target is invulnerable</li><br>Flash Freeze<li>Target is locked in ice</li><li>Target can use status escapes</li><li>Ice breaks on taking damage</li><br>Unconscious<li>Target is knocked unconscious on the floor</li><li>Target is healed over time</li><li>Target can use backward roll, status escapes</li><li>Target wakes on taking damage</li><br><br><p style=\"color:#eab614\">Debuffs</p>Bleed<li>Deals damage over time every 2 sec</li><li>Stacks up to 5 times</li><li>Decreases health regeneration by 20% per stack</li><br>Internal Bleeding<li>Decreases healing by 50%</li><br>Charge Disabled<li>Target cannot use charge abilities</li><br>Defense Disabled<li>Target cannot use block/counter abilities</li><br>Offensive Defense Disabled<li>Target cannot use offensive defense abilities</li>"
};

$("#buildlist").append("<p class=\"sideheader\">Class Information</p>");

$("#buildlist").append("<p class=\"sideheader\">Featured Builds</p>");

var b;
for (b in builds) {
    if (builds.hasOwnProperty(b)) {
        var tab = "";
        var pane = "";
        
        tab = "<li><a href=\"javaScript:void(0);\" onclick=" + builds[b].bfunc + "><p class=\"builder\">" + builds[b].type + "</p> <p class=\"levelreq\">Req. level: " + builds[b].req + "</p><p class=\"title\">" + builds[b].name + "</p></a></li>";
        
        pane = "<div><p class=\"date\">" + builds[b].desc_title + "</p><br>" + builds[b].desc + "</div>";
        
        $("#buildlist").append(tab);
        $("#panedesc").append(pane);
    }
}

$("#buildlist").append("<p class=\"sideheader\">Help</p>");

var h;
for (h in help) {
    if (help.hasOwnProperty(h)) {
        var tab = "";
        var pane = "";
        
        tab = "<li><a href=\"javaScript:void(0);\" onclick=\"expand();\" style=\"height:20px;\"><p class=\"title\">" + h + "</p></a></li>";
        
        pane = "<div><p class=\"date\">" + h + "</p><br>" + help[h] + "</div>";
        
        $("#buildlist").append(tab);
        $("#panedesc").append(pane);
    }
}