var api = 'http://explorer.mining.blue/domain';
var blockTargetInterval = 120;
var coinUnits = 1000000000000;
var symbol = 'XBB';
var refreshDelay = 30000;
// pools stats by MainCoins
var networkStat = {
    "krb": [
		["krb.mypool.name", "http://krb.mypool.name:32351"],
		["democats.org/pool/?name=karbowanec", "http://pool2.democats.org:7673"],
		["pool.karbowanec.com", "http://pool.karbowanec.com:8117"],
		["pool2.karbowanec.com", "http://pool2.karbowanec.com:8117"],
		["krb.cryptonotepool.com", "http://5.189.135.137:8618"],
		["krb.tfoto.com.ua", "http://178.150.34.202:8117"],
		["krb.crypto-coins.club", "http://krb.crypto-coins.club:8118"],
		["krb.sberex.com", "http://krb.sberex.com:7006"],
		["amazon.sberex.com", "http://amazon.sberex.com:7006"],
		["xcrypto.org", "http://xcrypto.org:8117"],
		["krb.cryptomine.pro", "http://krb.cryptomine.pro:8117"],
		["bityce.ddns.net", "http://bityce.ddns.net:9884"],
		["pool.karbowanec.com.ua", "http://zacent.com.ua:8117"],
		["krb-pool.pp.ua", "http://krb-pool.pp.ua:25417"],
		["54.223.133.248", "http://54.223.133.248:8117"],
		["bitcache.cc", "http://bitcache.cc:8117"]
		
    ],
    "xbb": [
                ["bbr.miningclub.info", "http://bbr.miningclub.info:8118"],
                ["bbr.poolto.be", "http://bbr.poolto.be/api"],
                ["mining.blue", "http://mining.blue/api"],
                ["bbr.hash.group", "http://hashgroup.ddns.net:8118"],
                ["mbkpool.info", "http://bbr.mbkpool.info:8117"],



    ]
};
