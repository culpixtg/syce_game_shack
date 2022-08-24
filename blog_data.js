let lastUpdate = "8/16/2022"
let data = [
    // {
    //     title: "Everything new about v4!",
    //     date: "8/22/2022",
    //     time: "5 min read",
    //     id: "1",
    //     text: "Introducing version 4! This update started all the way back in June 2022 when I had the idea to do a massive redesign of the site, I had just made a basic design but I'd never actaully planned to release it. That was until I thought about it again in late July, and I decided to revisit it. So I ended up starting from scratch, building the website from the ground up going off the original redesign I had planned. Basically making this update an entire rewrite of the website.\n\nNow from first glance you probably noticed the design change, personally I really like the modern look of the website and I hope other people do too. I put a lot of effort in the first week just into the design, and by the end of the week I had myself a great looking website with almost no games. Wait- the games... the thing that seems to be the simpliest, easiest thing to do. Take the games from the old website and plunk them in this website. Execpt since I built this website from the ground up, I had changed a way how the games load on the website (for something in the future) which doesn't make it as simple as just copy and pasting.\n\nWith this new website, games now show other information such as a description of the game, the genre of it, and even the publisher of it. This is all possible from a file deacated to have that information and load it onto the main page. And since it works a different way, I would have to manually add all the games and all the information about it. Which is why this update was in a little bit of a rush as I realized it would take awhile to add information about all of the games."
    // },
    {
        title: "Changelog of version 4!",
        date: "8/22/2022",
        time: "2 min read",
        id: "1",
        text: `<b>What's new?</b><br>• Completely rewritten the website to fit a better design and functionality<br>ㅤ◦ New aesthetic home screen, to show version 4 at a quick glance.<br>ㅤ◦ New sidebar on the left to switch to the different pages, now including two new ones.<br>ㅤ◦ Added light mode, turn it on at the bottom of the sidebar.<br>ㅤ◦ New view before you enter a game, shows you the description of the game, as well as the genre and publisher.<br>ㅤ◦ New loading screen for the site with a new animation.<br>ㅤ◦ Plus many other small design changes.<br><br>Everything was rewritten in a way to work better than before which makes it easier for other things in the future to be added on.<br><br><b>Performance</b><br>• This update includes many things to help performance. With the new ways the site works, some stuff like the loading might be a bit slower because of how I did it, but there's some things that I've improved in this update that will definitely help with that and other things.<br>ㅤ◦ Firstly, to better improve loading times I've realized the site takes the longest to load all the icons, so why not just show them? That's why I've included a new settings to disable the game icons from showing which definitely makes the site load much quicker. Would recommend it if you have a slow laptop/computer and/or a slow internet connection.<br>ㅤ◦ Probably one of the biggest changes in this update is that games now run on the same page with the gamepage meaning there's no loading between launching a game or going back to the gamepage. Unlike before where it would have to load the entire gamepage after you exited out of a game.<br><br><b>Known Issues</b><br>• When loading the site, you may see the site glitch before completely loading with no loading screen. (26911389)<br>• Scaling may be a problem with certain elements on bigger/smaller resolution devices. (34482888)<br>ㅤ◦ <b>Workaround:</b> Scale up/down the page using zoom. Not available on mobile.<br>• If you scroll down and reload, the loading screen doesn't fade out and is seen fading out at the top of the page. (49867091)<br>• Sometimes when clicking off the game splash screen thing, you would end up viewing a different game's splash screen. (44939979)<br>• On some devices, game descriptions might be too long that they get cut off, and/or the play button, at the bottom of the page.<br>ㅤ◦ <b>Workaround:</b> Scale the page down. Not available on mobile.<br><br><b>Resolved Issues</b><br>• Webpage might scroll while pressing the up or down arrow keys during a game. (63383629)<br>ㅤ◦ <b>Solution:</b> Hide the scroll bar while focused on a game that disables scrolling outside of the iframe.`
    },
    {
        title: "Changelog of v4.0.1",
        date: "8/23/22",
        time: "< 1 min read",
        id: "2",
        text: "This update includes some small changes such as minor bug fixes and security updates. Read below for more details:<br><br><b>Security Updates</b><br>• Removed Adventure Capitalist as GitHub's Dependabot found <b>61 vulnerable dependencies</b> with some being critical.<br>ㅤ◦ I'm aware that this may of been actively exploited.<br><br><b>Changes</b><br>• Changed the scaling on the home page, should look better on smaller/bigger resolution devices.<br>• Fixed a few grammar and spelling errors, but there's still probably a lot more.<br>• Experimenting with a few other scaling things, the site should look a lot better on some devices.<br><br><b>Performance</b><br>• Increased the performance when playing games. This was mainly noticeable for mobile cause it was literal garbage before the update.<br><br><b>Known Issues</b><br>• When loading the site, you may see the site glitch before completely loading with no loading screen. (26911389)<br>• Scaling may be a problem with certain elements on bigger/smaller resolution devices. (34482888)<br>ㅤ◦ <b>Workaround:</b> Scale up/down the page using zoom. Not available on mobile.<br>• If you scroll down and reload, the loading screen doesn't fade out and is seen fading out at the top of the page. (49867091)<br>• Sometimes when clicking off the game splash screen thing, you would end up viewing a different game's splash screen. (44939979)<br>• On some devices, game descriptions might be too long that they get cut off, and/or the play button, at the bottom of the page.<br>ㅤ◦ <b>Workaround:</b> Scale the page down. Not available on mobile.<br>• None of the site icons, including the cloak icons, show up. (52999265)<br><br><b>Resolved Issues</b><br>• Most noticeably on mobile, when you switch to the gamepage after being focused on the iframe, it would not re-show the scrollbar sometimes.(73980552)<br>ㅤ◦ <b>Solution:</b> Make it re-show in the script for going back to the gamepage.",
    },
    // {
    //     title: "",
    //     date: "",
    //     time: "",
    //     id: "",
    //     text: "",
    // },
]

let count = 0
data.forEach(blog => {
    let box = document.getElementsByClassName(`blogBox`)
    let title = document.getElementsByClassName(`blogTitle`)
    let date = document.getElementsByClassName(`blogDate`)

    box[count].onclick = function(){ viewBlog(blog.id) }
    title[count].innerText = blog.title
    date[count].innerText = blog.date

    count++;
})

function viewBlog(blogID){
    console.log("hi")
    for(let i = 0; i < data.length; i++){
        if(data[i].id === blogID){
            document.getElementById("blogPage").style.display = "block"
            document.getElementById("blog").style.display = "none"
            document.getElementById("blog_title").innerText = data[i].title
            document.getElementById("blog_date").innerText = `${data[i].date} • ${data[i].time}`

            document.getElementById("blog_text").innerHTML = data[i].text
        }
    }
}