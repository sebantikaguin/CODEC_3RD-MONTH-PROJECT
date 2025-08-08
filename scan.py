from zapv2 import ZAPv2

zap = ZAPv2(apikey='your_zap_api_key', proxies={'http': 'http://localhost:8080'})
target = 'http://localhost:5500/index.html'  

zap.urlopen(target)
print("Spidering target...")
zap.spider.scan(target)
print("Scanning target...")
zap.ascan.scan(target)

print("Alerts:")
for alert in zap.core.alerts(baseurl=target):
    print(f"{alert['alert']} - {alert['risk']}")

