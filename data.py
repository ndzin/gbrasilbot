import asyncio
import genshinstats as gs

gs.set_cookie_auto()

async def main():
    characters = await asyncio.to_thread(gs.get_characters, 710785423)
    print(characters)

asyncio.run(main())