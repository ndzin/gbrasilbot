
import genshin

client = genshin.Client()
client.set_browser_cookies()


client = genshin.Client()
cookies = client.login_with_password("canal.riasartz@gmail.com", "98014565ndw")
print(cookies)