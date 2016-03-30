<!DOCTYPE html>

<html lang='en'>
	<head>
		<title>Clash Planner</title>

		<meta charset="UTF-8">
		<!--Stylesheets-->
		<link type='text/css' rel='stylesheet' href='/res/css/clashplanner.css'/>
	</head>

	<body>
		<div class='container'>
			<header>
				<img class='header'>
			</header>
			<div class='contentContainer'>
				<div class='controlLeft'>
					<ul>
						<li><img class='control' src='/res/image/ui/btn_upload.png'></li>
						<li><img class='control' src='/res/image/ui/btn_submit.png'></li>
						<li><img class='control' src='/res/image/ui/btn_comment.png'></li>
						<li><img onclick='save()' class='control' src='/res/image/ui/btn_savetodesktop.png'></li>
						<li><img class='control' src='/res/image/ui/btn_help.png'></li>
					</ul>
				</div>
				<div class='controlMain'>
					<canvas id='c' style='width: inherit; height: inherit;'></canvas>
				</div>
				<div class='controlRight'>
					<ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("barbarian")' src='/res/image/ui/btn_troop_barb.png'></li>
							<li><img onclick='addToken("archer")' src='/res/image/ui/btn_troop_arch.png'></li>
							<li><img onclick='addToken("giant")' src='/res/image/ui/btn_troop_giant.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("goblin")' src='/res/image/ui/btn_troop_goblin.png'></li>
							<li><img onclick='addToken("wallbreaker")' src='/res/image/ui/btn_troop_wb.png'></li>
							<li><img onclick='addToken("balloon")' src='/res/image/ui/btn_troop_balloon.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("wizard")' src='/res/image/ui/btn_troop_wiz.png'></li>
							<li><img onclick='addToken("healer")' src='/res/image/ui/btn_troop_healer.png'></li>
							<li><img onclick='addToken("dragon")' src='/res/image/ui/btn_troop_drag.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("pekka")' src='/res/image/ui/btn_troop_pekka.png'></li>
							<li><img onclick='addToken("minion")' src='/res/image/ui/btn_troop_minion.png'></li>
							<li><img onclick='addToken("hogrider")' src='/res/image/ui/btn_troop_hogrider.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("valkyrie")' src='/res/image/ui/btn_troop_valk.png'></li>
							<li><img onclick='addToken("golem")' src='/res/image/ui/btn_troop_golem.png'></li>
							<li><img onclick='addToken("witch")' src='/res/image/ui/btn_troop_witch.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("lavahound")' src='/res/image/ui/btn_troop_lavahound.png'></li>
							<li><img onclick='addToken("bq")' src='/res/image/ui/btn_troop_bk.png'></li>
							<li><img onclick='addToken("aq")' src='/res/image/ui/btn_troop_aq.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("lightning")' src='/res/image/ui/btn_spell_lightning.png'></li>
							<li><img onclick='addToken("heal")' src='/res/image/ui/btn_spell_heal.png'></li>
							<li><img onclick='addToken("rage")' src='/res/image/ui/btn_spell_rage.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("jump")' src='/res/image/ui/btn_spell_jump.png'></li>
							<li><img onclick='addToken("freeze")' src='/res/image/ui/btn_spell_freeze.png'></li>
							<li><img onclick='addToken("poison")' src='/res/image/ui/btn_spell_poison.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("earthquake")' src='/res/image/ui/btn_spell_earthquake.png'></li>
							<li><img onclick='addToken("haste")' src='/res/image/ui/btn_spell_haste.png'></li>
							<li><img onclick='addToken("wbboom")' src='/res/image/ui/btn_icon_wbboom.png'></li>
						</ul>
					</ul>
					<hr style='position: relative; right: 12px;'>
					<ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("redarrow")' src='/res/image/ui/btn_icon_redarrow.png'></li>
							<li><img onclick='addToken("yellowarrow")' src='/res/image/ui/btn_icon_yellowarrow.png'></li>
							<li><img onclick='addToken("tesla")' src='/res/image/ui/btn_icon_tesla.png'></li>
						</ul>
						<ul class='troopRow'>
							<li><img onclick='addToken("clancastle")' src='/res/image/ui/btn_icon_cc.png'></li>
							<li><img onclick='addToken("gb")' src='/res/image/ui/btn_icon_gb.png'></li>
							<li><img onclick='addToken("wbboom")' src='/res/image/ui/btn_icon_wbboom.png'></li>
						</ul>
					</ul>
				</div>
			</div>
		</div>
		<script type='text/javascript' src='/res/js/jquery-1.11.3.min.js'></script>
		<script type='text/javascript' src='/res/js/fabric.js'></script>
		<script type='text/javascript' src='/res/js/clashplanner.js'></script>
	</body>
</html>